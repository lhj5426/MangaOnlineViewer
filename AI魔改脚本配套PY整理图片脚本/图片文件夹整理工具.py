import os
import sys
import shutil
import re
from pathlib import Path
from PIL import Image

# ========= 可调节参数区域 =========
# 是否生成每个文件夹的图像统计报告
ENABLE_REPORT = False

# 是否计算并修改文件夹标题添加横纵图多前缀True
ENABLE_ORIENTATION_PREFIX = False

# 是否在移动到“本篇”后重新按顺序编号图片True
ENABLE_RENUMBER_IMAGES = False

# 是否在处理完成后等待用户按键退出True False
WAIT_FOR_KEY_ON_EXIT = False

# TXT模板路径
SOURCE_TXT = r"J:\G\Desktop\biaoqian.txt"

# 支持的图片扩展名
VALID_EXTS = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff', '.ico')
# =================================


# ==================== 第一步：整理相似文件夹 ====================
def normalize_domain_in_name(folder_name):
    """将文件夹名称中的镜像域名统一替换为官方域名 exhentai.org，并格式化为文件夹友好格式"""
    normalized = folder_name
    
    # 情况1: URL 格式 (https://ex.810114.xyz/s/...)
    # 定义需要替换的镜像域名列表
    mirror_domains_url = [
        r'https?://ex\.moonchan\.xyz/',
        r'https?://ex\.810114\.xyz/',
        r'https?://ex\.fangliding\.eu\.org/',
        r'https?://ex\.[\w\-\.]+/',  # 匹配其他 ex.* 域名
    ]
    
    # 将所有镜像域名替换为官方域名
    for mirror in mirror_domains_url:
        normalized = re.sub(mirror, 'https://exhentai.org/', normalized, flags=re.IGNORECASE)
    
    # 将 URL 格式转换为文件夹友好格式：将 :// 和 / 替换为 _
    normalized = re.sub(r'https?://', '', normalized)  # 移除 http:// 或 https://
    normalized = normalized.replace('/', '_')  # 将所有 / 替换为 _
    
    # 情况2: 已经是下划线格式 (ex.810114.xyz_s_...)
    # 匹配并替换镜像域名的下划线格式
    mirror_domains_underscore = [
        r'ex\.moonchan\.xyz_',
        r'ex\.810114\.xyz_',
        r'ex\.fangliding\.eu\.org_',
        r'ex\.[\w\-]+\.[\w\-]+_',  # 匹配其他 ex.*.* 域名
    ]
    
    for mirror in mirror_domains_underscore:
        normalized = re.sub(mirror, 'exhentai.org_', normalized, flags=re.IGNORECASE)
    
    return normalized

def find_cleanest_name(folder_names):
    """从文件夹列表中找出最干净的名字（没有 (数字) 和 _partial 后缀的）"""
    # 先对所有文件夹名称进行域名标准化
    normalized_names = [normalize_domain_in_name(name) for name in folder_names]
    group_key = get_folder_group_key(folder_names[0]) if folder_names else ""
    candidates = []

    for name in normalized_names:
        cleaned_name = strip_folder_suffixes(name)
        if get_folder_group_key(cleaned_name) != group_key:
            continue

        batch_match = re.search(r'-(\d+)$', cleaned_name)
        batch_index = int(batch_match.group(1)) if batch_match else 999999
        is_partial = 1 if '_partial' in name else 0
        has_dup_suffix = 1 if re.search(r'\s*\(\d+\)$', name) else 0
        candidates.append((is_partial, has_dup_suffix, batch_index, cleaned_name))

    if candidates:
        candidates.sort(key=lambda item: (item[0], item[1], item[2], item[3]))
        return candidates[0][3].strip()

    cleaned = strip_folder_suffixes(normalized_names[0])
    return cleaned.strip()

def strip_folder_suffixes(folder_name):
    """去掉 _partial 和 Windows 重复目录后缀 (数字)"""
    cleaned = normalize_domain_in_name(folder_name)
    cleaned = cleaned.replace('_partial', '')
    cleaned = re.sub(r'\s*\(\d+\)$', '', cleaned)
    return cleaned.strip()

