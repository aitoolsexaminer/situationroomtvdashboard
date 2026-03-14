let currentMainSrc = "";

/* =========================
   MUTE HELPER
========================= */

function setMute(src, mute){

  if(!src) return src;

  src = src.replace("mute=0","").replace("mute=1","");

  return src.includes("?")
    ? `${src}&mute=${mute?1:0}`
    : `${src}?mute=${mute?1:0}`;
}

/* =========================
   ACTIVATE TILE
========================= */

function activateTile(number){

  const mainFrame = document.getElementById("mainFeedFrame");
  const mainVideo = document.getElementById("mainFeedVideo");

  const tile = document.querySelector(`.dashboard .tile[data-number="${number}"]`);
  if(!tile) return;

  const player = tile.querySelector("iframe, video");
  if(!player) return;

  document.querySelectorAll(".dashboard .tile")
  .forEach(t=>t.classList.remove("on-air"));

  tile.classList.add("on-air");

  const mainFeed = document.querySelector(".main-feed");
  if(mainFeed) mainFeed.classList.add("has-broadcast");

  const legend = document.querySelector(".main-feed .legend");
  if(legend) legend.style.display="none";

  if(player.tagName==="IFRAME"){

    const src = player.getAttribute("src");

    player.src = setMute(src,true);

    if(mainFrame){
      currentMainSrc = src;
      mainFrame.src = setMute(src,false);
    }

  }

}

/* =========================
   DOM READY
========================= */

document.addEventListener("DOMContentLoaded",()=>{

/* =========================
   START SCREEN
========================= */

const startBtn = document.getElementById("startOk");
const startScreen = document.getElementById("startScreen");

function startDashboard(){

  if(startScreen){
    startScreen.style.display="none";
  }

  const el=document.documentElement;

  if(el.requestFullscreen) el.requestFullscreen();
  else if(el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if(el.msRequestFullscreen) el.msRequestFullscreen();

  initDashboard();
}

if(startBtn){
  startBtn.addEventListener("click",startDashboard);
}

/* =========================
   ABOUT
========================= */

const aboutLink=document.getElementById("about-link");
const aboutClose=document.getElementById("about-close");
const startContent=document.querySelector(".start-content");

if(aboutLink && aboutClose && startContent){

  aboutLink.addEventListener("click",(e)=>{
    e.preventDefault();
    startContent.classList.add("show-about");
  });

  aboutClose.addEventListener("click",()=>{
    startContent.classList.remove("show-about");
  });

}

/* =========================
   CITY SEARCH
========================= */

document.querySelectorAll(".city-search").forEach(input=>{

  const results=input.closest(".settings-option-row")
  ?.querySelector(".city-results");

  if(!results) return;

  input.addEventListener("input",()=>{

    const value=input.value.toLowerCase();
    results.innerHTML="";

    if(!value) return;

    const matches=cities.filter(c=>
      c.name.toLowerCase().includes(value)
    ).slice(0,8);

    matches.forEach(city=>{

      const div=document.createElement("div");
      div.textContent=city.name;

      div.addEventListener("click",()=>{

        input.value=city.name;
        results.innerHTML="";

        const slot=parseInt(input.dataset.slot);
        const zoneId=zoneSlots[slot];

        zones[zoneId]=city.tz;

        const label=document.querySelector(
          `.clock-option-clock[data-clock-label="${zoneId}"]`
        );

        if(label) label.textContent=city.label;

        updateWorldClock();

      });

      results.appendChild(div);

    });

  });

});

/* =========================
   CHANNEL PICKER INIT
========================= */

populateChannelPicker();

/* CHANNEL ACCORDION */

const channelSections=document.querySelectorAll(".chan");

channelSections.forEach(section=>{

  section.addEventListener("toggle",()=>{

    if(section.open){

      channelSections.forEach(other=>{

        if(other!==section){
          other.open=false;
        }

      });

    }

  });

});

});

function resizeDashboard(){

  const dashboard = document.querySelector(".dashboard");
  if(!dashboard) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  dashboard.style.width = width + "px";
  dashboard.style.height = height + "px";

}



/* =========================
   DASHBOARD INIT
========================= */

function initDashboard(){

  buildChannels();
  attachBroadcastEvents();

  const mainFrame=document.getElementById("mainFeedFrame");

  //window.addEventListener("resize", resizeDashboard);
  //window.addEventListener("load", resizeDashboard);

/* =========================
   MAIN FEED CONTROLS
========================= */

const mainVideo=document.getElementById("mainFeedVideo");

const muteBtn=document.querySelector('.control-btn[data-control="mute"]');
const dimBtn=document.querySelector('.control-btn[data-control="dim"]');
const fullscreenBtn=document.querySelector('.control-btn[data-control="fullscreen"]');

if(dimBtn){
  dimBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dim-mode");
  });
}

if(fullscreenBtn){
  fullscreenBtn.addEventListener("click",()=>{
    const mainFeed=document.querySelector(".tile.main-feed");
    if(mainFeed){
      mainFeed.classList.toggle("fullscreen-mode");
    }
  });
}

let mainMuted=false;

