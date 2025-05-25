//'use strict';
var ext_api = (typeof browser === 'object') ? browser : chrome;

if (matchDomain('gitflic.ru')) {
  if (window.location.pathname.startsWith('/project/magnolia1234/bpc_uploads') && document.head) {
    let sheet = document.createElement('style');
    let path_short = window.location.pathname.replace('/project/magnolia1234/bpc_uploads', '');
    if (!path_short)
      sheet.innerText = 'div[data-cell-type="commit"], div[data-cell-type="date"] {display: none !important;} div[data-cell-type="filename"] {flex: 0 0 100% !important;}';
    else if (path_short.match(/^\/(blob|file)/))
      sheet.innerText = 'div.project-files-tree, div.project-files-list {flex: 0 0 50% !important; max-width: 50% !important;}';
    if (sheet.innerText)
      document.head.appendChild(sheet);
  }
}

else {

window.setTimeout(function () {
  let hostname = window.location.hostname.replace(/^www\./, '');
  let custom_domain = getCookieDomain(hostname);
  let group;
  if (hostname && ext_api.runtime) {
    if (document.querySelector('head > link[href*=".medium.com/"]') || matchDomain(['gitconnected.com', 'plainenglish.io']))
      group = 'medium.com';
    else if (document.querySelector('head > meta[property="og:image"][content*="beehiiv"]'))
      group = '###_beehiiv'; // no fix
    else if (document.querySelector('head > meta[name="generator"][content^="Ghost"]') && !document.querySelector('script[src^="https://steadyhq.com/"]'))
      group = '###_ghost'; // no fix
    else if (document.querySelector('head > link[href*="/leaky-paywall"], script[src*="/leaky-paywall"], div[id^="issuem-leaky-paywall-"]'))
      group = '###_wp_leaky_paywall';
    else if (document.querySelector('head > link[href^="https://substackcdn.com/"]'))
      group = '###_substack_custom'; // no fix
    else if (matchDomain(['monitor.co.ug', 'mwananchi.co.tz', 'mwanaspoti.co.tz', 'thecitizen.co.tz']))
      group = '###_ke_nation_media';
    else if (document.querySelector('head > link[href="//ppt.promedia.nl"]') || document.querySelector('head > script[src*="/pmgnews/scripts/promedia.js"]'))
      group = '###_nl_promedia';
    else if (hostname.match(/\.com$/) && !matchDomain(['campaignlive.com']) && document.querySelector('span#hmn-logo > a[href="https://www.haymarketmedicalnetwork.com/about"], footer a[href="https://www.haymarketmediaus.com/haymarket-media-inc-privacy-policy/"]'))
      group = '###_uk_haymarket_medical';
    else if (matchDomain(['asianinvestor.net', 'campaignindia.in', 'taspo.de']) || (hostname.match(/\.co(m|\.uk)$/) && document.querySelector('footer a[href^="http://www.haymarket.com"]')))
      group = '###_uk_haymarket';
    else if (matchDomain(['epochtimes-romania.com']) || hostname.match(/\.epochtimes\.(com\.br|cz|de|fr|jp)/))
      group = '###_usa_epochtimes';
    else if (hostname.match(/\.(com|net)\.au$/) && !matchDomain(['insideretail.com.au'])) {
      if (document.querySelector('a[href^="https://austcommunitymedia.my.site.com/"]'))
        group = '###_au_comm_media';
      else if (hostname.endsWith('.com.au')) {
        if (document.querySelector('head > link[href="https://images.thewest.com.au"]'))
          group = 'thewest.com.au';
        else if (document.querySelector('head > link[rel="dns-prefetch"][href="//static.ew.mmg.navigacloud.com"]'))
          group = '###_au_mmg';
        else if (matchDomain('ntnews.com.au'))
          group = '###_au_news_corp';
        else if (document.querySelector('div.c-footer__copyright > a[href^="https://nemedia.com.au"]'))
          group = '###_au_nomedia'; // no fix
        else if (hostname.match('farmingahead.com.au'))
          group = '###_uk_aspermont'; // no fix
      }
    } else if (hostname.endsWith('.cl')) {
      if (document.querySelector('head > meta[property="og:image"][content*="/impresa.soy-chile.cl/"]'))
        group = '###_cl_elmercurio_local'; // no fix
    } else if (hostname.match(/\.(de|at|ch)$/) || matchDomain(['horizont.net', 'lebensmittelzeitung.net'])) {
      if (document.querySelector('head > script[src*="/dfv.containers.piwik.pro/"]'))
        group = '###_de_dfv_medien';
      else if (hostname.endsWith('.de')) {
        if (document.querySelector('div.navigation__personalization > a[href^="https://www.haas-mediengruppe.de/"]'))
          group = '###_de_haas_medien';
        else if (document.querySelector('head > link[href*=".rndtech.de/"]'))
          group = '###_de_madsack';
        else if (document.querySelector('a.mgw-logo[href^="https://mgw.de"]'))
          group = '###_de_mgw';
        else if (matchDomain(['buerstaedter-zeitung.de', 'hochheimer-zeitung.de', 'lampertheimer-zeitung.de', 'lauterbacher-anzeiger.de', 'main-spitze.de', 'mittelhessen.de', 'oberhessische-zeitung.de', 'wormser-zeitung.de']))
          group = '###_de_vrm';
        else if (matchDomain('finanzbusiness.de'))
          group = '###_dk_watch_media'; // custom
        else if (matchDomain('schwaebische-post.de') || document.querySelector('header a[href^="https://www.ippen.media"]'))
          group = '###_de_ippen_media';
      } else if (hostname.endsWith('.ch')) {
        if (document.querySelector('head > link[href*="/assets.static-chmedia.ch/"]'))
          group = '###_ch_media';
        else if (document.querySelector('div#__next > div.page-section li > a[href^="https://jobs.tamedia.ch/"]'))
          group = '###_ch_tamedia';
      }
    } else if (hostname.endsWith('.dk')) {
      if (matchDomain(['doi.dk']) || document.querySelector('div#footer > div.row > div.col > a[href="https://www.dkmedier.dk"]'))
        group = '###_dk_medier';
      else if (hostname.endsWith('watch.dk') && document.querySelector('head > link[as="image"][imagesrcset^="https://photos.watchmedier.dk/"]'))
        group = '###_dk_watch_media'; // custom
    } else if (hostname.match(/\.(es|cat)$/) || matchDomain(['diariocordoba.com', 'elperiodicodearagon.com', 'elperiodicoextremadura.com', 'elperiodicomediterraneo.com', 'emporda.info'])) {
      if (document.querySelector('head > link[href*="/estaticos-cdn."]'))
        group = '###_es_epiberica';
      else if (document.querySelector('div > ul > li > a[href="https://www.sportlife.es/"]'))
        group = '###_es_sport_life';
    } else if (hostname.endsWith('.fi')) {
      if (document.querySelector('head > link[href^="https://assets.almatalent.fi"]'))
        group = '###_fi_alma_talent'; // no fix
      else if (document.querySelector('head[prefix*=".kalevamedia.fi/"]'))
        group = '###_fi_kaleva'; // no fix
    } else if (hostname.endsWith('.fr')) {
      if (document.querySelector('head > meta[name="google-play-app"][content^="app-id=com.centrefrance"]'))
        group = '###_fr_gcf';
      else if (matchDomain(['cahiers-techniques-batiment.fr', 'lemoniteur.fr', 'lsa-conso.fr']))
        group = '###_fr_groupe_infopro';
    } else if (hostname.endsWith('.it')) {
      if (document.querySelector('head > link[href^="//citynews.stgy.ovh/"]'))
        group = '###_it_citynews'; // no fix
      else if (matchDomain(['gazzettadimodena.it', 'gazzettadireggio.it', 'lanuovaferrara.it']))
        group = '###_it_gruppo_sae';
    } else if (hostname.endsWith('.nl')) {
      if (document.querySelector('head > link[href*=".ndcmediagroep.nl/"]'))
        group = '###_nl_mediahuis_noord';
      else if (matchDomain(['gooieneemlander.nl', 'ijmuidercourant.nl']))
        group = '###_nl_mediahuis_region';
      else if (document.querySelector('head > link[rel="dns-prefetch"][href^="https://vmn-"][href$="imgix.net"]'))
        group = '###_nl_vmnmedia'; // no fix
    } else if (hostname.endsWith('.no')) {
      if (hostname.endsWith('watch.no') && document.querySelector('head > link[as="image"][imagesrcset^="https://photos.watchmedier.dk/"]'))
        group = '###_dk_watch_media'; // custom
    } else if (hostname.endsWith('.se')) {
      if (document.querySelector('footer > div > div > a[href="https://www.nwtmedia.se/"]'))
        group = '###_se_nwt_media';
      else if (document.querySelector('footer ul > li > a[href^="https://privacy.bonniernews.se/cookiepolicy"]'))
        group = '###_se_bonnier_group';
      else if (document.querySelector('head > link[href^="https://cdn.gotamedia.se/"]'))
        group = '###_se_gota_media'; // no fix
    } else if (hostname.match(/\.(co\.uk|scot)$/)) {
      if (matchDomain(['motortransport.co.uk']))
        group = '###_uk_dvv_media';
      else if (document.querySelector('footer > div a[href^="https://www.nationalworldplc.com"]'))
        group = '###_uk_nat_world';
      else if (document.querySelector('footer li > a[href^="https://www.newsquest.co.uk/"]'))
        group = '###_uk_newsquest';
      else if (document.querySelector('div#wrbm-footer-div'))
        group = '###_uk_william_reed';
      else if (matchDomain(['footballleagueworld.co.uk']))
        group = '###_ca_valnet';
    } else if (hostname.match(/\.(ca|com|net|news|org)$/)) {
      if (matchDomain(['latribune.ca', 'lavoixdelest.ca', 'ledroit.com', 'ledroitfranco.com', 'lenouvelliste.ca', 'lequotidien.com']))
        group = '###_ca_gcm';
      else if (matchDomain(['montrealgazette.com']) || document.querySelector('head > script[src*=".postmedia.digital/"], head > meta[content*=".postmedia.digital/"]'))
        group = '###_ca_postmedia';
      else if (document.querySelector('div.asp_logo > a > img[src$="aspermont.png"]'))
        group = '###_uk_aspermont'; // no fix
      else if (document.querySelector('head > script[src*=".axate.io/"], head > script[src*=".agate.io/"]'))
        group = '###_uk_axate.io';
      else if (matchDomain(['flightglobal.com', 'freightcarbonzero.com', 'heavyliftpfi.com', 'personneltoday.com', 'railwaygazette.com']))
        group = '###_uk_dvv_media';
      else if (document.querySelector('footer li > a[href^="https://www.newsquest.co.uk/"]'))
        group = '###_uk_newsquest';
      else if (document.querySelector('div#wrbm-footer-div'))
        group = '###_uk_william_reed';
      else if (document.querySelector('head > script[src="https://cdn.blueconic.net/bridgetowermedia.js"], header.site-header > div.btm-header'))
        group = '###_usa_bridge_tower';
      else if (document.querySelector('head > script[type][src*="-cnhi-pw.newsmemory.com"]'))
        group = '###_usa_cnhi';
      else if (document.querySelector('footer#footer li > a[href^="https://cherryroad-media.com"]'))
        group = '###_usa_cherryroad'; // no fix
      else if (document.querySelector('head > link[href*=".gannettdigital.com/"], head > link[href*=".gannett-cdn.com/"]'))
        group = '###_usa_gannett';
      else if (document.querySelector('head > script[src*="/treg.hearstnp.com/"]'))
        group = '###_usa_hearst_comm';
      else if (document.querySelector('head > script[src*=".townnews.com/leetemplates.com/'))
        group = '###_usa_lee_ent';
      else if (document.querySelector('head > meta[name="tncms-access-version'))
        group = '###_usa_townnews';
      else if (document.querySelector('section.bottom-nav > a[href^="https://www.mcclatchy.com/privacy-policy"]'))
        group = '###_usa_mcc';
      else if (document.querySelector('head > link[rel="stylesheet"][id^="dfm-accuweather-"], footer li > a[href^="https://www.medianewsgroup.com"]'))
        group = '###_usa_mng';
      else if (hostname.match(/\.com$/)) {
        if (document.querySelector('div.footer-note > div.text > a[href^="https://www.valnetinc.com"]'))
          group = '###_ca_valnet';
        else if (matchDomain(['amwatch.com', 'medwatch.com', 'shippingwatch.com']))
          group = '###_dk_watch_media'; // custom
        else if (matchDomain(['journalauto.com', 'journaldupneu.com', 'j2rauto.com']))
          group = '###_fr_synerj';
        else if (matchDomain(['argusdelassurance.com']))
          group = '###_fr_groupe_infopro';
        else if (document.querySelector('[class*="footer" i] a[href^="https://www.delinian.com/privacy-policy"]'))
          group = '###_uk_delinian'; // custom
        else if (matchDomain(['oed.com']) || (hostname.startsWith('oxford') && document.querySelector('div[id^="footer"] a[href="http://www.oup.com/"]')))
          group = '###_uk_oup';
        else if (document.querySelector('head > meta[property][content^="https://cdn.forumcomm.com/"]'))
          group = '###_usa_forum_comm';
        else if (document.querySelector('li > a[href^="https://www.bnpmedia.com/"]'))
          group = '###_usa_bnp_media';
        else if (matchDomain(['cfo.com', 'pharmavoice.com', 'proformative.com', 'socialmediatoday.com']) || (hostname.endsWith('dive.com') && document.querySelector('script[src^="/static/js/dist/contentGate.bundle.js"], div.baseline-footer > a[href="http://www.industrydive.com"]')))
          group = '###_usa_industrydive';
        else if (matchDomain(['centralmaine.com', 'pressherald.com', 'sunjournal.com']))
          group = '###_usa_maine_trust';
        else if (document.querySelector('head > meta[name="peim_article_access_type"]'))
          group = '###_usa_pei';
        else if (matchDomain(['accountingtoday.com', 'benefitnews.com', 'bondbuyer.com', 'dig-in.com', 'financial-planning.com', 'nationalmortgagenews.com']))
          group = 'americanbanker.com'; // Arizent
      }
    } else {
      if (matchDomain(['insideretail.asia', 'insideretail.co.nz', 'insideretail.com.au', 'insideretail.us']))
        group = '###_au_inside_retail';
    }
    if (group)
      console.log(group);
    ext_api.runtime.sendMessage({
      request: 'custom_domain',
      data: {
        domain: custom_domain,
        group: group
      }
    });
  }
}, 1000);

}

function matchDomain(domains, hostname) {
  var matched_domain = false;
  if (!hostname)
    hostname = window.location.hostname;
  if (typeof domains === 'string')
    domains = [domains];
  domains.some(domain => (hostname === domain || hostname.endsWith('.' + domain)) && (matched_domain = domain));
  return matched_domain;
}

function getCookieDomain(hostname) {
  let domain = hostname;
  let n = 0;
  let parts = hostname.split('.');
  let str = '_gd' + (new Date()).getTime();
  try {
  while (n < (parts.length - 1) && document.cookie.indexOf(str + '=' + str) == -1) {
    domain = parts.slice(-1 - (++n)).join('.');
    document.cookie = str + "=" + str + ";domain=" + domain + ";";
  }
  document.cookie = str + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
  } catch (e) {
    console.log(e);
  }
  return domain;
}