def get_folder_group_key(folder_name):
    """提取文件夹分组键：优先按 _<gallery_id>- 这一段分组"""
    normalized_name = strip_folder_suffixes(folder_name)

    # ExHentai 这类命名通常形如:
    # exhentai.org_s_<token>_<gallery_id>-<batch_index>
    # 真正的分组核心是 _<gallery_id>- 这一段里的 gallery_id
    gallery_match = re.search(r'_(\d+)-\d+$', normalized_name)
    if gallery_match:
        return gallery_match.group(1)

    # 兜底：如果没匹配到标准格式，再退回到“去掉末尾批次号”的方案
    batch_stripped = re.sub(r'-\d+$', '', normalized_name)
    return batch_stripped.strip()

def group_folder_paths(folder_paths):
    """按基础名称对多个文件夹分组，同组才会被合并处理"""
    grouped = {}

    for path in folder_paths:
        if not os.path.exists(path) or not os.path.isdir(path):
            continue

        folder_name = os.path.basename(path)
        group_key = get_folder_group_key(folder_name)
        grouped.setdefault(group_key, []).append(path)

    return grouped


def strip_folder_suffixes_v2(folder_name):
    cleaned = normalize_domain_in_name(folder_name)
    cleaned = cleaned.replace('_partial', '')
    gallery_base_match = re.match(r'^(.*_\d+-\d+)', cleaned)
    if gallery_base_match:
        return gallery_base_match.group(1).strip()
    cleaned = re.sub(r'(?:\s*\(\d+\))+$', '', cleaned)
    return cleaned.strip()


def strip_leading_count_prefix(folder_name):
    """去掉开头的数量前缀，仅用于最终父文件夹命名"""
    cleaned = re.sub(r'^\[\d+\]', '', folder_name)
    cleaned = re.sub(r'^「\d+」', '', cleaned)
    return cleaned.strip()


def normalize_single_folder_path(folder_path):
    """单个文件夹时也规范名称：去掉 _partial 和重复后缀 (数字)"""
    if not folder_path or not os.path.exists(folder_path) or not os.path.isdir(folder_path):
        return folder_path

    parent_dir = os.path.dirname(folder_path)
    folder_name = os.path.basename(folder_path)
    normalized_name = strip_folder_suffixes(folder_name)

    if not normalized_name or normalized_name == folder_name:
        return folder_path

    normalized_path = os.path.join(parent_dir, normalized_name)
    if os.path.exists(normalized_path):
        print(f"  ! 跳过重命名，目标已存在：{normalized_name}")
        return folder_path

    os.rename(folder_path, normalized_path)
    print(f"   单文件夹规范化重命名：{folder_name} -> {normalized_name}")
    return normalized_path


def get_folder_group_key_v2(folder_name):
    normalized_name = strip_folder_suffixes_v2(folder_name)
    gallery_match = re.search(r'_(\d+)-\d+$', normalized_name)
    if gallery_match:
        return gallery_match.group(1)
    return re.sub(r'-\d+$', '', normalized_name).strip()


def find_cleanest_name_v2(folder_names):
    if not folder_names:
        return ""

    group_key = get_folder_group_key_v2(folder_names[0])
    candidates = []

    for original_name in folder_names:
        normalized_name = normalize_domain_in_name(original_name)
        cleaned_name = strip_folder_suffixes_v2(original_name)

        if get_folder_group_key_v2(original_name) != group_key:
            continue

        batch_match = re.search(r'-(\d+)$', cleaned_name)
        batch_index = int(batch_match.group(1)) if batch_match else 999999
        is_partial = 1 if '_partial' in normalized_name else 0
        has_dup_suffix = 1 if re.search(r'\s*\(\d+\)$', original_name) else 0
        candidates.append((is_partial, has_dup_suffix, batch_index, cleaned_name))

    if not candidates:
        return strip_folder_suffixes_v2(folder_names[0])

    candidates.sort(key=lambda item: (item[0], item[1], item[2], item[3]))
    return candidates[0][3]


