const channels = [

/* -------- ARABIC -------- */
{ id:1, name:"Al Jazeera English", group:"arabic", type:"hls", src:"https://live-hls-web-aje.getaj.net/AJE/index.m3u8" },
{ id:2, name:"Al Jazeera Arabic", group:"arabic", type:"youtube", src:"8YHn2cU1p0I" },
{ id:3, name:"Al Jazeera Mubasher", group:"arabic", type:"youtube", src:"UgoCNK5Zl0E" },
{ id:4, name:"Al Arabiya", group:"arabic", type:"youtube", src:"dg7mQYz4sHk" },
{ id:5, name:"Al Hadath", group:"arabic", type:"youtube", src:"1E0v1nV0n5Y" },
{ id:6, name:"Asharq News", group:"arabic", type:"youtube", src:"Yb6Jj8r5j3Q" },
{ id:7, name:"Al Araby TV", group:"arabic", type:"youtube", src:"gCNeDWCI0vo" },
{ id:8, name:"Sky News Arabia", group:"arabic", type:"youtube", src:"1qk9v7cXg4k" },
{ id:9, name:"France 24 Arabic", group:"arabic", type:"youtube", src:"g2N5E0DkY7k" },
{ id:10, name:"RT Arabic", group:"arabic", type:"youtube", src:"QX9R0s4aE6M" },
{ id:11, name:"TRT عربي", group:"arabic", type:"youtube", src:"T3nM6F3yYqY" },
{ id:12, name:"CGTN Arabic", group:"arabic", type:"youtube", src:"sJz8rWZKf7g" },
{ id:13, name:"Al Hurra", group:"arabic", type:"youtube", src:"i2n0qKX0v9k" },
{ id:14, name:"Al Mayadeen", group:"arabic", type:"youtube", src:"E0zX9c5G7Qk" },
{ id:15, name:"BBC Arabic", group:"arabic", type:"youtube", src:"f0lYkdA-Gtw" },
{ id:64, name:"i24NEWS Arabic", group:"arabi", type:"hls", src:"https://bcovlive-a.akamaihd.net/4109a6c6e5b742d9a3a4e1f2e6e0a7d3/eu-west-1/5377161796001/profile_0/chunklist.m3u8" },

/* -------- LEBANESE -------- */
{ id:16, name:"LBCI Lebanon", group:"lebanese",type:"youtube", src:"hG9Z6Qp7wG4" },
{ id:17, name:"MTV Lebanon", group:"lebanese", type:"youtube", src:"N8s4sE7zT8o" },
{ id:18, name:"Al Jadeed", group:"lebanese", type:"youtube", src:"E0R7pH3B0gk" },
{ id:19, name:"OTV Lebanon", group:"lebanese", type:"youtube", src:"C9dVQ2Y1o8o" },
{ id:20, name:"Tele Liban", group:"lebanese", type:"youtube", src:"qzQ0l7K3n3U" },
{ id:21, name:"NBN Lebanon", group:"lebanese", type:"youtube", src:"jXy6E7yT3lQ" },
{ id:22, name:"Al Manar", group:"lebanese", type:"youtube", src:"L2k5kF1X9yA" },

/* -------- GULFRABREGION -------- */
{ id:23, name:"Saudi News Channel", group:"gulfarabregion", type:"youtube", src:"E9ZV0y3fP0E" },
{ id:24, name:"Dubai TV", group:"gulfarabregion", type:"youtube", src:"dN6V0JH5v3Q" },
{ id:25, name:"Abu Dhabi TV", group:"gulfarabregion", type:"youtube", src:"qv4tW4d4nqk" },
{ id:26, name:"Sharjah TV", group:"gulfarabregion", type:"youtube", src:"9Q9X8yZ0N0k" },
{ id:27, name:"Kuwait TV", group:"gulfarabregion", type:"youtube", src:"yQYbR6cJ7zE" },
{ id:28, name:"Qatar TV", group:"gulfarabregion", type:"youtube", src:"c1yYv7bVf3Q" },
{ id:29, name:"Oman TV", group:"gulfarabregion", type:"youtube", src:"6X3mJ7Q2z0M" },
{ id:30, name:"Bahrain TV", group:"gulfarabregion", type:"youtube", src:"9M5kC4b6XoE" },

/* -------- INTNEWS -------- */
{ id:31, name:"France 24 English", group:"intnews", type:"youtube", src:"bNyUyrR0PHo" },
{ id:32, name:"DW News", group:"intnews", type:"youtube", src:"GE_SfNVNyqk" },
{ id:33, name:"Sky News", group:"intnews", type:"youtube", src:"9Auq9mYxFEE" },
{ id:34, name:"ABC News Live", group:"intnews", type:"youtube", src:"w_Ma8oQLmSM" },
{ id:35, name:"Bloomberg Live", group:"intnews", type:"youtube", src:"dp8PhLsUcFE" },
{ id:36, name:"NBC News Now", group:"intnews", type:"youtube", src:"UCeY0bbntW4" },
{ id:37, name:"CBS News", group:"intnews", type:"youtube", src:"XWq5kBlakcQ" },
{ id:38, name:"TRT World", group:"intnews", type:"youtube", src:"cR9JcQk7J4o" },
{ id:39, name:"Euronews", group:"intnews", type:"youtube", src:"sPgqEHsONK8" },
{ id:40, name:"NHK World Japan", group:"intnews", type:"youtube", src:"f0lYkdA-Gtw" },

/* -------- SCIENCESPACE -------- */
{ id:41, name:"NASA TV", group:"scincespace", type:"hls", src:"https://ntv1.nasa.gov/hls/live/2038346/NTV-Public/master.m3u8" },
{ id:42, name:"NASA Media", group:"scincespace",type:"hls", src:"https://ntv2.nasa.gov/hls/live/2038345/NTV-Media/master.m3u8" },

/* -------- DOCLIFESTYLE -------- */
{ id:43, name:"WaterBear", group:"doclifestyle", type:"hls", src:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00353-littledotstudios-waterbear-samsunguk/playlist.m3u8" },
{ id:44, name:"Real Stories", group:"doclifestyle", type:"hls", src:"https://littledot-realstories-samsung.amagi.tv/playlist.m3u8" },
{ id:45, name:"Documentary+", group:"doclifestyle", type:"hls", src:"https://documentaryplus-samsung.amagi.tv/playlist.m3u8" },
{ id:46, name:"Love Nature", group:"doclifestyle", type:"hls", src:"https://lovenature-samsung.amagi.tv/playlist.m3u8" },

/* -------- SPORTS / SPECIAL -------- */
{ id:47, name:"Red Bull TV", group:"sports", type:"hls", src:"https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8" },
{ id:48, name:"World Poker Tour", group:"sports", type:"hls", src:"https://worldpokertour-samsung.amagi.tv/playlist.m3u8" },

/* -------- ENTERTAINMENT -------- */
{ id:49, name:"Rakuten Action", group:"ent", type:"hls", src:"https://rakuten-action-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:50, name:"Rakuten Comedy", group:"ent", type:"hls", src:"https://rakuten-comedy-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:51, name:"Rakuten Drama", group:"ent", type:"hls", src:"https://rakuten-drama-1-eu.rakuten.wurl.tv/playlist.m3u8" },

/* -------- ARABIC EXTRA -------- */
{ id:52, name:"Asharq Business with Bloomberg", group:"arabic", type:"youtube", src:"x8fWqQ3vC0Q" },
{ id:53, name:"CNBC Arabia", group:"arabic", type:"youtube", src:"s1b7x0G6h3A" },
{ id:54, name:"Al Ekhbariya Saudi", group:"arabic", type:"youtube", src:"d3R7kG6Yp2A" },
{ id:55, name:"Al Iraqiya News", group:"arabic", type:"youtube", src:"V5rG6s8tY9Y" },
{ id:56, name:"Al Ghad TV", group:"arabic", type:"youtube", src:"c3d6F0W4h0A" },
{ id:57, name:"Al Sharqiya News", group:"arabic", type:"youtube", src:"1Zp0K5N2Y3E" },

/* -------- BUSINESS & FINANCE -------- */
{ id:58, name:"Bloomberg TV", group:"businessfinance", type:"youtube", src:"iEpJwprxDdk" },
{ id:59, name:"CNBC International", group:"businessfinance", type:"youtube", src:"9NyxcX3rhQs" },
{ id:60, name:"Yahoo Finance Live", group:"businessfinance", type:"youtube", src:"F2QnJc1mY2A" },
{ id:61, name:"TD Ameritrade Network", group:"businessfinance", type:"youtube", src:"6sV3hYqH3XU" },
{ id:62, name:"Financial Times Live", group:"businessfinance", type:"youtube", src:"YxJ6Zc9kH9M" },
{ id:63, name:"Reuters Live", group:"businessfinance", type:"youtube", src:"V2nqB7r5l3E" },


















/* 


/* -------- PLUTO CHANNELS -------- */
{ id:52, name:"Pluto Action", type:"hls", src:"https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca672f515a62078d2ec0ad2/master.m3u8" },
{ id:53, name:"Pluto Comedy", type:"hls", src:"https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca671f215a62078d2ec0ac2/master.m3u8" },
{ id:54, name:"Pluto Movies", type:"hls", src:"https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca671c515a62078d2ec0abf/master.m3u8" },
{ id:55, name:"Pluto Classic TV", type:"hls", src:"https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca6748f515a62078d2ec0b9b/master.m3u8" },

/* -------- MORE LIVE CHANNELS -------- */
{ id:56, name:"FailArmy", type:"hls", src:"https://jukinmedia-failarmy-2-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:57, name:"People Are Awesome", type:"hls", src:"https://jukinmedia-peopleareawesome-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:58, name:"Insight TV", type:"hls", src:"https://insighttv-samsunguk.amagi.tv/playlist.m3u8" },
{ id:59, name:"Motorvision TV", type:"hls", src:"https://stream.motorvision.tv/hls/live.m3u8" },
{ id:60, name:"Tastemade", type:"hls", src:"https://tastemade-samsung.amagi.tv/playlist.m3u8" },

// ----- ADDITIONAL CHANNELS (61–120) -----//

{ id:61, name:"Arirang TV", type:"hls", src:"https://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch_livepkgr/master.m3u8" },
{ id:62, name:"ABC Australia", type:"hls", src:"https://abc-news-dmd-streams.akamaized.net/out/v1/abcnews.m3u8" },
{ id:63, name:"CGTN News", type:"hls", src:"https://live.cgtn.com/1000/prog_index.m3u8" },
{ id:64, name:"CGTN Documentary", type:"hls", src:"https://live.cgtn.com/500d/prog_index.m3u8" },
{ id:65, name:"Press TV", type:"hls", src:"https://live.presstv.ir/hls/presstv.m3u8" },
{ id:66, name:"TeleSUR", type:"hls", src:"https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8" },

{ id:67, name:"WeatherNation", type:"hls", src:"https://weathernationtv-samsung.amagi.tv/playlist.m3u8" },
{ id:68, name:"USA Today News", type:"hls", src:"https://usatoday-samsung.amagi.tv/playlist.m3u8" },
{ id:69, name:"Cheddar News", type:"hls", src:"https://cheddar-samsung.amagi.tv/playlist.m3u8" },
{ id:70, name:"Local Now", type:"hls", src:"https://localnow-samsung.amagi.tv/playlist.m3u8" },

{ id:71, name:"TED Live", type:"hls", src:"https://ted-samsung.amagi.tv/playlist.m3u8" },
{ id:72, name:"Law & Crime", type:"hls", src:"https://lawandcrime-samsung.amagi.tv/playlist.m3u8" },

{ id:73, name:"Travel XP", type:"hls", src:"https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:74, name:"Fashion TV", type:"hls", src:"https://fashiontv-fashiontv-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:75, name:"Gusto TV", type:"hls", src:"https://gustotv-samsung.amagi.tv/playlist.m3u8" },
{ id:76, name:"Bon Appetit", type:"hls", src:"https://bonappetit-samsung.amagi.tv/playlist.m3u8" },

{ id:77, name:"Revry", type:"hls", src:"https://revry-rakuten.amagi.tv/playlist.m3u8" },
{ id:78, name:"Comedy Dynamics", type:"hls", src:"https://comedydynamics-samsung.amagi.tv/playlist.m3u8" },
{ id:79, name:"Mystery Science Theater", type:"hls", src:"https://mst3k-samsung.amagi.tv/playlist.m3u8" },
{ id:80, name:"Shout Factory TV", type:"hls", src:"https://shoutfactory-samsung.amagi.tv/playlist.m3u8" },

{ id:81, name:"Outdoor America", type:"hls", src:"https://outside-samsung.amagi.tv/playlist.m3u8" },
{ id:82, name:"Cars TV", type:"hls", src:"https://carstv-samsung.amagi.tv/playlist.m3u8" },

{ id:83, name:"Rotana Music", type:"youtube", src:"zq4sJ0v4X9g" },
{ id:84, name:"Rotana Khalijia", type:"youtube", src:"yF8Q0rK2n2g" },
{ id:85, name:"MBC Variety", type:"youtube", src:"Q8b7s0rH8lU" },

{ id:86, name:"Al Iraqiya", type:"youtube", src:"3J4Kp7xF7wM" },
{ id:87, name:"Al Sumaria", type:"youtube", src:"9i8u1sVd3Fc" },
{ id:88, name:"Jordan TV", type:"youtube", src:"cC0qX6pG9Ys" },
{ id:89, name:"Palestine TV", type:"youtube", src:"4s1tXb8kQDo" },

{ id:90, name:"Sudan TV", type:"youtube", src:"8lTqR3v5x7E" },
{ id:91, name:"Yemen Today", type:"youtube", src:"d2Lk6P9zR0M" },

{ id:92, name:"Kurdistan 24", type:"youtube", src:"7w3FJ5eP1kY" },
{ id:93, name:"Rudaw TV", type:"youtube", src:"P2q8y2J9t0s" },

{ id:94, name:"Tastemade Travel", type:"hls", src:"https://tastemade-samsung.amagi.tv/playlist.m3u8" },
{ id:95, name:"Insight Sports", type:"hls", src:"https://insighttv-samsunguk.amagi.tv/playlist.m3u8" },

{ id:96, name:"Red Bull Adventure", type:"hls", src:"https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8" },

{ id:97, name:"FailArmy Live", type:"hls", src:"https://jukinmedia-failarmy-2-eu.rakuten.wurl.tv/playlist.m3u8" },
{ id:98, name:"People Are Awesome Live", type:"hls", src:"https://jukinmedia-peopleareawesome-1-eu.rakuten.wurl.tv/playlist.m3u8" },

{ id:99, name:"NatureVision TV", type:"hls", src:"https://lovenature-samsung.amagi.tv/playlist.m3u8" },

{ id:100, name:"Documentary World", type:"hls", src:"https://documentaryplus-samsung.amagi.tv/playlist.m3u8" },

{ id:101, name:"Global News Canada", type:"youtube", src:"8Z2qk9p1QxM" },
{ id:102, name:"India Today Live", type:"youtube", src:"Nq2wYlWFucg" },
{ id:103, name:"News18 India", type:"youtube", src:"4tqQh3HhJcQ" },
{ id:104, name:"Times Now", type:"youtube", src:"H0kQ0o3C8W0" },

{ id:105, name:"WION News", type:"youtube", src:"xXGqH0kQJqA" },

{ id:106, name:"Bloomberg Quicktake", type:"hls", src:"https://bloomberg.com/media-manifest/streams/us.m3u8" },

{ id:107, name:"NHK World", type:"youtube", src:"f0lYkdA-Gtw" },

{ id:108, name:"DW Documentary", type:"youtube", src:"Vn9sY2T9mCk" },

{ id:109, name:"Real Stories Docs", type:"hls", src:"https://littledot-realstories-samsung.amagi.tv/playlist.m3u8" },

{ id:110, name:"WaterBear Nature", type:"hls", src:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00353-littledotstudios-waterbear-samsunguk/playlist.m3u8" },

{ id:111, name:"Motorvision TV", type:"hls", src:"https://stream.motorvision.tv/hls/live.m3u8" },

{ id:112, name:"Stadium Sports", type:"hls", src:"https://stadium-samsung.amagi.tv/playlist.m3u8" },

{ id:113, name:"World Poker Tour", type:"hls", src:"https://worldpokertour-samsung.amagi.tv/playlist.m3u8" },

{ id:114, name:"Tastemade Food", type:"hls", src:"https://tastemade-samsung.amagi.tv/playlist.m3u8" },

{ id:115, name:"Outdoor Channel", type:"hls", src:"https://outside-samsung.amagi.tv/playlist.m3u8" },

{ id:116, name:"Travel Channel Live", type:"hls", src:"https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" },

{ id:117, name:"Fashion TV Europe", type:"hls", src:"https://fashiontv-fashiontv-1-eu.rakuten.wurl.tv/playlist.m3u8" },

{ id:118, name:"Revry Pride", type:"hls", src:"https://revry-rakuten.amagi.tv/playlist.m3u8" },

{ id:119, name:"Comedy Channel Live", type:"hls", src:"https://comedydynamics-samsung.amagi.tv/playlist.m3u8" },

{ id:120, name:"Classic TV Network", type:"hls", src:"https://shoutfactory-samsung.amagi.tv/playlist.m3u8" }

];

