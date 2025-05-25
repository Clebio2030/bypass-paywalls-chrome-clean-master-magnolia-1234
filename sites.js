var defaultSites = {
  "* BPC settings": {
    domain: "###"
  },
  "Show options on update": {
    domain: "#options_on_update"
  },
  "Enable new sites by default": {
    domain: "#options_enable_new_sites"
  },
  "Check for update rules at startup": {
    domain: "#options_optin_update_rules"
  },
  "* Default sites": {
    domain: "###"
  },
  "60 Millions de consommateurs": {
    domain: "60millions-mag.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Aachener Zeitung (fetch from archive.is)": {
    domain: "aachener-zeitung.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Abcmais.com": {
    domain: "abcmais.com",
    allow_cookies: 1,
    block_regex: /(\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/,
    cs_dompurify: 1
  },
  "Actu.fr": {
    domain: "actu.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Advance Local": {
    domain: "###_usa_adv_local",
    group: [
      "al.com",
      "cleveland.com",
      "lehighvalleylive.com",
      "masslive.com",
      "mlive.com",
      "nj.com",
      "oregonlive.com",
      "pennlive.com",
      "silive.com",
      "syracuse.com"
    ],
    allow_cookies: 1,
    block_regex: /\.sophi\.io\//,
    cs_dompurify: 1
  },
  "Adweek": {
    domain: "adweek.com",
    useragent: "googlebot"
  },
  "Al-Monitor (fetch from archive.is)": {
    domain: "al-monitor.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Albuquerque Journal": {
    domain: "abqjournal.com",
    allow_cookies: 1,
    block_regex: /\.abqjournal\.com\/.+\/tncms\/api\/access\..+\.js/,
    cs_dompurify: 1
  },
  "Algemeen Dagblad (+ regional/ADR; fetch from archive.is)": {
    domain: "###_nl_dpg_adr",
    group: [
      "ad.nl",
      "bd.nl",
      "bndestem.nl",
      "destentor.nl",
      "ed.nl",
      "gelderlander.nl",
      "pzc.nl",
      "tubantia.nl"
    ],
    allow_cookies: 1,
    block_regex: "temptation\\.{domain}\\/temptation\\.js",
    cs_dompurify: 1
  },
  "Alternatives Economiques": {
    domain: "alternatives-economiques.fr",
    block_regex: /\.poool\.fr\//
  },
  "Ámbito": {
    domain: "ambito.com",
    remove_cookies_select_drop: ["TDNotesRead"]
  },
  "America's Test Kitchen": {
    domain: "americastestkitchen.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "American Affairs": {
    domain: "americanaffairsjournal.org",
    allow_cookies: 1,
    block_regex: /\/americanaffairsjournal\.org\/wp-content\/mu-plugins\/app\/src\/paywall\/paywall\.js/
  },
  "American Banker (+ Arizent/opt-in to custom sites)": {
    domain: "americanbanker.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "American Purpose": {
    domain: "americanpurpose.com",
    allow_cookies: 1,
    block_regex: /\/steadyhq\.com\//
  },
  "Aoc.media": {
    domain: "aoc.media",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//,
    cs_dompurify: 1
  },
  "Apollo Magazine": {
    domain: "apollo-magazine.com"
  },
  "ARA": {
    domain: "###_cat_ara",
    group: [
      "ara.cat",
      "arabalears.cat"
    ],
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Artforum": {
    domain: "artforum.com"
  },
  "Artnet": {
    domain: "artnet.com",
    allow_cookies: 1,
    block_regex: /(\.artnet\.com\/paywall-ajax\.php|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "Ärzte Zeitung": {
    domain: "aerztezeitung.de",
    allow_cookies: 1
  },
  "Atavist Magazine": {
    domain: "atavist.com"
  },
  "Atlantico.fr": {
    domain: "atlantico.fr",
    allow_cookies: 1,
    block_regex: /\.tonos\.gjirafa\.tech\/init\/access/
  },
  "Australia News Corp": {
    domain: "###_au_news_corp",
    group: [
      "adelaidenow.com.au",
      "cairnspost.com.au",
      "codesports.com.au",
      "couriermail.com.au",
      "dailytelegraph.com.au",
      "geelongadvertiser.com.au",
      "goldcoastbulletin.com.au",
      "heraldsun.com.au",
      "theaustralian.com.au",
      "thechronicle.com.au",
      "themercury.com.au",
      "townsvillebulletin.com.au",
      "weeklytimesnow.com.au"
    ],
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
  },
  "Australian Community Media (opt-in to custom sites for unlisted)": {
    domain: "###_au_comm_media",
    group: [
      "bendigoadvertiser.com.au",
      "bordermail.com.au",
      "canberratimes.com.au",
      "centralwesterndaily.com.au",
      "dailyadvertiser.com.au",
      "dailyliberal.com.au",
      "examiner.com.au",
      "illawarramercury.com.au",
      "newcastleherald.com.au",
      "northerndailyleader.com.au",
      "standard.net.au",
      "theadvocate.com.au",
      "thecourier.com.au",
      "westernadvocate.com.au"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Australia Nine Entertainment": {
    domain: "###_au_nine_ent",
    group: [
      "afr.com",
      "brisbanetimes.com.au",
      "smh.com.au",
      "theage.com.au",
      "watoday.com.au"
    ],
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/,
    exception: [{
        domain: "afr.com",
        allow_cookies: 1,
        block_regex: /\.tinypass\.com\//,
        cs_dompurify: 1
      }
    ]
  },
  "Autocar.co.uk": {
    domain: "autocar.co.uk",
    allow_cookies: 1
  },
  "AutoHebdo.fr": {
    domain: "autohebdo.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Automobilwoche": {
    domain: "automobilwoche.de",
    allow_cookies: 1,
    block_regex: /\.automobilwoche\.de\/sites\/camw\/files\/js\/js_.+\.js/
  },
  "AutoPlus.fr": {
    domain: "autoplus.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Autosport (free articles only)": {
    domain: "autosport.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Axios": {
    domain: "axios.com",
    allow_cookies: 1
  },
  "Balkan Insight": {
    domain: "balkaninsight.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Bar and Bench": {
    domain: "barandbench.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Barron's": {
    domain: "barrons.com",
    allow_cookies: 1,
    block_regex: /\.cxense\.com\//
  },
  "BBC History Extra": {
    domain: "historyextra.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Belfast Telegraph": {
    domain: "belfasttelegraph.co.uk",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Benzinga": {
    domain: "benzinga.com"
  },
  "Bergens Tidende": {
    domain: "bt.no",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Berliner Zeitung": {
    domain: "berliner-zeitung.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Berlingske": {
    domain: "berlingske.dk",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Bhaskar": {
    domain: "bhaskar.com",
    allow_cookies: 1
  },
  "Bild (fetch from archive.is)": {
    domain: "bild.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Blaze Media": {
    domain: "theblaze.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Bloomberg": {
    domain: "bloomberg.com",
    allow_cookies: 1,
    block_regex: /(\.cm\.bloomberg\.com\/|assets\.bwbx\.io\/s\d\/javelin\/.+\/transporter\/)/
  },
  "Bloomberg Adria": {
    domain: "bloombergadria.com",
    allow_cookies: 1,
    block_js_inline: /\.bloombergadria\.com\/.+\/news/
  },
  "BNP Media (opt-in to custom sites)": {
    domain: "###_usa_bnp_media",
    allow_cookies: 1,
    block_regex: /\/paywall\/evercookie_get\.js/
  },
  "Bonnier News Group (SE; opt-in to custom sites for unlisted)": {
    domain: "###_se_bonnier_group",
    group: [
      "dagensmedicin.se",
      "dn.se",
      "hd.se",
      "sydsvenskan.se"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    exception: [{
        domain: "dn.se",
        allow_cookies: 1,
        cs_dompurify: 1
      }
    ]
  },
  "Börsen-Zeitung": {
    domain: "boersen-zeitung.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Bridge Tower Media (opt-in to custom sites)": {
    domain: "###_usa_bridge_tower",
    group: [],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/script\\.js"
  },
  "Brill": {
    domain: "brill.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Bulletin of the Atomic Scientists": {
    domain: "thebulletin.org",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "BusinessAM.be": {
    domain: "businessam.be",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "BusinessDesk.co.nz": {
    domain: "businessdesk.co.nz",
    allow_cookies: 1,
    useragent_custom: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    cs_dompurify: 1
  },
  "Business Insider": {
    domain: "businessinsider.com",
    allow_cookies: 1,
    block_regex: /(\.businessinsider\.com\/chunks\/scripts\/\d.+\.js|\.sophi\.io\/)/
  },
  "Business Insider Japan": {
    domain: "businessinsider.jp",
    allow_cookies: 1,
    block_regex: /(\.cxense\.com\/|\.piano\.io\/)/
  },
  "Business Insider Nederland": {
    domain: "businessinsider.nl",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    cs_dompurify: 1
  },
  "Business Post.ie (fetch from archive.is)": {
    domain: "businesspost.ie",
    allow_cookies: 1,
    block_regex: /\.businesspost\.ie\/api\/tinypass\.min\.js/,
    cs_dompurify: 1
  },
  "Business Standard": {
    domain: "business-standard.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "California Business Journals": {
    domain: "###_usa_cbj",
    group: [
      "labusinessjournal.com",
      "ocbj.com",
      "sdbj.com",
      "sfvbj.com"
    ],
    allow_cookies: 1,
    block_regex: /\/olytics\.omeda\.com\//
  },
  "Cambio Colombia": {
    domain: "cambiocolombia.com",
    allow_cookies: 1,
    block_regex: /\.cambiocolombia\.com\/_next\/static\/chunks\/1036\..+\.js/
  },
  "Capital.bg": {
    domain: "capital.bg",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Capital.fr": {
    domain: "capital.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "CartaCapital": {
    domain: "cartacapital.com.br",
    allow_cookies: 1
  },
  "Causeur": {
    domain: "causeur.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "CH Media (opt-in to custom sites for unlisted)": {
    domain: "###_ch_media",
    group: [
      "aargauerzeitung.ch",
      "luzernerzeitung.ch",
      "tagblatt.ch"
    ],
    allow_cookies: 1,
    block_regex: /\.zephr\.com\/zephr-browser\//,
    useragent: "googlebot"
  },
  "Challenges": {
    domain: "challenges.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Charlie Hebdo": {
    domain: "charliehebdo.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Chemical & Engineering News": {
    domain: "cen.acs.org"
  },
  "Citywire": {
    domain: "citywire.com",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "CNBC (news only)": {
    domain: "cnbc.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "CNHI Group (opt-in to custom sites)": {
    domain: "###_usa_cnhi",
    group: [],
    allow_cookies: 1,
    block_regex: /(\/tncms\/api\/access(\..+)?\.js|\.newsmemory\.com\/\?meter)/,
    cs_dompurify: 1
  },
  "CNN": {
    domain: "cnn.com",
    allow_cookies: 1
  },
  "Commentary Magazine": {
    domain: "commentary.org",
    block_regex: /\.commentary\.org\/.+\/js\/dg-locker-public\.js/
  },
  "CommonWealth Magazine Taiwan (free articles only)": {
    domain: "cw.com.tw"
  },
  "Condé Nast magazines": {
    domain: "###_usa_conde_nast",
    group: [
      "architecturaldigest.com",
      "bonappetit.com",
      "cntraveler.com",
      "epicurious.com",
      "gq.com",
      "newyorker.com",
      "vanityfair.com",
      "vogue.co.uk",
      "vogue.com",
      "wired.com"
    ],
    allow_cookies: 1,
    block_regex: "www\\.{domain}\\/[-\\w]+$"
  },
  "Connaissance des Arts": {
    domain: "connaissancedesarts.com",
    allow_cookies: 1,
    block_regex: /\.connaissancedesarts\.com\/wp-content\/.+\/vendor\/iptools-jquery-inview\.min\.js/
  },
  "Correio do Povo": {
    domain: "correiodopovo.com.br",
    allow_cookies: 1,
    block_regex: /(paywall\.correiodopovo\.com\.br|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Corriere della Sera": {
    domain: "corriere.it",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.corriereobjects\.it\/.+\/js\/_paywall\.sjs|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "Corriere dello Sport": {
    domain: "corrieredellosport.it",
    allow_cookies: 1
  },
  "Cosmopolitan.fr": {
    domain: "cosmopolitan.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Courrier international (fetch from archive.is)": {
    domain: "courrierinternational.com",
    allow_cookies: 1,
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "Crain Communications": {
    domain: "###_usa_craincomm",
    group: [
      "360dx.com",
      "adage.com",
      "autonews.com",
      "chicagobusiness.com",
      "crainscleveland.com",
      "crainsdetroit.com",
      "crainsgrandrapids.com",
      "crainsnewyork.com",
      "european-rubber-journal.com",
      "genomeweb.com",
      "modernhealthcare.com",
      "pionline.com",
      "plasticsnews.com",
      "precisionmedicineonline.com",
      "rubbernews.com",
      "sustainableplastics.com",
      "tirebusiness.com",
      "utech-polyurethane.com"
    ],
    allow_cookies: 1,
    block_regex: "(js\\.pelcro\\.com\\/|{domain}\\/profiles\\/.+\\/crain_pelcro_user\\.js)",
    exception: [{
        domain: ["adage.com", "autonews.com"],
        allow_cookies: 1,
        block_regex: /(js\.pelcro\.com\/|\.piano\.io\/)/,
        cs_dompurify: 1
      }, {
        domain: "european-rubber-journal.com",
        allow_cookies: 1
      }, {
        domain: ["pionline.com", "rubbernews.com"],
        allow_cookies: 1,
        block_regex: /(js\.pelcro\.com\/|\.com\/sites\/.+\/js_.+\.js)/
      }
    ]
  },
  "Crusoe.com.br": {
    domain: "crusoe.com.br",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Dagens ETC": {
    domain: "etc.se",
    allow_cookies: 1
  },
  "CyclingNews": {
    domain: "cyclingnews.com",
    allow_cookies: 1
  },
  "Dagsavisen.no": {
    domain: "dagsavisen.no",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Daily Mail Group UK": {
    domain: "###_uk_dmg_media",
    group: [
      "dailymail.co.uk",
      "mailonsunday.co.uk",
      "thisismoney.co.uk"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/zephr\\/feature"
  },
  "De Tijd": {
    domain: "tijd.be",
    referer: "google"
  },
  "Decanter (not reviews)": {
    domain: "decanter.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Defector": {
    domain: "defector.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Denik.cz": {
    domain: "denik.cz",
    allow_cookies: 1,
    block_js_inline: /\.denik\.cz\/.+\.html/
  },
  "Der Freitag": {
    domain: "freitag.de",
    allow_cookies: 1
  },
  "Der Spiegel (fetch from archive.is)": {
    domain: "spiegel.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Der Tagesspiegel (fetch from archive.is; not background/checkpoint)": {
    domain: "tagesspiegel.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Deutscher Fachverlag Mediengruppe (opt-in to custom sites)": {
    domain: "###_de_dfv_medien",
    group: [],
    allow_cookies: 1,
    useragent: "googlebot",
    cs_code: [{"cond":"div.Ad", "rm_elem":1}]
  },
  "Diario de Navarra (text only)": {
    domain: "diariodenavarra.es",
    allow_cookies: 1
  },
  "Diário de Notícias (dn.pt)": {
    domain: "dn.pt",
    allow_cookies: 1,
    block_regex: /\.dn\.pt\/.+\/evolok\/.+\/ev-em\.min\.js/
  },
  "Diario Financiero (df.cl)": {
    domain: "df.cl",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Die Rheinpfalz": {
    domain: "rheinpfalz.de",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    useragent: "googlebot"
  },
  "Die Welt (fetch from archive.is)": {
    domain: "welt.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Die Zeit (fetch from archive.is)": {
    domain: "zeit.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Digiday Media": {
    domain: "###_usa_digiday",
    group: [
      "digiday.com",
      "glossy.co",
      "modernretail.co"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "DigiTimes Asia": {
    domain: "digitimes.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    useragent: "googlebot"
  },
  "Discover Magazine": {
    domain: "discovermagazine.com"
  },
  "DK Medier Group (opt-in to custom sites)": {
    domain: "###_dk_medier",
    group: [],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "DN Media Group": {
    domain: "###_no_dn_media",
    group: [
      "dn.no",
      "europower.no",
      "fiskeribladet.no",
      "hydrogeninsight.com",
      "intrafish.com",
      "intrafish.no",
      "rechargenews.com",
      "tradewindsnews.com",
      "upstreamonline.com"
    ],
    allow_cookies: 1,
    cs_dompurify: 1,
    exception: [{
        domain: "tradewindsnews.com",
        allow_cookies: 1,
        block_regex: /subscription-static-global\.nhst\.tech\//,
      }
    ]
  },
  "Dnevnik.bg": {
    domain: "dnevnik.bg",
    allow_cookies: 1,
    block_regex: /\.dnevnik\.bg\/api\/auth.*\/callback\/credentials/
  },
  "Domani": {
    domain: "editorialedomani.it",
    allow_cookies: 1,
    block_regex: /(\.editorialedomani\.it\/pelcro\.js|js\.pelcro\.com\/)/,
    useragent: "googlebot"
  },
  "Doorbraak.be": {
    domain: "doorbraak.be",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "DPG Media (not ADR)": {
    domain: "###_nl_dpg_media",
    group: [
      "demorgen.be",
      "flair.nl",
      "humo.be",
      "libelle.nl",
      "margriet.nl",
      "parool.nl",
      "trouw.nl",
      "volkskrant.nl"
    ],
    remove_cookies_select_drop: ["TID_ID"],
    block_regex: "(\\.{domain}\\/temptation\\/resolve|temptation\\.{domain}\\/temptation\\.js)"
  },
  "DVV Media International (opt-in to custom sites)": {
    domain: "###_uk_dvv_media",
    group: [],
    remove_cookies_select_drop: ["AnonUserCookie"],
    block_regex: /\/wp-json\/api\/v\d\/has-access/,
    exception: [{
        domain: "railwaygazette.com",
        allow_cookies: 1,
        useragent: "googlebot"
      }
    ]
  },
  "Dwell": {
    domain: "dwell.com",
    allow_cookies: 1,
    block_js_inline: /\.dwell\.com\/article\/.+\?rel=plus/,
    cs_dompurify: 1
  },
  "Eastwest.eu": {
    domain: "eastwest.eu",
    allow_cookies: 1
  },
  "El Confidencial": {
    domain: "elconfidencial.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "El Cronista": {
    domain: "cronista.com",
    allow_cookies: 1,
    block_regex: /\.cronista\.com\/files\/cachefiles\/987.+\.js/
  },
  "El Deber.com.bo": {
    domain: "eldeber.com.bo",
    allow_cookies: 1,
    block_regex: /cdn\.lavoz\.com\.ar\/sites\/.+\/paywall\/eldeber\/pw\.js/
  },
  "El Diario.es": {
    domain: "eldiario.es",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "El Español": {
    domain: "elespanol.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "El Espectador": {
    domain: "elespectador.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.cxense\.com\/|js\.matheranalytics\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "El Mercurio (digital only)": {
    domain: "elmercurio.com",
    allow_cookies: 1,
    block_regex: /\.(elmercurio\.com|emol\.cl)\/(.+\/)?js\/(.+\/)?(modal|merPramV\d|PramModal\.min)\.js/,
    useragent: "googlebot"
  },
  "El Observador.com.uy": {
    domain: "elobservador.com.uy",
    allow_cookies: 1,
    block_regex: /(\.elobservador\.com\.uy\/shares|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "El País": {
    domain: "elpais.com",
    allow_cookies: 1,
    block_js_inline: /\/verne\.elpais\.com\/.+\.html/,
    block_regex: /(\/elpais\.com\/arc\/subs\/p\.min\.js|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "El País.com.uy": {
    domain: "elpais.com.uy",
    allow_cookies: 1,
    block_regex: /(\.elpais\.com\.uy\/user\/authStatus|\.evolok\.net\/|\.cxense\.com\/)/
  },
  "El Tiempo": {
    domain: "eltiempo.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "El Tribuno": {
    domain: "eltribuno.com",
    allow_cookies: 1,
    block_regex: /\.eltribuno\.com\/scripts\/Bellhop\/dist\/bellhop\.min\.js/
  },
  "El Universal.com.mx": {
    domain: "eluniversal.com.mx",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "El Universo (EC)": {
    domain: "eluniverso.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "Elle.fr": {
    domain: "elle.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Encyclopedia Britannica": {
    domain: "britannica.com"
  },
  "eNotes": {
    domain: "enotes.com",
    remove_cookies_select_drop: ["ENOTESID"]
  },
  "ESPN USA (news only; fetch from archive.is)": {
    domain: "espn.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Esprit": {
    domain: "esprit.presse.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Estado de Minas": {
    domain: "em.com.br",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
  },
  "EUobserver": {
    domain: "euobserver.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Evening Standard (UK)": {
    domain: "standard.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Exame": {
    domain: "exame.com",
    allow_cookies: 1
  },
  "Expresso.pt (not Tribuna)": {
    domain: "expresso.pt",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Fast Company": {
    domain: "fastcompany.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.fastcompany\.com\/script\.js)/,
    cs_dompurify: 1
  },
  "Field & Stream": {
    domain: "fieldandstream.com",
    allow_cookies: 1
  },
  "Financial News (London)": {
    domain: "fnlondon.com",
    allow_cookies: 1,
    block_regex: /\.cxense\.com\//,
    referer: "google"
  },
  "Financial Times (not cn subdomain)": {
    domain: "ft.com",
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "First Things": {
    domain: "firstthings.com"
  },
  "Follow the Money (ftm.nl & ftm.eu)": {
    domain: "###_nl_eu_ftm",
    group: [
      "ftm.eu",
      "ftm.nl"
    ],
    allow_cookies: 1,
    block_regex: /\.ftm\.(nl|eu)\/js\/routing\?/
  },
  "Forbes (not newsletters)": {
    domain: "forbes.com",
    allow_cookies: 1,
    block_regex: /(\.forbes\.com\/zephr\/feature|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Forbes Australia": {
    domain: "forbes.com.au",
    remove_cookies_select_drop: ["blaize_session"],
    cs_dompurify: 1
  },
  "Forbes.ua (text only)": {
    domain: "forbes.ua",
    allow_cookies: 1
  },
  "Foreign Affairs (not reader)": {
    domain: "foreignaffairs.com",
    allow_cookies: 1,
    block_regex: /\.foreignaffairs\.com\/modules\/custom\/fa_paywall_js\/js\/paywall\.js/
  },
  "Foreign Policy": {
    domain: "foreignpolicy.com",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/)/,
    cs_dompurify: 1
  },
  "Fortune": {
    domain: "fortune.com",
    remove_cookies_select_drop: ["xbc", "pcid"],
    block_regex: /\.cxense\.com\//
  },
  "Forum Communications (opt-in to custom sites)": {
    domain: "###_usa_forum_comm",
    group: [],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/script\\.js"
  },
  "Fox News (regwall)": {
    domain: "foxnews.com",
    allow_cookies: 1
  },
  "Frankfurter Allgemeine Zeitung": {
    domain: "faz.net",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Funke Mediengruppe": {
    domain: "###_de_funke_medien",
    group: [
      "abendblatt.de",
      "braunschweiger-zeitung.de",
      "harzkurier.de",
      "ikz-online.de",
      "morgenpost.de",
      "nrz.de",
      "otz.de",
      "thueringer-allgemeine.de",
      "tlz.de",
      "waz.de",
      "wp.de",
      "wr.de"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    cs_dompurify: 1
  },
  "Gannett Group (local USA Today; opt-in to custom sites for unlisted)": {
    domain: "###_usa_gannett",
    group: [
      "azcentral.com",
      "cincinnati.com",
      "commercialappeal.com",
      "courier-journal.com",
      "democratandchronicle.com",
      "desmoinesregister.com",
      "detroitnews.com",
      "dispatch.com",
      "freep.com",
      "indystar.com",
      "jacksonville.com",
      "jsonline.com",
      "knoxnews.com",
      "news-press.com",
      "northjersey.com",
      "oklahoman.com",
      "statesman.com",
      "tennessean.com"
    ],
    allow_cookies: 1,
    amp_unhide: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "GaúchaZH": {
    domain: "gauchazh.clicrbs.com.br",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Gazeta do Povo": {
    domain: "gazetadopovo.com.br",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.cxense\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "GB News": {
    domain: "gbnews.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Glassdoor (regwall)": {
    domain: "glassdoor.com"
  },
  "Globes": {
    domain: "globes.co.il",
    block_regex: /\.tinypass\.com\//
  },
  "Granta Magazine": {
    domain: "granta.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "GremiMedia.pl Group": {
    domain: "###_pl_gremi_media",
    group: [
      "parkiet.com",
      "rp.pl"
    ]
  },
  "Groene Amsterdammer": {
    domain: "groene.nl",
    remove_cookies_select_hold: ["accept-cookies", "popunder-hidden"],
    useragent: "googlebot"
  },
  "Groupe Capitales Médias (+ regional/opt-in to custom sites)": {
    domain: "###_ca_gcm",
    group: [
      "lesoleil.com"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Groupe Centre France (opt-in to custom sites for unlisted)": {
    domain: "###_fr_gcf",
    group: [
      "lamontagne.fr"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Groupe ESH Médias": {
    domain: "###_ch_esh_medias",
    group: [
      "arcinfo.ch",
      "lacote.ch",
      "lenouvelliste.ch"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Groupe Infopro Digital (opt-in to custom sites for unlisted)": {
    domain: "###_fr_groupe_infopro",
    group: [
      "usinenouvelle.com"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//,
    exception: [{
        domain: ["argusdelassurance.com", "cahiers-techniques-batiment.fr"],
        allow_cookies: 1,
        useragent: "googlebot"
      }
    ]
  },
  "Groupe IPM": {
    domain: "###_be_groupe_ipm",
    group: [
      "dhnet.be",
      "lalibre.be",
      "lavenir.net"
    ],
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Groupe La Dépêche": {
    domain: "###_fr_groupe_la_depeche",
    group: [
      "centrepresseaveyron.fr",
      "journaldemillau.fr",
      "ladepeche.fr",
      "lindependant.fr",
      "midilibre.fr",
      "nrpyrenees.fr",
      "petitbleu.fr",
      "rugbyrama.fr"
    ],
    allow_cookies: 1
  },
  "Groupe Nice-Matin": {
    domain: "###_fr_groupe_nice_matin",
    group: [
      "monacomatin.mc",
      "nicematin.com",
      "varmatin.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.qiota\.com\/|\.nicematin\.com\/build\/js\/viewpay\..+\.js)/
  },
  "Groupe Profession Santé": {
    domain: "###_fr_groupe_prof_sante",
    group: [
      "lequotidiendumedecin.fr",
      "lequotidiendupharmacien.fr"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Groupe Québecor": {
    domain: "###_ca_groupe_quebecor",
    group: [
      "journaldemontreal.com",
      "journaldequebec.com"
    ],
    allow_cookies: 1
  },
  "Groupe Sud Ouest": {
    domain: "###_fr_groupe_sud_ouest",
    group: [
      "sudouest.fr",
      "charentelibre.fr",
      "larepubliquedespyrenees.fr"
    ],
    allow_cookies: 1
  },
  "Groupe SynerJ Media (opt-in to custom sites)": {
    domain: "###_fr_synerj",
    group: [],
    allow_cookies: 1,
    ld_json_url: "div#encart_abo|div.article_bloc_texte",
    useragent: "googlebot"
  },
  "Grupo Abril": {
    domain: "abril.com.br",
    allow_cookies: 1,
    block_regex: /\.abril\.com\.br\/.+\/abril-paywall\//
  },
  "Grupo Clarín": {
    domain: "###_ar_grupo_clarin",
    group: [
      "clarin.com",
      "lavoz.com.ar",
      "losandes.com.ar",
      "ole.com.ar"
    ],
    allow_cookies: 1,
    block_regex: /zonda\.clarin\.com\//,
    exception: [{
        domain: "losandes.com.ar",
        allow_cookies: 1,
        block_regex: /cdn\.lavoz\.com\.ar\/sites\/.+\/paywall\/losandes\/pw\.js/
      }
    ]
  },
  "Grupo El Comercio": {
    domain: "###_pe_grupo_elcomercio",
    group: [
      "diariocorreo.pe",
      "elcomercio.pe",
      "gestion.pe"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tinypass\\.com\\/|\\/{domain}\\/pf\\/dist\\/engine\\/react\\.js)"
  },
  "Grupo Prensa Ibérica (opt-in to custom sites for unlisted)": {
    domain: "###_es_epiberica",
    group: [
      "diariodemallorca.es",
      "eldia.es",
      "elperiodico.com",
      "epe.es",
      "farodevigo.es",
      "informacion.es",
      "laprovincia.es",
      "levante-emv.com",
      "lne.es",
      "mallorcazeitung.es",
      "superdeporte.es"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Grupo Unidad Editorial": {
    domain: "###_es_unidad",
    group: [
      "elmundo.es",
      "expansion.com",
      "marca.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "Grupo Vocento": {
    domain: "###_es_grupo_vocento",
    group: [
      "abc.es",
      "canarias7.es",
      "diariosur.es",
      "diariovasco.com",
      "elcomercio.es",
      "elcorreo.com",
      "eldiariomontanes.es",
      "elnortedecastilla.es",
      "hoy.es",
      "ideal.es",
      "larioja.com",
      "lasprovincias.es",
      "laverdad.es",
      "lavozdigital.es"
    ],
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "Gruppo GEDI.it": {
    domain: "###_it_gedi",
    group: [
      "huffingtonpost.it",
      "italian.tech",
      "lastampa.it",
      "lescienze.it",
      "moda.it",
      "repubblica.it"
    ],
    remove_cookies_select_drop: ["blaize_session"],
    block_regex: /scripts\.repubblica\.it\/pw\/pw\.js/,
    useragent: "googlebot",
    exception: [{
        domain: ["huffingtonpost.it", "lastampa.it"],
        block_js_inline: /\.it\/.+\/news\//,
        remove_cookies_select_drop: ["blaize_session"]
      }, {
        domain: "repubblica.it",
        allow_cookies: 1,
        block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
      }
    ]
  },
  "Gruppo SAE.it (free articles only; opt-in to custom sites for unlisted)": {
    domain: "###_it_gruppo_sae",
    group: [
      "iltirreno.it",
      "lanuovasardegna.it"
    ]
  },
  "Haaretz Group (no menu/footer)": {
    domain: "###_il_haaretz_group",
    group: [
      "haaretz.co.il",
      "haaretz.com",
      "themarker.com"
    ],
    remove_cookies_select_drop: ["ra"],
    headers_custom: {ismobileapp: "true", platform: "app", renderingkind: "opened"},
    useragent_custom: "Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.70 Safari/537.36 haaretz/5.0.49"
  },
  "Haas Mediengruppe (opt-in to custom sites for unlisted)": {
    domain: "###_de_haas_medien",
    group: [
      "mannheimer-morgen.de"
    ],
    allow_cookies: 1,
    block_regex: "\.{domain}\\/api\\/tinypass\\.min\\.js",
    useragent: "googlebot"
  },
  "Hamburger Morgenpost": {
    domain: "mopo.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Handelsblatt": {
    domain: "handelsblatt.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    useragent: "googlebot"
  },
  "Harper's Magazine": {
    domain: "harpers.org",
    block_regex: /\/harpers\.org\/wp-content\/themes\/timber\/static\/js\/modal.+\.js/
  },
  "Harvard Business Review (do not block TinyPass-script externally)": {
    domain: "hbr.org",
    block_regex: /(\.cxense\.com\/|cdn\.tinypass\.com\/)/,
    remove_cookies_select_drop: ["xbc"]
  },
  "Haymarket Media Group (opt-in to custom sites)": {
    domain: "###_uk_haymarket",
    group: [],
    useragent: "googlebot"
  },
  "Haymarket Medical Network (opt-in to custom sites)": {
    domain: "###_uk_haymarket_medical",
    group: [],
    allow_cookies: 1,
    remove_cookies: 1,
    cs_code: [{"cond":"div#modal-register-popup, div.gating-banner", "rm_elem":1}, {"cond":"div[data-gated]", "rm_attrib":"data-gated"}]
  },
  "Hearst Communications (newspapers; opt-in to custom sites for unlisted)": {
    domain: "###_usa_hearst_comm",
    group: [
      "ctpost.com",
      "expressnews.com",
      "houstonchronicle.com",
      "nhregister.com",
      "sfchronicle.com",
      "timesunion.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.ensighten\\.com\\/|js\\.matheranalytics\\.com\\/)"
  },
  "Hearst Communications magazines": {
    domain: "###_usa_hearst_comm_mag",
    group: [
      "bicycling.com",
      "cosmopolitan.com",
      "countryliving.com",
      "delish.com",
      "elle.com",
      "elledecor.com",
      "esquire.com",
      "goodhousekeeping.com",
      "harpersbazaar.com",
      "housebeautiful.com",
      "menshealth.com",
      "oprahdaily.com",
      "popularmechanics.com",
      "prevention.com",
      "roadandtrack.com",
      "runnersworld.com",
      "townandcountrymag.com",
      "womenshealthmag.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.com\/_assets\/jam\/|\.ensighten\.com\/.+\/Bootstrap\.js)/
  },
  "Heise online (fetch from archive.is)": {
    domain: "heise.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Het Laatste Nieuws (fetch from archive.is)": {
    domain: "hln.be",
    allow_cookies: 1,
    block_regex: /temptation\.hln\.be\/temptation\.js/,
    cs_dompurify: 1
  },
  "Hindustan Times (not epaper)": {
    domain: "hindustantimes.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "History Today (app only)": {
    domain: "historytoday.com",
    allow_cookies: 1,
    block_regex: /app\.historytoday\.com\/pugpig-websmartbanner\.js/,
    cs_all_frames: 1
  },
  "Honolulu Star-Advertiser": {
    domain: "staradvertiser.com",
    allow_cookies: 1,
    block_regex: /js\.matheranalytics\.com\//
  },
  "Il Fatto Quotidiano (free articles only)": {
    domain: "ilfattoquotidiano.it",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
  },
  "Il Foglio": {
    domain: "ilfoglio.it",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
  },
  "Il Manifesto": {
    domain: "ilmanifesto.it",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Il Messaggero (+ regional)": {
    domain: "###_it_ilmessaggero",
    group: [
      "corriereadriatico.it",
      "ilgazzettino.it",
      "ilmattino.it",
      "ilmessaggero.it",
      "quotidianodipuglia.it"
    ],
    allow_cookies: 1,
    block_regex: /(\.(cedscdn|cedsdigital)\.it\/.+\/(PaywallMeter|cmpConsentWall)\.js|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.m?js)/
  },
  "Il Sole 24 Ore (24+ only)": {
    domain: "ilsole24ore.com",
    allow_cookies: 1,
    block_regex: /\.ilsole24ore\.com\/zephr\/feature/
  },
  "Inc.com": {
    domain: "inc.com",
    block_regex: /\.tinypass\.com\//
  },
  "Inc42": {
    domain: "inc42.com",
    allow_cookies: 1,
    block_regex: /(\/inc42\.com\/wp-admin\/admin-ajax\.php$|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "India Today": {
    domain: "indiatoday.in",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "Industry Dive (opt-in to custom sites)": {
    domain: "###_usa_industrydive",
    group: [],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/static\\/js\\/dist\\/contentGate\\.bundle\\.js"
  },
  "iNews (UK)": {
    domain: "inews.co.uk",
    allow_cookies: 1,
    block_js_inline: /liveapp\.inews\.co\.uk\/.+\/content\.html/,
    block_regex: /\.tinypass\.com\//
  },
  "InfoLibre.es": {
    domain: "infolibre.es",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Initium Media": {
    domain: "theinitium.com",
    allow_cookies: 1,
    block_regex: /\.wallkit\.net\/js\//
  },
  "Inkl": {
    domain: "inkl.com"
  },
  "Inside Higher Ed": {
    domain: "insidehighered.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Inside Retail (opt-in to custom sites)": {
    domain: "###_au_inside_retail",
    group: [],
    ld_json_url: "div#premium-box|div.article__text__holder|1"
  },
  "InvestSmart": {
    domain: "###_au_investsmart",
    group: [
      "intelligentinvestor.com.au",
      "investsmart.com.au"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Interesting Engineering": {
    domain: "interestingengineering.com",
    allow_cookies: 1
  },
  "Internazionale.it": {
    domain: "internazionale.it",
    allow_cookies: 1,
    block_regex: /\.internazionale\.it\/templates_js_ajax\.inc\.php/
  },
  "Investors' Chronicle (UK)": {
    domain: "investorschronicle.co.uk",
    allow_cookies: 1,
    referer: "google"
  },
  "iPolitics.ca": {
    domain: "ipolitics.ca",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Ippen.media (opt-in to custom sites for unlisted)": {
    domain: "###_de_ippen_media",
    group: [
      "fr.de",
      "merkur.de",
      "ovb-online.de"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/sub\\/js\\/pc-offer-west\\.js"
  },
  "Irish Independent": {
    domain: "independent.ie",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Italia Oggi": {
    domain: "italiaoggi.it",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Jacobin.de": {
    domain: "jacobin.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Jazzwise": {
    domain: "jazzwise.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Jeune Afrique (last month only)": {
    domain: "jeuneafrique.com",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|\.jeuneafrique\.com\/cdn-cgi\/trace)/,
    cs_param: {"x-exp": "1741079242710", "x-sig": "b431724e94023a6969c5427133e1614db2cbe90e"},
    cs_dompurify: 1
  },
  "Kathimerini.gr": {
    domain: "kathimerini.gr",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Kölner Stadt-Anzeiger": {
    domain: "ksta.de",
    remove_cookies_select_drop: ["anon_cookie"]
  },
  "Kölnische Rundschau": {
    domain: "rundschau-online.de",
    remove_cookies_select_drop: ["anon_cookie"]
  },
  "Kompas.id": {
    domain: "kompas.id",
    allow_cookies: 1
  },
  "Krautreporter.de": {
    domain: "krautreporter.de"
  },
  "Kurier.at": {
    domain: "kurier.at",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "L'Écho": {
    domain: "lecho.be",
    referer: "google"
  },
  "L'Équipe.fr (not Les notes)": {
    domain: "lequipe.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "L'Express": {
    domain: "lexpress.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\/data/
  },
  "L'Informé": {
    domain: "linforme.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "L'Oeil de la Photographie": {
    domain: "loeildelaphotographie.com",
    allow_cookies: 1,
    block_regex: /cdn\.loeildelaphotographie\.com\/wp-content\/.+\/hague-child\/js\/script-.+\.js/
  },
  "L'Opinion (fetch from archive.is; not Le Journal)": {
    domain: "lopinion.fr",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    cs_dompurify: 1
  },
  "La Diaria.com.uy": {
    domain: "ladiaria.com.uy",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "La Gaceta.com.ar (no menu)": {
    domain: "lagaceta.com.ar",
    allow_cookies: 1,
    block_regex: /\.lagaceta\.com\.ar\/ajax\/getInfo/,
    useragent: "facebookbot"
  },
  "La Gazzetta dello Sport (text only)": {
    domain: "gazzetta.it",
    allow_cookies: 1
  },
  "La Nación (free articles only)": {
    domain: "lanacion.com.ar"
  },
  "La Nouvelle République du Centre-Ouest": {
    domain: "lanouvellerepublique.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "La Tercera": {
    domain: "latercera.com",
    allow_cookies: 1,
    block_regex: /\.latercera\.com\/arc\/subs\/p\.min\.js/
  },
  "La Vanguardia": {
    domain: "lavanguardia.com",
    allow_cookies: 1,
    block_regex: /\/ev\.lavanguardia\.com\//
  },
  "Landwirtschaftsverlag": {
    domain: "###_de_lv",
    group: [
      "profi.de",
      "topagrar.com",
      "wochenblatt.com"
    ],
    allow_cookies: 1,
    exception: [{
        domain: "topagrar.com",
        allow_cookies: 1,
        block_js_inline: /\.topagrar\.com\/.+\/news\//
      }
    ]
  },
  "Las Vegas Review-Journal": {
    domain: "reviewjournal.com",
    allow_cookies: 1,
    block_regex: /\.reviewjournal\.com\/wp-content\/plugins\/.+\/loader_prod\.min\.js/
  },
  "Le Courrier des Stratèges": {
    domain: "lecourrierdesstrateges.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Le Devoir": {
    domain: "ledevoir.com",
    block_regex: /\.tinypass\.com\//,
    remove_cookies_select_drop: ["pw6"]
  },
  "Le Figaro (no video)": {
    domain: "lefigaro.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Le Grand Continent": {
    domain: "legrandcontinent.eu",
    allow_cookies: 1
  },
  "Le Journal du Dimanche": {
    domain: "lejdd.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le Journal du Net": {
    domain: "journaldunet.com",
    allow_cookies: 1
  },
  "Le Monde.fr": {
    domain: "lemonde.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Le Monde Diplomatique Brasil": {
    domain: "diplomatique.org.br",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Le Nouvel Economiste": {
    domain: "lenouveleconomiste.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Le Parisien": {
    domain: "leparisien.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Le Point": {
    domain: "lepoint.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//,
    cs_dompurify: 1
  },
  "Le Revenu": {
    domain: "lerevenu.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Le Télégramme": {
    domain: "letelegramme.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le1Hebdo.fr": {
    domain: "le1hebdo.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Lee Enterprises Group (opt-in to custom sites for unlisted)": {
    domain: "###_usa_lee_ent",
    group: [
      "buffalonews.com",
      "journalnow.com",
      "journalstar.com",
      "madison.com",
      "nwitimes.com",
      "omaha.com",
      "richmond.com",
      "stltoday.com",
      "tucson.com",
      "tulsaworld.com"
    ],
    allow_cookies: 1,
    block_regex: /\.com\/.+\/tncms\/api\/access\..+\.js/
  },
  "Les Échos": {
    domain: "lesechos.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Les Inrockuptibles": {
    domain: "lesinrocks.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Libération.fr": {
    domain: "liberation.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Linda.nl": {
    domain: "linda.nl",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Literary Review (UK)": {
    domain: "literaryreview.co.uk",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Live Law": {
    domain: "livelaw.in",
    allow_cookies: 1
  },
  "LiveMint (not epaper)": {
    domain: "livemint.com",
    allow_cookies: 1,
    block_regex: /(\.livemint\.com\/lm-img\/subscription\/|\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Loeb Classical Library": {
    domain: "loebclassics.com"
  },
  "London Review of Books": {
    domain: "lrb.co.uk",
    allow_cookies: 1,
    block_js_inline: /\.lrb\.co\.uk\//
  },
  "Los Angeles Times": {
    domain: "latimes.com",
    allow_cookies: 1,
    block_regex: /\.latimes\.com\/meteringjs/
  },
  "MacroBusiness.com.au": {
    domain: "macrobusiness.com.au",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Madsack Mediengruppe (opt-in to custom sites for unlisted)": {
    domain: "###_de_madsack",
    group: [
      "haz.de",
      "kn-online.de",
      "ln-online.de",
      "lvz.de",
      "maz-online.de",
      "neuepresse.de",
      "ostsee-zeitung.de",
      "rnd.de",
      "saechsische.de"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Maine Trust for Local News (opt-in to custom sites)": {
    domain: "###_usa_maine_trust",
    group: [],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/(script|.+\\/loader\\.min)\\.js"
  },
  "Mainichi Shimbun": {
    domain: "mainichi.jp",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Malayala Manorama": {
    domain: "manoramaonline.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
  },
  "Manager-magazin.de (fetch from archive.is)": {
    domain: "manager-magazin.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Marianne.net (last month only)": {
    domain: "marianne.net",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//,
    cs_dompurify: 1
  },
  "MarketWatch": {
    domain: "marketwatch.com",
    block_regex: /\.cxense\.com\//
  },
  "McClatchy Group (opt-in to custom sites for unlisted)": {
    domain: "###_usa_mcc",
    allow_cookies: 1,
    group: [
      "bnd.com",
      "charlotteobserver.com",
      "elnuevoherald.com",
      "fresnobee.com",
      "kansas.com",
      "kansascity.com",
      "kentucky.com",
      "mcclatchydc.com",
      "miamiherald.com",
      "newsobserver.com",
      "sacbee.com",
      "star-telegram.com",
      "thestate.com",
      "tri-cityherald.com"
    ],
    block_regex: /(\.amplitude\.com\/|\.mcclatchy\.com\/mcc-paywall\.js|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "McPherson Media Group (opt-in to custom sites)": {
    domain: "###_au_mmg",
    allow_cookies: 1
  },
  "Media Group Westfalen (fetch from archive.is; opt-in to custom sites for unlisted)": {
    domain: "###_de_mgw",
    group: [
      "ruhrnachrichten.de"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "Mediahuis België (fetch from archive.is)": {
    domain: "###_be_mediahuis",
    group: [
      "gva.be",
      "hbvl.be",
      "nieuwsblad.be",
      "standaard.be"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/extra\\/assets\\/resources\\/js\\/zephrIntegration\\.js",
    cs_dompurify: 1
  },
  "Mediahuis Nederland Regional (fetch from archive.is; opt-in to custom sites for unlisted)": {
    domain: "###_nl_mediahuis_region",
    group: [
      "haarlemsdagblad.nl",
      "leidschdagblad.nl",
      "limburger.nl",
      "noordhollandsdagblad.nl"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Mediahuis Noord (+ regional/opt-in to custom sites)": {
    domain: "###_nl_mediahuis_noord",
    group: [
      "dvhn.nl",
      "lc.nl"
    ],
    allow_cookies: 1,
    block_regex: /(\.ndcmediagroep\.nl\/js\/evolok\/|\.nl\/_\/zh\/worker)/,
    cs_dompurify: 1
  },
  "MediaNews Group (opt-in to custom sites for unlisted)": {
    domain: "###_usa_mng",
    group: [
      "bostonherald.com",
      "denverpost.com",
      "eastbaytimes.com",
      "mercurynews.com",
      "ocregister.com",
      "pressenterprise.com",
      "sandiegouniontribune.com",
      "twincities.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.com\/(script|.+\/loader\.min)\.js|\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/,
    cs_dompurify: 1
  },
  "Medium (opt-in to custom sites for custom domains)": {
    domain: "medium.com",
    allow_cookies: 1,
    group: [
      "medium.com",
      "betterprogramming.pub",
      "towardsdatascience.com"
    ]
  },
  "Medscape (regwall)": {
    domain: "medscape.com",
    allow_cookies: 1,
    block_regex: /(\.medscapestatic\.com\/.+\/medscape-library|\.wbmdstatic\.com\/.+\/chunk-vendors\..+)\.js/
  },
  "Mexico News Daily": {
    domain: "mexiconewsdaily.com",
    allow_cookies: 1,
    block_regex: /\/mexiconewsdaily\.com\/wp-content\/plugins\/leaky-paywall\/js\/leaky-paywall-cookie\.js/
  },
  "Mid-Day (not epaper)": {
    domain: "mid-day.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "MilanoFinanza.it": {
    domain: "milanofinanza.it",
    allow_cookies: 1
  },
  "MIT Sloan Management Review": {
    domain: "sloanreview.mit.edu",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\/sloanreview\.mit\.edu\/.+\/welcome-ad\.js)/
  },
  "MIT Technology Review": {
    domain: "technologyreview.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.mjs)/
  },
  "Monocle": {
    domain: "monocle.com",
    useragent: "googlebot"
  },
  "Motor Presse Stuttgart": {
    domain: "###_de_motor_presse",
    group: [
      "aerokurier.de",
      "auto-motor-und-sport.de",
      "flugrevue.de",
      "motorradonline.de",
      "womenshealth.de"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/thenewsbar\\/config\\/"
  },
  "Motor Sport Magazine (UK)": {
    domain: "motorsportmagazine.com",
    allow_cookies: 1,
    block_regex: /\.motorsportmagazine\.com\/wp-admin\/admin-ajax\.php/,
    cs_dompurify: 1
  },
  "Mountain View Voice": {
    domain: "mv-voice.com"
  },
  "Mundo Deportivo": {
    domain: "mundodeportivo.com",
    allow_cookies: 1,
    block_regex: /\/ev\.mundodeportivo\.com\//
  },
  "Nation Media Group (Kenya; opt-in to custom sites for unlisted)": {
    domain: "###_ke_nation_media",
    group: [
      "businessdailyafrica.com",
      "nation.africa"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "National Geographic USA": {
    domain: "nationalgeographic.com",
    allow_cookies: 1,
    block_regex: /cdn\.registerdisney\.go\.com\//,
    random_ip: "eu"
  },
  "National Review": {
    domain: "nationalreview.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
    cs_dompurify: 1
  },
  "National World Publishing (UK; opt-in to custom sites for unlisted)": {
    domain: "###_uk_nat_world",
    group: [
      "scotsman.com",
      "yorkshirepost.co.uk"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Nautilus": {
    domain: "nautil.us",
    remove_cookies_select_drop: ["arc", "sfa"]
  },
  "NDTV Profit": {
    domain: "ndtvprofit.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-subscriptions-.+\.js/
  },
  "Neue Westfälische": {
    domain: "nw.de",
    allow_cookies: 1
  },
  "Neue Zürcher Zeitung (not epaper)": {
    domain: "nzz.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|ens\.nzz\.ch\/.+\/Bootstrap\.js)/
  },
  "New Scientist": {
    domain: "newscientist.com",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|appan\.newscientist\.com\/pugpig-websmartbanner\.js)/,
    cs_all_frames: 1,
    cs_dompurify: 1
  },
  "New Voice (nv.ua)": {
    domain: "nv.ua",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "New Zealand Herald": {
    domain: "nzherald.co.nz",
    allow_cookies: 1,
    block_regex: /\.nzherald\.co\.nz\/sales\/public\/v\d\/entitlements/
  },
  "Newsday": {
    domain: "newsday.com",
    allow_cookies: 1,
    block_regex: /loader\.newsday\.com\//
  },
  "Newslaundry": {
    domain: "newslaundry.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Newsquest Media Group (UK; opt-in to custom sites)": {
    domain: "###_uk_newsquest",
    group: [],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Newsweek": {
    domain: "newsweek.com",
    block_regex: /(js\.pelcro\.com\/|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "Nikkei Asian Review": {
    domain: "asia.nikkei.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    cs_dompurify: 1
  },
  "Nordwest Zeitung": {
    domain: "nwzonline.de",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "NOZ/MHN Mediengruppe (fetch from archive.is)": {
    domain: "###_de_noz_mhn",
    group: [
      "noz.de",
      "shz.de"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "NRC Handelsblad": {
    domain: "nrc.nl",
    remove_cookies_select_drop: ["counter"],
    block_regex: /\.nrc\.nl\/paywall-api\/api\/zephr/
  },
  "NSC Total": {
    domain: "nsctotal.com.br",
    allow_cookies: 1,
    block_regex: /\.nsctotal\.com\.br\/wp-content\/themes\/nsctotal\/js\/paywall\.min\.js/
  },
  "NWT Media.se (opt-in to custom sites)": {
    domain: "###_se_nwt_media",
    group: [],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "NyTeknik": {
    domain: "nyteknik.se",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "O Estado de S. Paulo": {
    domain: "estadao.com.br",
    allow_cookies: 1,
    block_regex: /(\.estadao\.com\.br\/(paywall\/|access\.js)|\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "O Globo (& Valor Econômico)": {
    domain: "globo.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "Observador.pt": {
    domain: "observador.pt",
    allow_cookies: 1,
    block_js_inline: /\/observador\.pt\/(\d{4}|especiais|opiniao)\//
  },
  "Outdoor Life": {
    domain: "outdoorlife.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Outlook Business": {
    domain: "outlookbusiness.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Outlook India": {
    domain: "outlookindia.com",
    allow_cookies: 1
  },
  "Outside magazines": {
    domain: "###_usa_outside_mag",
    group: [
      "backpacker.com",
      "betamtb.com",
      "betternutrition.com",
      "cleaneatingmag.com",
      "climbing.com",
      "outsideonline.com",
      "oxygenmag.com",
      "skimag.com",
      "trailrunnermag.com",
      "triathlete.com",
      "vegetariantimes.com",
      "womensrunning.com",
      "yogajournal.com"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Oxford University Press (not oup.com; opt-in to custom sites)": {
    domain: "###_uk_oup",
    group: [],
    allow_cookies: 1
  },
  "Palo Alto Online": {
    domain: "paloaltoonline.com"
  },
  "Paris Match": {
    domain: "parismatch.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Paste Magazine": {
    domain: "pastemagazine.com",
    allow_cookies: 1,
    block_regex: /\.pastemagazine\.com\/wp-content\/cache\/autoptimize\/js\/autoptimize_.+\.js/
  },
  "PEI Media (opt-in to custom sites)": {
    domain: "###_usa_pei",
    group: [],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Penske Media Corporation": {
    domain: "###_usa_penske_media",
    allow_cookies: 1,
    group: [
      "billboard.com",
      "rollingstone.com",
      "sourcingjournal.com",
      "sportico.com",
      "variety.com",
      "wwd.com"
    ],
    block_regex: /\.tinypass\.com\//
  },
  "PhiloMag.com": {
    domain: "philomag.com",
    remove_cookies_select_drop: ["number_view_paywall"],
    block_regex: /\.qiota\.com\//,
    useragent: "googlebot"
  },
  "PhiloMag.de": {
    domain: "philomag.de",
    allow_cookies: 1
  },
  "Philonomist": {
    domain: "philonomist.com",
    allow_cookies: 1
  },
  "Philosophy Now": {
    domain: "philosophynow.org"
  },
  "Piqd.de": {
    domain: "piqd.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Pirate Wires": {
    allow_cookies: 1,
    domain: "piratewires.com",
    block_js_inline: /\.piratewires\.com\/p\//,
    useragent_custom: "Mozilla/5.0 (compatible; Twitterbot/1.0)"
  },
  "Pittsburgh Post Gazette": {
    domain: "post-gazette.com",
    block_regex: /\.tinypass\.com\//
  },
  "Política Exterior": {
    domain: "politicaexterior.com",
    allow_cookies: 1
  },
  "Politico (regwall; not pro)": {
    domain: "politico.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Politis.fr": {
    domain: "politis.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Polityka.pl": {
    domain: "polityka.pl",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Popular Science": {
    domain: "popsci.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Postmedia Network (opt-in to custom sites for unlisted)": {
    domain: "###_ca_postmedia",
    group: [
      "calgaryherald.com",
      "financialpost.com",
      "nationalpost.com",
      "theprovince.com",
      "torontosun.com",
      "vancouversun.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.sophi\.io\/|\.amplitude\.com\/)/
  },
  "Pour l'Éco": {
    allow_cookies: 1,
    domain: "pourleco.com",
    block_regex: /\.poool\.fr\//
  },
  "Pour la Science.fr": {
    domain: "pourlascience.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Private Media AU": {
    domain: "###_au_private_media",
    group: [
      "crikey.com.au",
      "smartcompany.com.au",
      "themandarin.com.au"
    ],
    remove_cookies_select_drop: ["blaize_session"]
  },
  "Profil.at": {
    domain: "profil.at",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Project Syndicate (fetch from archive.is)": {
    domain: "project-syndicate.org",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "ProMedia.nl Group (opt-in to custom sites)": {
    domain: "###_nl_promedia",
    group: [],
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "Prospect Magazine": {
    domain: "prospectmagazine.co.uk",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Public.fr": {
    domain: "public.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Público.es": {
    domain: "publico.es",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Puck.news (fetch from archive.is)": {
    domain: "puck.news",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Puls Biznesu": {
    domain: "pb.pl",
    allow_cookies: 1,
    block_regex: /\.pb\.pl\/api\/tinypass\.min\.js/
  },
  "Quartz (newsletter)": {
    domain: "qz.com",
    allow_cookies: 1,
    block_regex: /\.kinja-static\.com\/assets\/.+\/regwalled-content.+\.js/
  },
  "Quora": {
    domain: "quora.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Quotidiano.net (+ regional)": {
    domain: "###_it_quotidiano",
    group: [
      "ilgiorno.it",
      "ilrestodelcarlino.it",
      "iltelegrafolivorno.it",
      "lanazione.it",
      "quotidiano.net"
    ],
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Réforme.net": {
    domain: "reforme.net",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Reuters": {
    domain: "reuters.com",
    allow_cookies: 1,
    block_regex: /\.reuters\.com\/arc\/subs\/p\.min\.js/
  },
  "Revista Oeste": {
    domain: "revistaoeste.com",
    allow_cookies: 1,
    block_js_inline: /\/revistaoeste\.com\/revista\//,
    block_regex: /\/revistaoeste\.com\/wp-content\/.+\/js\/app\..+\.js/
  },
  "Revue Conflits": {
    domain: "revueconflits.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\/data/
  },
  "Revue21.fr": {
    domain: "revue21.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Rheinische Post Mediengruppe (fetch from archive.is)": {
    domain: "###_de_rp_medien",
    group: [
      "ga.de",
      "rp-online.de",
      "saarbruecker-zeitung.de",
      "volksfreund.de"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    cs_dompurify: 1
  },
  "Ringier Gruppe (ch)": {
    allow_cookies: 1,
    domain: "###_ch_ringier",
    group: [
      "beobachter.ch",
      "blick.ch",
      "handelszeitung.ch"
    ],
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1,
    useragent: "googlebot",
    exception: [{
        domain: "blick.ch",
        allow_cookies: 1,
        block_regex: /\.tinypass\.com\//
      }
    ]
  },
  "Ringier Axel Springer Polska": {
    domain: "###_pl_ringier",
    group: [
      "auto-swiat.pl",
      "businessinsider.com.pl",
      "forbes.pl",
      "komputerswiat.pl",
      "newsweek.pl",
      "onet.pl"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "Roularta Media Group": {
    domain: "###_be_roularta",
    group: [
      "artsenkrant.com",
      "beleggersbelangen.nl",
      "femmesdaujourdhui.be",
      "flair.be",
      "knack.be",
      "kw.be",
      "levif.be",
      "libelle.be"
    ],
    allow_cookies: 1,
    block_js_inline: /\.be\/.+\/(\w+-){2,}/,
    block_regex: "(\\.|\\/){domain}\\/(script|js\\/responsive\\/rmg(Modal|Paywall))\\.js",
    exception: [{
        domain: ["artsenkrant.com", "beleggersbelangen.nl", "kw.be"],
        allow_cookies: 1,
        block_regex: "(\\.|\\/){domain}\\/(script|js\\/responsive\\/rmg(Modal|Paywall))\\.js",
      }
    ]
  },
  "RugbyPass": {
    domain: "rugbypass.com",
    allow_cookies: 1,
    block_js_inline: /\.rugbypass\.com\/plus\/\w/,
    block_regex: /\.tinypass\.com\//
  },
  "S&P Global": {
    domain: "spglobal.com",
    block_regex: /\.spglobal\.com\/script\.js/,
    remove_cookies_select_drop: ["count"]
  },
  "Sábado (not video)": {
    domain: "sabado.pt",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/
  },
  "Scholastic": {
    "domain": "scholastic.com",
    "allow_cookies": 1
  },
  "Schweizer Monat": {
    domain: "schweizermonat.ch",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Science (free articles only)": {
    domain: "science.org",
    allow_cookies: 1
  },
  "Science & Vie": {
    domain: "science-et-vie.com",
    block_regex: /\.qiota\.com\//
  },
  "ScienceNews.org": {
    domain: "sciencenews.org",
    remove_cookies_select_drop: ["blaize_session"]
  },
  "Sciences et Avenir": {
    domain: "sciencesetavenir.fr",
    block_regex: /(\.poool\.fr\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Sciences Humaines": {
    domain: "scienceshumaines.com",
    remove_cookies_select_drop: ["number_view_paywall"],
    block_regex: /\.qiota\.com\//,
    useragent: "googlebot"
  },
  "Scientific American": {
    domain: "scientificamerican.com",
    remove_cookies_select_drop: ["article_meter"],
    block_regex: /\.scientificamerican\.com\/api\/tinypass\.min\.js/
  },
  "Sky.it (sport & tg24 only)": {
    domain: "sky.it",
    allow_cookies: 1
  },
  "Slate": {
    domain: "slate.com",
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "SlideShare": {
    domain: "slideshare.net",
    allow_cookies: 1
  },
  "SOFREP": {
    domain: "sofrep.com"
  },
  "South China Morning Post": {
    domain: "scmp.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v0\/amp-(access|subscriptions)-.+\.js)/
  },
  "Southern Weekly": {
    domain: "infzm.com",
    allow_cookies: 1
  },
  "Spektrum.de": {
    domain: "spektrum.de",
    allow_cookies: 1
  },
  "SPH Media (fetch from archive.is)": {
    domain: "###_sg_sph_media",
    group: [
      "businesstimes.com.sg",
      "straitstimes.com"
    ],
    allow_cookies: 1,
    exception: [{
        domain: "straitstimes.com",
        allow_cookies: 1,
        cs_dompurify: 1
      }
    ]
  },
 "Sport Life Ibérica (text only; opt-in to custom sites)": {
    domain: "###_es_sport_life",
    group: [],
    allow_cookies: 1,
    ld_json: "div.c-paywall|div.c-mainarticle__body"
  },
  "Sports Illustrated": {
    domain: "si.com",
    allow_cookies: 1,
    block_regex: /\.si\.com\/script\.js/
  },
  "Springer Medizin": {
    domain: "springermedizin.de",
    allow_cookies: 1
  },
  "Standardmedia.co.ke (text only)": {
    domain: "standardmedia.co.ke",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Star Tribune": {
    domain: "startribune.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "StatNews": {
    domain: "statnews.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Stereogum": {
    domain: "stereogum.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Stern.de (fetch from archive.is)": {
    domain: "stern.de",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Stock News": {
    domain: "stocknews.com",
    allow_cookies: 1
  },
  "Stratfor": {
    domain: "stratfor.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Study.com (only lessons; no videos)": {
    domain: "study.com",
    allow_cookies: 1
  },
  "Stylist.co.uk": {
    domain: "stylist.co.uk",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Suomen Sotilas": {
    domain: "suomensotilas.fi",
    allow_cookies: 1,
    block_regex: /\/suomensotilas\.fi\/wp-content\/plugins\/epflpw\/js\/pw\.js/
  },
  "Süddeutsche Zeitung": {
    domain: "sueddeutsche.de",
    allow_cookies: 1,
    block_regex: /\.sueddeutsche\.de\/api\/tinypass\.min\.js/,
    cs_dompurify: 1
  },
  "Südkurier (fetch from archive.is)": {
    domain: "suedkurier.de",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "Swarajyamag": {
    domain: "swarajyamag.com",
    allow_cookies: 1
  },
  "T3n.de (text only)": {
    domain: "t3n.de",
    allow_cookies: 1
  },
  "Tamedia.ch Group (opt-in to custom sites for unlisted)": {
    domain: "###_ch_tamedia",
    group: [
      "24heures.ch",
      "bazonline.ch",
      "bernerzeitung.ch",
      "derbund.ch",
      "tagesanzeiger.ch",
      "tdg.ch"
    ],
    remove_cookies_select_drop: ["xbc"],
    block_regex: /\.tinypass\.com\//
  },
  "Tampa Bay Times": {
    domain: "tampabay.com",
    allow_cookies: 1,
    block_regex: /(\.zephr\.com\/zephr-browser\/|js\.matheranalytics\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "Tech in Asia": {
    domain: "techinasia.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "TechTarget Group": {
    domain: "###_usa_techtarget",
    allow_cookies: 1,
    group: [
      "computerweekly.com",
      "lemagit.fr",
      "techtarget.com"
    ]
  },
  "Telegraaf": {
    domain: "telegraaf.nl",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Tempo.co": {
    domain: "tempo.co",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Télérama.fr": {
    domain: "telerama.fr",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Tes Magazine": {
    domain: "tes.com",
    remove_cookies_select_drop: ["tg_paywall"]
  },
  "Texas Monthly": {
    domain: "texasmonthly.com",
    allow_cookies: 1,
    block_regex: /\.texasmonthly\.com\/script\.js/
  },
  "The (New Orleans) Advocate": {
    domain: "###_usa_theadvocate",
    group: [
      "nola.com",
      "shreveportbossieradvocate.com",
      "theadvocate.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/(script|.+\\/tncms\\/api\\/access\\..+)\\.js|\\.townnews\\.com\\/.+\\/engage\\.min\\.js)"
  },
  "The American Conservative": {
    domain: "theamericanconservative.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The American Interest": {
    domain: "the-american-interest.com",
    allow_cookies: 1
  },
  "The American Scholar": {
    domain: "theamericanscholar.org",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Art Newspaper": {
    domain: "theartnewspaper.com",
    allow_cookies: 1,
    block_regex: /\.theartnewspaper\.com\/_next\/static\/chunks\/pages\/access-allowed-.+\.js/
  },
  "The Atlanta Journal-Constitution": {
    domain: "ajc.com",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/|\.sophi\.io\/)/
  },
  "The Atlantic": {
    domain: "theatlantic.com",
    allow_cookies: 1,
    block_regex: /\.theatlantic\.com\/zephr\//
  },
  "The Baffler": {
    domain: "thebaffler.com",
    allow_cookies: 1,
    block_regex: /\/blink\.net\/.+\/blink-sdk\.js/
  },
  "The Baltimore Banner": {
    domain: "thebaltimorebanner.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.thebaltimorebanner\.com\/script\.js)/
  },
  "The Boston Globe": {
    domain: "bostonglobe.com",
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|meter\.bostonglobe\.com\/js\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "The Business Journals (free articles only)": {
    domain: "bizjournals.com",
    allow_cookies: 1,
    block_regex: /\.cxense\.com\//,
    useragent: "googlebot"
  },
  "The Business of Fashion": {
    domain: "businessoffashion.com",
    allow_cookies: 1,
    block_regex: /\.businessoffashion\.com\/arc-platform-proxy\.js/
  },
  "The Christian Science Monitor": {
    domain: "csmonitor.com",
    allow_cookies: 1
  },
  "The Chronicle of Higher Education (& Philanthropy)": {
    domain: "###_usa_chronicle",
    group: [
      "chronicle.com",
      "philanthropy.com"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/script\\.js"
  },
  "The Columbian": {
    domain: "columbian.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Critic": {
    domain: "thecritic.co.uk",
    block_regex: /\.hadrianpaywall\.com\//
  },
  "The Daily Beast": {
    domain: "thedailybeast.com",
    block_regex: /\.tinypass\.com\//
  },
  "The Daily Wire (news only)": {
    domain: "dailywire.com",
    allow_cookies: 1
  },
  "The Dallas Morning News": {
    domain: "dallasnews.com",
    allow_cookies: 1,
    block_regex: /(\.dallasnews\.com\/script\.js|js\.matheranalytics\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "The Diplomat": {
    domain: "thediplomat.com",
    useragent: "facebookbot",
    cs_dompurify: 1
  },
  "The Dispatch": {
    domain: "thedispatch.com",
    allow_cookies: 1,
    block_regex: /\.thedispatch\.com\/api\/tinypass\.min\.js/
  },
  "The Economic Times (ET Prime)": {
    domain: "###_economictimes",
    group: [
      "economictimes.com",
      "economictimes.indiatimes.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "The Economist": {
    domain: "economist.com",
    allow_cookies: 1,
    block_regex: /(\/zephr\/feature|\.economist\.com\/latest\/wall-ui\.js)/,
    useragent_custom: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.6533.103 Mobile Safari/537.36 Lamarr"
  },
  "The Epoch Times (+ br|cz|de|fr|jp|ro; opt-in to custom sites)": {
    domain: "###_usa_epochtimes",
    group: [
      "epoch.org.il",
      "theepochtimes.com"
    ],
    allow_cookies: 1,
    block_regex: /\.(theepochtimes\.com|epochbase\.(com|eu))\/(rules\/get|libs\/paywall.+\.js)/,
    exception: [{
        domain: "epoch.org.il",
        allow_cookies: 1,
        block_js_inline: /\/epoch\.org\.il\/.+\/\d{5,}\//,
        cs_dompurify: 1
      }
    ]
  },
  "The Financial Express": {
    domain: "financialexpress.com",
    allow_cookies: 1,
    block_regex: /(\.financialexpress\.com\/.+\/min\/premiumStoryContent\.js|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "The Globe and Mail": {
    domain: "theglobeandmail.com",
    allow_cookies: 1,
    block_regex: /(\.sophi\.io\/|\.zephr\.com\/zephr-browser\/)/
  },
  "The Hill": {
    domain: "thehill.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "The Hill Times": {
    domain: "hilltimes.com",
    allow_cookies: 1,
    block_regex: /\.hilltimes\.com\/.+\/js\/loadingoverlay\/loadingoverlay\.min\.js/,
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "The Hindu (not epaper)": {
    domain: "thehindu.com",
    allow_cookies: 1,
    block_regex: /(\.cxense\.com\/|\.piano\.io\/xbuilder\/experience\/execute|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "The Hindu BusinessLine (not epaper)": {
    domain: "thehindubusinessline.com",
    allow_cookies: 1,
    block_regex: /(\.cxense\.com\/|\.piano\.io\/xbuilder\/experience\/execute|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/
  },
  "The Impression": {
    domain: "theimpression.com",
    allow_cookies: 1
  },
  "The Independent (UK & USA)": {
    domain: "###_uk_independent",
    group: [
      "independent.co.uk",
      "the-independent.com"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "The Indian Express": {
    domain: "indianexpress.com",
    allow_cookies: 1,
    block_regex: /(\/indianexpress\/js\/evolok\/|\.fewcents\.co\/.+\/paywall.*\.js|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "The Intercept (regwall)": {
    domain: "theintercept.com",
    allow_cookies: 1,
    block_js_inline: /\/theintercept\.com\//
  },
  "The Irish Examiner": {
    domain: "irishexaminer.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Irish News": {
    domain: "irishnews.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "The Irish Times": {
    domain: "irishtimes.com",
    allow_cookies: 1,
    block_regex: /\.irishtimes\.com\/zephr\/feature/
  },
  "The Japan Times (do not block TinyPass-script externally)": {
    domain: "japantimes.co.jp",
    block_regex: /\.cxense\.com\//,
    remove_cookies_select_drop: ["xbc"]
  },
  "The Jerusalem Post": {
    domain: "jpost.com",
    allow_cookies: 1,
    block_regex: /\.jpost\.com\/js\/js_article\.min\.js/
  },
  "The Juggernaut": {
    domain: "###_usa_thejuggernaut",
    group: [
      "thejuggernaut.com",
      "jgnt.co"
    ],
    allow_cookies: 1
  },
  "The Lamp Magazine": {
    domain: "thelampmagazine.com",
    allow_cookies: 1
  },
  "The Lawyer (UK; not mda)": {
    domain: "thelawyer.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "The Leaflet.in": {
    domain: "theleaflet.in",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Logic.co (do not block TinyPass-script externally)": {
    domain: "thelogic.co",
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/)/,
    remove_cookies_select_drop: ["firstarticle"]
  },
  "The Market.ch": {
    domain: "themarket.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|ens\.themarket\.ch\/.+\/Bootstrap\.js)/
  },
  "The Nation": {
    domain: "thenation.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.ampproject\.org\/v0\/amp-access-.+\.js)/
  },
  "The New Atlantis": {
    domain: "thenewatlantis.com",
    allow_cookies: 1,
    block_regex: /\.thenewatlantis\.com\/.+\/thenewatlantis\/js\/(gate|donate)\.js/
  },
  "The New Criterion": {
    domain: "newcriterion.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The New European": {
    domain: "theneweuropean.co.uk",
    allow_cookies: 1,
    block_regex: /cdn\.tinypass\.com\//
  },
  "The New Republic": {
    domain: "newrepublic.com",
    allow_cookies: 1,
    block_regex: /\/blink\.net\/.+\/blink-sdk\.js/
  },
  "The New Statesman": {
    domain: "newstatesman.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "The New York Review of Books": {
    domain: "nybooks.com",
    allow_cookies: 1,
    block_regex: /\.nybooks\.com\/wp-admin\/admin-ajax\.php/
  },
  "The New York Sun": {
    domain: "nysun.com",
    allow_cookies: 1,
    block_regex: /\.nysun\.com\/zephr\//
  },
  "The New York Times": {
    domain: "nytimes.com",
    allow_cookies: 1,
    block_regex: /(\.nytimes\.com\/(meter\.js|svc\/onsite-messaging\/query)|mwcm\.nyt\.com\/.+\.js|cooking\.nytimes\.com\/api\/.+\/access)/,
    useragent: "googlebot"
  },
  "The News Lens": {
    allow_cookies: 1,
    domain: "thenewslens.com"
  },
  "The News Minute": {
    domain: "thenewsminute.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Philadelphia Inquirer": {
    domain: "inquirer.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|js\.matheranalytics\.com\/)/
  },
  "The Point Magazine": {
    domain: "thepointmag.com",
    remove_cookies_select_drop: ["monthly_history"]
  },
  "The Quint": {
    domain: "thequint.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Salt Lake Tribune": {
    domain: "sltrib.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
  },
  "The San Francisco Standard": {
    domain: "sfstandard.com"
  },
  "The Saturday Paper": {
    domain: "thesaturdaypaper.com.au",
    block_regex: /\.thesaturdaypaper\.com\.au\/sites\/all\/modules\/custom\/node_meter\/pw\.js/
  },
  "The Scientist (archive)": {
    domain: "the-scientist.com",
    allow_cookies: 1
  },
  "The Seattle Times": {
    domain: "seattletimes.com",
    allow_cookies: 1,
    block_regex: /(\.seattletimes\.com\/.+\/st-user-messaging.+\.js|js\.matheranalytics\.com\/)/
  },
  "The Spectator (UK)": {
    domain: "spectator.co.uk",
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "The Spectator Australia": {
    domain: "spectator.com.au",
    allow_cookies: 1,
    useragent: "googlebot",
    cs_dompurify: 1
  },
  "The Spectator World": {
    domain: "thespectator.com",
    allow_cookies: 1,
    block_regex: /\.thespectator\.com\/api\/tinypass\.min\.js/
  },
  "The Stage Media (UK)": {
    "domain": "###_uk_thestage_media",
    "allow_cookies": 1,
    "group": [
      "thebookseller.com",
      "thestage.co.uk"
    ],
    cs_dompurify: 1,
    exception: [{
        domain: "thebookseller.com",
        allow_cookies: 1,
        useragent: "googlebot"
      }
    ]
  },
  "The Sun Group (UK)": {
    domain: "###_uk_thesun",
    group: [
      "thescottishsun.co.uk",
      "thesun.co.uk"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/zephr\\/feature"
  },
  "The Telegraph": {
    domain: "telegraph.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.telegraph\.co\.uk\/martech\/js\/)/
  },
  "The Times UK (fetch from archive.is)": {
    domain: "thetimes.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Times Literary Supplement": {
    domain: "the-tls.co.uk",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "The Toronto Star (+ local TorStar sites)": {
    domain: "###_ca_torstar",
    group: [
      "niagarafallsreview.ca",
      "stcatharinesstandard.ca",
      "thepeterboroughexaminer.com",
      "therecord.com",
      "thespec.com",
      "thestar.com",
      "wellandtribune.ca"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/(script|.+\\/tncms\\/api\\/access\\..+)\\.js|\\.ampproject\\.org\\/v\\d\\/amp-access-.+\\.js)",
    cs_dompurify: 1
  },
  "The Wall Street Journal": {
    domain: "wsj.com",
    allow_cookies: 1,
    referer_custom: "https://www.drudgereport.com/",
    cs_dompurify: 1
  },
  "The Washington Post": {
    domain: "washingtonpost.com",
    allow_cookies: 1,
    block_regex: /\.washingtonpost\.com\/.+\/tetro-client\//
  },
  "The Week (regwall)": {
    domain: "theweek.com",
    allow_cookies: 1
  },
  "The West Australian (+ regional/opt-in to custom sites)": {
    domain: "thewest.com.au",
    allow_cookies: 1
  },
  "The Wrap": {
    domain: "thewrap.com",
    remove_cookies_select_drop: ["blaize_session"],
    cs_dompurify: 1
  },
  "Times Higher Education": {
    domain: "timeshighereducation.com",
    allow_cookies: 1
  },
  "Times of India": {
    domain: "###_timesofindia",
    group: [
      "epaper.indiatimes.com",
      "timesofindia.indiatimes.com"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Tiroler Tageszeitung": {
    domain: "tt.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\/xbuilder\/experience\/execute/,
    cs_dompurify: 1
  },
  "Tribune Publishing Company": {
    domain: "###_usa_tribune",
    group: [
      "baltimoresun.com",
      "capitalgazette.com",
      "chicagotribune.com",
      "courant.com",
      "dailypress.com",
      "mcall.com",
      "nydailynews.com",
      "orlandosentinel.com",
      "pilotonline.com",
      "sun-sentinel.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/(script|.+\\/loader-wp\\/static\\/loader\\.min)\\.js)",
    cs_dompurify: 1
  },
  "Tuttosport": {
    domain: "tuttosport.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "UnHerd": {
    domain: "unherd.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "UOL.com.br": {
    domain: "uol.com.br",
    allow_cookies: 1,
    block_regex: /(paywall\.folha\.uol\.com\.br\/|\.(tinypass|matheranalytics)\.com\/|\.ampproject\.org\/v0\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "USA Today": {
    domain: "usatoday.com",
    allow_cookies: 1,
    block_regex: /\.ampproject\.org\/v0\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Valeurs Actuelles": {
    domain: "valeursactuelles.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Valnet Group (regwall; opt-in to custom sites)": {
    domain: "###_ca_valnet",
    group: [],
    remove_cookies_select_drop: ["articlesLimitDepth", "articlesReadPerDay"]
  },
  "Verlagsgruppe Rhein Main (opt-in to custom sites for unlisted)": {
    allow_cookies: 1,
    domain: "###_de_vrm",
    group: [
      "allgemeine-zeitung.de",
      "echo-online.de",
      "wiesbadener-kurier.de"
    ],
    allow_cookies: 1,
    block_regex: /\.piano\.io\//,
    useragent: "googlebot"
  },
  "Vice": {
    domain: "vice.com",
    allow_cookies: 1
  },
  "Vikatan": {
    domain: "vikatan.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Vogue Business": {
    domain: "voguebusiness.com",
    block_regex: /\.voguebusiness\.com\/journey\/compiler\/build-.+\.js/,
    remove_cookies_select_drop: ["userId"]
  },
  "Vorarlberg Nachrichten": {
    domain: "vn.at",
    allow_cookies: 1,
    block_js_inline: /\.vn\.at\/.+\/\d{4}\//,
    block_regex: /\.tinypass\.com\//,
  },
  "Vorarlberg Online": {
    domain: "vol.at",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    cs_dompurify: 1
  },
  "Vox Media Group": {
    domain: "###_usa_vox_media",
    group: [
      "curbed.com",
      "grubstreet.com",
      "nymag.com",
      "thecut.com",
      "theverge.com",
      "vox.com",
      "vulture.com"
    ],
    allow_cookies: 1,
    block_regex: /\.zephr\.com\/zephr-browser\//
  },
  "Vox": {
    domain: "vox.com",
    allow_cookies: 1,
    block_regex: /\.zephr\.com\/zephr-browser\//
  },
  "Vrij Nederland": {
    domain: "vn.nl",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Washington Examiner": {
    domain: "washingtonexaminer.com",
    allow_cookies: 1,
    block_regex: /\.zephr\.com\/zephr-browser\//
  },
  "Weltkunst": {
    domain: "weltkunst.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Weser-Kurier": {
    domain: "weser-kurier.de",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/xbuilder\/experience\/execute|\.cxense\.com\/)/
  },
  "William Reed Group (opt-in to custom sites)": {
    domain: "###_uk_william_reed",
    group: [],
    block_regex: /\.tinypass\.com\//,
    add_ext_link: "div.accessMessage|div.accessContainer",
    add_ext_link_type: "google_search_tool",
  },
  "Winnipeg Free Press": {
    domain: "winnipegfreepress.com",
    allow_cookies: 1,
    block_regex: /(\.winnipegfreepress\.com\/(api\/v\d\/auth\/identify|.+\/gdpr\.js)|\.cxense\.com\/)/
  },
  "Wonderzine": {
    domain: "wonderzine.com",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Wyborcza.pl Group (fetch from archive.is)": {
    domain: "###_pl_wyborcza_group",
    group: [
      "magazyn-kuchnia.pl",
      "wyborcza.biz",
      "wyborcza.pl",
      "wysokieobcasy.pl"
    ],
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "Ynet": {
    domain: "ynet.co.il",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "ZeroHedge": {
    domain: "zerohedge.com",
    allow_cookies: 1,
    cs_dompurify: 1
  },
  "* Block general paywall-scripts (opt-in to custom sites to enable also for unlisted sites)": {
    domain: "###"
  },
  "Amp-access": {
    domain: "cdn.ampproject.org",
    allow_cookies: 1,
    block_regex_general: /\.ampproject\.org\/.+\/amp-(access|(.+-)?ad|analytics|fx-flying-carpet|subscriptions)-.+\.m?js/,
    excluded_domains: ["cdn.ampproject.org", "cambridge.org", "cmjornal.pt"]
  },
  "Amplitude": {
    domain: "amplitude.com",
    allow_cookies: 1,
    block_regex_general: /\.amplitude\.com\//,
    excluded_domains: ["amplitude.com"]
  },
  "Arc XP": {
    domain: "###_arcxp.com",
    allow_cookies: 1,
    block_regex_general: /\/arc\/subs\/p\.min\.js/,
    excluded_domains: ["nzherald.co.nz"]
  },
  "Axate.io": {
    domain: "###_uk_axate.io",
    allow_cookies: 1,
    block_regex_general: /\.axate\.io\//
  },
  "Azure Connext Loader": {
    domain: "###_azure_connext",
    allow_cookies: 1,
    block_regex_general: /(cdn|loader)\..+\.com\/prod\/.+\/loader\.min\.js/
  },
  "BlueConic": {
    domain: "blueconic.net",
    allow_cookies: 1,
    block_regex_general: /(\.blueconic\.net\/|[a-z]{1}[0-9]{2,3}\.[\w-]+\.(co(m|\.uk)|net|org)\/script\.js)/
  },
  "Cxense": {
    domain: "cxense.com",
    allow_cookies: 1,
    block_regex_general: /\.cxense\.com\//,
    excluded_domains: ["journaldemontreal.com", "journaldequebec.com", "wsj.com"]
  },
  "Ensighten": {
    domain: "ensighten.com",
    allow_cookies: 1,
    block_regex_general: /\.ensighten\.com\/.+\/Bootstrap\.js/
  },
  "EverCookie": {
    domain: "###_evercookie",
    allow_cookies: 1,
    block_regex_general: /\/paywall\/evercookie_get\.js/
  },
  "Evolok": {
    domain: "evolok.net",
    allow_cookies: 1,
    block_regex_general: /\.evolok\.net\//
  },
  "Evolok WordPress": {
    domain: "###_wp_evolok",
    allow_cookies: 1,
    block_regex_general: /\/evolok\/(.+\/)?ev-(em|widgets)\.min\.js/,
    excluded_domains: ["vikatan.com"]
  },
  "FewCents": {
    domain: "fewcents.co",
    allow_cookies: 1,
    block_regex_general: /\.fewcents\.co\/.+\/paywall.*\.js/
  },
  "Leaky Paywall (WordPress plugin)": {
    domain: "###_wp_leaky_paywall",
    group: [],
    block_regex_general: /\/wp-content\/plugins\/leaky-paywall\/js\/leaky-paywall-cookie\.js/
  },
  "MatherAnalytics": {
    domain: "matheranalytics.com",
    allow_cookies: 1,
    block_regex_general: /js\.matheranalytics.com\//
  },
  "NewsMemory": {
    domain: "newsmemory.com",
    allow_cookies: 1,
    block_regex_general: /\.newsmemory\.com\/\?meter/
  },
  "Omeda Olytics": {
    domain: "omeda.com",
    allow_cookies: 1,
    block_regex_general: /olytics\.omeda\.com\//,
    excluded_domains: ["omeda.com"]
  },
  "OneCount": {
    domain: "onecount.net",
    allow_cookies: 1,
    block_regex_general: /\.onecount\.net\//
  },
  "Pelcro": {
    domain: "pelcro.com",
    allow_cookies: 1,
    block_regex_general: /js\.pelcro\.com\//,
    excluded_domains: ["pelcro.com"]
  },
  "Piano.io (+ TinyPass)": {
    domain: "piano.io",
    allow_cookies: 1,
    block_regex_general: /\/xbuilder\/experience\/execute/,
    excluded_domains: ["piano.io", "fortune.com", "hbr.org", "japantimes.co.jp", "nacion.com"]
  },
  "Pico.tools": {
    domain: "pico.tools",
    allow_cookies: 1,
    block_regex_general: /api\.pico\.tools\//
  },
  "Pigeon (WordPress plugin)": {
    domain: "###_wp_pigeon",
    allow_cookies: 1,
    block_regex_general: /\/c\/assets\/pigeon\.js/
  },
  "Poool.fr": {
    domain: "poool.fr",
    allow_cookies: 1,
    block_regex_general: /\.poool\.fr\//,
    excluded_domains: ["poool.fr"]
  },
  "Qiota": {
    domain: "qiota.com",
    allow_cookies: 1,
    block_regex_general: /\.qiota\.com\/data/,
    excluded_domains: ["qiota.com"]
  },
  "RCP-View Limit (WordPress plugin)": {
    domain: "###_rcp_view_limit",
    allow_cookies: 1,
    block_regex_general: /\/wp-content\/.+\/plugins\/rcp-view-limit\//
  },
  "Sophi.io": {
    domain: "sophi.io",
    allow_cookies: 1,
    block_regex_general: /\.sophi\.io\//,
    excluded_domains: ["sophi.io"]
  },
  "Steady": {
    domain: "steadyhq.com",
    allow_cookies: 1,
    block_regex_general: /\/steadyhq\.com\//,
    excluded_domains: ["steadyhq.com"]
  },
  "TownNews sites (Blox CMS)": {
    domain: "###_usa_townnews",
    block_regex_general: /\/tncms\/api\/access(\..+)?\.js/,
    cs_dompurify: 1,
    exception: [{
        domain: "berkshireeagle.com",
        block_regex_general: /\/tncms\/api\/access(\..+)?\.js/,
        useragent: "googlebot",
        cs_dompurify: 1
      }
    ]
  },
  "Zephr": {
    domain: "zephr.com",
    allow_cookies: 1,
    block_regex_general: /(\.zephr\.com\/zephr-browser\/|\/zephr\/feature)/
  },
}

if (typeof browser !== 'object') {
  delete defaultSites['Roularta Media Group']['block_js_inline'];
  delete defaultSites['Roularta Media Group']['exception'];
  var ja_title = 'Jeune Afrique (last month only)';
  defaultSites[ja_title]['headers_custom'] = defaultSites[ja_title]['cs_param'];
}

var defaultSites_grouped_domains = Object.values(defaultSites).filter(function (value) {
    return (value.hasOwnProperty('domain') && value.domain !== '###');
  }).map(x => x.domain);
var defaultSites_groups_domains = [].concat.apply([], Object.values(defaultSites).filter(function (value) {
    return value.hasOwnProperty('group');
  }).map(x => x.group));
var defaultSites_domains = defaultSites_grouped_domains.concat(defaultSites_groups_domains);

function expandSiteRules(sites, updated = false) {
  for (let site in sites) {
    let rule = sites[site];
    if (rule.hasOwnProperty('group_rule')) {
      let rules = sites[rule.group_rule];
      for (key in rules) {
        if (key !== 'group_rule_domains')
          sites[site][key] = rules[key];
      }
      //delete sites[site].group_rule;
    }
    if (updated) {
      if (rule.hasOwnProperty('group_rule_domains')) {
        let domains = rule.group_rule_domains;
        for (let domain of domains) {
          let defaultTitle = Object.keys(defaultSites).find(key => defaultSites[key].domain === domain);
          if (defaultTitle) {
            for (key in rule) {
              if (key !== 'group_rule_domains')
                defaultSites[defaultTitle][key] = rule[key];
            }
          }
        }
      }
    }
    if (rule.hasOwnProperty('group')) {
      let domain = rule.domain;
      grouped_sites[domain] = rule.group
    }
  }
}

var grouped_sites = {};
expandSiteRules(defaultSites);

// custom domains (background)
var custom_flex_not = {
  "###_ca_postmedia": ["canada.com", "canoe.com", "driving.ca"],
  "###_de_dfv_medien": ["dfv.de"],
  "###_de_madsack": ["madsack.de", "madsack-medien-campus.de"],
  "###_es_epiberica": ["sport.es", "stilo.es"],
  "###_wp_leaky_paywall": ["epsilontheory.com", "heisenbergreport.com", "thewirechina.com", "toolkits.com", "uppereastsite.com"],
  "###_uk_axate.io": ["thecricketer.com", "thinkofx.net"],
  "###_uk_haymarket": ["asianinvestor.net", "classicandsportscar.com", "financeasia.com", "gpbusiness.co.uk", "scmagazineuk.com", "thecorporatetreasurer.com"],
  "###_uk_haymarket_medical": ["mycme.com"],
  "###_usa_hearst_comm": ["chron.com", "sfgate.com"],
  "###_usa_mcc": ["mcclatchy.com"],
  "###_usa_townnews": ["bloxdigital.com", "townnews.com"],
  "thewest.com.au": ["perthnow.com.au"]
}
var custom_flex;
var custom_flex_domains;
var custom_flex_not_domains;
var custom_flex_nofix_domains = [].concat(custom_flex_not['###_wp_leaky_paywall'], custom_flex_not['###_uk_axate.io'], custom_flex_not['###_uk_haymarket']);

function init_custom_flex_domains() {
  custom_flex = {};
  custom_flex_domains = [];
  custom_flex_not_domains = [].concat.apply([], Object.values(custom_flex_not));
}
init_custom_flex_domains();

// sites with no fix (background)
var de_smn_nofix_domains = ['cannstatter-zeitung.de', 'esslinger-zeitung.de', 'frankenpost.de', 'insuedthueringen.de', 'krzbb.de', 'kurier.de', 'np-coburg.de', 'schwarzwaelder-bote.de', 'stuttgarter-nachrichten.de', 'stuttgarter-zeitung.de'];
var de_westfalen_medien_nofix_domains = ['muensterschezeitung.de', 'westfalen-blatt.de', 'wn.de'];
var fi_sanoma_nofix_domains = ['aamulehti.fi', 'hs.fi', 'is.fi'];
var fr_groupe_ebra_nofix_domains = ['bienpublic.com', 'dna.fr', 'estrepublicain.fr', 'lalsace.fr', 'ledauphine.com', 'lejsl.com', 'leprogres.fr', 'republicain-lorrain.fr', 'vosgesmatin.fr'];
var fr_groupe_infopro_nofix_domains = ['centralbanking.com', 'lagazettedescommunes.com', 'risk.net', 'usine-digitale.fr'];
var fr_be_groupe_rossel_nofix_domains = ['aisnenouvelle.fr', 'courrier-picard.fr', 'lardennais.fr', 'lavoixdunord.fr', 'lemessager.fr', 'lesoir.be', 'lest-eclair.fr', 'liberation-champagne.fr', 'lunion.fr', 'nordlittoral.fr', 'paris-normandie.fr', 'sudinfo.be'];
var fr_indigo_nofix_domains = ['africaintelligence.com', 'africaintelligence.fr', 'glitz.paris', 'intelligenceonline.com', 'intelligenceonline.fr', 'lalettre.fr'];
var fr_jamg_nofix_domains = ['africabusinessplus.com', 'theafricareport.com'];
var fr_monde_diplo_nofix_domains = ['editionarabediplo.com', 'eldiplo.org', 'lemondediplomatique.cl', 'lmd.nedeljnik.rs', 'lmd.no', 'monde-diplomatique.fr', 'mondediplo.com', 'mondediplo.fi'];
var it_gedi_nofix_domains = ['gelocal.it', 'limesonline.com'];
var it_gruppo_nem_nofix_domains = ['corrierealpi.it', 'ilnordest.it', 'ilpiccolo.it', 'mattinopadova.it', 'messaggeroveneto.it', 'nuovavenezia.it', 'tribunatreviso.it'];
var se_bonnier_group_nofix_domains = ['di.se', 'expressen.se'];
var nofix_sites = ['11freunde.de', '24.hu', '444.hu', 'abplive.com', 'aerzteblatt.de', 'africa-confidential.com', 'aftenposten.no', 'aftonbladet.se', 'agefi.fr', 'allgaeuer-zeitung.de', 'altroconsumo.it', 'americanscientist.org', 'arkansasonline.com', 'asahi.com', 'asiatimes.com', 'autocarpro.in', 'augsburger-allgemeine.de', 'aviationweek.com', 'badische-zeitung.de', 'bisnis.com', 'bloomberglaw.com', 'bloombergtax.com', 'bmj.com', 'bnef.com', 'bnn.de', 'borsen.dk', 'breakingviews.com', 'breitbart.com', 'businessinsider.de', 'businesslive.co.za', 'caixin.com', 'caixinglobal.com', 'capital.de', 'caravanmagazine.in', 'catalyst-journal.com', 'chegg.com', 'cicero.de', 'cieletespace.fr', 'cmjornal.pt', 'consumerreports.org', 'cookpolitical.com', 'costar.com', 'coursehero.com', 'crunchbase.com', 'dealstreetasia.com', 'defence24.pl', 'delfi.ee', 'denikn.cz', 'deraktionaer.de', 'deutsche-wirtschafts-nachrichten.de', 'die-glocke.de', 'diepresse.com', 'donaukurier.de', 'e24.no', 'echo24.cz', 'elordenmundial.com', 'endpts.com', 'entrepreneur.com', 'epochtimes.se', 'epw.in', 'euractiv.com', 'ewmagazine.nl', 'falter.at', 'fd.nl', 'finance.si', 'finanz-szene.de', 'franc-tireur.fr', 'freiepresse.de', 'ftchinese.com', 'ftchineselive.com', 'gamestar.de', 'gazetaprawna.pl', 'gazeteoksijen.com', 'geo.de', 'golem.de', 'gp.se', 'haufe.de', 'hbrarabic.com', 'hbr-caijing.com', 'hbrfrance.fr', 'hedgehogreview.com', 'heraldo.es', 'hindutamil.in', 'history.org.uk', 'hn.cz', 'hsj.co.uk', 'humanite.fr', 'idnes.cz', 'iex.nl', 'ifre.com', 'ilsecoloxix.it', 'information.dk', 'investors.com', 'iltalehti.fi', 'investing.com', 'jacobin.com', 'janes.com', 'jazziz.com', 'jn.pt', 'jota.info', 'jungefreiheit.de', 'kicker.de', 'kleinezeitung.at', 'kommunen.dk', 'krone.at', 'la-croix.com', 'laprovence.com', 'lasegunda.com', 'latribune.fr', 'laverita.info', 'lavie.fr', 'lavozdegalicia.es', 'law.com', 'law360.ca', 'law360.co.uk', 'law360.com', 'lecanardenchaine.fr', 'leconomiste.com', 'ledesk.ma', 'lefilmfrancais.com', 'lesjours.fr', 'letemps.ch', 'libertiesjournal.com', 'liga.net', 'lindipendente.online', 'lorientlejour.com', 'lr-online.de', 'lz.de', 'mailplus.co.uk', 'main-echo.de', 'mainpost.de', 'malaysiakini.com', 'maville.com', 'mediapart.fr', 'mittelbayerische.de', 'money.it', 'moneycontrol.com', 'moodys.com', 'morningstar.com', 'motorsport.com', 'moz.de', 'mz.de', 'nachrichten.at', 'naiz.eus', 'nationaljournal.com', 'nature.com', 'nbr.co.nz', 'nejm.org', 'newleftreview.org', 'news24.com', 'newspapers.com', 'newsroom.co.nz', 'nexos.com.mx', 'next.ink', 'nikkansports.com', 'nikkei.com', 'nn.de', 'note.com', 'nouvelobs.com', 'ntnews.com.au', 'nypost.com', 'oantagonista.com.br', 'ojogo.pt', 'on3.com', 'onetz.de', 'ouest-france.fr', 'pagina12.com.ar', 'penews.com', 'pff.com', 'pnp.de', 'politicopro.com', 'politiken.dk', 'postimees.ee', 'pressreader.com', 'publico.pt', 'quechoisir.org', 'racingpost.com', 'rbc.ru', 'reason.com', 'record.pt', 'reforma.com', 'republic.ru', 'rhein-zeitung.de', 'rivals.com', 'rnz.de', 'rtings.com', 'sciencedirect.com', 'seekingalpha.com', 'sn.at', 'springer.com', 'statista.com', 'stimme.de', 'storm.mg', 'streetinsider.com', 'studocu.com', 'substack.com', 'svd.se', 'swp.de', 'table.media', 'taxation.co.uk', 'taxjournal.com', 'telquel.ma', 'test.de', 'the-ken.com', 'thebanker.com', 'theinformation.com', 'thejakartapost.com', 'thelancet.com', 'themorningcontext.com', 'theparisreview.org', 'thestar.com.my', 'timeslive.co.za', 'tipranks.com', 'udn.com', 'vedomosti.ru', 'vi.nl', 'volksstimme.de', 'weltwoche.ch', 'weltwoche.de', 'which.co.uk', 'wissenschaft.de', 'wiwo.de', 'worldpoliticsreview.com', 'woz.ch', 'wpolityce.pl', 'wz.de', 'xakep.ru', 'zaobao.com.sg', 'zive.cz'].concat(custom_flex_nofix_domains, de_smn_nofix_domains, de_westfalen_medien_nofix_domains, fi_sanoma_nofix_domains, fr_groupe_ebra_nofix_domains, fr_groupe_infopro_nofix_domains, fr_be_groupe_rossel_nofix_domains, fr_indigo_nofix_domains, fr_jamg_nofix_domains, fr_monde_diplo_nofix_domains, it_gedi_nofix_domains, it_gruppo_nem_nofix_domains, se_bonnier_group_nofix_domains);
