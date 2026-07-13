// ==UserScript==
// @name          Manga OnlineViewer Adult 260714AI魔改 启动按钮上显示批次
// @author        Tago
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.07.14
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/tinycolor2@1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/sweetalert2-neutral@11.22.2-neutral/dist/sweetalert2.all.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/ex\.810114\.xyz\/s\/.+\/.+/
// @include       /https?:\/\/ex\.moonchan\.xyz\/s\/.+\/.+/
// @include       /https?:\/\/ex\.fangliding\.eu\.org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// ==/UserScript==
(function () {
  'use strict';

  function isEmpty(value) {
    return (
      value === null || // Check for null
      typeof value === 'undefined' ||
      value === void 0 || // Check for undefined
      (typeof value === 'string' && value === '') || // Check for empty string
      (Array.isArray(value) && value.length === 0) || // Check for empty array
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }
  function isNothing(value) {
    const isEmptyObject = a => {
      if (!Array.isArray(a)) {
        const hasNonempty = Object.keys(a).some(element => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      return !a.some(element => element instanceof Promise || !isNothing(element));
    };
    return (
      !value || value === 0 || isEmpty(value) || (typeof value === 'object' && isEmptyObject(value))
    );
  }

  function isImagesManga(manga) {
    return 'listImages' in manga && !isNothing(manga.listImages);
  }
  function isPagesManga(manga) {
    return 'listPages' in manga && !isNothing(manga.listPages);
  }
  function isBruteforceManga(manga) {
    return 'bruteForce' in manga && !isNothing(manga.bruteForce);
  }

  var Language = /* @__PURE__ */ (Language2 => {
    Language2['ENGLISH'] = 'English';
    Language2['SPANISH'] = 'Spanish';
    Language2['PORTUGUESE'] = 'Portuguese';
    Language2['CHINESE'] = 'Chinese';
    Language2['RAW'] = 'Raw';
    return Language2;
  })(Language || {});
  var Category = /* @__PURE__ */ (Category2 => {
    Category2['MANGA'] = 'manga';
    Category2['COMIC'] = 'comic';
    Category2['HENTAI'] = 'hentai';
    return Category2;
  })(Category || {});

  function isKey(obj, key) {
    return key in obj;
  }

  const threehentai = {
    name: ['3Hentai', 'HentaiVox'],
    url: /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,
    homepage: ['https://3hentai.net/', 'https://hentaivox.com/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'readerPages',
    run() {
      return {
        title: unsafeWindow.readerPages.title.replace(/- Page.+/, '').trim(),
        series: unsafeWindow.readerPages.baseUri.replace('%s', ''),
        pages: unsafeWindow.readerPages.lastPage,
        prev: '#',
        next: '#',
        listImages: Object.keys(unsafeWindow.readerPages.pages).map(img =>
          unsafeWindow.readerPages.baseUriImg.replace('%s', unsafeWindow.readerPages.pages[img].f),
        ),
      };
    },
  };

  function waitForElm(selector, target = document.body) {
    return new Promise(resolve => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = document.querySelector(selector);
        if (observedElement) {
          resolve(observedElement);
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForFunc(fn, timer = 250) {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (fn()) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, timer);
    });
  }
  function waitForAtb(selector, attribute, target = document.body) {
    return new Promise(resolve => {
      const element = target.querySelector(selector);
      if (element?.getAttribute(attribute)) {
        resolve(element.getAttribute(attribute) ?? '');
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = target.querySelector(selector);
        if (observedElement?.getAttribute(attribute)) {
          resolve(observedElement.getAttribute(attribute) ?? '');
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [attribute],
      });
    });
  }
  function waitForVar(name, target = document.body) {
    return new Promise(resolve => {
      if (!isNothing(unsafeWindow[name])) {
        resolve(unsafeWindow[name]);
        return;
      }
      const observer = new MutationObserver(() => {
        if (!isNothing(unsafeWindow[name])) {
          resolve(unsafeWindow[name]);
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForTimer(millis = 1e3, result) {
    return new Promise(resolve => {
      setTimeout(() => resolve(result), millis);
    });
  }
  async function waitWithTimer(promise, timer = 1e3) {
    const [result] = await Promise.all([promise, waitForTimer(timer)]);
    return result;
  }
  async function waitWithTimeout(promise, timeout = 5e3) {
    return Promise.race([promise, waitForTimer(timeout, false)]);
  }

  async function bruteforce(
    resetPosition,
    quantPages,
    nextSelector,
    targetSelector,
    imageSelector = 'img',
    imageAttribute = 'src',
  ) {
    const div = document.createElement('div');
    div.setAttribute(
      'style',
      'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
    );
    document.body.append(div);
    resetPosition();
    const next = document.querySelector(nextSelector);
    const target = document.querySelector(targetSelector);
    const src = [];
    for (let i = 1; i <= quantPages; i += 1) {
      src[i - 1] = await waitWithTimer(
        waitForAtb(imageSelector, imageAttribute, target ?? document.body),
        100,
      );
      target?.querySelector(imageSelector)?.removeAttribute(imageAttribute);
      next?.dispatchEvent(new Event('click'));
    }
    return src;
  }

  const eightMuses = {
    name: ['8Muses.com', '8Muses.io'],
    obs: 'Slow start, bruteforce may be required',
    url: /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,
    homepage: ['https://comics.8muses.com/', 'https://8muses.io/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const img = unsafeWindow.link_images?.slice(1, unsafeWindow.link_images.length) ?? [];
      const count = document
        .querySelector('link[rel="last"]')
        ?.getAttribute('href')
        ?.match(/\d+$/)
        ?.at(0);
      const num = img?.length ?? parseInt(count ?? '0', 10);
      const manga = {
        title: [...document.querySelectorAll('.top-menu-breadcrumb li:not(:last-child)')]
          .map(e => e?.textContent?.trim())
          .join('/'),
        series: document
          .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
          ?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        lazy: false,
        timer: 10,
        listImages: img,
        async before() {
          if (!unsafeWindow.link_images?.length) {
            manga.listImages = await bruteforce(
              () => {
                const prev = document.querySelector('.page-prev');
                while (
                  document.querySelector('.c-dropdown-toggle')?.textContent?.match(/\d+/)?.at(0) !==
                  '1'
                ) {
                  prev?.dispatchEvent(new Event('click'));
                }
              },
              num,
              '.page-next',
              '.p-picture',
              '.photo img',
              'src',
            );
          }
        },
      };
      return manga;
    },
  };

  const ninehentai = {
    name: '9Hentai',
    url: /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,
    homepage: 'https://9hentai.so',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['#jumpPageModal input', 'max'],
    async run() {
      const data = { id: parseInt(/\d+/.exec(window.location.pathname)?.at(0) ?? '0', 10) };
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const api = await fetch('/api/getBookByID', options).then(async res => res.json());
      return {
        title: api.results.title,
        series: `/g/${api.results.id}/`,
        pages: api.results.total_page,
        prev: '#',
        next: '#',
        listImages: Array(api.results.total_page)
          .fill(0)
          .map(
            (_, i) =>
              `${api.results.image_server.replace('.com', '.so') + api.results.id}/${i + 1}.jpg`,
          ),
      };
    },
  };

  const akumamoe = {
    name: 'AkumaMoe',
    url: /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,
    homepage: 'https://akuma.moe',
    language: [Language.RAW],
    category: Category.HENTAI,
    waitFunc: () =>
      unsafeWindow.img_lst?.length ===
      document.querySelectorAll('.reader-nav:first-child .nav-select option')?.length,
    async run() {
      return {
        title: document
          .querySelector('h1.sr-only')
          ?.textContent?.trim()
          .replace(/^Reading /, ''),
        series: `https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,
        pages: unsafeWindow.img_lst.length,
        prev: '#',
        next: '#',
        listImages: unsafeWindow.img_lst.map(img => `${unsafeWindow.img_prt}/${img}`),
      };
    },
  };

  const bestporncomix = {
    name: 'BestPornComix',
    url: /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,
    homepage: 'https://www.bestporncomix.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitTime: 5e3,
    run() {
      const images = [...document.querySelectorAll('figure a')];
      return {
        title: document.querySelector('h1.entry-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('href') ?? ''),
      };
    },
  };

  const doujinmoe = {
    name: 'DoujinMoeNM',
    url: /https?:\/\/(www\.)?doujins.com\/.+/,
    homepage: 'https://doujins.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.doujin',
    run() {
      const images = [...document.querySelectorAll('.doujin')];
      return {
        title: document.querySelector('.folder-title a:last-child')?.textContent?.trim(),
        series: document.querySelector('.folder-title a:nth-last-child(2)')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('data-file') ?? ''),
      };
    },
  };

  const dragontranslation = {
    name: 'Dragon Translation',
    url: /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,
    homepage: 'https://dragontranslation.net/es',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: '#chapter_imgs img',
    run() {
      const images = [...document.querySelectorAll('#chapter_imgs img')]
        .map(img => img.getAttribute('src') ?? '')
        .filter(src => src && src !== '/discord2.jpg');
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        series: document.querySelector('h2 + div a')?.getAttribute('href'),
        pages: images.length,
        prev: document
          .querySelector('.fa-chevron-circle-left')
          ?.parentElement?.getAttribute('href'),
        next: document
          .querySelector('.fa-chevron-circle-right')
          ?.parentElement?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const exhentai = {
    name: ['ExHentai', 'e-Hentai', 'ExHentai镜像'],
    url: /https?:\/\/((g\.)?(exhentai|e-hentai).org|ex\.810114\.xyz|ex\.moonchan\.xyz|ex\.fangliding\.eu\.org)\/s\/.+\/.+/,
    homepage: ['https://exhentai.org/', 'https://e-hentai.org/', 'https://ex.810114.xyz/'],
    language: [Language.ENGLISH],
    obs: 'May get your IP Banned, use with moderation',
    category: Category.HENTAI,
    async run() {
      const num = parseInt(
        document.querySelector('.sn div span:nth-child(2)')?.textContent ?? '0',
        10,
      );
      const maxGalley = Math.ceil(num / 20);
      const gallery = document
        .querySelector('.sb a')
        ?.getAttribute('href')
        ?.replace(/\?p=\d+/, '');
      const fetchBlocks = Array(maxGalley)
        .fill(0)
        .map(async (_, galleryId) =>
          fetch(`${gallery}?p=${galleryId}`)
            .then(async res => res.text())
            .then(html => new DOMParser().parseFromString(html, 'text/html')),
        );
      const data = await Promise.all(fetchBlocks);
      const pages = data.flatMap(html =>
        [...html.querySelectorAll('#gdt a')].map(item => item.getAttribute('href') ?? ''),
      );
      return {
        title: document.querySelector('#i1 h1')?.textContent?.trim(),
        series: gallery,
        pages: num,
        begin: parseInt(document.querySelector('div#i2 span')?.textContent ?? '1', 10),
        prev: '#',
        next: '#',
        listPages: pages,
        img: '#img',
        lazy: false,
        async reload(page) {
          const oldUrl = `${pages[page - 1]}`;
          const slug = await fetch(oldUrl)
            .then(res => res.text())
            .then(html => /nl\('([\d-]+)'\)/.exec(html)?.[1]);
          const newUrl = `${oldUrl}${oldUrl.indexOf('?') ? '&' : '?'}nl=${slug}`;
          return fetch(newUrl)
            .then(res => res.text())
            .then(
              html =>
                new DOMParser()
                  ?.parseFromString(html, 'text/html')
                  ?.querySelector('#img')
                  ?.getAttribute('src') ?? '',
            );
        },
      };
    },
  };

  const freeadultcomix = {
    name: 'FreeAdultComix',
    url: /https?:\/\/(www\.)?freeadultcomix.com\/.+/,
    homepage: 'https://www.freeadultcomix.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitTime: 5e3,
    run() {
      const images = [...document.querySelectorAll('.foto img')];
      return {
        title: document.querySelector('.post-conteudo h1')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const fsicomics = {
    name: 'FSIComics',
    url: /https?:\/\/(www\.)?fsicomics.com\/.+/,
    homepage: 'https://fsicomics.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images = [...document.querySelectorAll('.wp-block-gallery img')];
      return {
        title: document.querySelector('.s-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('data-large-file') ?? ''),
      };
    },
  };

  const gntai = {
    name: 'GNTAI.net',
    url: /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,
    homepage: 'https://www.gntai.net/',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const images =
        document
          .querySelector('#main > script')
          ?.innerHTML.match(/var pages = [^;]+/)
          ?.at(0)
          ?.toString()
          .match(/https?[^"]+/g) ?? [];
      return {
        title: document.querySelector('.entry-header h1')?.textContent?.trim(),
        pages: images?.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const hentai2read = {
    name: 'Hentai2Read',
    url: /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,
    homepage: 'https://hentai2read.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      return {
        title: document.querySelector('.reader-left-text')?.textContent?.trim(),
        series: unsafeWindow.gData.mainURL,
        pages: unsafeWindow.gData.images.length,
        prev: unsafeWindow.gData.previousURL,
        next: unsafeWindow.gData.nextURL,
        listImages: unsafeWindow.gData.images.map(i => `https://static.hentaicdn.com/hentai${i}`),
      };
    },
  };

  const hentaiera = {
    name: 'HentaiEra',
    url: /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,
    homepage: 'https://hentaiera.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '0', 10);
      return {
        title: document
          .querySelector('h1')
          ?.textContent?.trim()
          .replace(/ - Page .+$/, ''),
        series: document.querySelector('.return_btn ')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listPages: Array(num)
          .fill(0)
          .map((_, i) => window.location.href.replace(/\/\d*\/?$/, `/${i + 1}`)),
        img: '#gimg',
        lazyAttr: 'data-src',
      };
    },
  };

  const hentaiforce = {
    name: 'HentaiForce',
    url: /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,
    homepage: 'https://hentaiforce.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      return {
        title: document
          .querySelector('h1')
          ?.textContent?.trim()
          .replace(/ - Page .+$/, ''),
        series: document.querySelector('.reader-go-back ')?.getAttribute('href'),
        pages: unsafeWindow.readerPages.lastPage,
        prev: '#',
        next: '#',
        listImages: Array(unsafeWindow.readerPages.lastPage)
          .fill(0)
          .map((_, i) =>
            unsafeWindow.readerPages.baseUriImg
              .replace('%c', unsafeWindow.readerPages.pages[i + 1].l)
              .replace('%s', unsafeWindow.readerPages.pages[i + 1].f),
          ),
      };
    },
  };

  const objectURLRegex = /^blob:(.+?)\/(.+)$/;
  function getDataFromBase64(src) {
    return src.slice(src.indexOf(';base64,') + 8);
  }
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif|svg)/;
    return base64Pattern.test(imageUrl);
  }
  function isObjectURL(url) {
    return objectURLRegex.test(url);
  }
  function base64ToBytes(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }
  function getExtension(url) {
    const parts = url.split('?');
    const filename = parts[0].split('/').pop();
    const extensionMatch = filename?.match(/\.[A-Za-z]{2,4}$/);
    return extensionMatch ? extensionMatch[0].slice(1) : '';
  }
  const getExtensionBase64 = base64 => {
    const c = base64.substring(base64.indexOf('/') + 1, base64.indexOf(';base64'));
    switch (c) {
      case '/':
        return 'jpg';
      case 'R':
        return 'gif';
      case 'U':
        return 'webp';
      // case 'i':
      default:
        return 'png';
    }
  };
  function extensionByCode(c) {
    switch (c) {
      case 'p':
        return 'png';
      case 'b':
        return 'bmp';
      case 'g':
        return 'gif';
      case 'w':
        return 'webp';
      // case 'j':
      default:
        return 'jpg';
    }
  }

  const hentaifox = {
    name: 'HentaiFox',
    url: /https?:\/\/(www\.)?hentaifox.com\/g\/.+/,
    homepage: 'https://www.hentaifox.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'g_th',
    waitFunc: () => document.querySelector('#gimg')?.classList.contains('loaded') ?? false,
    run() {
      const num = parseInt(document.querySelector('.total_pages')?.textContent ?? '', 10);
      const src =
        document
          .querySelector('#gimg')
          ?.getAttribute('src')
          ?.replace(/\d+.\w+$/, '') ?? '';
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/ - Page .+/, '')
          .trim(),
        series: document.querySelector('.browse_buttons a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map((_, i) => `${src + (i + 1)}.${extensionByCode(unsafeWindow.g_th[i + 1][0])}`),
      };
    },
  };

  const hentaihand = {
    name: ['HentaiHand', 'nHentai.com'],
    url: /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,
    homepage: ['https://hentaihand.com/', 'https://nhentai.com'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.reader img',
    run() {
      const images = [...document.querySelectorAll('.reader img')];
      return {
        title: document.querySelector('.reader-header h5')?.textContent?.trim(),
        series: document.querySelector('.reader-header h5 a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(
          img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
        ),
      };
    },
  };

  const hentaihere = {
    name: 'HentaIHere',
    url: /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,
    homepage: 'https://www.hentaihere.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'rff_imageList',
    run() {
      const src = document
        .querySelector('#arf-reader-img')
        ?.getAttribute('src')
        ?.replace(/\d.+/, '');
      return {
        title: unsafeWindow.rff_pageTitle.replace(/.+\|/, '').trim(),
        series: unsafeWindow.rff_thisManga,
        pages: unsafeWindow.rff_imageList.length,
        prev: unsafeWindow.rff_previousChapter,
        next: unsafeWindow.rff_nextChapter,
        listImages: unsafeWindow.rff_imageList.map(img => src + img),
      };
    },
  };

  const hentainexus = {
    name: 'HentaiNexus',
    url: /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,
    homepage: 'https://hentainexus.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images =
        unsafeWindow.pageData?.map(i => i.image) ?? unsafeWindow.images?.map(i => i.url);
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/^\[[\d/]+\]/, '')
          .trim(),
        series: document.querySelector('#returnGalleryFooter a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const hentalk = {
    name: 'HenTalk',
    url: /https?:\/\/(www.)?hentalk.pw/,
    homepage: 'https://hentalk.pw/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const cdn = 'https://hentalk.pw';
      const api = await fetch(
        `${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`,
      )
        .then(async res => res.json())
        .then(j => j.nodes[2].data);
      const gallery = api?.[api.find(e => e?.gallery)?.gallery];
      const slug = api?.[gallery?.hash] || api?.[api.find(e => e?.hash && e?.id).hash];
      const images = api?.[gallery.images].map(i => api[i]).map(i => api[i.filename]);
      return {
        title: api?.[gallery.title],
        series: window.location.href.replace(/read\/.+/, ''),
        pages: images?.length,
        prev: '#',
        next: '#',
        listImages: images?.map(src => `${cdn}/image/${slug}/${src}`),
      };
    },
  };

  const hitomi = {
    name: 'Hitomi',
    url: /https?:\/\/hitomi.la\/reader\/.+/,
    homepage: 'https://hitomi.la/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['#comicImages img', 'src'],
    waitVar: 'galleryinfo',
    run() {
      return {
        title: document.querySelector('title')?.textContent?.replace('| Hitomi.la', '').trim(),
        series: document.querySelector('.brand')?.getAttribute('href'),
        pages: unsafeWindow.galleryinfo.files.length,
        prev: '#',
        next: '#',
        listImages: unsafeWindow.galleryinfo.files.map(file =>
          unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo, file, 'webp'),
        ),
      };
    },
  };

  const imhentai = {
    name: 'Imhentai',
    url: /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,
    homepage: 'https://imhentai.xxx/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitVar: 'g_th',
    async run() {
      const galleryId = document.querySelector('#gallery_id')?.getAttribute('value');
      const imageDir = document.querySelector('#image_dir')?.getAttribute('value');
      const num = parseInt(document.querySelector('#pages')?.getAttribute('value') ?? '', 10);
      const randomServer = await waitForVar('random_server');
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.return_btn')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map(
            (_, i) =>
              `//${randomServer}/${imageDir}/${galleryId}/${i + 1}.${extensionByCode(
                unsafeWindow.g_th[i + 1][0],
              )}`,
          ),
      };
    },
  };

  const kingcomix = {
    name: ['KingComix', 'Chochox', 'Comics18'],
    url: /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,
    homepage: ['https://kingcomix.com/', 'https://chochox.com/porno/', 'https://comics18.org/'],
    language: [Language.ENGLISH, Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const src = [
        ...document.querySelectorAll('figure img, .entry-content img:not(a img), .wp-content img'),
      ];
      return {
        title: document.querySelector('h1.singleTitle-h1')?.textContent?.trim(),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src.map(
          img =>
            img.getAttribute('data-src') ??
            img.getAttribute('data-full-url') ??
            img.getAttribute('data-lazy-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const luscious = {
    name: 'Luscious',
    url: /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,
    homepage: 'https://luscious.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '.album-info div',
    async run() {
      const num = parseInt(
        document
          .querySelector('input[name="page_number"] + span')
          ?.textContent?.match(/\d+/)
          ?.pop() ?? '0',
        10,
      );
      const totalBlocks = Math.ceil(num / 50);
      const id = parseInt(
        document
          .querySelector('.album-heading a')
          ?.getAttribute('href')
          ?.match(/\d+\//)
          ?.toString() ?? '0',
        10,
      );
      const query =
        '&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20';
      const fetchBlocks = Array(totalBlocks)
        .fill(0)
        .map(async (_, block) => {
          const url = `https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${id}"}],"display":"position","items_per_page":50,"page":${block + 1}}}${query}`;
          return GM.xmlHttpRequest({
            method: 'GET',
            url,
          }).then(res => JSON.parse(res.responseText));
        });
      const data = await Promise.all(fetchBlocks);
      const images = data.flatMap(res =>
        res.data.picture.list.items.map(img => img.url_to_original),
      );
      return {
        title: document.querySelector('.album-heading a')?.textContent?.trim(),
        series: document.querySelector('.album-heading a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;
  function findImages() {
    return [
      ...document.querySelectorAll(
        '.wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img',
      ),
    ].map(img => {
      const attrs = [...img.attributes].filter(
        attr => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|load).*$/.test(attr.value),
      );
      if (attrs.length === 0) return '';
      return (
        attrs.find(attr => imageRegex.test(attr.value))?.value ?? img?.getAttribute('src') ?? ''
      );
    });
  }
  const madarawp = {
    name: [
      'Madara WordPress Plugin',
      'MangaHaus',
      'Isekai Scan',
      'Comic Kiba',
      'Zinmanga',
      'mangatx',
      'Toonily',
      'Mngazuki',
      'JaiminisBox',
      'DisasterScans',
      'ManhuaPlus',
      'TopManhua',
      'NovelMic',
      'Reset-Scans',
      'LeviatanScans',
      'Dragon Tea',
      'SetsuScans',
      'ToonGod',
    ],
    url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,
    homepage: [
      'https://mangabooth.com/',
      'https://manhuaus.com',
      'https://isekaiscan.com/',
      'https://comickiba.com/',
      'https://zinmanga.com/',
      'https://mangatx.com/',
      'https://toonily.net/',
      'https://mangazuki.me/',
      'https://jaiminisbox.net',
      'https://disasterscans.com/',
      'https://manhuaplus.org/',
      'https://www.topmanhua.com/',
      'https://novelmic.com/',
      'https://reset-scans.com/',
      'https://leviatanscans.com/',
      'https://dragontea.ink/',
      'https://setsuscans.com/',
      'https://toongod.org/home/',
    ],
    language: [Language.ENGLISH],
    obs: 'Any Site that uses Madara WordPress Plugin',
    category: Category.MANGA,
    waitFunc: () => {
      const images = findImages();
      return images.length > 0 && images.every(s => s && imageRegex.test(s));
    },
    run() {
      const images = findImages();
      return {
        title: document.querySelector('#chapter-heading')?.textContent?.trim(),
        series: (
          document.querySelector('.breadcrumb li:nth-child(3) a') ??
          document.querySelector('.breadcrumb li:nth-child(2) a')
        )?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.prev_page')?.getAttribute('href'),
        next: document.querySelector('.next_page')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const madarawph = {
    ...madarawp,
    name: ['Madara WordPress Plugin', 'AllPornComic', 'Manytoon', 'Manga District'],
    url: /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,
    homepage: [
      '#',
      'https://allporncomic.com/',
      'https://manytoon.com/',
      'https://mangadistrict.com/',
    ],
    category: Category.HENTAI,
  };

  const multporn = {
    name: 'MultPorn',
    url: /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,
    homepage: 'https://multporn.net/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    // WaitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
    async run() {
      const url =
        document.head.textContent
          ?.match(/"configUrl":"(.+?)",/)
          ?.at(1)
          ?.replaceAll('\\', '') ?? '';
      const api = await fetch(url)
        .then(async res => res.text())
        .then(html => new DOMParser().parseFromString(html, 'text/xml'));
      const images = [...api.querySelectorAll('image')];
      return {
        title: document.querySelector('#page-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('imageURL') ?? ''),
      };
    },
  };

  const myhentaigallery = {
    name: 'MyHentaiGallery',
    url: /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,
    homepage: 'https://www.myhentaigallery.com',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const lastPage = document
        .getElementById('js__pagination__next')
        ?.parentElement?.previousElementSibling?.querySelector('a');
      const num = parseInt(lastPage?.textContent ?? '', 10);
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.back-to-gallery a')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listPages: Array(num)
          .fill(0)
          .map((_, i) => window.location.href.replace(/\/\d+$/, `/${i + 1}`)),
        img: '.gallery-slide img',
      };
    },
  };

  const nhentainet = {
    name: ['nHentai.net', 'nHentai.xxx', 'lhentai'],
    url: /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,
    homepage: ['https://nhentai.net/', 'https://nhentai.xxx/', 'https://lhentai.com/'],
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const num = parseInt(document.querySelector('.num-pages')?.textContent ?? '', 10);
      const src = document
        .querySelector('#image-container img')
        ?.getAttribute('src')
        ?.replace(/\d+.\w+$/, '');
      const ext = unsafeWindow._gallery?.images?.pages?.map(i => extensionByCode(i.t));
      return {
        title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
        series: document.querySelector('.go-back')?.getAttribute('href'),
        pages: num,
        prev: '#',
        next: '#',
        listImages: Array(num)
          .fill(0)
          .map((_, i) => `${src}${i + 1}.${ext[i]}`),
      };
    },
  };

  const porncomicshd = {
    name: 'PornComicsHD',
    url: /https?:\/\/(www\.)?porncomicshd.com\/es.*/,
    homepage: 'https://porncomicshd.com/es',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: 'app-comic-reader img',
    async run() {
      const img = [...document.querySelectorAll('app-comic-reader img')];
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        pages: img.length,
        prev: '#',
        next: '#',
        lazy: false,
        listImages: img.map(i => i.getAttribute('src') ?? ''),
      };
    },
  };

  const pururin = {
    name: 'Pururin',
    url: /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,
    homepage: 'https://pururin.me/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitAttr: ['.img-viewer img', 'src'],
    run() {
      const src = document.querySelector('.img-viewer img')?.getAttribute('src') ?? '';
      const num = [...document.querySelectorAll('.img-select option')];
      return {
        title: document.querySelector('.title')?.textContent?.trim(),
        series: document.querySelector('.breadcrumb-item:nth-child(4) a')?.getAttribute('href'),
        pages: num.length,
        prev: '#',
        next: '#',
        listImages: num.map((_, i) => src.replace(/\/\d+\./, `/${i + 1}.`)),
      };
    },
  };

  const schalenetwork = {
    name: 'SchaleNetwork',
    url: /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,
    homepage: 'https://schale.network/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: 'nav select option',
    async run() {
      const gallery = history.state.memo.gallery;
      const size = gallery.resolution;
      const { base, entries } = history.state.memo.data;
      const src = entries.map(image => `${base}/${image.path}?w=${size}`);
      return {
        title: gallery.title,
        series: `/g/${gallery.id}/${gallery.key}/`,
        pages: src.length,
        prev: '#',
        next: '#',
        fetchOptions: {
          method: 'GET',
          redirect: 'follow',
        },
        listImages: src,
      };
    },
  };

  const simplyhentai = {
    name: 'Simply-Hentai',
    url: /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,
    homepage: 'https://simply-hentai.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    waitEle: '#__NEXT_DATA__',
    async run() {
      const json = JSON.parse(document.querySelector('#__NEXT_DATA__')?.innerHTML ?? '');
      const images = json.props.pageProps.data.pages.map(img => img.sizes.full);
      return {
        title: document.querySelector('.content-headline a')?.textContent?.trim(),
        series: document.querySelector('.content-headline a')?.getAttribute('href'),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images,
      };
    },
  };

  const tmohhentai = {
    name: 'TMOHentai',
    url: /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,
    homepage: 'https://tmohentai.com/',
    language: [Language.SPANISH],
    category: Category.HENTAI,
    run() {
      const src = [...document.querySelectorAll('.content-image')].map(
        i => i.getAttribute('data-original') ?? i.getAttribute('src') ?? '',
      );
      return {
        before() {
          if (window.location.pathname.includes('paginated')) {
            window.location.pathname = window.location.pathname.replace(/paginated.*/, 'cascade');
          }
        },
        title: document.querySelector('.reader-title')?.textContent?.trim(),
        series: document.querySelector('.nav-justified li a')?.getAttribute('href'),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src,
      };
    },
  };

  const tsumino = {
    name: 'Tsumino',
    url: /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,
    homepage: 'https://tsumino.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const dataopt = document.querySelector('#image-container')?.getAttribute('data-opt');
      const datacdn = document.querySelector('#image-container')?.getAttribute('data-cdn') ?? '';
      const url = `https://www.tsumino.com/Read/Load?q=${dataopt}`;
      const api = await fetch(url).then(async res => res.json());
      return {
        title: document
          .querySelector('title')
          ?.textContent?.replace(/.+Read/, '')
          .trim(),
        series: api.reader_start_url,
        pages: api.reader_page_total,
        prev: '#',
        next: '#',
        listImages: Array(api.reader_page_total)
          .fill(0)
          .map((_, i) => datacdn.replace('[PAGE]', `${i + 1}`)),
      };
    },
  };

  const vercomicsporno = {
    name: ['vermangasporno', 'vercomicsporno'],
    url: /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,
    homepage: ['https://vermangasporno.com/', 'https://vercomicsporno.com/'],
    language: [Language.SPANISH],
    category: Category.HENTAI,
    waitEle: 'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
    run() {
      const images = [
        ...document.querySelectorAll(
          'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',
        ),
      ];
      return {
        title: document.querySelector('h1.titl, title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(
          img =>
            img.getAttribute('data-lazy-src') ??
            img.getAttribute('data-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const wnacg = {
    name: 'wnacg',
    url: /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,
    homepage: 'https://wnacg.com/',
    language: [Language.ENGLISH, Language.RAW, Language.CHINESE],
    category: Category.HENTAI,
    run() {
      const pages = [...document.querySelectorAll('.pageselect option')];
      return {
        title: document.querySelector('.bread a:last-of-type')?.textContent?.trim(),
        pages: pages.length,
        prev: '#',
        next: '#',
        listPages: pages.map(page => window.location.pathname.replace(/\d+/, page.value)),
        img: '#picarea',
      };
    },
  };

  const xlecxone = {
    name: 'XlecxOne',
    url: /https?:\/\/(www\.)?xlecx.one\/.+/,
    homepage: 'https://xlecx.one/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const src = [
        ...new Set(
          [...document.querySelectorAll('article .page__text img , article #content-2 img')].map(
            img =>
              img.getAttribute('data-src') ??
              img.getAttribute('data-srce') ??
              img.closest('a')?.getAttribute('href') ??
              img.getAttribute('src') ??
              '',
          ),
        ),
      ];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        pages: src.length,
        prev: '#',
        next: '#',
        listImages: src,
      };
    },
  };

  const xyzcomics = {
    name: 'xyzcomics',
    url: /https?:\/\/(www\.)?xyzcomics.com\/.+/,
    homepage: 'https://xyzcomics.com/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    run() {
      const images = [...document.querySelectorAll('.jig-link')];
      return {
        title: document.querySelector('.entry-title')?.textContent?.trim(),
        pages: images.length,
        prev: '#',
        next: '#',
        listImages: images.map(img => img.getAttribute('href') ?? ''),
      };
    },
  };

  const yabai = {
    name: 'Yabai',
    url: /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,
    homepage: 'https://yabai.si/',
    language: [Language.ENGLISH],
    category: Category.HENTAI,
    async run() {
      const num = document.querySelectorAll('nav select option').length;
      const manga = {
        title: document.querySelector('title')?.textContent?.trim(),
        series: '../',
        pages: num,
        prev: '#',
        next: '#',
        listImages: [''],
        async before() {
          manga.listImages = await bruteforce(
            () => {
              const item = document.querySelector('select option');
              if (item) item.selected = true;
              document.querySelector('select')?.dispatchEvent(new Event('change'));
            },
            num,
            'button[title="Next"]',
            'h1 + div',
            'img.mx-auto',
            'src',
          );
        },
      };
      return manga;
    },
  };

  const sites = [
    akumamoe,
    bestporncomix,
    doujinmoe,
    dragontranslation,
    eightMuses,
    exhentai,
    fsicomics,
    freeadultcomix,
    gntai,
    hentai2read,
    hentaiera,
    hentaiforce,
    hentaifox,
    hentaihand,
    hentaihere,
    hentainexus,
    hentalk,
    hitomi,
    imhentai,
    kingcomix,
    luscious,
    multporn,
    myhentaigallery,
    nhentainet,
    ninehentai,
    porncomicshd,
    pururin,
    schalenetwork,
    simplyhentai,
    tmohhentai,
    threehentai,
    tsumino,
    vercomicsporno,
    wnacg,
    xlecxone,
    xyzcomics,
    yabai,
    madarawph,
    // Must be at the end because is a generic check
  ];

  const rangeSliderStyles =
    '.range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}';

  const keyscss =
    '/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */';

  const normalize$1 =
    '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n';

  const nprogress =
    '/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n';

  const sweetalert =
    ':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-hover-transform: none}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line] [class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line] [class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line] [class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line] [class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line] [class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line] [class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] [class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] [class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line] [class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line] [class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line] [class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line] [class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}\n';

  const fix =
    '#nprogress .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\n#pagesSlider {\n  margin: 10px 0;\n}\n\n#pageInputs {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n}\n\n#swal2-html-container .pageInput {\n  border: 1px darkblue dashed;\n  border-radius: 5px;\n  text-align: center;\n  background-color: aliceblue;\n  color: black;\n  max-width: 40%;\n}\n\n#swal2-title {\n  color: navy;\n}\n\nbutton.swal2-styled {\n  position: inherit;\n  transform: inherit;\n}\n';

  const sweetalertStyle = [normalize$1, sweetalert, fix, nprogress, keyscss].join('\n');

  const startButton = ".mov-button {\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    padding: 12px 20px;\n    text-align: center;\n    border: none;\n    background-size: 300% 100%;\n    border-radius: 50px;\n    transition: all 0.4s ease-in-out;\n    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n    min-height: 45px;\n    width: 120px;\n    white-space: nowrap;\n}\n\n.mov-button:hover {\n    background-position: 100% 0;\n    transition: all 0.4s ease-in-out;\n    transform: scale(1.05);\n}\n\n.mov-button:active {\n    transform: scale(0.95);\n}\n\n.mov-button:focus {\n    outline: none;\n}\n\n#StartMOVContainer {\n    position: fixed;\n    bottom: 35px;\n    left: 35px;\n    /* 2K屏示例: bottom: 200px; left: 1525px; */\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    z-index: 105000;\n}\n";

  const concatenateTemplateLiteralTag = (raw, ...keys) =>
    keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html = concatenateTemplateLiteralTag;
  const css = concatenateTemplateLiteralTag;

  function giveToWindow(key, content) {
    if (typeof unsafeWindow !== 'undefined') unsafeWindow[key] = content;
    if (typeof window !== 'undefined') {
      window[key] = content;
    }
  }
  function logScript(...text) {
    console.log('MangaOnlineViewer: ', ...text);
    return text;
  }
  function logScriptVerbose(...text) {
    if (['dev', 'development'].includes('adult')) console.info('MangaOnlineViewer: ', ...text);
    return text;
  }
  const logScriptC =
    x =>
      (...y) =>
        logScript(x, ...y);
  function removeValueGM(name) {
    if (typeof GM_deleteValue !== 'undefined') {
      GM_deleteValue(name);
    } else {
      logScriptVerbose('Fake Removing: ', name);
    }
  }
  const getInfoGM =
    typeof GM_info !== 'undefined'
      ? GM_info
      : {
        scriptHandler: 'Console',
        script: {
          name: 'Debug',
          version: 'Testing',
        },
      };
  function getValueGM(name, defaultValue = null) {
    if (typeof GM_getValue !== 'undefined') {
      return GM_getValue(name, defaultValue);
    }
    logScriptVerbose('Fake Getting: ', name, ' = ', defaultValue);
    return defaultValue;
  }
  function getJsonGM(name, defaultValue = null) {
    const result = getValueGM(name, defaultValue);
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
  function getGlobalSettings(defaultSettings) {
    return getJsonGM('settings', defaultSettings);
  }
  function getLocalSettings(defaultSettings) {
    return getJsonGM(window.location.hostname, defaultSettings);
  }
  function setValueGM(name, value) {
    if (typeof GM_setValue !== 'undefined') {
      GM_setValue(name, value);
      logScript('Setting: ', name, ' = ', value);
      return value.toString();
    }
    logScriptVerbose('Fake Setting: ', name, ' = ', value);
    return String(value);
  }
  function saveGlobalSettings(value) {
    return setValueGM('settings', value);
  }
  function saveLocalSettings(value) {
    return setValueGM(window.location.hostname, value);
  }
  function getBrowser() {
    const result = bowser.getParser(window.navigator.userAgent).getBrowser();
    return `${result.name} ${result.version}`;
  }
  function getEngine() {
    return getInfoGM.scriptHandler ?? 'Greasemonkey';
  }
  const getDevice = () => {
    const parser = bowser.getParser(window.navigator.userAgent);
    const device = parser.getPlatformType(true);
    if (device === 'mobile' || window.matchMedia('screen and (max-width: 600px)').matches) {
      return 'mobile';
    }
    if (device === 'tablet' || window.matchMedia('screen and (max-width: 992px)').matches) {
      return 'tablet';
    }
    return 'desktop';
  };
  const isMobile = () => getDevice() === 'mobile' || getDevice() === 'tablet';
  const settingsChangeListener = (fn, gmValue = 'settings') => {
    if (typeof GM_addValueChangeListener !== 'undefined') {
      try {
        return GM_addValueChangeListener(gmValue, (_name, _oldValue, newValue, remote) => {
          if (remote) fn(newValue);
        });
      } catch (e) {
        logScript('Failed to add settings listener', e);
      }
    }
    return void 0;
  };

  async function testAttribute(site) {
    if (site.waitAttr !== void 0) {
      logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]}`);
      const wait = await waitForAtb(site.waitAttr[0], site.waitAttr[1]);
      logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
    }
  }
  async function testElement(site) {
    if (site.waitEle !== void 0) {
      logScript(`Waiting for Element ${site.waitEle}`);
      const wait = await waitForElm(site.waitEle);
      logScript(`Found Element ${site.waitEle} = `, wait);
    }
  }
  async function testVariable(site) {
    if (site.waitVar !== void 0) {
      logScript(`Waiting for Variable ${site.waitVar}`);
      const wait = await waitForVar(site.waitVar);
      logScript(`Found Variable ${site.waitVar} = ${wait}`);
    }
  }
  async function testFunc(site) {
    if (site.waitFunc !== void 0) {
      logScript(`Waiting to pass Function check ${site.waitFunc}`);
      const wait = await waitForFunc(site.waitFunc);
      logScript(`Found Function check ${site.waitFunc} = ${wait}`);
    }
  }
  async function testTime(site) {
    if (site.waitTime !== void 0) {
      logScript(`Waiting to for ${site.waitTime} milliseconds`);
      await new Promise(resolve => {
        setTimeout(resolve, site.waitTime);
      });
      logScript('Continuing after timer');
    }
  }

  let listenerQueue = [];
  let lqIndex = 0;
  const QUEUE_ITEMS_PER_LISTENER = 4;
  let epoch = 0;
  let atom = initialValue => {
    let listeners = [];
    let $atom = {
      get() {
        if (!$atom.lc) {
          $atom.listen(() => { })();
        }
        return $atom.value;
      },
      lc: 0,
      listen(listener) {
        $atom.lc = listeners.push(listener);
        return () => {
          for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length;) {
            if (listenerQueue[i] === listener) {
              listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
            } else {
              i += QUEUE_ITEMS_PER_LISTENER;
            }
          }
          let index = listeners.indexOf(listener);
          if (~index) {
            listeners.splice(index, 1);
            if (!--$atom.lc) $atom.off();
          }
        };
      },
      notify(oldValue, changedKey) {
        epoch++;
        let runListenerQueue = !listenerQueue.length;
        for (let listener of listeners) {
          listenerQueue.push(listener, $atom.value, oldValue, changedKey);
        }
        if (runListenerQueue) {
          for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) {
            listenerQueue[lqIndex](
              listenerQueue[lqIndex + 1],
              listenerQueue[lqIndex + 2],
              listenerQueue[lqIndex + 3],
            );
          }
          listenerQueue.length = 0;
        }
      },
      /* It will be called on last listener unsubscribing.
         We will redefine it in onMount and onStop. */
      off() { },
      set(newValue) {
        let oldValue = $atom.value;
        if (oldValue !== newValue) {
          $atom.value = newValue;
          $atom.notify(oldValue);
        }
      },
      subscribe(listener) {
        let unbind = $atom.listen(listener);
        listener($atom.value);
        return unbind;
      },
      value: initialValue,
    };
    return $atom;
  };

  const MOUNT = 5;
  const UNMOUNT = 6;
  const REVERT_MUTATION = 10;
  let on = (object, listener, eventKey, mutateStore) => {
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
      object.events[eventKey + REVERT_MUTATION] = mutateStore(eventProps => {
        object.events[eventKey].reduceRight((event, l) => (l(event), event), {
          shared: {},
          ...eventProps,
        });
      });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return () => {
      let currentListeners = object.events[eventKey];
      let index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
      if (!currentListeners.length) {
        delete object.events[eventKey];
        object.events[eventKey + REVERT_MUTATION]();
        delete object.events[eventKey + REVERT_MUTATION];
      }
    };
  };
  let STORE_UNMOUNT_DELAY = 1e3;
  let onMount = ($store, initialize) => {
    let listener = payload => {
      let destroy = initialize(payload);
      if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, runListeners => {
      let originListen = $store.listen;
      $store.listen = (...args) => {
        if (!$store.lc && !$store.active) {
          $store.active = true;
          runListeners();
        }
        return originListen(...args);
      };
      let originOff = $store.off;
      $store.events[UNMOUNT] = [];
      $store.off = () => {
        originOff();
        setTimeout(() => {
          if ($store.active && !$store.lc) {
            $store.active = false;
            for (let destroy of $store.events[UNMOUNT]) destroy();
            $store.events[UNMOUNT] = [];
          }
        }, STORE_UNMOUNT_DELAY);
      };
      return () => {
        $store.listen = originListen;
        $store.off = originOff;
      };
    });
  };

  let computedStore = (stores, cb, batched) => {
    if (!Array.isArray(stores)) stores = [stores];

    let previousArgs;
    let currentEpoch;
    let set = () => {
      if (currentEpoch === epoch) return;
      currentEpoch = epoch;
      let args = stores.map($store => $store.get());
      if (!previousArgs || args.some((arg, i) => arg !== previousArgs[i])) {
        previousArgs = args;
        let value = cb(...args);
        if (value && value.then && value.t) {
          value.then(asyncValue => {
            if (previousArgs === args) {
              // Prevent a stale set
              $computed.set(asyncValue);
            }
          });
        } else {
          $computed.set(value);
          currentEpoch = epoch;
        }
      }
    };
    let $computed = atom(undefined);
    let get = $computed.get;
    $computed.get = () => {
      set();
      return get();
    };
    let run = set;

    onMount($computed, () => {
      let unbinds = stores.map($store => $store.listen(run));
      set();
      return () => {
        for (let unbind of unbinds) unbind();
      };
    });

    return $computed;
  };

  let computed = (stores, fn) => computedStore(stores, fn);

  let map = (initial = {}) => {
    let $map = atom(initial);

    $map.setKey = function (key, value) {
      let oldMap = $map.value;
      if (typeof value === 'undefined' && key in $map.value) {
        $map.value = { ...$map.value };
        delete $map.value[key];
        $map.notify(oldMap, key);
      } else if ($map.value[key] !== value) {
        $map.value = {
          ...$map.value,
          [key]: value,
        };
        $map.notify(oldMap, key);
      }
    };

    return $map;
  };

  const de_DE = {
    ID: 'de_DE',
    NAME: 'Deutsch',
    STARTING: 'Starte<br>Manga OnlineViewer',
    RESUME: 'Fortsetzen ab Seite ',
    WAITING: 'Bitte warten, 3 Sekunden...',
    CHOOSE_BEGINNING: 'Wähle die Startseite:',
    BUTTON_START: 'Manga OnlineViewer starten',
    SETTINGS: 'Einstellungen',
    LANGUAGE: 'Sprache',
    COLOR_SCHEME: 'Farbschema',
    THEME: 'Design',
    THEME_COLOR: 'Farbe',
    THEME_HUE: 'Farbton',
    THEME_SHADE: 'Schattierung',
    DEFAULT_LOAD_MODE: 'Standard-Lademodus',
    LOAD_MODE_NORMAL: 'Normal (3 Sek. warten)',
    LOAD_MODE_ALWAYS: 'Immer (sofort)',
    LOAD_MODE_NEVER: 'Nie (manuell)',
    LOAD_SPEED: 'Ladegeschwindigkeit Seiten/Sekunde',
    DEFAULT_ZOOM: 'Standard-Zoom (zwischen 5 und 200)',
    DEFAULT_ZOOM_MODE: 'Standard-Zoommodus',
    MINIMUM_ZOOM: 'Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)',
    ZOOM_STEP: 'Zoom-Schrittgröße (zwischen 5 und 50)',
    DEFAULT_VIEW_MODE: 'Standard-Ansichtsmodus',
    VIEW_MODE_VERTICAL: 'Vertikal',
    VIEW_MODE_LEFT: 'Links nach Rechts',
    VIEW_MODE_RIGHT: 'Rechts nach Links',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Breite anpassen bei Übergröße',
    FIT_HEIGHT_HORIZONTAL: 'Höhe im Horizontalmodus anpassen',
    SHOW_THUMBNAILS: 'Miniaturansichten anzeigen',
    ENABLE_COMMENTS: 'Kommentare erfassen (wenn verfügbar)',
    HIDE_CONTROLS: 'Seitensteuerung immer ausblenden',
    HEADER_TYPE: 'Kopfbereichstyp ändern',
    HEADER_HOVER: 'Hover',
    HEADER_SCROLL: 'Scrollen',
    HEADER_CLICK: 'Klicken',
    HEADER_FIXED: 'Fixiert',
    HEADER_SIMPLE: 'Einfach',
    BUTTON_DOWNLOAD: 'Herunterladen',
    DOWNLOAD_ZIP: 'Zip-Datei herunterladen',
    DOWNLOAD_IMAGES: 'Bilder automatisch als Zip herunterladen',
    BUTTON_NEXT: 'Weiter',
    NEXT_CHAPTER: 'Nächstes Kapitel',
    BUTTON_PREVIOUS: 'Zurück',
    PREVIOUS_CHAPTER: 'Vorheriges Kapitel',
    BOOKMARKS: 'Lesezeichen',
    BOOKMARK: 'Lesezeichen',
    BOOKMARK_REMOVED: 'Lesezeichen entfernt',
    BOOKMARK_SAVED: 'Lesezeichen gespeichert',
    BOOKMARK_MESSAGE:
      'Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt:<h4>Seite ##num##</h4>(Nur <i>EINMAL</i> pro Lesezeichen)',
    KEYBINDINGS: 'Tastenkürzel',
    EDIT_KEYBINDS: 'Tastenkürzel bearbeiten',
    SAVE_KEYBINDS: 'Tastenkürzel speichern',
    BUTTON_EDIT: 'Bearbeiten',
    BUTTON_SAVE: 'Speichern',
    KEYBIND_RULES: `
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. </br>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,
    ATTENTION: 'Achtung',
    WARNING: 'Warnung',
    BUTTON_RESET_SETTINGS: 'Einstellungen zurücksetzen(Reset Settings)',
    SETTINGS_RESET: 'Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden',
    LANGUAGE_CHANGED: 'Die Sprache wurde geändert, bitte Seite neu laden',
    AUTO_DOWNLOAD:
      'Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest',
    LAZY_LOAD:
      "Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",
    LAZY_LOAD_IMAGES_ENABLE: 'Lazy Load Bilder aktivieren',
    LAZY_LOAD_IMAGES: 'Lazy Start ab Seite (zwischen 5 und 100)',
    RETURN_CHAPTER_LIST: 'Zur Kapitelübersicht zurückkehren',
    PAGES_LOADED: 'Seiten geladen',
    GO_TO_PAGE: 'Gehe zu Seite',
    ENLARGE: 'Vergrößern',
    RESTORE: 'Wiederherstellen',
    REDUCE: 'Wiederherstellen',
    FIT_WIDTH: 'Breite anpassen',
    FIT_HEIGHT: 'Höhe anpassen',
    PERCENT: 'Prozent',
    TOGGLE_CONTROLS: 'Seitensteuerung umschalten',
    ZOOM_IN: 'Hineinzoomen',
    ZOOM_OUT: 'Herauszoomen',
    ZOOM_RESET: 'Zoom zurücksetzen',
    ZOOM_WIDTH: 'Auf Breite zoomen',
    ZOOM_HEIGHT: 'Auf Höhe zoomen',
    HIDE: 'Ausblenden',
    RELOAD: 'Neu laden',
    SLOWLY: 'Langsam',
    NORMAL: 'Normal',
    FAST: 'Schnell',
    EXTREME: 'Extrem',
    ALL_PAGES: 'Alle Seiten',
    SPEED_WARNING: 'Ladegeschwindigkeit zu hoch',
    SPEED_WARNING_MESSAGE:
      'Diese Geschwindigkeit wird nicht empfohlen.<br> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br> Bitte mit Vorsicht verwenden!',
    SCROLL_UP: 'Nach oben scrollen',
    SCROLL_DOWN: 'Nach unten scrollen',
    CLOSE: 'Schließen',
    LIST_EMPTY: 'Liste leer',
    DISPLAY_COMMENTS: 'Kommentare anzeigen',
    COMMENTS: 'Kommentarbereich',
    SCROLL_START: 'Auto-Scroll umschalten',
    AUTO_SCROLL_HEIGHT: 'Auto-Scroll-Geschwindigkeit in Pixel',
    VERTICAL_SEPARATOR: 'Vertikale Trenner anzeigen',
    END: 'Ende',
    SCOPE: 'Bereich',
    GLOBAL: 'Global',
    GENERAL: 'Allgemein',
    LOADING: 'Lädt',
    ZOOM: 'Zoom',
    OTHERS: 'Sonstiges',
    NAVBAR_TYPE: 'Navigationsleistentyp ändern',
    NAVBAR_BOTTOM: 'Unten',
    NAVBAR_LEFT: 'Links',
    NAVBAR_RIGHT: 'Rechts',
    NAVBAR_DISABLED: 'Deaktiviert',
  };

  const en_US = {
    ID: 'en_US',
    NAME: 'English (US)',
    STARTING: 'Starting<br>Manga OnlineViewer',
    RESUME: 'Resuming reading from Page ',
    WAITING: 'Please wait, 3 seconds...',
    CHOOSE_BEGINNING: 'Choose the Page to start from:',
    BUTTON_START: 'Start Manga OnlineViewer',
    SETTINGS: 'Settings',
    LANGUAGE: 'Language',
    COLOR_SCHEME: 'Color Scheme',
    THEME: 'Theme',
    THEME_COLOR: 'Color',
    THEME_HUE: 'Color Hue',
    THEME_SHADE: 'Color Shade',
    DEFAULT_LOAD_MODE: 'Default Load Mode',
    LOAD_MODE_NORMAL: 'Normal(Wait 3 sec)',
    LOAD_MODE_ALWAYS: 'Always(Immediately)',
    LOAD_MODE_NEVER: 'Never(Manually)',
    LOAD_SPEED: 'Load Speed Pages/Second',
    MAX_CONCURRENT_LOADS: 'Concurrent Loads',
    DEFAULT_ZOOM: 'Default Zoom (between 5 and 200)',
    DEFAULT_ZOOM_MODE: 'Default Zoom Mode',
    MINIMUM_ZOOM: 'Minimum Zoom relative to the width of screen (between 30 and 100)',
    ZOOM_STEP: 'Zoom Change Step (between 5 and 50)',
    DEFAULT_VIEW_MODE: 'Default View Mode',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Left to Right',
    VIEW_MODE_RIGHT: 'Right to Left',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    VIEW_MODE_MASONRY: 'Masonry',
    VIEW_MODE_GRID: 'Grid',
    FIT_WIDTH_OVERSIZED: 'Fit Width if Oversized',
    FIT_HEIGHT_HORIZONTAL: 'Fit Height in Horizontal Mode',
    SHOW_THUMBNAILS: 'Show Thumbnails',
    ENABLE_COMMENTS: 'Capture Comments (When available)',
    HIDE_CONTROLS: 'Always Hide Page Controls',
    HEADER_TYPE: 'Change Header Type',
    HEADER_HOVER: 'Hover',
    HEADER_SCROLL: 'Scroll',
    HEADER_CLICK: 'Click',
    HEADER_FIXED: 'Fixed',
    HEADER_SIMPLE: 'Simple',
    BUTTON_DOWNLOAD: 'Download',
    DOWNLOAD_ZIP: 'Download Zip file',
    DOWNLOAD_IMAGES: 'Download Images as Zip Automatically',
    BUTTON_NEXT: 'Next',
    NEXT_CHAPTER: 'Next Chapter',
    BUTTON_PREVIOUS: 'Previous',
    PREVIOUS_CHAPTER: 'Previous Chapter',
    BOOKMARKS: 'Bookmarks',
    BOOKMARK: 'Bookmark',
    BOOKMARK_REMOVED: 'Bookmark Removed',
    BOOKMARK_SAVED: 'Bookmark Saved',
    BOOKMARK_MESSAGE:
      'Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)',
    KEYBINDINGS: 'Keybindings',
    EDIT_KEYBINDS: 'Edit KeyBindings',
    SAVE_KEYBINDS: 'Save KeyBindings',
    BUTTON_EDIT: 'Edit',
    BUTTON_SAVE: 'Save',
    KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Attention',
    WARNING: 'Warning',
    BUTTON_RESET_SETTINGS: 'Reset Settings',
    SETTINGS_RESET: 'Settings have been reset, reload the page to take effect',
    LANGUAGE_CHANGED: 'Language has been changed, reload the page to take effect',
    AUTO_DOWNLOAD: 'Next time a chapter finish loading you will be prompted to save automatically',
    LAZY_LOAD:
      "Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",
    LAZY_LOAD_IMAGES_ENABLE: 'Enable Lazy Load Images',
    LAZY_LOAD_IMAGES: 'Lazy Start From Page (between 5 and 100)',
    RETURN_CHAPTER_LIST: 'Return to Chapter List',
    PAGES_LOADED: 'Pages Loaded',
    GO_TO_PAGE: 'Go to Page',
    ENLARGE: 'Enlarge',
    RESTORE: 'Restore',
    REDUCE: 'Reduce',
    FIT_WIDTH: 'Fit Width',
    FIT_HEIGHT: 'Fit Height',
    PERCENT: 'Percent',
    TOGGLE_CONTROLS: 'Toggle page controls',
    ZOOM_IN: 'Zoom In',
    ZOOM_OUT: 'Zoom Out',
    ZOOM_RESET: 'Zoom Reset',
    ZOOM_WIDTH: 'Zoom to Width',
    ZOOM_HEIGHT: 'Zoom to Height',
    HIDE: 'Hide',
    RELOAD: 'Reload',
    SLOWLY: 'Slowly',
    NORMAL: 'Normal',
    FAST: 'Fast',
    EXTREME: 'Extreme',
    ALL_PAGES: 'All Pages',
    SPEED_WARNING: 'Loading Speed too High',
    SPEED_WARNING_MESSAGE:
      'This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!',
    SCROLL_UP: 'Scroll Up',
    SCROLL_DOWN: 'Scroll Down',
    CLOSE: 'Close',
    LIST_EMPTY: 'List Empty',
    DISPLAY_COMMENTS: 'Display Comments',
    COMMENTS: 'Comments Section',
    SCROLL_START: 'Toggle Auto Scroll',
    AUTO_SCROLL_HEIGHT: 'Auto Scroll Speed in Pixels',
    VERTICAL_SEPARATOR: 'Show Vertical Separators',
    END: 'End',
    SCOPE: 'Scope',
    GLOBAL: 'Global',
    GENERAL: 'General',
    LOADING: 'Loading',
    ZOOM: 'Zoom',
    OTHERS: 'Others',
    NAVBAR_TYPE: 'Change Navbar Type',
    NAVBAR_BOTTOM: 'Bottom',
    NAVBAR_LEFT: 'Left',
    NAVBAR_RIGHT: 'Right',
    NAVBAR_DISABLED: 'Disabled',
  };

  const es_ES = {
    ID: 'es_ES',
    NAME: 'Español (ES)',
    STARTING: 'Iniciando<br>Manga OnlineViewer',
    RESUME: 'Continuando lectura desde la Página ',
    WAITING: 'Por favor espere, 3 segundos...',
    CHOOSE_BEGINNING: 'Elija la página en la que comenzar:',
    BUTTON_START: 'Iniciar Manga OnlineViewer',
    SETTINGS: 'Ajustes',
    LANGUAGE: 'Idioma',
    COLOR_SCHEME: 'Esquema de color',
    THEME: 'Tema',
    THEME_COLOR: 'Color',
    THEME_HUE: 'Matiz del color',
    THEME_SHADE: 'Saturación del color',
    DEFAULT_LOAD_MODE: 'Modo de carga por defecto',
    LOAD_MODE_NORMAL: 'Normal (Espera 3s)',
    LOAD_MODE_ALWAYS: 'Siempre (Inmediatamente)',
    LOAD_MODE_NEVER: 'Nunca (Manualmente)',
    LOAD_SPEED: 'Velocidad carga página/segundo',
    DEFAULT_ZOOM: 'Zoom por defecto (entre 5 y 200)',
    DEFAULT_ZOOM_MODE: 'Modo de zoom por defecto',
    MINIMUM_ZOOM: 'Zoom mínimo relativo al ancho de la pantalla',
    ZOOM_STEP: 'Paso entre cambios de zoom (entre 5 y 50)',
    DEFAULT_VIEW_MODE: 'Modo de visualización por defecto',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Izquierda a derecha',
    VIEW_MODE_RIGHT: 'Derecha a izquierda',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Ajustar ancho si es demasiado grande',
    FIT_HEIGHT_HORIZONTAL: 'Ajustar altura en modo horizontal',
    SHOW_THUMBNAILS: 'Mostrar miniaturas',
    ENABLE_COMMENTS: 'Capturar comentarios (cuando esté disponible)',
    HIDE_CONTROLS: 'Ocultar siempre la barra de controles',
    HEADER_TYPE: 'Cambiar tipo de cabecera',
    HEADER_HOVER: 'Pasar por encima',
    HEADER_SCROLL: 'Desplazamiento',
    HEADER_CLICK: 'Hacer click',
    HEADER_FIXED: 'Fijo',
    HEADER_SIMPLE: 'Sencillo',
    BUTTON_DOWNLOAD: 'Descargar',
    DOWNLOAD_ZIP: 'Descargar fichero Zip',
    DOWNLOAD_IMAGES: 'Autodescargar imágenes como Zip',
    BUTTON_NEXT: 'Siguiente',
    NEXT_CHAPTER: 'Siguiente capítulo',
    BUTTON_PREVIOUS: 'Anterior',
    PREVIOUS_CHAPTER: 'Capítulo anterior',
    BOOKMARKS: 'Marcadores',
    BOOKMARK: 'Marcador',
    BOOKMARK_REMOVED: 'Marcador eliminado',
    BOOKMARK_SAVED: 'Marcador guardado',
    BOOKMARK_MESSAGE:
      'La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)',
    KEYBINDINGS: 'Atajos de teclado',
    EDIT_KEYBINDS: 'Editar atajos',
    SAVE_KEYBINDS: 'Guardar atajos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Guardar',
    KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atención',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Reiniciar ajustes(Reset Settings)',
    SETTINGS_RESET:
      'Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto',
    LANGUAGE_CHANGED: 'Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto',
    AUTO_DOWNLOAD:
      'La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente',
    LAZY_LOAD:
      "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
    LAZY_LOAD_IMAGES_ENABLE: 'Habilitar carga de imágenes diferida',
    LAZY_LOAD_IMAGES: 'Empezar carga diferida a partir de la página (entre 5 y 100)',
    RETURN_CHAPTER_LIST: 'Regresar a la lista de capítulos',
    PAGES_LOADED: 'Páginas cargadas',
    GO_TO_PAGE: 'Ir a página',
    ENLARGE: 'Agrandar',
    RESTORE: 'Restaurar',
    REDUCE: 'Reducir',
    FIT_WIDTH: 'Ajustar al ancho',
    FIT_HEIGHT: 'Ajustar al alto',
    PERCENT: 'Porcentual',
    TOGGLE_CONTROLS: 'Alternar controles de página',
    ZOOM_IN: 'Acercar',
    ZOOM_OUT: 'Alejar',
    ZOOM_RESET: 'Restablecer zoom',
    ZOOM_WIDTH: 'Zoom al ancho',
    ZOOM_HEIGHT: 'Zoom al alto',
    HIDE: 'Ocultar',
    RELOAD: 'Recargar',
    SLOWLY: 'Lento',
    NORMAL: 'Normal',
    FAST: 'Rápido',
    EXTREME: 'Extremo',
    ALL_PAGES: 'Todas las páginas',
    SPEED_WARNING: 'Velocidad de carga muy alta',
    SPEED_WARNING_MESSAGE:
      'No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!',
    SCROLL_UP: 'Desplazar arriba',
    SCROLL_DOWN: 'Desplazar abajo',
    CLOSE: 'Cerrar',
    LIST_EMPTY: 'Lista vacía',
    DISPLAY_COMMENTS: 'Mostrar comentarios',
    COMMENTS: 'Sección de comentarios',
    SCROLL_START: 'Alternar desplazamiento automático',
    AUTO_SCROLL_HEIGHT: 'Velocidad de desplazamiento automático en píxeles',
    VERTICAL_SEPARATOR: 'Mostrar separadores verticales',
    END: 'Fin',
    SCOPE: 'Alcance',
    GLOBAL: 'Global',
    GENERAL: 'General',
    LOADING: 'Carga',
    ZOOM: 'Zoom',
    OTHERS: 'Otros',
    NAVBAR_TYPE: 'Cambiar el tipo de barra de navegación',
    NAVBAR_BOTTOM: 'Abajo',
    NAVBAR_LEFT: 'Izquierda',
    NAVBAR_RIGHT: 'Derecha',
    NAVBAR_DISABLED: 'Desactivado',
  };

  const pt_BR = {
    ID: 'pt_BR',
    NAME: 'Portugues (Brasil)',
    STARTING: 'Iniciando<br>Manga OnlineViewer',
    RESUME: 'Continuando leitura na Pagina ',
    WAITING: 'Por Favor espere, 3 segundos...',
    CHOOSE_BEGINNING: 'Escolha a pagina de onde começar:',
    BUTTON_START: 'Iniciar Manga OnlineViewer',
    SETTINGS: 'Configurações',
    LANGUAGE: 'Idioma',
    COLOR_SCHEME: 'Esquema de Color',
    THEME: 'Tema',
    THEME_COLOR: 'Cor',
    THEME_HUE: 'Tom da Cor',
    THEME_SHADE: 'Saturação da Cor',
    DEFAULT_LOAD_MODE: 'Forma de Carregamento Padrão',
    LOAD_MODE_NORMAL: 'Normal(Esperando 3 sec)',
    LOAD_MODE_ALWAYS: 'Sempre(Imediatamente)',
    LOAD_MODE_NEVER: 'Nunca(Manualmente)',
    LOAD_SPEED: 'Velocidade de Carregamento Paginas/Segundo',
    DEFAULT_ZOOM: 'Zoom padrão (entre 5 e 200)',
    DEFAULT_ZOOM_MODE: 'Modo de Zoom padrão',
    MINIMUM_ZOOM: 'Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)',
    ZOOM_STEP: 'Precisão da Mudança do Zoom (entre 5 e 50)',
    DEFAULT_VIEW_MODE: 'Modo de Visualização Padrão',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Esquerda para Direita',
    VIEW_MODE_RIGHT: 'Direita para Esquerda',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Encher a tela se grande demais',
    FIT_HEIGHT_HORIZONTAL: 'Ajustar altura no modo horizontal',
    SHOW_THUMBNAILS: 'Mostra Miniaturas',
    ENABLE_COMMENTS: 'Capturar comentários (quando disponível)',
    HIDE_CONTROLS: 'Sempre esconder controles das paginas',
    HEADER_TYPE: 'Mudar Tipo de Cabeçalho',
    HEADER_HOVER: 'Passar por perto',
    HEADER_SCROLL: 'Rolagem do Mouse',
    HEADER_CLICK: 'Click',
    HEADER_FIXED: 'Fixo',
    HEADER_SIMPLE: 'Simples',
    BUTTON_DOWNLOAD: 'Download',
    DOWNLOAD_ZIP: 'Baixar arquivo Zip',
    DOWNLOAD_IMAGES: 'Download das Imagens como Zip Automaticamente',
    BUTTON_NEXT: 'Proximo',
    NEXT_CHAPTER: 'Proximo Capitulo',
    BUTTON_PREVIOUS: 'Anterior',
    PREVIOUS_CHAPTER: 'Capitulo Anterior',
    BOOKMARKS: 'Marca paginas',
    BOOKMARK: 'Marcar pagina',
    BOOKMARK_REMOVED: 'Marca pagina Removido',
    BOOKMARK_SAVED: 'Marca pagina Salvo',
    BOOKMARK_MESSAGE:
      'Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)',
    KEYBINDINGS: 'Atalhos',
    EDIT_KEYBINDS: 'Editar Atalhos',
    SAVE_KEYBINDS: 'Salvar Atalhos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Salvar',
    KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atenção',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Limpar Configurações(Reset Settings)',
    SETTINGS_RESET: 'Configurações foram limpas, recarregue o site para efetivar a alteração',
    LANGUAGE_CHANGED: 'Idioma foi alterado, recarregue o site para efetivar a alteração',
    AUTO_DOWNLOAD: 'Proxima vez que abrir um capitulo download iniciara automaticamente',
    LAZY_LOAD:
      "Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",
    LAZY_LOAD_IMAGES_ENABLE: 'Ativar Carregamento de imagens preguiçoso',
    LAZY_LOAD_IMAGES: 'Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)',
    RETURN_CHAPTER_LIST: 'Voltar a lista de Capitulos',
    PAGES_LOADED: 'Paginas Carregadas',
    GO_TO_PAGE: 'Pular para',
    ENLARGE: 'Aumentar',
    RESTORE: 'Restaurar',
    REDUCE: 'Diminuir',
    FIT_WIDTH: 'Preencher Largura',
    FIT_HEIGHT: 'Preencher Altura ',
    PERCENT: 'Percentual',
    TOGGLE_CONTROLS: 'Mostar controles de pagina',
    ZOOM_IN: 'Mais Zoom',
    ZOOM_OUT: 'Menos Zoom',
    ZOOM_RESET: 'Resetar Zoom',
    ZOOM_WIDTH: 'Zoom para Largura',
    ZOOM_HEIGHT: 'Zoom para Altura',
    HIDE: 'Esconder',
    RELOAD: 'Recarregar',
    SLOWLY: 'Devagar',
    NORMAL: 'Normal',
    FAST: 'Rapido',
    EXTREME: 'Extremo',
    ALL_PAGES: 'Todas as Paginas',
    SPEED_WARNING: 'Velocidade de Carregamento muito alta',
    SPEED_WARNING_MESSAGE:
      'Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!',
    SCROLL_UP: 'Subir Pagina',
    SCROLL_DOWN: 'Descer Pagina',
    CLOSE: 'Fechar',
    LIST_EMPTY: 'Lista Vazia',
    DISPLAY_COMMENTS: 'Mostar Comentarios',
    COMMENTS: 'Seção de comentários',
    SCROLL_START: 'Ativar Rolagem Automatica',
    AUTO_SCROLL_HEIGHT: 'Velocidade da Rolagem Automatica em Pixels',
    VERTICAL_SEPARATOR: 'Mostrar Separadores Verticais',
    END: 'Fin',
    SCOPE: 'Escopo',
    GLOBAL: 'Global',
    GENERAL: 'Geral',
    LOADING: 'Carregamento',
    ZOOM: 'Zoom',
    OTHERS: 'Outros',
    NAVBAR_TYPE: 'Mudar barra de navegação',
    NAVBAR_BOTTOM: 'Embaixo',
    NAVBAR_LEFT: 'Esquerda',
    NAVBAR_RIGHT: 'Direita',
    NAVBAR_DISABLED: 'Desativado',
  };

  const zh_CN = {
    ID: 'zh_CN',
    NAME: '中文 (简体)',
    STARTING: '正在启动<br>Manga OnlineViewer',
    RESUME: '从页面继续阅读 ',
    WAITING: '请等待3秒钟...',
    CHOOSE_BEGINNING: '选择要开始的页数:',
    BUTTON_START: '启动Manga OnlineViewer',
    SETTINGS: '设置',
    LANGUAGE: '语言',
    COLOR_SCHEME: '配色方案',
    THEME: '主题',
    THEME_COLOR: '颜色',
    THEME_HUE: '色相',
    THEME_SHADE: '色度',
    DEFAULT_LOAD_MODE: '默认加载模式',
    LOAD_MODE_NORMAL: '等待模式(等待3秒自动加载 )',
    LOAD_MODE_ALWAYS: '自动模式(无需等待)',
    LOAD_MODE_NEVER: '手动模式(点击启动)',
    LOAD_SPEED: '加载速度页数/秒',
    MAX_CONCURRENT_LOADS: '并发加载数',
    DEFAULT_ZOOM: '默认缩放 (最小 5 最大 200)',
    DEFAULT_ZOOM_MODE: '默认缩放模式',
    MINIMUM_ZOOM: '相对于屏幕宽度的最小缩放 (最小 30 最大 100)',
    ZOOM_STEP: '缩放级别 (最小 5 最大 50)',
    DEFAULT_VIEW_MODE: '默认视图模式',
    VIEW_MODE_VERTICAL: '垂直有缝',
    VIEW_MODE_LEFT: '从左到右',
    VIEW_MODE_RIGHT: '从右到左',
    VIEW_MODE_WEBCOMIC: '垂直无缝',
    VIEW_MODE_MASONRY: '瀑布流',
    VIEW_MODE_GRID: '方格',
    FIT_WIDTH_OVERSIZED: '如果尺寸过大、则适合宽度',
    FIT_HEIGHT_HORIZONTAL: '左右模式下适应高度',
    SHOW_THUMBNAILS: '显示缩略图',
    ENABLE_COMMENTS: '捕获评论（如果可用）',
    HIDE_CONTROLS: '始终隐藏页面控件',
    HEADER_TYPE: '更改标题显示方式',
    HEADER_HOVER: '悬停',
    HEADER_SCROLL: '滚动',
    HEADER_CLICK: '点击',
    HEADER_FIXED: '固定',
    HEADER_SIMPLE: '简单',
    BUTTON_DOWNLOAD: '下载',
    DOWNLOAD_ZIP: '下载压缩文件',
    DOWNLOAD_IMAGES: '自动将图片下载成ZIP',
    BUTTON_NEXT: '下一页',
    NEXT_CHAPTER: '下一章',
    BUTTON_PREVIOUS: '上一页',
    PREVIOUS_CHAPTER: '上一章',
    BOOKMARKS: '书签',
    BOOKMARK: 'Bookmark',
    BOOKMARK_REMOVED: '删除书签',
    BOOKMARK_SAVED: '保存书签',
    BOOKMARK_MESSAGE: '下次打开本章时，将从:<h4>页码 ##num##</h4>(<i>仅一次</i> 每个书签)',
    KEYBINDINGS: '快捷键',
    EDIT_KEYBINDS: '编辑键绑定',
    SAVE_KEYBINDS: '保存键绑定',
    BUTTON_EDIT: '编辑',
    BUTTON_SAVE: '救',
    KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. </br>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: '注意',
    WARNING: '警告',
    BUTTON_RESET_SETTINGS: '重置设置(Reset Settings)',
    SETTINGS_RESET: '设置已重置、重新加载页面才能生效',
    LANGUAGE_CHANGED: '语言已更改、重新加载页面才能生效',
    AUTO_DOWNLOAD: '下次章节加载完成时、系统将提示您自动保存',
    LAZY_LOAD:
      "延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",
    LAZY_LOAD_IMAGES_ENABLE: '启用延迟加载图像',
    LAZY_LOAD_IMAGES: '惰性加载从页面 (最小 5 最大 100)',
    RETURN_CHAPTER_LIST: '返回章节列表',
    PAGES_LOADED: '已加载的页数',
    GO_TO_PAGE: '转到页数',
    ENLARGE: '放大',
    RESTORE: '还原',
    REDUCE: '缩小',
    FIT_WIDTH: '适合宽度',
    FIT_HEIGHT: '适合高度',
    PERCENT: '百分之',
    TOGGLE_CONTROLS: '显示隐藏页面控件',
    ZOOM_IN: '放大',
    ZOOM_OUT: '缩小',
    ZOOM_RESET: '还原',
    ZOOM_WIDTH: '适合宽度',
    ZOOM_HEIGHT: '适合高度',
    HIDE: '显示隐藏页面控件',
    RELOAD: '重新加载',
    SLOWLY: '慢速',
    NORMAL: '正常',
    FAST: '快速',
    EXTREME: '极端',
    ALL_PAGES: '所有页面',
    SPEED_WARNING: '加载速度过高',
    SPEED_WARNING_MESSAGE:
      '不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!',
    SCROLL_UP: '向上滚动',
    SCROLL_DOWN: '向下滚动',
    CLOSE: '关闭',
    LIST_EMPTY: '没有收藏书签',
    DISPLAY_COMMENTS: '显示注释',
    COMMENTS: '评论部分',
    SCROLL_START: '切换自动滚动',
    AUTO_SCROLL_HEIGHT: '自动滚动速度（以像素为单位）',
    VERTICAL_SEPARATOR: '显示垂直分隔符',
    END: '结尾',
    SCOPE: '范围',
    GLOBAL: '全球',
    GENERAL: '常规',
    LOADING: '装载',
    ZOOM: '缩放',
    OTHERS: '别人',
    NAVBAR_TYPE: '更改导航栏类型',
    NAVBAR_BOTTOM: '底部',
    NAVBAR_LEFT: '左边',
    NAVBAR_RIGHT: '正确的',
    NAVBAR_DISABLED: '已禁用',
  };

  const locales = [en_US, zh_CN];

  const settings$2 = {
    threshold: 2e3,
    throttle: 500,
    lazyAttribute: 'data-src',
    targetAttribute: 'src',
  };
  let listElements = [];
  let setup = false;
  function filterInView(value) {
    const { element } = value;
    const rect = element.getBoundingClientRect();
    const target =
      (window.innerHeight || document.documentElement.clientHeight) + settings$2.threshold;
    return rect.top <= target || rect.bottom <= target;
  }
  async function showElement(item) {
    let value = item.element.getAttribute(settings$2.lazyAttribute) ?? '';
    if (value) {
      const originalValue = value;
      let blob = null;
      if (isObjectURL(value) && imageBlobCache.has(value)) {
        blob = imageBlobCache.get(value);
        item.element.setAttribute('data-blob-cached', 'true');
      } else if (!isObjectURL(value) && !isBase64ImageUrl(value) && item.fetchOptions) {
        blob = await fetch(value, item.fetchOptions).then(resp => resp.blob());
        value = URL.createObjectURL(blob);
        imageBlobCache.set(value, blob);
        item.element.setAttribute('data-blob-cached', 'true');
      } else if (
        !isObjectURL(value) &&
        !isBase64ImageUrl(value) &&
        getSettingsValue('pauseAnimatedWebp') &&
        isLikelyAnimatedImageSource(value)
      ) {
        const fetched = await fetchImageBlob(value);
        blob = fetched.blob;
        value = URL.createObjectURL(blob);
        imageBlobCache.set(value, blob);
        item.element.setAttribute('data-blob-cached', 'true');
      } else {
        item.element.setAttribute('data-blob-cached', 'true');
      }
      if (blob) {
        value = await prepareAnimatedWebpImage(item.element, originalValue, value, blob);
      }
      item.element.setAttribute(settings$2.targetAttribute, value);
    }
    item.callback(item.element)?.catch(logScript);
  }
  function executeCheck() {
    const inView = listElements.filter(filterInView);
    listElements = listElements.filter(item => !inView.includes(item));
    inView.forEach(showElement);
  }
  const observerEvent = _.throttle(executeCheck, settings$2.throttle);
  function lazyLoad$1(element, callback, fetchOptions) {
    if (!setup) {
      window.addEventListener('scroll', observerEvent, {
        passive: true,
      });
      window.addEventListener('touchmove', observerEvent, {
        passive: true,
      });
      window.addEventListener('resize', observerEvent, {
        passive: true,
      });
      setup = true;
    }
    listElements.push({ element, callback, fetchOptions });
    observerEvent();
  }

  async function fetchText(url, format) {
    return new Promise(resolve => {
      logScript('Fetching page: ', url);
      fetch(url)
        .then(async response =>
          // When the page is loaded convert it to text
          response.text(),
        )
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, format);
          resolve(doc);
        })
        .catch(err => {
          logScript('Failed to fetch page: ', err);
        });
    });
  }
  async function fetchHtml(url) {
    return fetchText(url, 'text/html');
  }
  async function getElementAttribute(url, selector, attribute) {
    return fetchHtml(url).then(doc => doc.querySelector(selector)?.getAttribute(attribute));
  }

  function sequence(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
  }

  const IconArrowAutofitDown =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\n  <path d="M18 4v17" />\n  <path d="M15 18l3 3l3 -3" />\n</svg>\n';

  const IconArrowAutofitHeight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\n  <path d="M18 14v7" />\n  <path d="M18 3v7" />\n  <path d="M15 18l3 3l3 -3" />\n  <path d="M15 6l3 -3l3 3" />\n</svg>\n';

  const IconArrowAutofitLeft =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\n  <path d="M20 18h-17" />\n  <path d="M6 15l-3 3l3 3" />\n</svg>\n';

  const IconArrowAutofitRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\n  <path d="M4 18h17" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n';

  const IconArrowAutofitWidth =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\n  <path d="M10 18h-7" />\n  <path d="M21 18h-7" />\n  <path d="M6 15l-3 3l3 3" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n';

  const IconArrowBigLeft =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\n  />\n</svg>\n';

  const IconArrowBigRight =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\n  />\n</svg>\n';

  const IconBookmark =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\n</svg>\n';

  const IconBookmarkOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const IconBookmarks =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmarks"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\n</svg>\n';

  const IconCategory =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-category"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4h6v6h-6z" />\n  <path d="M14 4h6v6h-6z" />\n  <path d="M4 14h6v6h-6z" />\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n</svg>\n';

  const IconCheck =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-check toggler-on"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M5 12l5 5l10 -10" />\n</svg>\n';

  const IconDeviceFloppy =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-device-floppy"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M14 4l0 4l-6 0l0 -4" />\n</svg>\n';

  const IconExternalLink =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-external-link"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\n  <path d="M11 13l9 -9" />\n  <path d="M15 4h5v5" />\n</svg>\n';

  const IconEye =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\n</svg>\n';

  const IconEyeOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\n  <path\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const IconFileDownload =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-file-download"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M12 17v-6" />\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\n</svg>\n';

  const IconKeyboard =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-keyboard"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\n  <path d="M6 10l0 .01" />\n  <path d="M10 10l0 .01" />\n  <path d="M14 10l0 .01" />\n  <path d="M18 10l0 .01" />\n  <path d="M6 14l0 .01" />\n  <path d="M18 14l0 .01" />\n  <path d="M10 14l4 .01" />\n</svg>\n';

  const IconListNumbers =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-list-numbers"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M11 6h9" />\n  <path d="M11 12h9" />\n  <path d="M12 18h8" />\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\n  <path d="M6 10v-6l-2 2" />\n</svg>\n';

  const IconLoader2 =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-loader-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3a9 9 0 1 0 9 9" />\n</svg>\n';

  const IconLocationCog =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n';

  const IconMenu2 =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-menu-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6l16 0" />\n  <path d="M4 12l16 0" />\n  <path d="M4 18l16 0" />\n</svg>\n';

  const IconMessage =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-message"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 9h8" />\n  <path d="M8 13h6" />\n  <path\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\n  />\n</svg>\n';

  const IconMoon =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-moon"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\n</svg>\n';

  const IconPalette =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-palette"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\n  />\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n';

  const IconPencil =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-pencil"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n</svg>\n';

  const IconPhoto =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\n</svg>\n';

  const IconPhotoOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\n  />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\n  <path\n    d="M3 3l18 18"\n    color="orange"\n  />\n</svg>\n';

  const IconPlayerPause =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-pause"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n</svg>\n';

  const IconPlayerPlay =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-play"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M7 4v16l13 -8z" />\n</svg>\n';

  const IconRefresh =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-refresh"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\n</svg>\n';

  const IconSettings =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-settings"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\n  />\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\n</svg>\n';

  const IconSettingsOff =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\n  />\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\n  <path d="M3 3l18 18" />\n</svg>\n';

  const IconSpacingVertical =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-spacing-vertical"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\n  <path d="M16 12h-8" />\n</svg>\n';

  const IconSun =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-sun"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\n  <path\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\n  />\n</svg>\n';

  const IconTrash =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-trash"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 7l16 0" />\n  <path d="M10 11l0 6" />\n  <path d="M14 11l0 6" />\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\n</svg>\n';

  const IconWorldCog =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\n  <path d="M3.6 9h16.8" />\n  <path d="M3.6 15h8.9" />\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n';

  const IconX =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-x toggler-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 6l-12 12" />\n  <path d="M6 6l12 12" />\n</svg>\n';

  const IconZoomCancel =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-cancel"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M8 8l4 4" />\n  <path d="M12 8l-4 4" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const IconZoomIn =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M10 7l0 6" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const IconZoomInArea =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 13v4" />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n';

  const IconZoomOut =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n';

  const IconZoomOutArea =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n';

  const IconZoomPan =
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-pan"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n  <path d="M17 17l-2.5 -2.5" />\n  <path d="M10 5l2 -2l2 2" />\n  <path d="M19 10l2 2l-2 2" />\n  <path d="M5 10l-2 2l2 2" />\n  <path d="M10 19l2 2l2 -2" />\n</svg>\n';

  const listBookmarks = () => {
    if (isEmpty(getSettingsValue('bookmarks'))) {
      return [getLocaleString('LIST_EMPTY')];
    }
    return getSettingsValue('bookmarks').map(
      (mark, index) => html`
        <div
          id="Bookmark${index + 1}"
          class="BookmarkItem"
        >
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${mark.name}</span>
            <br />
            <a
              class="bookmarkURl"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(mark.date).toISOString().slice(0, 10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${mark.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a
              class=""
              href="${mark.url}"
              target="_blank"
            >
              <button
                class="ControlButton open"
                title="Open Bookmark"
                type="button"
              >
                ${IconExternalLink}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${mark.url}"
            >
              ${IconTrash}
            </button>
          </span>
        </div>
      `,
    );
  };
  const BookmarkPanel = () => html`
    <div
      id="BookmarksPanel"
      class="panel"
    >
      <button
        id="CloseBookmarks"
        class="closeButton"
        title="${getLocaleString('CLOSE')}"
      >
        ${IconX}
      </button>
      <button
        class="Bookmark simpleButton"
        title="${getLocaleString('BOOKMARK')}"
      >
        ${IconBookmark} ${IconBookmarkOff}
      </button>
      <h2>${getLocaleString('BOOKMARKS')}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;
  function reloadBookmarks() {
    const list = document.getElementById('BookmarksList');
    if (list) {
      list.innerHTML = listBookmarks().join('');
    }
  }

  function scrollToElement(ele) {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      chapter?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
  }
  function addEvent(ev, fn) {
    return elem => elem.addEventListener(ev, fn);
  }
  function transformScrollToHorizontal(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  function transformScrollToHorizontalReverse(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft -= event.deltaY + event.deltaX;
    event.preventDefault();
  }

  function buttonBookmarksClose() {
    document.querySelector('#BookmarksPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      changeSettingsValue('bookmarks', b => b.filter(el => el.url !== url));
      if (url === window.location.href) {
        document.querySelector('#MangaOnlineViewer')?.classList.remove('bookmarked');
      }
    }
  }
  function buttonEraseBookmarks(event) {
    const target = event.currentTarget.value;
    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: getLocaleString('BOOKMARK_REMOVED'),
      timer: 1e4,
      icon: 'error',
    });
    removeURLBookmark(target);
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
  }
  function buttonBookmarksOpen() {
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
    document.querySelector('#BookmarksPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonBookmark(event) {
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('bookmarked');
    const pagesDistance = [...document.querySelectorAll('.MangaPage')].map(element =>
      Math.abs(element.offsetTop - window.scrollY),
    );
    const currentPage = parseInt(
      event.currentTarget.parentElement?.querySelector('.PageIndex')?.textContent ?? '0',
      10,
    );
    const num = currentPage || pagesDistance.indexOf(Math.min(...pagesDistance)) + 1;
    const mark = {
      name:
        document
          .querySelector('title')
          ?.textContent?.trim()
          .replace(/^\(\d+%\) */, '') ?? '',
      url: window.location.href,
      page: num,
      date: /* @__PURE__ */ new Date().toISOString().slice(0, 10),
    };
    if (isBookmarked(mark.url)) {
      changeSettingsValue('bookmarks', b => b.filter(el => el.url !== mark.url));
      Swal.fire({
        title: getLocaleString('BOOKMARK_REMOVED'),
        timer: 1e4,
        icon: 'error',
      });
    } else {
      changeSettingsValue('bookmarks', b => [...b, mark]);
      Swal.fire({
        title: getLocaleString('BOOKMARK_SAVED'),
        html: getLocaleString('BOOKMARK_SAVED').replace('##NUM##', num.toString()),
        icon: 'success',
      });
    }
    reloadBookmarks();
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
  }
  function bookmarks$1() {
    document.querySelector('#bookmarks')?.addEventListener('click', buttonBookmarksOpen);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonBookmarksClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonBookmarksClose);
    document
      .querySelectorAll('.bookmarkFunctions .erase')
      ?.forEach(addEvent('click', buttonEraseBookmarks));
    document.querySelectorAll('.Bookmark')?.forEach(addEvent('click', buttonBookmark));
    document.querySelector('.AddBookmark')?.addEventListener('click', buttonBookmark);
  }

  function createStyleElement(id, content) {
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(content));
    return style;
  }
  function appendStyleSheet(id, content) {
    if (!document.querySelector(`#${id}`)) {
      const head = document.head ?? document.querySelector('head');
      head.appendChild(createStyleElement(id, content));
    }
  }
  function removeStyleSheet(id) {
    document.querySelectorAll(`style[id="${id}"]`).forEach(elem => {
      elem.remove();
    });
  }
  function replaceStyleSheet(id, content) {
    removeStyleSheet(id);
    appendStyleSheet(id, content);
  }
  function wrapStyle(id, css) {
    return html`
      <style id="${id}">
        ${css}
      </style>
    `;
  }

  function buttonResetSettings() {
    resetSettings();
    const elem = document.getElementById('MangaOnlineViewer');
    elem?.removeAttribute('locale');
  }
  function changeSettingsScope(event) {
    const scope = event.currentTarget.value;
    toggleLocalSettings(scope === 'true');
  }
  function changeLocale(event) {
    const locale = event.currentTarget.value;
    saveSettingsValue('locale', locale);
    const elem = document.getElementById('MangaOnlineViewer');
    elem?.setAttribute('locale', locale);
  }
  function changeLoadMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('loadMode', mode);
  }
  function checkFitWidthOversize(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('fitWidthIfOversize', checked);
    saveSettingsValue('fitWidthIfOversize', checked);
  }
  function checkFitHeightHorizontal(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('fitHeightInHorizontal', checked);
    saveSettingsValue('fitHeightInHorizontal', checked);
  }
  function checkVerticalSeparator(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Chapter')?.classList.toggle('separator', checked);
    saveSettingsValue('verticalSeparator', checked);
  }
  function checkShowThumbnails(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#Navigation')?.classList.toggle('disabled', !checked);
    saveSettingsValue('showThumbnails', checked);
    applyZoom();
  }
  function checkEnableComments(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#CommentsButton')?.classList.toggle('disabled', !checked);
    saveSettingsValue('enableComments', checked);
    applyZoom();
  }
  function checkAutoDownload(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('downloadZip', checked);
    if (checked) {
      Swal.fire({
        title: getLocaleString('ATTENTION'),
        text: getLocaleString('AUTO_DOWNLOAD'),
        timer: 1e4,
        icon: 'info',
      });
    }
  }
  function checkLazyLoad(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('lazyLoadImages', checked);
    const start = document.querySelector('.lazyStart');
    start?.classList.toggle('show', getSettingsValue('lazyLoadImages'));
    if (checked) {
      Swal.fire({
        title: getLocaleString('WARNING'),
        html: getLocaleString('LAZY_LOAD'),
        icon: 'warning',
      });
    }
  }
  function checkPauseAnimatedWebp(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('pauseAnimatedWebp', checked);
  }
  function changeLazyStart(event) {
    const start = event.currentTarget.value;
    saveSettingsValue('lazyStart', parseInt(start, 10));
  }
  function changePagesPerSecond(event) {
    const timer = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('throttlePageLoad', timer);
    if (timer < 100) {
      Swal.fire({
        title: getLocaleString('SPEED_WARNING'),
        html: getLocaleString('SPEED_WARNING_MESSAGE'),
        icon: 'warning',
      });
    }
  }
  function changeMaxConcurrentLoads(event) {
    const concurrent = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('maxConcurrentLoads', concurrent);
  }
  function changeDefaultBatchDivide(event) {
    const divide = parseInt(event.currentTarget.value, 10);
    if (Number.isNaN(divide)) return;
    saveSettingsValue('defaultBatchDivide', Math.min(9, Math.max(1, divide)));
  }
  function changeZoomStep(event) {
    const step = event.currentTarget.value;
    saveSettingsValue('zoomStep', parseInt(step, 10));
  }
  function changeMinZoom(event) {
    const min = event.currentTarget.value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    saveSettingsValue('minZoom', parseInt(min, 10));
  }
  function checkHideImageControls(event) {
    const checked = event.currentTarget.checked;
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('hideControls', checked);
    saveSettingsValue('hidePageControls', checked);
  }
  function updateHeaderType(mode) {
    const header = document.querySelector('#Header');
    if (!header?.classList.contains(mode)) {
      const menu = document.querySelector('#menu');
      header?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'visible');
      menu?.classList.remove('scroll', 'click', 'hover', 'fixed', 'simple', 'hide');
      header?.classList.add(mode);
      menu?.classList.add(mode);
    }
  }
  function changeHeaderType(event) {
    const headerType = event.currentTarget.value;
    updateHeaderType(headerType);
    saveSettingsValue('header', headerType);
  }
  function changeScrollHeight(event) {
    const { value } = event.currentTarget;
    saveSettingsValue('scrollHeight', parseInt(value, 10));
  }
  function options() {
    document.querySelector('#ResetSettings')?.addEventListener('click', buttonResetSettings);
    document
      .querySelectorAll('#SettingsScope input[type=radio]')
      .forEach(addEvent('change', changeSettingsScope));
    document.querySelector('#locale')?.addEventListener('change', changeLocale);
    document.querySelector('#fitIfOversize')?.addEventListener('change', checkFitWidthOversize);
    document.querySelector('#fitHeightHorizontal')?.addEventListener('change', checkFitHeightHorizontal);
    document
      .querySelector('#verticalSeparator')
      ?.addEventListener('change', checkVerticalSeparator);
    document.querySelector('#loadMode')?.addEventListener('change', changeLoadMode);
    document.querySelector('#showThumbnails')?.addEventListener('change', checkShowThumbnails);
    document.querySelector('#enableComments')?.addEventListener('change', checkEnableComments);
    document.querySelector('#downloadZip')?.addEventListener('change', checkAutoDownload);
    document.querySelector('#lazyLoadImages')?.addEventListener('change', checkLazyLoad);
    document.querySelector('#pauseAnimatedWebp')?.addEventListener('change', checkPauseAnimatedWebp);
    document.querySelector('#lazyStart')?.addEventListener('change', changeLazyStart);
    document.querySelector('#PagesPerSecond')?.addEventListener('change', changePagesPerSecond);
    document.querySelector('#maxConcurrentLoads')?.addEventListener('change', changeMaxConcurrentLoads);
    document.querySelector('#defaultBatchDivide')?.addEventListener('change', changeDefaultBatchDivide);
    document.querySelector('#zoomStep')?.addEventListener('change', changeZoomStep);
    document.querySelector('#minZoom')?.addEventListener('input', changeMinZoom);
    document.querySelector('#hidePageControls')?.addEventListener('change', checkHideImageControls);
    document.querySelector('#headerType')?.addEventListener('change', changeHeaderType);
    document.querySelector('#scrollHeight')?.addEventListener('change', changeScrollHeight);
  }

  function applyZoom(
    mode = getSettingsValue('zoomMode'),
    value = getSettingsValue('defaultZoom'),
    pages = '.PageContent img',
  ) {
    const globalZoomVal = document.querySelector('#ZoomVal');
    const zoom = document.querySelector('#Zoom');
    if (globalZoomVal) {
      if (zoom && mode === 'percent') {
        globalZoomVal.textContent = `${value}%`;
        zoom.value = value.toString();
      } else {
        globalZoomVal.textContent = mode;
      }
    }
    if (mode === 'height') {
      updateHeaderType('click');
    } else {
      updateHeaderType(getSettingsValue('header'));
    }

    // 方格模式下的缩放处理
    const gridBox = document.querySelector('#GridBox');
    if (gridBox && gridBox.style.display !== 'none') {
      if (mode === 'percent' && value >= 0) {
        const scale = value / 100;
        gridBox.style.transform = `scale(${scale})`;
        gridBox.style.transformOrigin = 'top center';
        // 调整容器高度以适应缩放后的内容
        gridBox.style.marginBottom = `${(scale - 1) * gridBox.scrollHeight}px`;
      } else if (mode === 'width') {
        gridBox.style.transform = 'none';
        gridBox.style.marginBottom = '0';
        gridBox.style.width = '100%';
      } else if (mode === 'height') {
        gridBox.style.transform = 'none';
        gridBox.style.marginBottom = '0';
      } else {
        gridBox.style.transform = 'none';
        gridBox.style.marginBottom = '0';
      }
      return; // 方格模式下不需要处理原始图片
    }

    const pg = [...document.querySelectorAll(pages)];
    pg.forEach(img => {
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.removeAttribute('style');
      // Do not let the viewport-based minimum width block actual zooming.
      img.style.minWidth = '0';
      if (mode === 'width') {
        img.style.width = `${window.innerWidth}px`;
      } else if (mode === 'height') {
        const nextHeight = window.innerHeight + (getSettingsValue('showThumbnails') ? -29 : 0);
        img.style.height = `${nextHeight}px`;
      } else if (mode === 'percent' && value >= 0 && value !== 100) {
        img.style.width = `${img.naturalWidth * (value / 100)}px`;
      }
    });
  }
  function invalidateImageCache(src, repeat) {
    const url = src.replace(/[?&]forceReload=\d+$/, '');
    const symbol = !url.includes('?') ? '?' : '&';
    return `${url + symbol}forceReload=${repeat}`;
  }
  function getRepeatValue(src) {
    let repeat = 1;
    const cache = src?.match(/forceReload=(\d+)$/);
    if (cache?.at(1)) {
      repeat = parseInt(cache[1], 10) + 1;
    }
    return repeat;
  }
  function reloadImage(img) {
    const src = img.getAttribute('src');
    if (!src) {
      return;
    }
    img.removeAttribute('src');
    if (isBase64ImageUrl(src) || isObjectURL(src)) {
      img.setAttribute('src', src);
    } else {
      img.setAttribute('src', invalidateImageCache(src, getRepeatValue(src)));
    }
  }
  // 用于记录本次页面加载中已下载的URL（不持久化，刷新页面自动清除）
  const downloadedInThisSession = new Set();

  // 用于防止onImagesDone无限重试
  let onImagesDoneRetryCount = 0;
  const MAX_RETRY_COUNT = 10;

  function onImagesDone() {
    logScript('Images Loading Complete');

    // 额外验证：确保所有已创建的图片都真正加载完成
    const allImgs = document.querySelectorAll('.PageContent .PageImg');
    const loadedImgs = document.querySelectorAll('.PageContent .PageImg.imgLoaded');

    if (allImgs.length !== loadedImgs.length) {
      logScript(`Warning: Not all images loaded yet (${loadedImgs.length}/${allImgs.length}), skipping auto-download`);
      return;
    }

    // 验证：检查所有图片的blob是否都已缓存（重要！）
    let blobCachedCount = 0;
    let blobNotCachedCount = 0;
    allImgs.forEach(img => {
      const cached = img.getAttribute('data-blob-cached');
      if (cached === 'true') {
        blobCachedCount++;
      } else {
        blobNotCachedCount++;
        logScript(`Warning: Image ${img.id} blob not cached yet`);
      }
    });

    logScript(`Blob cache status: ${blobCachedCount} cached, ${blobNotCachedCount} not cached`);

    if (blobNotCachedCount > 0 && onImagesDoneRetryCount < MAX_RETRY_COUNT) {
      onImagesDoneRetryCount++;
      logScript(`Warning: ${blobNotCachedCount} images blob not cached, delaying auto-download (retry ${onImagesDoneRetryCount}/${MAX_RETRY_COUNT})`);
      // 延迟重试
      setTimeout(() => {
        onImagesDone();
      }, 1000);
      return;
    }

    if (blobNotCachedCount > 0) {
      logScript(`Error: ${blobNotCachedCount} images blob still not cached after ${MAX_RETRY_COUNT} retries, proceeding anyway`);
    }

    // 重置重试计数
    onImagesDoneRetryCount = 0;

    // 检查是否已经下载过，避免切换标签后重复下载
    const downloadBtn = document.getElementById('download');
    const hasDownloaded = downloadBtn?.classList.contains('downloaded');

    // 检查本次页面加载中是否已下载（刷新页面后自动清除）
    const currentUrl = window.location.href;
    const alreadyDownloaded = downloadedInThisSession.has(currentUrl);

    if (getSettingsValue('downloadZip') && !hasDownloaded && !alreadyDownloaded) {
      // 如果正在强制下载，强制中断它并启动正常下载
      if (isDownloading && currentDownloadType === 'force') {
        logScript(`Auto-download triggered: force stopping force download, starting normal download`);
        
        // 立即重置状态
        isDownloading = false;
        currentDownloadType = null;
        
        // 移除强制下载的进度条
        const progressBar = document.getElementById('downloadProgress');
        if (progressBar) {
          progressBar.remove();
        }
        
        // 重置强制下载按钮状态
        const forceBtn = document.getElementById('downloadPart');
        if (forceBtn) {
          forceBtn.classList.remove('loading');
        }
        
        // 触发正常下载
        downloadBtn?.dispatchEvent(new Event('click'));
      } else if (!isDownloading) {
        logScript(`Auto-download triggered: ${allImgs.length} images ready, all blobs cached`);
        downloadBtn?.dispatchEvent(new Event('click'));
      }
    }
    downloadBtn?.classList.remove('disabled');
  }
  function clearLoadStallTimer() {
    if (nprogressStallTimer) {
      clearTimeout(nprogressStallTimer);
      nprogressStallTimer = null;
    }
  }
  function getLoadStallNotice() {
    let notice = document.getElementById('LoadStallNotice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'LoadStallNotice';
      notice.setAttribute(
        'style',
        [
          'position:fixed',
          'left:12px',
          'top:255px',
          'z-index:1065',
          'max-width:260px',
          'padding:10px 12px',
          'border-left:4px solid #ff4d6d',
          'border-radius:8px',
          'background:rgba(34,34,34,0.96)',
          'color:#fff',
          'font-size:14px',
          'line-height:1.45',
          'box-shadow:0 8px 24px rgba(0,0,0,0.35)',
          'pointer-events:auto',
          'cursor:pointer',
          'white-space:normal',
          'word-break:break-word',
          'display:none',
        ].join(';'),
      );
      notice.title = '点击关闭并尝试重载未加载图片';
      notice.addEventListener('click', () => {
        retryUnloadedPages();
      });
      document.body.appendChild(notice);
    }
    return notice;
  }
  function hideLoadStallNotice() {
    const notice = document.getElementById('LoadStallNotice');
    if (notice) {
      notice.style.display = 'none';
      notice.innerHTML = '';
    }
  }
  function showLoadStallToast(stalledMs) {
    if (hasShownLoadStallToast) return;
    hasShownLoadStallToast = true;
    const seconds = Math.max(LOAD_STALL_TIMEOUT / 1000, Math.floor(stalledMs / 1000));
    const notice = getLoadStallNotice();
    notice.innerHTML = `脚本停止加载<br>已 ${seconds} 秒没有新进度<br>请强下后再执行跳页加载`;
    notice.style.display = 'block';
  }
  function scheduleLoadStallCheck() {
    clearLoadStallTimer();
    if (latestNProgressState.total <= 0 || latestNProgressState.loaded >= latestNProgressState.total) return;
    nprogressStallTimer = setTimeout(() => {
      const stalledMs = Date.now() - lastNProgressAt;
      if (latestNProgressState.loaded < latestNProgressState.total && stalledMs >= LOAD_STALL_TIMEOUT) {
        showLoadStallToast(stalledMs);
      }
    }, LOAD_STALL_TIMEOUT + 200);
  }
  function resetLoadStallTracking() {
    clearLoadStallTimer();
    lastNProgressKey = '';
    lastNProgressAt = Date.now();
    latestNProgressState = { loaded: 0, total: 0, unloaded: 0 };
    hasShownLoadStallToast = false;
    hideLoadStallNotice();
  }
  function updateProgress() {
    // 修复：无论在哪种视图模式下都能正确计数
    // 优先从原始Chapter容器中获取图片状态
    const chapter = document.querySelector('#Chapter');
    let total = 0;
    let loaded = 0;
    let unloadedPages = [];

    if (chapter) {
      const allImgs = chapter.querySelectorAll('.PageContent .PageImg');
      total = allImgs.length;
      loaded = chapter.querySelectorAll('.PageContent .PageImg.imgLoaded').length;

      // 获取起始页码（从第一个Page元素的ID中提取）
      const firstPage = chapter.querySelector('.MangaPage');
      const beginPage = firstPage ? parseInt(firstPage.id.replace('Page', ''), 10) : 1;

      // 收集未加载的页面（使用实际页码）
      allImgs.forEach((img) => {
        if (!img.classList.contains('imgLoaded')) {
          // 从父容器的ID中提取实际页码
          const pageContainer = img.closest('.MangaPage');
          if (pageContainer && pageContainer.id) {
            const match = pageContainer.id.match(/^Page(\d+)$/);
            if (match) {
              const actualPageNum = parseInt(match[1], 10);
              unloadedPages.push(actualPageNum);
            }
          }
        }
      });
    }

    // 如果Chapter被隐藏（瀑布流/方格模式），仍然从隐藏的Chapter中获取状态
    if (total === 0) {
      const hiddenChapter = document.querySelector('#Chapter');
      if (hiddenChapter) {
        total = hiddenChapter.querySelectorAll('.PageContent .PageImg').length;
        loaded = hiddenChapter.querySelectorAll('.PageContent .PageImg.imgLoaded').length;
      }
    }

    const actualTotal = total;

    // 防止除零错误
    if (total === 0) {
      total = 1;
    }

    const progressKey = `${loaded}/${actualTotal}/${unloadedPages.length}`;
    latestNProgressState = {
      loaded,
      total: actualTotal,
      unloaded: unloadedPages.length,
    };
    if (progressKey !== lastNProgressKey) {
      lastNProgressKey = progressKey;
      lastNProgressAt = Date.now();
      hasShownLoadStallToast = false;
      hideLoadStallNotice();
    }

    const percentage = Math.floor((loaded / total) * 100);
    const title = document.querySelector('title');
    if (title) {
      const status = percentage === 100 ? '完成' : percentage;
      title.innerHTML = html`[${status}] [${total}页]${document.querySelector('#MangaTitle')?.textContent}`;
    }
    document.querySelectorAll('#Counters i, #NavigationCounters i').forEach(ele => {
      ele.textContent = loaded.toString();
    });

    // 更新未加载页面显示
    updateUnloadedPagesDisplay(unloadedPages);

    NProgress.configure({
      showSpinner: false,
    }).set(loaded / total);
    logScript(`Progress: ${percentage}%`);
    if (actualTotal > 0 && loaded === actualTotal) {
      clearLoadStallTimer();
      hideLoadStallNotice();
      // 修复：添加延迟确保所有图片的 blob 缓存都已完成
      // 特别是在跳页加载模式下，图片可能异步加载，需要等待缓存完成
      setTimeout(() => {
        onImagesDone();
      }, 800);
    } else if (actualTotal > 0 && loaded < actualTotal) {
      scheduleLoadStallCheck();
    }
  }

  // 更新未加载页面显示
  function updateUnloadedPagesDisplay(unloadedPages) {
    // 更新未加载数量显示
    const countEl = document.querySelector('#unloadedCount');
    if (countEl) {
      countEl.textContent = unloadedPages.length.toString();
    }

    // 更新下拉菜单
    const select = document.querySelector('#gotoUnloadedPage');
    if (!select) return;

    if (unloadedPages.length === 0) {
      select.innerHTML = '<option selected>#</option>';
    } else {
      select.innerHTML = '<option selected>#</option>' +
        unloadedPages.map(pageNum =>
          `<option value="${pageNum}">${pageNum}</option>`
        ).join('');
    }

    // 绑定选择事件（只绑定一次）
    if (!select.dataset.bindEvent) {
      select.dataset.bindEvent = 'true';
      select.addEventListener('change', (e) => {
        const pageNum = parseInt(e.target.value, 10);
        if (pageNum) {
          applyZoom();
          scrollToElement(document.querySelector(`#Page${pageNum}`));
        }
      });
    }
  }
  const applyLastGlobalZoom = (pages = '.PageContent img') => {
    const zoomVal = document.querySelector('#ZoomVal')?.textContent?.trim();
    if (zoomVal?.match(/^\d+%$/)) {
      applyZoom('percent', parseInt(zoomVal, 10), pages);
    } else {
      applyZoom(zoomVal, 100, pages);
    }
  };

  // 图片数据缓存，避免下载时二次请求（提前定义供全局使用）
  const imageCache = new Map();

  // 图片加载队列管理器（优化：避免大量setTimeout堆积导致卡顿）
  const imageLoadQueue = {
    queue: [],
    loading: 0,
    processing: false,
    get maxConcurrent() {
      return getSettingsValue('maxConcurrentLoads') || 15;
    },

    add(task) {
      this.queue.push(task);
      if (!this.processing) {
        this.process();
      }
    },

    async process() {
      if (this.processing) return;
      this.processing = true;

      while (this.queue.length > 0 && this.loading < this.maxConcurrent) {
        const task = this.queue.shift();
        this.loading++;

        // 不等待task完成，立即处理下一个
        task()
          .catch(e => logScript('Image load task failed:', e))
          .finally(() => {
            this.loading--;
            // 触发下一轮处理
            if (this.queue.length > 0 && !this.processing) {
              this.process();
            }
          });
      }

      this.processing = false;
    }
  };

  function onImagesSuccess() {
    return instance => {
      instance.images.forEach(image => {
        image.img.classList.add('imgLoaded');
        image.img.classList.remove('imgBroken');
        const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
        const thumb = document.getElementById(thumbId);
        thumb?.classList.remove('imgBroken');
        if (thumb) {
          thumb.setAttribute('src', getThumbnailSrc(image.img));
        }
        applyLastGlobalZoom(`#${image.img.id}`);
        updateProgress();
      });
    };
  }
  function onImagesFail(manga) {
    return instance => {
      instance.images.forEach(image => {
        image.img.classList.add('imgBroken');
        const thumbId = image.img.id.replace('PageImg', 'ThumbnailImg');
        const thumb = document.getElementById(thumbId);
        thumb?.classList.add('imgBroken');
        const src = image.img.getAttribute('src');
        if (src && getRepeatValue(src) <= getSettingsValue('maxReload')) {
          setTimeout(async () => {
            if (manga.reload) {
              const id = parseInt(`0${/\d+/.exec(image.img.id)}`, 10);
              const alt = await manga.reload(id);
              image.img.setAttribute('src', alt);
            } else {
              reloadImage(image.img);
            }
            // 使用原生事件代替imagesLoaded
            if (image.img.parentElement) {
              const img = image.img;
              img.onload = function () {
                this.classList.add('imgLoaded');
                this.classList.remove('imgBroken');
                const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
                const thumb = document.getElementById(thumbId);
                thumb?.classList.remove('imgBroken');
                if (thumb) {
                  thumb.setAttribute('src', getThumbnailSrc(this));
                }
                applyLastGlobalZoom(`#${this.id}`);
                updateProgress();
              };
              img.onerror = function () {
                this.classList.add('imgBroken');
                const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
                const thumb = document.getElementById(thumbId);
                thumb?.classList.add('imgBroken');
              };
            }
          }, 2e3);
        }
      });
    };
  }
  function normalizeUrl(url, baseUrl = window.location.href) {
    if (url) {
      let uri = url.trim();
      if (uri.startsWith('//')) {
        uri = `https:${uri}`;
      } else if (uri.startsWith('/')) {
        // 相对于根路径
        uri = `${window.location.origin}${uri}`;
      } else if (!uri.startsWith('http') && !uri.startsWith('data:') && !uri.startsWith('blob:')) {
        // 相对路径，需要基于 baseUrl 解析
        try {
          uri = new URL(uri, baseUrl).href;
        } catch (e) {
          logScript('Failed to normalize URL:', uri, 'with base:', baseUrl);
        }
      }
      return uri;
    }
    return '';
  }

  // 提取公共的图片blob缓存函数
  async function fetchImageBlob(src, referer = window.location.href) {
    // 检查缓存
    if (imageBlobCache.has(src)) {
      return { blob: imageBlobCache.get(src), fromCache: true };
    }

    // 使用GM_xmlhttpRequest获取
    try {
      const blob = await new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: src,
          headers: { referer, origin: window.location.origin },
          responseType: 'blob',
          onload(res) {
            if (res.status === 200) {
              resolve(res.response);
            } else {
              reject(new Error(`HTTP ${res.status}`));
            }
          },
          onerror: reject,
          ontimeout: reject
        });
      });

      // 缓存blob
      imageBlobCache.set(src, blob);

      // 内存管理：动态限制缓存大小（根据页面总数，至少保留所有图片）
      const maxCacheSize = Math.max(1000, document.querySelectorAll('.PageImg').length + 100);
      if (imageBlobCache.size > maxCacheSize) {
        const firstKey = imageBlobCache.keys().next().value;
        imageBlobCache.delete(firstKey);
      }

      return { blob, fromCache: false };
    } catch (e) {
      throw new Error(`Failed to fetch ${src}: ${e.message}`);
    }
  }
  function getThumbnailSrc(img) {
    return img.getAttribute('data-preview-src') ?? img.getAttribute('src') ?? '';
  }
  function isLikelyAnimatedImageSource(src = '', blob) {
    const type = blob?.type ?? '';
    return (
      type === 'image/webp' ||
      type === 'image/gif' ||
      /\.webp(?:$|[?#])/i.test(src) ||
      /\.gif(?:$|[?#])/i.test(src)
    );
  }
  function readFourCC(bytes, offset) {
    return String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
  }
  function readUint24(bytes, offset) {
    return bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16);
  }
  function parseAnimatedWebpInfoFromBuffer(buffer) {
    const bytes = new Uint8Array(buffer);
    if (
      bytes.length < 16 ||
      readFourCC(bytes, 0) !== 'RIFF' ||
      readFourCC(bytes, 8) !== 'WEBP'
    ) {
      return { isAnimated: false, totalDurationMs: 0 };
    }

    let offset = 12;
    let frameCount = 0;
    let totalDurationMs = 0;
    while (offset + 8 <= bytes.length) {
      const chunkType = readFourCC(bytes, offset);
      const chunkSize = new DataView(buffer, offset + 4, 4).getUint32(0, true);
      const chunkDataOffset = offset + 8;

      if (chunkType === 'ANMF' && chunkDataOffset + 15 < bytes.length) {
        frameCount++;
        totalDurationMs += Math.max(10, readUint24(bytes, chunkDataOffset + 12));
      }

      offset += 8 + chunkSize + (chunkSize % 2);
    }

    return {
      isAnimated: frameCount > 0,
      frameCount,
      totalDurationMs: totalDurationMs || frameCount * 100,
    };
  }
  function parseAnimatedGifInfoFromBuffer(buffer) {
    const bytes = new Uint8Array(buffer);
    if (
      bytes.length < 14 ||
      (readFourCC(bytes, 0) !== 'GIF8')
    ) {
      return { isAnimated: false, totalDurationMs: 0 };
    }

    let offset = 13;
    if (bytes[10] & 0x80) {
      offset += 3 * (2 ** ((bytes[10] & 0x07) + 1));
    }

    let frameCount = 0;
    let totalDurationMs = 0;
    let currentDelayMs = 100;

    while (offset < bytes.length) {
      const blockType = bytes[offset];
      if (blockType === 0x21) {
        const label = bytes[offset + 1];
        if (label === 0xF9 && offset + 7 < bytes.length) {
          currentDelayMs = Math.max(
            20,
            new DataView(buffer, offset + 4, 2).getUint16(0, true) * 10,
          );
          offset += 8;
          continue;
        }

        offset += 2;
        while (offset < bytes.length) {
          const blockSize = bytes[offset];
          offset += 1;
          if (blockSize === 0) break;
          offset += blockSize;
        }
        continue;
      }

      if (blockType === 0x2C) {
        frameCount++;
        totalDurationMs += currentDelayMs;

        if (offset + 9 >= bytes.length) break;
        const packed = bytes[offset + 9];
        offset += 10;
        if (packed & 0x80) {
          offset += 3 * (2 ** ((packed & 0x07) + 1));
        }

        offset += 1;
        while (offset < bytes.length) {
          const blockSize = bytes[offset];
          offset += 1;
          if (blockSize === 0) break;
          offset += blockSize;
        }
        continue;
      }

      if (blockType === 0x3B) break;
      offset += 1;
    }

    return {
      isAnimated: frameCount > 1,
      frameCount,
      totalDurationMs: totalDurationMs || frameCount * 100,
    };
  }
  async function createAnimatedWebpPreview(blob) {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      if (typeof createImageBitmap === 'function') {
        try {
          const bitmap = await createImageBitmap(blob);
          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          ctx.drawImage(bitmap, 0, 0);
          bitmap.close();
          return canvas.toDataURL('image/png');
        } catch (bitmapError) {
          logScript('createImageBitmap preview fallback:', bitmapError);
        }
      }

      const blobUrl = URL.createObjectURL(blob);
      try {
        const previewImg = await new Promise((resolve, reject) => {
          const tempImg = new Image();
          tempImg.onload = () => resolve(tempImg);
          tempImg.onerror = reject;
          tempImg.src = blobUrl;
        });
        canvas.width = previewImg.naturalWidth || previewImg.width;
        canvas.height = previewImg.naturalHeight || previewImg.height;
        if (!canvas.width || !canvas.height) return null;
        ctx.drawImage(previewImg, 0, 0);
        return canvas.toDataURL('image/png');
      } finally {
        URL.revokeObjectURL(blobUrl);
      }
    } catch (e) {
      logScript('Failed to create animated webp preview:', e);
      return null;
    }
  }
  async function getAnimatedWebpInfo(cacheKey, blob, wantPreview = false) {
    let entry = animatedWebpInfoCache.get(cacheKey);
    if (!entry) {
      entry = (async () => {
        if (!isLikelyAnimatedImageSource(cacheKey, blob)) {
          return { isAnimated: false, frameCount: 0, totalDurationMs: 0, previewSrc: '' };
        }
        const buffer = await blob.arrayBuffer();
        let parsed;
        if (blob?.type === 'image/gif' || /\.gif(?:$|[?#])/i.test(cacheKey)) {
          parsed = parseAnimatedGifInfoFromBuffer(buffer);
        } else {
          parsed = parseAnimatedWebpInfoFromBuffer(buffer);
        }
        return { ...parsed, previewSrc: '' };
      })();
      animatedWebpInfoCache.set(cacheKey, entry);
    }

    const info = await entry;
    if (wantPreview && info.isAnimated && !info.previewSrc) {
      info.previewSrc = await createAnimatedWebpPreview(blob) ?? '';
    }
    return info;
  }
  function getAnimatedWebpElements(img) {
    const page = img.closest('.MangaPage');
    return {
      page,
      media: page?.querySelector('.AnimatedWebpMedia') ?? null,
      canvas: page?.querySelector('.AnimatedWebpCanvas') ?? null,
      toggle: page?.querySelector('.AnimatedWebpToggle') ?? null,
      progress: page?.querySelector('.AnimatedWebpProgress') ?? null,
      bar: page?.querySelector('.AnimatedWebpProgressBar') ?? null,
    };
  }
  function inferAnimatedImageMimeType(src = '', blob) {
    const type = blob?.type ?? '';
    if (type === 'image/webp' || type === 'image/gif') {
      return type;
    }
    if (/\.gif(?:$|[?#])/i.test(src)) {
      return 'image/gif';
    }
    if (/\.webp(?:$|[?#])/i.test(src)) {
      return 'image/webp';
    }
    return '';
  }
  function getAnimatedWebpController(img) {
    return animatedWebpControllerCache.get(img) ?? null;
  }
  function getAnimatedWebpSeekRatio(progress, clientX) {
    if (!progress) return 0;
    const rect = progress.getBoundingClientRect();
    if (!rect.width) return 0;
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  }
  function setAnimatedWebpProgressRatio(img, ratio) {
    const { bar } = getAnimatedWebpElements(img);
    if (bar) {
      const safeRatio = Number.isFinite(ratio) ? Math.min(1, Math.max(0, ratio)) : 0;
      bar.style.width = `${safeRatio * 100}%`;
    }
  }
  function stopAnimatedWebpControllerPlayback(controller) {
    if (!controller) return;
    controller.playing = false;
    controller.playToken = (controller.playToken ?? 0) + 1;
    if (controller.frameTimer) {
      clearTimeout(controller.frameTimer);
      controller.frameTimer = null;
    }
    if (controller.progressRaf) {
      cancelAnimationFrame(controller.progressRaf);
      controller.progressRaf = null;
    }
  }
  function stopAnimatedWebpProgress(img) {
    const controller = getAnimatedWebpController(img);
    if (controller) {
      stopAnimatedWebpControllerPlayback(controller);
    }
    if (img._animatedWebpProgressTimer) {
      clearInterval(img._animatedWebpProgressTimer);
      img._animatedWebpProgressTimer = null;
    }
  }
  function resetAnimatedWebpProgress(img) {
    setAnimatedWebpProgressRatio(img, 0);
  }
  function captureCurrentAnimatedFrame(img) {
    try {
      if (!img.complete || !img.naturalWidth || !img.naturalHeight) return '';
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    } catch (e) {
      logScript('Failed to capture current animated frame:', e);
      return '';
    }
  }
  function clearAnimatedWebpCanvas(img) {
    const controller = getAnimatedWebpController(img);
    const { canvas } = getAnimatedWebpElements(img);
    if (controller?.ctx && canvas) {
      controller.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (canvas) {
      canvas.hidden = true;
    }
  }
  function getAnimatedFrameDurationMs(decoded, fallbackMs) {
    const durationUs = decoded?.image?.duration;
    if (typeof durationUs === 'number' && Number.isFinite(durationUs) && durationUs > 0) {
      return Math.max(20, Math.round(durationUs / 1000));
    }
    return Math.max(20, fallbackMs || 100);
  }
  function drawAnimatedWebpFrame(controller, frame) {
    if (!controller?.ctx || !controller.canvas || !frame) return false;
    const width = frame.displayWidth || frame.codedWidth || frame.width || controller.canvas.width;
    const height = frame.displayHeight || frame.codedHeight || frame.height || controller.canvas.height;
    if (!width || !height) return false;
    if (controller.canvas.width !== width || controller.canvas.height !== height) {
      controller.canvas.width = width;
      controller.canvas.height = height;
    }
    controller.ctx.clearRect(0, 0, controller.canvas.width, controller.canvas.height);
    controller.ctx.drawImage(frame, 0, 0, controller.canvas.width, controller.canvas.height);
    controller.canvas.hidden = false;
    return true;
  }
  function destroyAnimatedWebpController(img, clearCanvas = true) {
    const controller = getAnimatedWebpController(img);
    if (!controller) return;
    stopAnimatedWebpControllerPlayback(controller);
    if (controller.decoder) {
      try {
        controller.decoder.close();
      } catch (e) {
        logScript('Failed to close animated image decoder:', e);
      }
      controller.decoder = null;
    }
    if (clearCanvas) {
      clearAnimatedWebpCanvas(img);
    }
    animatedWebpControllerCache.delete(img);
  }
  function getAnimatedWebpLoopElapsedMs(controller) {
    const totalDurationMs = Math.max(100, controller?.totalDurationMs || 0);
    if (!totalDurationMs) return 0;
    if (!controller?.playing) {
      return controller?.currentLoopElapsedMs ? controller.currentLoopElapsedMs % totalDurationMs : 0;
    }
    return (
      (controller.progressBaseElapsedMs || 0) +
      (performance.now() - (controller.progressStartedAt || performance.now()))
    ) % totalDurationMs;
  }
  function startDecodedAnimatedWebpProgress(controller) {
    if (!controller) return;
    const totalDurationMs = Math.max(100, controller.totalDurationMs || 0);
    if (!totalDurationMs) return;
    if (controller.progressRaf) {
      cancelAnimationFrame(controller.progressRaf);
      controller.progressRaf = null;
    }
    controller.progressBaseElapsedMs = controller.currentLoopElapsedMs || 0;
    controller.progressStartedAt = performance.now();
    const tick = () => {
      if (!controller.playing) return;
      setAnimatedWebpProgressRatio(
        controller.img,
        getAnimatedWebpLoopElapsedMs(controller) / totalDurationMs,
      );
      controller.progressRaf = requestAnimationFrame(tick);
    };
    tick();
  }
  async function ensureAnimatedWebpControllerReady(controller) {
    if (!controller || controller.decoderFailed) return false;
    if (controller.decoder) return true;
    if (typeof ImageDecoder !== 'function' || !controller.mimeType || !controller.blob) {
      controller.decoderFailed = true;
      return false;
    }
    try {
      const decoderData = typeof controller.blob.stream === 'function'
        ? controller.blob.stream()
        : await controller.blob.arrayBuffer();
      controller.decoder = new ImageDecoder({
        data: decoderData,
        type: controller.mimeType,
        preferAnimation: true,
      });
      const firstFrame = await controller.decoder.decode({
        frameIndex: 0,
        completeFramesOnly: true,
      });
      controller.frameCount = Math.max(
        1,
        Number(controller.decoder.tracks?.selectedTrack?.frameCount) ||
          controller.frameCount ||
          1,
      );
      controller.currentFrameDurationMs = getAnimatedFrameDurationMs(
        firstFrame,
        controller.defaultFrameDurationMs,
      );
      drawAnimatedWebpFrame(controller, firstFrame.image);
      firstFrame.image.close?.();
      controller.currentFrameIndex = 0;
      controller.lastRenderedFrameIndex = 0;
      controller.frameElapsedMs = 0;
      controller.currentLoopElapsedMs = 0;
      return controller.frameCount > 1;
    } catch (e) {
      controller.decoderFailed = true;
      controller.decoder = null;
      logScript('Animated image decoder init failed:', e);
      return false;
    }
  }
  async function renderAnimatedWebpFrame(controller, frameIndex) {
    if (!(await ensureAnimatedWebpControllerReady(controller))) return false;
    try {
      const decoded = await controller.decoder.decode({
        frameIndex,
        completeFramesOnly: true,
      });
      controller.currentFrameDurationMs = getAnimatedFrameDurationMs(
        decoded,
        controller.defaultFrameDurationMs,
      );
      const drawn = drawAnimatedWebpFrame(controller, decoded.image);
      decoded.image.close?.();
      if (!drawn) return false;
      controller.currentFrameIndex = frameIndex;
      controller.lastRenderedFrameIndex = frameIndex;
      return true;
    } catch (e) {
      logScript(`Animated image frame decode failed at ${frameIndex}:`, e);
      return false;
    }
  }
  async function ensureAnimatedWebpFrameDurations(controller) {
    if (!controller) return false;
    if (
      Array.isArray(controller.frameDurations) &&
      controller.frameDurations.length === controller.frameCount &&
      controller.frameDurations.every(duration => duration > 0)
    ) {
      return true;
    }
    if (controller.frameDurationsPromise) {
      return controller.frameDurationsPromise;
    }
    controller.frameDurationsPromise = (async () => {
      if (!(await ensureAnimatedWebpControllerReady(controller))) {
        return false;
      }
      const durations = Array.isArray(controller.frameDurations)
        ? controller.frameDurations.slice(0, controller.frameCount)
        : new Array(controller.frameCount).fill(0);
      for (let index = 0; index < controller.frameCount; index++) {
        if (durations[index] > 0) continue;
        const decoded = await controller.decoder.decode({
          frameIndex: index,
          completeFramesOnly: true,
        });
        durations[index] = getAnimatedFrameDurationMs(
          decoded,
          controller.defaultFrameDurationMs,
        );
        decoded.image.close?.();
      }
      controller.frameDurations = durations;
      controller.totalDurationMs = Math.max(
        100,
        durations.reduce((sum, duration) => sum + Math.max(20, duration || 0), 0),
      );
      controller.img.dataset.animatedDurationMs = `${controller.totalDurationMs}`;
      return true;
    })().finally(() => {
      controller.frameDurationsPromise = null;
    });
    return controller.frameDurationsPromise;
  }
  async function seekAnimatedWebpToRatio(img, ratio, resumePlayback = false) {
    const controller = getAnimatedWebpController(img);
    if (!controller) return false;

    const safeRatio = Number.isFinite(ratio) ? Math.min(1, Math.max(0, ratio)) : 0;
    const seekToken = (controller.seekToken ?? 0) + 1;
    controller.seekToken = seekToken;
    stopAnimatedWebpControllerPlayback(controller);

    if (!(await ensureAnimatedWebpControllerReady(controller))) {
      return false;
    }
    if (controller.seekToken !== seekToken) return false;

    await ensureAnimatedWebpFrameDurations(controller);
    if (controller.seekToken !== seekToken) return false;

    const durations = controller.frameDurations?.length ? controller.frameDurations : [controller.currentFrameDurationMs || 100];
    const totalDurationMs = Math.max(
      100,
      controller.totalDurationMs ||
        durations.reduce((sum, duration) => sum + Math.max(20, duration || 0), 0),
    );
    const targetElapsedMs = safeRatio >= 1
      ? Math.max(0, totalDurationMs - 1)
      : Math.max(0, Math.round(totalDurationMs * safeRatio));

    let accumulatedMs = 0;
    let frameIndex = 0;
    let frameElapsedMs = 0;
    for (let index = 0; index < durations.length; index++) {
      const frameDurationMs = Math.max(20, durations[index] || controller.defaultFrameDurationMs || 100);
      if (targetElapsedMs < accumulatedMs + frameDurationMs || index === durations.length - 1) {
        frameIndex = index;
        frameElapsedMs = Math.max(0, targetElapsedMs - accumulatedMs);
        break;
      }
      accumulatedMs += frameDurationMs;
    }

    const rendered = await renderAnimatedWebpFrame(controller, frameIndex);
    if (!rendered || controller.seekToken !== seekToken) {
      return false;
    }

    controller.currentLoopElapsedMs = targetElapsedMs;
    controller.frameElapsedMs = frameElapsedMs;
    controller.currentFrameStartedAt = performance.now() - frameElapsedMs;
    setAnimatedWebpProgressRatio(img, totalDurationMs ? targetElapsedMs / totalDurationMs : 0);

    const { page, toggle } = getAnimatedWebpElements(img);
    if (resumePlayback) {
      img.dataset.animatedPlaying = 'true';
      page?.classList.remove('animated-webp-paused');
      page?.classList.add('animated-webp-playing');
      if (toggle) toggle.textContent = '\u275A\u275A';
      const playToken = (controller.playToken ?? 0) + 1;
      controller.playToken = playToken;
      controller.playing = true;
      startDecodedAnimatedWebpProgress(controller);
      scheduleAnimatedWebpNextFrame(controller, playToken);
    } else {
      controller.playing = false;
      img.dataset.animatedPlaying = 'false';
      page?.classList.remove('animated-webp-playing');
      page?.classList.add('animated-webp-paused');
      if (toggle) toggle.textContent = '\u25B7';
    }
    return true;
  }
  function scheduleAnimatedWebpNextFrame(controller, token) {
    if (!controller?.playing) return;
    if (controller.frameTimer) {
      clearTimeout(controller.frameTimer);
      controller.frameTimer = null;
    }
    const remainingMs = Math.max(1, controller.currentFrameDurationMs - (controller.frameElapsedMs || 0));
    controller.currentFrameStartedAt = performance.now() - (controller.frameElapsedMs || 0);
    controller.frameTimer = window.setTimeout(() => {
      advanceAnimatedWebpFrame(controller, token).catch(error => {
        logScript('Animated image playback step failed:', error);
        pauseAnimatedWebp(controller.img);
      });
    }, remainingMs);
  }
  async function advanceAnimatedWebpFrame(controller, token) {
    if (!controller?.playing || token !== controller.playToken) return;
    controller.frameElapsedMs = 0;
    const nextFrameIndex = (controller.currentFrameIndex + 1) % Math.max(1, controller.frameCount || 1);
    const rendered = await renderAnimatedWebpFrame(controller, nextFrameIndex);
    if (!rendered || !controller.playing || token !== controller.playToken) return;
    scheduleAnimatedWebpNextFrame(controller, token);
  }
  function startAnimatedWebpProgress(img) {
    stopAnimatedWebpProgress(img);
    resetAnimatedWebpProgress(img);
    const durationMs = Math.max(100, parseInt(img.dataset.animatedDurationMs ?? '0', 10) || 0);
    if (!durationMs) return;

    const { bar } = getAnimatedWebpElements(img);
    if (!bar) return;

    const startTime = performance.now();
    img._animatedWebpProgressTimer = window.setInterval(() => {
      const elapsed = (performance.now() - startTime) % durationMs;
      bar.style.width = `${(elapsed / durationMs) * 100}%`;
    }, 80);
  }
  function clearAnimatedWebpState_legacy(img) {
    stopAnimatedWebpProgress(img);
    resetAnimatedWebpProgress(img);
    delete img.dataset.previewSrc;
    delete img.dataset.animatedSrc;
    delete img.dataset.animatedDurationMs;
    delete img.dataset.animatedWebp;
    delete img.dataset.animatedPlaying;
    const { page, toggle, progress } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-ready', 'animated-webp-playing', 'animated-webp-paused');
    if (toggle) {
      toggle.hidden = true;
      toggle.textContent = '▷';
    }
    if (progress) {
      progress.hidden = true;
    }
    img.removeAttribute('title');
  }
  function pauseAnimatedWebp_legacy(img) {
    if (!img.dataset.previewSrc) return;
    stopAnimatedWebpProgress(img);
    resetAnimatedWebpProgress(img);
    img.dataset.animatedPlaying = 'false';
    img.setAttribute('src', img.dataset.previewSrc);
    const { page, toggle } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-playing');
    page?.classList.add('animated-webp-paused');
    if (toggle) toggle.textContent = '▷';
  }
  function playAnimatedWebp_legacy(img) {
    if (!img.dataset.animatedSrc) return;
    img.dataset.animatedPlaying = 'true';
    img.setAttribute('src', img.dataset.animatedSrc);
    const { page, toggle } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-paused');
    page?.classList.add('animated-webp-playing');
    if (toggle) toggle.textContent = '❚❚';
    startAnimatedWebpProgress(img);
  }
  async function prepareAnimatedWebpImage_legacy(img, originalSrc, displaySrc, blob) {
    clearAnimatedWebpState(img);
    if (!getSettingsValue('pauseAnimatedWebp') || !blob || !isLikelyAnimatedImageSource(originalSrc, blob)) {
      return displaySrc;
    }

    const info = await getAnimatedWebpInfo(originalSrc || displaySrc, blob, true);
    if (!info.isAnimated || !info.previewSrc) {
      return displaySrc;
    }

    img.dataset.animatedWebp = 'true';
    img.dataset.previewSrc = info.previewSrc;
    img.dataset.animatedSrc = displaySrc;
    img.dataset.animatedDurationMs = `${Math.max(100, info.totalDurationMs || 1000)}`;
    img.dataset.animatedPlaying = 'false';
    img.setAttribute('title', '点击播放/停止动图');

    const { page, toggle, progress } = getAnimatedWebpElements(img);
    page?.classList.add('animated-webp-ready', 'animated-webp-paused');
    if (toggle) {
      toggle.hidden = false;
      toggle.textContent = '▷';
    }
    if (progress) {
      progress.hidden = false;
    }
    resetAnimatedWebpProgress(img);
    return info.previewSrc;
  }
  function clearAnimatedWebpState(img) {
    stopAnimatedWebpProgress(img);
    resetAnimatedWebpProgress(img);
    destroyAnimatedWebpController(img);
    delete img.dataset.previewSrc;
    delete img.dataset.animatedSrc;
    delete img.dataset.animatedDurationMs;
    delete img.dataset.animatedWebp;
    delete img.dataset.animatedPlaying;
    const { page, toggle, progress } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-ready', 'animated-webp-playing', 'animated-webp-paused');
    if (toggle) {
      toggle.hidden = true;
      toggle.textContent = '\u25B7';
    }
    if (progress) {
      progress.hidden = true;
    }
    img.removeAttribute('title');
  }
  function initializeAnimatedWebpController(img, blob, mimeType, options = {}) {
    const { canvas } = getAnimatedWebpElements(img);
    if (!canvas || !blob || !mimeType || typeof ImageDecoder !== 'function') {
      return;
    }
    const sourceController = options.sourceController ?? null;
    const totalDurationMs = Math.max(100, options.totalDurationMs || sourceController?.totalDurationMs || 1000);
    const frameCount = Math.max(1, options.frameCount || sourceController?.frameCount || 1);
    const defaultFrameDurationMs = Math.max(
      20,
      options.defaultFrameDurationMs ||
        sourceController?.defaultFrameDurationMs ||
        Math.round(totalDurationMs / frameCount),
    );
    const controller = {
      img,
      blob,
      mimeType,
      canvas,
      ctx: canvas.getContext('2d'),
      totalDurationMs,
      frameCount,
      defaultFrameDurationMs,
      currentFrameIndex: 0,
      currentFrameDurationMs: defaultFrameDurationMs,
      frameElapsedMs: 0,
      currentLoopElapsedMs: 0,
      currentFrameStartedAt: 0,
      progressBaseElapsedMs: 0,
      progressStartedAt: 0,
      frameTimer: null,
      progressRaf: null,
      playToken: 0,
      seekToken: 0,
      lastRenderedFrameIndex: -1,
      decoder: null,
      decoderFailed: false,
      playing: false,
      frameDurations: Array.isArray(sourceController?.frameDurations)
        ? sourceController.frameDurations.slice()
        : null,
      frameDurationsPromise: null,
    };
    if (controller.ctx) {
      canvas.hidden = true;
      animatedWebpControllerCache.set(img, controller);
    }
  }
  function applyAnimatedWebpReadyState(img, options) {
    if (!img || !options?.previewSrc || !options?.animatedSrc) return;
    img.dataset.animatedWebp = 'true';
    img.dataset.previewSrc = options.previewSrc;
    img.dataset.animatedSrc = options.animatedSrc;
    img.dataset.animatedDurationMs = `${Math.max(100, options.totalDurationMs || 1000)}`;
    img.dataset.animatedPlaying = 'false';
    img.setAttribute('title', options.title || 'Click to play or stop animation');
    initializeAnimatedWebpController(img, options.blob, options.mimeType, options);
    const { page, toggle, progress } = getAnimatedWebpElements(img);
    page?.classList.add('animated-webp-ready', 'animated-webp-paused');
    if (toggle) {
      toggle.hidden = false;
      toggle.textContent = '\u25B7';
    }
    if (progress) {
      progress.hidden = false;
    }
    resetAnimatedWebpProgress(img);
    img.setAttribute('src', options.previewSrc);
  }
  function getAnimatedWebpSourceBlob(img) {
    const originalUrl = img?.getAttribute('data-original-url');
    if (originalUrl && imageBlobCache.has(originalUrl)) {
      return imageBlobCache.get(originalUrl);
    }
    return null;
  }
  function syncAnimatedWebpClone(targetImg, sourceImg) {
    if (!targetImg || !sourceImg) return;
    const currentSrc =
      sourceImg.getAttribute('src') ||
      sourceImg.getAttribute('data-src') ||
      sourceImg.dataset.previewSrc ||
      '';
    if (
      sourceImg.dataset.animatedWebp !== 'true' ||
      !sourceImg.dataset.previewSrc ||
      !sourceImg.dataset.animatedSrc
    ) {
      clearAnimatedWebpState(targetImg);
      clearAnimatedWebpCanvas(targetImg);
      if (currentSrc) {
        targetImg.setAttribute('src', currentSrc);
      } else {
        targetImg.removeAttribute('src');
      }
      return;
    }

    clearAnimatedWebpState(targetImg);
    const blob = getAnimatedWebpSourceBlob(sourceImg);
    const sourceController = getAnimatedWebpController(sourceImg);
    const animatedSrc = sourceImg.dataset.animatedSrc;
    applyAnimatedWebpReadyState(targetImg, {
      previewSrc: sourceImg.dataset.previewSrc,
      animatedSrc,
      totalDurationMs: parseInt(sourceImg.dataset.animatedDurationMs ?? '0', 10) || 1000,
      frameCount: sourceController?.frameCount || 1,
      defaultFrameDurationMs: sourceController?.defaultFrameDurationMs,
      mimeType: sourceController?.mimeType || inferAnimatedImageMimeType(animatedSrc, blob),
      blob,
      sourceController,
      title: sourceImg.getAttribute('title') || 'Click to play or stop animation',
    });
  }
  function createAnimatedGalleryMedia(sourceImg, mode = 'masonry') {
    const page = document.createElement('div');
    page.className = 'MangaPage';
    page.style.position = 'relative';
    page.style.lineHeight = '0';
    page.style.width = '100%';

    const media = document.createElement('div');
    media.className = 'AnimatedWebpMedia';
    media.style.display = 'block';
    media.style.width = '100%';
    media.style.borderRadius = '4px';
    media.style.overflow = 'hidden';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'AnimatedWebpToggle';
    toggle.hidden = true;
    toggle.title = '点击播放/停止动图';
    toggle.textContent = '\u25B7';

    const progress = document.createElement('div');
    progress.className = 'AnimatedWebpProgress';
    progress.hidden = true;
    const progressBar = document.createElement('span');
    progressBar.className = 'AnimatedWebpProgressBar';
    progress.appendChild(progressBar);

    const canvas = document.createElement('canvas');
    canvas.className = 'AnimatedWebpCanvas';
    canvas.hidden = true;
    canvas.setAttribute('aria-hidden', 'true');
    if (mode === 'grid') {
      canvas.style.objectFit = 'cover';
    }

    const img = document.createElement('img');
    img.className = 'PageImg';
    img.alt = sourceImg.getAttribute('alt') || '';
    img.crossOrigin = 'anonymous';
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.minWidth = '0';
    img.style.backgroundColor = '#333';
    if (mode === 'grid') {
      img.style.height = '100%';
      img.style.objectFit = 'cover';
    } else {
      img.style.height = 'auto';
      img.style.minHeight = '100px';
    }

    media.appendChild(toggle);
    media.appendChild(progress);
    media.appendChild(canvas);
    media.appendChild(img);
    page.appendChild(media);

    const sync = () => syncAnimatedWebpClone(img, sourceImg);
    const onMediaClick = event => {
      if (img.dataset.animatedWebp !== 'true') return;
      buttonToggleAnimatedWebp(event);
    };

    toggle.addEventListener('click', buttonToggleAnimatedWebp);
    media.addEventListener('click', onMediaClick);
    progress.addEventListener('click', buttonAnimatedWebpProgressClick);
    progress.addEventListener('pointerdown', buttonSeekAnimatedWebpProgress);

    const sourceObserver = new MutationObserver(sync);
    sourceObserver.observe(sourceImg, {
      attributes: true,
      attributeFilter: ['src', 'data-src'],
    });
    sourceImg.addEventListener('load', sync);
    sync();

    return {
      page,
      media,
      img,
      cleanup: () => {
        sourceObserver.disconnect();
        sourceImg.removeEventListener('load', sync);
        media.removeEventListener('click', onMediaClick);
        toggle.removeEventListener('click', buttonToggleAnimatedWebp);
        progress.removeEventListener('click', buttonAnimatedWebpProgressClick);
        progress.removeEventListener('pointerdown', buttonSeekAnimatedWebpProgress);
        clearAnimatedWebpState(img);
      },
    };
  }
  function pauseAnimatedWebp(img) {
    if (!img.dataset.previewSrc) return;
    const controller = getAnimatedWebpController(img);
    if (controller?.decoder) {
      const pausedLoopElapsedMs = getAnimatedWebpLoopElapsedMs(controller);
      const pausedFrameElapsedMs = Math.max(
        0,
        Math.min(
          controller.currentFrameDurationMs || 0,
          performance.now() - (controller.currentFrameStartedAt || performance.now()),
        ),
      );
      stopAnimatedWebpControllerPlayback(controller);
      controller.currentLoopElapsedMs = pausedLoopElapsedMs;
      controller.frameElapsedMs = pausedFrameElapsedMs;
      controller.playing = false;
      setAnimatedWebpProgressRatio(
        img,
        controller.currentLoopElapsedMs / Math.max(100, controller.totalDurationMs || 100),
      );
      img.dataset.animatedPlaying = 'false';
      const { page, toggle } = getAnimatedWebpElements(img);
      page?.classList.remove('animated-webp-playing');
      page?.classList.add('animated-webp-paused');
      if (toggle) toggle.textContent = '\u25B7';
      return;
    }
    stopAnimatedWebpProgress(img);
    const currentFrameSrc = captureCurrentAnimatedFrame(img);
    if (currentFrameSrc) {
      img.dataset.previewSrc = currentFrameSrc;
    }
    img.dataset.animatedPlaying = 'false';
    img.setAttribute('src', img.dataset.previewSrc);
    const { page, toggle } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-playing');
    page?.classList.add('animated-webp-paused');
    if (toggle) toggle.textContent = '\u25B7';
  }
  async function playAnimatedWebp(img) {
    if (!img.dataset.animatedSrc) return;
    const controller = getAnimatedWebpController(img);
    if (controller) {
      img.dataset.animatedPlaying = 'true';
      const { page, toggle } = getAnimatedWebpElements(img);
      page?.classList.remove('animated-webp-paused');
      page?.classList.add('animated-webp-playing');
      if (toggle) toggle.textContent = '\u275A\u275A';

      const playToken = (controller.playToken ?? 0) + 1;
      controller.playToken = playToken;
      controller.playing = true;
      const ready = await ensureAnimatedWebpControllerReady(controller);
      if (controller.playToken !== playToken || !controller.playing) return;
      if (ready) {
        if (controller.lastRenderedFrameIndex !== controller.currentFrameIndex) {
          const rendered = await renderAnimatedWebpFrame(controller, controller.currentFrameIndex);
          if (!rendered || controller.playToken !== playToken || !controller.playing) {
            return;
          }
        } else if (controller.canvas) {
          controller.canvas.hidden = false;
        }
        startDecodedAnimatedWebpProgress(controller);
        scheduleAnimatedWebpNextFrame(controller, playToken);
        return;
      }
      controller.playing = false;
    }

    img.dataset.animatedPlaying = 'true';
    img.setAttribute('src', img.dataset.animatedSrc);
    clearAnimatedWebpCanvas(img);
    const { page, toggle } = getAnimatedWebpElements(img);
    page?.classList.remove('animated-webp-paused');
    page?.classList.add('animated-webp-playing');
    if (toggle) toggle.textContent = '\u275A\u275A';
    startAnimatedWebpProgress(img);
  }
  async function prepareAnimatedWebpImage(img, originalSrc, displaySrc, blob) {
    clearAnimatedWebpState(img);
    if (!getSettingsValue('pauseAnimatedWebp') || !blob || !isLikelyAnimatedImageSource(originalSrc, blob)) {
      return displaySrc;
    }

    const info = await getAnimatedWebpInfo(originalSrc || displaySrc, blob, true);
    if (!info.isAnimated || !info.previewSrc) {
      return displaySrc;
    }

    applyAnimatedWebpReadyState(img, {
      previewSrc: info.previewSrc,
      animatedSrc: displaySrc,
      totalDurationMs: Math.max(100, info.totalDurationMs || 1000),
      frameCount: Math.max(1, info.frameCount || 1),
      defaultFrameDurationMs: Math.max(
        20,
        Math.round((info.totalDurationMs || 1000) / Math.max(1, info.frameCount || 1)),
      ),
      mimeType: inferAnimatedImageMimeType(originalSrc || displaySrc, blob),
      blob,
      title: 'Click to play or stop animation',
    });
    return info.previewSrc;
  }
  function addImg(manga, index, imageSrc, position) {
    const relativePosition = position - (manga.begin ?? 0);
    let src = normalizeUrl(imageSrc);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        relativePosition <= getSettingsValue('lazyStart')
      ) {
        // 使用队列机制代替setTimeout，避免大量定时器堆积
        const loadTask = async () => {
          const originalSrc = src;
          let fetchedBlob = null;
          // 添加延迟以控制加载速度
          const delay = (manga.timer ?? getSettingsValue('throttlePageLoad'));
          if (delay > 1) {
            await new Promise(resolve => setTimeout(resolve, delay));
          }

          logScript(`[addImg ${index}] src: ${src.substring(0, 50)}, isObjectURL: ${isObjectURL(src)}, isBase64: ${isBase64ImageUrl(src)}`);

          // 用fetchImageBlob获取图片并缓存blob
          if (isObjectURL(src) && imageBlobCache.has(src)) {
            fetchedBlob = imageBlobCache.get(src);
            img.setAttribute('data-original-url', src);
            img.setAttribute('data-blob-cached', 'true');
          } else if (!isObjectURL(src) && !isBase64ImageUrl(src)) {
            try {
              const { blob, fromCache } = await fetchImageBlob(src, window.location.href);
              fetchedBlob = blob;
              if (!fromCache) {
                logScript(`[addImg ${index}] ✓ Cached blob: ${src.substring(0, 50)}, type: ${blob.type}`);
              }
              // 转成blob URL显示
              const blobUrl = URL.createObjectURL(blob);
              imageBlobCache.set(blobUrl, blob);
              img.setAttribute('data-original-url', src);
              img.setAttribute('data-blob-cached', 'true');
              src = blobUrl;
            } catch (e) {
              logScript(`[addImg ${index}] ✗ Fetch failed: ${e.message}`);
              img.setAttribute('data-blob-cached', 'false');
            }
          } else if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
            logScript(`[addImg ${index}] Using fetch with fetchOptions`);
            src = await fetch(src, manga.fetchOptions)
              .then(resp => resp.blob())
              .then(blob => blobUtil.blobToDataURL(blob));
            img.setAttribute('data-blob-cached', 'true');
          } else {
            img.setAttribute('data-blob-cached', 'true'); // base64或blob URL直接可用
          }

          // 使用原生事件代替imagesLoaded库，减少DOM操作开销
          if (fetchedBlob) {
            src = await prepareAnimatedWebpImage(img, originalSrc, src, fetchedBlob);
          }
          img.onload = function () {
            this.classList.add('imgLoaded');
            this.classList.remove('imgBroken');
            const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
            const thumb = document.getElementById(thumbId);
            thumb?.classList.remove('imgBroken');
            if (thumb) {
              thumb.setAttribute('src', getThumbnailSrc(this));
            }
            applyLastGlobalZoom(`#${this.id}`);
            updateProgress();
          };

          img.onerror = function () {
            this.classList.add('imgBroken');
            const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
            const thumb = document.getElementById(thumbId);
            thumb?.classList.add('imgBroken');
            const imgSrc = this.getAttribute('src');
            if (imgSrc && getRepeatValue(imgSrc) <= getSettingsValue('maxReload')) {
              setTimeout(async () => {
                if (manga.reload) {
                  const imgId = parseInt(`0${/\d+/.exec(this.id)}`, 10);
                  const alt = await manga.reload(imgId);
                  this.setAttribute('src', alt);
                } else {
                  reloadImage(this);
                }
              }, 2e3);
            }
          };

          img.setAttribute('src', src);
          logScript(`[addImg ${index}] Image loaded`);
        };

        // 添加到队列而不是创建setTimeout
        imageLoadQueue.add(loadTask);
      } else {
        img.setAttribute('data-src', normalizeUrl(src));
        img.setAttribute('data-original-url', src);
        lazyLoad$1(
          img,
          () => {
            // 使用原生事件代替imagesLoaded
            img.onload = function () {
              this.classList.add('imgLoaded');
              this.classList.remove('imgBroken');
              const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
              const thumb = document.getElementById(thumbId);
              thumb?.classList.remove('imgBroken');
              if (thumb) {
                thumb.setAttribute('src', getThumbnailSrc(this));
              }
              applyLastGlobalZoom(`#${this.id}`);
              updateProgress();
              logScript('Lazy Image: ', index, ' Source: ', this.getAttribute('src'));
            };
            img.onerror = function () {
              this.classList.add('imgBroken');
              const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
              const thumb = document.getElementById(thumbId);
              thumb?.classList.add('imgBroken');
              const imgSrc = this.getAttribute('src');
              if (imgSrc && getRepeatValue(imgSrc) <= getSettingsValue('maxReload')) {
                setTimeout(async () => {
                  if (manga.reload) {
                    const imgId = parseInt(`0${/\d+/.exec(this.id)}`, 10);
                    const alt = await manga.reload(imgId);
                    this.setAttribute('src', alt);
                  } else {
                    reloadImage(this);
                  }
                }, 2e3);
              }
            };
          },
          manga.fetchOptions,
        );
      }
      if (manga.pages === position) removeURLBookmark();
    }
  }
  function findPage(manga, index, pageUrl, lazy) {
    return async () => {
      let src = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
      const img = document.querySelector(`#PageImg${index}`);
      if (src && img) {
        img.style.width = 'auto';

        // 构建完整的 pageUrl 用于解析相对路径
        const fullPageUrl = pageUrl.startsWith('http') ? pageUrl : window.location.origin + pageUrl;

        // 标准化图片URL，基于 pageUrl 解析相对路径
        src = normalizeUrl(src, fullPageUrl);
        const originalSrc = src;
        let fetchedBlob = null;

        // 用fetchImageBlob获取并缓存blob
        if (!isObjectURL(src) && !isBase64ImageUrl(src)) {
          try {
            const { blob } = await fetchImageBlob(src, fullPageUrl);
            fetchedBlob = blob;
            const blobUrl = URL.createObjectURL(blob);
            img.setAttribute('data-original-url', src);
            img.setAttribute('data-blob-cached', 'true');
            src = blobUrl;
          } catch (e) {
            logScript('Failed to fetch image, using original URL:', e);
            img.setAttribute('data-blob-cached', 'false');
          }
        } else {
          img.setAttribute('data-blob-cached', 'true'); // base64或blob URL直接可用
        }

        // 使用原生事件代替imagesLoaded
        if (fetchedBlob) {
          src = await prepareAnimatedWebpImage(img, originalSrc, src, fetchedBlob);
        }
        img.onload = function () {
          this.classList.add('imgLoaded');
          this.classList.remove('imgBroken');
          const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
          const thumb = document.getElementById(thumbId);
          thumb?.classList.remove('imgBroken');
          if (thumb) {
            thumb.setAttribute('src', getThumbnailSrc(this));
          }
          applyLastGlobalZoom(`#${this.id}`);
          updateProgress();
        };
        img.onerror = function () {
          this.classList.add('imgBroken');
          const thumbId = this.id.replace('PageImg', 'ThumbnailImg');
          const thumb = document.getElementById(thumbId);
          thumb?.classList.add('imgBroken');
          const imgSrc = this.getAttribute('src');
          if (imgSrc && getRepeatValue(imgSrc) <= getSettingsValue('maxReload')) {
            setTimeout(async () => {
              if (manga.reload) {
                const imgId = parseInt(`0${/\d+/.exec(this.id)}`, 10);
                const alt = await manga.reload(imgId);
                this.setAttribute('src', alt);
              } else {
                reloadImage(this);
              }
            }, 2e3);
          }
        };
        img.setAttribute('src', src);
      }
    };
  }
  async function addPage(manga, index, pageUrl, position) {
    const relativePosition = position - (manga.begin ?? 0);
    const img = document.querySelector(`#PageImg${index}`);
    if (img) {
      if (
        !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
        relativePosition <= getSettingsValue('lazyStart')
      ) {
        setTimeout(
          () => {
            findPage(manga, index, pageUrl, false)().catch(logScript);
          },
          (manga.timer ?? getSettingsValue('throttlePageLoad')) * relativePosition,
        );
      } else {
        img.setAttribute(
          'data-src',
          'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        );
        lazyLoad$1(img, findPage(manga, index, pageUrl, true));
      }
      if (manga.pages === position) removeURLBookmark();
    }
  }
  function loadMangaPages(begin, manga) {
    // 跳页加载模式：只加载指定的页面
    const pagesToLoad = skipLoadMode ? skipLoadPages : sequence(manga.pages, begin);
    pagesToLoad.forEach((index, position) => {
      addPage(manga, index, manga.listPages[index - 1], position).catch(logScript);
    });
  }
  function loadMangaImages(begin, manga) {
    // 跳页加载模式：只加载指定的页面
    const pagesToLoad = skipLoadMode ? skipLoadPages : sequence(manga.pages, begin);
    pagesToLoad.forEach((index, position) => {
      addImg(manga, index, manga.listImages[index - 1], position);
    });
  }
  function loadManga(manga, begin = 1) {
    logScript('Loading Images');
    resetLoadStallTracking();
    logScript(
      `Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`,
    );
    logScript(
      `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
    );
    if (isImagesManga(manga)) {
      logScript('Method: Images:', manga.listImages);
      loadMangaImages(begin, manga);
    } else if (isPagesManga(manga)) {
      logScript('Method: Pages:', manga.listPages);
      loadMangaPages(begin, manga);
    } else if (isBruteforceManga(manga)) {
      logScript('Method: Brute Force');
      manga.bruteForce({
        begin,
        addImg,
        loadImages(list) {
          loadMangaImages(begin, { ...manga, listImages: list });
        },
        loadPages(list, img, lazyAttr) {
          loadMangaPages(begin, {
            ...manga,
            listPages: list,
            img,
            lazyAttr,
          });
        },
        wait: getSettingsValue('throttlePageLoad'),
      });
    } else {
      logScript('No Loading Method Found');
    }
  }

  const diffObj = (changed, original) => {
    const changes = (object, base) =>
      _.transform(
        object,
        (result, value, key) => {
          if (!_.isEqual(value, base[key])) {
            if (_.isArray(value)) {
              result[key] = _.difference(value, base[key]);
            } else if (_.isObject(value) && _.isObject(base[key])) {
              result[key] = changes(value, base[key]);
            } else {
              result[key] = value;
            }
          }
        },
        /* Omit accumulator */
      );
    return changes(changed, original);
  };

  const defaultSettings = {
    enabled: true,
    locale: 'zh_CN',
    theme: 'blue',
    customTheme: '#004526',
    themeShade: 600,
    colorScheme: 'dark',
    fitWidthIfOversize: true,
    fitHeightInHorizontal: true,
    showThumbnails: false,
    enableComments: true,
    downloadZip: false,
    verticalSeparator: true,
    throttlePageLoad: 1e3,
    maxConcurrentLoads: 15,
    defaultBatchDivide: 4,
    pauseAnimatedWebp: false,
    zoomMode: 'percent',
    defaultZoom: 100,
    zoomStep: 25,
    minZoom: 30,
    loadMode: 'never',
    viewMode: 'Vertical',
    bookmarks: [],
    lazyLoadImages: false,
    lazyStart: 50,
    hidePageControls: false,
    header: 'click',
    maxReload: 5,
    scrollHeight: 20,
    autoConfirmBatchHotkey: false,
    autoBatchDivideEnabled: true,
    keybinds: {
      SCROLL_UP: ['up', 'W', 'num_8'],
      SCROLL_DOWN: ['down', 'S', 'num_2'],
      NEXT_CHAPTER: ['right', '/', 'D', 'num_6'],
      PREVIOUS_CHAPTER: ['left', ';', 'A', 'num_4'],
      ENLARGE: ['-', 'num_add', 'E'],
      REDUCE: ['=', 'num_subtract', 'Q'],
      RESTORE: ['9', 'num_divide', 'R'],
      FIT_WIDTH: ['0', 'num_multiply', 'F'],
      FIT_HEIGHT: ['H'],
      SETTINGS: ['num_divide', 'num_5', 'X'],
      VIEW_MODE_WEBCOMIC: ['C'],
      VIEW_MODE_VERTICAL: ['V'],
      VIEW_MODE_LEFT: ['N'],
      VIEW_MODE_RIGHT: ['B'],
      SCROLL_START: ['space'],
    },
  };
  const mobileSettings = {
    lazyLoadImages: true,
    fitWidthIfOversize: true,
    showThumbnails: false,
    viewMode: 'Vertical',
    header: 'click',
  };
  function getDefault(global = true) {
    return !isMobile()
      ? { ...defaultSettings, enabled: global, theme: global ? 'blue' : 'violet' }
      : _.defaultsDeep(mobileSettings, {
        ...defaultSettings,
        enabled: global,
        theme: global ? 'blue' : 'violet',
      });
  }
  function compareSettingsCustomizer(value, other, key) {
    if (key === 'bookmarks') {
      if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
          return false;
        }
        const getBookmarkSortKey = b => `${b.url}-${b.date}`;
        const sortedValue = [...value].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        const sortedOther = [...other].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        return _.isEqual(sortedValue, sortedOther);
      }
    }
    if (key === 'keybinds') {
      if (typeof value === 'object' && typeof other === 'object') {
        const keysA = Object.keys(value).sort();
        const keysB = Object.keys(other).sort();
        if (!_.isEqual(keysA, keysB)) {
          return false;
        }
        for (const k of keysA) {
          const sortedArrayA = value[k] ? [...value[k]].sort() : [];
          const sortedArrayB = other[k] ? [...other[k]].sort() : [];
          if (!_.isEqual(sortedArrayA, sortedArrayB)) {
            return false;
          }
        }
        return true;
      }
    }
    return void 0;
  }
  function haveSettingsChanged(newSettings, oldSettings, key) {
    if (newSettings === oldSettings) {
      return false;
    }
    if (key) {
      const tempA = { [key]: newSettings };
      const tempB = { [key]: oldSettings };
      return !_.isEqualWith(tempA, tempB, compareSettingsCustomizer);
    }
    return !_.isEqualWith(newSettings, oldSettings, compareSettingsCustomizer);
  }
  let globalSettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
  let localSettings = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
  const isSettingsLocal = () => localSettings?.enabled === true;
  const isLocalSettingsAllowed = key =>
    isSettingsLocal() && !['locale', 'bookmarks', 'keybinds'].includes(key);
  const settings$1 = map(
    isSettingsLocal()
      ? {
        ...localSettings,
        locale: globalSettings.locale,
        keybinds: globalSettings.keybinds,
        bookmarks: globalSettings.bookmarks,
      }
      : globalSettings,
  );
  computed(settings$1, current => locales.find(l => l.ID === current.locale) ?? locales[1]);
  function refreshSettings(key) {
    const newObj = isSettingsLocal()
      ? {
        ...localSettings,
        locale: globalSettings.locale,
        keybinds: globalSettings.keybinds,
        bookmarks: globalSettings.bookmarks,
      }
      : { ...globalSettings };
    const currentObj = settings$1.get();
    if (haveSettingsChanged(currentObj, newObj)) {
      settings$1.set(newObj);
      logScript('Refreshed Settings', key, null);
    }
  }
  function syncGlobalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault());
    const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Global Settings', diff);
      globalSettings = newSettings;
      refreshSettings();
      applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
    }
  }
  settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');
  function syncLocalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault(false));
    // 保留当前标签页的 enabled（范围）设置，不跨标签同步
    const currentEnabled = localSettings?.enabled;
    const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Local Settings', diff);
      localSettings = newSettings;
      // 恢复当前标签页的范围设置
      if (currentEnabled !== undefined) {
        localSettings.enabled = currentEnabled;
      }
      refreshSettings();
      applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
    }
  }
  settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);
  function getSettingsValue(key) {
    return settings$1.get()?.[key];
  }
  function setSettingsValue(key, value) {
    const current = settings$1.get()?.[key];
    if (!haveSettingsChanged(current, value, key)) return;
    settings$1.setKey(key, value);
  }
  function saveSettingsValue(key, value) {
    const currentEffective = getSettingsValue(key);
    if (!haveSettingsChanged(currentEffective, value, key)) return;
    settings$1.setKey(key, value);
    if (isLocalSettingsAllowed(key)) {
      localSettings[key] = value;
      saveLocalSettings(diffObj(localSettings, getDefault(false)));
    } else {
      globalSettings[key] = value;
      saveGlobalSettings(diffObj(globalSettings, getDefault()));
    }
  }
  function changeSettingsValue(key, fn) {
    const oldValue = getSettingsValue(key);
    const newValue = fn(oldValue);
    setSettingsValue(key, newValue);
  }
  function getLocaleString(name) {
    const currentLocale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
    if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
    return `##MISSING_STRING_${name}##`;
  }
  function resetSettings() {
    if (isSettingsLocal()) {
      removeValueGM(window.location.hostname);
      localSettings = getDefault(false);
    } else {
      removeValueGM('settings');
      globalSettings = getDefault();
    }
    logScript('Settings Reset');
    refreshSettings();
  }
  function toggleLocalSettings(activate = false) {
    localSettings.enabled = activate;
    saveLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
    refreshSettings();

    // 修复：切换规则范围后重新应用视图模式
    setTimeout(() => {
      const currentMode = getSettingsValue('viewMode');
      if (currentMode) {
        // 清理现有的瀑布流/方格模式
        cleanupMasonry();
        cleanupGrid();

        // 确保Chapter显示
        const chapter = document.querySelector('#Chapter');
        if (chapter) {
          chapter.style.display = '';
          // 移除所有视图模式类，重新添加当前模式
          chapter.classList.remove('Vertical', 'WebComic', 'FluidLTR', 'FluidRTL', 'Masonry', 'Grid');
          chapter.classList.add(currentMode);
        }

        // 重新应用视图模式
        if (currentMode === 'Masonry') {
          requestAnimationFrame(() => setTimeout(setupMasonry, 100));
        } else if (currentMode === 'Grid') {
          requestAnimationFrame(() => setTimeout(setupGrid, 100));
        } else if (currentMode === 'FluidLTR' || currentMode === 'FluidRTL') {
          setupFluid(currentMode);
        } else {
          // 垂直或WebComic模式，需要重新应用缩放
          applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
        }

        // 刷新进度计数
        setTimeout(() => updateProgress(), 100);
      }
    }, 50);

    return isSettingsLocal();
  }
  function isBookmarked(url = window.location.href) {
    return globalSettings.bookmarks.find(el => el.url === url)?.page;
  }
  function showSettings(key = null) {
    logScriptVerbose(
      'Current Settings (Local:',
      isSettingsLocal(),
      ') ',
      key ? settings$1.get()[key] : settings$1.get(),
      '\nGlobal Settings',
      key ? globalSettings[key] : globalSettings,
      '\nLocal Settings',
      key ? localSettings[key] : localSettings,
    );
  }
  giveToWindow('MOVSettings', showSettings);

  const colors = {
    dark: {
      name: 'dark',
      50: '#C1C2C5',
      100: '#A6A7AB',
      200: '#909296',
      300: '#5c5f66',
      400: '#373A40',
      500: '#2C2E33',
      600: '#25262b',
      700: '#1A1B1E',
      800: '#141517',
      900: '#101113',
    },
    gray: {
      name: 'gray',
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    red: {
      name: 'red',
      50: '#fff5f5',
      100: '#ffe3e3',
      200: '#ffc9c9',
      300: '#ffa8a8',
      400: '#ff8787',
      500: '#ff6b6b',
      600: '#fa5252',
      700: '#f03e3e',
      800: '#e03131',
      900: '#c92a2a',
    },
    wine: {
      name: 'wine',
      50: '#FCE9E8',
      100: '#F8C2BF',
      200: '#F39A96',
      300: '#EE736D',
      400: '#E94C44',
      500: '#E5241A',
      600: '#B71D15',
      700: '#891610',
      800: '#5B0F0B',
      900: '#2E0705',
    },
    pink: {
      name: 'pink',
      50: '#fff0f6',
      100: '#ffdeeb',
      200: '#fcc2d7',
      300: '#faa2c1',
      400: '#f783ac',
      500: '#f06595',
      600: '#e64980',
      700: '#d6336c',
      800: '#c2255c',
      900: '#a61e4d',
    },
    grape: {
      name: 'grape',
      50: '#f8f0fc',
      100: '#f3d9fa',
      200: '#eebefa',
      300: '#e599f7',
      400: '#da77f2',
      500: '#cc5de8',
      600: '#be4bdb',
      700: '#ae3ec9',
      800: '#9c36b5',
      900: '#862e9c',
    },
    violet: {
      name: 'violet',
      50: '#f3f0ff',
      100: '#e5dbff',
      200: '#d0bfff',
      300: '#b197fc',
      400: '#9775fa',
      500: '#845ef7',
      600: '#7950f2',
      700: '#7048e8',
      800: '#6741d9',
      900: '#5f3dc4',
    },
    purple: {
      name: 'purple',
      50: '#EFEAFB',
      100: '#D3C3F4',
      200: '#B69DEC',
      300: '#9976E5',
      400: '#7D4FDD',
      500: '#6029D6',
      600: '#4D21AB',
      700: '#3A1980',
      800: '#261056',
      900: '#13082B',
    },
    indigo: {
      name: 'indigo',
      50: '#edf2ff',
      100: '#dbe4ff',
      200: '#bac8ff',
      300: '#91a7ff',
      400: '#748ffc',
      500: '#5c7cfa',
      600: '#4c6ef5',
      700: '#4263eb',
      800: '#3b5bdb',
      900: '#364fc7',
    },
    blue: {
      name: 'blue',
      50: '#e7f5ff',
      100: '#d0ebff',
      200: '#a5d8ff',
      300: '#74c0fc',
      400: '#4dabf7',
      500: '#339af0',
      600: '#228be6',
      700: '#1c7ed6',
      800: '#1971c2',
      900: '#1864ab',
    },
    darkblue: {
      name: 'darkblue',
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },
    cyan: {
      name: 'cyan',
      50: '#e3fafc',
      100: '#c5f6fa',
      200: '#99e9f2',
      300: '#66d9e8',
      400: '#3bc9db',
      500: '#22b8cf',
      600: '#15aabf',
      700: '#1098ad',
      800: '#0c8599',
      900: '#0b7285',
    },
    teal: {
      name: 'teal',
      50: '#e6fcf5',
      100: '#c3fae8',
      200: '#96f2d7',
      300: '#63e6be',
      400: '#38d9a9',
      500: '#20c997',
      600: '#12b886',
      700: '#0ca678',
      800: '#099268',
      900: '#087f5b',
    },
    green: {
      name: 'green',
      50: '#ebfbee',
      100: '#d3f9d8',
      200: '#b2f2bb',
      300: '#8ce99a',
      400: '#69db7c',
      500: '#51cf66',
      600: '#40c057',
      700: '#37b24d',
      800: '#2f9e44',
      900: '#2b8a3e',
    },
    darkgreen: {
      name: 'darkgreen',
      50: '#cad4cf',
      100: '#b0bfb8',
      200: '#97aba1',
      300: '#7f978b',
      400: '#678376',
      500: '#4f7061',
      600: '#263e3a',
      700: '#1c2e2b',
      800: '#152320',
      900: '#0b2017',
    },
    moss: {
      name: 'moss',
      50: '#f1f8f4',
      100: '#e3eee7',
      200: '#c2ddcb',
      300: '#9ecbad',
      400: '#80bc93',
      500: '#6db383',
      600: '#62af7a',
      700: '#519968',
      800: '#46885b',
      900: '#183321',
    },
    greener: {
      name: 'greener',
      50: '#EDF7ED',
      100: '#CEE9CD',
      200: '#AEDBAE',
      300: '#8FCD8E',
      400: '#6FBF6E',
      500: '#4FB14E',
      600: '#408E3E',
      700: '#306A2F',
      800: '#20471F',
      900: '#102310',
    },
    lime: {
      name: 'lime',
      50: '#f4fce3',
      100: '#e9fac8',
      200: '#d8f5a2',
      300: '#c0eb75',
      400: '#a9e34b',
      500: '#94d82d',
      600: '#82c91e',
      700: '#74b816',
      800: '#66a80f',
      900: '#5c940d',
    },
    yellow: {
      name: 'yellow',
      50: '#fff9db',
      100: '#fff3bf',
      200: '#ffec99',
      300: '#ffe066',
      400: '#ffd43b',
      500: '#fcc419',
      600: '#fab005',
      700: '#f59f00',
      800: '#f08c00',
      900: '#e67700',
    },
    golden: {
      name: 'golden',
      50: '#FDF9E7',
      100: '#FAEDBC',
      200: '#F7E191',
      300: '#F4D666',
      400: '#F1CA3C',
      500: '#EEBF11',
      600: '#BF990D',
      700: '#8F720A',
      800: '#5F4C07',
      900: '#302603',
    },
    orange: {
      name: 'orange',
      50: '#fff4e6',
      100: '#ffe8cc',
      200: '#ffd8a8',
      300: '#ffc078',
      400: '#ffa94d',
      500: '#ff922b',
      600: '#fd7e14',
      700: '#f76707',
      800: '#e8590c',
      900: '#d9480f',
    },
  };
  const darkest = 10;
  const lightest = 95;
  function setLightness(hsl, lightness) {
    hsl.l = lightness / 100;
    return tinycolor(hsl).toHexString();
  }
  function getTextColor(hex) {
    const color = tinycolor(hex);
    const hsl = color.toHsl();
    return setLightness(hsl, color.isDark() ? lightest : darkest);
  }

  function svgToUrl(str) {
    const cleaned = str.replace(/[\t\n\r]/gim, '').replace(/\s\s+/g, ' ');
    const encoded = encodeURIComponent(cleaned).replace(/\(/g, '%28').replace(/\)/g, '%29');
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
  }
  Object.values(colors).map(i => i['900']);

  const localhost = {
    url: /(file:\/\/\/.+(index)?.html)/,
    language: [Language.RAW],
    category: Category.MANGA,
  };

  function removeAllEventListeners(element) {
    if (!element || !element.parentNode) {
      return element;
    }
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    return newElement;
  }
  const removeAttributes = element => {
    element.getAttributeNames().forEach(attr => element?.removeAttribute(attr));
  };
  const cleanUpElement = (...elements) => {
    elements?.forEach(removeAttributes);
    elements?.forEach(removeAllEventListeners);
  };

  let scrollActive = false;
  function scroll() {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
      chapter?.scrollBy({
        top: 0,
        left: getSettingsValue('scrollHeight') * scrollDirection,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: getSettingsValue('scrollHeight'),
        left: 0,
        behavior: 'smooth',
      });
    }
    if (document.querySelector('#Header')?.classList.contains('headroom-end')) {
      scrollActive = false;
      document.querySelector('#ScrollControl')?.classList.remove('running');
      logScript('Finished auto scroll');
    }
    if (scrollActive) {
      requestAnimationFrame(scroll);
    }
  }
  function toggleAutoScroll() {
    const control = document.querySelector('#AutoScroll');
    if (scrollActive) {
      scrollActive = false;
      control?.classList.remove('running');
      logScript('Stopped auto scroll');
    } else {
      scrollActive = true;
      requestAnimationFrame(scroll);
      control?.classList.add('running');
      logScript('Start auto scroll');
    }
  }
  let resume = false;
  const debounceAutoScroll = _.debounce(() => {
    toggleAutoScroll();
    resume = false;
  }, 500);
  function manualScroll() {
    if (!resume && scrollActive) {
      toggleAutoScroll();
      resume = true;
    }
    if (resume && !scrollActive) {
      debounceAutoScroll();
    }
  }
  function autoscroll() {
    window.addEventListener('wheel', _.throttle(manualScroll, 500));
    document.querySelector('#AutoScroll')?.addEventListener('click', toggleAutoScroll);
  }

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
          ? global
          : typeof self !== 'undefined'
            ? self
            : {};

  var dist = {};

  var constants = {};

  var hasRequiredConstants;

  function requireConstants() {
    if (hasRequiredConstants) return constants;
    hasRequiredConstants = 1;
    Object.defineProperty(constants, '__esModule', { value: true });
    constants.BLANK_URL =
      constants.relativeFirstCharacters =
      constants.whitespaceEscapeCharsRegex =
      constants.urlSchemeRegex =
      constants.ctrlCharactersRegex =
      constants.htmlCtrlEntityRegex =
      constants.htmlEntitiesRegex =
      constants.invalidProtocolRegex =
      void 0;
    constants.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    constants.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    constants.htmlCtrlEntityRegex = /&(newline|tab);/gi;
    constants.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    constants.urlSchemeRegex = /^.+(:|&colon;)/gim;
    constants.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
    constants.relativeFirstCharacters = ['.', '/'];
    constants.BLANK_URL = 'about:blank';
    return constants;
  }

  var hasRequiredDist;

  function requireDist() {
    if (hasRequiredDist) return dist;
    hasRequiredDist = 1;
    Object.defineProperty(dist, '__esModule', { value: true });
    dist.sanitizeUrl = void 0;
    var constants_1 = requireConstants();
    function isRelativeUrlWithoutProtocol(url) {
      return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function decodeHtmlCharacters(str) {
      var removedNullByte = str.replace(constants_1.ctrlCharactersRegex, '');
      return removedNullByte.replace(constants_1.htmlEntitiesRegex, function (match, dec) {
        return String.fromCharCode(dec);
      });
    }
    function isValidUrl(url) {
      return URL.canParse(url);
    }
    function decodeURI(uri) {
      try {
        return decodeURIComponent(uri);
      } catch (e) {
        // Ignoring error
        // It is possible that the URI contains a `%` not associated
        // with URI/URL-encoding.
        return uri;
      }
    }
    function sanitizeUrl(url) {
      if (!url) {
        return constants_1.BLANK_URL;
      }
      var charsToDecode;
      var decodedUrl = decodeURI(url.trim());
      do {
        decodedUrl = decodeHtmlCharacters(decodedUrl)
          .replace(constants_1.htmlCtrlEntityRegex, '')
          .replace(constants_1.ctrlCharactersRegex, '')
          .replace(constants_1.whitespaceEscapeCharsRegex, '')
          .trim();
        decodedUrl = decodeURI(decodedUrl);
        charsToDecode =
          decodedUrl.match(constants_1.ctrlCharactersRegex) ||
          decodedUrl.match(constants_1.htmlEntitiesRegex) ||
          decodedUrl.match(constants_1.htmlCtrlEntityRegex) ||
          decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);
      } while (charsToDecode && charsToDecode.length > 0);
      var sanitizedUrl = decodedUrl;
      if (!sanitizedUrl) {
        return constants_1.BLANK_URL;
      }
      if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
      }
      // Remove any leading whitespace before checking the URL scheme
      var trimmedUrl = sanitizedUrl.trimStart();
      var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return sanitizedUrl;
      }
      var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();
      if (constants_1.invalidProtocolRegex.test(urlScheme)) {
        return constants_1.BLANK_URL;
      }
      var backSanitized = trimmedUrl.replace(/\\/g, '/');
      // Handle special cases for mailto: and custom deep-link protocols
      if (urlScheme === 'mailto:' || urlScheme.includes('://')) {
        return backSanitized;
      }
      // For http and https URLs, perform additional validation
      if (urlScheme === 'http:' || urlScheme === 'https:') {
        if (!isValidUrl(backSanitized)) {
          return constants_1.BLANK_URL;
        }
        var url_1 = new URL(backSanitized);
        url_1.protocol = url_1.protocol.toLowerCase();
        url_1.hostname = url_1.hostname.toLowerCase();
        return url_1.toString();
      }
      return backSanitized;
    }
    dist.sanitizeUrl = sanitizeUrl;
    return dist;
  }

  var distExports = requireDist();

  var FileSaver_min$1 = { exports: {} };

  var FileSaver_min = FileSaver_min$1.exports;

  var hasRequiredFileSaver_min;

  function requireFileSaver_min() {
    if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
    hasRequiredFileSaver_min = 1;
    (function (module, exports) {
      (function (a, b) {
        b();
      })(FileSaver_min, function () {
        function b(a, b) {
          return (
            'undefined' == typeof b
              ? (b = { autoBom: false })
              : 'object' != typeof b &&
              (console.warn('Deprecated: Expected third argument to be a object'),
                (b = { autoBom: !b })),
            b.autoBom &&
              /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                a.type,
              )
              ? new Blob(['\uFEFF', a], { type: a.type })
              : a
          );
        }
        function c(a, b, c) {
          var d = new XMLHttpRequest();
          (d.open('GET', a),
            (d.responseType = 'blob'),
            (d.onload = function () {
              g(d.response, b, c);
            }),
            (d.onerror = function () {
              console.error('could not download file');
            }),
            d.send());
        }
        function d(a) {
          var b = new XMLHttpRequest();
          b.open('HEAD', a, false);
          try {
            b.send();
          } catch (a) { }
          return 200 <= b.status && 299 >= b.status;
        }
        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent('click'));
          } catch (c) {
            var b = document.createEvent('MouseEvents');
            (b.initMouseEvent(
              'click',
              true,
              true,
              window,
              0,
              0,
              0,
              80,
              20,
              false,
              false,
              false,
              false,
              0,
              null,
            ),
              a.dispatchEvent(b));
          }
        }
        var f =
          'object' == typeof window && window.window === window
            ? window
            : 'object' == typeof self && self.self === self
              ? self
              : 'object' == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal
                ? commonjsGlobal
                : void 0,
          a =
            f.navigator &&
            /Macintosh/.test(navigator.userAgent) &&
            /AppleWebKit/.test(navigator.userAgent) &&
            !/Safari/.test(navigator.userAgent),
          g =
            f.saveAs ||
            ('object' != typeof window || window !== f
              ? function () { }
              : 'download' in HTMLAnchorElement.prototype && !a
                ? function (b, g, h) {
                  var i = f.URL || f.webkitURL,
                    j = document.createElement('a');
                  ((g = g || b.name || 'download'),
                    (j.download = g),
                    (j.rel = 'noopener'),
                    'string' == typeof b
                      ? ((j.href = b),
                        j.origin === location.origin
                          ? e(j)
                          : d(j.href)
                            ? c(b, g, h)
                            : e(j, (j.target = '_blank')))
                      : ((j.href = i.createObjectURL(b)),
                        setTimeout(function () {
                          i.revokeObjectURL(j.href);
                        }, 4e4),
                        setTimeout(function () {
                          e(j);
                        }, 0)));
                }
                : 'msSaveOrOpenBlob' in navigator
                  ? function (f, g, h) {
                    if (((g = g || f.name || 'download'), 'string' != typeof f))
                      navigator.msSaveOrOpenBlob(b(f, h), g);
                    else if (d(f)) c(f, g, h);
                    else {
                      var i = document.createElement('a');
                      ((i.href = f),
                        (i.target = '_blank'),
                        setTimeout(function () {
                          e(i);
                        }));
                    }
                  }
                  : function (b, d, e, g) {
                    if (
                      ((g = g || open('', '_blank')),
                        g && (g.document.title = g.document.body.innerText = 'downloading...'),
                        'string' == typeof b)
                    )
                      return c(b, d, e);
                    var h = 'application/octet-stream' === b.type,
                      i = /constructor/i.test(f.HTMLElement) || f.safari,
                      j = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((j || (h && i) || a) && 'undefined' != typeof FileReader) {
                      var k = new FileReader();
                      ((k.onloadend = function () {
                        var a = k.result;
                        ((a = j ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                          g ? (g.location.href = a) : (location = a),
                          (g = null));
                      }),
                        k.readAsDataURL(b));
                    } else {
                      var l = f.URL || f.webkitURL,
                        m = l.createObjectURL(b);
                      (g ? (g.location = m) : (location.href = m),
                        (g = null),
                        setTimeout(function () {
                          l.revokeObjectURL(m);
                        }, 4e4));
                    }
                  });
        ((f.saveAs = g.saveAs = g), (module.exports = g));
      });
    })(FileSaver_min$1);
    return FileSaver_min$1.exports;
  }

  var FileSaver_minExports = requireFileSaver_min();

  // 图片blob缓存，key是原始URL，value是blob对象
  const imageBlobCache = new Map();
  const animatedWebpInfoCache = new Map();
  const animatedWebpControllerCache = new WeakMap();

  // 缓存清理函数：在页面卸载时释放所有blob URL
  function cleanupBlobCache() {
    for (const [url, blob] of imageBlobCache.entries()) {
      if (url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    }
    imageBlobCache.clear();
  }

  // 监听页面卸载事件
  window.addEventListener('beforeunload', cleanupBlobCache);

  // 跳页加载模式：存储需要加载的页码列表
  let skipLoadMode = false;  // 是否启用跳页加载模式
  let skipLoadPages = [];    // 需要加载的页码数组
  let currentBatchLoadInfo = null; // 仅连续批次加载时使用的标题前缀信息
  const LOAD_STALL_TIMEOUT = 8000;
  let nprogressStallTimer = null;
  let lastNProgressKey = '';
  let lastNProgressAt = 0;
  let latestNProgressState = { loaded: 0, total: 0, unloaded: 0 };
  let hasShownLoadStallToast = false;
  let activeManga = null;

  function getCurrentUnloadedPages() {
    const chapter = document.querySelector('#Chapter');
    if (!chapter) return [];
    return [...chapter.querySelectorAll('.PageContent .PageImg')]
      .filter(img => !img.classList.contains('imgLoaded'))
      .map(img => {
        const pageContainer = img.closest('.MangaPage');
        const match = pageContainer?.id?.match(/^Page(\d+)$/);
        return match ? parseInt(match[1], 10) : NaN;
      })
      .filter(pageNum => !Number.isNaN(pageNum));
  }

  function retryUnloadedPages() {
    if (!activeManga) return false;
    const unloadedPages = [...new Set(getCurrentUnloadedPages())].sort((a, b) => a - b);
    if (!unloadedPages.length) {
      hideLoadStallNotice();
      return false;
    }

    hideLoadStallNotice();
    hasShownLoadStallToast = false;
    lastNProgressAt = Date.now();
    const forcedRetryManga = {
      ...activeManga,
      lazy: false,
      timer: 0,
    };

    unloadedPages.forEach(pageNum => {
      const img = document.querySelector(`#PageImg${pageNum}`);
      if (!img) return;

      img.classList.remove('imgLoaded', 'imgBroken');
      img.onload = null;
      img.onerror = null;
      img.removeAttribute('src');
      img.removeAttribute('data-src');
      img.setAttribute('data-blob-cached', 'false');

      const thumb = document.querySelector(`#ThumbnailImg${pageNum}`);
      thumb?.classList.remove('imgBroken');

      if (isImagesManga(forcedRetryManga) && forcedRetryManga.listImages?.[pageNum - 1]) {
        addImg(forcedRetryManga, pageNum, forcedRetryManga.listImages[pageNum - 1], pageNum);
      } else if (isPagesManga(forcedRetryManga) && forcedRetryManga.listPages?.[pageNum - 1]) {
        findPage(forcedRetryManga, pageNum, forcedRetryManga.listPages[pageNum - 1], false)().catch(logScript);
      }
    });

    updateProgress();
    scheduleLoadStallCheck();
    logScript(`Retry unloaded pages: ${unloadedPages.join(', ')}`);
    return true;
  }
  
  // 防止重复打包的全局锁
  let isDownloading = false;
  let currentDownloadType = null; // 'normal' 或 'force'，记录当前下载类型
  
  const getFilename = (index, total, ext, actualPageNum, maxPageNum) => {
    // 如果提供了实际页码，使用实际页码；否则使用 index + 1
    const pageNum = actualPageNum !== undefined ? actualPageNum : (index + 1);
    // 根据最大页码计算位数（至少4位）
    const maxNum = maxPageNum !== undefined ? maxPageNum : (actualPageNum !== undefined ? Math.max(actualPageNum, total) : total);
    const pad = Math.max(4, Math.floor(Math.log10(maxNum)) + 1);
    return `${pageNum.toString().padStart(pad, '0')}.${ext.replace('jpeg', 'jpg')}`;
  };

  function getImageExtensionFromBlob(blob, fallbackUrl = '') {
    if (blob.type === 'image/webp') return 'webp';
    if (blob.type === 'image/png') return 'png';
    if (blob.type === 'image/jpeg' || blob.type === 'image/jpg') return 'jpg';
    if (blob.type === 'image/gif') return 'gif';
    return getExtension(fallbackUrl) || 'jpg';
  }

  const zipTextEncoder = new TextEncoder();
  const zipCrcTable = (() => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) {
      crc = zipCrcTable[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function getZipDosTime(date = new Date()) {
    const year = Math.max(1980, date.getFullYear());
    const dosTime =
      (date.getHours() << 11) |
      (date.getMinutes() << 5) |
      Math.floor(date.getSeconds() / 2);
    const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { dosTime, dosDate };
  }

  function writeLocalZipHeader(view, values) {
    view.setUint32(0, values.signature, true);
    view.setUint16(4, values.versionNeeded ?? 20, true);
    view.setUint16(6, 0x0800, true); // UTF-8 filenames
    view.setUint16(8, 0, true); // STORE
    view.setUint16(10, values.dosTime, true);
    view.setUint16(12, values.dosDate, true);
    view.setUint32(14, values.crc, true);
    view.setUint32(18, values.size, true);
    view.setUint32(22, values.size, true);
  }

  function writeCentralZipHeader(view, values) {
    view.setUint32(0, values.signature, true);
    view.setUint16(4, values.versionMadeBy ?? 20, true);
    view.setUint16(6, values.versionNeeded ?? 20, true);
    view.setUint16(8, 0x0800, true); // UTF-8 filenames
    view.setUint16(10, 0, true); // STORE
    view.setUint16(12, values.dosTime, true);
    view.setUint16(14, values.dosDate, true);
    view.setUint32(16, values.crc, true);
    view.setUint32(20, values.size, true);
    view.setUint32(24, values.size, true);
  }

  async function prepareStoredZipPayload(data) {
    if (data instanceof Blob) {
      const buffer = await data.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      return { payload: data, size: data.size, crc: crc32(bytes) };
    }
    if (data instanceof ArrayBuffer) {
      const bytes = new Uint8Array(data);
      return { payload: data, size: data.byteLength, crc: crc32(bytes) };
    }
    if (ArrayBuffer.isView(data)) {
      const bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      const payload = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
      return { payload, size: bytes.byteLength, crc: crc32(bytes) };
    }
    if (typeof data === 'string') {
      const bytes = zipTextEncoder.encode(data);
      return { payload: bytes, size: bytes.byteLength, crc: crc32(bytes) };
    }
    throw new Error('Unsupported zip entry data');
  }

  async function generateStoredZipBlob(entries, onProgress) {
    const localParts = [];
    const centralParts = [];
    const { dosTime, dosDate } = getZipDosTime();
    let offset = 0;

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const nameBytes = zipTextEncoder.encode(entry.name);
      const { payload, size, crc } = await prepareStoredZipPayload(entry.data);
      if (size > 0xffffffff || offset > 0xffffffff || nameBytes.length > 0xffff) {
        throw new Error('Zip64 is required');
      }

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(localHeader.buffer);
      writeLocalZipHeader(localView, {
        signature: 0x04034b50,
        versionNeeded: 20,
        dosTime,
        dosDate,
        crc,
        size,
      });
      localView.setUint16(26, nameBytes.length, true);
      localView.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);
      localParts.push(localHeader, payload);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      writeCentralZipHeader(centralView, {
        signature: 0x02014b50,
        versionMadeBy: 20,
        versionNeeded: 20,
        dosTime,
        dosDate,
        crc,
        size,
      });
      centralView.setUint16(28, nameBytes.length, true);
      centralView.setUint16(30, 0, true);
      centralView.setUint16(32, 0, true);
      centralView.setUint16(34, 0, true);
      centralView.setUint16(36, 0, true);
      centralView.setUint32(38, 0, true);
      centralView.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);
      centralParts.push(centralHeader);

      offset += localHeader.byteLength + size;
      onProgress?.(i + 1, entries.length);
    }

    const centralOffset = offset;
    const centralSize = centralParts.reduce((sum, part) => sum + part.byteLength, 0);
    if (entries.length > 0xffff || centralOffset > 0xffffffff || centralSize > 0xffffffff) {
      throw new Error('Zip64 is required');
    }

    const endHeader = new Uint8Array(22);
    const endView = new DataView(endHeader.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(8, entries.length, true);
    endView.setUint16(10, entries.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, centralOffset, true);

    return new Blob([...localParts, ...centralParts, endHeader], { type: 'application/zip' });
  }

  async function generateZipContent(entries) {
    try {
      return await generateStoredZipBlob(entries, (current, total) => {
        const percent = Math.round((current / total) * 100);
        document.getElementById('dlProgressText').textContent = `打包中... ${current}/${total} (${percent}%)`;
        document.getElementById('dlProgressInner').style.width = `${percent}%`;
      });
    } catch (err) {
      logScript('Fast zip generation failed, falling back to JSZip', err);
      const fallbackZip = new JSZip();
      entries.forEach(entry => {
        fallbackZip.file(entry.name, entry.data, {
          binary: !(typeof entry.data === 'string'),
          createFolders: true,
          compression: 'STORE',
        });
      });
      document.getElementById('dlProgressText').textContent = '打包中...';
      return fallbackZip.generateAsync(
        {
          type: 'blob',
          compression: 'STORE',
          streamFiles: true,
        },
        (metadata) => {
          const percent = Math.round(metadata.percent);
          document.getElementById('dlProgressText').textContent = `打包中... ${percent}%`;
          document.getElementById('dlProgressInner').style.width = `${percent}%`;
        }
      );
    }
  }

  async function getImageData(img, index, array, maxPageNum) {
    const originalUrl = img.getAttribute('data-original-url');
    const displaySrc = img.getAttribute('src');
    const src = originalUrl || displaySrc || img.getAttribute('data-src') || '';

    // 从父元素的Page容器ID中提取实际页码
    let actualPageNum = undefined;
    const pageContainer = img.closest('.MangaPage');
    if (pageContainer && pageContainer.id) {
      const match = pageContainer.id.match(/^Page(\d+)$/);
      if (match) {
        actualPageNum = parseInt(match[1], 10);
      }
    }

    logScriptVerbose(`[Image ${index}] actualPageNum: ${actualPageNum}, originalUrl: ${originalUrl?.substring(0, 50)}, displaySrc: ${displaySrc?.substring(0, 50)}, checking cache...`);

    if (isBase64ImageUrl(src)) {
      return Promise.resolve({
        name: getFilename(index, array.length, getExtensionBase64(src), actualPageNum, maxPageNum),
        data: base64ToBytes(getDataFromBase64(src) ?? ''),
      });
    }

    // 优先从blob缓存获取（保持原始格式）
    if (imageBlobCache.has(src)) {
      const blob = imageBlobCache.get(src);
      const ext = getImageExtensionFromBlob(blob, src);

      return {
        name: getFilename(index, array.length, ext, actualPageNum, maxPageNum),
        data: blob,
      };
    }

    // 尝试从blob URL获取
    if (isObjectURL(displaySrc)) {
      try {
        const response = await fetch(displaySrc);
        const blob = await response.blob();
        const ext = getImageExtensionFromBlob(blob, originalUrl || src);

        return {
          name: getFilename(index, array.length, ext, actualPageNum, maxPageNum),
          data: blob,
        };
      } catch (e) {
        logScript(`[Image ${index}] Failed to fetch blob URL:`, e);
      }
    }

    // 最后回退到Canvas方式（会损失质量）
    logScript(`[Image ${index}] ⚠ Using Canvas fallback (quality loss)`);
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // 根据原图扩展名决定输出格式
      let ext = getExtension(originalUrl || src).toLowerCase() || 'jpg';
      let mimeType = 'image/jpeg';
      let quality = 0.95;

      if (ext === 'png') {
        mimeType = 'image/png';
        quality = 1.0;
      } else if (ext === 'webp') {
        mimeType = 'image/webp';
      } else {
        ext = 'jpg';
      }

      canvas.toBlob(blob => {
        if (blob) {
          blob.arrayBuffer().then(buffer => {
            resolve({
              name: getFilename(index, array.length, ext, actualPageNum, maxPageNum),
              data: buffer,
            });
          });
        } else {
          reject(new Error(`Canvas toBlob failed for ${src}`));
        }
      }, mimeType, quality);
    });
  }

  async function collectZipImageData(images, maxPageNum, updateProgress, failedIndices) {
    const concurrency = Math.min(6, Math.max(1, navigator.hardwareConcurrency || 4), images.length);
    const data = new Array(images.length);
    let nextIndex = 0;
    let completed = 0;

    const getActualPageNum = (img, index) => {
      const pageContainer = img.closest('.MangaPage');
      const match = pageContainer?.id?.match(/^Page(\d+)$/);
      return match ? parseInt(match[1], 10) : index + 1;
    };

    async function worker() {
      while (nextIndex < images.length) {
        const i = nextIndex++;
        try {
          data[i] = await getImageData(images[i], i, images, maxPageNum);
        } catch (e) {
          logScript(`Failed to extract image ${i + 1}: ${e.message}`);
          failedIndices?.push(getActualPageNum(images[i], i));
        } finally {
          completed++;
          updateProgress(completed, '提取图片');
        }
      }
    }

    await Promise.all(Array.from({ length: concurrency }, worker));
    return data.filter(Boolean);
  }

  async function generateZip() {
    const images = [...document.querySelectorAll('.PageImg')];
    const total = images.length;

    // 验证：检查是否所有图片都已加载
    const loadedImages = images.filter(img => img.classList.contains('imgLoaded'));
    logScript(`generateZip: Total images=${total}, Loaded=${loadedImages.length}`);

    if (loadedImages.length < total) {
      logScript(`Warning: Only ${loadedImages.length}/${total} images are loaded!`);
      // 可以选择只处理已加载的图片，或者等待
      // 这里我们继续处理，但会在日志中标记
    }

    // 收集所有实际页码，找出最大值用于计算位数
    let maxPageNum = total;
    images.forEach(img => {
      const pageContainer = img.closest('.MangaPage');
      if (pageContainer && pageContainer.id) {
        const match = pageContainer.id.match(/^Page(\d+)$/);
        if (match) {
          const pageNum = parseInt(match[1], 10);
          if (pageNum > maxPageNum) maxPageNum = pageNum;
        }
      }
    });
    logScript(`Max page number: ${maxPageNum}`);

    // 调试：检查缓存情况
    logScript(`Total images: ${total}, Cached blobs: ${imageBlobCache.size}`);
    images.forEach((img, i) => {
      const originalUrl = img.getAttribute('data-original-url');
      const src = originalUrl || img.getAttribute('src') || '';
      logScriptVerbose(`Image ${i}: src=${src.substring(0, 50)}, cached=${imageBlobCache.has(src)}`);
    });

    // 创建进度条UI
    let progressBar = document.getElementById('downloadProgress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'downloadProgress';
      progressBar.innerHTML = `
        <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
          background:rgba(0,0,0,0.9);padding:20px 30px;border-radius:10px;z-index:999999;
          color:#fff;font-size:14px;min-width:300px;text-align:center;">
          <div id="dlProgressText">准备下载... 0/${total}</div>
          <div style="background:#333;height:20px;border-radius:10px;margin-top:10px;overflow:hidden;">
            <div id="dlProgressInner" style="background:linear-gradient(90deg,#a855f7,#ec4899);
              height:100%;width:0%;transition:width 0.2s;border-radius:10px;"></div>
          </div>
        </div>
      `;
      document.body.appendChild(progressBar);
    }

    const updateProgress = (current, stage) => {
      const percent = Math.round((current / total) * 100);
      document.getElementById('dlProgressText').textContent = `${stage} ${current}/${total} (${percent}%)`;
      document.getElementById('dlProgressInner').style.width = `${percent}%`;
    };

    // 并发提取图片数据，结果仍按页码顺序加入zip
    const data = await collectZipImageData(images, maxPageNum, updateProgress);

    // 添加标题.txt文件
    const title = document.title || document.querySelector('#MangaTitle')?.textContent?.trim() || '未知标题';

    // 生成zip文件名（从URL提取）
    const url = window.location.href;
    let zipName = 'download.zip';
    try {
      const urlObj = new URL(url);
      // 提取域名和路径，替换特殊字符
      const domain = urlObj.hostname.replace(/^www\./, '');
      const path = urlObj.pathname.replace(/^\//, '').replace(/\//g, '_').replace(/[<>:"|?*]/g, '_');
      zipName = `${domain}_${path}.zip`;
    } catch (e) {
      logScript('Failed to parse URL for zip name', e);
    }
    zipName = `「${data.length}」${zipName}`;

    const entries = [...data, { name: '标题.txt', data: title }];

    // 生成zip文件
    document.getElementById('dlProgressText').textContent = '打包中...';
    generateZipContent(entries).then(content => {
      logScript('Download Ready');
      FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
      const downloadBtn = document.getElementById('download');
      downloadBtn?.classList.remove('loading');
      downloadBtn?.classList.add('downloaded');
      // 修改按钮文字为"完成"
      const btnTextNode = [...downloadBtn.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (btnTextNode) {
        btnTextNode.textContent = ' 完成';
      }

      // 记录本次页面加载中已下载（刷新页面后自动清除）
      const currentUrl = window.location.href;
      downloadedInThisSession.add(currentUrl);

      // 释放下载锁
      isDownloading = false;
      currentDownloadType = null;

      // 移除进度条
      progressBar.remove();
    }).catch(err => {
      logScript('Zip generation failed', err);
      progressBar.remove();
      isDownloading = false;
      currentDownloadType = null;
    });
  }

  function buttonStartDownload(event) {
    const button = event.currentTarget;
    if (button.classList.contains('loading')) {
      logScript('Download button already loading, ignoring click');
      return;
    }
    
    // 如果正在强制下载，强制中断它
    if (isDownloading && currentDownloadType === 'force') {
      logScript('Stopping force download, starting normal download');
      
      // 立即重置状态
      isDownloading = false;
      currentDownloadType = null;
      
      // 移除强制下载的进度条
      const progressBar = document.getElementById('downloadProgress');
      if (progressBar) {
        progressBar.remove();
      }
      
      // 重置强制下载按钮状态
      const forceBtn = document.getElementById('downloadPart');
      if (forceBtn) {
        forceBtn.classList.remove('loading');
      }
    }
    
    // 如果正在正常下载，忽略
    if (isDownloading && currentDownloadType === 'normal') {
      logScript('Normal download already in progress, ignoring click');
      return;
    }
    
    startNormalDownload(button);
  }
  
  function startNormalDownload(button) {
    logScript('Downloading Chapter');
    button.classList.add('loading');
    isDownloading = true;
    currentDownloadType = 'normal';
    generateZip().catch(err => {
      logScript('Error downloading chapter', err);
      isDownloading = false;
      currentDownloadType = null;
      button.classList.remove('loading');
    });
  }

  async function generateZipPart() {
    const images = [...document.querySelectorAll('.PageImg')];
    const total = images.length;
    const failedIndices = [];

    // 收集所有实际页码，找出最大值用于计算位数
    let maxPageNum = total;
    images.forEach(img => {
      const pageContainer = img.closest('.MangaPage');
      if (pageContainer && pageContainer.id) {
        const match = pageContainer.id.match(/^Page(\d+)$/);
        if (match) {
          const pageNum = parseInt(match[1], 10);
          if (pageNum > maxPageNum) maxPageNum = pageNum;
        }
      }
    });
    logScript(`Max page number: ${maxPageNum}`);

    // 创建进度条UI
    let progressBar = document.getElementById('downloadProgress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'downloadProgress';
      progressBar.innerHTML = `
        <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
          background:rgba(0,0,0,0.9);padding:20px 30px;border-radius:10px;z-index:999999;
          color:#fff;font-size:14px;min-width:300px;text-align:center;">
          <div id="dlProgressText">准备强制下载... 0/${total}</div>
          <div style="background:#333;height:20px;border-radius:10px;margin-top:10px;overflow:hidden;">
            <div id="dlProgressInner" style="background:linear-gradient(90deg,#a855f7,#ec4899);
              height:100%;width:0%;transition:width 0.2s;border-radius:10px;"></div>
          </div>
        </div>
      `;
      document.body.appendChild(progressBar);
    }

    const updateProgress = (current, stage) => {
      const percent = Math.round((current / total) * 100);
      document.getElementById('dlProgressText').textContent = `${stage} ${current}/${total} (${percent}%)`;
      document.getElementById('dlProgressInner').style.width = `${percent}%`;
    };

    // 并发提取图片数据，失败页会继续写入列表
    const data = await collectZipImageData(images, maxPageNum, updateProgress, failedIndices);

    const entries = [...data];

    // 添加未加载图片列表.txt
    if (failedIndices.length > 0) {
      entries.push({
        name: '未加载图片列表.txt',
        data: '以下图片未成功加载 (可能还在加载中或加载失败):\n' + failedIndices.join('\n'),
      });
    }

    // 添加标题.txt文件
    const title = document.title || document.querySelector('#MangaTitle')?.textContent?.trim() || '未知标题';
    entries.push({ name: '标题.txt', data: title });

    // 生成zip文件名
    const url = window.location.href;
    let zipName = 'download_partial.zip';
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname.replace(/^www\./, '');
      const path = urlObj.pathname.replace(/^\//, '').replace(/\//g, '_').replace(/[<>:"|?*]/g, '_');
      zipName = `${domain}_${path}_partial.zip`;
    } catch (e) {
      logScript('Failed to parse URL for zip name', e);
    }
    zipName = `「${data.length}」${zipName}`;

    // 生成zip文件
    document.getElementById('dlProgressText').textContent = '打包中...';
    generateZipContent(entries).then(content => {
      logScript('Download Ready');
      FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
      const downloadBtn = document.getElementById('downloadPart');
      if (downloadBtn) {
        downloadBtn.classList.remove('loading');
        downloadBtn.classList.add('downloaded');
        const btnTextNode = [...downloadBtn.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (btnTextNode) {
          btnTextNode.textContent = ' 下载完成';
        }
      }
      // 释放下载锁
      isDownloading = false;
      currentDownloadType = null;
      progressBar.remove();
    }).catch(err => {
      logScript('Zip generation failed', err);
      progressBar.remove();
      document.getElementById('downloadPart')?.classList.remove('loading');
      isDownloading = false;
      currentDownloadType = null;
    });
  }

  function buttonStartDownloadPart(event) {
    const button = event.currentTarget;
    if (button.classList.contains('loading') || isDownloading) {
      logScript('Download already in progress, ignoring force download click');
      return;
    }
    logScript('Downloading Chapter (Forced)');
    button.classList.add('loading');
    isDownloading = true;
    currentDownloadType = 'force';
    generateZipPart().catch(err => {
      logScript('Error downloading chapter', err);
      button.classList.remove('loading');
      isDownloading = false;
      currentDownloadType = null;
    });
  }
  function buttonGlobalHideImageControls() {
    // 切换显示/隐藏控件按钮（除了页数）
    // 默认不显示控件按钮，点击后显示
    document.querySelector('#MangaOnlineViewer')?.classList.toggle('showControls');
  }
  function buttonRedirectURL(event) {
    const element = event.target;
    const url = element.getAttribute('value') ?? element.getAttribute('href');
    if (event.button !== 1 && !event.ctrlKey) {
      if (url && url !== '#') {
        window.location.href = distExports.sanitizeUrl(url);
      } else if (element.id === 'series') {
        window.history.back();
      }
    }
  }
  function toggleMangaTitlePopup(forceOpen) {
    const viewerTitle = document.querySelector('.ViewerTitle');
    const mangaTitle = document.querySelector('#MangaTitle');
    if (!viewerTitle || !mangaTitle) return;
    const nextState =
      typeof forceOpen === 'boolean' ? forceOpen : !viewerTitle.classList.contains('titlePopupOpen');
    viewerTitle.classList.toggle('titlePopupOpen', nextState);
    mangaTitle.setAttribute('aria-expanded', nextState ? 'true' : 'false');
  }
  function buttonToggleMangaTitlePopup(event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMangaTitlePopup();
  }
  function onMangaTitleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      buttonToggleMangaTitlePopup(event);
    } else if (event.key === 'Escape') {
      toggleMangaTitlePopup(false);
    }
  }
  function closeMangaTitlePopup(event) {
    const viewerTitle = document.querySelector('.ViewerTitle');
    if (!viewerTitle?.classList.contains('titlePopupOpen')) return;
    if (!viewerTitle.contains(event.target)) {
      toggleMangaTitlePopup(false);
    }
  }
  function buttonCommentsOpen() {
    document.querySelector('#CommentsPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonCommentsClose() {
    document.querySelector('#CommentsPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function changeCommentsColor() {
    const elem = document.querySelector('#CommentsArea');
    elem?.classList.toggle('light');
    elem?.classList.toggle('dark');
  }
  function globals() {
    document.querySelector('#download')?.addEventListener('click', buttonStartDownload);
    document.querySelector('#downloadPart')?.addEventListener('click', buttonStartDownloadPart);
    document.querySelector('#copyUnloaded')?.addEventListener('click', function () {
      const select = document.querySelector('#gotoUnloadedPage');
      const unloadedPages = [];

      if (select) {
        Array.from(select.options).forEach(opt => {
          const val = parseInt(opt.value, 10);
          if (!isNaN(val)) {
            unloadedPages.push(val);
          }
        });
      }

      if (unloadedPages.length === 0) {
        this.textContent = '📋 ✓ 全部已加载(0)';
        this.style.background = '#4CAF50';
        return;
      }

      const text = unloadedPages.sort((a, b) => a - b).join(',');
      navigator.clipboard.writeText(text).then(() => {
        this.textContent = `📋 ✓ 已复制 ${unloadedPages.length} 页`;
        this.style.background = '#4CAF50';
      }).catch(() => {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.textContent = `📋 ✓ 已复制 ${unloadedPages.length} 页`;
        this.style.background = '#4CAF50';
      });
    });
    document
      .querySelector('#pageControls')
      ?.addEventListener('click', buttonGlobalHideImageControls);
    document.querySelector('#next')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#prev')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#series')?.addEventListener('click', buttonRedirectURL);
    document.querySelector('#MangaTitle')?.addEventListener('click', buttonToggleMangaTitlePopup);
    document.querySelector('#MangaTitle')?.addEventListener('keydown', onMangaTitleKeydown);
    document.addEventListener('pointerdown', closeMangaTitlePopup, true);
    document.querySelector('#CommentsColorScheme')?.addEventListener('click', changeCommentsColor);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonCommentsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonCommentsClose);
  }

  let prevOffset = 0;
  let showEnd = 0;
  const setScrollDirection = classSuffix => {
    const header = document.querySelector('#Header');
    if (!header) return;
    header.classList.remove('headroom-end', 'headroom-hide', 'headroom-show', 'headroom-top');
    if (classSuffix) {
      header.classList.add(`headroom-${classSuffix}`);
    }
  };
  function toggleScrollDirection() {
    const { scrollY } = window;
    if (
      showEnd &&
      getSettingsValue('zoomMode') !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.scrollHeight
    ) {
      setScrollDirection('end');
    } else if (scrollY > prevOffset && scrollY > 50) {
      setScrollDirection('hide');
    } else if (scrollY < prevOffset && scrollY > 50) {
      setScrollDirection('show');
    } else if (scrollY <= 100) {
      setScrollDirection('top');
    } else {
      setScrollDirection('');
    }
    prevOffset = scrollY;
  }
  function headroom(pixelsToShowEnd = 0) {
    showEnd = pixelsToShowEnd;
    window.addEventListener('scroll', _.debounce(toggleScrollDirection, 50));
  }

  function buttonReloadPage(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    reloadImage(img);
  }
  function buttonHidePage(event) {
    const img = event.currentTarget.parentElement?.parentElement;
    img.classList.toggle('hide');
  }
  function buttonToggleAnimatedWebp(event) {
    event.preventDefault();
    event.stopPropagation();
    const media = event.currentTarget.classList.contains('AnimatedWebpMedia')
      ? event.currentTarget
      : event.currentTarget.parentElement;
    const img = media?.querySelector('.PageImg');
    if (!img?.dataset.animatedWebp) return;
    if (img.dataset.animatedPlaying === 'true') {
      pauseAnimatedWebp(img);
    } else {
      playAnimatedWebp(img);
    }
  }
  function buttonAnimatedWebpProgressClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function buttonSeekAnimatedWebpProgress(event) {
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.button === 'number' && event.button !== 0) return;

    const progress = event.currentTarget;
    const media = progress.closest('.AnimatedWebpMedia');
    const img = media?.querySelector('.PageImg');
    const controller = img ? getAnimatedWebpController(img) : null;
    if (!img?.dataset.animatedWebp || !controller) return;

    const wasPlaying = img.dataset.animatedPlaying === 'true';
    const applySeek = (clientX, resumePlayback = false) => {
      const ratio = getAnimatedWebpSeekRatio(progress, clientX);
      void seekAnimatedWebpToRatio(img, ratio, resumePlayback).catch(logScript);
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', onPointerMove, true);
      window.removeEventListener('pointerup', onPointerUp, true);
      window.removeEventListener('pointercancel', onPointerCancel, true);
      progress.releasePointerCapture?.(event.pointerId);
    };
    const onPointerMove = moveEvent => {
      if (moveEvent.pointerId !== event.pointerId) return;
      moveEvent.preventDefault();
      moveEvent.stopPropagation();
      applySeek(moveEvent.clientX, false);
    };
    const onPointerUp = upEvent => {
      if (upEvent.pointerId !== event.pointerId) return;
      upEvent.preventDefault();
      upEvent.stopPropagation();
      cleanup();
      applySeek(upEvent.clientX, wasPlaying);
    };
    const onPointerCancel = cancelEvent => {
      if (cancelEvent.pointerId !== event.pointerId) return;
      cancelEvent.preventDefault();
      cancelEvent.stopPropagation();
      cleanup();
      applySeek(cancelEvent.clientX, wasPlaying);
    };

    progress.setPointerCapture?.(event.pointerId);
    window.addEventListener('pointermove', onPointerMove, true);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('pointercancel', onPointerCancel, true);
    applySeek(event.clientX, false);
  }
  function individual() {
    document.querySelectorAll('.Reload')?.forEach(addEvent('click', buttonReloadPage));
    document.querySelectorAll('.Hide')?.forEach(addEvent('click', buttonHidePage));
    document.querySelectorAll('.AnimatedWebpToggle')?.forEach(addEvent('click', buttonToggleAnimatedWebp));
    document.querySelectorAll('.AnimatedWebpMedia')?.forEach(addEvent('click', buttonToggleAnimatedWebp));
    document.querySelectorAll('.AnimatedWebpProgress')?.forEach(addEvent('click', buttonAnimatedWebpProgressClick));
    document.querySelectorAll('.AnimatedWebpProgress')?.forEach(addEvent('pointerdown', buttonSeekAnimatedWebpProgress));
  }

  const doClick = selector => document.querySelector(selector)?.dispatchEvent(new Event('click'));
  function doScrolling(sign) {
    const chapter = document.querySelector('#Chapter');
    if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
      const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
      chapter.scrollBy({
        left: 0.8 * window.innerWidth * sign * scrollDirection,
        behavior: 'smooth',
      });
    } else if (getSettingsValue('zoomMode') === 'height') {
      const pages = [...document.querySelectorAll('.MangaPage')];
      const distance = pages.map(element => Math.abs(element.offsetTop - window.scrollY));
      const currentPage = _.indexOf(distance, _.min(distance));
      const target = currentPage + sign;
      const header = document.querySelector('#Header');
      if (header && target < 0) {
        scrollToElement(header);
      } else if (header && target >= pages.length) {
        header.classList.add('headroom-end');
      } else {
        logScript(`Current array page ${currentPage},`, `Scrolling to page ${target}`);
        scrollToElement(pages.at(target));
      }
    } else {
      window.scrollBy({
        top: 0.8 * window.innerHeight * sign,
        behavior: 'smooth',
      });
    }
  }
  const actions = {
    SCROLL_UP() {
      doScrolling(-1);
    },
    SCROLL_DOWN() {
      doScrolling(1);
    },
    NEXT_CHAPTER() {
      doClick('#next');
    },
    PREVIOUS_CHAPTER() {
      doClick('#prev');
    },
    ENLARGE() {
      doClick('#enlarge');
    },
    REDUCE() {
      doClick('#reduce');
    },
    RESTORE() {
      doClick('#restore');
    },
    FIT_WIDTH() {
      doClick('#fitWidth');
    },
    FIT_HEIGHT() {
      doClick('#fitHeight');
    },
    SETTINGS() {
      doClick('#settings');
    },
    VIEW_MODE_WEBCOMIC() {
      doClick('#webComic');
    },
    VIEW_MODE_VERTICAL() {
      doClick('#verticalMode');
    },
    VIEW_MODE_LEFT() {
      doClick('#rtlMode');
    },
    VIEW_MODE_RIGHT() {
      doClick('#ltrMode');
    },
    SCROLL_START() {
      doClick('#AutoScroll');
    },
  };
  function keybindings$1() {
    document.onkeydown = null;
    document.onkeyup = null;
    window.onkeydown = null;
    window.onkeyup = null;
    window.onload = null;
    document.body.onload = null;
    hotkeys.unbind();
    Object.keys(getSettingsValue('keybinds')).forEach(key => {
      hotkeys(
        getSettingsValue('keybinds')[key]?.join(',') ?? '',
        _.throttle(event => {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          actions[key]();
        }, 100),
      );
    });
  }

  function selectGoToPage(event) {
    const target = event.currentTarget.value;
    applyZoom();
    scrollToElement(document.querySelector(`#Page${target}`));
  }
  function clickThumbnail(event) {
    applyZoom();
    scrollToElement(
      document.querySelector(
        `#Page${event.currentTarget.querySelector('.ThumbnailIndex')?.textContent}`,
      ),
    );
  }
  function navigation() {
    document.querySelector('#gotoPage')?.addEventListener('change', selectGoToPage);
    document.querySelectorAll('.Thumbnail')?.forEach(addEvent('click', clickThumbnail));
    document.querySelector('#Thumbnails')?.addEventListener('wheel', transformScrollToHorizontal);
  }

  const keybindList = () => {
    const keybinds = getSettingsValue('keybinds');
    return Object.keys(keybinds).map(kb => {
      const keys = keybinds[kb]?.length
        ? keybinds[kb]?.map(key => html`<kbd class="dark">${key}</kbd>`).join(' / ')
        : '';
      return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
    });
  };
  const keybindEditor = () =>
    Object.keys(getSettingsValue('keybinds'))
      .map(
        kb =>
          html`<label for="${kb}">${getLocaleString(kb)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${kb}"
              name="${kb}"
              value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
            />`,
      )
      .concat(html` <div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);
  const KeybindingsPanel = () => html`
    <div
      id="KeybindingsPanel"
      class="panel"
    >
      <h2>${getLocaleString('KEYBINDINGS')}</h2>
      <button
        id="CloseKeybindings"
        class="closeButton"
        title="${getLocaleString('CLOSE')}"
      >
        ${IconX}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${getLocaleString('EDIT_KEYBINDS')}"
        >
          ${IconPencil} ${getLocaleString('BUTTON_EDIT')}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${getLocaleString('SAVE_KEYBINDS')}"
        >
          ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
        </button>
      </div>
      <div id="KeybindingsList">${keybindList().join('\n')}</div>
    </div>
  `;

  function toggleFunction(selector, classname, open, close) {
    return () => {
      const isOpen = document.querySelector(selector)?.className.includes(classname);
      if (isOpen) {
        close();
      } else {
        open();
      }
    };
  }
  function buttonHeaderClick() {
    const header = document.querySelector('#Header');
    if (header?.classList.contains('click')) {
      header?.classList.toggle('visible');
    }
  }
  function isMouseInsideRegion(event, headerWidth, headerHeight) {
    return (
      event.clientX >= 0 &&
      event.clientX <= headerWidth &&
      event.clientY >= 0 &&
      event.clientY <= headerHeight
    );
  }
  function headerHover(event) {
    const header = document.querySelector('#Header');
    if (header?.classList.contains('hover')) {
      if (isMouseInsideRegion(event, header.clientWidth, header.clientHeight)) {
        document.querySelector('#menu')?.classList.add('hide');
        header?.classList.add('visible');
      } else {
        document.querySelector('#menu')?.classList.remove('hide');
        header?.classList.remove('visible');
      }
    }
  }
  function buttonSettingsOpen() {
    document.querySelector('#SettingsPanel')?.classList.add('visible');
    document.querySelector('#Navigation')?.classList.add('visible');
    document.querySelector('#Header')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonSettingsClose() {
    document.querySelector('#SettingsPanel')?.classList.remove('visible');
    document.querySelector('#Navigation')?.classList.remove('visible');
    document.querySelector('#Header')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function buttonKeybindingsOpen() {
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    document.querySelector('#KeybindingsPanel')?.classList.add('visible');
    document.querySelector('#Overlay')?.classList.add('visible');
  }
  function buttonKeybindingsClose() {
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    document.querySelector('#KeybindingsPanel')?.classList.remove('visible');
    document.querySelector('#Overlay')?.classList.remove('visible');
  }
  function saveKeybindings() {
    const newKeybinds = {};
    document.querySelectorAll('.KeybindInput').forEach(element => {
      const keys = element.value.split(',').map(value => value.trim());
      newKeybinds[element.id] = isNothing(keys) ? void 0 : keys;
    });
    saveSettingsValue('keybinds', newKeybinds);
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    keybindings$1();
  }
  function editKeybindings() {
    const keybindingList = document.querySelector('#KeybindingsList');
    if (keybindingList) keybindingList.innerHTML = keybindEditor().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
    document.querySelector('#EditKeybindings')?.classList.add('hidden');
  }
  function panels() {
    document.querySelector('#menu')?.addEventListener('click', buttonHeaderClick);
    document.addEventListener('mousemove', _.throttle(headerHover, 300));
    document
      .querySelector('#settings')
      ?.addEventListener(
        'click',
        toggleFunction('#SettingsPanel', 'visible', buttonSettingsOpen, buttonSettingsClose),
      );
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonSettingsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonSettingsClose);
    document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindingsOpen);
    document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonKeybindingsClose));
    document.querySelector('#Overlay')?.addEventListener('click', buttonKeybindingsClose);
    document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
    document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
  }

  function buttonZoomIn(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    const ratio = (img.width / img.naturalWidth) * (100 + getSettingsValue('zoomStep'));
    applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
  }
  function buttonZoomOut(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    const ratio = (img.width / img.naturalWidth) * (100 - getSettingsValue('zoomStep'));
    applyZoom('percent', ratio, `#${img.getAttribute('id')}`);
  }
  function buttonRestoreZoom() {
    document.querySelector('.PageContent .PageImg')?.removeAttribute('width');
  }
  function buttonZoomWidth(event) {
    const page = event.currentTarget.parentElement?.parentElement;
    const img = page?.querySelector('.PageImg');
    applyZoom('width', 0, `#${img.getAttribute('id')}`);
    page?.classList.toggle('DoublePage');
  }
  function buttonZoomHeight(event) {
    const img = event.currentTarget.parentElement?.parentElement?.querySelector('.PageImg');
    applyZoom('height', 0, `#${img.getAttribute('id')}`);
  }
  function size() {
    document.querySelectorAll('.ZoomIn')?.forEach(addEvent('click', buttonZoomIn));
    document.querySelectorAll('.ZoomOut')?.forEach(addEvent('click', buttonZoomOut));
    document.querySelectorAll('.ZoomRestore')?.forEach(addEvent('click', buttonRestoreZoom));
    document.querySelectorAll('.ZoomWidth')?.forEach(addEvent('click', buttonZoomWidth));
    document.querySelectorAll('.ZoomHeight')?.forEach(addEvent('click', buttonZoomHeight));
  }

  function generateThemeCSS(name, primary, text) {
    return css`
      .ThemeRadio.${name}, [data-theme='${name}'] {
        --theme-primary-color: ${primary};
        --theme-primary-text-color: ${text};
      }
    `;
  }
  function getNormalThemeCSS(theme) {
    return generateThemeCSS(
      theme.name,
      theme[getSettingsValue('themeShade')],
      getSettingsValue('themeShade') < 500 ? theme['900'] : theme['50'],
    );
  }
  function getCustomThemeCSS(hex) {
    return generateThemeCSS('custom', hex, getTextColor(hex));
  }
  function addTheme(theme) {
    return wrapStyle(theme.name, getNormalThemeCSS(theme));
  }
  const themes = () => Object.values(colors);
  function refreshThemes() {
    themes().forEach(theme => {
      replaceStyleSheet(theme.name, getNormalThemeCSS(theme));
    });
    replaceStyleSheet('custom', getCustomThemeCSS(getSettingsValue('customTheme')));
  }
  const themesCSS =
    themes().map(addTheme).join('') +
    wrapStyle('custom', getCustomThemeCSS(getSettingsValue('customTheme')));

  function changeColorScheme() {
    const isDark = getSettingsValue('colorScheme') === 'dark';
    saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
    document.documentElement.classList.remove(isDark ? 'dark' : 'light');
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
  }
  function buttonSelectTheme(event) {
    const target = event.currentTarget;
    saveSettingsValue('theme', target.title);
  }
  function changeCustomTheme(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('customTheme', target);
  }
  function changeThemeShade(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('themeShade', target);
    refreshThemes();
  }
  function theming() {
    document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);
    document.querySelectorAll('.ThemeRadio').forEach(addEvent('click', buttonSelectTheme));
    document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
    document.querySelector('#ThemeShade')?.addEventListener('input', changeThemeShade);
  }

  function setupFluid(mode) {
    const chapter = document.querySelector('#Chapter');
    document.querySelector('#Header')?.classList.remove('visible');
    document.querySelector('#menu')?.classList.remove('hide');
    applyZoom('height');
    scrollToElement(chapter);
    chapter?.addEventListener(
      'wheel',
      mode === 'FluidLTR' ? transformScrollToHorizontal : transformScrollToHorizontalReverse,
    );
  }
  // 防抖函数，避免频繁切换模式
  let viewModeTimer = null;
  let isViewModeChanging = false; // 新增：防止重复切换

  function updateViewMode(mode) {
    return () => {
      // 防止重复切换
      if (isViewModeChanging) {
        return;
      }

      // 清除之前的定时器
      if (viewModeTimer) {
        clearTimeout(viewModeTimer);
        viewModeTimer = null;
      }

      isViewModeChanging = true;

      const chapter = document.querySelector('#Chapter');
      chapter?.classList.remove('Vertical', 'WebComic', 'FluidLTR', 'FluidRTL', 'Masonry', 'Grid');
      chapter?.classList.add(mode);
      chapter?.removeEventListener('wheel', transformScrollToHorizontal);
      chapter?.removeEventListener('wheel', transformScrollToHorizontalReverse);

      // 清理瀑布流和方格
      cleanupMasonry();
      cleanupGrid();

      // 确保chapter显示
      if (chapter) chapter.style.display = '';

      if (mode === 'FluidLTR' || mode === 'FluidRTL') {
        setupFluid(mode);
        isViewModeChanging = false;
      } else if (mode === 'Masonry') {
        // 使用requestAnimationFrame确保DOM更新后再执行
        requestAnimationFrame(() => {
          setupMasonry();
          // 延迟重置标记，确保初始化完成
          setTimeout(() => { isViewModeChanging = false; }, 500);
        });
      } else if (mode === 'Grid') {
        requestAnimationFrame(() => {
          setupGrid();
          setTimeout(() => { isViewModeChanging = false; }, 500);
        });
      } else {
        const headerClass = getSettingsValue('header');
        const header = document.querySelector('#Header');
        if (header) header.className = headerClass;
        const menu = document.querySelector('#menu');
        if (menu) menu.className = headerClass;
        applyZoom();
        isViewModeChanging = false;
      }

      // 切换模式后刷新进度计数
      setTimeout(() => {
        updateProgress();
      }, 200);
    };
  }

  // 瀑布流变量
  let masonryImgcols = [];
  let masonryOriginalPages = null;
  let masonryRetryCount = 0;
  const MASONRY_MAX_RETRY = 10;
  let masonryMediaCleanups = [];
  let masonryInitialized = false; // 新增：标记是否已初始化

  function setupMasonry() {
    const chapter = document.querySelector('#Chapter');
    if (!chapter) return;

    // 确保chapter先显示，让DOM有机会渲染
    if (chapter.style.display === 'none') {
      chapter.style.display = '';
      // 给DOM一点时间渲染
      requestAnimationFrame(() => {
        setTimeout(() => setupMasonry(), 50);
      });
      return;
    }

    let colCount = parseInt(localStorage.getItem('masonryColCount') || '4', 10);
    let rowGap = parseInt(localStorage.getItem('masonryRowGap') || '8', 10);

    // 创建控制面板
    let controls = document.querySelector('#MasonryControls');
    if (!controls) {
      controls = document.createElement('div');
      controls.id = 'MasonryControls';
      controls.innerHTML = `
        <div class="masonry-control">
          <label>列数: <span id="colCountVal">${colCount}</span></label>
          <input type="range" id="colCountInput" min="2" max="8" value="${colCount}">
        </div>
        <div class="masonry-control">
          <label>间距: <span id="rowGapVal">${rowGap}px</span></label>
          <input type="range" id="rowGapInput" min="0" max="40" value="${rowGap}">
        </div>
      `;
      chapter.parentElement?.insertBefore(controls, chapter);
    }

    // 每次都重新获取页面（确保获取到最新的图片src）
    masonryOriginalPages = [...chapter.querySelectorAll('.MangaPage')];

    // 检查是否有图片已加载（更宽松的检查，只要有src就行）
    const hasImages = masonryOriginalPages.some(page => {
      const img = page.querySelector('.PageImg');
      if (!img) return false;
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      return src && src.length > 0;
    });

    // 如果没有图片或页面数为0，延迟执行（但限制重试次数）
    if ((!hasImages || masonryOriginalPages.length === 0) && masonryRetryCount < MASONRY_MAX_RETRY) {
      masonryRetryCount++;
      setTimeout(setupMasonry, 300);
      return;
    }
    masonryRetryCount = 0; // 重置重试计数

    // 创建瀑布流容器
    let masonryBox = document.querySelector('#MasonryBox');
    if (!masonryBox) {
      masonryBox = document.createElement('div');
      masonryBox.id = 'MasonryBox';
      chapter.parentElement?.insertBefore(masonryBox, chapter);
    }

    // 重排函数
    const reflow = () => {
      // 如果MasonryBox已被移除（切换了视图模式），不再执行
      if (!document.querySelector('#MasonryBox')) {
        return;
      }

      // 重新获取页面确保src是最新的
      masonryOriginalPages = [...chapter.querySelectorAll('.MangaPage')].filter(page => !page.classList.contains('skipped'));

      // 如果还没有页面，延迟重试
      if (masonryOriginalPages.length === 0) {
        setTimeout(reflow, 300);
        return;
      }

      // 隐藏原chapter（在reflow中隐藏，确保已经获取到页面数据）
      chapter.style.display = 'none';

      // 清空并设置容器样式 - 使用flex列布局实现瀑布流
      masonryMediaCleanups.forEach(cleanup => cleanup());
      masonryMediaCleanups = [];
      masonryBox.innerHTML = '';
      masonryBox.setAttribute('style',
        'display:flex !important;' +
        'flex-direction:row !important;' +
        'flex-wrap:nowrap !important;' +
        'align-items:flex-start !important;' +
        'gap:' + rowGap + 'px !important;' +
        'padding:' + rowGap + 'px !important;' +
        'width:100% !important;' +
        'box-sizing:border-box !important;'
      );

      // 创建列容器
      const cols = [];
      for (let i = 0; i < colCount; i++) {
        const col = document.createElement('div');
        col.setAttribute('style',
          'flex:1 1 0% !important;' +
          'min-width:0 !important;' +
          'max-width:' + (100 / colCount) + '% !important;' +
          'display:flex !important;' +
          'flex-direction:column !important;' +
          'gap:' + rowGap + 'px !important;'
        );
        cols.push(col);
        masonryBox.appendChild(col);
      }

      // 分配图片到各列
      let addedCount = 0;
      masonryOriginalPages.forEach((page, idx) => {
        const img = page.querySelector('.PageImg');
        if (!img) return;

        // 获取图片src（可能还没加载）
        const src = img.getAttribute('src') || img.getAttribute('data-src') || '';

        const wrap = document.createElement('div');
        wrap.className = 'MangaPage';
        wrap.setAttribute('style',
          'position:relative !important;' +
          'line-height:0 !important;' +
          'overflow:hidden !important;' +
          'width:100% !important;'
        );
        const galleryMedia = createAnimatedGalleryMedia(img, 'masonry');
        wrap.appendChild(galleryMedia.page);
        masonryMediaCleanups.push(galleryMedia.cleanup);

        const getCurrentSrc = () =>
          galleryMedia.img.dataset.animatedSrc ||
          galleryMedia.img.getAttribute('src') ||
          img.getAttribute('src') ||
          img.getAttribute('data-src') ||
          '';

        // 克隆原始的PageFunctions工具栏
        const originalFunctions = page.querySelector('.PageFunctions');
        if (originalFunctions) {
          const toolbar = originalFunctions.cloneNode(true);
          toolbar.setAttribute('style',
            'position:absolute !important;' +
            'top:5px !important;' +
            'right:5px !important;' +
            'display:flex !important;' +
            'gap:3px !important;' +
            'align-items:center !important;' +
            'font-family:monospace !important;'
          );

          // 重新绑定按钮事件
          toolbar.querySelector('.Bookmark')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.Bookmark')?.click();
          });
          toolbar.querySelector('.ZoomIn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentSrc = getCurrentSrc();
            if (currentSrc) showMasonryZoom(currentSrc, idx);
          });
          toolbar.querySelector('.ZoomRestore')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomRestore')?.click();
          });
          toolbar.querySelector('.ZoomOut')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomOut')?.click();
          });
          toolbar.querySelector('.ZoomWidth')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomWidth')?.click();
          });
          toolbar.querySelector('.ZoomHeight')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomHeight')?.click();
          });
          toolbar.querySelector('.Hide')?.addEventListener('click', (e) => {
            e.stopPropagation();
            wrap.style.display = wrap.style.display === 'none' ? '' : 'none';
          });
          toolbar.querySelector('.Reload')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.Reload')?.click();
          });

          wrap.appendChild(toolbar);
        }

        // 点击显示浮动大图 - 点击时重新获取src确保是最新的
        wrap.addEventListener('click', () => {
          if (galleryMedia.img.dataset.animatedWebp === 'true') return;
          const currentSrc = getCurrentSrc();
          if (currentSrc) {
            showMasonryZoom(currentSrc, idx);
          }
        });

        // 按顺序轮流分配到各列
        cols[idx % colCount].appendChild(wrap);
        addedCount++;
      });
    };

    // 绑定控制事件
    document.querySelector('#colCountInput')?.addEventListener('input', (e) => {
      colCount = parseInt(e.target.value, 10);
      localStorage.setItem('masonryColCount', colCount);
      document.querySelector('#colCountVal').textContent = colCount;
      reflow();
    });

    document.querySelector('#rowGapInput')?.addEventListener('input', (e) => {
      rowGap = parseInt(e.target.value, 10);
      localStorage.setItem('masonryRowGap', rowGap);
      document.querySelector('#rowGapVal').textContent = rowGap + 'px';
      reflow();
    });

    // 直接执行reflow，不再延迟
    reflow();
  }

  // 浮动大图预览
  let currentZoomIndex = 0;
  let zoomScale = 1;
  let zoomOffsetX = 0;
  let zoomOffsetY = 0;

  function showMasonryZoom(src, idx) {
    currentZoomIndex = idx;
    zoomScale = 1;
    zoomOffsetX = 0;
    zoomOffsetY = 0;

    // 创建遮罩层
    let overlay = document.querySelector('#MasonryOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'MasonryOverlay';
      overlay.setAttribute('style',
        'position:fixed !important;' +
        'top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;' +
        'background:rgba(0,0,0,0.9) !important;' +
        'z-index:10000 !important;' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'overflow:hidden !important;'
      );
      document.body.appendChild(overlay);

      // 键盘事件
      document.addEventListener('keydown', handleMasonryKey);
    }

    // 创建图片容器
    overlay.innerHTML = `
      <div id="masonryZoomContainer" style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;">
        <img id="masonryZoomImg" src="${src}" style="max-width:100vw;max-height:100vh;cursor:pointer;user-select:none;pointer-events:auto;">
      </div>
      <button id="masonryPrev" style="position:absolute;left:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.3);border:none;color:white;font-size:30px;padding:10px 15px;cursor:pointer;border-radius:5px;z-index:10001;">◀</button>
      <button id="masonryNext" style="position:absolute;right:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.3);border:none;color:white;font-size:30px;padding:10px 15px;cursor:pointer;border-radius:5px;z-index:10001;">▶</button>
      <div style="position:absolute;top:20px;right:20px;color:white;font-size:16px;z-index:10001;">${idx + 1} / ${masonryOriginalPages.length}</div>
      <div id="masonryZoomLevel" style="position:absolute;bottom:20px;right:20px;color:white;font-size:14px;z-index:10001;">100%</div>
      <button id="masonryClose" style="position:absolute;top:20px;left:20px;background:rgba(255,255,255,0.3);border:none;color:white;font-size:24px;padding:5px 15px;cursor:pointer;border-radius:5px;z-index:10001;">✕</button>
    `;

    overlay.style.display = 'flex';

    const zoomImg = document.querySelector('#masonryZoomImg');
    const zoomContainer = document.querySelector('#masonryZoomContainer');
    const zoomLevelDisplay = document.querySelector('#masonryZoomLevel');

    // 存储缩放比例
    zoomImg.zoomScale = 1;

    function moveImg(e) {
      const ih = zoomImg.clientHeight * zoomImg.zoomScale;
      const iw = zoomImg.clientWidth * zoomImg.zoomScale;
      const dh = window.innerHeight;
      const dw = window.innerWidth;

      let t = 0, l = 0;
      if (ih > dh) {
        t = -(ih - dh + 0.2 * dh) * (e.clientY / dh - 0.5);
      }
      if (iw > dw) {
        l = -(iw - dw + 0.2 * dw) * (e.clientX / dw - 0.5);
      }

      zoomImg.style.scale = zoomImg.zoomScale;
      zoomImg.style.translate = `${l}px ${t}px 0px`;
      zoomLevelDisplay.textContent = Math.round(zoomImg.zoomScale * 100) + '%';
    }

    // 图片加载完成后初始化
    function initImageSize() {
      zoomImg.zoomScale = 1;
      zoomImg.style.scale = 1;
      zoomImg.style.translate = '0px 0px 0px';
      zoomLevelDisplay.textContent = '100%';
    }

    // 始终设置onload，并立即调用一次initImageSize确保显示
    zoomImg.onload = initImageSize;
    initImageSize();

    // 滚轮缩放
    zoomContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      zoomImg.zoomScale *= e.deltaY < 0 ? 1.25 : 0.8;
      zoomImg.zoomScale = Math.max(0.1, Math.min(10, zoomImg.zoomScale));
      moveImg(e);
    }, { passive: false });

    // 鼠标移动平移图片
    zoomContainer.addEventListener('mousemove', moveImg);

    // 点击图片关闭
    zoomImg.addEventListener('click', (e) => {
      e.stopPropagation();
      hideMasonryZoom();
    });

    // 点击容器也关闭
    zoomContainer.addEventListener('click', (e) => {
      if (e.target === zoomContainer) hideMasonryZoom();
    });

    // 绑定按钮事件
    document.querySelector('#masonryPrev')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateMasonryZoom(-1);
    });
    document.querySelector('#masonryNext')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateMasonryZoom(1);
    });
    document.querySelector('#masonryClose')?.addEventListener('click', hideMasonryZoom);
  }

  function navigateMasonryZoom(dir) {
    let newIdx = currentZoomIndex + dir;
    if (newIdx < 0) newIdx = masonryOriginalPages.length - 1;
    if (newIdx >= masonryOriginalPages.length) newIdx = 0;

    const page = masonryOriginalPages[newIdx];
    const img = page?.querySelector('.PageImg');
    const src = img?.getAttribute('src') || img?.getAttribute('data-src') || '';
    if (src) showMasonryZoom(src, newIdx);
  }

  function handleMasonryKey(e) {
    if (!document.querySelector('#MasonryOverlay')?.style.display ||
      document.querySelector('#MasonryOverlay')?.style.display === 'none') return;
    if (e.key === 'Escape') hideMasonryZoom();
    if (e.key === 'ArrowLeft' || e.key === 'a') navigateMasonryZoom(-1);
    if (e.key === 'ArrowRight' || e.key === 'd') navigateMasonryZoom(1);
  }

  function hideMasonryZoom() {
    const overlay = document.querySelector('#MasonryOverlay');
    if (overlay) overlay.style.display = 'none';
  }

  function cleanupMasonry() {
    masonryMediaCleanups.forEach(cleanup => cleanup());
    masonryMediaCleanups = [];
    document.querySelector('#MasonryControls')?.remove();
    document.querySelector('#MasonryBox')?.remove();
    document.querySelector('#MasonryOverlay')?.remove();
    const chapter = document.querySelector('#Chapter');
    if (chapter) chapter.style.display = '';
    masonryOriginalPages = null;
    masonryRetryCount = 0;
    masonryInitialized = false; // 重置初始化标记
  }

  // ========== 方格模式 (Grid) ==========
  let gridOriginalPages = null;
  let gridRetryCount = 0;
  const GRID_MAX_RETRY = 10;
  let gridMediaCleanups = [];
  let gridInitialized = false; // 新增：标记是否已初始化

  function setupGrid() {
    const chapter = document.querySelector('#Chapter');
    if (!chapter) return;

    // 确保chapter先显示，让DOM有机会渲染
    if (chapter.style.display === 'none') {
      chapter.style.display = '';
      // 给DOM一点时间渲染
      requestAnimationFrame(() => {
        setTimeout(() => setupGrid(), 50);
      });
      return;
    }

    let colCount = parseInt(localStorage.getItem('gridColCount') || '4', 10);
    let rowGap = parseInt(localStorage.getItem('gridRowGap') || '8', 10);
    let borderWidth = parseInt(localStorage.getItem('gridBorderWidth') || '2', 10);

    // 创建控制面板 - 插入到Header内部，这样会跟随Header一起隐藏
    let controls = document.querySelector('#GridControls');
    if (!controls) {
      controls = document.createElement('div');
      controls.id = 'GridControls';
      controls.innerHTML = `
        <div class="grid-control">
          <label>列数: <span id="gridColCountVal">${colCount}</span></label>
          <input type="range" id="gridColCountInput" min="1" max="10" value="${colCount}">
        </div>
        <div class="grid-control">
          <label>间距: <span id="gridRowGapVal">${rowGap}px</span></label>
          <input type="range" id="gridRowGapInput" min="0" max="40" value="${rowGap}">
        </div>
        <div class="grid-control">
          <label>边框: <span id="gridBorderWidthVal">${borderWidth}px</span></label>
          <input type="range" id="gridBorderWidthInput" min="0" max="10" value="${borderWidth}">
        </div>
      `;
      controls.setAttribute('style',
        'width:100% !important;' +
        'background:rgba(0,0,0,0.82) !important;' +
        'padding:8px 14px !important;' +
        'display:flex !important;' +
        'gap:20px !important;' +
        'justify-content:center !important;' +
        'align-items:center !important;' +
        'flex-wrap:wrap !important;' +
        'box-sizing:border-box !important;' +
        'border-top:1px solid rgba(255,255,255,0.06) !important;' +
        'border-bottom:1px solid rgba(255,255,255,0.06) !important;'
      );
      const style = document.createElement('style');
      style.textContent = `
        .grid-control { display:flex; align-items:center; gap:8px; color:#fff; }
        .grid-control label { font-size:14px; }
        .grid-control input[type="range"] { width:100px; }
      `;
      controls.appendChild(style);
      // 插入到Header内部
      chapter.parentElement?.insertBefore(controls, chapter);
    }

    // 每次都重新获取页面
    gridOriginalPages = [...chapter.querySelectorAll('.MangaPage')].filter(page => !page.classList.contains('skipped'));

    // 检查是否有图片（更宽松的检查）
    const hasImages = gridOriginalPages.some(page => {
      const img = page.querySelector('.PageImg');
      if (!img) return false;
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      return src && src.length > 0;
    });

    // 如果没有图片或页面数为0，延迟执行（但限制重试次数）
    if ((!hasImages || gridOriginalPages.length === 0) && gridRetryCount < GRID_MAX_RETRY) {
      gridRetryCount++;
      setTimeout(setupGrid, 300);
      return;
    }
    gridRetryCount = 0; // 重置重试计数

    // 创建方格容器
    let gridBox = document.querySelector('#GridBox');
    if (!gridBox) {
      gridBox = document.createElement('div');
      gridBox.id = 'GridBox';
      chapter.parentElement?.insertBefore(gridBox, chapter);
    }

    // 收集图片尺寸信息
    const imageInfos = [];
    let pendingLoads = 0;
    let reflowScheduled = false;

    const scheduleReflow = () => {
      // 如果GridBox已被移除（切换了视图模式），不再调度
      if (!document.querySelector('#GridBox')) {
        return;
      }
      if (!reflowScheduled) {
        reflowScheduled = true;
        setTimeout(() => {
          reflowScheduled = false;
          reflow();
        }, 100);
      }
    };

    gridOriginalPages.forEach((page, idx) => {
      const img = page.querySelector('.PageImg');
      if (!img) {
        imageInfos.push({ page, idx, ratio: 1, src: '' });
        return;
      }
      const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
      // 获取图片宽高比
      let ratio = 1;
      if (img.naturalWidth && img.naturalHeight) {
        ratio = img.naturalWidth / img.naturalHeight;
      } else if (img.width && img.height) {
        ratio = img.width / img.height;
      }

      const info = { page, idx, ratio, src, img };
      imageInfos.push(info);

      // 监听图片加载完成，更新比例
      // 注意：不再调用scheduleReflow，因为buildGrid中的updateSrc会处理布局更新
      if (!img.complete || img.naturalWidth === 0) {
        pendingLoads++;
        img.addEventListener('load', () => {
          if (img.naturalWidth && img.naturalHeight) {
            info.ratio = img.naturalWidth / img.naturalHeight;
            // 只有在gridBuilt之前才需要scheduleReflow
            // gridBuilt之后，buildGrid中的updateSrc会调用updateLayout
            if (!gridBuilt) {
              scheduleReflow();
            }
          }
        }, { once: true });
      }
    });

    // 存储已创建的DOM元素引用
    let gridElements = []; // [{wrap, rowDiv, newImg}]
    let currentColCount = colCount;
    let gridBuilt = false;

    // 计算布局参数（不操作DOM）
    const calcLayout = () => {
      const containerWidth = gridBox.clientWidth - rowGap * 2;
      const rows = [];
      for (let i = 0; i < imageInfos.length; i += colCount) {
        rows.push(imageInfos.slice(i, i + colCount));
      }

      const layoutData = [];
      let prevRowHeight = 150; // 记录上一行高度

      rows.forEach((row, rowIdx) => {
        const totalRatio = row.reduce((sum, item) => sum + item.ratio, 0);
        const numItems = row.length;
        const totalSpacing = (numItems - 1) * rowGap;
        let rowHeight = (containerWidth - totalSpacing) / totalRatio;

        const isLastRow = rowIdx === rows.length - 1;
        const isIncomplete = numItems < colCount;

        // 最后一行不足时，使用前一行的高度，不拉伸
        if (isLastRow && isIncomplete && rows.length > 1) {
          rowHeight = prevRowHeight;
        }

        rowHeight = Math.max(80, Math.floor(rowHeight));
        prevRowHeight = rowHeight;

        row.forEach((item) => {
          // 最后一行不足时，使用固定宽度而非flex填满
          const useFixedWidth = isLastRow && isIncomplete;
          const itemWidth = useFixedWidth ? Math.floor(rowHeight * item.ratio) : 0;
          layoutData.push({ rowHeight, flex: item.ratio * 100, rowIdx, useFixedWidth, itemWidth });
        });
      });
      return { layoutData, rowCount: rows.length };
    };

    // 防抖的布局更新
    let layoutUpdateTimer = null;
    const debouncedUpdateLayout = () => {
      if (layoutUpdateTimer) {
        clearTimeout(layoutUpdateTimer);
      }
      layoutUpdateTimer = setTimeout(() => {
        if (gridBuilt && document.querySelector('#GridBox')) {
          updateLayout();
        }
      }, 150);
    };

    // 首次构建DOM
    const buildGrid = () => {
      gridMediaCleanups.forEach(cleanup => cleanup());
      gridMediaCleanups = [];
      gridBox.innerHTML = '';
      gridElements = [];
      currentColCount = colCount;

      gridBox.setAttribute('style',
        'display:block !important;' +
        'padding:' + rowGap + 'px !important;' +
        'width:100% !important;' +
        'box-sizing:border-box !important;' +
        'background:#1e1e1e !important;'
      );

      const { layoutData } = calcLayout();
      let currentRowIdx = -1;
      let rowDiv = null;

      imageInfos.forEach((item, idx) => {
        const { page, src, img } = item;
        const layout = layoutData[idx] || { rowHeight: 150, flex: 100, rowIdx: 0, useFixedWidth: false, itemWidth: 0 };

        // 新行
        if (layout.rowIdx !== currentRowIdx) {
          currentRowIdx = layout.rowIdx;
          rowDiv = document.createElement('div');
          rowDiv.className = 'grid-row';
          rowDiv.setAttribute('style',
            'display:flex !important;' +
            'gap:' + rowGap + 'px !important;' +
            'margin-bottom:' + rowGap + 'px !important;' +
            'width:100% !important;'
          );
          gridBox.appendChild(rowDiv);
        }

        const wrap = document.createElement('div');
        wrap.className = 'grid-item';
        wrap.dataset.idx = idx;

        // 最后一行不足时用固定宽度，否则用flex
        const widthStyle = layout.useFixedWidth
          ? 'width:' + layout.itemWidth + 'px !important;flex:none !important;'
          : 'flex:' + layout.flex + ' 1 0% !important;';

        wrap.setAttribute('style',
          'position:relative !important;' +
          widthStyle +
          'height:' + layout.rowHeight + 'px !important;' +
          'cursor:pointer !important;' +
          'overflow:hidden !important;' +
          'background:#333 !important;' +
          'border-radius:4px !important;' +
          'border:' + borderWidth + 'px solid #fff !important;' +
          'box-sizing:content-box !important;'
        );

        const galleryMedia = createAnimatedGalleryMedia(img, 'grid');
        galleryMedia.page.style.height = '100%';
        galleryMedia.media.style.height = '100%';
        wrap.appendChild(galleryMedia.page);
        gridMediaCleanups.push(galleryMedia.cleanup);
        wrap._originalImg = img;

        const getCurrentSrc = () => {
          return (
            galleryMedia.img.dataset.animatedSrc ||
            galleryMedia.img.getAttribute('src') ||
            img?.getAttribute('src') ||
            img?.getAttribute('data-src') ||
            src ||
            ''
          );
        };

        // 工具栏
        const originalFunctions = page.querySelector('.PageFunctions');
        if (originalFunctions) {
          const toolbar = originalFunctions.cloneNode(true);
          toolbar.setAttribute('style',
            'position:absolute !important;' +
            'top:5px !important;' +
            'right:5px !important;' +
            'display:flex !important;' +
            'gap:3px !important;' +
            'align-items:center !important;' +
            'font-family:monospace !important;'
          );

          toolbar.querySelector('.Bookmark')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.Bookmark')?.click();
          });
          toolbar.querySelector('.ZoomIn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentSrc = getCurrentSrc();
            if (currentSrc) showGridZoom(currentSrc, idx);
          });
          toolbar.querySelector('.ZoomRestore')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomRestore')?.click();
          });
          toolbar.querySelector('.ZoomOut')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomOut')?.click();
          });
          toolbar.querySelector('.ZoomWidth')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomWidth')?.click();
          });
          toolbar.querySelector('.ZoomHeight')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.ZoomHeight')?.click();
          });
          toolbar.querySelector('.Hide')?.addEventListener('click', (e) => {
            e.stopPropagation();
            wrap.style.display = wrap.style.display === 'none' ? '' : 'none';
          });
          toolbar.querySelector('.Reload')?.addEventListener('click', (e) => {
            e.stopPropagation();
            page.querySelector('.Reload')?.click();
          });

          wrap.appendChild(toolbar);
        }

        wrap.addEventListener('click', () => {
          if (galleryMedia.img.dataset.animatedWebp === 'true') return;
          const currentSrc = getCurrentSrc();
          if (currentSrc) showGridZoom(currentSrc, idx);
        });

        rowDiv.appendChild(wrap);
        gridElements.push({ wrap, rowDiv, media: galleryMedia.media, item });
      });

      gridBuilt = true;
    };

    // 无感知更新布局（只更新style，不重建DOM）
    const updateLayout = () => {
      if (!gridBuilt || gridElements.length === 0) return;

      const { layoutData } = calcLayout();

      gridElements.forEach((el, idx) => {
        const layout = layoutData[idx];
        if (!layout || !el.wrap) return;

        // 最后一行不足时用固定宽度，否则用flex
        if (layout.useFixedWidth) {
          el.wrap.style.flex = 'none';
          el.wrap.style.width = layout.itemWidth + 'px';
        } else {
          el.wrap.style.flex = layout.flex + ' 1 0%';
          el.wrap.style.width = '';
        }
        el.wrap.style.height = layout.rowHeight + 'px';
        el.wrap.style.borderWidth = borderWidth + 'px';
      });

      // 更新行间距
      gridBox.querySelectorAll('.grid-row').forEach(row => {
        row.style.gap = rowGap + 'px';
        row.style.marginBottom = rowGap + 'px';
      });
      gridBox.style.padding = rowGap + 'px';
    };

    // 重排函数 - 智能判断是否需要重建
    const reflow = () => {
      // 如果GridBox已被移除（切换了视图模式），不再执行
      if (!document.querySelector('#GridBox')) {
        return;
      }

      gridOriginalPages = [...chapter.querySelectorAll('.MangaPage')].filter(page => !page.classList.contains('skipped'));

      if (gridOriginalPages.length === 0) {
        setTimeout(reflow, 300);
        return;
      }

      // 更新图片信息
      gridOriginalPages.forEach((page, idx) => {
        const img = page.querySelector('.PageImg');
        if (img && imageInfos[idx]) {
          const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
          imageInfos[idx].src = src;
          imageInfos[idx].img = img;
          imageInfos[idx].page = page;
          if (img.naturalWidth && img.naturalHeight) {
            imageInfos[idx].ratio = img.naturalWidth / img.naturalHeight;
          }
        }
      });

      chapter.style.display = 'none';

      // 列数变化或首次构建需要重建DOM
      if (!gridBuilt || colCount !== currentColCount) {
        buildGrid();
      } else {
        // 否则只更新布局参数
        updateLayout();
      }
    };

    // 绑定控制事件
    document.querySelector('#gridColCountInput')?.addEventListener('input', (e) => {
      colCount = parseInt(e.target.value, 10);
      localStorage.setItem('gridColCount', colCount);
      document.querySelector('#gridColCountVal').textContent = colCount;
      reflow();
    });

    document.querySelector('#gridRowGapInput')?.addEventListener('input', (e) => {
      rowGap = parseInt(e.target.value, 10);
      localStorage.setItem('gridRowGap', rowGap);
      document.querySelector('#gridRowGapVal').textContent = rowGap + 'px';
      reflow();
    });

    document.querySelector('#gridBorderWidthInput')?.addEventListener('input', (e) => {
      borderWidth = parseInt(e.target.value, 10);
      localStorage.setItem('gridBorderWidth', borderWidth);
      document.querySelector('#gridBorderWidthVal').textContent = borderWidth + 'px';
      reflow();
    });

    // 直接执行reflow
    reflow();

    // 监听窗口大小变化，重新布局
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(reflow, 200);
    };
    window.addEventListener('resize', handleResize);
  }

  // 方格模式浮动大图预览
  let currentGridZoomIndex = 0;

  function showGridZoom(src, idx) {
    currentGridZoomIndex = idx;

    // 创建遮罩层
    let overlay = document.querySelector('#GridOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'GridOverlay';
      overlay.setAttribute('style',
        'position:fixed !important;' +
        'top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;' +
        'background:rgba(0,0,0,0.9) !important;' +
        'z-index:10000 !important;' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'overflow:hidden !important;'
      );
      document.body.appendChild(overlay);

      // 键盘事件
      document.addEventListener('keydown', handleGridKey);
    }

    // 创建图片容器
    overlay.innerHTML = `
      <div id="gridZoomContainer" style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;">
        <img id="gridZoomImg" src="${src}" style="max-width:100vw;max-height:100vh;cursor:pointer;user-select:none;pointer-events:auto;">
      </div>
      <button id="gridPrev" style="position:absolute;left:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.3);border:none;color:white;font-size:30px;padding:10px 15px;cursor:pointer;border-radius:5px;z-index:10001;">◀</button>
      <button id="gridNext" style="position:absolute;right:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.3);border:none;color:white;font-size:30px;padding:10px 15px;cursor:pointer;border-radius:5px;z-index:10001;">▶</button>
      <div style="position:absolute;top:20px;right:20px;color:white;font-size:16px;z-index:10001;">${idx + 1} / ${gridOriginalPages.length}</div>
      <div id="gridZoomLevel" style="position:absolute;bottom:20px;right:20px;color:white;font-size:14px;z-index:10001;">100%</div>
      <button id="gridClose" style="position:absolute;top:20px;left:20px;background:rgba(255,255,255,0.3);border:none;color:white;font-size:24px;padding:5px 15px;cursor:pointer;border-radius:5px;z-index:10001;">✕</button>
    `;

    overlay.style.display = 'flex';

    const zoomImg = document.querySelector('#gridZoomImg');
    const zoomContainer = document.querySelector('#gridZoomContainer');
    const zoomLevelDisplay = document.querySelector('#gridZoomLevel');

    // 存储缩放比例
    zoomImg.zoomScale = 1;

    function moveImg(e) {
      const ih = zoomImg.clientHeight * zoomImg.zoomScale;
      const iw = zoomImg.clientWidth * zoomImg.zoomScale;
      const dh = window.innerHeight;
      const dw = window.innerWidth;

      let t = 0, l = 0;
      if (ih > dh) {
        t = -(ih - dh + 0.2 * dh) * (e.clientY / dh - 0.5);
      }
      if (iw > dw) {
        l = -(iw - dw + 0.2 * dw) * (e.clientX / dw - 0.5);
      }

      zoomImg.style.scale = zoomImg.zoomScale;
      zoomImg.style.translate = `${l}px ${t}px 0px`;
      zoomLevelDisplay.textContent = Math.round(zoomImg.zoomScale * 100) + '%';
    }

    function initImageSize() {
      zoomImg.zoomScale = 1;
      zoomImg.style.scale = 1;
      zoomImg.style.translate = '0px 0px 0px';
      zoomLevelDisplay.textContent = '100%';
    }

    zoomImg.onload = initImageSize;
    initImageSize();

    // 滚轮缩放
    zoomContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      zoomImg.zoomScale *= e.deltaY < 0 ? 1.25 : 0.8;
      zoomImg.zoomScale = Math.max(0.1, Math.min(10, zoomImg.zoomScale));
      moveImg(e);
    }, { passive: false });

    // 鼠标移动平移图片
    zoomContainer.addEventListener('mousemove', moveImg);

    // 点击图片关闭
    zoomImg.addEventListener('click', (e) => {
      e.stopPropagation();
      hideGridZoom();
    });

    // 点击容器也关闭
    zoomContainer.addEventListener('click', (e) => {
      if (e.target === zoomContainer) hideGridZoom();
    });

    // 绑定按钮事件
    document.querySelector('#gridPrev')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateGridZoom(-1);
    });
    document.querySelector('#gridNext')?.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateGridZoom(1);
    });
    document.querySelector('#gridClose')?.addEventListener('click', hideGridZoom);
  }

  function navigateGridZoom(dir) {
    let newIdx = currentGridZoomIndex + dir;
    if (newIdx < 0) newIdx = gridOriginalPages.length - 1;
    if (newIdx >= gridOriginalPages.length) newIdx = 0;

    const page = gridOriginalPages[newIdx];
    const img = page?.querySelector('.PageImg');
    const src = img?.getAttribute('src') || img?.getAttribute('data-src') || '';
    if (src) showGridZoom(src, newIdx);
  }

  function handleGridKey(e) {
    if (!document.querySelector('#GridOverlay')?.style.display ||
      document.querySelector('#GridOverlay')?.style.display === 'none') return;
    if (e.key === 'Escape') hideGridZoom();
    if (e.key === 'ArrowLeft' || e.key === 'a') navigateGridZoom(-1);
    if (e.key === 'ArrowRight' || e.key === 'd') navigateGridZoom(1);
  }

  function hideGridZoom() {
    const overlay = document.querySelector('#GridOverlay');
    if (overlay) overlay.style.display = 'none';
  }

  function cleanupGrid() {
    gridMediaCleanups.forEach(cleanup => cleanup());
    gridMediaCleanups = [];
    document.querySelector('#GridControls')?.remove();
    document.querySelector('#GridBox')?.remove();
    document.querySelector('#GridOverlay')?.remove();
    const chapter = document.querySelector('#Chapter');
    if (chapter) chapter.style.display = '';
    gridOriginalPages = null;
    gridRetryCount = 0;
    gridInitialized = false; // 重置初始化标记
  }

  function changeDefaultViewMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('viewMode', mode);
    updateViewMode(mode)();
  }
  function viewMode$1() {
    document.querySelector('#viewMode')?.addEventListener('change', changeDefaultViewMode);
    document.querySelector('#webComic')?.addEventListener('click', updateViewMode('WebComic'));
    document.querySelector('#ltrMode')?.addEventListener('click', updateViewMode('FluidLTR'));
    document.querySelector('#rtlMode')?.addEventListener('click', updateViewMode('FluidRTL'));
    document.querySelector('#verticalMode')?.addEventListener('click', updateViewMode('Vertical'));
    if (
      getSettingsValue('viewMode') === 'FluidLTR' ||
      getSettingsValue('viewMode') === 'FluidRTL'
    ) {
      setupFluid(getSettingsValue('viewMode'));
    } else if (getSettingsValue('viewMode') === 'Masonry') {
      // 使用requestAnimationFrame代替固定延迟，更快响应
      requestAnimationFrame(() => setTimeout(setupMasonry, 100));
    } else if (getSettingsValue('viewMode') === 'Grid') {
      // 使用requestAnimationFrame代替固定延迟，更快响应
      requestAnimationFrame(() => setTimeout(setupGrid, 100));
    }
  }

  function changeGlobalZoom(mode, value = getSettingsValue('defaultZoom')) {
    return () => {
      applyZoom(mode, value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const globalZoom = document.querySelector('#Zoom');
      if (globalZoom) {
        const ratio = parseInt(globalZoom.value, 10) + sign * getSettingsValue('zoomStep');
        globalZoom.value = ratio.toString();
        globalZoom.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('zoomMode', target);
    applyZoom(target);
    const percent = document.querySelector('.DefaultZoom');
    percent?.classList.toggle('show', target === 'percent');
  }
  function changeDefaultZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('defaultZoom', target);
    applyZoom('percent', target);
  }
  function zoom() {
    const zoomSlider = document.querySelector('#Zoom');
    const zoomInput = document.querySelector('#ZoomVal');
    function update(val) {
      const value = parseInt(val, 10);
      if (Number.isNaN(value)) return;
      const target = Math.max(1, Math.min(200, value));
      if (zoomSlider) zoomSlider.value = target.toString();
      if (zoomInput) zoomInput.value = target.toString();
      applyZoom('percent', target);
    }
    zoomSlider?.addEventListener('input', e => update(e.target.value));
    zoomInput?.addEventListener('input', e => update(e.target.value));
    zoomInput?.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        update(parseInt(e.target.value, 10) + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        update(parseInt(e.target.value, 10) - 1);
      }
    });
    document.querySelector('#DefaultZoomMode')?.addEventListener('change', changeDefaultZoomMode);
    document.querySelector('#DefaultZoom')?.addEventListener('input', changeDefaultZoom);
    document.querySelector('#enlarge')?.addEventListener('click', changeZoomByStep());
    document.querySelector('#reduce')?.addEventListener('click', changeZoomByStep(-1));
    document.querySelector('#restore')?.addEventListener('click', changeGlobalZoom('percent'));
    document.querySelector('#fitWidth')?.addEventListener('click', changeGlobalZoom('width'));
    document.querySelector('#fitHeight')?.addEventListener('click', changeGlobalZoom('height'));
  }

  let setupEvents = false;
  let visibilitySetup = false;
  function events() {
    if (!setupEvents) {
      headroom(100);
      keybindings$1();
      individual();
      size();
      window.addEventListener('resize', () => {
        const reader = document.querySelector('#MangaOnlineViewer');
        reader?.classList.remove('mobile', 'tablet', 'desktop');
        reader?.classList.add(getDevice());
      });
      setupEvents = true;
    }
    // 处理标签页切换后重新显示的问题
    if (!visibilitySetup) {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          // 标签页重新可见时，刷新当前视图模式
          const currentMode = getSettingsValue('viewMode');

          // 刷新进度计数
          updateProgress();

          if (currentMode === 'Masonry' || currentMode === 'Grid') {
            // 延迟一点执行，确保浏览器已完成渲染
            requestAnimationFrame(() => {
              const chapter = document.querySelector('#Chapter');
              const masonryBox = document.querySelector('#MasonryBox');
              const gridBox = document.querySelector('#GridBox');

              // 如果容器不存在或为空，重新初始化
              if (currentMode === 'Masonry' && (!masonryBox || masonryBox.children.length === 0)) {
                if (chapter) chapter.style.display = '';
                setupMasonry();
              } else if (currentMode === 'Grid' && (!gridBox || gridBox.children.length === 0)) {
                if (chapter) chapter.style.display = '';
                setupGrid();
              }
            });
          }
        }
      });
      visibilitySetup = true;
    }
    bookmarks$1();
    globals();
    navigation();
    options();
    panels();
    theming();
    viewMode$1();
    zoom();
    autoscroll();
  }

  const commentsPanel = () => html`
    <div
      id="CommentsPanel"
      class="panel"
    >
      <button
        id="CloseComments"
        class="closeButton"
        title="${getLocaleString('CLOSE')}"
      >
        ${IconX}
      </button>
      <h2>${getLocaleString('COMMENTS')}</h2>
      <div
        id="CommentsArea"
        class="${getSettingsValue('colorScheme')}"
      ></div>
      <button
        id="CommentsColorScheme"
        class="simpleButton ColorScheme"
      >
        ${IconSun} ${IconMoon}
      </button>
    </div>
  `;

  const listOptions = (times, begin) =>
    sequence(times, begin).map(index => html` <option value="${index}">${index}</option>`);
  const Header = manga => html`
    <header
      id="Header"
      class="${getSettingsValue('header')} headroom-top"
    >
      <aside id="GlobalFunctions">
        <span>
          <button
            id="enlarge"
            title="${getLocaleString('ENLARGE')}"
            class="ControlButton"
          >
            ${IconZoomInArea}
          </button>
          <button
            id="restore"
            title="${getLocaleString('RESTORE')}"
            class="ControlButton"
          >
            ${IconZoomPan}
          </button>
          <button
            id="reduce"
            title="${getLocaleString('REDUCE')}"
            class="ControlButton"
          >
            ${IconZoomOutArea}
          </button>
          <button
            id="fitWidth"
            title="${getLocaleString('FIT_WIDTH')}"
            class="ControlButton"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            id="fitHeight"
            title="${getLocaleString('FIT_HEIGHT')}"
            class="ControlButton"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            id="keybindings"
            title="${getLocaleString('KEYBINDINGS')}"
            class="ControlButton"
          >
            ${IconKeyboard}
          </button>
          <button
            id="AutoScroll"
            title="${getLocaleString('SCROLL_START')}"
            class="ControlButton phones"
          >
            ${IconPlayerPlay} ${IconPlayerPause}
          </button>
        </span>
        <span>
          <button
            id="ltrMode"
            title="${getLocaleString('VIEW_MODE_LEFT')}"
            class="ControlButton"
          >
            ${IconArrowAutofitRight}
          </button>
          <button
            id="verticalMode"
            title="${getLocaleString('VIEW_MODE_VERTICAL')}"
            class="ControlButton tablets"
          >
            ${IconArrowAutofitDown}
          </button>
          <button
            id="webComic"
            title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
            class="ControlButton tablets"
          >
            ${IconSpacingVertical}
          </button>
          <button
            id="rtlMode"
            title="${getLocaleString('VIEW_MODE_RIGHT')}"
            class="ControlButton"
          >
            ${IconArrowAutofitLeft}
          </button>
          <button
            id="pageControls"
            title="${getLocaleString('TOGGLE_CONTROLS')}"
            class="ControlButton tablets"
          >
            ${IconListNumbers}
          </button>
          <button
            id="bookmarks"
            title="${getLocaleString('BOOKMARKS')}"
            class="ControlButton tablets"
          >
            ${IconBookmarks}
          </button>
          <button
            id="settings"
            title="${getLocaleString('SETTINGS')}"
            class="ControlButton tablets phones"
          >
            ${IconSettings}
          </button>
        </span>
        <span id="ZoomSlider">
          <input type="number" id="ZoomVal" class="RangeValue" min="1" max="200" value="${getSettingsValue('defaultZoom')}" />%
          <input
            type="range"
            value="${getSettingsValue('defaultZoom')}"
            name="Zoom"
            id="Zoom"
            min="1"
            max="200"
          />
        </span>
      </aside>
      <div class="ViewerTitle">
        <h1
          id="MangaTitle"
          title="${manga.displayTitle ?? manga.title}"
          tabindex="0"
          role="button"
          aria-expanded="false"
        >
          ${manga.displayTitle ?? manga.title}
        </h1>
        <div id="MangaTitlePopup">${manga.displayTitle ?? manga.title}</div>
        <a
          id="series"
          href="${manga.series ?? ''}"
        >
          (${getLocaleString('RETURN_CHAPTER_LIST')})
        </a>
      </div>
      <nav id="ChapterNavigation">
        <div
          id="Counters"
          class="ControlLabel"
        >
          ${getLocaleString('PAGES_LOADED')}:
          <i>0</i> /
          <b>${skipLoadMode ? skipLoadPages.length : (manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages)}</b>
          <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
          <select id="gotoPage">
            <option selected>#</option>
            ${skipLoadMode
      ? skipLoadPages.map(pageNum => html`<option value="${pageNum}">${pageNum}</option>`).join('')
      : listOptions(manga.pages, manga.begin ?? 0).join('')}
          </select>
        </div>
        <div
          id="UnloadedCounters"
          class="ControlLabel"
        >
          未加载的页数:
          <i id="unloadedCount">0</i> /
          <b>${skipLoadMode ? skipLoadPages.length : (manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages)}</b>
          <span class="ControlLabel"> 跳转到页数: </span>
          <select id="gotoUnloadedPage">
            <option selected>#</option>
          </select>
        </div>
        <div
          id="ChapterControl"
          class="ChapterControl"
        >
          <span>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${getLocaleString('DOWNLOAD_ZIP')}"
            >
              ${IconFileDownload} ${IconLoader2} ${getLocaleString('BUTTON_DOWNLOAD')}
            </button>
            <button
              id="downloadPart"
              class="NavigationControlButton ControlButton"
              type="button"
              title="强制下载 (即使未全部加载)"
              style="margin-left: 5px;"
            >
              ${IconFileDownload} 强下
            </button>
            <button
              id="copyUnloaded"
              class="NavigationControlButton ControlButton"
              type="button"
              title="复制未加载页面序号到剪贴板 (逗号分隔)"
              style="margin-left: 5px; background: #e91e63;"
            >
              📋 复制未加载
            </button></span
          >
          <span>
            <a
              id="prev"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${manga.prev ?? ''}"
              title="${getLocaleString('PREVIOUS_CHAPTER')}"
            >
              ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${manga.next ?? ''}"
              title="${getLocaleString('NEXT_CHAPTER')}"
            >
              ${getLocaleString('BUTTON_NEXT')} ${IconArrowBigRight}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `;

  const listPages = (times, begin) => {
    // 跳页加载模式：只生成需要加载的页面
    if (skipLoadMode) {
      return skipLoadPages.map(
        index => html`
        <div
          id="Page${index}"
          class="MangaPage"
        >
          <div class="PageFunctions">
            <button
              class="Bookmark ControlButton"
              title="${getLocaleString('BOOKMARK')}"
            >
              ${IconBookmark} ${IconBookmarkOff}
            </button>
            <button
              class="ZoomIn ControlButton"
              title="${getLocaleString('ZOOM_IN')}"
            >
              ${IconZoomIn}
            </button>
            <button
              class="ZoomRestore ControlButton"
              title="${getLocaleString('ZOOM_RESET')}"
            >
              ${IconZoomCancel}
            </button>
            <button
              class="ZoomOut ControlButton"
              title="${getLocaleString('ZOOM_OUT')}"
            >
              ${IconZoomOut}
            </button>
            <button
              class="Hide ControlButton"
              title="${getLocaleString('HIDE')}"
            >
              ${IconEye} ${IconEyeOff}
            </button>
          </div>
          <div class="PageContent">
            <div class="AnimatedWebpMedia">
              <button
                type="button"
                class="AnimatedWebpToggle"
                hidden
                title="点击播放/停止动图"
              >▷</button>
              <div class="AnimatedWebpProgress" hidden>
                <span class="AnimatedWebpProgressBar"></span>
              </div>
              <canvas class="AnimatedWebpCanvas" hidden aria-hidden="true"></canvas>
              <img
                id="PageImg${index}"
                class="PageImg"
                alt="${index}"
                src=""
              />
            </div>
          </div>
        </div>
        <div class="separator">
          [ ${index === skipLoadPages[skipLoadPages.length - 1] ? getLocaleString('END') : `${index}`} ]
        </div>
      `,
      );
    }

    // 正常加载模式
    return sequence(times, begin).map(
      index => html`
        <div
          id="Page${index}"
          class="MangaPage"
        >
          <div class="PageFunctions">
            <button
              class="Bookmark ControlButton"
              title="${getLocaleString('BOOKMARK')}"
            >
              ${IconBookmark} ${IconBookmarkOff}
            </button>
            <button
              class="ZoomIn ControlButton"
              title="${getLocaleString('ZOOM_IN')}"
            >
              ${IconZoomIn}
            </button>
            <button
              class="ZoomRestore ControlButton"
              title="${getLocaleString('ZOOM_RESET')}"
            >
              ${IconZoomCancel}
            </button>
            <button
              class="ZoomOut ControlButton"
              title="${getLocaleString('ZOOM_OUT')}"
            >
              ${IconZoomOut}
            </button>
            <button
              class="ZoomWidth ControlButton"
              title="${getLocaleString('ZOOM_WIDTH')}"
            >
              ${IconArrowAutofitWidth}
            </button>
            <button
              class="ZoomHeight ControlButton"
              title="${getLocaleString('ZOOM_HEIGHT')}"
            >
              ${IconArrowAutofitHeight}
            </button>
            <button
              class="Hide ControlButton"
              title="${getLocaleString('HIDE')}"
            >
              ${IconEye} ${IconEyeOff}
            </button>
            <button
              class="Reload ControlButton"
              title="${getLocaleString('RELOAD')}"
            >
              ${IconRefresh}
            </button>
            <span class="PageIndex">${index}</span>
          </div>
          <div class="PageContent">
            <div class="AnimatedWebpMedia">
              <button
                type="button"
                class="AnimatedWebpToggle"
                hidden
                title="点击播放/停止动图"
              >▷</button>
              <div class="AnimatedWebpProgress" hidden>
                <span class="AnimatedWebpProgressBar"></span>
              </div>
              <canvas class="AnimatedWebpCanvas" hidden aria-hidden="true"></canvas>
              <img
                id="PageImg${index}"
                alt=""
                class="PageImg"
                crossorigin="anonymous"
                src=""
              />
            </div>
          </div>
        </div>
        <div class="separator">
          [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
        </div>
      `,
    );
  };

  const Reader = manga => html`
    <main
      id="Chapter"
      class="${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}
  ${getSettingsValue('fitHeightInHorizontal') ? 'fitHeightInHorizontal' : ''}
  ${getSettingsValue('verticalSeparator') ? 'separator' : ''}
  ${getSettingsValue('viewMode')}"
    >
      ${listPages(manga.pages, manga.begin ?? 0).join('')}
    </main>
  `;

  function settingsScope() {
    return html` <div class="ControlLabel">
      ${getLocaleString('SCOPE')}
      <div
        id="SettingsScope"
        class="radio-inputs"
      >
        <label class="radio">
          <input
            type="radio"
            id="globalSettings"
            name="settingsScope"
            ${!isSettingsLocal() ? 'checked' : ''}
            value="false"
          />
          <span class="name">${IconWorldCog} ${getLocaleString('GLOBAL')}</span>
        </label>
        <label class="radio">
          <input
            type="radio"
            id="localSettings"
            name="settingsScope"
            ${isSettingsLocal() ? 'checked' : ''}
            value="true"
          />
          <span class="name">${IconLocationCog} ${window.location.hostname}</span>
        </label>
      </div>
    </div>`;
  }
  function localeSelector() {
    return locales
      .map(
        locale => html`
          <option
            value="${locale.ID}"
            ${getSettingsValue('locale') === locale.ID ? 'selected' : ''}
          >
            ${locale.NAME}
          </option>
        `,
      )
      .join('');
  }
  function language() {
    return html` <div class="ControlLabel locale">
      ${getLocaleString('LANGUAGE')}
      <select id="locale">
        ${localeSelector()}
      </select>
    </div>`;
  }
  const SettingsPanelGeneral = () => settingsScope() + language();

  function loadMode() {
    return html`
      <div class="ControlLabel loadMode">
        ${getLocaleString('DEFAULT_LOAD_MODE')}
        <select id="loadMode">
          <option
            value="wait"
            ${getSettingsValue('loadMode') === 'wait' ? 'selected' : ''}
          >
            ${getLocaleString('LOAD_MODE_NORMAL')}
          </option>
          <option
            value="always"
            ${getSettingsValue('loadMode') === 'always' ? 'selected' : ''}
          >
            ${getLocaleString('LOAD_MODE_ALWAYS')}
          </option>
          <option
            value="never"
            ${getSettingsValue('loadMode') === 'never' ? 'selected' : ''}
          >
            ${getLocaleString('LOAD_MODE_NEVER')}
          </option>
        </select>
      </div>
    `;
  }
  function loadSpeed() {
    return html`
      <div class="ControlLabel PagesPerSecond">
        ${getLocaleString('LOAD_SPEED')}
        <select id="PagesPerSecond">
          <option
            value="3000"
            ${getSettingsValue('throttlePageLoad') === 3e3 ? 'selected' : ''}
          >
            0.3(${getLocaleString('SLOWLY')})
          </option>
          <option
            value="2000"
            ${getSettingsValue('throttlePageLoad') === 2e3 ? 'selected' : ''}
          >
            0.5
          </option>
          <option
            value="1000"
            ${getSettingsValue('throttlePageLoad') === 1e3 ? 'selected' : ''}
          >
            01(${getLocaleString('NORMAL')})
          </option>
          <option
            value="500"
            ${getSettingsValue('throttlePageLoad') === 500 ? 'selected' : ''}
          >
            02
          </option>
          <option
            value="250"
            ${getSettingsValue('throttlePageLoad') === 250 ? 'selected' : ''}
          >
            04(${getLocaleString('FAST')})
          </option>
          <option
            value="200"
            ${getSettingsValue('throttlePageLoad') === 200 ? 'selected' : ''}
          >
            05
          </option>
          <option
            value="125"
            ${getSettingsValue('throttlePageLoad') === 125 ? 'selected' : ''}
          >
            08
          </option>
          <option
            value="100"
            ${getSettingsValue('throttlePageLoad') === 100 ? 'selected' : ''}
          >
            10(${getLocaleString('EXTREME')})
          </option>
          <option
            value="1"
            ${getSettingsValue('throttlePageLoad') === 1 ? 'selected' : ''}
          >
            ${getLocaleString('ALL_PAGES')}
          </option>
        </select>
      </div>
    `;
  }
  function maxConcurrentLoads() {
    return html`
      <div class="ControlLabel maxConcurrentLoads">
        ${getLocaleString('MAX_CONCURRENT_LOADS')}
        <select id="maxConcurrentLoads">
          <option value="1" ${getSettingsValue('maxConcurrentLoads') === 1 ? 'selected' : ''}>1</option>
          <option value="2" ${getSettingsValue('maxConcurrentLoads') === 2 ? 'selected' : ''}>2</option>
          <option value="3" ${getSettingsValue('maxConcurrentLoads') === 3 ? 'selected' : ''}>3</option>
          <option value="5" ${getSettingsValue('maxConcurrentLoads') === 5 ? 'selected' : ''}>5</option>
          <option value="10" ${getSettingsValue('maxConcurrentLoads') === 10 ? 'selected' : ''}>10</option>
          <option value="15" ${getSettingsValue('maxConcurrentLoads') === 15 ? 'selected' : ''}>15</option>
          <option value="20" ${getSettingsValue('maxConcurrentLoads') === 20 ? 'selected' : ''}>20</option>
          <option value="25" ${getSettingsValue('maxConcurrentLoads') === 25 ? 'selected' : ''}>25</option>
          <option value="30" ${getSettingsValue('maxConcurrentLoads') === 30 ? 'selected' : ''}>30</option>
          <option value="40" ${getSettingsValue('maxConcurrentLoads') === 40 ? 'selected' : ''}>40</option>
          <option value="50" ${getSettingsValue('maxConcurrentLoads') === 50 ? 'selected' : ''}>50</option>
        </select>
      </div>
    `;
  }
  function defaultBatchDivide() {
    return html`
      <div class="ControlLabel defaultBatchDivide">
        默认批次数
        <select id="defaultBatchDivide">
          <option value="1" ${getSettingsValue('defaultBatchDivide') === 1 ? 'selected' : ''}>1</option>
          <option value="2" ${getSettingsValue('defaultBatchDivide') === 2 ? 'selected' : ''}>2</option>
          <option value="3" ${getSettingsValue('defaultBatchDivide') === 3 ? 'selected' : ''}>3</option>
          <option value="4" ${getSettingsValue('defaultBatchDivide') === 4 ? 'selected' : ''}>4</option>
          <option value="5" ${getSettingsValue('defaultBatchDivide') === 5 ? 'selected' : ''}>5</option>
          <option value="6" ${getSettingsValue('defaultBatchDivide') === 6 ? 'selected' : ''}>6</option>
          <option value="7" ${getSettingsValue('defaultBatchDivide') === 7 ? 'selected' : ''}>7</option>
          <option value="8" ${getSettingsValue('defaultBatchDivide') === 8 ? 'selected' : ''}>8</option>
          <option value="9" ${getSettingsValue('defaultBatchDivide') === 9 ? 'selected' : ''}>9</option>
        </select>
      </div>
    `;
  }
  const SettingsPanelLoading = () => loadMode() + loadSpeed() + maxConcurrentLoads() + defaultBatchDivide();

  function toggler(name, checked = false) {
    return html`
      <div class="toggler">
        <input
          id="${name}"
          name="${name}"
          type="checkbox"
          value="true"
          ${checked ? 'checked' : ''}
        />
        <label for="${name}"> ${IconCheck} ${IconX} </label>
      </div>
    `;
  }

  function checkboxOptions() {
    return html`
      <div class="ControlLabel verticalSeparator">
        ${getLocaleString('VERTICAL_SEPARATOR')}
        ${toggler('verticalSeparator', getSettingsValue('verticalSeparator'))}
      </div>
      <div class="ControlLabel fitIfOversize">
        ${getLocaleString('FIT_WIDTH_OVERSIZED')}
        ${toggler('fitIfOversize', getSettingsValue('fitWidthIfOversize'))}
      </div>
      <div class="ControlLabel fitHeightHorizontal">
        ${getLocaleString('FIT_HEIGHT_HORIZONTAL')}
        ${toggler('fitHeightHorizontal', getSettingsValue('fitHeightInHorizontal'))}
      </div>
      <div class="ControlLabel showThumbnails">
        ${getLocaleString('SHOW_THUMBNAILS')}
        ${toggler('showThumbnails', getSettingsValue('showThumbnails'))}
      </div>
      <div class="ControlLabel downloadZip">
        ${getLocaleString('DOWNLOAD_IMAGES')}
        ${toggler('downloadZip', getSettingsValue('downloadZip'))}
      </div>
      <div class="ControlLabel hidePageControls">
        ${getLocaleString('HIDE_CONTROLS')}
        ${toggler('hidePageControls', getSettingsValue('hidePageControls'))}
      </div>
      <div class="ControlLabel lazyLoadImages">
        ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
        ${toggler('lazyLoadImages', getSettingsValue('lazyLoadImages'))}
      </div>
      <div class="ControlLabel pauseAnimatedWebp">
        WEBP动图点击播放
        ${toggler('pauseAnimatedWebp', getSettingsValue('pauseAnimatedWebp'))}
      </div>
    `;
  }
  function lazyLoad() {
    return html`
      <div
        class="ControlLabel lazyStart ControlLabelItem
    ${getSettingsValue('lazyLoadImages') ? 'show' : ''}"
      >
        <span>
          ${getLocaleString('LAZY_LOAD_IMAGES')}
          <output
            id="lazyStartVal"
            for="lazyStart"
          >
            ${getSettingsValue('lazyStart')}
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('lazyStart')}"
          name="lazyStart"
          id="lazyStart"
          min="5"
          max="100"
          step="5"
          oninput="lazyStartVal.value = this.value"
        />
      </div>
    `;
  }
  function headerType() {
    return html`
      <div class="ControlLabel headerType">
        ${getLocaleString('HEADER_TYPE')}
        <select id="headerType">
          <option
            value="hover"
            ${getSettingsValue('header') === 'hover' ? 'selected' : ''}
          >
            ${getLocaleString('HEADER_HOVER')}
          </option>
          <option
            value="scroll"
            ${getSettingsValue('header') === 'scroll' ? 'selected' : ''}
          >
            ${getLocaleString('HEADER_SCROLL')}
          </option>
          <option
            value="click"
            ${getSettingsValue('header') === 'click' ? 'selected' : ''}
          >
            ${getLocaleString('HEADER_CLICK')}
          </option>
          <option
            value="fixed"
            ${getSettingsValue('header') === 'fixed' ? 'selected' : ''}
          >
            ${getLocaleString('HEADER_FIXED')}
          </option>
          <option
            value="simple"
            ${getSettingsValue('header') === 'simple' ? 'selected' : ''}
          >
            ${getLocaleString('HEADER_SIMPLE')}
          </option>
        </select>
      </div>
    `;
  }
  function autoScroll() {
    return html`
      <div class="ControlLabel autoScroll">
        <span>
          ${getLocaleString('AUTO_SCROLL_HEIGHT')}
          <output
            id="scrollHeightVal"
            for="scrollHeight"
          >
            ${getSettingsValue('scrollHeight')} </output
          >px
        </span>
        <input
          type="range"
          value="${getSettingsValue('scrollHeight')}"
          name="scrollHeight"
          id="scrollHeight"
          min="1"
          max="100"
          step="1"
          oninput="scrollHeightVal.value = this.value"
        />
      </div>
    `;
  }
  const SettingsPanelOthers = () => checkboxOptions() + lazyLoad() + headerType() + autoScroll();

  function themesSelector() {
    return [...Object.keys(colors).map(color => colors[color].name)]
      .map(
        theme2 => html`
          <span
            title="${theme2}"
            class="${theme2} ThemeRadio ${getSettingsValue('theme') === theme2 ? 'selected' : ''}"
          >
            ${IconCheck}
          </span>
        `,
      )
      .join('');
  }
  function theme() {
    return html`
      <div class="ControlLabel ColorSchemeSelector">
        <label>${getLocaleString('COLOR_SCHEME')}</label>
        <button
          id="ColorScheme"
          class="ControlButton"
        >
          ${IconSun} ${IconMoon}
        </button>
      </div>
      <div class="ControlLabel ThemeSelector">
        <label>${getLocaleString('THEME_COLOR')}</label>
        <span
          class="custom ThemeRadio
        ${getSettingsValue('theme') === 'custom' ? 'selected' : ''}"
          title="custom"
        >
          ${IconPalette} ${IconCheck}
        </span>
        ${themesSelector()}
      </div>
      <div
        id="Hue"
        class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? 'show' : ''}"
      >
        <label>${getLocaleString('THEME_HUE')}</label>
        <input
          id="CustomThemeHue"
          type="color"
          value="${getSettingsValue('customTheme')}"
          class="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? '' : 'show'}"
      >
        <span>
          <label>${getLocaleString('THEME_SHADE')}</label>
          <output
            id="themeShadeVal"
            class="RangeValue"
            for="ThemeShade"
          >
            ${getSettingsValue('themeShade')}
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('themeShade')}"
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
          oninput="themeShadeVal.value = this.value"
        />
      </div>
    `;
  }

  function defaultZoomMode() {
    return html` <div class="ControlLabel DefaultZoomMode">
      ${getLocaleString('DEFAULT_ZOOM_MODE')}
      <select id="DefaultZoomMode">
        <option
          value="percent"
          ${getSettingsValue('zoomMode') === 'percent' ? 'selected' : ''}
        >
          ${getLocaleString('PERCENT')}
        </option>
        <option
          value="width"
          ${getSettingsValue('zoomMode') === 'width' ? 'selected' : ''}
        >
          ${getLocaleString('FIT_WIDTH')}
        </option>
        <option
          value="height"
          ${getSettingsValue('zoomMode') === 'height' ? 'selected' : ''}
        >
          ${getLocaleString('FIT_HEIGHT')}
        </option>
      </select>
    </div>`;
  }
  function defaultZoom() {
    return html`
      <div
        class="ControlLabel DefaultZoom ControlLabelItem ${getSettingsValue('zoomMode') ===
        'percent'
        ? 'show'
        : ''}"
      >
        <span>
          ${getLocaleString('DEFAULT_ZOOM')}
          <output
            id="defaultZoomVal"
            class="RangeValue"
            for="DefaultZoom"
          >
            ${getSettingsValue('defaultZoom')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('defaultZoom')}"
          name="DefaultZoom"
          id="DefaultZoom"
          min="5"
          max="200"
          step="5"
          list="tickmarks"
          oninput='defaultZoomVal.value = this.value + "%"'
        />
        <datalist id="tickmarks">
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="125">125</option>
          <option value="150">150</option>
          <option value="175">175</option>
          <option value="200">200</option>
        </datalist>
      </div>
    `;
  }
  function minZoom() {
    return html`
      <div class="ControlLabel minZoom">
        <span>
          ${getLocaleString('MINIMUM_ZOOM')}
          <output
            id="minZoomVal"
            class="RangeValue"
            for="minZoom"
          >
            ${getSettingsValue('minZoom')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('minZoom')}"
          name="minZoom"
          id="minZoom"
          min="30"
          max="100"
          step="10"
          oninput='minZoomVal.value = this.value + "%"'
        />
      </div>
    `;
  }
  function zoomStep() {
    return html`
      <div class="ControlLabel zoomStep">
        <span>
          ${getLocaleString('ZOOM_STEP')}
          <output
            id="zoomStepVal"
            class="RangeValue"
            for="zoomStep"
          >
            ${getSettingsValue('zoomStep')}%
          </output>
        </span>
        <input
          type="range"
          value="${getSettingsValue('zoomStep')}"
          name="zoomStep"
          id="zoomStep"
          min="5"
          max="50"
          step="5"
          oninput='zoomStepVal.value = this.value + "%"'
        />
      </div>
    `;
  }
  function viewMode() {
    return html`
      <div class="ControlLabel viewMode">
        ${getLocaleString('DEFAULT_VIEW_MODE')}
        <select id="viewMode">
          <option
            value="Vertical"
            ${getSettingsValue('viewMode') === 'Vertical' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_VERTICAL')}
          </option>
          <option
            value="WebComic"
            ${getSettingsValue('viewMode') === 'WebComic' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_WEBCOMIC')}
          </option>
          <option
            value="FluidLTR"
            ${getSettingsValue('viewMode') === 'FluidLTR' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_LEFT')}
          </option>
          <option
            value="FluidRTL"
            ${getSettingsValue('viewMode') === 'FluidRTL' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_RIGHT')}
          </option>
          <option
            value="Masonry"
            ${getSettingsValue('viewMode') === 'Masonry' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_MASONRY')}
          </option>
          <option
            value="Grid"
            ${getSettingsValue('viewMode') === 'Grid' ? 'selected' : ''}
          >
            ${getLocaleString('VIEW_MODE_GRID')}
          </option>
        </select>
      </div>
    `;
  }
  const SettingsPanelZoom = () =>
    defaultZoomMode() + defaultZoom() + minZoom() + zoomStep() + viewMode();

  const SettingsPanel = () => html`
    <div
      id="SettingsPanel"
      class="panel"
    >
      <h2>${getLocaleString('SETTINGS')}</h2>
      <button
        id="CloseSettings"
        class="closeButton"
        title="${getLocaleString('CLOSE')}"
      >
        ${IconX}
      </button>
      <button
        id="ResetSettings"
        class="ControlButton"
      >
        ${IconSettingsOff} ${getLocaleString('BUTTON_RESET_SETTINGS')}
      </button>
      <fieldset>
        <legend>${getLocaleString('GENERAL')}</legend>
        ${SettingsPanelGeneral()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('THEME')}</legend>
        ${theme()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('LOADING')}</legend>
        ${SettingsPanelLoading()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('ZOOM')}</legend>
        ${SettingsPanelZoom()}
      </fieldset>
      <fieldset>
        <legend>${getLocaleString('OTHERS')}</legend>
        ${SettingsPanelOthers()}
      </fieldset>
    </div>
  `;

  const ThumbnailsPanel = manga => html`
    <nav
      id="Navigation"
      class="panel ${getSettingsValue('showThumbnails') ? '' : 'disabled'}"
    >
      <div
        id="NavigationCounters"
        class="ControlLabel"
      >
        ${IconCategory}
        <i>0</i> /
        <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        ${getLocaleString('PAGES_LOADED')}
      </div>
      <div id="Thumbnails">
        ${sequence(manga.pages, manga.begin)
      .map(
        index => html`
              <div
                id="Thumbnail${index}"
                class="Thumbnail"
              >
                <img
                  id="ThumbnailImg${index}"
                  alt=""
                  class="ThumbnailImg"
                  src=""
                />
                <span class="ThumbnailIndex">${index}</span>
              </div>
            `,
      )
      .join('')}
      </div>
    </nav>
  `;

  let loadedManga;
  function hydrateApp() {
    showSettings();
    updateViewMode(getSettingsValue('viewMode'))();
    const elements = {
      '#Header': Header(loadedManga),
      '#CommentsPanel': commentsPanel(),
      '#SettingsPanel': SettingsPanel(),
      '#KeybindingsPanel': KeybindingsPanel(),
      '#Bookmarks': BookmarkPanel(),
    };
    const SettingsPanelOpened = document
      .querySelector('#SettingsPanel')
      ?.classList.contains('visible');
    if (document.querySelector('#ScrollControl')?.classList.contains('running')) {
      toggleAutoScroll();
    }
    refreshThemes();
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
    document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
    const outer = document.getElementById('MangaOnlineViewer');
    if (outer) {
      outer.className = `
        ${getSettingsValue('hidePageControls') ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
    }
    const reader = document.querySelector('#Chapter');
    if (reader) {
      reader.className = `${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''} ${getSettingsValue('fitHeightInHorizontal') ? 'fitHeightInHorizontal' : ''} ${getSettingsValue('verticalSeparator') ? 'separator' : ''} ${getSettingsValue('viewMode')}`;
    }
    Object.entries(elements).forEach(([id, component]) => {
      const tag = document.querySelector(id);
      if (tag) {
        tag.outerHTML = component;
      }
    });
    document
      .querySelector('#Navigation')
      ?.classList.toggle('disabled', !getSettingsValue('showThumbnails'));
    document.querySelector('#Overlay')?.classList.remove('visible');
    events();
    if (SettingsPanelOpened) buttonSettingsOpen();
  }
  const app = manga => {
    loadedManga = manga;
    const main = document.createElement('div');
    main.id = 'MangaOnlineViewer';
    main.className = `
        ${getSettingsValue('hidePageControls') ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}
        ${getDevice()}`;
    main.innerHTML = html`
      <div
        id="menu"
        class="${getSettingsValue('header')}"
      >
        ${IconMenu2}
      </div>
      ${Header(manga)} ${Reader(manga)} ${ThumbnailsPanel(manga)}
      <div
        id="Overlay"
        class="overlay"
      ></div>
      ${commentsPanel()} ${KeybindingsPanel()} ${BookmarkPanel()} ${SettingsPanel()}
    `;
    settings$1.listen(_.debounce(hydrateApp, 600));
    return main.outerHTML;
  };

  const animation =
    '@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n.icon-tabler-loader-2,\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n.animate-spin-reverse {\n  -webkit-animation: spin-reverse 1s linear infinite;\n  animation: spin-reverse 1s linear infinite;\n}\n';

  const bookmarks =
    '#MangaOnlineViewer #BookmarksPanel {\n  position: fixed;\n  top: 10%;\n  width: 50%;\n  left: 25%;\n  right: 25%;\n  text-align: center;\n  max-height: 70%;\n  transition: transform 0.3s ease-in-out;\n  transform: scaleY(0);\n  z-index: 1000;\n}\n\n#MangaOnlineViewer #BookmarksPanel.visible {\n  transform: scaleY(1);\n  display: block;\n}\n\n#MangaOnlineViewer #BookmarksList {\n  padding: 0 15px;\n  overflow: auto;\n  max-height: 60vh;\n}\n\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {\n  flex-basis: 90%;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {\n  width: 90px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkFunctions {\n  width: 75px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-basis: 55%;\n}\n';

  const comments =
    '#MangaOnlineViewer #CommentsPanel {\n  position: static;\n  width: 90%;\n  height: 0;\n  top: 5%;\n  left: 5%;\n  text-align: center;\n  transition: transform 0.3s ease-in-out;\n  transform: scaleY(0);\n  z-index: 1000;\n  overflow-y: initial;\n  background-color: var(--theme-body-background);\n  opacity: 0;\n}\n\n#MangaOnlineViewer #CommentsPanel.visible {\n  position: fixed;\n  height: 90%;\n  transform: scaleY(1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 1;\n}\n\n#MangaOnlineViewer #CommentsArea {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  height: 100%;\n  width: 100%;\n  background-color: var(--theme-body-background);\n}\n';

  const fluid =
    '#MangaOnlineViewer #Chapter.FluidLTR,\n#MangaOnlineViewer #Chapter.FluidRTL {\n  display: flex;\n  overflow-x: auto;\n  min-width: auto;\n\n  .ZoomWidth {\n    display: none;\n  }\n\n  .PageImg {\n    min-width: unset;\n  }\n\n  .MangaPage {\n    width: initial;\n    min-width: fit-content;\n    position: relative;\n    max-height: 100%;\n  }\n\n  .MangaPage.DoublePage {\n    grid-column: span 2;\n  }\n}\n\nbody:has(#MangaOnlineViewer #Chapter.FluidLTR.fitHeightInHorizontal),\nbody:has(#MangaOnlineViewer #Chapter.FluidRTL.fitHeightInHorizontal) {\n  overflow-y: hidden !important;\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR.fitHeightInHorizontal,\n#MangaOnlineViewer #Chapter.FluidRTL.fitHeightInHorizontal {\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 100vh;\n  align-items: stretch;\n\n  .PageImg {\n    max-height: 100vh;\n    height: 100vh;\n    width: auto;\n    object-fit: contain;\n    display: block;\n  }\n\n  .MangaPage {\n    display: flex;\n    align-items: stretch;\n    height: 100vh;\n    overflow: hidden;\n  }\n\n  .PageContent {\n    height: 100vh;\n    display: flex;\n    align-items: stretch;\n    overflow: hidden;\n  }\n\n  .PageFunctions {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: auto;\n    bottom: auto;\n  }\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR {\n  flex-direction: row;\n\n  .MangaPage .PageFunctions {\n    right: auto;\n    left: 0;\n    direction: rtl;\n  }\n}\n\n#MangaOnlineViewer #Chapter.FluidRTL {\n  flex-direction: row-reverse;\n}\n';

  const masonry =
    '#MangaOnlineViewer #Chapter.Masonry {\n  display: flex;\n  align-items: flex-start;\n}\n\n#MangaOnlineViewer #Chapter.Masonry .imgcol {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#MangaOnlineViewer #Chapter.Masonry .MangaPage {\n  width: 100%;\n}\n\n#MangaOnlineViewer #Chapter.Masonry .PageContent {\n  width: 100%;\n  height: auto;\n  margin: 0;\n}\n\n#MangaOnlineViewer #Chapter.Masonry .PageImg {\n  width: 100%;\n  height: auto;\n}\n\n#MasonryControls {\n  display: flex;\n  gap: 20px;\n  padding: 10px 20px;\n  background: var(--theme-background-color);\n  border-bottom: 1px solid var(--theme-border-color);\n  align-items: center;\n}\n\n#MasonryControls .masonry-control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n#MasonryControls label {\n  color: var(--theme-text-color);\n}\n\n#MasonryControls input[type="range"] {\n  width: 100px;\n}\n\n#MasonryControls span {\n  min-width: 30px;\n  color: var(--theme-primary-text-color);\n  background: var(--theme-primary-color);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n';

  const header =
    '#MangaOnlineViewer #gotoPage {\n  min-width: 35px;\n}\n\n#MangaOnlineViewer #Header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row nowrap;\n  transition: transform 0.3s ease-in;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: inherit;\n  z-index: 900;\n}\n\n#MangaOnlineViewer #Header.click {\n  padding-left: 40px;\n}\n\n@keyframes headroom {\n  from {\n    transform: translateY(-100%);\n    position: sticky;\n    top: 0;\n  }\n  to {\n    transform: translateY(0%);\n    position: sticky;\n    top: 0;\n  }\n}\n\n#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {\n  animation: headroom 0.3s ease-in reverse;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\n  position: fixed;\n  padding-left: 40px;\n  top: -100%;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-hide {\n  animation: none;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-show,\n#MangaOnlineViewer #Header.headroom-end,\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\n#MangaOnlineViewer #Header.visible {\n  animation: headroom 0.3s ease-in;\n  transform: translateY(0%);\n  position: sticky;\n  top: 0;\n}\n\n#MangaOnlineViewer #Header.headroom-top {\n  animation: none;\n}\n\n#MangaOnlineViewer #Header.fixed {\n  position: sticky;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#MangaOnlineViewer #Header.simple {\n  position: static;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#MangaOnlineViewer #menu {\n  position: fixed;\n  z-index: 1;\n  color: var(--theme-body-text-color);\n  height: 40px;\n  width: 40px;\n}\n\n#MangaOnlineViewer #menu .icon-tabler {\n  position: relative;\n  top: 4px;\n  left: 4px;\n  height: 32px;\n  width: 32px;\n  stroke-width: 1.25;\n}\n\n#MangaOnlineViewer #menu:not(.click, .hover),\n#MangaOnlineViewer #menu.hide {\n  display: none;\n}\n\n#MangaOnlineViewer #menu.click {\n  z-index: 901;\n}\n\n#MangaOnlineViewer #MangaTitle {\n  padding: 2px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n#MangaOnlineViewer #GlobalFunctions {\n  display: flex;\n  gap: 3px;\n  padding: 3px 3px 3px 0;\n  flex-wrap: wrap;\n  width: 300px;\n  z-index: 100;\n}\n\n#MangaOnlineViewer .ChapterControl span,\n#MangaOnlineViewer #GlobalFunctions span {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n}\n\n#MangaOnlineViewer .ChapterControl span {\n  flex-grow: 1;\n}\n\n#MangaOnlineViewer .ChapterControl span > * {\n  flex-basis: 50%;\n}\n\n#MangaOnlineViewer #ScrollControl .icon-tabler,\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\n  width: 25px;\n  height: 25px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\n  display: flex;\n  align-items: center;\n}\n\n#MangaOnlineViewer #GlobalFunctions #Zoom {\n  margin: 2px 5px;\n  width: 160px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\n  width: 40px;\n  display: inline-block;\n  color: var(--theme-primary-text-color);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--theme-primary-color);\n  padding: 2px 5px;\n}\n\n#MangaOnlineViewer #ChapterNavigation {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: end;\n  padding: 5px;\n  max-width: 350px;\n}\n\n#MangaOnlineViewer #Counters {\n  padding-right: 5px;\n}\n\n#MangaOnlineViewer #ChapterControl {\n  display: flex;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton {\n  display: inline-flex;\n  margin: 2px;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  gap: 0.5em;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {\n  flex-shrink: 0;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="#"],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=""],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="undefined"] {\n  visibility: hidden;\n}\n\n#MangaOnlineViewer #ChapterControl #download.loading {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n#MangaOnlineViewer #ChapterControl #download.downloaded,\n#MangaOnlineViewer #ChapterControl #downloadPart.downloaded {\n  background: #28a745 !important;\n  border-color: #28a745 !important;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {\n  pointer-events: none;\n  filter: grayscale(0.9);\n}\n\n#MangaOnlineViewer .ViewerTitle {\n  text-align: center;\n  min-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n  flex-basis: 60%;\n}\n';

  const titlePopup =
    '#MangaOnlineViewer .ViewerTitle {\n  position: relative;\n  min-width: 0;\n  flex: 1 1 60%;\n  max-height: 60px;\n}\n\n#MangaOnlineViewer #MangaTitle {\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  line-height: 1.25;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n#MangaOnlineViewer #MangaTitle:focus {\n  outline: 1px solid var(--theme-border-color);\n  outline-offset: 2px;\n}\n\n#MangaOnlineViewer #MangaTitlePopup {\n  display: none;\n  position: absolute;\n  top: calc(100% - 2px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: max-content;\n  max-width: min(85vw, 920px);\n  max-height: 40vh;\n  overflow: auto;\n  padding: 8px 12px;\n  border: 1px solid var(--theme-border-color);\n  border-radius: 8px;\n  background-color: var(--theme-primary-color);\n  color: var(--theme-primary-text-color);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);\n  line-height: 1.4;\n  text-align: left;\n  white-space: normal;\n  word-break: break-word;\n  z-index: 910;\n}\n\n#MangaOnlineViewer .ViewerTitle.titlePopupOpen #MangaTitlePopup {\n  display: block;\n}\n\n#MangaOnlineViewer #series {\n  display: block;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle,\n#MangaOnlineViewer.tablet .ViewerTitle {\n  max-height: 60px;\n}\n\n#MangaOnlineViewer.mobile #MangaTitlePopup,\n#MangaOnlineViewer.tablet #MangaTitlePopup {\n  max-width: calc(100vw - 20px);\n}\n';

  const icons =
    '.icon-tabler {\n  height: 1rem;\n  width: 1rem;\n  vertical-align: sub;\n}\n\n.icon-tabler-file-download > :nth-child(n + 4) {\n  /* 4, 5 */\n  color: gold;\n}\n\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\n  /* 3,4,5,6 */\n  color: yellow;\n}\n\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\n  /* 3,4,5,6 */\n  color: yellow;\n}\n\n.icon-tabler-zoom-in-area > :nth-child(2),\n.icon-tabler-zoom-in-area > :nth-child(3) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out-area > :nth-child(2) {\n  color: red;\n}\n\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\n  color: #9966ff;\n}\n\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-spacing-vertical > :nth-child(4) {\n  color: fuchsia;\n}\n\n.icon-tabler-list-numbers > :nth-child(n + 5) {\n  color: #e48900;\n}\n\n.icon-tabler-bookmarks > :nth-child(n + 2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark > * {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > * {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-eye-off > :nth-child(4) {\n  color: red;\n}\n\n.icon-tabler-zoom-cancel > :nth-child(3),\n.icon-tabler-zoom-cancel > :nth-child(4) {\n  color: #9966ff;\n}\n\n.icon-tabler-zoom-in > :nth-child(3),\n.icon-tabler-zoom-in > :nth-child(4) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-refresh > :nth-child(n + 2) {\n  color: cyan;\n}\n\n.icon-tabler-photo > * {\n  color: silver;\n}\n\n.icon-tabler-photo-off > * {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(6) {\n  color: orange;\n}\n\n.icon-tabler-message > :nth-child(2),\n.icon-tabler-message > :nth-child(3) {\n  color: greenyellow;\n}\n';

  const keybindings =
    '#MangaOnlineViewer #KeybindingsPanel {\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(100%);\n  line-height: 1.5em;\n  z-index: 1000;\n  overflow-y: auto;\n  width: 360px;\n  max-width: 100vw;\n}\n\n#MangaOnlineViewer #KeybindingsPanel.visible {\n  transform: translateX(0);\n  display: block;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 5px;\n}\n\n#MangaOnlineViewer #KeybindingsPanel .ControlButton {\n  margin-left: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  gap: 0.5em;\n}\n\n#MangaOnlineViewer #KeybindingsPanel label {\n  display: ruby;\n}\n\n#MangaOnlineViewer #KeybindingsPanel input {\n  display: inline-block;\n  width: 100%;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\n  grid-column: span 2;\n}\n';

  const styles =
    ':root:not(.light, .dark) {\n  --theme-body-background: #25262b;\n  --theme-body-text-color: #c1c2c5;\n  --theme-text-color: #c1c2c5;\n  --theme-primary-color: #1a1b1e;\n  --theme-primary-text-color: #c1c2c5;\n  --theme-background-color: #25262b;\n  --theme-hightlight-color: #2c2e33;\n  --theme-border-color: #373a40;\n}\n\n#MangaOnlineViewer {\n  text-decoration: none;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n}\n\n#MangaOnlineViewer #Chapter {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  min-width: 225px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),\n#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\n  padding-bottom: 31px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n#MangaOnlineViewer .closeButton {\n  width: fit-content;\n  height: fit-content;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n#MangaOnlineViewer .overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 950;\n  cursor: pointer;\n}\n\n#MangaOnlineViewer .overlay.visible {\n  display: block;\n}\n\n#MangaOnlineViewer select {\n  height: 20px;\n  /*padding: 0;*/\n  margin: 2px;\n}\n\n#MangaOnlineViewer .ControlButton,\n#MangaOnlineViewer .simpleButton {\n  cursor: pointer;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px;\n  min-height: 32px;\n  color: var(--theme-primary-text-color);\n  background-color: var(--theme-primary-color);\n  border-color: var(--theme-border-color);\n}\n\n#MangaOnlineViewer .ControlButton:active,\n#MangaOnlineViewer .ControlButton:hover {\n  opacity: 0.8;\n}\n\n#MangaOnlineViewer .simpleButton {\n  font-size: initial;\n  min-width: 32px;\n}\n\n#MangaOnlineViewer .panel .simpleButton {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n#MangaOnlineViewer .panel {\n  padding: 5px;\n  position: inherit;\n  border-radius: 5px;\n  background-color: var(--theme-background-color);\n}\n\n#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\n  max-width: 100%;\n  object-fit: contain;\n}\n\n#MangaOnlineViewer .ControlButton.hidden,\n.light #ColorScheme > .icon-tabler-sun,\n.dark #ColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,\n#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\n#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\n#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,\n#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {\n  display: none;\n}\n\n#MangaOnlineViewer.hideControls .PageFunctions {\n  visibility: hidden;\n}\n\n/* 默认隐藏控件按钮（除了页数），点击显示/隐藏按钮后显示 */\n#MangaOnlineViewer:not(.showControls) .PageFunctions .ControlButton {\n  display: none;\n}\n\n#MangaOnlineViewer.showControls .PageFunctions .ControlButton {\n  display: flex;\n}\n';

  const media =
    '#MangaOnlineViewer.mobile #Header,\n#MangaOnlineViewer.tablet #Header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle,\n#MangaOnlineViewer.tablet .ViewerTitle {\n  order: 1;\n  min-height: auto;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions,\n#MangaOnlineViewer.tablet #GlobalFunctions {\n  width: auto;\n  order: 2;\n  padding: 5px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation,\n#MangaOnlineViewer.tablet #ChapterNavigation {\n  order: 3;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\n#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\n  display: none;\n}\n\n#MangaOnlineViewer.mobile #Header {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\n  position: sticky;\n}\n\n#MangaOnlineViewer.mobile #MangaTitle {\n  word-wrap: anywhere;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle {\n  order: 1;\n  margin-top: 0;\n  height: auto;\n  padding: 0;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions {\n  order: 2;\n  padding: 0;\n  width: auto;\n  flex-basis: 35px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation {\n  order: 3;\n  width: min-content;\n  min-width: 205px;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {\n  flex-grow: 1;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions {\n  padding: 0;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {\n  opacity: 1;\n}\n\n#MangaOnlineViewer.mobile #Navigation,\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,\n#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,\n#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,\n#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,\n#MangaOnlineViewer.mobile #SettingsPanel .minZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,\n#MangaOnlineViewer.mobile #SettingsPanel .headerType,\n#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,\n#MangaOnlineViewer.mobile #KeybindingsPanel,\n#MangaOnlineViewer.mobile .ChapterControl .download,\n#MangaOnlineViewer.mobile #Counters {\n  display: none;\n}\n';

  const page =
    '#MangaOnlineViewer .MangaPage {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 0;\n  min-height: 22px;\n  min-width: 100%;\n}\n\n#MangaOnlineViewer .PageContent {\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto;\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n#MangaOnlineViewer .MangaPage.hide .PageContent {\n  height: 0;\n}\n\n#MangaOnlineViewer .PageContent .PageImg[src=""],\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageFunctions {\n  font-family: monospace;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  gap: 3px;\n  position: absolute;\n  right: 0;\n}\n\n#MangaOnlineViewer .PageFunctions > .PageIndex {\n  background-color: var(--theme-primary-color);\n  color: var(--theme-primary-text-color);\n  min-width: 20px;\n  text-align: center;\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 1rem;\n  border-radius: 5px;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton {\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-width: 0;\n  min-height: auto;\n  opacity: 0.5;\n}\n\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\n  opacity: 1;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\n  opacity: 0.9;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-style: italic;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator::before,\n#MangaOnlineViewer #Chapter.Vertical .separator::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--theme-text-color);\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {\n  margin-right: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {\n  margin-left: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter:not(.separator) .separator,\n#MangaOnlineViewer #Chapter:not(.Vertical) .separator {\n  display: none;\n}\n';

  const settings =
    '#MangaOnlineViewer #SettingsPanel {\n  color: var(--theme-text-color);\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000;\n  transition:\n    transform 0.3s ease-in,\n    background-color 0.3s linear;\n  transform: translateX(-100%);\n  display: flex;\n  flex-flow: column;\n  gap: 5px;\n  overflow-y: auto;\n  max-width: 100vw;\n  width: 308px;\n}\n\n#MangaOnlineViewer #SettingsPanel.visible {\n  transform: translateX(0);\n}\n\n#MangaOnlineViewer #SettingsPanel fieldset {\n  border: 1px solid var(--theme-body-text-color);\n  padding: 3px;\n  border-radius: 10px;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\n  display: none;\n}\n\n#MangaOnlineViewer #SettingsPanel input[type="range"] {\n  width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel .RangeValue {\n  display: inline-block;\n  color: var(--theme-primary-text-color);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--theme-primary-color);\n  padding: 2px 5px;\n  margin-left: 8px;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  writing-mode: vertical-lr;\n  width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist option {\n  padding: 0;\n}\n\n#MangaOnlineViewer .ThemeRadio {\n  border: 1px solid var(--theme-text-color);\n  color: var(--theme-primary-text-color);\n  background-color: var(--theme-primary-color);\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  padding: 1px;\n  margin: 2px 5px;\n  position: relative;\n}\n\n#MangaOnlineViewer .ThemeRadio svg {\n  position: absolute;\n  top: 15%;\n  right: 15%;\n}\n\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\n  display: inline;\n}\n\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\n  display: none;\n}\n\n#MangaOnlineViewer #ThemeSelector {\n  width: 110px;\n}\n\n#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 0.5rem;\n  background-color: var(--theme-border-color);\n  color: var(--theme-text-color);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);\n  padding: 0.25rem;\n  width: 300px;\n  font-size: 14px;\n}\n\n#MangaOnlineViewer .radio-inputs .radio {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n#MangaOnlineViewer .toggler input {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs .radio input {\n  display: none;\n}\n\n#MangaOnlineViewer .radio-inputs .radio .name .icon {\n  margin: 0 0.5rem;\n}\n\n#MangaOnlineViewer .radio-inputs .radio .name {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  border: none;\n  padding: 0.5rem 0;\n  color: var(--theme-text-color);\n  background-color: var(--theme-border-color);\n  transition: all 0.15s ease-in-out;\n}\n\n#MangaOnlineViewer .radio-inputs .radio input:checked + .name {\n  background-color: var(--theme-primary-color);\n  color: var(--theme-primary-text-color);\n  font-weight: 600;\n}\n\n#MangaOnlineViewer #ColorScheme {\n  padding: 5px;\n  min-height: 28px;\n  min-width: 28px;\n}\n\n#MangaOnlineViewer .toggler {\n  width: 36px;\n  /*margin: 40px auto;*/\n}\n\n#MangaOnlineViewer .toggler label {\n  display: block;\n  position: relative;\n  width: 36px;\n  height: 18px;\n  border: 1px solid #d6d6d6;\n  border-radius: 36px;\n  background: #e4e8e8;\n  cursor: pointer;\n}\n\n#MangaOnlineViewer .toggler label::after {\n  display: block;\n  border-radius: 100%;\n  background-color: #d7062a;\n  content: "";\n  animation-name: toggler-size;\n  animation-duration: 0.15s;\n  animation-timing-function: ease-out;\n  animation-direction: normal;\n  animation-iteration-count: 1;\n  animation-play-state: running;\n}\n\n#MangaOnlineViewer .toggler .toggler-on,\n#MangaOnlineViewer .toggler .toggler-off {\n  opacity: 1;\n  z-index: 2;\n}\n\n#MangaOnlineViewer .toggler label::after,\n#MangaOnlineViewer .toggler label .toggler-on,\n#MangaOnlineViewer .toggler label .toggler-off {\n  position: absolute;\n  /*top: 50%;*/\n  top: 9px;\n  left: 25%;\n  width: 16px;\n  height: 16px;\n  transform: translateY(-50%) translateX(-50%);\n  transition:\n    left 0.15s ease-in-out,\n    background-color 0.2s ease-out,\n    width 0.15s ease-in-out,\n    height 0.15s ease-in-out,\n    opacity 0.15s ease-in-out;\n}\n\n#MangaOnlineViewer .toggler input:checked + label::after,\n#MangaOnlineViewer .toggler input:checked + label .toggler-on,\n#MangaOnlineViewer .toggler input:checked + label .toggler-off {\n  left: 75%;\n}\n\n#MangaOnlineViewer .toggler input:checked + label::after {\n  background-color: #50ac5d;\n  animation-name: toggler-size2;\n}\n\n#MangaOnlineViewer .toggler input:checked + label .toggler-off,\n#MangaOnlineViewer .toggler input:not(:checked) + label .toggler-on {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\n#MangaOnlineViewer .toggler .path {\n  fill: none;\n  stroke: #fefefe;\n  stroke-width: 7px;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n}\n\n@keyframes toggler-size {\n  0%,\n  100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@keyframes toggler-size2 {\n  0%,\n  100% {\n    width: 26px;\n    height: 26px;\n  }\n\n  50% {\n    width: 20px;\n    height: 20px;\n  }\n}\n';

  const normalize =
    '/*  Simple Normalizer */\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n  color: var(--theme-body-text-color);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n  vertical-align: middle;\n  border: 0 none;\n}\n';

  const thumbnails =
    '#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\n  width: 100px;\n  height: 150px;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n}\n\n#MangaOnlineViewer #NavigationCounters {\n  margin: 5px;\n  width: 100%;\n  line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  bottom: -180px;\n  height: 185px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  padding-bottom: 20px;\n  position: fixed;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  transition:\n    transform 0.3s ease-in,\n    background-color 0.3s linear;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  line-height: 0;\n}\n\n#MangaOnlineViewer #Navigation #Thumbnails {\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-right: 10px;\n}\n\n#MangaOnlineViewer #Navigation:hover {\n  transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation.disabled {\n  display: none;\n}\n\n#MangaOnlineViewer #Navigation.visible {\n  transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail {\n  display: inline-block;\n  height: 150px;\n  margin: 0 5px;\n  border: 1px solid var(--theme-primary-color);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  display: block;\n  opacity: 0.8;\n  position: relative;\n  bottom: 25%;\n  width: 100%;\n  line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\n  cursor: pointer;\n  display: inline-block;\n  max-height: 150px;\n  min-height: 150px;\n  min-width: 80px;\n  max-width: 160px;\n}\n';

  const cssStyles = css`
    :root,
    .dark {
      --theme-body-background: ${colors.dark['600']};
      --theme-body-text-color: ${colors.dark['50']};
      --theme-text-color: ${colors.dark['50']};
      --theme-primary-color: ${colors.dark['700']};
      --theme-primary-text-color: ${colors.dark['50']};
      --theme-background-color: ${colors.dark['600']};
      --theme-hightlight-color: ${colors.dark['500']};
      --theme-border-color: ${colors.dark['400']};
    }

    .light {
      --theme-body-background: ${colors.gray['50']};
      --theme-body-text-color: ${colors.gray['900']};
      --theme-text-color: ${colors.gray['900']};
      --theme-primary-color: ${colors.gray['300']};
      --theme-primary-text-color: ${colors.gray['900']};
      --theme-background-color: ${colors.gray['50']};
      --theme-hightlight-color: ${colors.gray['500']};
      --theme-border-color: ${colors.gray['100']};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${svgToUrl(IconPhotoOff)}');
    }

    #MangaOnlineViewer .PageContent {
      display: inline-block;
      height: auto;
      line-height: 0;
      vertical-align: top;
    }

    #MangaOnlineViewer .AnimatedWebpMedia {
      position: relative;
      display: inline-block;
      max-width: 100%;
      line-height: 0;
      overflow: hidden;
      vertical-align: top;
    }

    #MangaOnlineViewer .MangaPage.animated-webp-ready .AnimatedWebpMedia {
      cursor: pointer;
    }

    #MangaOnlineViewer .PageContent .PageImg {
      display: block;
    }

    #MangaOnlineViewer .AnimatedWebpCanvas {
      position: absolute;
      inset: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    }

    #MangaOnlineViewer .AnimatedWebpCanvas[hidden] {
      display: none !important;
    }

    #MangaOnlineViewer .AnimatedWebpToggle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      width: 52px;
      height: 52px;
      border: 0;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.42);
      color: #fff;
      font-size: 28px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 4;
      backdrop-filter: blur(4px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
    }

    #MangaOnlineViewer .AnimatedWebpToggle[hidden],
    #MangaOnlineViewer .AnimatedWebpProgress[hidden] {
      display: none !important;
    }

    #MangaOnlineViewer .AnimatedWebpProgress {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 53px;
      border-radius: 0;
      background: transparent;
      overflow: hidden;
      z-index: 4;
      pointer-events: auto;
      cursor: pointer;
      touch-action: none;
    }

    #MangaOnlineViewer .AnimatedWebpProgress::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.14);
    }

    #MangaOnlineViewer .AnimatedWebpProgressBar {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 0%;
      height: 3px;
      border-radius: inherit;
      background: rgba(0, 180, 255, 0.95);
      transition: width 80ms linear;
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${svgToUrl(IconPalette)}");*/
    }

    ${normalize}
    ${styles}
  ${header}
  ${icons}
  ${keybindings}
  ${page}
  ${fluid}
  ${titlePopup}
  ${masonry}
  ${settings}
  ${thumbnails}
  ${bookmarks}
  ${comments}
  ${media}
  ${animation}
  `;

  function head(manga) {
    return html`
      <title>${manga.title}</title>
      <meta charset="UTF-8" />
      ${wrapStyle('externals', sweetalertStyle)} ${wrapStyle('reader', cssStyles)} ${themesCSS}
      ${wrapStyle(
      'MinZoom',
      `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getSettingsValue('minZoom')}vw;}`,
    )}
    `;
  }

  function setCurrentBatchLoadInfo(batch, begin, end) {
    if ([batch, begin, end].some(value => Number.isNaN(value))) return;
    currentBatchLoadInfo = { batch, begin, end };
  }

  function setBatchCalculatorCurrentTitle(batchNum) {
    const batchCalculatorTitle = document.getElementById('batchCalculatorTitle');
    if (!batchCalculatorTitle || Number.isNaN(batchNum)) return;
    batchCalculatorTitle.innerHTML = `当前第【<span style="color: #ff1493; font-weight: 800;">${batchNum}</span>】批`;
  }

  function resetBatchCalculatorTitle() {
    const batchCalculatorTitle = document.getElementById('batchCalculatorTitle');
    if (!batchCalculatorTitle) return;
    batchCalculatorTitle.textContent = '批次计算器';
  }

  function getDisplayedMangaTitle(manga, batchInfo = currentBatchLoadInfo) {
    if (!batchInfo || skipLoadMode) return manga.title;
    const begin = manga.begin ?? batchInfo.begin;
    const end = manga.pages ?? batchInfo.end;
    if (batchInfo.begin !== begin || batchInfo.end !== end) return manga.title;
    return `【批次${batchInfo.batch}】【${batchInfo.begin}-${batchInfo.end}】${manga.title}`;
  }

  function updateDisplayedMangaTitle(manga, batchInfo = currentBatchLoadInfo) {
    manga.displayTitle = getDisplayedMangaTitle(manga, batchInfo);
    return manga.displayTitle;
  }

  function display(manga) {
    activeManga = manga;
    updateDisplayedMangaTitle(manga);
    cleanUpElement(document.documentElement, document.head, document.body);
    document.documentElement.classList.add(getSettingsValue('colorScheme'));
    document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
    window.scrollTo(0, 0);
    logScriptVerbose(`Page Cleaned Up`);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = app(manga);
    events();
    loadManga(manga);
    if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
  }

  async function captureComments() {
    if (!getSettingsValue('enableComments')) return null;
    let comments = document.querySelector('#disqus_thread, #fb-comments');
    if (comments) {
      logScript(`Waiting to Comments to load`, comments);
      window.scrollTo(0, document.body.scrollHeight);
      await waitWithTimeout(
        waitForFunc(() => {
          comments = document.querySelector('#disqus_thread, #fb-comments');
          const iframe = comments?.querySelector('iframe:not(#indicator-north, #indicator-south)');
          return (
            iframe?.contentWindow?.document.readyState === 'complete' &&
            !!iframe?.contentWindow?.document?.body?.textContent?.length
          );
        }),
      );
      if (comments.children.length) {
        logScript(`Got Comments`, comments);
      } else {
        logScript(`Timeout Comments`);
      }
    }
    window.scrollTo(0, 0);
    return comments;
  }
  async function viewer(manga) {
    if (manga.before !== void 0) {
      logScriptVerbose(`Executing Preparation`);
      await manga.before(manga.begin ?? 0);
    }
    // 已根据用户需求移除注释功能相关逻辑
    setTimeout(() => {
      try {
        display(manga);
      } catch (e) {
        logScript(e);
      }
    }, 50);
  }

  const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    'image/x-icon',
  ];
  const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;
  const orderFiles = (a, b) =>
    a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    });
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  const getImageBlob = content => {
    const buffer = new Uint8Array(content);
    const blob = new Blob([buffer.buffer]);
    const blobUrl = URL.createObjectURL(blob);
    imageBlobCache.set(blobUrl, blob);
    return blobUrl;
  };
  async function loadZipFile(filePath) {
    const zip = await JSZip.loadAsync(filePath);
    const files = zip
      .filter((_, file) => !file.dir && fileImageExt.test(file.name))
      .sort((a, b) => orderFiles(a.name, b.name));
    logScript('Files in zip:', zip.files);
    return Promise.all(files.map(file => file.async('arraybuffer').then(getImageBlob)));
  }
  function displayUploadedFiles(title, listImages) {
    // 强制设置为垂直有缝模式
    saveSettingsValue('viewMode', 'Vertical');
    viewer({
      title,
      series: '?reload',
      pages: listImages.length,
      begin: 1,
      prev: '#',
      next: '#',
      lazy: false,
      listImages,
    }).then(() => logScript('Page loaded'));
  }
  async function loadMangaFromZip(zipFile) {
    const listImages = await loadZipFile(zipFile);
    displayUploadedFiles(typeof zipFile === 'string' ? zipFile : zipFile.name, listImages);
  }
  function openFileImages(evt) {
    const input = evt.target;
    const files = Array.from(input.files)
      .filter(validFileType)
      .sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
    logScript(
      'Local Files: ',
      files,
      files.map(f => f.webkitRelativePath || f.name),
    );
    if (input.files?.[0]) {
      const listImages = files.map(file => {
        const blobUrl = URL.createObjectURL(file);
        imageBlobCache.set(blobUrl, file);
        return blobUrl;
      });
      displayUploadedFiles(
        input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
        listImages,
      );
    }
  }
  function allowUpload() {
    if (localhost.url.test(window.location.href)) {
      if (document.querySelector('#MangaOnlineViewer, #LocalTest')) {
        document.querySelector('#LocalTest')?.setAttribute('style', 'display:none');
        document.querySelector('#file')?.addEventListener('change', evt => {
          const input = evt.target;
          if (input.files?.[0]) loadMangaFromZip(input.files[0]);
        });
        document.querySelector('#folder')?.addEventListener('change', openFileImages);
        document.querySelector('#images')?.addEventListener('change', openFileImages);
        logScript(`Waiting for zip/images upload`);
      }
      return true;
    }
    return false;
  }

  function validateMin(valBegin, endPage, rs) {
    let val = valBegin;
    if (Number.isNaN(val) || val < rs.min()) {
      val = rs.min();
    } else if (val > rs.max()) {
      val = rs.max();
    } else if (val > endPage) {
      val = endPage;
    }
    return val;
  }
  function validateMax(valEnd, beginPage, rs) {
    let val = valEnd;
    if (Number.isNaN(val) || val > rs.max()) {
      val = rs.max();
    } else if (val < rs.min()) {
      val = rs.min();
    } else if (val < beginPage) {
      val = beginPage;
    }
    return val;
  }
  async function lateStart(site, begin = 1, existingManga = null) {
    const startMOVContainer = document.getElementById('StartMOVContainer');
    const restoreStartMOVContainerDisplay = startMOVContainer?.style.display ?? '';
    const shouldRestoreStartMOVContainer = !!startMOVContainer && startMOVContainer.style.display !== 'none';
    if (startMOVContainer) {
      startMOVContainer.style.display = 'none';
    }

    // 如果已经有manga数据，直接使用；否则才调用site.run()
    const manga = existingManga || await site.run();
    logScript('LateStart');
    let beginPage = begin;
    let endPage = manga.pages;

    // 启动页面默认选中域名模式（local），无论当前设置是什么
    const currentScope = 'local';
    // 启动页面视图模式固定为"垂直有缝"(Vertical)
    const currentViewMode = 'Vertical';
    // AI魔改：根据图片总数自动计算默认批次数
    // > 600 → 8 批次；350 < x ≤ 600 → 4 批次；250 < x ≤ 350 → 2 批次；≤ 250 → 1 批次
    const autoBatchDivide = (pages) => {
      if (pages > 600) return 8;
      if (pages > 350) return 4;
      if (pages > 250) return 2;
      return 1;
    };
    const totalPages = endPage - beginPage + 1;
    const smartDefaultBatchDivide = Math.min(9, Math.max(1, autoBatchDivide(totalPages)));
    // 读取用户上次保存的手动批次值
    const savedDefaultBatchDivide = Math.min(
      9,
      Math.max(1, parseInt(getSettingsValue('defaultBatchDivide') ?? 4, 10) || 4),
    );
    // AI魔改：自动智能批次开关 — 默认开启，手动改批次后自动关闭
    const autoBatchDivideEnabled = getSettingsValue('autoBatchDivideEnabled') !== false;
    // 弹窗里根据开关决定用智能值还是用户手动值
    const launchDefaultBatchDivide = autoBatchDivideEnabled ? smartDefaultBatchDivide : savedDefaultBatchDivide;
    const launchAutoConfirmBatchHotkey = !!getSettingsValue('autoConfirmBatchHotkey');

    const options = {
      title: '正在启动脚本',
      html: html`
        <!-- 规则范围和视图模式选择 -->
        <div id="launchSettings" style="margin-bottom: 8px; padding: 8px; background: #f5f5f5; border-radius: 8px;">
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <!-- 规则范围选择 -->
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <label style="font-size: 12px; color: #666; font-weight: bold;">${getLocaleString('SCOPE')}</label>
              <div style="display: flex; gap: 5px;">
                <label style="display: flex; align-items: center; gap: 3px; cursor: pointer; padding: 5px 10px; border-radius: 5px; background: ${currentScope === 'global' ? '#2196f3' : '#ddd'}; color: ${currentScope === 'global' ? '#fff' : '#333'}; font-size: 12px;">
                  <input type="radio" name="launchScope" value="global" ${currentScope === 'global' ? 'checked' : ''} style="display: none;">
                  ${getLocaleString('GLOBAL')}
                </label>
                <label style="display: flex; align-items: center; gap: 3px; cursor: pointer; padding: 5px 10px; border-radius: 5px; background: ${currentScope === 'local' ? '#2196f3' : '#ddd'}; color: ${currentScope === 'local' ? '#fff' : '#333'}; font-size: 12px;">
                  <input type="radio" name="launchScope" value="local" ${currentScope === 'local' ? 'checked' : ''} style="display: none;">
                  ${window.location.hostname}
                </label>
              </div>
            </div>
            <!-- 视图模式选择 -->
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <label style="font-size: 12px; color: #666; font-weight: bold;">${getLocaleString('DEFAULT_VIEW_MODE')}</label>
              <select id="launchViewMode" style="padding: 5px 10px; border-radius: 5px; border: 1px solid #ddd; font-size: 12px; cursor: pointer;">
                <option value="Vertical" ${currentViewMode === 'Vertical' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_VERTICAL')}</option>
                <option value="WebComic" ${currentViewMode === 'WebComic' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_WEBCOMIC')}</option>
                <option value="FluidLTR" ${currentViewMode === 'FluidLTR' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_LEFT')}</option>
                <option value="FluidRTL" ${currentViewMode === 'FluidRTL' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_RIGHT')}</option>
                <option value="Masonry" ${currentViewMode === 'Masonry' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_MASONRY')}</option>
                <option value="Grid" ${currentViewMode === 'Grid' ? 'selected' : ''}>${getLocaleString('VIEW_MODE_GRID')}</option>
              </select>
            </div>
            <!-- 默认批次数主控 -->
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <label style="font-size: 12px; color: #666; font-weight: bold;">默认批次数</label>
              <div style="display: flex; align-items: center; gap: 4px;">
              <select id="launchBatchDivide" style="padding: 5px 10px; border-radius: 5px; border: 1px solid #ddd; font-size: 12px; cursor: pointer;">
                <option value="1" ${launchDefaultBatchDivide === 1 ? 'selected' : ''}>1</option>
                <option value="2" ${launchDefaultBatchDivide === 2 ? 'selected' : ''}>2</option>
                <option value="3" ${launchDefaultBatchDivide === 3 ? 'selected' : ''}>3</option>
                <option value="4" ${launchDefaultBatchDivide === 4 ? 'selected' : ''}>4</option>
                <option value="5" ${launchDefaultBatchDivide === 5 ? 'selected' : ''}>5</option>
                <option value="6" ${launchDefaultBatchDivide === 6 ? 'selected' : ''}>6</option>
                <option value="7" ${launchDefaultBatchDivide === 7 ? 'selected' : ''}>7</option>
                <option value="8" ${launchDefaultBatchDivide === 8 ? 'selected' : ''}>8</option>
                <option value="9" ${launchDefaultBatchDivide === 9 ? 'selected' : ''}>9</option>
              </select>
              <span
                id="batchAutoIndicator"
                style="font-size: 10px; padding: 2px 6px; border-radius: 8px; cursor: pointer; font-weight: bold; user-select: none; white-space: nowrap;"
                title="点击切换自动/手动模式"
              >${autoBatchDivideEnabled ? '自动' : '手动'}</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <label style="font-size: 12px; color: #666; font-weight: bold;">快捷键自动加载</label>
              <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; padding: 5px 10px; border-radius: 5px; background: ${launchAutoConfirmBatchHotkey ? '#4CAF50' : '#ddd'}; color: ${launchAutoConfirmBatchHotkey ? '#fff' : '#333'}; font-size: 12px; font-weight: bold;">
                <input type="checkbox" id="launchAutoConfirmBatchHotkey" ${launchAutoConfirmBatchHotkey ? 'checked' : ''} style="display: none;">
                <span id="launchAutoConfirmBatchHotkeyText">${launchAutoConfirmBatchHotkey ? '开启' : '关闭'}</span>
              </label>
            </div>
          </div>
        </div>
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${beginPage}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${endPage}"
            />
          </div>
          <div id="pagesSlider"></div>
          <div id="pageCount" style="margin-top: 6px; font-size: 14px; color: #666;">
            已选择: <span id="selectedCount" style="font-weight: bold; color: #2196f3;">${endPage - beginPage + 1}</span> 张图片
          </div>
          <div id="pageCalcGroup" style="margin-top: 6px; font-size: 14px; color: #666; display: flex; flex-direction: column; gap: 5px; align-items: center;">
            <!-- 快捷预设按钮 -->
            <div style="display: flex; gap: 8px; margin-bottom: 3px;">
              <button
                type="button"
                class="preset-btn"
                data-value="49"
                style="padding: 6px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; transition: all 0.2s;"
                onmouseover="this.style.background='#45a049'"
                onmouseout="this.style.background='#4CAF50'"
              >
                +49
              </button>
              <button
                type="button"
                class="preset-btn"
                data-value="99"
                style="padding: 6px 16px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; transition: all 0.2s;"
                onmouseover="this.style.background='#0b7dda'"
                onmouseout="this.style.background='#2196F3'"
              >
                +99
              </button>
              <button
                type="button"
                class="preset-btn"
                data-value="199"
                style="padding: 6px 16px; background: #FF9800; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; transition: all 0.2s;"
                onmouseover="this.style.background='#e68900'"
                onmouseout="this.style.background='#FF9800'"
              >
                +199
              </button>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <span style="width: 60px; text-align: right;">开始页 +</span>
              <input
                type="number"
                id="pageAdd"
                class="pageInput"
                min="0"
                inputmode="numeric"
                pattern="[0-9]*"
                style="width: 80px;"
                value="${endPage - beginPage}"
              />
              <span style="width: 80px; text-align: left;">= 结尾页数</span>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <span style="width: 60px; text-align: right;">结尾页 -</span>
              <input
                type="number"
                id="pageSub"
                class="pageInput"
                min="0"
                inputmode="numeric"
                pattern="[0-9]*"
                style="width: 80px;"
                value="0"
              />
              <span style="width: 80px; text-align: left;">= 结尾页数</span>
            </div>
            <!-- 批次计算功能 -->
            <div style="margin-top: 6px; padding: 8px; background: #e3f2fd; border: 2px solid #2196f3; border-radius: 8px; max-width: 100%; box-sizing: border-box;">
              <div id="batchCalculatorTitle" style="text-align: center; margin-bottom: 4px; font-weight: bold; color: #1976d2; font-size: 14px;">
                批次计算器
              </div>
              <div style="display: flex; align-items: center; gap: 5px; justify-content: center; margin-bottom: 4px;">
                <span style="width: 60px; text-align: right;">总数</span>
                <input
                  type="number"
                  id="batchTotal"
                  class="pageInput"
                  min="1"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  style="width: 80px;"
                  value="${endPage - beginPage + 1}"
                  readonly
                />
                <span>÷</span>
                <div id="batchDivideControl" style="position: relative; display: inline-block; width: 60px; min-width: 60px; max-width: 60px;">
                  <input
                    type="text"
                    id="batchDivide"
                    class="pageInput"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    style="width: 100%; max-width: none; padding-right: 18px; box-sizing: border-box;"
                    value="${launchDefaultBatchDivide}"
                  />
                  <button
                    type="button"
                    id="batchDivideToggle"
                    style="position: absolute; top: 50%; right: 2px; transform: translateY(-50%); width: 16px; height: 24px; padding: 0; border: none; background: transparent; color: #333; cursor: pointer; font-size: 10px; line-height: 1;"
                    title="选择预设批次"
                  >v</button>
                  <div
                    id="batchDivideMenu"
                    style="display: none; position: absolute; top: calc(100% + 3px); left: 0; width: 100%; background: #fff; border: 1px solid #2196f3; border-radius: 6px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18); z-index: 9999; overflow: hidden;"
                  >
                    <button type="button" class="batch-divide-option" data-value="2" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">2</button>
                    <button type="button" class="batch-divide-option" data-value="3" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">3</button>
                    <button type="button" class="batch-divide-option" data-value="4" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">4</button>
                    <button type="button" class="batch-divide-option" data-value="5" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">5</button>
                    <button type="button" class="batch-divide-option" data-value="6" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">6</button>
                    <button type="button" class="batch-divide-option" data-value="7" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">7</button>
                    <button type="button" class="batch-divide-option" data-value="8" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">8</button>
                    <button type="button" class="batch-divide-option" data-value="9" style="display: block; width: 100%; padding: 4px 0; border: none; background: #fff; color: #111; cursor: pointer; text-align: center; font-size: 14px; line-height: 1.2; font-weight: 600; transition: background 0.15s, color 0.15s, transform 0.08s;" onmouseover="this.style.background='#2196f3';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='#111'" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">9</button>
                  </div>
                </div>
                <span>=</span>
                <input
                  type="number"
                  id="batchResult"
                  class="pageInput"
                  style="width: 80px;"
                  readonly
                />
              </div>
              <div id="batchInfo" style="margin-top: 4px; padding: 6px; background: #fff; border-radius: 6px; font-size: 13px; line-height: 1.4;">
                <div style="color: #1976d2; font-weight: bold; margin-bottom: 2px;">批次信息：</div>
                <div id="batchDetails" style="color: #333;"></div>
              </div>
            </div>
          </div>
          <!-- 导入未加载图片列表 - 跳页加载模式 -->
          <div style="margin-top: 6px; padding: 8px; background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; max-width: 100%; box-sizing: border-box;">
            <div style="display: block;">
              <div style="text-align: center; margin-bottom: 4px;">
                <span style="font-size: 14px; color: #856404; font-weight: bold; display: inline-block;">
                  跳页加载模式
                </span>
              </div>
              <div style="display: flex; align-items: stretch; gap: 8px;">
                <input
                  type="text"
                  id="filePathInput"
                  placeholder="点击选择文件..."
                  readonly
                  style="flex: 1; padding: 8px 10px; border: 2px solid #ffc107; border-radius: 6px; font-size: 14px; background: #fff; outline: none; color: #000000; font-weight: bold; cursor: pointer;"
                />
                <label style="display: flex; align-items: center; justify-content: center; width: 80px; background: #6c757d; color: white; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold; white-space: nowrap; transition: background 0.2s;">
                  浏览
                  <input
                    type="file"
                    id="importUnloadedList"
                    accept=".txt"
                    style="display: none;"
                  />
                </label>
              </div>
              <div id="importStatus" style="font-size: 13px; text-align: center; display: none; margin-top: 4px; padding: 4px; border-radius: 4px; line-height: 1.3;">
              </div>
              <div style="margin-top: 4px;">
                <div style="display: flex; align-items: stretch; gap: 8px;">
                  <input
                    type="text"
                    id="pastePageNumbers"
                    placeholder="或直接在此输入/粘贴页码"
                    style="flex: 1; padding: 8px 10px; border: 2px solid #ffc107; border-radius: 6px; font-size: 14px; background: #fff; outline: none; color: #000000; font-weight: bold;"
                  />
                  <button
                    type="button"
                    id="pastePageNumbersBtn"
                    style="display: flex; align-items: center; justify-content: center; width: 80px; background: #e91e63; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold; white-space: nowrap; transition: background 0.2s;"
                    onmouseover="this.style.background='#c2185b'"
                    onmouseout="this.style.background='#e91e63'"
                  >
                    粘贴
                  </button>
                </div>
                <div id="pasteStatus" style="font-size: 13px; text-align: center; display: none; margin-top: 3px; padding: 3px; border-radius: 4px; line-height: 1.2;"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      cancelButtonColor: '#d33',
      reverseButtons: true,
      customClass: {
        popup: 'swal2-no-icon'
      },
      didOpen() {
        // 隐藏图标区域
        const iconElement = document.querySelector('.swal2-icon');
        if (iconElement) {
          iconElement.style.display = 'none';
        }

        const swalPopup = document.querySelector('.swal2-popup');
        const triggerSwalConfirm = function () {
          const confirmBtn = document.querySelector('.swal2-confirm');
          if (confirmBtn && !confirmBtn.disabled) {
            confirmBtn.click();
          }
        };
        const isEditableHotkeyTarget = function (target) {
          if (!(target instanceof HTMLElement)) return false;
          if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
            return true;
          }
          return target.isContentEditable || !!target.closest('[contenteditable="true"]');
        };
        const fillBatchByHotkey = function (batchNum) {
          const batchButton = document.querySelector(
            `.batch-fill-btn[data-batch="${batchNum}"], .batch-autofill-btn[data-batch="${batchNum}"]`,
          );
          if (!(batchButton instanceof HTMLElement)) return false;
          batchButton.click();
          return true;
        };

        swalPopup?.addEventListener('keydown', function (e) {
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (e.isComposing || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
          if (e.target instanceof HTMLTextAreaElement) return;
          if (e.target instanceof HTMLElement && e.target.closest('#pastePageNumbers')) return;
          e.preventDefault();
          triggerSwalConfirm();
        });
        swalPopup?.addEventListener('keydown', function (e) {
          if (e.isComposing || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
          if (isEditableHotkeyTarget(e.target)) return;

          const key = e.code?.startsWith('Numpad') ? e.code.replace('Numpad', '') : e.key;
          if (!/^[1-9]$/.test(key)) return;

          const rawKey = parseInt(key, 10);
          const divide = parseInt(document.getElementById('launchBatchDivide')?.value, 10) || launchDefaultBatchDivide || 1;
          const batchNum = ((rawKey - 1) % divide) + 1;
          if (divide === 1) {
            e.preventDefault();
            e.stopPropagation();
            triggerSwalConfirm();
            return;
          }
          if (fillBatchByHotkey(batchNum)) {
            e.preventDefault();
            e.stopPropagation();
            if (autoConfirmBatchHotkeyInput?.checked) {
              setTimeout(() => {
                triggerSwalConfirm();
              }, 0);
            }
          }
        });

        const pageBeginInput = document.querySelector('#pageBegin');
        const pageEndInput = document.querySelector('#pageEnd');
        const pageAddInput = document.querySelector('#pageAdd');
        const pageSubInput = document.querySelector('#pageSub');
        const inputSlider = document.getElementById('pagesSlider');
        const autoConfirmBatchHotkeyInput = document.querySelector('#launchAutoConfirmBatchHotkey');
        const autoConfirmBatchHotkeyText = document.querySelector('#launchAutoConfirmBatchHotkeyText');
        let batchCalcBeginPage = beginPage;
        let batchCalcEndPage = endPage;
        const syncAutoConfirmBatchHotkeyToggle = function () {
          const toggleLabel = autoConfirmBatchHotkeyInput?.parentElement;
          if (!autoConfirmBatchHotkeyInput || !toggleLabel || !autoConfirmBatchHotkeyText) return;
          toggleLabel.style.background = autoConfirmBatchHotkeyInput.checked ? '#4CAF50' : '#ddd';
          toggleLabel.style.color = autoConfirmBatchHotkeyInput.checked ? '#fff' : '#333';
          autoConfirmBatchHotkeyText.textContent = autoConfirmBatchHotkeyInput.checked ? '开启' : '关闭';
        };
        autoConfirmBatchHotkeyInput?.addEventListener('change', function () {
          saveSettingsValue('autoConfirmBatchHotkey', this.checked);
          syncAutoConfirmBatchHotkeyToggle();
        });
        syncAutoConfirmBatchHotkeyToggle();

        const attachNumberWheelStepper = function (input, onChange) {
          if (!input) return;

          const wheelHandler = function (e) {
            const isFocused = document.activeElement === input;
            const isHovered = input.matches(':hover');
            if (!isFocused && !isHovered) return;

            e.preventDefault();

            const min = input.min !== '' ? parseInt(input.min, 10) : Number.NEGATIVE_INFINITY;
            const max = input.max !== '' ? parseInt(input.max, 10) : Number.POSITIVE_INFINITY;
            const step = Math.max(parseInt(input.step || '1', 10) || 1, 1);
            const fallbackValue = Number.isFinite(min) ? min : 0;
            const currentValue = parseInt(input.value || `${fallbackValue}`, 10) || fallbackValue;
            const nextValue = e.deltaY < 0 ? currentValue + step : currentValue - step;
            const clampedValue = Math.min(max, Math.max(min, nextValue));

            if (clampedValue === currentValue) return;

            input.value = clampedValue.toString();
            onChange?.();
          };

          input.addEventListener('wheel', wheelHandler, { passive: false });
          document.addEventListener('wheel', wheelHandler, { passive: false });
        };

        // 规则范围选择事件
        const scopeRadios = document.querySelectorAll('input[name="launchScope"]');
        const viewModeSelect = document.querySelector('#launchViewMode');

        scopeRadios.forEach(radio => {
          radio.addEventListener('change', function () {
            // 更新按钮样式
            scopeRadios.forEach(r => {
              const label = r.parentElement;
              if (r.checked) {
                label.style.background = '#2196f3';
                label.style.color = '#fff';
              } else {
                label.style.background = '#ddd';
                label.style.color = '#333';
              }
            });

            // 联动更新视图模式
            if (viewModeSelect) {
              const selectedScope = this.value;
              let targetViewMode;
              if (selectedScope === 'global') {
                targetViewMode = globalSettings.viewMode || 'Vertical';
              } else {
                targetViewMode = localSettings.viewMode || globalSettings.viewMode || 'Vertical';
              }
              viewModeSelect.value = targetViewMode;
            }
          });
        });

        if (inputSlider) {
          let updateCount = function (syncBatchRange = true) {
            // 跳页加载模式：显示实际加载的页数
            if (skipLoadMode) {
              const selectedCountEl = document.getElementById('selectedCount');
              if (selectedCountEl) {
                selectedCountEl.textContent = skipLoadPages.length.toString();
                selectedCountEl.style.color = '#ff6b6b'; // 红色表示跳页模式
              }
              return;
            }
            // 正常模式：实时更新选中图片数量（不验证）
            const begin = parseInt(pageBeginInput?.value ?? '0', 10) || beginPage;
            const end = parseInt(pageEndInput?.value ?? '0', 10) || endPage;
            const selectedCountEl = document.getElementById('selectedCount');
            if (selectedCountEl && !Number.isNaN(begin) && !Number.isNaN(end) && end >= begin) {
              selectedCountEl.textContent = (end - begin + 1).toString();
              selectedCountEl.style.color = '#2196f3';
            }
            // 同步更新增加页数输入框
            if (pageAddInput && !Number.isNaN(begin) && !Number.isNaN(end)) {
              pageAddInput.value = (end - begin).toString();
            }
            if (syncBatchRange) {
              batchCalcBeginPage = begin;
              batchCalcEndPage = end;
            }
            // 更新批次计算器的总数
            updateBatchCalculator();
          };
          const restoreBatchCalculatorRange = function () {
            if (!pageBeginInput || !pageEndInput || !pageAddInput) return;
            beginPage = batchCalcBeginPage;
            endPage = batchCalcEndPage;
            pageBeginInput.value = batchCalcBeginPage.toString();
            pageEndInput.value = batchCalcEndPage.toString();
            pageAddInput.value = (batchCalcEndPage - batchCalcBeginPage).toString();
            rangeSliderElement.value([batchCalcBeginPage, batchCalcEndPage]);
            updateCount(false);
          };

          // 批次计算器更新函数
          let updateBatchCalculator = function () {
            const batchTotalInput = document.getElementById('batchTotal');
            const batchDivideInput = document.getElementById('batchDivide');
            const batchResultInput = document.getElementById('batchResult');
            const batchDetailsDiv = document.getElementById('batchDetails');
            const batchInfoDiv = document.getElementById('batchInfo');
            const batchCalculatorTitle = document.getElementById('batchCalculatorTitle');

            if (!batchTotalInput || !batchDivideInput || !batchResultInput || !batchDetailsDiv) return;

            const begin = parseInt(pageBeginInput?.value ?? '0', 10) || beginPage;
            const end = parseInt(pageEndInput?.value ?? '0', 10) || endPage;
            const total = end - begin + 1;

            // 只有当开始页不是1，且结束页已经是最大页数时，才显示0（说明是后续批次，没有剩余页面了）
            if (begin > 1 && end >= manga.pages) {
              batchTotalInput.value = '0';
              batchDivideInput.value = '0';
              batchResultInput.value = '0';
              // 隐藏批次信息区域
              if (batchInfoDiv) {
                batchInfoDiv.style.display = 'none';
              }
              return;
            }

            // 显示批次信息区域
            if (batchInfoDiv) {
              batchInfoDiv.style.display = 'block';
            }

            const rawDivideValue = batchDivideInput.value.trim();

            if (!rawDivideValue) {
              batchTotalInput.value = total.toString();
              batchResultInput.value = '';
              batchDetailsDiv.innerHTML = '';
              return;
            }

            const parsedDivide = parseInt(rawDivideValue, 10);
            if (Number.isNaN(parsedDivide)) {
              batchTotalInput.value = total.toString();
              batchResultInput.value = '';
              batchDetailsDiv.innerHTML = '';
              return;
            }

            const divide = Math.max(1, parsedDivide);
            batchDivideInput.value = divide.toString();

            // 更新总数
            batchTotalInput.value = total.toString();

            // 计算每批次数量（向上取整）
            const perBatch = Math.ceil(total / divide);
            batchResultInput.value = perBatch.toString();

            // 生成批次信息
            let batchHTML = '';
            for (let i = 0; i < divide; i++) {
              const batchStart = begin + (i * perBatch);
              const batchEnd = Math.min(begin + ((i + 1) * perBatch) - 1, end);

              if (batchStart <= end) {
                // 只有第1批次显示填入按钮，其他批次显示填入按钮
                let batchBtn = '';
                if (i === 0 && batchEnd < end) {
                  // 第1批次：绿色填入按钮
                  batchBtn = `<button class="batch-fill-btn" data-start="${batchStart}" data-page="${batchEnd}" data-batch="${i + 1}" style="margin-left: 8px; padding: 6px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; transition: all 0.2s;">填入${i + 1}</button>`;
                } else if (i > 0) {
                  // 第2批次及以后：填入当前批次起始页和页数-1
                  const pageCount = batchEnd - batchStart;  // 当前批次的页数-1（用于"开始页+"）
                  batchBtn = `<button class="batch-autofill-btn" data-start="${batchStart}" data-count="${pageCount}" data-batch="${i + 1}" style="margin-left: 8px; padding: 6px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; transition: all 0.2s;">填入${i + 1}</button>`;
                }

                batchHTML += `<div style="margin-bottom: 5px;">第 ${i + 1} 批次: ${batchStart} - ${batchEnd} (共 ${batchEnd - batchStart + 1} 页) ${batchBtn}</div>`;

                // 只有当前批次结束页小于总结束页时，才显示下一批次起始页
                const nextStart = batchEnd + 1;
                if (batchEnd < end && nextStart <= end) {
                  batchHTML += `<div style="margin-left: 20px; color: #ff6b6b; font-weight: bold; margin-bottom: 8px;">→ 下批次起始页: ${nextStart}</div>`;
                }
              }
            }

            batchDetailsDiv.innerHTML = batchHTML;

            // 使用事件委托来处理按钮点击，避免重复绑定
            // 移除旧的事件监听器（如果存在）
            const oldListener = batchDetailsDiv._clickListener;
            if (oldListener) {
              batchDetailsDiv.removeEventListener('click', oldListener);
            }

            // 创建新的事件监听器
            const clickListener = function (e) {
              const target = e.target;

              // 处理第1批次的填入按钮
              if (target.classList.contains('batch-fill-btn')) {
                const batchStart = parseInt(target.getAttribute('data-start'), 10);
                const endPage = parseInt(target.getAttribute('data-page'), 10);
                const batchNum = parseInt(target.getAttribute('data-batch'), 10);

                if (pageAddInput && pageBeginInput && !isNaN(batchStart) && !isNaN(endPage)) {
                  beginPage = batchStart;
                  pageBeginInput.value = batchStart.toString();
                  const addValue = endPage - batchStart;
                  pageAddInput.value = addValue.toString();
                  changedAddInput();
                  setCurrentBatchLoadInfo(batchNum, batchStart, endPage);

                  // 第一批点击填入后，也把计算器归零
                  const batchTotalInput = document.getElementById('batchTotal');
                  const batchDivideInput = document.getElementById('batchDivide');
                  const batchResultInput = document.getElementById('batchResult');
                  const batchInfoDiv = document.getElementById('batchInfo');
                  if (batchTotalInput) batchTotalInput.value = '0';
                  if (batchDivideInput) batchDivideInput.value = '0';
                  if (batchResultInput) batchResultInput.value = '0';
                  if (batchInfoDiv) batchInfoDiv.style.display = 'none';

                  // 更新标题显示当前批次号
                  setBatchCalculatorCurrentTitle(batchNum);

                }
              }

              // 处理第2批次及以后的自动填入按钮
              if (target.classList.contains('batch-autofill-btn')) {
                const batchStart = target.getAttribute('data-start');
                const pageCount = target.getAttribute('data-count');
                const batchNum = parseInt(target.getAttribute('data-batch'), 10);

                if (batchStart && pageCount && pageBeginInput && pageAddInput) {
                  const batchStartNum = parseInt(batchStart, 10);
                  const pageCountNum = parseInt(pageCount, 10);
                  beginPage = batchStartNum;
                  pageBeginInput.value = batchStart;
                  pageAddInput.value = pageCount;
                  changedAddInput();
                  setCurrentBatchLoadInfo(batchNum, batchStartNum, batchStartNum + pageCountNum);

                  // 手动清空批次计算器
                  const batchTotalInput = document.getElementById('batchTotal');
                  const batchDivideInput = document.getElementById('batchDivide');
                  const batchResultInput = document.getElementById('batchResult');
                  const batchInfoDiv = document.getElementById('batchInfo');
                  if (batchTotalInput) batchTotalInput.value = '0';
                  if (batchDivideInput) batchDivideInput.value = '0';
                  if (batchResultInput) batchResultInput.value = '0';
                  if (batchInfoDiv) batchInfoDiv.style.display = 'none';

                  // 更新标题显示当前批次号
                  setBatchCalculatorCurrentTitle(batchNum);

                }
              }
            };

            // 绑定新的事件监听器
            batchDetailsDiv.addEventListener('click', clickListener);
            // 保存监听器引用以便下次移除
            batchDetailsDiv._clickListener = clickListener;
          };

          let changedInput = function () {
            if (
              (pageBeginInput && pageBeginInput.value === '') ||
              (pageEndInput && pageEndInput.value === '')
            ) {
              return;
            }
            const valBegin = validateMin(
              parseInt(pageBeginInput?.value ?? '0', 10),
              endPage,
              rangeSliderElement,
            );
            const valEnd = validateMax(
              parseInt(pageEndInput?.value ?? '0', 10),
              beginPage,
              rangeSliderElement,
            );
            if (pageBeginInput) pageBeginInput.value = valBegin.toString();
            if (pageEndInput) pageEndInput.value = valEnd.toString();
            beginPage = valBegin;
            endPage = valEnd;
            batchCalcBeginPage = valBegin;
            batchCalcEndPage = valEnd;
            rangeSliderElement.value([valBegin, valEnd]);
            // 更新选中图片数量
            const selectedCountEl = document.getElementById('selectedCount');
            if (selectedCountEl) selectedCountEl.textContent = (valEnd - valBegin + 1).toString();
            // 同步更新增加页数输入框
            if (pageAddInput) pageAddInput.value = (valEnd - valBegin).toString();
          };
          let changedAddInput = function () {
            if (pageAddInput && pageAddInput.value === '') return;
            const addVal = parseInt(pageAddInput?.value ?? '0', 10);
            if (Number.isNaN(addVal) || addVal < 0) return;
            let newEnd = beginPage + addVal;
            if (newEnd > manga.pages) newEnd = manga.pages;
            endPage = newEnd;
            if (pageEndInput) pageEndInput.value = newEnd.toString();
            rangeSliderElement.value([beginPage, newEnd]);
            // 更新选中图片数量
            const selectedCountEl = document.getElementById('selectedCount');
            if (selectedCountEl) selectedCountEl.textContent = (newEnd - beginPage + 1).toString();
          };
          let changedSubInput = function () {
            if (pageSubInput && pageSubInput.value === '') return;
            const subVal = parseInt(pageSubInput?.value ?? '0', 10);
            if (Number.isNaN(subVal) || subVal < 0) return;
            let newEnd = manga.pages - subVal;
            if (newEnd < beginPage) newEnd = beginPage;
            endPage = newEnd;
            if (pageEndInput) pageEndInput.value = newEnd.toString();
            rangeSliderElement.value([beginPage, newEnd]);
            // 更新选中图片数量
            const selectedCountEl = document.getElementById('selectedCount');
            if (selectedCountEl) selectedCountEl.textContent = (newEnd - beginPage + 1).toString();
            // 同步更新增加页数输入框
            if (pageAddInput) pageAddInput.value = (newEnd - beginPage).toString();
          };
          const rangeSliderElement = rangeSlider(inputSlider, {
            min: 1,
            max: manga.pages,
            value: [beginPage, endPage],
            onInput(value, userInteraction) {
              if (userInteraction) {
                [beginPage, endPage] = value;
                if (pageBeginInput) {
                  pageBeginInput.value = beginPage.toString();
                }
                if (pageEndInput) {
                  pageEndInput.value = endPage.toString();
                }
                // 更新选中图片数量
                const selectedCountEl = document.getElementById('selectedCount');
                if (selectedCountEl) selectedCountEl.textContent = (endPage - beginPage + 1).toString();
                // 同步更新增加页数输入框
                if (pageAddInput) pageAddInput.value = (endPage - beginPage).toString();
              }
            },
          });
          // change 事件验证并修正输入值，keyup/input 只更新计数显示
          pageBeginInput?.addEventListener('change', changedInput);
          pageEndInput?.addEventListener('change', changedInput);
          ['keyup', 'input'].forEach(event => {
            pageBeginInput?.addEventListener(event, updateCount);
            pageEndInput?.addEventListener(event, updateCount);
          });
          // 增加页数输入框事件
          pageAddInput?.addEventListener('change', changedAddInput);
          pageAddInput?.addEventListener('keyup', changedAddInput);

          // 批次计算器事件
          
          const batchDivideInput = document.getElementById('batchDivide');
          const batchDivideControl = document.getElementById('batchDivideControl');
          const batchDivideToggle = document.getElementById('batchDivideToggle');
          const batchDivideMenu = document.getElementById('batchDivideMenu');
          const launchBatchDivideSelect = document.getElementById('launchBatchDivide');
          const batchAutoIndicator = document.getElementById('batchAutoIndicator');

          // AI魔改：更新自动/手动指示器样式
          const updateBatchAutoIndicator = function (autoEnabled) {
            if (!batchAutoIndicator) return;
            if (autoEnabled) {
              batchAutoIndicator.textContent = '自动';
              batchAutoIndicator.style.background = '#2196f3';
              batchAutoIndicator.style.color = '#fff';
            } else {
              batchAutoIndicator.textContent = '手动';
              batchAutoIndicator.style.background = '#e0e0e0';
              batchAutoIndicator.style.color = '#666';
            }
          };
          updateBatchAutoIndicator(autoBatchDivideEnabled);

          // AI魔改：点击指示器切换自动/手动模式
          batchAutoIndicator?.addEventListener('click', function () {
            const currentAuto = getSettingsValue('autoBatchDivideEnabled') !== false;
            const newAuto = !currentAuto;
            saveSettingsValue('autoBatchDivideEnabled', newAuto);
            updateBatchAutoIndicator(newAuto);
            if (newAuto && launchBatchDivideSelect) {
              // 重新启用自动模式，刷新为智能计算值
              const smartVal = Math.min(9, Math.max(1, autoBatchDivide(totalPages)));
              launchBatchDivideSelect.value = smartVal.toString();
              if (batchDivideInput) batchDivideInput.value = smartVal.toString();
              updateBatchCalculator();
              // AI魔改：同步刷新页面上的「界面启动」按钮文字
              const pageBtn = document.getElementById('StartMOV_Settings');
              if (pageBtn) {
                pageBtn.innerText = `自动${smartVal}批`;
              }
            } else if (!newAuto) {
              // 切到手动模式时，保留当前值并刷新按钮
              const curVal = parseInt(launchBatchDivideSelect?.value, 10) || 1;
              const pageBtn = document.getElementById('StartMOV_Settings');
              if (pageBtn) {
                pageBtn.innerText = `手动${curVal}批`;
              }
            }
          });

          launchBatchDivideSelect?.addEventListener('change', function () {
            const divide = parseInt(this.value, 10);
            if (Number.isNaN(divide)) return;
            const normalizedDivide = Math.min(9, Math.max(1, divide));
            this.value = normalizedDivide.toString();
            saveSettingsValue('defaultBatchDivide', normalizedDivide);
            // AI魔改：手动改批次后关闭自动模式
            saveSettingsValue('autoBatchDivideEnabled', false);
            updateBatchAutoIndicator(false);
            // AI魔改：同步刷新页面上的「界面启动」按钮文字
            const pageBtn = document.getElementById('StartMOV_Settings');
            if (pageBtn) {
              pageBtn.innerText = `手动${normalizedDivide}批`;
            }
            restoreBatchCalculatorRange();
            resetBatchCalculatorTitle();
            if (batchDivideInput) {
              batchDivideInput.value = normalizedDivide.toString();
            }
            updateBatchCalculator();
          });
          batchDivideInput?.addEventListener('change', updateBatchCalculator);
          batchDivideInput?.addEventListener('keyup', updateBatchCalculator);
          batchDivideInput?.addEventListener('input', updateBatchCalculator);
          batchDivideToggle?.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!batchDivideMenu) return;
            batchDivideMenu.style.display =
              batchDivideMenu.style.display === 'block' ? 'none' : 'block';
          });
          batchDivideMenu?.addEventListener('click', function (e) {
            const target = e.target;
            if (!(target instanceof HTMLElement)) return;
            const option = target.closest('.batch-divide-option');
            if (!(option instanceof HTMLElement) || !batchDivideInput) return;
            batchDivideInput.value = option.dataset.value || '2';
            batchDivideMenu.style.display = 'none';
            updateBatchCalculator();
            batchDivideInput.focus();
          });
          document.addEventListener('click', function (e) {
            if (!batchDivideControl || !batchDivideMenu) return;
            if (!batchDivideControl.contains(e.target)) {
              batchDivideMenu.style.display = 'none';
            }
          });

          // 初始化批次计算器
          updateBatchCalculator();

          // 预设按钮点击事件
          document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', function () {
              const value = this.getAttribute('data-value');
              if (pageAddInput && value) {
                pageAddInput.value = value;
                // 触发change事件以更新结尾页
                changedAddInput();
                // 添加视觉反馈
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                  this.style.transform = 'scale(1)';
                }, 100);
              }
            });
          });

          // ========== 跳页加载模式：导入未加载图片列表 ==========
          const importInput = document.querySelector('#importUnloadedList');
          const filePathInput = document.querySelector('#filePathInput');
          const importStatus = document.querySelector('#importStatus');

          // 处理文件内容的通用函数
          function processFileContent(content, fileName = '') {
            try {
              const lines = content.split('\n');
              const pageNumbers = [];

              // 解析每一行，提取页码（支持逗号分隔和每行一个的格式）
              lines.forEach(line => {
                const trimmed = line.trim();
                // 跳过标题行、空行和说明文字
                if (trimmed &&
                  !trimmed.includes('未成功加载') &&
                  !trimmed.includes('可能还在加载') &&
                  !trimmed.includes('加载失败')) {
                  // 支持逗号分隔的多个页码（兼容中文逗号）
                  const parts = trimmed.replace(/[，]/g, ',').split(',');
                  parts.forEach(part => {
                    const num = parseInt(part.trim(), 10);
                    if (!isNaN(num) && num >= 1 && num <= manga.pages) {
                      pageNumbers.push(num);
                    }
                  });
                }
              });

              if (pageNumbers.length > 0) {
                // 去重并排序
                const uniquePages = [...new Set(pageNumbers)].sort((a, b) => a - b);

                logScript(`Parsed ${pageNumbers.length} page numbers, ${uniquePages.length} unique pages:`, uniquePages);

                // 设置全局变量
                skipLoadMode = true;
                skipLoadPages = uniquePages;
                currentBatchLoadInfo = null;

                // 设置页面范围为1到最大页（但实际只加载列表中的页）
                const firstPage = uniquePages[0];
                const lastPage = uniquePages[uniquePages.length - 1];

                if (pageBeginInput) pageBeginInput.value = 1;
                if (pageEndInput) pageEndInput.value = manga.pages;

                // 更新滑块
                if (inputSlider && rangeSliderElement) {
                  rangeSliderElement.value([1, manga.pages]);
                }

                // 更新计数
                updateCount();

                // 显示状态
                if (importStatus) {
                  const rangeText = uniquePages.length <= 10
                    ? uniquePages.join(', ')
                    : `${firstPage}...${lastPage}`;
                  importStatus.innerHTML = `
                    <div style="color: #155724; font-weight: bold; background: #d4edda; padding: 8px; border-radius: 4px; border: 1px solid #c3e6cb;">
                      ✓ 已启用跳页模式${fileName ? ` (${fileName})` : ''}<br/>
                      <span style="font-size: 12px; color: #856404; margin-top: 4px; display: inline-block;">
                        将加载 ${uniquePages.length} 个页面: ${rangeText}
                      </span>
                    </div>
                  `;
                  importStatus.style.display = 'block';
                }

                // 禁用页面范围输入框（因为使用跳页模式）
                if (pageBeginInput) {
                  pageBeginInput.disabled = true;
                  pageBeginInput.style.background = '#e9ecef';
                  pageBeginInput.style.cursor = 'not-allowed';
                }
                if (pageEndInput) {
                  pageEndInput.disabled = true;
                  pageEndInput.style.background = '#e9ecef';
                  pageEndInput.style.cursor = 'not-allowed';
                }

                return true;
              } else {
                throw new Error('未找到有效的页码');
              }
            } catch (error) {
              logScript('Failed to parse file:', error);
              if (importStatus) {
                importStatus.innerHTML = `
                  <div style="color: #721c24; background: #f8d7da; padding: 8px; border-radius: 4px; border: 1px solid #f5c6cb;">
                    ✗ 解析失败: ${error.message}
                  </div>
                `;
                importStatus.style.display = 'block';
              }
              return false;
            }
          }

          // 文件选择器
          if (importInput) {
            importInput.addEventListener('change', function (e) {
              const file = e.target.files[0];
              if (!file) return;

              // 更新文本框显示文件名
              if (filePathInput) {
                filePathInput.value = file.name;
              }

              const reader = new FileReader();
              reader.onload = function (event) {
                processFileContent(event.target.result, file.name);
              };
              reader.readAsText(file);
            });
          }

          // 文本框粘贴路径处理
          if (filePathInput) {
            // 点击输入框时触发文件选择
            filePathInput.addEventListener('click', function () {
              if (importInput) {
                importInput.click();
              }
            });

            // 设置为只读，防止手动输入（因为无法直接读取本地路径）
            filePathInput.readOnly = true;
            filePathInput.style.cursor = 'pointer';
            filePathInput.placeholder = '点击选择TXT文件';
          }

          // ========== 粘贴页码序号功能 ==========
          const pasteInput = document.querySelector('#pastePageNumbers');
          const pasteBtn = document.querySelector('#pastePageNumbersBtn');
          const pasteStatus = document.querySelector('#pasteStatus');

          if (pasteInput) {
            const normalizePastedPageNumbers = (text, addTrailingComma = true) => {
              const normalizedText = (text || '')
                .replace(/[，]/g, ',')
                .replace(/[\r\n\t ]+/g, ',')
                .replace(/,+/g, ',')
                .replace(/^,|,$/g, '')
                .trim();
              if (!normalizedText || !addTrailingComma) {
                return normalizedText;
              }
              return normalizedText.endsWith(',') ? normalizedText : `${normalizedText},`;
            };

            const updateFromInput = () => {
              const inputText = pasteInput.value.trim();
              if (!inputText) {
                // 如果输入框清空了，且没有导入文件，则恢复正常模式
                if (importInput && !importInput.files?.[0]) {
                  skipLoadMode = false;
                  skipLoadPages = [];
                  if (importStatus) importStatus.style.display = 'none';
                  // 恢复页面范围输入框
                  if (pageBeginInput) {
                    pageBeginInput.disabled = false;
                    pageBeginInput.style.background = '#fff';
                    pageBeginInput.style.cursor = 'auto';
                  }
                  if (pageEndInput) {
                    pageEndInput.disabled = false;
                    pageEndInput.style.background = '#fff';
                    pageEndInput.style.cursor = 'auto';
                  }
                  updateCount();
                }
                return;
              }
              // 解析并应用
              const content = normalizePastedPageNumbers(inputText, false);
              processFileContent(content, '输入/粘贴');
            };

            // 监听输入事件（手动输入也会触发）
            pasteInput.addEventListener('input', updateFromInput);
            pasteInput.addEventListener('change', updateFromInput);
            pasteInput.addEventListener('blur', function () {
              const normalizedText = normalizePastedPageNumbers(pasteInput.value);
              if (normalizedText && pasteInput.value !== normalizedText) {
                pasteInput.value = normalizedText;
                updateFromInput();
              }
            });
            pasteInput.addEventListener('paste', function () {
              requestAnimationFrame(() => {
                const normalizedText = normalizePastedPageNumbers(pasteInput.value);
                if (normalizedText && pasteInput.value !== normalizedText) {
                  pasteInput.value = normalizedText;
                }
                updateFromInput();
              });
            });

            // 粘贴按钮：仅负责从剪贴板读取并填入，填入会自动触发 input 事件
            if (pasteBtn) {
              pasteBtn.addEventListener('click', async function () {
                try {
                  const clipText = normalizePastedPageNumbers(await navigator.clipboard.readText());
                  if (clipText) {
                    const currentVal = pasteInput.value.trim();
                    if (currentVal) {
                      // 如果末尾没有逗号，则补一个
                      const lastChar = currentVal.charAt(currentVal.length - 1);
                      const separator = (lastChar === ',' || lastChar === '，') ? '' : ',';
                      pasteInput.value = currentVal + separator + clipText;
                    } else {
                      pasteInput.value = clipText;
                    }
                    updateFromInput(); // 触发解析
                    
                    // 粘贴完成后自动点击确定按钮（3秒延迟）
                    setTimeout(() => {
                      triggerSwalConfirm();
                    }, 3000);
                  }
                } catch (e) {
                  // 如果无法读取剪贴板（权限问题），提示用户手动粘贴
                  if (pasteStatus) {
                    pasteStatus.innerHTML = '<div style="color: #856404; background: #fff3cd; padding: 8px; border-radius: 4px; border: 1px solid #ffeeba;">无法直接读取剪贴板，请手动在框内粘贴</div>';
                    pasteStatus.style.display = 'block';
                    setTimeout(() => { pasteStatus.style.display = 'none'; }, 3000);
                  }
                }
              });
            }

            // 输入框回车也处理
            pasteInput.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === 'NumpadEnter') {
                const normalizedText = normalizePastedPageNumbers(pasteInput.value);
                if (normalizedText && pasteInput.value !== normalizedText) {
                  pasteInput.value = normalizedText;
                }
                updateFromInput();
                e.preventDefault();
                triggerSwalConfirm();
              }
            });
          }

          // 减去广告页输入框事件
          pageSubInput?.addEventListener('change', changedSubInput);
          pageSubInput?.addEventListener('keyup', changedSubInput);
        }
      },
    };
    Swal.fire(options).then(result => {
      if (result.value) {
        // 获取用户选择的规则范围
        const selectedScope = document.querySelector('input[name="launchScope"]:checked')?.value;
        if (selectedScope === 'local' && !isSettingsLocal()) {
          toggleLocalSettings(true);
        } else if (selectedScope === 'global' && isSettingsLocal()) {
          toggleLocalSettings(false);
        }

        // 获取用户选择的视图模式
        const selectedViewMode = document.querySelector('#launchViewMode')?.value;
        if (selectedViewMode && selectedViewMode !== getSettingsValue('viewMode')) {
          saveSettingsValue('viewMode', selectedViewMode);
        }

        logScript(`Choice: ${beginPage} - ${endPage}, Scope: ${selectedScope}, ViewMode: ${selectedViewMode}`);
        manga.begin = beginPage;
        manga.pages = endPage;
        updateDisplayedMangaTitle(manga);
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        if (shouldRestoreStartMOVContainer && startMOVContainer) {
          startMOVContainer.style.display = restoreStartMOVContainerDisplay;
        }
        logScript(result.dismiss);
      }
    });
  }
  function createLateStartButton(site, beginning, manga = null) {
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'StartMOVContainer';
    
    // 快速启动按钮
    const quickButton = document.createElement('button');
    quickButton.innerText = '快速启动';
    quickButton.id = 'StartMOV_Quick';
    quickButton.title = '无界面快速启动';
    quickButton.className = 'mov-button';
    quickButton.onclick = async () => {
      try {
        const mangaData = manga || await site.run();
        currentBatchLoadInfo = null;
        mangaData.begin = beginning || mangaData.begin || 1;
        updateDisplayedMangaTitle(mangaData);
        viewer(mangaData).then(() => logScript('Page loaded (Quick Start)'));
      } catch (error) {
        logScript('Quick start error:', error);
      }
    };
    
    // 界面启动按钮 — AI魔改：直接显示批次信息
    const calcAutoBatch = (pages) => pages > 600 ? 8 : pages > 350 ? 4 : pages > 250 ? 2 : 1;
    const isAutoBatch = getSettingsValue('autoBatchDivideEnabled') !== false;
    let batchButtonLabel = '界面启动';
    if (manga) {
      const totalP = (manga.pages || 0) - (beginning || 1) + 1;
      const batchVal = isAutoBatch
        ? Math.min(9, Math.max(1, calcAutoBatch(totalP)))
        : Math.min(9, Math.max(1, parseInt(getSettingsValue('defaultBatchDivide') ?? 4, 10) || 4));
      const modeTag = isAutoBatch ? '自动' : '手动';
      batchButtonLabel = `${modeTag}${batchVal}批`;
    }
    const settingsButton = document.createElement('button');
    settingsButton.innerText = batchButtonLabel;
    settingsButton.id = 'StartMOV_Settings';
    settingsButton.title = '打开启动界面';
    settingsButton.className = 'mov-button';
    settingsButton.onclick = () => {
      lateStart(site, beginning, manga).catch(logScript);
    };
    
    buttonContainer.appendChild(quickButton);
    buttonContainer.appendChild(settingsButton);
    document.body.appendChild(buttonContainer);
    
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(startButton + rangeSliderStyles));
    document.head.appendChild(style);
    logScript('Start Buttons added to page (Quick Start & UI Start)', buttonContainer);
  }
  function showWaitPopup(site, manga) {
    Swal.fire({
      title: getLocaleString('STARTING'),
      html: html`${manga.begin && manga.begin > 1
        ? `${getLocaleString('RESUME')}${manga.begin}.<br/>`
        : ''}${getLocaleString('WAITING')}`,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      timer: 3e3,
    }).then(result => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        currentBatchLoadInfo = null;
        updateDisplayedMangaTitle(manga);
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        createLateStartButton(site, manga.begin ?? 0, manga);
        logScript(result.dismiss);
      }
    });
  }
  async function preparePage([site, manga]) {
    logScript(`Found Pages: ${manga.pages} in ${site.name}`);
    if (!manga.title) {
      manga.title = document.querySelector('title')?.textContent?.trim();
    }
    manga.begin = isBookmarked() ?? manga.begin ?? 1;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    giveToWindow('MOV', (startPage, endPage) => {
      if (startPage !== void 0) {
        manga.begin = startPage;
      }
      if (endPage !== void 0) {
        manga.pages = endPage;
      }
      currentBatchLoadInfo = null;
      updateDisplayedMangaTitle(manga);
      viewer(manga).then(() => logScript('Page loaded'));
    });
    switch (site.start ?? getSettingsValue('loadMode')) {
      case 'never':
        createLateStartButton(site, manga.begin, manga);
        break;
      case 'always':
        viewer(manga).then(() => logScript('Page loaded'));
        break;
      // case 'wait':
      default:
        showWaitPopup(site, manga);
        break;
    }
  }
  async function start(sites) {
    logScript(
      `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getDevice()} ${getBrowser()} with ${getEngine()}`,
    );
    if (allowUpload()) return;
    logScript(sites.length, 'Known Manga Sites:', sites);
    const foundSites = sites.filter(s => s.url.test(window.location.href));
    logScript(foundSites.length, 'Found sites:', foundSites);
    const testedSites = foundSites.map(async site => {
      logScript(`Testing site: ${site.name}`);
      return new Promise((resolve, reject) => {
        Promise.all([
          testTime(site),
          testElement(site),
          testAttribute(site),
          testVariable(site),
          testFunc(site),
        ])
          .then(async () => site.run())
          .then(manga =>
            manga.pages > 0
              ? resolve([site, manga])
              : reject(new Error(`${site.name} found ${manga.pages} pages`)),
          );
      });
    });
    Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
      fastestIndex => {
        testedSites.forEach((_promise, i) => {
          if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
        });
        testedSites[fastestIndex].then(result => {
          preparePage(result);
        });
      },
    );
  }

  start(sites).catch(logScript);
})();