strip_folder_suffixes = strip_folder_suffixes_v2
get_folder_group_key = get_folder_group_key_v2
find_cleanest_name = find_cleanest_name_v2


def organize_similar_folders(folder_paths):
    """接收多个文件夹路径，创建一个父文件夹并移动所有文件夹"""
    if not folder_paths:
        print("没有接收到文件夹")
        return None
    
    folders = []
    parent_dir = None
    
    for path in folder_paths:
        if not os.path.exists(path) or not os.path.isdir(path):
            continue
        
        folder_name = os.path.basename(path)
        if parent_dir is None:
            parent_dir = os.path.dirname(path)
        
        folders.append({'name': folder_name, 'path': path})
    
    if not folders:
        print("没有有效的文件夹")
        return None
    
    folder_names = [f['name'] for f in folders]
    clean_name = strip_leading_count_prefix(find_cleanest_name(folder_names))
    
    print(f"\n检测到基础名称: {clean_name}")
    print(f"将整理 {len(folders)} 个文件夹:\n")
    
    # 显示域名标准化信息
    domain_changed = False
    for f in folders:
        original_name = f['name']
        normalized_name = normalize_domain_in_name(original_name)
        if original_name != normalized_name:
            print(f"  - {original_name}")
            print(f"    → 标准化为: {normalized_name}")
            domain_changed = True
        else:
            print(f"  - {original_name}")
    
    if domain_changed:
        print(f"\n 已将镜像域名统一替换为: exhentai.org (文件夹友好格式)")
    
    temp_parent = os.path.join(parent_dir, clean_name + '_temp_organize')
    os.makedirs(temp_parent, exist_ok=True)
    print(f"\n创建父文件夹: {clean_name}/")
    
    for f in folders:
        dest = os.path.join(temp_parent, f['name'])
        shutil.move(f['path'], dest)
        print(f"   移动 {f['name']}")
    
    final_parent = os.path.join(parent_dir, clean_name)
    
    if os.path.exists(final_parent):
        try:
            shutil.rmtree(final_parent)
        except:
            pass
    
    os.rename(temp_parent, final_parent)
    print(f"\n 完成! 所有文件夹已移动到: {clean_name}/")
    
    return final_parent


# ==================== 第二步：移动子文件夹图片到父文件夹 ====================
def get_all_image_files(folder):
    """递归获取文件夹及其所有子文件夹中的图片文件"""
    image_files = []
    
    for root, dirs, files in os.walk(folder):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in VALID_EXTS:
                image_files.append(os.path.join(root, file))
    
    return image_files

def get_all_txt_files(folder):
    """递归获取文件夹及其所有子文件夹中的 TXT 文件"""
    txt_files = []
    
    for root, dirs, files in os.walk(folder):
        for file in files:
            if os.path.splitext(file)[1].lower() == '.txt':
                txt_files.append(os.path.join(root, file))
    
    return txt_files

def get_unique_txt_dest_path(dest_dir, filename, normalize_duplicate_suffix=False, number_style="plain"):
    """为 TXT 文件生成不覆盖已有文件的目标路径。"""
    base, ext = os.path.splitext(filename)
    
    if normalize_duplicate_suffix:
        clean_base = re.sub(r'(?:\s*[（(]\d+[）)])+$', '', base).strip()
        if clean_base:
            base = clean_base
            filename = f"{base}{ext}"
    
    dest_path = Path(dest_dir) / filename
    index = 1
    
    while dest_path.exists():
        if number_style == "plain":
            dest_path = Path(dest_dir) / f"{base}{index}{ext}"
        else:
            dest_path = Path(dest_dir) / f"{base} ({index}){ext}"
        index += 1
    
    return dest_path

