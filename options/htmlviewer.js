
if (window.location.href === 'https://codebeautify.org/htmlviewer') {
  let htmlviewer = document.querySelector('head > link[rel="canonical"][href="https://codebeautify.org/htmlviewer"]');
  if (!htmlviewer) {
    let ads = 'div.OUTBRAIN, div[id^="taboola-"], div.ad-container, div[class*="-ad-container"], div[class*="_ad-container"], div.arc_ad, div[id^="adv-"], div[class^="ad-"], div[class^="ad_"], div[class^="advert"], aside.ad';
    hideDOMStyle(ads, 10);
    let cookie_consent = 'div#didomi-host, div#onetrust-consent-sdk, div[id^="sp_message_container"], div#CybotCookiebotDialog, div#usercentrics-root, div.cmp-root-container';
    hideDOMStyle(cookie_consent, 11);
    let cybot_fade = document.querySelector('div#CybotCookiebotDialogBodyUnderlay');
    if (cybot_fade)
      cybot_fade.remove();
    let html_noscroll = ['cmp-modal-open', 'sp-message-open'];
    for (let elem of html_noscroll) {
      let noscroll = document.querySelector('html[class~="' + elem + '"]');
      if (noscroll)
        noscroll.classList.remove(elem);
    }
    let body_noscroll = ['didomi-popup-open', 'no-scroll', 'overflowHidden', 'showFirstLayer'];
    for (let elem of body_noscroll) {
      let noscroll = document.querySelector('body[class~="' + elem + '"]');
      if (noscroll)
        noscroll.classList.remove(elem);
    }
    let overflow_hidden = document.querySelector('body[style*="overflow: hidden;"]');
    if (overflow_hidden)
      overflow_hidden.style.overflow = 'auto';

    unhideDataImages();
    let hide;
    let canonical = document.querySelector('head > link[rel="canonical"][href], head > meta[property="og:url"][content]');
    if (canonical) {
      let canonical_url = canonical.href || canonical.content;
      let hostname = urlHost(canonical_url);
      correctLinks(hostname);
      unhideHostImages(hostname);

      if (hostname.endsWith('.de')) {
        if (matchUrlDomain('augsburger-allgemeine.de', canonical_url)) {
          hide = 'div.pt_onlinestory';
        } else if (matchUrlDomain('die-tagespost.de', canonical_url)) {
          hide = 'section#footer-popup';
        } else if (matchUrlDomain('lkz.de', canonical_url)) {
          let article_hidden = document.querySelector('div#main');
          if (article_hidden)
            article_hidden.removeAttribute('id');
          hide = 'div.nfy-element-ad, div.error-screen';
        } else if (matchUrlDomain('main-echo.de', canonical_url)) {
          let hidden_elems = document.querySelectorAll('[hidden]');
          for (let elem of hidden_elems)
            elem.removeAttribute('hidden');
          hide = 'div[id^="traffective-ad-"]';
        } else if (matchUrlDomain('mainpost.de', canonical_url)) {
          hide = 'div.aa-first-layer';
        } else if (matchUrlDomain(['noz.de', 'shz.de'], canonical_url)) {
          hide = 'div.msn-ads';
        } else if (matchUrlDomain('wissenschaft.de', canonical_url)) {
          hide = 'div#lightbox';
        }
      } else if (hostname.endsWith('.fi')) {
        if (matchUrlDomain(['aamulehti.fi', 'hs.fi', 'is.fi'], canonical_url)) {
          hide = 'header, footer, div.article-actions, div.skip-link, article.list, iframe[data-testid="iframe-embed"]';
          let image_containers = document.querySelectorAll('div.aspect-ratio-container');
          for (let elem of image_containers)
            elem.classList.remove('aspect-ratio-container');
        }
      } else if (hostname.endsWith('.fr')) {
        if (matchUrlDomain('humanite.fr', canonical_url)) {
          hide = 'tab-bar-component, div#form_don';
        }
      } else {
        if (matchUrlDomain(['businesslive.co.za', 'timeslive.co.za'], canonical_url)) {
          hide = 'div#gdpr-overlay';
        } else if (matchUrlDomain(['ibj.com', 'insideindianabusiness.com', 'theindianalawyer.com'], canonical_url)) {
          hide = 'header#masthead, header.site-header, nav, footer, aside#secondary, div.article-audio, div.article-left-rail, div.promo-container, div.toolbar';
          document.querySelectorAll('article p').forEach(e => e.removeAttribute('style'));
        } else if (matchUrlDomain('investorschronicle.co.uk', canonical_url)) {
          hide = 'div#specialist__renderer--header';
        } else if (matchUrlDomain('nouvelobs.com', canonical_url)) {
          hide = 'div.paywall';
        } else if (matchUrlDomain('repubblica.it', canonical_url)) {
          hide = 'div.cookiewall, div[data-src^="//box.kataweb.it/"]';
        } else if (matchUrlDomain('telecompaper.com', canonical_url)) {
          hide = 'div[role="dialog"]';
        }
      }
    }
    if (hide)
      hideDOMStyle(hide);
  }
}

function matchDomain(domains, hostname = window.location.hostname) {
  let matched_domain = false;
  if (typeof domains === 'string')
    domains = [domains];
  domains.some(domain => (hostname === domain || hostname.endsWith('.' + domain)) && (matched_domain = domain));
  return matched_domain;
}

function urlHost(url) {
  if (/^http/.test(url)) {
    try {
      return new URL(url).hostname;
    } catch (e) {
      console.log(`url not valid: ${url} error: ${e}`);
    }
  }
  return url;
}

function matchUrlDomain(domains, url) {
  return matchDomain(domains, urlHost(url));
}

function hideDOMStyle(selector, id = 1) {
  let style = document.querySelector('head > style#ext'+ id);
  if (!style && document.head) {
    let sheet = document.createElement('style');
    sheet.id = 'ext' + id;
    sheet.innerText = selector + ' {display: none !important;}';
    document.head.appendChild(sheet);
  }
}

function correctLinks(hostname) {
  let links = document.querySelectorAll('a[href^="/"], link[rel*="stylesheet"][href^="/"]');
  for (let elem of links)
    elem.href = elem.href.replace('codebeautify.org', hostname);
}

function unhideHostImages(hostname) {
  let hidden_images = document.querySelectorAll('img[src^="/"]');
  for (let elem of hidden_images) {
    elem.src = elem.src.replace('codebeautify.org', hostname);
    elem.removeAttribute('srcset');
    let sources = elem.parentNode.querySelectorAll('source[srcset]');
    for (let source of sources)
      source.removeAttribute('srcset');
  }
}

function unhideDataImages() {
  let hidden_images = document.querySelectorAll('img[src^="data:image/"]');
  for (let elem of hidden_images) {
    if (elem.getAttribute('data-src'))
      elem.src = elem.getAttribute('data-src');
    else if (elem.parentNode) {
      let source = elem.parentNode.querySelector('source[data-srcset]');
      if (source) {
        elem.src = source.getAttribute('data-srcset').split(/[\?\s]/)[0];
      }
    }
  }
}
