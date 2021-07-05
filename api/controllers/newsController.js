const NodeCache = require("node-cache");
const myCache = new NodeCache();
const axios = require('axios');

const apiKey = process.env.NEWS_API_KEY;
const useApi = process.env.USE_API;
exports.get_main_news = (req, res) => {

    const info = {
        business: {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "TMZ"
                    },
                    "author": "TMZ Staff",
                    "title": "Henry Winkler Ripped for Saying Cataclysmic Event Needed to Heal World - TMZ",
                    "description": "The Fonz says we'd be a lot closer ... if only we were in world-ending dire straits.",
                    "url": "https://www.tmz.com/2021/07/03/henry-winkler-backlash-cataclysmic-event-needed-pandemic-bring-together/",
                    "urlToImage": "https://imagez.tmz.com/image/43/16by9/2021/07/03/43fa361754eb4360aeed7a2aac78f749_xl.jpg",
                    "publishedAt": "2021-07-04T00:24:00Z",
                    "content": "Henry Winkler thinks the world needs to go through a \"cataclysmic event\" to help bring people together since we're so dang divided -- but his idea is getting a big fat ... HUH?!?\r\nThe actor tweeted o… [+1580 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Melissa Roberto",
                    "title": "Erika Jayne slammed for boarding private jet amid embezzlement lawsuit - Fox News",
                    "description": "\"Real Housewives of Beverly Hills\" star Erika Jayne was spotted boarding just days after a judge ordered the singer to turn over her financial records.",
                    "url": "https://www.foxnews.com/entertainment/erika-jayne-slammed-boarding-private-jet-photos-embezzlement-lawsuit",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/07/Jayne4edited.jpg",
                    "publishedAt": "2021-07-04T00:18:39Z",
                    "content": "\"The Real Housewives of Beverly Hills\r\n\" star Erika Jayne was spotted boarding a private jet just days after a judge ordered her to turn over her financial records as her and estranged husband Tom Gi… [+4960 chars]"
                },
                {
                    "source": {
                        "id": "polygon",
                        "name": "Polygon"
                    },
                    "author": "Matt Patches",
                    "title": "Star Wars anime Visions trailer, studios, release date announced at Anime Expo - Polygon",
                    "description": "The first Star Wars anime show, an anthology series from studios Kamikaze Douga, Geno Studio (Twin Engine), Studio Colorido (Twin Engine), Trigger, Kinema Citrus, Science Saru, and Production IG, arrives on Disney Plus in September. Here’s your first look at …",
                    "url": "https://www.polygon.com/22562417/star-wars-anime-visions-release-date-disney-plus",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/F9Wf4SSIHalt4jj6DZJMA42HMu4=/61x0:2315x1180/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22698146/star_wars_anime_boba_fett.jpg",
                    "publishedAt": "2021-07-04T00:15:52Z",
                    "content": "The series arrives on Disney Plus in September\r\nIf you buy something from a Polygon link, Vox Media may earn a commission. See our ethics statement."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Daily Mail"
                    },
                    "author": null,
                    "title": "Marriage of the new 'Harry and Meghan' is over Daily Mail - msnNOW",
                    "description": "TALK OF THE TOWN: Harry Roper-Curzon, heir to the 1,500-acre Pylewell Park in Hampshire, and Hanna Jaff appear to be unhappy proof of the adage, 'Marry in haste, repent at leisure'.",
                    "url": "https://www.dailymail.co.uk/tvshowbiz/article-9753465/Marriage-new-Harry-Meghan-just-18-months-tied-knot.html",
                    "urlToImage": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALJWP8.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=889&y=266",
                    "publishedAt": "2021-07-03T23:19:30Z",
                    "content": "© Provided by Daily Mail\r\n MailOnline logo\r\nThey were dubbed the new Harry and Meghan the British aristocrat who married a raven-haired, Californian-born TV star who is vocal in her support of good c… [+4331 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Ashley Turner",
                    "title": "Chris Pratt’s ‘The Tomorrow War’ Panned as ‘Garbage Pizza’ and ‘Starship Troopers for Dummies’ by Critics - Yahoo Entertainment",
                    "description": "Chris Pratt’s latest ode to his inner “action star,” Amazon Prime’s “The Tomorrow War,” is fighting its own battle with critics, who decry it as everything...",
                    "url": "https://www.yahoo.com/entertainment/chris-pratt-tomorrow-war-panned-231200306.html",
                    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/.yuDE1Ic94N8uxv0CgByIQ--~B/aD00MDA7dz02MjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/thewrap.com/4281c4318671a4747beec61126a8d117",
                    "publishedAt": "2021-07-03T23:12:00Z",
                    "content": "Chris Pratts latest ode to his inner action star, Amazon Primes The Tomorrow War, is fighting its own battle with critics, who decry it as everything from the garbage pizza of science-fiction films t… [+4737 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eonline.com"
                    },
                    "author": "Corinne Heller",
                    "title": "Jennifer Lopez and Ben Affleck Gather Their Kids Together for a Trip to Universal Studios - E! NEWS",
                    "description": "Jennifer Garner and Ben Affleck made a theme park date an almost full family affair. Get details about their fun day out at Universal Studios Hollywood.",
                    "url": "https://www.eonline.com/news/1286092/jennifer-lopez-and-ben-affleck-gather-their-kids-together-for-a-trip-to-universal-studios",
                    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2021510/rs_1200x1200-210610134441-1200-jennifer-lopez-ben-affleck-mom.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                    "publishedAt": "2021-07-03T22:58:00Z",
                    "content": "Jennifer Lopezand Ben Affleck's latest outing was almost a full family affair.\r\nThe couple, who rekindled their romance two months ago17 years after their breakup, were spotted at Universal Studios H… [+914 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "George Justice, Professor of English, Arizona State University",
                    "title": "With support for Bill Cosby, Phylicia Rashad becomes just one several deans to tweet themselves into trouble - Yahoo News",
                    "description": "Students at Howard University are already calling for Phylicia Rashad's resignation as dean. David Becker/Getty Images for The Blackhouse FoundationFor...",
                    "url": "https://news.yahoo.com/support-bill-cosby-phylicia-rashad-225732062.html",
                    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Q4Pg3X.OiPdfGpuU_92iOw--~B/aD0xMDY4O3c9MTQ0MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_conversation_us_articles_815/ad4838be26eb681881f8511398d392e5",
                    "publishedAt": "2021-07-03T22:57:32Z",
                    "content": "For acclaimed actor Phylicia Rashad, July 1, 2021 was the official first day on the job as dean of the College of Fine Arts at Howard University. But some hoped it would also be her last.\r\nThe day be… [+7757 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eonline.com"
                    },
                    "author": "Alyssa Morin",
                    "title": "Demi Lovato and Noah Cyrus Hold Hands During Fun Theme Park Outing - E! NEWS",
                    "description": "After performing together at YouTube 2021 Pride, Demi Lovato and Noah Cyrus enjoyed a night out Six Flags' Magic Mountain in California.",
                    "url": "https://www.eonline.com/news/1286078/demi-lovato-and-noah-cyrus-hold-hands-during-fun-theme-park-outing",
                    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202163/rs_1200x1200-210703111825-1200-demi-lovato-noah-cyrus.cm.7321.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                    "publishedAt": "2021-07-03T22:46:00Z",
                    "content": "Back in March, Page Six reported through a source that the superstars were \"very close\" after recording their song \"Easy\" together, hinting that they had a fling.\r\nHowever, an insider close to Demi c… [+1284 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "INSIDER"
                    },
                    "author": "Lauren Edmonds, Michelle Mark",
                    "title": "Jamie Spears reportedly yelled, 'I am Britney Spears!' after the conservatorship was granted - Insider",
                    "description": "A report by The New Yorker also claimed that Jamie Spears called his daughter a \"terrible mother\" after the conservatorship was granted.",
                    "url": "https://www.insider.com/jamie-spears-reportedly-said-i-am-britney-spears-after-conservatorship-2021-7",
                    "urlToImage": "https://i.insider.com/60e0c6567cd04c001a227dea?width=1200&format=jpeg",
                    "publishedAt": "2021-07-03T22:40:13Z",
                    "content": "Britney Spears' father, Jamie Spears, reportedly used to yell \"I am Britney Spears!\" in the early years of the pop star's conservatorship in an effort to convey how much control he had over his daugh… [+3482 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Daily Mail"
                    },
                    "author": "Claudia Joseph",
                    "title": "Prince William's staff 'planted stories about Harry's mental health', author claims - Daily Mail",
                    "description": "Omid Scobie alleges it was 'no coincidence' that William's aides at London's Kensington Palace began a briefing campaign against Harry the day after he appeared to confirm rumours of a rift.",
                    "url": "https://www.dailymail.co.uk/news/article-9753259/Prince-Williams-staff-planted-stories-Harrys-mental-health-author-claims.html",
                    "urlToImage": "https://i.dailymail.co.uk/1s/2021/07/03/21/45003295-0-image-a-132_1625344501243.jpg",
                    "publishedAt": "2021-07-03T21:00:52Z",
                    "content": "The bitter war of words between William and Harry was sparked by the Duke of Cambridges office planting stories about Prince Harrys state of mind, it has been claimed.\r\nIn a new documentary about the… [+4424 chars]"
                },
                {
                    "source": {
                        "id": "entertainment-weekly",
                        "name": "Entertainment Weekly"
                    },
                    "author": "Tyler Aquilina",
                    "title": "Bruce Lee's daughter slams Quentin Tarantino again over Once Upon a Time in Hollywood | EW.com - EW.com",
                    "description": "Shannon Lee slammed the filmmaker after he dismissed criticisms of his depiction of Bruce Lee in <em>Once Upon a Time in Hollywood</em>.",
                    "url": "https://ew.com/movies/bruce-lees-daughter-slams-quentin-tarantino-again/",
                    "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B1180%2C319%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F05%2F28%2FHTRA146_VV105.jpg",
                    "publishedAt": "2021-07-03T21:00:00Z",
                    "content": "Bruce Lee's daughter Shannon Lee has once again criticized Quentin Tarantino, after the filmmaker dismissed critiques of his depiction of her father in his film, and now novel, Once Upon a Time in Ho… [+3307 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Variety"
                    },
                    "author": "Angelique Jackson",
                    "title": "‘Independence Day’ at 25: Four Things You May Have Forgotten About 1996’s Highest-Grossing Movie - Variety",
                    "description": "Some people like “Independence Day” for its campy take on “Close Encounters of the Third Kind”; or for its technical achievements, which won an Oscar and set director Roland Emmerich on the path for becoming the disaster director du jour; or for establishing …",
                    "url": "https://variety.com/2021/film/news/independence-day-25-anniversary-will-smith-bill-pullman-alien-invasion-1235011140/",
                    "urlToImage": "https://variety.com/wp-content/uploads/2016/06/independence-day.jpg?w=1000",
                    "publishedAt": "2021-07-03T21:00:00Z",
                    "content": "Some people like “Independence Day” for its campy take on “Close Encounters of the Third Kind”; or for its technical achievements, which won an Oscar and set director Roland Emmerich on the path for … [+10418 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Carly Roman",
                    "title": "Geraldo Rivera applauds Bill Cosby’s release after being 'unjustly convicted,' suggests Weinstein could be next - Yahoo News",
                    "description": "Geraldo Rivera approved of Bill Cosby's release from prison after \"grotesquely unfair\" proceedings, adding that Harvey Weinstein may be next.",
                    "url": "https://news.yahoo.com/geraldo-rivera-applauds-bill-cosby-202800468.html",
                    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/PlaTiVUKNVD2KihNw1Iq0A--~B/aD05NDA7dz0xNTQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/washington_examiner_articles_265/8ad60a194a02c47289e31a13a2609a2a",
                    "publishedAt": "2021-07-03T20:28:00Z",
                    "content": "Geraldo Rivera approved of Bill Cosby's release from prison after \"grotesquely unfair\" proceedings, adding that Harvey Weinstein may be next.\r\nRivera, an attorney, said he wrote a note to himself in … [+4739 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "POPSUGAR"
                    },
                    "author": "Karenna Meredith",
                    "title": "They're a Match! Pete Davidson and Phoebe Dynevor Cuddle Up For a Wimbledon Date - POPSUGAR",
                    "description": "Pete Davidson and Phoebe Dynevor snuggled up at day six of Wimbledon Tennis Championship.",
                    "url": "https://www.popsugar.com/celebrity/pete-davidson-phoebe-dynevor-wimbledon-pictures-48404451",
                    "urlToImage": "https://media1.popsugar-assets.com/files/thumbor/K86VwAMy0VWe2JZpMG7K7ptfP5U/0x0:3238x1700/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2021/07/03/869/n/1922398/226651c960e0bfbf73b7c7.21047649_.jpg",
                    "publishedAt": "2021-07-03T20:21:03Z",
                    "content": "Game, set, they're a match! On Saturday, Pete Davidson and Phoebe Dynevor made their official public debut as a couple while attending day six of the Wimbledon Tennis Championship, and they kept cudd… [+485 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Zendaya and Tom Holland Spotted Kissing | E! News - E! News",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RDBaSWIxV0I5S1XSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T20:15:58Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Valerie Complex",
                    "title": "Lovecraft Country Not Renewed for a Second Season at HBO Max - Gizmodo",
                    "description": "The genre bending show will not see a second season on the popular streamer.",
                    "url": "https://gizmodo.com/lovecraft-country-not-renewed-for-a-second-season-at-hb-1847225896",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d3bf9dcdca3be60fdffc397d321194bf.png",
                    "publishedAt": "2021-07-03T19:30:00Z",
                    "content": "HBO said in a statement to Deadline that the network isnt moving forward with the second season of Lovecraft Country.\r\nThe strong viewership and dedicated fans didnt guarantee a renewal, but so many … [+1683 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The A.V. Club"
                    },
                    "author": "William Hughes",
                    "title": "Former stuntperson calls out Amazon's Lord Of The Rings show: \"So unsafe\" - The A.V. Club",
                    "description": "A new report from The New Zealand Herald details at least 3 \"serious\" injuries on the mega-budgeted show",
                    "url": "https://www.avclub.com/former-stuntperson-calls-out-amazons-lord-of-the-rings-1847226026",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a0f06e77eb2db959b6d4b7caea133c8c.jpg",
                    "publishedAt": "2021-07-03T19:25:00Z",
                    "content": "Amazons Lord Of The Rings is well on its way to becoming one of the most expensive TV shows of all time, with start-up costs, combined with the budget of the shows first season (of a proposed five), … [+2658 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": "Gabriela Miranda, USA TODAY",
                    "title": "Deputy said playing a Taylor Swift song would keep a video of him off YouTube. It didn't. - USA TODAY",
                    "description": "During a confrontation with activists, a deputy pulled out his phone and played a Taylor Swift song to avoid being recorded. Instead he went viral.",
                    "url": "https://www.usatoday.com/story/news/world/2021/07/03/taylor-swift-song-played-california-deputy-fails-censor-video/7851613002/",
                    "urlToImage": "https://www.gannett-cdn.com/presto/2019/09/04/USAT/6ec00da7-38da-4d79-ae69-c46b7c90e180-GettyImages-943697000.jpg?auto=webp&crop=2999,1687,x0,y197&format=pjpg&width=1200",
                    "publishedAt": "2021-07-03T19:21:49Z",
                    "content": "A California sheriff's deputy has attracted national attention after video shows he played a Taylor Swift song on his phone in a failed attempt to trigger censorship of an activist's video. Instead t… [+2943 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Melissa Roberto",
                    "title": "Michelle and Jim Bob Duggar react to TLC's cancellation of 'Counting On' - Fox News",
                    "description": "Michelle and Jim Bob Duggar have broken their silence on the cancellation of their family's TLC show \"Counting On.\"",
                    "url": "https://www.foxnews.com/entertainment/michelle-jim-bob-duggar-react-tlc-cancellation-counting-on",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/Jim-Bob-Michelle-Duggar.jpg",
                    "publishedAt": "2021-07-03T19:05:32Z",
                    "content": "Michelle and Jim Bob Duggar have broken their silence on the cancellation of their family's TLC show \"Counting On.\"\r\nThe Duggar parents, who rose to fame on the same network with their previous show … [+3124 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Melissa Roberto",
                    "title": "Elizabeth Hurley's son Damian cut out of late dad Steve Bing's will, actress speaks out: report - Fox News",
                    "description": "Elizabeth Hurley's son Damian has been cut out of his late father Steve Bing's will following a court appeal, reports say.",
                    "url": "https://www.foxnews.com/entertainment/elizabeth-hurley-son-damian-cut-steve-bing-actress-speaks",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/03/GettyImages-1052122198.jpg",
                    "publishedAt": "2021-07-03T19:01:21Z",
                    "content": "Elizabeth Hurley\r\n's son Damian\r\n has been cut out of his late father Steve Bing\r\n's will following a court appeal, reports say.\r\nBing, a wealthy financier, died in June 2020 at the age of 55. The Lo… [+3675 chars]"
                }
            ]
        },
        entertainment: {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Paul Best",
                    "title": "Listeria outbreak linked to precooked chicken causes 1 death, 3 hospitalizations - Fox News",
                    "description": "The CDC is warning Americans about a listeria outbreak linked to precooked chicken ahead of July 4 celebrations.",
                    "url": "https://www.foxnews.com/health/listeria-outbreak-linked-precooked-chicken-causes-1-death-3-hospitalizations",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/02/cutting_chicken_istock.jpg",
                    "publishedAt": "2021-07-04T01:34:10Z",
                    "content": "The CDC is warning Americans about a Listeria outbreak linked to precooked chicken ahead of July 4 celebrations. \r\nThree people have been hospitalized and one person had died in Texas and Delaware af… [+1283 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Times"
                    },
                    "author": "Richard Sandomir",
                    "title": "Dr. Barbara Murphy, Kidney Transplant Expert, Dies at 56 - The New York Times",
                    "description": "Her focus was on immunology and how to predict and diagnose the outcomes of transplants. She was, a colleague said, “a great researcher and a great mentor to many people.”",
                    "url": "https://www.nytimes.com/2021/07/03/health/dr-barbara-murphy-dead.html",
                    "urlToImage": "https://static01.nyt.com/images/2021/07/02/obituaries/02Murphy/02Murphy-facebookJumbo.jpg",
                    "publishedAt": "2021-07-03T23:23:41Z",
                    "content": "In 1997, she was recruited to Mount Sinai as director of transplant nephrology by Dr. Paul Klotman, then the chief of the division of nephrology, who promoted her to his former position in 2003 after… [+1412 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Times"
                    },
                    "author": "Alix Strauss",
                    "title": "Having an Outdoor Wedding? Here’s How to Prepare Your Skin. - The New York Times",
                    "description": "From foundations and pressed powders to eye serums and lipsticks, these beauty products can help you withstand heat and other environmental elements.",
                    "url": "https://www.nytimes.com/2021/07/03/style/self-care/having-an-outdoor-wedding-heres-how-to-prepare-your-skin.html",
                    "urlToImage": "https://static01.nyt.com/images/2021/07/04/fashion/03OUTDOOR-BEAUTY-COMBO/03OUTDOOR-BEAUTY-COMBO-facebookJumbo.jpg",
                    "publishedAt": "2021-07-03T22:56:49Z",
                    "content": "Mr. Martin suggested using a large, fluffy brush to set the makeup, then a powder puff afterward to push in and lock down the applied products. If not, product just sits on your face, he said.\r\nRelea… [+603 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": "Katie Teague",
                    "title": "Wear a mask if you're vaccinated? Why the WHO and CDC don't have the same guidance - CNET",
                    "description": "In the face of the rising delta variant, the two major health agencies are out of step regarding mask-wearing recommendations. We'll tell you what we know.",
                    "url": "https://www.cnet.com/health/wear-a-mask-if-youre-vaccinated-why-the-who-and-cdc-dont-have-the-same-guidance/",
                    "urlToImage": "https://www.cnet.com/a/img/B0fGl7mAT6Jc04TmvoCS9A3rAJw=/1200x630/2021/01/29/64ac8afa-d604-4c52-8f0b-2785be199e2b/004-double-mask-recommendations-new-mandate-n95-kn95-cloth-medical-masks-face.jpg",
                    "publishedAt": "2021-07-03T22:00:03Z",
                    "content": "Even fully vaccinated people should wear masks, according to the WHO.\r\nSarah Tew/CNET\r\nFor the most up-to-date news and information about the coronavirus pandemic, visit the WHO and CDC websites.\r\nSh… [+5855 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Anonna Dutt",
                    "title": "Delta variant: No antibodies in 16% after second dose of Covishield, says study - Hindustan Times",
                    "description": "The titres of the neutralising antibodies – that specifically target the Sars-CoV-2 virus and kill it or prevent it from entering human cells – were also lower against the Delta variant as compared to the B1 variant that led to the first wave of infections in…",
                    "url": "https://www.hindustantimes.com/india-news/delta-variant-no-antibodies-in-16-even-after-second-dose-of-covishield-101625349161190.html",
                    "urlToImage": "https://images.hindustantimes.com/img/2021/07/03/1600x900/372744778_0-8_1624595378897_1625349321379.jpg",
                    "publishedAt": "2021-07-03T21:57:05Z",
                    "content": "Neutralising antibodies against the Delta variant (B1.617.2) were not observed in 58.1% of serum samples from those given one shot of the Oxford/AstraZeneca vaccine produced in India as Covishield, a… [+2224 chars]"
                },
                {
                    "source": {
                        "id": "breitbart-news",
                        "name": "Breitbart News"
                    },
                    "author": "Katherine Hamilton",
                    "title": "Poll: Nearly One-Third of Americans Think Health Officials Are Lying About Vaccine Safety - Breitbart",
                    "description": "Nearly a third of Americans think health officials are lying about vaccine safety, according to a Rasmussen poll released on Friday.",
                    "url": "https://www.breitbart.com/politics/2021/07/03/poll-nearly-one-third-of-americans-think-health-officials-are-lying-about-vaccine-safety/",
                    "urlToImage": "https://media.breitbart.com/media/2021/07/GettyImages-1291274454-e1625347950532-640x335.jpg",
                    "publishedAt": "2021-07-03T21:35:33Z",
                    "content": "Nearly a third of Americans think health officials are lying about vaccine safety, according to a Rasmussen poll released Friday.\r\n“Distrust of public health officials is higher among the unvaccinate… [+1911 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "KTVI Fox 2 St. Louis"
                    },
                    "author": "Associated Press",
                    "title": "Missouri hospital CEO: COVID vaccine opponents should ‘Shut up’ - KTVI Fox 2 St. Louis",
                    "description": "One Missouri hospital official is telling anyone making disparaging remarks about the COVID-19 vaccine to “Shut up” as state officials ask for federal help dealing with a surge in cases that has some counties urging new precautions.",
                    "url": "https://fox2now.com/news/missouri/missouri-hospital-ceo-vaccine-opponents-should-shut-up/",
                    "urlToImage": "https://fox2now.com/wp-content/uploads/sites/14/2021/07/AP21183767522443.jpg?w=1280",
                    "publishedAt": "2021-07-03T21:05:22Z",
                    "content": "SPRINGFIELD, Mo. (AP) One Missouri hospital official is telling anyone making disparaging remarks about the COVID-19 vaccine to Shut up as state officials ask for federal help dealing with a surge in… [+2287 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "KRCRTV.COM"
                    },
                    "author": "Ryan Matthey",
                    "title": "West Nile virus and invasive mosquitos arrive in Shasta County - KRCRTV.COM",
                    "description": "Positive tests from samples of adult mosquitos in the Anderson and Shingletown area confirm the West Nile virus has returned to Shasta county. The Shasta Mosquito and Vector Control District (SMVCD) said in a press release Saturday that the positive tests cam…",
                    "url": "https://krcrtv.com/news/local/west-nile-virus-arrives-in-shasta-county",
                    "urlToImage": "https://static-27.sinclairstoryline.com/resources/media/1afd7b75-1f5f-47be-a678-9ae40cb744f0-large16x9_Mosquitosample1.png?1625338681603",
                    "publishedAt": "2021-07-03T19:00:36Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "PTI",
                    "title": "Mortality ‘significantly’ increased in 2nd Covid wave in India: study - The Indian Express",
                    "description": "It said approximately 70 per cent of the admitted patients were above 40 years in both the waves of the pandemic and the proportion of males were slightly lower in second wave as compared to the first.",
                    "url": "https://indianexpress.com/article/india/mortality-significantly-increased-in-2nd-covid-wave-in-india-study-7387919/",
                    "urlToImage": "https://images.indianexpress.com/2021/05/covid-death-8.jpg",
                    "publishedAt": "2021-07-03T17:46:41Z",
                    "content": "The second Covid wave in India was slightly different than the first one, with higher mortality being reported in all age groups except those below 20 years, and more people developing acute shortnes… [+3541 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Amara Walker and Maria Cartaya, CNN",
                    "title": "Vaccine hesitancy continues for some younger Americans. Here's one reason why - CNN ",
                    "description": "Destiny Britt has given the Covid-19 vaccine a lot of thought and has no plans to get vaccinated anytime soon.",
                    "url": "https://www.cnn.com/2021/07/03/us/vaccine-hesitancy-younger-americans-georgia/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210625161640-01-pfizer-vaccine-file-super-tease.jpg",
                    "publishedAt": "2021-07-03T17:15:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eatthis.com"
                    },
                    "author": "Emilia Paluszek",
                    "title": "What Smoking Marijuana Every Day Does to Your Body | Eat This Not That - Eat This, Not That",
                    "description": "We consulted doctors to discover what happens to your body if you smoke marijuana every day. There's good news and bad news to report.",
                    "url": "http://www.eatthis.com/smoking-marijuana-every-day-body-effect/",
                    "urlToImage": "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/11/doctor-medical-marijuana.jpg?fit=1200%2C800&ssl=1",
                    "publishedAt": "2021-07-03T16:37:08Z",
                    "content": "With American sprinter Sha'Carri Richardson suspended for a month due to a positive marijuana test, you might be wondering what smoking it does to your body. With medical marijuana legal in states li… [+4985 chars]"
                },
                {
                    "source": {
                        "id": "newsweek",
                        "name": "Newsweek"
                    },
                    "author": "Jason Lemon",
                    "title": "Woman Afraid of Vaccine Side Effects Dies From Delta Variant: 'I Couldn't Convince Her' - Newsweek",
                    "description": "\"After she got it, she said, 'Mom you were right, about the shot, about masks, being diligent and all that.'\"",
                    "url": "https://www.newsweek.com/woman-afraid-vaccine-side-effects-dies-delta-variant-i-couldnt-convince-her-1606660",
                    "urlToImage": "https://d.newsweek.com/en/full/1837362/missouri-vaccine.jpg",
                    "publishedAt": "2021-07-03T16:18:20Z",
                    "content": "A woman in Missouri was afraid of the side effects from COVID-19 vaccines and chose not to get the shots, but later contracted the Delta variant of the novel coronavirus and died in the hospital.\r\nDe… [+3259 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Telegraph.co.uk"
                    },
                    "author": "By\nNicola Smith,",
                    "title": "Singapore plans to stop counting daily Covid-19 cases and treat virus like flu - Telegraph.co.uk",
                    "description": "'We can't eradicate [coronavirus], but we can turn the pandemic into something much less threatening, like influenza'",
                    "url": "https://www.telegraph.co.uk/world-news/2021/07/03/singapore-plans-stop-counting-daily-covid-19-cases-treat-virus/",
                    "urlToImage": "https://www.telegraph.co.uk/content/dam/world-news/2021/07/03/TELEMMGLPICT000262004558_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQf0Rf_Wk3V23H2268P_XkPxc.jpeg?impolicy=logo-overlay",
                    "publishedAt": "2021-07-03T16:01:00Z",
                    "content": "Singapore is making plans to stop counting its daily Covid-19 cases in a roadmap to resuming normal life by treating the virus like any other endemic disease.  \r\nThe city nation of 5.7 million has so… [+1190 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "KTLA Los Angeles"
                    },
                    "author": "Los Angeles Times",
                    "title": "Delta variant and sudden rise in COVID cases causes alarm bells in L.A. County - KTLA Los Angeles",
                    "description": "For many this year, the Fourth of July marks a special independence day — one free of coronavirus restrictions after 15 months and with a sense that a new post-pandemic normal is at hand. Across the nation, businesses are open, crowds are gathering, masks are…",
                    "url": "https://ktla.com/news/local-news/delta-variant-and-sudden-rise-in-covid-cases-causes-alarm-bells-in-l-a-county/",
                    "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2021/07/AP21183038955279.jpg?w=1280",
                    "publishedAt": "2021-07-03T14:47:26Z",
                    "content": "For many this year, the Fourth of July marks a special independence day one free of coronavirus restrictions after 15 months and with a sense that a new post-pandemic normal is at hand.\r\nAcross the n… [+595 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eatthis.com"
                    },
                    "author": "Alek Korab",
                    "title": "Sure Signs You Have the New COVID Variant | Eat This Not That - Eat This, Not That",
                    "description": "With a new COVID-19 variant proving \"more transmissible\"—and breakthrough cases possible, though apparently unlikely, even...",
                    "url": "http://www.eatthis.com/news-sure-signs-delta-covid-variant/",
                    "urlToImage": "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2021/01/woman-head-ache-pain-sick-ill.jpg?fit=1200%2C800&ssl=1",
                    "publishedAt": "2021-07-03T12:02:08Z",
                    "content": "With a new COVID-19 variant proving \"more transmissible\"and breakthrough cases possible, though apparently unlikely, even after vaccinationit's important to stay on top of any new symptoms you may be… [+3242 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Women's Health"
                    },
                    "author": "Madeline Howard",
                    "title": "40 Healthy Breakfast Smoothie Recipes For Weight Loss - Women's Health",
                    "description": "They're an energy boost in a blender.",
                    "url": "https://www.womenshealthmag.com/weight-loss/g36732247/breakfast-smoothies-for-weight-loss/",
                    "urlToImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1203078706.jpg?crop=1.00xw:0.751xh;0,0.139xh&resize=1200:*",
                    "publishedAt": "2021-07-03T12:00:33Z",
                    "content": "It’s breakfast time and you’re hungry. You want something that can be made quickly and that's also good-for-your bod. Makes sense! Here’s what you should whip up: a healthy breakfast smoothie. It’s s… [+913 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Maggie Fox, CNN",
                    "title": "Unvaccinated people are \"variant factories,\" infectious diseases expert says - CNN ",
                    "description": "Unvaccinated people do more than merely risk their own health. They're also a risk to everyone if they become infected with coronavirus, infectious disease specialists say.",
                    "url": "https://www.cnn.com/2021/07/03/health/unvaccinated-variant-factories/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210617131411-variante-covid-delta-pandemia-eeuu-pkg-michael-roa-00000000-super-tease.png",
                    "publishedAt": "2021-07-03T11:23:00Z",
                    "content": "(CNN)Unvaccinated people do more than merely risk their own health. They're also a risk to everyone if they become infected with coronavirus, infectious disease specialists say.\r\nThat's because the o… [+4775 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": null,
                    "title": "At the start of the pandemic, kids made up 2% of new COVID infections. Now, they make up 24%. What happened? - USA TODAY",
                    "description": null,
                    "url": "https://www.usatoday.com/restricted/?return=https:%2F%2Fwww.usatoday.com%2Fstory%2Fnews%2Fhealth%2F2021%2F07%2F03%2Fcovid-kids-make-up-growing-share-new-weekly-cases-what-know%2F7842661002%2F",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T10:02:35Z",
                    "content": "Skip to main content\r\nThis content is only available to USA TODAY subscribers.\r\nSubscribe for as low as $4.99 per month.\r\nYour subscription includes access to:\r\nExclusive, subscriber-only content and… [+796 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sputnik International"
                    },
                    "author": null,
                    "title": "Teenager Dies While Sleeping After Receiving Pfizer COVID-19 Vaccine, Reports Say - Sputnik International",
                    "description": "The US Centers for Disease Control and Prevention (CDC) are investigating whether the boy's death is directly related to vaccinations.",
                    "url": "https://sputniknews.com/us/202107031083298986-teenager-dies-in-sleep-after-receiving-pfizer-covid-19-vaccine-reports-say/",
                    "urlToImage": "https://cdn2.img.sputniknews.com/images/07e5/02/16/1082155965.jpg",
                    "publishedAt": "2021-07-03T08:23:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "associated-press",
                        "name": "Associated Press"
                    },
                    "author": null,
                    "title": "Missouri hospital CEO: Vaccine opponents should 'Shut up' - Associated Press",
                    "description": "SPRINGFIELD, Mo. (AP) — One Missouri hospital official is telling anyone making disparaging remarks about the COVID-19 vaccine to “Shut up” as state officials ask for federal help dealing with a surge in cases that has some counties urging new precautions.",
                    "url": "https://apnews.com/article/mo-state-wire-michael-brown-business-coronavirus-pandemic-health-b8a5ba4896ab02f441f24ebb7fed5064",
                    "urlToImage": "https://storage.googleapis.com/afs-prod/media/275b3337f0fe45ee88f3bd27536544a2/3000.jpeg",
                    "publishedAt": "2021-07-03T07:34:54Z",
                    "content": "SPRINGFIELD, Mo. (AP) One Missouri hospital official is telling anyone making disparaging remarks about the COVID-19 vaccine to Shut up as state officials ask for federal help dealing with a surge in… [+2596 chars]"
                }
            ]
        },
        general: {
            "status": "ok",
            "totalResults": 38,
            "articles": [
                {
                    "source": {
                        "id": "polygon",
                        "name": "Polygon"
                    },
                    "author": "Matt Patches",
                    "title": "Star Wars anime Visions trailer, studios, release date announced at Anime Expo - Polygon",
                    "description": "The first Star Wars anime show, an anthology series from studios Kamikaze Douga, Geno Studio (Twin Engine), Studio Colorido (Twin Engine), Trigger, Kinema Citrus, Science Saru, and Production IG, arrives on Disney Plus in September. Here’s your first look at …",
                    "url": "https://www.polygon.com/22562417/star-wars-anime-visions-release-date-disney-plus",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/F9Wf4SSIHalt4jj6DZJMA42HMu4=/61x0:2315x1180/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22698146/star_wars_anime_boba_fett.jpg",
                    "publishedAt": "2021-07-04T00:15:52Z",
                    "content": "The series arrives on Disney Plus in September\r\nIf you buy something from a Polygon link, Vox Media may earn a commission. See our ethics statement."
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "Marc Berman",
                    "title": "Obscure rule makes Chris Paul leaving Suns for Knicks unlikely - New York Post ",
                    "description": "The Suns can offer Chris Paul a four-year deal while the Knicks can’t go past three years because of an obscure “over-38’’ bylaw in the collective bargaining agreement, according to former Nets exe…",
                    "url": "https://nypost.com/2021/07/03/cba-bylaw-makes-chris-paul-leaving-suns-for-knicks-unlikely/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/07/Chris-Paul.jpg?quality=90&strip=all&w=1200",
                    "publishedAt": "2021-07-04T00:14:00Z",
                    "content": "If the Knicks attempt to outbid the Suns for point guard Chris Paul this August, they are at a distinct disadvantage.\r\nAccording to former Nets executive and ESPN cap guru Bobby Marks, the Suns can o… [+3524 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Shaq Reporting Live at State Farm Arena ahead of Game 6 - Iniside the NBA | 2021 NBA Playoffs - House of Highlights",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9anl1ejFFUklKZWvSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T23:58:41Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "nbc-news",
                        "name": "NBC News"
                    },
                    "author": "Andrew Blankstein, Eric Leonard, Alicia Victoria Lozano",
                    "title": "Los Angeles man charged with illegally transporting 32,000 pounds of fireworks - NBC News",
                    "description": "Los Angeles resident Arturo Ceja III arrested Saturday and charged with illegally transporting 32,000 pounds of fireworks that caused an explosion.",
                    "url": "https://www.nbcnews.com/news/us-news/los-angeles-man-arrested-illegally-transporting-32-000-pounds-fireworks-n1273054",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_26/3488621/210703-fireworks-explosion-acx-722p.jpg",
                    "publishedAt": "2021-07-03T23:57:00Z",
                    "content": "LOS ANGELES The man arrested at a home in South Los Angeles where 32,000-pounds of illegal fireworks were found and where a police bomb containment vehicle was destroyed in an explosion has been char… [+2613 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Usda.gov"
                    },
                    "author": null,
                    "title": "Tyson Foods Inc. Recalls Ready-To-Eat Chicken Products Due to Possible Listeria Contamination | Food Safety and Inspection Service - USDA.gov",
                    "description": null,
                    "url": "http://www.fsis.usda.gov/recalls-alerts/tyson-foods-inc.-recalls-ready-eat-chicken-products-due-possible-listeria",
                    "urlToImage": "https://www.fsis.usda.gov/sites/default/files/2021-03/MicrosoftTeams-image.png",
                    "publishedAt": "2021-07-03T23:18:46Z",
                    "content": "WASHINGTON, July 3, 2021 Tyson Foods Inc., a Dexter, Mo. establishment, is recalling approximately 8,492,832 pounds of ready-to-eat (RTE) chicken products that may be adulterated with Listeria monocy… [+3960 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Tropical Storm Watch issued for Lower Florida Keys for Elsa - WPTV News - FL Palm Beaches and Treasure Coast",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bkVBSDJnZmxlNzDSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T23:04:31Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eonline.com"
                    },
                    "author": "Corinne Heller",
                    "title": "Jennifer Lopez and Ben Affleck Gather Their Kids Together for a Trip to Universal Studios - E! NEWS",
                    "description": "Jennifer Garner and Ben Affleck made a theme park date an almost full family affair. Get details about their fun day out at Universal Studios Hollywood.",
                    "url": "https://www.eonline.com/news/1286092/jennifer-lopez-and-ben-affleck-gather-their-kids-together-for-a-trip-to-universal-studios",
                    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2021510/rs_1200x1200-210610134441-1200-jennifer-lopez-ben-affleck-mom.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                    "publishedAt": "2021-07-03T22:58:00Z",
                    "content": "Jennifer Lopezand Ben Affleck's latest outing was almost a full family affair.\r\nThe couple, who rekindled their romance two months ago17 years after their breakup, were spotted at Universal Studios H… [+914 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "INSIDER"
                    },
                    "author": "Lauren Edmonds, Michelle Mark",
                    "title": "Jamie Spears reportedly yelled, 'I am Britney Spears!' after the conservatorship was granted - Insider",
                    "description": "A report by The New Yorker also claimed that Jamie Spears called his daughter a \"terrible mother\" after the conservatorship was granted.",
                    "url": "https://www.insider.com/jamie-spears-reportedly-said-i-am-britney-spears-after-conservatorship-2021-7",
                    "urlToImage": "https://i.insider.com/60e0c6567cd04c001a227dea?width=1200&format=jpeg",
                    "publishedAt": "2021-07-03T22:40:13Z",
                    "content": "Britney Spears' father, Jamie Spears, reportedly used to yell \"I am Britney Spears!\" in the early years of the pop star's conservatorship in an effort to convey how much control he had over his daugh… [+3482 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Los Angeles Times"
                    },
                    "author": "Carlos Lozano",
                    "title": "Protesters clash outside Koreatown spa over transgender rights - Los Angeles Times",
                    "description": "A large contingent of police officers arrived on scene after fights broke out between the two groups in front of Wi Spa in Koreatown.",
                    "url": "https://www.latimes.com/california/story/2021-07-03/lapd-declares-unlawful-assembly-protests-koreatown-transgender-rights",
                    "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/cfda5f3/2147483647/strip/true/crop/4032x2117+0+351/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F82%2F0c%2F0fffe7374376b9c00fd6a01afd25%2Fimg-6220.jpg",
                    "publishedAt": "2021-07-03T22:21:51Z",
                    "content": "Dueling protesters clashed outside a Koreatown spa Saturday over a recent incident involving transgender rights, prompting Los Angeles police in riot gear to be dispatched to the scene.\r\nPolice order… [+1590 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sarasota Herald-Tribune"
                    },
                    "author": "Sarasota Herald-Tribune Staff",
                    "title": "Trump rally in Sarasota: Sights and sounds before event at fairgrounds - Sarasota Herald-Tribune",
                    "description": "Crowds gathered before Former President Donald Trump's rally in Sarasota on Saturday, July 3, 2021.",
                    "url": "https://www.heraldtribune.com/picture-gallery/news/local/2021/07/03/trump-rally-sarasota-sights-sounds-before-event-fairgrounds/7828136002/",
                    "urlToImage": "https://www.gannett-cdn.com/presto/2021/07/03/NSHT/57166318-f509-44d2-80f3-e119cd885c3b-SAR-070421_TRUMP_RALLY_7828136002-006.JPG?crop=2399%2C1350%2Cx0%2Cy82&width=1200",
                    "publishedAt": "2021-07-03T22:21:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Slate Magazine"
                    },
                    "author": "Daniel Politi",
                    "title": "Massachusetts Police Arrest 11 Heavily Armed Militia Members After Bizarre Hours-Long Standoff - Slate",
                    "description": "The men, who wore military gear, said they were part of a group called Rise of the Moors.",
                    "url": "https://slate.com/news-and-politics/2021/07/massachusetts-police-armed-militia-rise-moors-sovereign.html",
                    "urlToImage": "https://compote.slate.com/images/5909a6ae-aefb-4b59-89d0-4e403e3177e2.jpeg?width=780&height=520&rect=3000x2000&offset=0x0",
                    "publishedAt": "2021-07-03T22:12:00Z",
                    "content": "Police in Massachusetts arrested 11 men Saturday after a bizarre hours-long standoff that led to a partial shutdown of Interstate 95 and a stay-at-home order for the surrounding area. The standoff wi… [+3975 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "KRCRTV.COM"
                    },
                    "author": "Ryan Matthey",
                    "title": "14 people arrested for entering or refusing to leave Lava Fire evacuation zone - KRCRTV.COM",
                    "description": "Just days into fighting the explosive Lave Fire in Siskyou County, 14 arrests have been made to people who entered or refused to leave areas under evacuation orders. The Siskiyou County Sheriff's Office (SCSO) says the arrests were made on June 30 to people i…",
                    "url": "https://krcrtv.com/news/local/14-people-arrested-for-entering-or-refusing-to-leave-lava-fire-evacuation-zone",
                    "urlToImage": "https://static-36.sinclairstoryline.com/resources/media/56d6b815-ca7e-4bf3-b7d5-09e927cb9314-large16x9_LavaFire_USFSFirefighter_AdamM_June29.jpg?1625349990410",
                    "publishedAt": "2021-07-03T22:08:08Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-hill",
                        "name": "The Hill"
                    },
                    "author": "Jordan Williams",
                    "title": "Biden: 'Initial thinking' recent ransomware attack not Russian government | TheHill - The Hill",
                    "description": "President Biden said Saturday that “initial thinking” is that the Rus...",
                    "url": "https://thehill.com/policy/cybersecurity/561491-biden-initial-thinking-recent-ransomware-attack-not-russian-government",
                    "urlToImage": "https://thehill.com/sites/default/files/article_images/bidenjoe_7321_gettyimages.jpg",
                    "publishedAt": "2021-07-03T22:07:30Z",
                    "content": "President BidenJoe BidenOregon's COVID-19 vaccination rate hits 70 percentBiden names nominee for US ambassador to GermanyEquilibrium/Sustainability Presented by NextEra Energy Grasshoppers are winni… [+2134 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": "Jason Cipriani",
                    "title": "iOS 15 beta on iPhone: 3 things you absolutely need to know before you install - CNET",
                    "description": "Trying out the latest and greatest software Apple has to offer is tempting, but it's a good idea to wait a little longer.",
                    "url": "https://www.cnet.com/how-to/ios-15-beta-on-iphone-3-things-you-absolutely-need-to-know-before-install/",
                    "urlToImage": "https://www.cnet.com/a/img/CUZbuqKAVGx-f81B_xs2CHl_fI0=/0x0:4000x2667/1200x630/2021/04/24/f4892b67-97c5-4352-95f3-b40f18b857b3/127-iphone-12-purple-2021.jpg",
                    "publishedAt": "2021-07-03T21:43:05Z",
                    "content": "Jumping right into iOS 15 probably isn't the best idea. We'll tell you why. \r\nSarah Tew/CNET\r\nThis story is part of WWDC 2021. All the latest coverage from Apple's annual developers conference.\r\nThe … [+4276 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Jason Hoffman, Rachel Janfaza and Homero De la Fuente, CNN",
                    "title": "Biden on Sha'Carri Richardson's suspension for positive drug test: 'The rules are the rules' - CNN ",
                    "description": "President Joe Biden said he was \"really proud of the way\" US track and field star Sha'Carri Richardson responded following a positive drug test and subsequent suspension that will prevent her from running in her signature event for Team USA in the Olympics la…",
                    "url": "https://www.cnn.com/2021/07/03/politics/shacarri-richardson-joe-biden-marijuana-test-olympics/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210702093334-02-shacarri-richardson-super-tease.jpg",
                    "publishedAt": "2021-07-03T21:32:00Z",
                    "content": "(CNN)President Joe Biden said he was \"really proud of the way\" US track and field star Sha'Carri Richardson responded following a positive drug test and subsequent suspension that will prevent her fr… [+3596 chars]"
                },
                {
                    "source": {
                        "id": "ign",
                        "name": "IGN"
                    },
                    "author": "Shawn Saris",
                    "title": "Daily Deals: Gaming Laptops and MacBook Holiday Sales - IGN - IGN",
                    "description": "Daily Deals: Gaming Laptops and MacBook Holiday Sales",
                    "url": "https://www.ign.com/articles/daily-deals-gaming-laptops-and-macbook-holiday-sales",
                    "urlToImage": "https://assets-prd.ignimgs.com/2021/07/03/july3deals-1625347296358.png?width=1280",
                    "publishedAt": "2021-07-03T21:26:57Z",
                    "content": "This Saturday has brought with it a bunch of PC related sales that are just too good to not talk about. MacBooks are on sale still at Amazon, while gaming and productivity laptops and desktops are av… [+170 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Associated Press",
                    "title": "Vatican indicts 10, including a cardinal, in London deal - Fox News",
                    "description": "A Vatican judge on Saturday indicted 10 people, including a once-powerful cardinal, on charges including embezzlement, abuse of office, extortion and fraud in connection with the Secretariat of State’s 350 million-euro investment in a London real estate ventu…",
                    "url": "https://www.foxnews.com/world/vatican-indicts-10-including-a-cardinal-in-london-deal",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/07/Cardinal-Angelo-Becciu.jpg",
                    "publishedAt": "2021-07-03T21:11:54Z",
                    "content": "A Vatican judge on Saturday indicted 10 people, including a once-powerful cardinal, on charges including embezzlement, abuse of office, extortion and fraud in connection with the Secretariat of State… [+6503 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Weather Channel"
                    },
                    "author": null,
                    "title": "Tropical Storm Watch Issued in the Florida Keys as Tropical Storm Elsa Nears Haiti, Jamaica and Cuba | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
                    "description": "Here's the latest, complete forecast briefing on the fifth named storm of the hurricane season. - Articles from The Weather Channel | weather.com",
                    "url": "https://weather.com/storms/hurricane/news/2021-07-03-tropical-storm-hurricane-elsa-hispaniola-cuba-jamaica-florida-cone",
                    "urlToImage": "https://s.w-x.co/Elsa_070321_5pm.jpg",
                    "publishedAt": "2021-07-03T21:03:47Z",
                    "content": "At a Glance\r\n<ul><li>Tropical Storm Elsa is speeding through the northern Caribbean. </li><li>Elsa will bring heavy rain and damaging winds to Hispaniola, jamaica, Cuba this weekend.</li><li>Though i… [+6184 chars]"
                },
                {
                    "source": {
                        "id": "nbc-news",
                        "name": "NBC News"
                    },
                    "author": "The Associated Press",
                    "title": "Crews on lookout for pets in Miami building collapse - NBC News",
                    "description": "As crews continued to search for victims within the rubble of the collapsed 12- story condominium complex near Miami, officials reassured families that they were also on the lookout for their cherished pets. Miami-Dade Mayor Daniella Levine Cava said Saturday…",
                    "url": "https://www.nbcnews.com/news/us-news/crews-lookout-pets-miami-building-collapse-n1273050",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_26/3488609/210703-surfside-pets-mb-2145.JPG",
                    "publishedAt": "2021-07-03T20:55:00Z",
                    "content": "MIAMI As crews continued to search for victims within the rubble of the collapsed 12-story condominium complex near Miami, officials reassured families that they were also on the lookout for their ch… [+2081 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Alyse Stanley",
                    "title": "These Nine Android Apps May Have Stolen Your Facebook Login Information - Gizmodo",
                    "description": "Nine trojan apps with more than 5.8 million combined downloads have been kicked off Google's Play Store.",
                    "url": "https://gizmodo.com/these-nine-android-apps-may-have-stolen-your-facebook-l-1847226246",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/84535c7b666bfb8472c80196a31ca740.jpg",
                    "publishedAt": "2021-07-03T20:38:00Z",
                    "content": "Google has kicked nine Android apps with more than 5.8 million combined downloads off its Play Store after researchers discovered they contained malicious code used to steal users Facebook login cred… [+3273 chars]"
                }
            ]
        },
        health: {
            "status": "ok",
            "totalResults": 33,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "NASASpaceflight.com"
                    },
                    "author": "Chris Bergin",
                    "title": "Booster 3 opens Super Heavy test campaign as orbital vehicles prepare to stack - NASASpaceFlight.com - NASASpaceflight.com",
                    "description": "Following a test campaign focused on SpaceX’s Starship vehicle, the Super Heavy booster is now…",
                    "url": "https://www.nasaspaceflight.com/2021/07/booster-3-super-heavy-test-campaign/",
                    "urlToImage": "https://www.nasaspaceflight.com/wp-content/uploads/2021/07/NSF-2021-07-03-05-35-41-401-watermarked.jpg",
                    "publishedAt": "2021-07-03T17:45:36Z",
                    "content": "Following a test campaign focused on SpaceX’s Starship vehicle, the Super Heavy booster is now taking up the mantle of testing at the Starbase launch site. Booster 3 rolled out of the High Bay on Thu… [+8203 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Ashley Strickland, CNN",
                    "title": "This forgotten species thought to be extinct was actually on an island paradise - CNN ",
                    "description": "This week, get acquainted with a species once thought to be extinct, explore the world's top astronomy photos, learn what really caused dinosaurs to decline and enjoy some Pac-Man in space.",
                    "url": "https://www.cnn.com/2021/07/03/world/forgotten-species-science-newsletter-wt-scn/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210701135117-gould-mouse-intl-scli-copy-super-tease.jpeg",
                    "publishedAt": "2021-07-03T15:00:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "Were Scientists Wrong About the Planet Mercury? Its Big Iron Core May Be Due to Magnetism! - SciTechDaily",
                    "description": "New research from the University of Maryland shows that proximity to the sun’s magnetic field determines a planet’s interior composition. A new study disputes the prevailing hypothesis on why Mercury has a big core relative to its mantle (the layer between a …",
                    "url": "https://scitechdaily.com/were-scientists-wrong-about-the-planet-mercury-its-big-iron-core-may-be-due-to-magnetism/",
                    "urlToImage": "https://scitechdaily.com/images/Mercury-Planet-Core.jpg",
                    "publishedAt": "2021-07-03T14:50:31Z",
                    "content": "New research shows the suns magnetic field drew iron toward the center of our solar system as the planets formed. That explains why Mercury, which is closest to the sun has a bigger, denser, iron cor… [+5393 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SlashGear"
                    },
                    "author": "Shane McGlaun",
                    "title": "SpaceX Crew Dragon for the all-civilian orbital mission has an incredible toilet - SlashGear",
                    "description": "Typically when SpaceX sends a Crew Dragon spacecraft into orbit, it’s headed to the ISS to deliver astronauts and cargo. Recently, SpaceX announced that it would be launching the world’…",
                    "url": "https://www.slashgear.com/spacex-crew-dragon-for-the-all-civilian-orbital-mission-has-an-incredible-toilet-03680948/",
                    "urlToImage": "https://cdn.slashgear.com/wp-content/uploads/2021/07/dragon-crew.jpg",
                    "publishedAt": "2021-07-03T14:40:00Z",
                    "content": "Typically when SpaceX sends a Crew Dragon spacecraft into orbit, it’s headed to the ISS to deliver astronauts and cargo. Recently, SpaceX announced that it would be launching the world’s first all-ci… [+1664 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space.com"
                    },
                    "author": "Meghan Bartels",
                    "title": "NASA's Perseverance rover is taking its own wheel for Mars drives - Space.com",
                    "description": "Auto-navigation on Mars: 'It's a rover driver's paradise.'",
                    "url": "https://www.space.com/perseverance-rover-self-driving-on-mars",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/mFquqDGzDyZuPyBngKRXbj-1200-80.jpg",
                    "publishedAt": "2021-07-03T12:00:11Z",
                    "content": "NASA's Perseverance rover\r\n is picking up the pace on Mars thanks to technology that helps the robot avoid running into trouble on its otherworldly drives.\r\nThat technology, called AutoNav, is a navi… [+2958 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space.com"
                    },
                    "author": "Samantha Mathewson",
                    "title": "SpaceX tracking camera captures epic video of Falcon 9 rocket landing - Space.com",
                    "description": "",
                    "url": "https://www.space.com/spacex-transporter-2-rocket-landing-tracking-camera-video",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/P6Qy9QgewcweJpsXjG2tzL-1200-80.jpg",
                    "publishedAt": "2021-07-03T11:59:39Z",
                    "content": "A SpaceX Falcon 9 rocket landed successfully back on Earth after delivering dozens of satellites to polar orbit this week and a tracking camera at the launchpad caught the rocket's flawless touchdown… [+3273 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Live Science"
                    },
                    "author": "Emma Bryce",
                    "title": "What's the chattiest animal? - Livescience.com",
                    "description": "Which animal is the biggest chatterbox?",
                    "url": "https://www.livescience.com/what-is-chattiest-animal.html",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/V3ZhKa4ERpt3to5HiazbxM-1200-80.jpg",
                    "publishedAt": "2021-07-03T11:00:30Z",
                    "content": "A pandemonium of parrots, a cackle of hyenas, an exaltation of larks these are just a few of the animals that we define by the sounds they make. \r\nFor humans, communication is the bedrock of our rela… [+10574 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Live Science"
                    },
                    "author": "Chelsea Gohd",
                    "title": "Supermassive black holes could host giant, swirling gas 'tsunamis' - Livescience.com",
                    "description": "",
                    "url": "https://www.livescience.com/supermassive-black-hole-tsunamis-quasar.html",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/wuXGvAoVubTfsEzKM5bANc-1200-80.png",
                    "publishedAt": "2021-07-03T11:00:00Z",
                    "content": "This artist's visualization shows a supermassive black hole surrounded by dust and gas forming tsunamis on its outer edges.  (Image credit: Illustration by Nima Abkenar)\r\nCould gas escaping the gravi… [+4473 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "A Crystal Made Exclusively of Electrons – “Holy Grail” Wigner Crystals Observed for First Time - SciTechDaily",
                    "description": "Researchers at ETH Zurich have succeeded in observing a crystal that consists only of electrons. Such Wigner crystals were already predicted almost ninety years ago but could only now be observed directly in a semiconductor material. Crystals have fascinated …",
                    "url": "https://scitechdaily.com/a-crystal-made-exclusively-of-electrons-holy-grail-wigner-crystals-observed-for-first-time/",
                    "urlToImage": "https://scitechdaily.com/images/Wigner-Crystal.jpg",
                    "publishedAt": "2021-07-03T10:15:41Z",
                    "content": "A Wigner crystal of electrons (red) inside a semiconductor material (blue/grey). Credit: ETH Zurich\r\nResearchers at ETH Zurich have succeeded in observing a crystal that consists only of electrons. S… [+5707 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Interesting Engineering"
                    },
                    "author": "Jaime Trosper",
                    "title": "A Black Hole's Core Could be a Strange \"Planck Star\" - Interesting Engineering",
                    "description": "Imagine something trillions of times smaller than an atom. Can't? Well, neither can we. That might be what's really in a black hole's core.",
                    "url": "https://interestingengineering.com/a-black-holes-core-could-be-a-strange-planck-star",
                    "urlToImage": "https://inteng-storage.s3.amazonaws.com/img/iea/lV6D5DLqwx/sizes/a-black-holes-core-could-be-a-strange-planck-star_md.jpg",
                    "publishedAt": "2021-07-03T10:06:34Z",
                    "content": "There's a lot of interesting theories about black holes, and what happens inside of them. The notion that once matter enters the event horizon around the singularity, nothing, not even photons themse… [+11323 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Phys.Org"
                    },
                    "author": "Karin Valentine",
                    "title": "'Lakes' under Mars' south pole: A muddy picture? - Phys.org",
                    "description": "Two research teams, using data from the European Space Agency's Mars Express orbiter, have recently published results suggesting that what were thought to be subsurface lakes on Mars may not really be lakes at all.",
                    "url": "https://phys.org/news/2021-07-lakes-mars-south-pole-muddy.html",
                    "urlToImage": "https://scx2.b-cdn.net/gfx/news/2021/lakes-under-mars-south.jpg",
                    "publishedAt": "2021-07-03T08:59:24Z",
                    "content": "Two research teams, using data from the European Space Agency's Mars Express orbiter, have recently published results suggesting that what were thought to be subsurface lakes on Mars may not really b… [+6591 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Universe Today"
                    },
                    "author": "https://www.facebook.com/Storiesbywilliams-205745679447998/?ref=hl",
                    "title": "NASA Continues to Try and Rescue Failing Hubble - Universe Today",
                    "description": "The search for Hubble's error continues, and could involve some complex and risky operations really soon!",
                    "url": "https://www.universetoday.com/151669/nasa-continues-to-try-and-rescue-failing-hubble/",
                    "urlToImage": "https://www.universetoday.com/wp-content/uploads/2015/11/hubble-scope-1024x683.jpg",
                    "publishedAt": "2021-07-03T02:23:19Z",
                    "content": "Things are not looking very good for the Hubble Space Telescope right now. On Sunday, June 13th, the telescope’s payload computer suddenly stopped working, prompting the main computer to put the tele… [+4921 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "ScienceAlert"
                    },
                    "author": "Michelle Starr",
                    "title": "Visiting Comet 46P/Wirtanen Is 'Abnormally High' in Alcohol - ScienceAlert",
                    "description": "Comets are boozy beasts.",
                    "url": "https://www.sciencealert.com/visiting-comet-46p-wirtanen-is-abnormally-high-in-alcohol",
                    "urlToImage": "https://www.sciencealert.com/images/2021-07/processed/C46PWirtanenCometGlowsGreen_1024.jpg",
                    "publishedAt": "2021-07-03T00:03:12Z",
                    "content": "Comets are boozy beasts.\r\nThey come in here to the inner Solar System from goodness-knows-where (the outer Solar System), get a little warmth, and start spewing alcoholic compounds into space, willy-… [+4630 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Isaac Schultz",
                    "title": "See the ExoMars Parachute Deploy From 18 Miles Up - Gizmodo",
                    "description": "The European Space Agency tested the vital component of the upcoming Mars mission last week.",
                    "url": "https://gizmodo.com/see-the-exomars-parachute-deploy-from-18-miles-up-1847222050",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2f615fe9aa76d69df76345225c8aa113.gif",
                    "publishedAt": "2021-07-02T22:00:00Z",
                    "content": "A dummy ascended to stratospheric heights last week, as part of the European Space Agencys ongoing preparation for its ExoMars mission, set to launch next year. The structural integrity (and reputati… [+1577 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Kristen Rogers, CNN",
                    "title": "In fossilized dinosaur poop, scientists find hidden treasure - CNN",
                    "description": "A previously undiscovered, 230-million-year-old beetle species has been found in the fossilized feces of a dinosaur ancestor, according to a study recently published in the journal Current Biology.",
                    "url": "https://www.cnn.com/2021/07/02/world/new-beetle-species-fossil-dinosaur-feces-scn/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210702121147-01-new-beetle-species-scn-super-tease.jpg",
                    "publishedAt": "2021-07-02T21:00:00Z",
                    "content": "(CNN)You might think fossilized feces are only full of crap, but new research on one specimen has turned up a hidden treasure: a 230-million-year-old, previously undiscovered beetle species. \r\nNamed … [+5011 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SpaceNews"
                    },
                    "author": "Jeff Foust",
                    "title": "NASA seeking proposals for next phase of Artemis lunar lander services despite industry protests - SpaceNews",
                    "description": "NASA is seeking proposals to begin the next phase of Artemis lunar lander services, moving quickly despite unresolved protests about the HLS program.",
                    "url": "https://spacenews.com/?p=116667",
                    "urlToImage": "https://spacenews.com/wp-content/uploads/2019/09/lunarlander-sept2019.jpg",
                    "publishedAt": "2021-07-02T20:20:18Z",
                    "content": "WASHINGTON NASA is seeking proposals to begin the next phase of Artemis lunar lander services, moving quickly despite unresolved protests about its selection of SpaceX to develop a lunar lander.\r\nNAS… [+4365 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Futurism"
                    },
                    "author": null,
                    "title": "Amazing New Images Show Auroras on Mars - Futurism",
                    "description": "\"We did anticipate that the instrument would have the potential to do this. It wasn't designed to do it.\"",
                    "url": "https://futurism.com/images-auroras-mars-uae",
                    "urlToImage": "https://wp-assets.futurism.com/2021/07/mars-auroras-images-uae.jpg",
                    "publishedAt": "2021-07-02T20:10:51Z",
                    "content": "A probe sent by the United Arab Emirates to study the Martian atmosphere has caught an exceedingly elusive event on camera, Space.com reports: a nightside aurora on Mars.\r\nBefore the Hope orbiters fo… [+3091 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": "Amanda Kooser",
                    "title": "NASA Hubble delivers space sparklers in time for July 4 - CNET",
                    "description": "A radiant star cluster looks like celestial fireworks in a brilliant Hubble image.",
                    "url": "https://www.cnet.com/news/nasa-hubble-delivers-space-sparklers-in-time-for-july-4/",
                    "urlToImage": "https://www.cnet.com/a/img/rOjR5Qhg3xY-PK33rhoPUuO9daw=/1200x630/2021/07/02/e0d0acce-58ab-4833-9dc6-c874a1e384fb/potw2126a.jpg",
                    "publishedAt": "2021-07-02T18:19:00Z",
                    "content": "Brilliant stars shine in this Hubble view of cluster NGC 330.\r\nESA/Hubble &amp; NASA, J. Kalirai, A. Milone\r\nThe Hubble Space Telescope may be stuck in safe mode, but newly processed images and data … [+1774 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Live Science"
                    },
                    "author": "Stephanie Pappas",
                    "title": "Earth's cryosphere loses enough ice to cover Lake Superior every year - Livescience.com",
                    "description": "The planet is melting at a fast clip.",
                    "url": "https://www.livescience.com/earth-ice-extent-shrinks.html",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/5NDJyC5RrPgVLM2qNZxQUE-1200-80.jpg",
                    "publishedAt": "2021-07-02T18:04:35Z",
                    "content": "Earth\r\n is losing ice at a rapid rate, with a frozen area the size of Lake Superior melting every year. \r\nIt's no surprise that the planet is melting, of course. Researchers have been documenting los… [+3049 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Newser"
                    },
                    "author": "John Johnson",
                    "title": "On an Island, Elephants Shrink Surprisingly Fast - Newser",
                    "description": "Study suggests it took only 40 generations for ancient beasts to lose 85% of their size",
                    "url": "https://www.newser.com/story/308108/on-an-island-elephants-shrink-surprisingly-fast.html",
                    "urlToImage": "https://img1-azrcdn.newser.com/image/1364766-12-20210702132328.jpeg",
                    "publishedAt": "2021-07-02T18:04:00Z",
                    "content": "(Newser)\r\nSomewhere around 400,000 years ago, hulking elephants made their way to what we know now as the Italian island of Sicily. In a relative blink of the eye—roughly 40 generations—they shrank t… [+1462 chars]"
                }
            ]
        },
        science: {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Usda.gov"
                    },
                    "author": null,
                    "title": "Tyson Foods Inc. Recalls Ready-To-Eat Chicken Products Due to Possible Listeria Contamination | Food Safety and Inspection Service - USDA.gov",
                    "description": null,
                    "url": "http://www.fsis.usda.gov/recalls-alerts/tyson-foods-inc.-recalls-ready-eat-chicken-products-due-possible-listeria",
                    "urlToImage": "https://www.fsis.usda.gov/sites/default/files/2021-03/MicrosoftTeams-image.png",
                    "publishedAt": "2021-07-03T23:18:46Z",
                    "content": "WASHINGTON, July 3, 2021 Tyson Foods Inc., a Dexter, Mo. establishment, is recalling approximately 8,492,832 pounds of ready-to-eat (RTE) chicken products that may be adulterated with Listeria monocy… [+3960 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Alyse Stanley",
                    "title": "You Can't Just Slap a Starlink Dish Onto Your Car, California Motorist Finds Out - Gizmodo",
                    "description": "Police ticketed a driver on Friday for this 'visual obstruction' bolted to the hood of their car.",
                    "url": "https://gizmodo.com/you-cant-just-slap-a-starlink-dish-onto-your-car-calif-1847226690",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5a61c9ad24aaa6706df57ccabde625fd.jpg",
                    "publishedAt": "2021-07-03T23:15:00Z",
                    "content": "Somebody got the bright idea to slap a Starlink satellite dish on the hood of their car, and now theyre paying the price. \r\nOn Friday, a California Highway Patrol officer ticketed a motorist driving … [+2216 chars]"
                },
                {
                    "source": {
                        "id": "the-hill",
                        "name": "The Hill"
                    },
                    "author": "Jordan Williams",
                    "title": "Biden: 'Initial thinking' recent ransomware attack not Russian government | TheHill - The Hill",
                    "description": "President Biden said Saturday that “initial thinking” is that the Rus...",
                    "url": "https://thehill.com/policy/cybersecurity/561491-biden-initial-thinking-recent-ransomware-attack-not-russian-government",
                    "urlToImage": "https://thehill.com/sites/default/files/article_images/bidenjoe_7321_gettyimages.jpg",
                    "publishedAt": "2021-07-03T22:07:30Z",
                    "content": "President BidenJoe BidenOregon's COVID-19 vaccination rate hits 70 percentBiden names nominee for US ambassador to GermanyEquilibrium/Sustainability Presented by NextEra Energy Grasshoppers are winni… [+2134 chars]"
                },
                {
                    "source": {
                        "id": "nbc-news",
                        "name": "NBC News"
                    },
                    "author": "The Associated Press",
                    "title": "Royal Caribbean to host 600 first responders in cruise ship near building collapse site - NBC News",
                    "description": "A Royal Caribbean cruise ship will host hundreds of rescuers pouring into South Florida to search for victims at a fallen 12-story condominium building near Miami.",
                    "url": "https://www.nbcnews.com/news/us-news/royal-caribbean-host-600-first-responders-cruise-ship-near-building-n1273052",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_26/3488610/210703-royal-caribbean-mb-2157.jpg",
                    "publishedAt": "2021-07-03T21:06:52Z",
                    "content": "With housing options dwindling, a cruise ship will host hundreds of rescuers pouring into South Florida from across the country as the search for victims continues at a fallen 12-story condominium bu… [+1120 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "KTLA Los Angeles"
                    },
                    "author": "Associated Press",
                    "title": "Las Vegas is bouncing back, but COVID is on the rise too as delta variant takes hold in Nevada - KTLA Los Angeles",
                    "description": "Fifteen months after the pandemic transformed Las Vegas from flamboyant spectacle to ghost town, Sin City is back. Tourists are streaming in again, gambling revenue has hit an all-time high, the Las Vegas Strip has its first new casino in a decade, and big co…",
                    "url": "https://ktla.com/news/nationworld/las-vegas-is-bouncing-back-but-covid-is-on-the-rise-too-as-nevada-sees-nations-highest-case-rate/",
                    "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2021/07/AP21184142547608-e1625343625994.jpg?w=1280",
                    "publishedAt": "2021-07-03T20:21:56Z",
                    "content": "Fifteen months after the pandemic transformed Las Vegas from flamboyant spectacle to ghost town, Sin City is back.\r\nTourists are streaming in again, gambling revenue has hit an all-time high, the Las… [+4880 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "https://www.engadget.com/about/editors/jon-fingas",
                    "title": "Porsche recalls 43,000 Taycan EVs over sudden power loss - Engadget",
                    "description": "Porsche has recalled 43,000 Taycan EVs over a sudden power loss issue that requires a software update..",
                    "url": "https://www.engadget.com/porsche-taycan-ev-power-loss-recall-official-194259245.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-07/002fcbe0-dc32-11eb-b7fb-186f20ce24eb",
                    "publishedAt": "2021-07-03T19:44:21Z",
                    "content": "It didn't take long for Porsche's rumored Taycan recall to become official. The German car maker has recalled about 43,000 Taycan and Taycan Cross Turismo EVs worldwide over a sudden power loss issue… [+1065 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "TribLIVE"
                    },
                    "author": "Brian C Rittmeyer",
                    "title": "Steelworkers union says it achieved its goals in proposed pact with ATI - TribLIVE",
                    "description": "The United Steelworkers union is scheduling meetings to explain a tentative, four-year contract agreement with Allegheny Technologies, Inc. to its members and for them to vote on ratifying it. ATI and the union announced Friday that they had reached the tenta…",
                    "url": "https://triblive.com/local/valley-news-dispatch/steelworkers-union-says-it-achieved-its-goals-in-proposed-pact-with-ati/",
                    "urlToImage": "https://triblive.com/wp-content/uploads/2021/07/4011840_web1_VND-TopEmployers-022419.jpg",
                    "publishedAt": "2021-07-03T19:38:53Z",
                    "content": "The United Steelworkers union is scheduling meetings to explain a tentative, four-year contract agreement with Allegheny Technologies, Inc. to its members and for them to vote on ratifying it.\r\nATI a… [+2726 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Brooke Crothers",
                    "title": "Hate robocalls? Battle against scam calls intensifies - Fox News",
                    "description": "The Federal Communications Commission now requires that carriers implement stricter measures to combat these annoying calls.",
                    "url": "https://www.foxnews.com/tech/hate-robocalls-battle-against-scam-calls-intensifies",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/12/iStock-1143775415.jpg",
                    "publishedAt": "2021-07-03T19:08:37Z",
                    "content": "Still getting too many robocalls? The Federal Communications Commission now requires that carriers implement stricter measures to combat these annoying calls.\r\nSTIR/SHAKEN, the new FCC mandate for ph… [+3959 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Fox Business"
                    },
                    "author": "Brooke Crothers",
                    "title": "As Bitcoin price surged, it fueled rise cyberattacks, researchers say - Fox Business",
                    "description": "The rapid rise in the price of Bitcoin is a driving force behind a rise in cybercrime, according to new research.",
                    "url": "https://www.foxbusiness.com/technology/bitcoin-price-surged-cyberattacks",
                    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/0/0/Bitcoin-Volatility.jpg?ve=1&tl=1",
                    "publishedAt": "2021-07-03T19:05:07Z",
                    "content": "The rapid rise in the price of Bitcoin is a driving force behind a rise in cybercrime, according to new research.\r\nAs the price of Bitcoin surged almost 400% between October 2020 and May 2021, the nu… [+3862 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "autoevolution"
                    },
                    "author": "Ciprian Florea",
                    "title": "All-Electric Ford Mustang Cobra Jet Sets New Quarter-Mile World Record - autoevolution",
                    "description": "The Ford Mustang Cobra Jet 1400, the company's all-electric take on the Cobra Jet dragster, is now the world's fastest full-bodied electric car down the quarter-mile. The record was set by funny car driver Bob Tasca III, the grandson of legendary drag racer B…",
                    "url": "https://www.autoevolution.com/news/all-electric-ford-mustang-cobra-jet-sets-new-quarter-mile-world-record-164585.html",
                    "urlToImage": "https://s1.cdn.autoevolution.com/images/news/all-electric-ford-mustang-cobra-jet-sets-new-quarter-mile-world-record-164585_1.jpg",
                    "publishedAt": "2021-07-03T18:55:00Z",
                    "content": "The benchmark is the result of several improvements Ford made to the electric dragster since it took it to the drag strip for the first time in 2020. Tasca, who set an 8.27-second benchmark last fall… [+1646 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Reuters",
                    "title": "Iraqi minister says BP mulls quitting Iraq, Lukoil wants to sell up - Reuters",
                    "description": "Iraqi Oil Minister Ihsan Abdul Jabbar said in a video posted on Saturday on the ministry's Facebook page that BP <a href=\"https://www.reuters.com/companies/BP.L\" target=\"_blank\">(BP.L)</a> was considering withdrawing from Iraq, and that Russia's Lukoil <a hre…",
                    "url": "https://www.reuters.com/business/energy/iraqi-minister-says-bp-mulls-quitting-iraq-lukoil-wants-sell-up-2021-07-03/",
                    "urlToImage": "https://www.reuters.com/resizer/UCahf6CltTpMEmo7NRSxLCnqOXY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZRS5DIGQ5NLIZCAWHABYONDAPI.jpg",
                    "publishedAt": "2021-07-03T18:40:00Z",
                    "content": "BAGHDAD, July 3 (Reuters) - Iraqi Oil Minister Ihsan Abdul Jabbar said in a video posted on Saturday on the ministry's Facebook page that BP (BP.L) was considering withdrawing from Iraq, and that Rus… [+472 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Denver Post"
                    },
                    "author": "Kieran Nicholson",
                    "title": "Flight cancellations, delays at DIA on busy holiday weekend - The Denver Post",
                    "description": "More than 160 flights have been delayed and 20 flights canceled at Denver International Airport on Saturday morning, with possible severe thunderstorms back in the afternoon and evening weather for…",
                    "url": "https://www.denverpost.com/2021/07/03/denver-airport-delays-cancelations-july-fourth-weekend/",
                    "urlToImage": "https://www.denverpost.com/wp-content/uploads/2020/03/AP20078730504090.jpg?w=1024&h=605",
                    "publishedAt": "2021-07-03T17:04:21Z",
                    "content": "More than 450 flights were delayed and 48 flights canceled at Denver International Airport by late-afternoon Saturday, with possible severe thunderstorms looming in the afternoon and evening weather … [+757 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Aditya Kalra",
                    "title": "EXCLUSIVE Amazon, Tata say Indian govt e-commerce rules will hit businesses -sources - Reuters",
                    "description": "Amazon.com Inc <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a> and India's Tata Group warned government officials on Saturday that plans for tougher rules for online retailers would have a major impact on their business models,…",
                    "url": "https://www.reuters.com/business/retail-consumer/exclusive-amazon-tata-say-indian-govt-e-commerce-rules-will-hit-businesses-2021-07-03/",
                    "urlToImage": "https://www.reuters.com/resizer/nvV1qW71uk2WPXgdny_8DfO8qxI=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ADI57CEPONI2HNFWYE37NEAJQI.jpg",
                    "publishedAt": "2021-07-03T16:48:00Z",
                    "content": "NEW DELHI, July 3 (Reuters) - Amazon.com Inc (AMZN.O) and India's Tata Group warned government officials on Saturday that plans for tougher rules for online retailers would have a major impact on the… [+3125 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Daily Beast"
                    },
                    "author": "Daniel Modlin",
                    "title": "Everdure CUBE Portable Charcoal Grill Review - Daily Beast",
                    "description": "Even though this grill may be small, it has the power to make your summer filled with hot dogs, hamburgers, and so much more.",
                    "url": "https://www.thedailybeast.com/everdure-cube-portable-charcoal-grill-review",
                    "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1624553925/burgerhero_zg5uvm",
                    "publishedAt": "2021-07-03T16:00:00Z",
                    "content": "Scouting Report: This portable grill is designed with everything in mindits easy to clean, use, and has storage space for everything you need to cook out.\r\nGrilling season is upon us and I for one co… [+1760 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Usman Kabir",
                    "title": "10 Best Roth IRA Stocks to Buy According to Reddit - Yahoo Finance",
                    "description": "In this article, we discuss the 10 best Roth IRA stocks to buy according to Reddit. If you want to skip our detailed analysis of these stocks, go directly to...",
                    "url": "https://finance.yahoo.com/news/10-best-roth-ira-stocks-152459397.html",
                    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/faiElEbYobr1tJZODkY3cw--~B/aD01MDA7dz03NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/8dffa054f79970b4f62a8f0ed547f4ea",
                    "publishedAt": "2021-07-03T15:24:59Z",
                    "content": "In this article, we discuss the 10 best Roth IRA stocks to buy according to Reddit. If you want to skip our detailed analysis of these stocks, go directly to the 5 Best Roth IRA Stocks to Buy Accordi… [+13632 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WHIO"
                    },
                    "author": "WHIO Staff",
                    "title": "Sandy Mendelson, longtime Dayton businessman, passes away – WHIO TV 7 and WHIO Radio - WHIO Radio",
                    "description": "Sandy Mendelson, a longtime downtown Dayton businessman, died Saturday morning.",
                    "url": "https://www.whio.com/news/local/sandy-mendelson-longtime-dayton-businessman-passes-away/R3SYQTYQVFCV7FGQWQWSUVX4IE/",
                    "urlToImage": "https://cloudfront-us-east-1.images.arcpublishing.com/cmg/V3JN6HE7DVBPRFNBP5O7XRWYGE.jpg",
                    "publishedAt": "2021-07-03T15:18:00Z",
                    "content": "DAYTON — Sandy Mendelson, a longtime downtown Dayton businessman, died Saturday morning.\r\nMendelsons daughter confirmed with News Center 7 that he passed away in his sleep at his home just five days … [+363 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Nadine El-Bawab",
                    "title": "Carnival Cruise Line to launch first voyage from U.S. port since last year - CNBC",
                    "description": "The Carnival Vista is set to sail on Saturday out of Galveston, Texas, marking Carnival Cruise Line's first U.S. cruise since the pandemic halted operations.",
                    "url": "https://www.cnbc.com/2021/07/03/carnival-to-launch-first-cruise-from-us-port-since-last-year.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106902053-1624542023725-gettyimages-1230283270-AFP_8XP66U.jpeg?v=1625168250",
                    "publishedAt": "2021-07-03T14:30:01Z",
                    "content": "The Carnival Vista is set to sail on Saturday afternoon out of Galveston, Texas, marking Carnival Cruise Line's first U.S. cruise since the pandemic halted its operations. \r\nThe week-long cruise is s… [+4761 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Cat Clifford",
                    "title": "How the Moderna Covid-19 mRNA vaccine was made so quickly - CNBC",
                    "description": "As the delta Covid variant spreads, Moderna co-founder Noubar Afeyan explains how his company was able to deploy an mRNA vaccine in less a year from the start of the pandemic.",
                    "url": "https://www.cnbc.com/2021/07/03/how-moderna-made-its-mrna-covid-vaccine-so-quickly-noubar-afeyan.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106841870-16136049312021-02-17t232139z_1160595869_rc2nul9k3zi8_rtrmadp_0_health-coronavirus-usa-vaccines.jpeg?v=1613604990",
                    "publishedAt": "2021-07-03T13:30:01Z",
                    "content": "Almost allpeople hospitalized for Covid-19 are not vaccinated 99.9% as of May to be exact, according to a recent Associated Press report.\r\nYet 13% of U.S. adults said they will \"definitely not\" get a… [+7185 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Katie Schoolov",
                    "title": "How PG&E is fighting its massive wildfire problem with microgrids, power shutoffs and cutting down trees - CNBC",
                    "description": "California's largest utility company has been blamed for half of the state's most destructive fires since 2015. Now it has a plan to reduce the risk of sparks.",
                    "url": "https://www.cnbc.com/2021/07/03/how-californias-pge-is-fighting-its-massive-wildfire-problem.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106905898-1625201666508-GettyImages-861758244.jpeg?v=1625201748",
                    "publishedAt": "2021-07-03T13:00:01Z",
                    "content": "California's largest utility company, Pacific Gas &amp; Electric, has a massive wildfire problem. Five of the ten most destructive fires in California since 2015 have been linked to PG&amp;E equipmen… [+2877 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Diners at North Carolina Waffle House may have caught hepatitis A virus, officials fear - Charlotte Observer",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiRWh0dHBzOi8vd3d3LmNoYXJsb3R0ZW9ic2VydmVyLmNvbS9uZXdzL2J1c2luZXNzL2FydGljbGUyNTI1NDc0NjMuaHRtbNIBRWh0dHBzOi8vYW1wLmNoYXJsb3R0ZW9ic2VydmVyLmNvbS9uZXdzL2J1c2luZXNzL2FydGljbGUyNTI1NDc0NjMuaHRtbA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T12:37:00Z",
                    "content": null
                }
            ]
        },
        sports: {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "MLB Trade Rumors"
                    },
                    "author": "Anthony Franco",
                    "title": "Cubs Sign Tony Cingrani - MLB Trade Rumors",
                    "description": "The Cubs signed Tony Cingrani to a minor league contract earlier this week, per an announcement from the Lexington Legends of &hellip;",
                    "url": "https://www.mlbtraderumors.com/2021/07/cubs-sign-tony-cingrani.html",
                    "urlToImage": "https://cdn.mlbtraderumors.com/files/2018/09/Cingrani.Tony-3-1024x683.jpg",
                    "publishedAt": "2021-07-04T01:06:17Z",
                    "content": "The Cubs signed Tony Cingrani to a minor league contract earlier this week, per an announcement from the Lexington Legends of the Atlantic League. The southpaw had been pitching for the independent c… [+987 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": "Mike Bohn",
                    "title": "UFC vet John Dodson details near-death car accident: 'I hit the car and we rolled' - MMA Junkie",
                    "description": "John Dodson says his vehicle rolled at least once with him and his family inside during Friday’s near-death car accident.",
                    "url": "https://mmajunkie.usatoday.com/2021/07/ufc-news-john-dodson-statement-details-near-death-car-accident-wife-kids-heatlh-update",
                    "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/07/john-dodson-car-accident.jpg?w=1000&h=576&crop=1",
                    "publishedAt": "2021-07-04T00:34:30Z",
                    "content": "John Dodson has made his first comments on Friday’s serious car accident that nearly took his life as well as those of his wife and three children.\r\nDodson, a 17-fight UFC veteran and Season 14 winne… [+2357 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Rivals.com"
                    },
                    "author": null,
                    "title": "Long-time Sooners Rivals250 offensive line offer Jacob Sexton picked Oklahoma football over Texas, Texas A&M, and others - Rivals.com - Oklahoma",
                    "description": "https://n.rivals.com/content/prospects/2022/jacob-sexton-234401Sexton becomes the eighth four-star prospect or better",
                    "url": "https://oklahoma.rivals.com/news/sexton-stays-home",
                    "urlToImage": "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/c6jg7yzgbwhzd5yhquhv",
                    "publishedAt": "2021-07-04T00:32:29Z",
                    "content": "If there was one position group where you knew there was going to be some clarity for Oklahoma in the 2022 class during this next month, its offensive line.\r\nThose dominoes are falling left and right… [+2686 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "Marc Berman",
                    "title": "Obscure rule makes Chris Paul leaving Suns for Knicks unlikely - New York Post ",
                    "description": "The Suns can offer Chris Paul a four-year deal while the Knicks can’t go past three years because of an obscure “over-38’’ bylaw in the collective bargaining agreement, according to former Nets exe…",
                    "url": "https://nypost.com/2021/07/03/cba-bylaw-makes-chris-paul-leaving-suns-for-knicks-unlikely/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/07/Chris-Paul.jpg?quality=90&strip=all&w=1200",
                    "publishedAt": "2021-07-04T00:14:00Z",
                    "content": "If the Knicks attempt to outbid the Suns for point guard Chris Paul this August, they are at a distinct disadvantage.\r\nAccording to former Nets executive and ESPN cap guru Bobby Marks, the Suns can o… [+3524 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "HIGHLIGHTS: D.C. United vs. Toronto FC | July 03, 2021 - Major League Soccer",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZW55eWJQY2d5Y0nSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-04T00:11:17Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Shaq Reporting Live at State Farm Arena ahead of Game 6 - Iniside the NBA | 2021 NBA Playoffs - House of Highlights",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9anl1ejFFUklKZWvSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T23:58:41Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "pgatour.com"
                    },
                    "author": "Cameron Morfit, PGATOUR.COM",
                    "title": "Joaquin Niemann, Troy Merritt tied at Rocket Mortgage Classic - pgatour.com",
                    "description": "There are 14 players within four shots on a course that is yielding birdies",
                    "url": "https://www.pgatour.com/news/2021/07/03/troy-merritt-joaquin-niemann-tied-at-rocket-mortgage-classic.html",
                    "urlToImage": "https://www.pgatour.com/editorial/2021/07/03/niemann-swing-1694-getty.jpg",
                    "publishedAt": "2021-07-03T23:32:39Z",
                    "content": "DETROIT Troy Merritt (67, 14 under par) hasnt been in the hunt in a while, and as an Iowa native is trying to keep the trophy in the Midwest.\r\nJoaquin Niemann (68, 14 under) finished second in the fi… [+3483 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Detroit Free Press"
                    },
                    "author": "Evan Petzold, Detroit Free Press",
                    "title": "Eric Haase powers Detroit Tigers to 11-5 win over Chicago White Sox - Detroit Free Press",
                    "description": "Detroit Tigers left fielder Eric Haase hit two home runs — one of the inside-the-park variety — for six RBIs to provide a 11-5 win against the White Sox.",
                    "url": "https://www.freep.com/story/sports/mlb/tigers/2021/07/03/detroit-tigers-score-chicago-white-sox-eric-haase/7854168002/",
                    "urlToImage": "https://www.gannett-cdn.com/presto/2021/07/03/PDTF/48e2f2b4-86d0-4961-a651-51a52fe6ec5a-SI_20210703_lbm_af2_23.jpg?auto=webp&crop=1716,966,x0,y120&format=pjpg&width=1200",
                    "publishedAt": "2021-07-03T23:27:33Z",
                    "content": "When the baseball skipped past Billy Hamilton's outstretched glove in center field, Detroit Tigers slugger Eric Haase put his legs into another gear. Known for driving home runs over the fence, Haase… [+6565 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Nick Kyrgios Reflects On Tournament-Ending Injury | Wimbledon 2021 - Wimbledon",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9c3dveWMtZVRHQWvSAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T23:26:26Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "MLB Trade Rumors"
                    },
                    "author": "Anthony Franco",
                    "title": "Angels Option Griffin Canning, Designate Scott Schebler - MLB Trade Rumors",
                    "description": "The Angels announced they've selected the contract of right-hander Andrew Wantz. Somewhat surprisingly, starter Griffin Canning was optioned to Triple-A Salt Lake &hellip;",
                    "url": "https://www.mlbtraderumors.com/2021/07/angels-option-griffin-canning-designate-scott-schebler.html",
                    "urlToImage": "https://cdn.mlbtraderumors.com/files/2021/07/USATSI_16264527-1024x768.jpg",
                    "publishedAt": "2021-07-03T23:21:38Z",
                    "content": "The Angels announced they’ve selected the contract of right-hander Andrew Wantz. Somewhat surprisingly, starter Griffin Canning was optioned to Triple-A Salt Lake in a corresponding move. Outfielder … [+3640 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MMA Fighting"
                    },
                    "author": "MMA Fighting Newswire",
                    "title": "UFC 264 Fight Card: Poirier vs. McGregor 3 - MMA Fighting",
                    "description": "The UFC 264 fight card is headlined by the anticipated trilogy match between Dustin Poirier and Conor McGregor. Poirier won the last clash between the two stars with a second-round TKO at UFC 257...",
                    "url": "https://www.mmafighting.com/2021/7/3/22557241/ufc-264-fight-card-poirier-vs-mcgregor-3",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/o8a57DnwFjtK04ZmfNqbgJhWjVc=/0x0:4031x2110/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22691095/usa_today_15477122.jpg",
                    "publishedAt": "2021-07-03T23:00:00Z",
                    "content": "The UFC 264 fight card is headlined by the anticipated trilogy match between Dustin Poirier and Conor McGregor.\r\nPoirier won the last clash between the two stars with a second-round TKO at UFC 257 ea… [+814 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "nj.com"
                    },
                    "author": "Brendan Kuty | NJ Advance Media for NJ.com",
                    "title": "MLB rumors: Yankees veteran opts out of minor-league deal - NJ.com",
                    "description": "The Yankees saw one of their veteran minor-league infielders walk out the door Saturday.",
                    "url": "https://www.nj.com/yankees/2021/07/mlb-rumors-yankees-veteran-opts-out-of-minor-league-deal.html",
                    "urlToImage": "https://www.nj.com/resizer/nW8o221PO_bymSwJ6s6fFIhGY0c=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SSU3LEFULBGHDI5CFVFZ6JYZ54.jpg",
                    "publishedAt": "2021-07-03T22:38:11Z",
                    "content": "Goodbye, Derek Dietrich. The Yankees hardly knew ye.\r\nDietrich opted out of his minor-league deal with the Yankees, NJ Advance Media confirmed Saturday afternoon. Fansideds Robert Murray first report… [+2210 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Lucas Herbert cards 70 to lead in Ireland | 2021 Dubai Duty Free Irish Open - European Tour",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dFUyejZyWXZyVk3SAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T22:18:40Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "History In Columbus! Gyasi Zardes Scores First Crew Goal at Lower.com Field - Major League Soccer",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M0ZhWkhjNjVXeE3SAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T22:09:59Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "STLtoday.com"
                    },
                    "author": "Derrick Goold",
                    "title": "Cleanup hitter O'Neill not in Cardinals lineup due to finger injury; LeBlanc continues bid for rotation spot - STLtoday.com",
                    "description": "DENVER — The Cardinals planned to have a clearer, more penetrating look into Tyler O'Neill's finger injury Saturday afternoon in Denver and get a sense of their cleanup hitters availability",
                    "url": "https://www.stltoday.com/sports/baseball/professional/birdland/cleanup-hitter-oneill-not-in-cardinals-lineup-due-to-finger-injury-leblanc-continues-bid-for/article_11a5dd71-b911-599d-9617-5be68b8b233d.html",
                    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/b8/ab832031-fad1-59e6-8144-30af52ab726f/60da7eb85e80f.image.jpg?crop=1758%2C989%2C0%2C94&resize=1120%2C630&order=crop%2Cresize",
                    "publishedAt": "2021-07-03T21:48:00Z",
                    "content": "St. Louis Cardinals pitcher Wade LeBlanc makes his first MLB start against the Arizona Diamondbacks at Busch Stadium on Monday, June 28, 2021. Photo by Robert Cohen, rcohen@post-dispatch.com\r\nRobert … [+1308 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Jason Hoffman, Rachel Janfaza and Homero De la Fuente, CNN",
                    "title": "Biden on Sha'Carri Richardson's suspension for positive drug test: 'The rules are the rules' - CNN ",
                    "description": "President Joe Biden said he was \"really proud of the way\" US track and field star Sha'Carri Richardson responded following a positive drug test and subsequent suspension that will prevent her from running in her signature event for Team USA in the Olympics la…",
                    "url": "https://www.cnn.com/2021/07/03/politics/shacarri-richardson-joe-biden-marijuana-test-olympics/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210702093334-02-shacarri-richardson-super-tease.jpg",
                    "publishedAt": "2021-07-03T21:32:00Z",
                    "content": "(CNN)President Joe Biden said he was \"really proud of the way\" US track and field star Sha'Carri Richardson responded following a positive drug test and subsequent suspension that will prevent her fr… [+3596 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Euro 2020: Euphoric England fans in London celebrate cruising to the semis | AFP - AFP News Agency",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M0wxTVBOTDRBYU3SAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T21:24:56Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "ClutchPoints"
                    },
                    "author": "Benedetto Vitale",
                    "title": "2 underrated sleepers on Eagles roster heading into 2021 NFL season - ClutchPoints",
                    "description": "The Philadelphia Eagles are gearing up for the 2021 NFL season with training camp quickly approaching. They need step-up performances.",
                    "url": "https://clutchpoints.com/2-underrated-sleepers-on-eagles-roster-heading-into-2021-nfl-season/",
                    "urlToImage": "https://clutchpoints.com/wp-content/uploads/2021/07/2-underrated-sleepers-on-the-Eagles-roster-heading-into-2021-NFL-season-thumbnail-1000x600.jpg",
                    "publishedAt": "2021-07-03T21:23:00Z",
                    "content": "The Philadelphia Eaglesare gearing up for the 2021 NFL season with training camp quickly approaching. Philly has a chance to make the postseason this year thanks to a weak NFC East division. Even so,… [+3125 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MLB Trade Rumors"
                    },
                    "author": "TC Zencka",
                    "title": "Nationals Place Kyle Schwarber, Alex Avila On 10-Day Injured List, Select Alcides Escobar - MLB Trade Rumors",
                    "description": "The Nationals announced a host of roster moves, the most notable placing Kyle Schwarber on the 10-day injured list. Catcher &hellip;",
                    "url": "https://www.mlbtraderumors.com/2021/07/nationals-place-kyle-schwarber-alex-avila-on-10-day-injured-list-select-alcides-escobar.html",
                    "urlToImage": "https://cdn.mlbtraderumors.com/files/2021/07/kyleschwarber-nationals-1024x721.jpg",
                    "publishedAt": "2021-07-03T21:19:28Z",
                    "content": "The Nationals announced a host of roster moves, the most notable placing Kyle Schwarber on the 10-day injured list. Catcher Alex Avila also heads to the 10-day injured list because of bilateral calf … [+2640 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "247Sports"
                    },
                    "author": "Brandon Huffman",
                    "title": "No. 1 2021 recruit J.T. Tuimoloau will make commitment July 4 on CBSSports HQ - 247Sports",
                    "description": "Defensive end J.T. Tuimoloau, the Top247’s No. 1 player in the 2021 class, is ready to close the book on his recruitment. “I’ll be announcing my",
                    "url": "https://247sports.com/Article/JT-Tuimoloau-commitment-date-how-to-watch-stream-final-schools-167368905/",
                    "urlToImage": "https://s3media.247sports.com/Uploads/Assets/610/345/10345610.JPG?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630",
                    "publishedAt": "2021-07-03T21:18:43Z",
                    "content": "Defensive end J.T. Tuimoloau, the Top247’s No. 1 player in the 2021 class, is ready to close the book on his recruitment.\r\n“I’ll be announcing my decision on the 4th of July,” said Tuimoloau, who wil… [+2832 chars]"
                }
            ]
        },
        technology: {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "SamMobile"
                    },
                    "author": "SamMobile",
                    "title": "As it moves to Wear OS, Samsung wants owners of its first Android watch to switch to Tizen - SamMobile",
                    "description": "Samsung's return to an Android-based operating system for its smartwatches is happening later this year, with the Galaxy Watch 4 ...",
                    "url": "https://www.sammobile.com/news/samsung-ending-support-for-android-based-galaxy-gear-smartwatch",
                    "urlToImage": "https://www.sammobile.com/wp-content/uploads/2021/07/SAM_0769-720x480.jpg",
                    "publishedAt": "2021-07-03T21:59:00Z",
                    "content": "Samsung’s return to an Android-based operating system for its smartwatches is happening later this year, with the Galaxy Watch 4 and Galaxy Watch 4 Active set to run Wear OS instead of Samsung’s Tize… [+1885 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": "Jason Cipriani",
                    "title": "iOS 15 beta on iPhone: 3 things you absolutely need to know before you install - CNET",
                    "description": "Trying out the latest and greatest software Apple has to offer is tempting, but it's a good idea to wait a little longer.",
                    "url": "https://www.cnet.com/how-to/ios-15-beta-on-iphone-3-things-you-absolutely-need-to-know-before-install/",
                    "urlToImage": "https://www.cnet.com/a/img/CUZbuqKAVGx-f81B_xs2CHl_fI0=/0x0:4000x2667/1200x630/2021/04/24/f4892b67-97c5-4352-95f3-b40f18b857b3/127-iphone-12-purple-2021.jpg",
                    "publishedAt": "2021-07-03T21:43:05Z",
                    "content": "Jumping right into iOS 15 probably isn't the best idea. We'll tell you why. \r\nSarah Tew/CNET\r\nThis story is part of WWDC 2021. All the latest coverage from Apple's annual developers conference.\r\nThe … [+4276 chars]"
                },
                {
                    "source": {
                        "id": "ign",
                        "name": "IGN"
                    },
                    "author": "Shawn Saris",
                    "title": "Daily Deals: Gaming Laptops and MacBook Holiday Sales - IGN - IGN",
                    "description": "Daily Deals: Gaming Laptops and MacBook Holiday Sales",
                    "url": "https://www.ign.com/articles/daily-deals-gaming-laptops-and-macbook-holiday-sales",
                    "urlToImage": "https://assets-prd.ignimgs.com/2021/07/03/july3deals-1625347296358.png?width=1280",
                    "publishedAt": "2021-07-03T21:26:57Z",
                    "content": "This Saturday has brought with it a bunch of PC related sales that are just too good to not talk about. MacBooks are on sale still at Amazon, while gaming and productivity laptops and desktops are av… [+170 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Alyse Stanley",
                    "title": "These Nine Android Apps May Have Stolen Your Facebook Login Information - Gizmodo",
                    "description": "Nine trojan apps with more than 5.8 million combined downloads have been kicked off Google's Play Store.",
                    "url": "https://gizmodo.com/these-nine-android-apps-may-have-stolen-your-facebook-l-1847226246",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/84535c7b666bfb8472c80196a31ca740.jpg",
                    "publishedAt": "2021-07-03T20:38:00Z",
                    "content": "Google has kicked nine Android apps with more than 5.8 million combined downloads off its Play Store after researchers discovered they contained malicious code used to steal users Facebook login cred… [+3273 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CarScoops"
                    },
                    "author": null,
                    "title": "QOTD: What Car Variant Would You Build Because The Automaker Won’t? - CarScoops",
                    "description": "From home-built performance wagons to manual conversions of automatic-only cars, enterprising wrenchers are to happy to create the cars the carmakers won't give us.",
                    "url": "https://www.carscoops.com/2021/07/qotd-what-car-variant-would-you-build-because-the-automaker-wont/",
                    "urlToImage": "https://www.carscoops.com/wp-content/uploads/2021/06/QOTD.jpg",
                    "publishedAt": "2021-07-03T18:39:15Z",
                    "content": "In less than 12 months from now BMW will take the wraps off the first ever M3 Touring. Or, the first ever series production M3 Touring, we should say because, technically, BMW built a prototype of an… [+3526 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Kotaku"
                    },
                    "author": "Zack Zwiezen",
                    "title": "My Elder Scrolls Online Apartment Is Very Sad And Crappy - Kotaku",
                    "description": "🎵 Come with me, and you’ll be, in a world of shitty online housing... 🎵",
                    "url": "https://kotaku.com/my-elder-scrolls-online-apartment-is-very-sad-and-crapp-1846793042",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qmku5kw8zgb8jzufinhi.jpg",
                    "publishedAt": "2021-07-03T18:30:00Z",
                    "content": "I recently starting playing the Elder Scrolls Online again because... I dont have a good reason. I guess, I just genuinely like the game and the overall Elder Scrolls universe. \r\nWhen I booted up ESO… [+1392 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eurogamer.net"
                    },
                    "author": "Wesley Yin-Poole",
                    "title": "The System Shock remake gets seven minutes of new gameplay - Eurogamer.net",
                    "description": null,
                    "url": "https://www.eurogamer.net/articles/2021-07-03-the-system-shock-remake-gets-seven-minutes-of-new-gameplay",
                    "urlToImage": "https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-07-03-19-06/-1625335563925.jpg/EG11/resize/1200x-1/-1625335563925.jpg",
                    "publishedAt": "2021-07-03T18:08:00Z",
                    "content": "Nightdive Studios has published seven minutes of gameplay of its System Shock remake.\r\nThe System Shock video, below, includes plenty of skulking about in the Research level of Citadel Station.\r\nI th… [+1358 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Daily Hodl"
                    },
                    "author": "Daily Hodl Staff",
                    "title": "Crypto Millionaire Says He’s Giving Away 1,000,000 Dogecoin (DOGE) Today – Here’s Why - The Daily Hodl",
                    "description": "A crypto entrepreneur says he's giving away 1 million of his personal Dogecoin (DOGE) holdings today, worth over $240,000.",
                    "url": "https://dailyhodl.com/2021/07/03/crypto-millionaire-says-hes-giving-away-1000000-dogecoin-doge-today-heres-why/",
                    "urlToImage": "https://i2.wp.com/dailyhodl.com/wp-content/uploads/2021/07/ml8968se.jpg?fit=1365%2C800&ssl=1",
                    "publishedAt": "2021-07-03T17:31:15Z",
                    "content": "A crypto entrepreneur says he’s giving away 1 million of his personal Dogecoin (DOGE) holdings today, worth over $240,000.\r\nIt’s part of a push to promote the beta launch of an augmented reality game… [+1617 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Khamosh Pathak",
                    "title": "How to Install tvOS 15 Public Beta on Your Apple TV - Lifehacker",
                    "description": "You can install the new tvOS 15 features without waiting till the fall.",
                    "url": "https://lifehacker.com/how-to-install-tvos-15-public-beta-on-your-apple-tv-1847219334",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/73ba796697b28b64eb17fcd4892d60d7.jpg",
                    "publishedAt": "2021-07-03T17:00:00Z",
                    "content": "While you might not think of the software that runs on your Apple TV too often, Apple does release a major update every year. In the fall of 2021, Apple will release tvOS 15, which brings some qualit… [+4154 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Forbes"
                    },
                    "author": "Erik Kain",
                    "title": "Microsoft Should Buy The ‘Metal Gear Solid’ Franchise - Forbes",
                    "description": "Microsoft should buy the Metal Gear Solid franchise and give it back to Hideo Kojima.",
                    "url": "https://www.forbes.com/sites/erikkain/2021/07/03/microsoft-should-buy-the-metal-gear-solid-franchise/",
                    "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60e0901d9999c1d8cdaa4e5d%2F0x0.jpg",
                    "publishedAt": "2021-07-03T16:40:03Z",
                    "content": "Microsoft should buy the Metal Gear Solid franchise and give it back to Hideo Kojima.\r\nCredit: Konami\r\nOver at GamesBeat, Jeff Grubb reports that Metal Gear Solid and Death Stranding developer Hideo … [+2792 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Rudie Obias",
                    "title": "These 4th of July video game sales will red, white and blow you away — prices start as low as $5! - Yahoo Lifestyle",
                    "description": "Save up to 70 percent on gear for Xbox One, PS4, PC and Nintendo Switch — plus score a headset for just $15!",
                    "url": "https://www.yahoo.com/entertainment/4th-july-gaming-sales-234259678.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/w7t6lD7Luf5.3HzmeJUSPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzMz/https://s.yimg.com/os/creatr-uploaded-images/2021-07/172f56c0-db7f-11eb-aaef-dee6f6043d89",
                    "publishedAt": "2021-07-03T16:06:42Z",
                    "content": "We may receive commission from purchases made via links on this page. Pricing and availability are subject to change.\r\nYes, it's summer, but 1) Sometimes it's raining out, and 2) Socially isolating i… [+10267 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "ComicBook.com"
                    },
                    "author": "Logan Moore",
                    "title": "The Last of Us Part 2 Receives Surprising New Update - ComicBook.com",
                    "description": "The Last of Us Part II has been out for over a year at this point, and as of this week, developer Naughty Dog has surprisingly released a new update for the game. The patch itself wasn't one that was announced beforehand and as such, comes about as a bit of a…",
                    "url": "https://comicbook.com/gaming/news/the-last-of-us-part-2-update-ps4-ps5-july-2021/",
                    "urlToImage": "https://media.comicbook.com/2020/06/the-last-of-us-part-2-ellie-1225972-1280x0.jpeg",
                    "publishedAt": "2021-07-03T15:58:00Z",
                    "content": "The Last of Us Part II has been out for over a year at this point, and as of this week, developer Naughty Dog has surprisingly released a new update for the game. The patch itself wasn't one that was… [+1810 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Why Sony Fans Should Keep An Eye on July 6 | Game Rant - GameRant",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiQ2h0dHBzOi8vZ2FtZXJhbnQuY29tL3NvbnktcGxheXN0YXRpb24tc3RhdGUtcGxheS1hbm5vdW5jZW1lbnQtd2hlbi_SAUdodHRwczovL2dhbWVyYW50LmNvbS9zb255LXBsYXlzdGF0aW9uLXN0YXRlLXBsYXktYW5ub3VuY2VtZW50LXdoZW4vYW1wLw?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T15:54:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Rumor: Fire Emblem Remake Game in Development for the Switch - GameRant",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiNGh0dHBzOi8vZ2FtZXJhbnQuY29tL2ZpcmUtZW1ibGVtLXJlbWFrZS1ydW1vcnMtbGVhay_SAThodHRwczovL2dhbWVyYW50LmNvbS9maXJlLWVtYmxlbS1yZW1ha2UtcnVtb3JzLWxlYWsvYW1wLw?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T14:50:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": "Ian Sherr",
                    "title": "For years, Apple sold itself as the anti-Microsoft. Now Windows 11 is the anti-Apple - CNET",
                    "description": "Microsoft wants to make its Windows software stand out from the tech crowd. And it's trying to do that by targeting the iPhone.",
                    "url": "https://www.cnet.com/news/for-years-apple-sold-itself-as-the-anti-microsoft-now-windows-11-is-the-anti-apple/",
                    "urlToImage": "https://www.cnet.com/a/img/0LIPzPYvNdIIfWrsZvtA6ADry2A=/1200x630/2019/01/28/55f3a9de-f50e-4636-af0e-0498755c1a3e/microsoft-logo-msft-1092.jpg",
                    "publishedAt": "2021-07-03T14:46:00Z",
                    "content": "Windows 11 will be a free upgrade when it launches later this year.\r\nGetty Images\r\nAt first blush, Microsoft's upcoming Windows 11 looks to be a solid update to the operating system software that pow… [+8332 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "https://www.engadget.com/about/editors/mariella-moon",
                    "title": "OnePlus is integrating its mobile operating system with Oppo's - Engadget",
                    "description": "OnePlus and Oppo are working on integrating the codebase of OxygenOS and ColorOS..",
                    "url": "https://www.engadget.com/oneplus-oppo-oxygenos-coloros-shared-codebase-141211007.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-07/6f857a10-dbee-11eb-a763-584a15051ee3",
                    "publishedAt": "2021-07-03T14:13:43Z",
                    "content": "Half a month after OnePlus announced that it's becoming an Oppo sub-brand, it has revealed that it's also merging its OxygenOS with its new parent company's ColorOS. The two brands have come to the d… [+1748 chars]"
                },
                {
                    "source": {
                        "id": "the-wall-street-journal",
                        "name": "The Wall Street Journal"
                    },
                    "author": "Mike Jordan",
                    "title": "What’s His Dream Car? Hint: Mercedes Is His Mom’s Middle Name - The Wall Street Journal",
                    "description": "When Roger Graham wanted an exotic car, a childhood memory led him to a 2011 Mercedes-Benz SLS AMG",
                    "url": "https://www.wsj.com/articles/whats-his-dream-car-hint-mercedes-is-his-moms-middle-name-11625320800",
                    "urlToImage": "https://images.wsj.net/im-364006/social",
                    "publishedAt": "2021-07-03T14:00:00Z",
                    "content": "Roger Graham, 49, an engineer and CEO of Precision Enclosure Systems, a company that fabricates commercial metal products in Bellflower, Calif., on his 2011 Mercedes-Benz SLS AMG, as told to Mike Jor… [+3201 chars]"
                },
                {
                    "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                    },
                    "author": "Verge Staff",
                    "title": "The Verge’s favorite summer gear for 2021 - The Verge",
                    "description": "After over a year of indoor living, people are finally able to go out and enjoy the outdoors. Here are some of the recommendations from The Verge staff, including outdoor tech, camera gear, rugged footwear, and gadgets that help you take it easy.",
                    "url": "https://www.theverge.com/22560614/summer-gear-tech-favorite-2021",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/LmXgftlP2dHyy_0rKy8NrSoshFk=/0x875:2040x1943/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22696168/SeanK_Green_Khaki_42153ef6_8cdc_4937_9d43_31d3cfda5ef4_2048x.jpeg",
                    "publishedAt": "2021-07-03T14:00:00Z",
                    "content": "Everyones heading outside, and heres what theyre bringing\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto: Wise Owl Outfitters\r\nAfter over a… [+10318 chars]"
                },
                {
                    "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                    },
                    "author": "Kim Lyons",
                    "title": "Bird plans a pilot program for electric wheelchair and mobility scooter rentals in NYC this summer - The Verge",
                    "description": "Scooter company Bird is partnering with mobility vehicle company Scootaround on a pilot program that will test accessible electric vehicle rentals in New York City this summer. Users can choose one of three different models to rent.",
                    "url": "https://www.theverge.com/2021/7/3/22561924/bird-pilot-electric-wheelchair-mobility-scooter-rentals-new-york",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/LFyIqhHZG-A5sU1JxfOD_9yU9ms=/0x30:1024x566/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22697529/bird_scootaround_offer_on_demand_accessible_mobility_cities_3.jpg",
                    "publishedAt": "2021-07-03T13:30:00Z",
                    "content": "Its part of a partnership with mobility vehicle company Scootaround\r\nBird is piloting a mobility scooter rental program in New York City\r\nBird\r\nScooter company Bird is partnering with mobility vehicl… [+1238 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "Qualcomm Drops Arm to Compete in PC Market - Thurrott.com",
                    "description": null,
                    "url": "https://news.google.com/__i/rss/rd/articles/CBMiU2h0dHBzOi8vd3d3LnRodXJyb3R0LmNvbS9oYXJkd2FyZS8yNTI5MDgvcXVhbGNvbW0tZHJvcHMtYXJtLXRvLWNvbXBldGUtaW4tcGMtbWFya2V00gEA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2021-07-03T13:07:31Z",
                    "content": null
                }
            ]
        }
    }

    console.log(req.params);
    const obj = req.params;
    console.log(myCache.keys());
    const region = myCache.get(obj.region);
    if(useApi === "true"){
        if(region === undefined || region !== obj.region){
            myCache.set(`${obj.region}`, obj.region);
            axios.all([
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=general&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=business&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=entertainment&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=health&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=science&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=sports&apiKey=${apiKey}`),
                axios.get(`https://newsapi.org/v2/top-headlines?country=${obj.region}&category=technology&apiKey=${apiKey}`),
            ]).then(axios.spread((general, science, business, entertainment, health, sports, technology) => {
                const data = {
                    general: general.data,
                    science: science.data,
                    business: business.data,
                    entertainment: entertainment.data,
                    health: health.data,
                    sports: sports.data,
                    technology: technology.data,
                };
                myCache.set(`${obj.region}Data`, data, 18000);
                res.json({data: myCache.get(`${obj.region}Data`), message: "Axios call data"});
            }))
            .catch(err => {
                res.json(err);
            })
        }
        else {
            res.json({data: myCache.get(`${obj.region}Data`), message: "cache data"});
        }
    }
    else
        res.json({data: info, message: "cache data"})
    // }
}