def move_images_from_subfolders(parent_folder):
    """递归将所有子文件夹中的图片和 TXT 移动到父文件夹，然后删除所有子文件夹"""
    parent_path = Path(parent_folder)
    
    if not parent_path.exists():
        print(f"错误：文件夹不存在：{parent_folder}")
        return
    
    print(f"\n处理文件夹：{os.path.basename(parent_folder)}")
    
    subfolders = [f for f in parent_path.iterdir() if f.is_dir()]
    
    if not subfolders:
        print("没有找到子文件夹，跳过此步骤")
        return
    
    total_moved = 0
    total_overwritten = 0
    total_txt_moved = 0
    
    for subfolder in subfolders:
        print(f"  处理子文件夹：{subfolder.name}")
        
        image_files = get_all_image_files(subfolder)
        txt_files = get_all_txt_files(subfolder)
        
        if not image_files:
            print(f"    - 子文件夹中没有图片文件")
        else:
            for img_path in image_files:
                img_name = os.path.basename(img_path)
                dest_path = parent_path / img_name
                
                # 如果文件已存在，直接覆盖
                if dest_path.exists():
                    os.remove(dest_path)
                    total_overwritten += 1
                
                shutil.move(img_path, dest_path)
                total_moved += 1
        
        if txt_files:
            for txt_path in txt_files:
                txt_name = os.path.basename(txt_path)
                dest_path = get_unique_txt_dest_path(
                    parent_path,
                    txt_name,
                    normalize_duplicate_suffix=False,
                    number_style="plain"
                )
                
                try:
                    shutil.move(txt_path, dest_path)
                    total_txt_moved += 1
                except Exception as e:
                    print(f"    - 移动TXT失败：{txt_name} -> {e}")
        
        try:
            shutil.rmtree(subfolder)
            print(f"     已删除子文件夹：{subfolder.name}")
        except Exception as e:
            print(f"     删除子文件夹失败：{e}")
    
    if total_overwritten > 0:
        print(f"\n 完成！共移动 {total_moved} 个图片文件（覆盖了 {total_overwritten} 个重复文件）")
    else:
        print(f"\n 完成！共移动 {total_moved} 个图片文件")
    
    if total_txt_moved > 0:
        print(f"   另移动 {total_txt_moved} 个TXT文件到封面同级目录（同名已自动加序号）")


# ==================== 第三步：本篇格式整理 ====================
def copy_first_image_as_cover(folder_path):
    """复制第一张图片作为 cover.jpg"""
    files = sorted([f for f in os.listdir(folder_path)
                    if os.path.isfile(os.path.join(folder_path, f)) and
                    f.lower().endswith(VALID_EXTS) and not f.lower().startswith("cover")])
    if not files:
        print(f"  ⚠ 文件夹中没有找到可用图片")
        return
    
    first_img = files[0]
    src = os.path.join(folder_path, first_img)
    ext = os.path.splitext(first_img)[1].lower()
    dst = os.path.join(folder_path, "cover.jpg")
    
    if not os.path.exists(dst):
        try:
            if ext in ('.jpg', '.jpeg'):
                shutil.copy(src, dst)
                print(f"   已复制封面图（JPG格式）")
            else:
                with Image.open(src) as img:
                    if img.mode in ('RGBA', 'LA', 'P'):
                        rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                        if img.mode == 'RGBA':
                            rgb_img.paste(img, mask=img.split()[3])
                        elif img.mode == 'LA':
                            rgb_img.paste(img, mask=img.split()[1])
                        else:
                            img = img.convert('RGBA')
                            rgb_img.paste(img, mask=img.split()[3])
                        img = rgb_img
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    img.save(dst, 'JPEG', quality=95)
                print(f"   已转换封面图为 JPG 格式")
        except Exception as e:
            print(f"   复制/转换封面失败：{e}")
    else:
        print(f"  - 封面文件已存在")

