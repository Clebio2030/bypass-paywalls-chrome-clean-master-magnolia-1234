var ext_api = (typeof browser === 'object') ? browser : chrome;
var url_loc = (typeof browser === 'object') ? 'firefox' : 'chrome';
var manifestData = ext_api.runtime.getManifest();
var ext_manifest_version = manifestData.manifest_version;
var custom_switch = ((manifestData.optional_permissions && manifestData.optional_permissions.length) || (manifestData.optional_host_permissions && manifestData.optional_host_permissions.length));

// htmlviewer: clean layout
ext_api.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  if (tabs && tabs[0] && ((tabs[0].url === 'about:blank' && tabs[0].title !== 'about:blank') || tabs[0].url === 'https://codebeautify.org/htmlviewer')) {
    let tabId = tabs[0].id;
    if (ext_manifest_version === 2) {
      ext_api.tabs.executeScript(tabId, {
        file: '/options/htmlviewer.js'
      }, function (res) {
        if (ext_api.runtime.lastError || res[0]) {
          return;
        }
      });
    } else if (ext_manifest_version === 3) {
      ext_api.scripting.executeScript({
        target: {tabId: tabId},
        files: ["/options/htmlviewer.js"]
      })
    }
  }
});

function popup_show_toggle(domain, enabled) {
  if (domain) {
    var site_switch_span = document.getElementById('site_switch_span');
    let labelEl = document.createElement('label');
    labelEl.setAttribute('class', 'switch');
    let inputEl = document.createElement('input');
    inputEl.setAttribute('id', 'site_switch');
    inputEl.setAttribute('type', 'checkbox');
    if (enabled)
      inputEl.setAttribute('checked', true);
    labelEl.appendChild(inputEl);
    let spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'slider round');
    spanEl.setAttribute('title', 'en/disable current site/group in BPC');
    labelEl.appendChild(spanEl);
    site_switch_span.appendChild(labelEl);
    document.getElementById("site_switch").addEventListener('click', function () {
      ext_api.runtime.sendMessage({
        request: 'site_switch'
      });
      //open(location).close();
    });
  }
};

ext_api.runtime.sendMessage({
  request: 'popup_show_toggle'
});
ext_api.runtime.onMessage.addListener(function (message, sender) {
  if (message.msg === 'popup_show_toggle' && message.data) {
    popup_show_toggle(message.data.domain, message.data.enabled)
  }
});

var cookie_domain;
ext_api.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  if (tabs && tabs[0] && /^http/.test(tabs[0].url)) {
    let hostname = new URL(tabs[0].url).hostname;
    cookie_domain = getCookiePermDomain(hostname);
  }
});

document.getElementById("clear_cookies").addEventListener('click', function () {
if (custom_switch)
  ext_api.permissions.request({
    origins: ["*://*." + cookie_domain + "/*"]
  }, function (granted) {
    if (granted) {
      ext_api.runtime.sendMessage({
        request: 'clear_cookies'
      });
    }
  });
else
  ext_api.permissions.contains({
    origins: ["*://*." + cookie_domain + "/*"]
  }, function (result) {
    if (result) {
      ext_api.runtime.sendMessage({
        request: 'clear_cookies'
      });
    }
  });
});

function showArchiveLinks() {
  ext_api.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    if (tabs && tabs[0] && /^http/.test(tabs[0].url)) {
      let url = tabs[0].url;
      let hostname = urlHost(url);
      let url_enc = encodeURIComponent(url);
      let archive_array = {
        'Archive.today': 'https://archive.today?run=1&url=' + url_enc,
        'Clearthis.page': 'https://clearthis.page?u=' + url_enc,
        'Google Search Tool\n(see help - troubleshooting)': 'https://search.google.com/test/rich-results?url=' + url_enc
      };
      let archive_id = document.querySelector('span#archive');
      if (archive_id) {
        archive_id.appendChild(document.createTextNode('Open tab in:'));
        for (let key in archive_array) {
          let elem_div = document.createElement('div');
          let elem = document.createElement('a');
          elem.innerText = key;
          if (!(matchDomain(['clearthis.page', 'google.com'], hostname) || hostname.match(/^archive\.\w{2}$/))) {
            elem.href = archive_array[key];
            elem.title = elem.href;
            elem.target = '_blank';
            elem_div.appendChild(elem);
            archive_id.appendChild(elem_div);
          }
        }
      }
    }
  });
}
showArchiveLinks();

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

function closeButton() {
  window.close();
}

function getCookiePermDomain(hostname) {
  let domain = hostname.replace(/^(www|amp(html)?|m|wap)(\d)?\./, '');
  let domain_split = domain.split('.');
  let num = 2;
  if (domain_split.length > 2 && domain.match(/(\w){2,4}\.(\w){2}$/))
    num = 3;
  domain = domain_split.slice(-num).join('.');
  return domain;
}

document.getElementById("button-close").addEventListener('click', closeButton);
