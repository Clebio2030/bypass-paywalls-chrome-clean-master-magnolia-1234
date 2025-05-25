var ext_api = (typeof browser === 'object') ? browser : chrome;
var url_loc = (typeof browser === 'object') ? 'firefox' : 'chrome';
var manifestData = ext_api.runtime.getManifest();
var ext_manifest_version = manifestData.manifest_version;
var navigator_ua = navigator.userAgent;
var navigator_ua_mobile = navigator_ua.toLowerCase().includes('mobile');
var chrome_android_browser = navigator_ua_mobile && (url_loc === 'chrome');
var custom_switch = ((manifestData.optional_permissions && manifestData.optional_permissions.length) || (manifestData.optional_host_permissions && manifestData.optional_host_permissions.length));

window.addEventListener("load", function () {
    document.getElementById("button-close").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInShown": true,
            "customShown": true
        });
        window.close();
    });

    var opt_in_enabled = document.getElementById('opt-in-enabled');
    ext_api.storage.local.get("optIn", function (result) {
        opt_in_enabled.innerText = result.optIn ? 'YES' : 'NO';
    });
    var mv3_remove_perm_msg = document.getElementById('mv3-remove-perm-msg');

    document.getElementById("optin-enable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optIn": true,
            "optInShown": true
        });
        opt_in_enabled.innerText = 'YES';
    });

    document.getElementById("optin-disable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optIn": false,
            "optInShown": true
        });
        opt_in_enabled.innerText = 'NO';
    });

    var custom_enabled = document.getElementById('custom-enabled');
    ext_api.permissions.contains({
        origins: ["*://*/*"]
    }, function (result) {
        if (result) {
            custom_enabled.innerText = 'YES';
        } else {
            custom_enabled.innerText = 'NO';
        }
    });

    var custom_prompt = document.getElementById('custom-prompt');
    if (chrome_android_browser) {
      var android_span = document.createElement('span');
      android_span.innerText = '* to enable the custom sites opt-in on Android you may need to use the android-custom crx-release.';
      custom_prompt.appendChild(android_span);
    }

    if (custom_switch) {

    document.querySelector('#custom-enable').addEventListener('click', function (event) {
        ext_api.permissions.request({
            origins: ["*://*/*"]
        }, function (granted) {
            if (granted) {
                custom_enabled.innerText = 'YES';
                ext_api.storage.local.set({
                    "customOptIn": true
                });
                if (ext_manifest_version === 3)
                  mv3_remove_perm_msg.innerText = '';
            } else {
                custom_enabled.innerText = 'NO';
            }
            ext_api.storage.local.set({
                "customShown": true
            });
        });
    });

    document.querySelector('#custom-disable').addEventListener('click', function (event) {
        ext_api.permissions.remove({
            origins: ["*://*/*"]
        }, function (removed) {
            if (removed) {
                custom_enabled.innerText = 'NO';
                ext_api.storage.local.set({
                    "customOptIn": false
                });
                if (ext_manifest_version === 3)
                  mv3_remove_perm_msg.innerText = 'Reload extension on removal of optional host permissions';
            }
            ext_api.storage.local.set({
                "customShown": true
            });
        });
    });

    }// custom_switch

    var update_enabled = document.getElementById('update-enabled');
    ext_api.storage.local.get({optInUpdate: true}, function (result) {
        update_enabled.innerText = result.optInUpdate ? 'YES' : 'NO';
    });

    document.getElementById("update-enable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInUpdate": true
        });
        update_enabled.innerText = 'YES';
    });

    document.getElementById("update-disable").addEventListener("click", function () {
        ext_api.storage.local.set({
            "optInUpdate": false
        });
        update_enabled.innerText = 'NO';
    });
});