def move_images_to_benpian(folder_path):
    """将图片移动到本篇子文件夹并重新编号"""
    benpian = os.path.join(folder_path, "本篇")
    if not os.path.exists(benpian):
        os.makedirs(benpian)
        print(f"   创建子文件夹：本篇/")
    
    files = sorted([f for f in os.listdir(folder_path)
                    if os.path.isfile(os.path.join(folder_path, f)) and
                    f.lower().endswith(VALID_EXTS) and
                    not f.lower().startswith("cover")])
    
    if not files:
        print(f"  ⚠ 没有图片需要移动到本篇文件夹")
        return
    
    for f in files:
        src = os.path.join(folder_path, f)
        dst = os.path.join(benpian, f)
        try:
            shutil.move(src, dst)
        except Exception as e:
            print(f"   移动文件失败：{e}")
    
    print(f"   已将 {len(files)} 张图片移动到本篇/")

    if not ENABLE_RENUMBER_IMAGES:
        print("  - 已关闭图片重新编号，仅移动文件，不修改原文件名")
        return
    
    benpian_files = sorted([f for f in os.listdir(benpian)
                             if os.path.isfile(os.path.join(benpian, f)) and
                             f.lower().endswith(VALID_EXTS)])
    
    for idx, f in enumerate(benpian_files, start=1):
        ext = os.path.splitext(f)[1]
        new_name = f"{idx:04d}{ext}"
        src = os.path.join(benpian, f)
        dst = os.path.join(benpian, new_name)
        try:
            os.rename(src, dst)
        except Exception as e:
            print(f"   重命名失败：{e}")
    
    print(f"   图片已按顺序重新编号（0001-{len(benpian_files):04d}）")

def copy_txt_to_benpian(folder_path):
    """复制标签文件到本篇文件夹"""
    benpian = os.path.join(folder_path, "本篇")
    if not os.path.isdir(benpian):
        print(f"  ⚠ 未找到本篇文件夹")
        return
    
    if not os.path.exists(SOURCE_TXT):
        print(f"  ⚠ 源TXT文件不存在：{SOURCE_TXT}")
        return
    
    dst = get_unique_txt_dest_path(benpian, os.path.basename(SOURCE_TXT))
    try:
        shutil.copy(SOURCE_TXT, dst)
        print(f"   已复制标签文件")
    except Exception as e:
        print(f"   复制TXT失败：{e}")

def generate_report_and_update_orientation(folder_path):
    """生成统计报告并更新方向前缀"""
    total = 0
    horz = 0
    vert = 0
    details = []
    
    for root, dirs, files in os.walk(folder_path):
        for f in files:
            if f.lower().endswith(VALID_EXTS):
                total += 1
                img_path = os.path.join(root, f)
                try:
                    with Image.open(img_path) as img:
                        w, h = img.size
                        orientation = "横向" if w >= h else "纵向"
                        if orientation == "横向":
                            horz += 1
                        else:
                            vert += 1
                        details.append(f"{f} => {w}x{h} => {orientation}")
                except Exception:
                    pass
    
    if ENABLE_ORIENTATION_PREFIX:
        base_name = os.path.basename(folder_path)
        base_name_no_num = re.sub(r'^\[\d+\]', '', base_name).strip()
        base_name_no_orient = re.sub(r'^(横向图多_|纵向图多_)', '', base_name_no_num)
        orient_prefix = "横向图多_" if horz >= vert else "纵向图多_"
        new_name = f"{orient_prefix}{base_name_no_orient}"
        parent = os.path.dirname(folder_path)
        new_folder_path = os.path.join(parent, new_name)
        
        if new_folder_path != folder_path:
            try:
                os.rename(folder_path, new_folder_path)
                print(f"   更新方向前缀：{orient_prefix}")
                folder_path = new_folder_path
            except Exception as e:
                print(f"   更新方向前缀失败：{e}")
    
    if ENABLE_REPORT:
        report_lines = [
            "====== 图像统计报告 ======",
            f"目标文件夹：{folder_path}",
            "",
            f"总图片数：{total}",
            f"横向图片：{horz}",
            f"纵向图片：{vert}",
            "",
            "====== 详细列表 ======"
        ]
        report_lines.extend(details if details else ["（无可用图片）"])
        
        report_filename = f"{os.path.basename(folder_path)}.txt"
        report_path = get_unique_txt_dest_path(folder_path, report_filename)
        try:
            with open(report_path, "w", encoding="utf-8") as f:
                f.write("\n".join(report_lines))
            print(f"   统计报告已生成")
        except Exception as e:
            print(f"   生成报告失败：{e}")
    
    return folder_path