if(muteBtn){

  muteBtn.addEventListener("click",()=>{

    mainMuted=!mainMuted;

    if(mainVideo && mainVideo.style.display!=="none"){
      mainVideo.muted=mainMuted;
    }

    if(mainFrame && currentMainSrc){
      mainFrame.src=setMute(currentMainSrc,mainMuted);
    }

    muteBtn.classList.toggle("mute",mainMuted);
    muteBtn.classList.toggle("unmute",!mainMuted);

  });

}

/* =========================
   TILE BROADCAST ICONS
========================= */

document.querySelectorAll(".tile[data-number]").forEach(tile=>{

  const icon=tile.querySelector(".broadcast-icon");
  const player=tile.querySelector("iframe, video");

  if(!icon || !player) return;

  icon.addEventListener("click",()=>{

    const number=tile.dataset.number;

    if(number) activateTile(number);

  });

});

/* =========================
   MUTE ALL TILES
========================= */

document.querySelectorAll(".tile iframe").forEach(frame=>{

  if(frame===mainFrame) return;

  frame.src=setMute(frame.getAttribute("src"),true);

});

/* =========================
   AUTO REFRESH STREAMS
========================= */

setInterval(()=>{

  document.querySelectorAll(".tile iframe").forEach(frame=>{

    if(!frame.src) return;

    frame.src=frame.src;

  });

},300000);

}

/* =========================
   KEYBOARD SHORTCUTS
========================= */

document.addEventListener("keydown", (e) => {

  /* ignore typing inside inputs */
  if(
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA"
  ){
    return;
  }

  const key = e.key.toLowerCase();

  /* FULLSCREEN (F) */
  if(key === "f"){
    const btn = document.querySelector('.control-btn[data-control="fullscreen"]');
    if(btn) btn.click();
  }

  /* MUTE (M) */
  if(key === "m"){
    const btn = document.querySelector('.control-btn[data-control="mute"]');
    if(btn) btn.click();
  }

  /* DIM (D) */
  if(key === "d"){
    const btn = document.querySelector('.control-btn[data-control="dim"]');
    if(btn) btn.click();
  }

});

/* =========================
   KEYBOARD CHANNEL CONTROL
========================= */

let channelBuffer="";
let channelTimer=null;

const overlay=document.getElementById("channelOverlay");

function showChannelOverlay(text){

  if(!overlay) return;

  overlay.textContent="CH "+text;
  overlay.classList.add("show");

}

function hideChannelOverlay(){

  if(!overlay) return;

  overlay.classList.remove("show");

}

document.addEventListener("keydown",(e)=>{

  if(
    document.activeElement.tagName==="INPUT" ||
    document.activeElement.tagName==="TEXTAREA"
  ){
    return;
  }

  if(!/^[0-9]$/.test(e.key)) return;

  channelBuffer+=e.key;

  showChannelOverlay(channelBuffer);

  clearTimeout(channelTimer);

  channelTimer=setTimeout(()=>{

    const typedNumber=parseInt(channelBuffer,10);

    const tile=document.querySelector(
      `.dashboard .tile[data-number="${typedNumber}"]`
    );

    if(tile){
      activateTile(typedNumber);
    }

    hideChannelOverlay();
    channelBuffer="";

  },600);

});

/* =========================
   CHANNEL PICKER
========================= */

function populateChannelPicker(){

const containers={

arabic:document.querySelector("#topic-arabic .chan-list"),
lebanese:document.querySelector("#topic-lebanese .chan-list"),
gulfarabregion:document.querySelector("#topic-gulfarabregion .chan-list"),
intnews:document.querySelector("#topic-intnews .chan-list"),
businessfinance:document.querySelector("#topic-businessfinance .chan-list"),
sciencespace:document.querySelector("#topic-sciencespace .chan-list"),
doclifestyle:document.querySelector("#topic-doclifestyle .chan-list"),
sports:document.querySelector("#topic-sports .chan-list"),
ent:document.querySelector("#topic-ent .chan-list")

};

channels.forEach(channel=>{

  const item=document.createElement("div");
  item.className="channel-option";
  item.textContent=channel.name;

  item.addEventListener("click",()=>{
    assignChannelToSlot(channel);
  });

  const target=containers[channel.group];

  if(target){
    target.appendChild(item);
  }

});

}

function assignChannelToSlot(channel){

if(!activeChannelInput) return;

activeChannelInput.value=channel.name;

const slot=activeChannelInput.dataset.slot;

loadChannelIntoTile(slot,channel);

channelModal.style.display="none";

}

function loadChannelIntoTile(slot,channel){

const tiles=document.querySelectorAll(".dashboard .tile");
const tile=tiles[slot];

if(!tile) return;

const inner=tile.querySelector(".tile-inner");
inner.innerHTML="";

let player;

if(channel.type==="youtube"){

player=document.createElement("iframe");

player.src=`https://www.youtube.com/embed/${channel.src}?autoplay=1&mute=1`;

player.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

}

if(channel.type==="hls"){

player=document.createElement("video");

player.autoplay=true;
player.muted=true;
player.controls=false;

if(Hls.isSupported()){

const hls=new Hls();
hls.loadSource(channel.src);
hls.attachMedia(player);

}

}

inner.appendChild(player);

}