def update_folder_with_numeric_prefix(folder_path):
    """更新文件夹名称添加图片数量前缀"""
    benpian = os.path.join(folder_path, "本篇")
    count = 0
    
    if os.path.isdir(benpian):
        for root, dirs, files in os.walk(benpian):
            for f in files:
                if f.lower().endswith(VALID_EXTS):
                    count += 1
    else:
        print(f"  ⚠ 未找到本篇文件夹，计数为0")
    
    base = os.path.basename(folder_path)
    base_new = strip_leading_count_prefix(base)
    new_name = f"[{count}]{base_new}"
    parent = os.path.dirname(folder_path)
    new_folder_path = os.path.join(parent, new_name)
    
    if new_folder_path != folder_path:
        try:
            os.rename(folder_path, new_folder_path)
            print(f"   更新计数前缀：[{count}]")
            folder_path = new_folder_path
        except Exception as e:
            print(f"   更新计数前缀失败：{e}")
    
    return folder_path

def create_parent_name_txt_marker(folder_path):
    """在 cover.jpg 同级目录生成一个以最终父文件夹名命名的灾备 TXT。"""
    folder_name = os.path.basename(folder_path)
    marker_path = get_unique_txt_dest_path(folder_path, f"{folder_name}.TXT")
    
    try:
        with open(marker_path, "w", encoding="utf-8") as f:
            f.write(folder_name + "\n")
        print(f"   已生成灾备TXT：{os.path.basename(marker_path)}")
    except Exception as e:
        print(f"   生成灾备TXT失败：{e}")

def process_benpian_format(folder_path):
    """处理单个文件夹为本篇格式"""
    print(f"\n处理文件夹：{os.path.basename(folder_path)}")
    copy_first_image_as_cover(folder_path)
    move_images_to_benpian(folder_path)
    copy_txt_to_benpian(folder_path)
    folder_path = generate_report_and_update_orientation(folder_path)
    folder_path = update_folder_with_numeric_prefix(folder_path)
    create_parent_name_txt_marker(folder_path)
    return folder_path


# ==================== 主程序 ====================
def main():
    folder_paths = sys.argv[1:]
    
    if not folder_paths:
        print("请将文件夹拖拽到本脚本上运行！")
        if WAIT_FOR_KEY_ON_EXIT:
            input("按任意键退出...")
        return
    
    print("\n" + "="*60)
    print("图片文件夹整理工具 - 自动化流程")
    print("="*60)
    print(f"接收到 {len(folder_paths)} 个文件夹")
    for idx, fp in enumerate(folder_paths, start=1):
        print(f"  {idx}. {os.path.basename(fp)}")
    print("="*60)
    
    # ========== 第一步：整理相似文件夹（合并） ==========
    print("\n" + ">"*60)
    print("【第一步】整理相似文件夹 - 合并多个文件夹")
    print(">"*60)
    
    merged_folder = None
    
    if len(folder_paths) > 1:
        # 检查是否有相似的文件夹名称
        folder_names = [os.path.basename(fp) for fp in folder_paths]
        clean_name = find_cleanest_name(folder_names)
        
        # 检查是否需要合并（有相似名称或多个文件夹）
        need_merge = False
        for name in folder_names:
            if name != clean_name and (re.search(r'\(\d+\)$', name) or name.endswith('_partial')):
                need_merge = True
                break
        
        if need_merge or len(folder_paths) > 1:
            merged_folder = organize_similar_folders(folder_paths)
            if merged_folder:
                print(f"\n 第一步完成：已合并为 {os.path.basename(merged_folder)}/")
            else:
                print("\n 第一步失败：无法合并文件夹")
                return
        else:
            print("只有一个文件夹，跳过合并步骤")
            merged_folder = normalize_single_folder_path(folder_paths[0])
    else:
        print("只有一个文件夹，跳过合并步骤")
        merged_folder = normalize_single_folder_path(folder_paths[0])
    
    if not merged_folder or not os.path.exists(merged_folder):
        print("\n 错误：没有可处理的文件夹")
        return
    
    # ========== 第二步：移动子文件夹图片到父文件夹 ==========
    print("\n" + ">"*60)
    print("【第二步】移动子文件夹图片到父文件夹")
    print(">"*60)
    
    move_images_from_subfolders(merged_folder)
    print(f"\n 第二步完成：所有子文件夹图片已移动到主文件夹")
    
    # ========== 第三步：本篇格式整理 ==========
    print("\n" + ">"*60)
    print("【第三步】本篇格式整理 - 创建封面和本篇子文件夹")
    print(">"*60)
    
    final_folder = process_benpian_format(merged_folder)
    print(f"\n 第三步完成：本篇格式整理完成")
    
    # ========== 完成 ==========
    print("\n" + "="*60)
    print(" 全部流程完成！")
    print("="*60)
    print(f"最终文件夹：{os.path.basename(final_folder)}")
    print("="*60)
    
    if WAIT_FOR_KEY_ON_EXIT:
        input("\n按任意键退出...")
    else:
        print("\n静默模式：自动退出")

def main_v2():
    folder_paths = sys.argv[1:]

    if not folder_paths:
        print("请将文件夹拖拽到本脚本上运行")
        if WAIT_FOR_KEY_ON_EXIT:
            input("按任意键退出...")
        return

    print("\n" + "=" * 60)
    print("图片文件夹整理工具 - 自动分组流程")
    print("=" * 60)
    print(f"接收到 {len(folder_paths)} 个文件夹")
    for idx, fp in enumerate(folder_paths, start=1):
        print(f"  {idx}. {os.path.basename(fp)}")
    print("=" * 60)

    grouped_paths = group_folder_paths(folder_paths)
    if not grouped_paths:
        print("\n错误：没有可处理的有效文件夹")
        return

    print(f"\n自动识别为 {len(grouped_paths)} 组：")
    for idx, (group_key, paths) in enumerate(grouped_paths.items(), start=1):
        print(f"  第 {idx} 组 -> {group_key}")
        for path in paths:
            print(f"    - {os.path.basename(path)}")

    final_folders = []

    for group_index, (group_key, current_group_paths) in enumerate(grouped_paths.items(), start=1):
        print("\n" + "#" * 60)
        print(f"开始处理第 {group_index} 组：{group_key}")
        print("#" * 60)

        print("\n" + ">" * 60)
        print("【第一步】整理相似文件夹 - 仅合并当前组")
        print(">" * 60)

        if len(current_group_paths) > 1:
            merged_folder = organize_similar_folders(current_group_paths)
            if merged_folder:
                print(f"\n 第一步完成：已合并为 {os.path.basename(merged_folder)}/")
            else:
                print("\n 第一步失败：无法合并当前组文件夹")
                continue
        else:
            print("当前组只有一个文件夹，跳过合并步骤")
            merged_folder = normalize_single_folder_path(current_group_paths[0])

        if not merged_folder or not os.path.exists(merged_folder):
            print("\n 错误：当前组没有可处理的文件夹")
            continue

        print("\n" + ">" * 60)
        print("【第二步】移动子文件夹图片到父文件夹")
        print(">" * 60)
        move_images_from_subfolders(merged_folder)
        print("\n 第二步完成：当前组子文件夹图片已移动到主文件夹")

        print("\n" + ">" * 60)
        print("【第三步】本篇格式整理 - 创建封面和本篇子文件夹")
        print(">" * 60)
        final_folder = process_benpian_format(merged_folder)
        final_folders.append(final_folder)
        print("\n 第三步完成：当前组本篇格式整理完成")

    print("\n" + "=" * 60)
    print("===== 全部流程完成！=====")
    print("=" * 60)
    if final_folders:
        print("最终文件夹：")
        for folder in final_folders:
            print(f"  - {os.path.basename(folder)}")
    else:
        print("没有成功处理任何文件夹")
    print("=" * 60)

    if WAIT_FOR_KEY_ON_EXIT:
        input("\n按任意键退出...")
    else:
        print("\n静默模式：自动退出")

if __name__ == "__main__":
    main_v2()
