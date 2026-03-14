function buildChannels(){

const dashboard = document.querySelector(".dashboard");

if(!dashboard){
console.error("Dashboard not found");
return;
}

channels.slice(0,20).forEach(channel => {

const tile = document.createElement("div");
tile.className = "tile";
tile.dataset.number = channel.id;

const inner = document.createElement("div");
inner.className = "tile-inner";

let player;

if(channel.type === "youtube"){

player = document.createElement("iframe");

player.src =
`https://www.youtube.com/embed/${channel.src}?autoplay=1&mute=1`;

player.allow =
"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

}

if(channel.type === "hls"){

player = document.createElement("video");
player.muted = true;
player.autoplay = true;
player.playsInline = true;

if(Hls.isSupported()){

const hls = new Hls();
hls.loadSource(channel.src);
hls.attachMedia(player);

}

}

inner.appendChild(player);

const icon = document.createElement("div");
icon.className = "broadcast-icon";

tile.appendChild(inner);
tile.appendChild(icon);

dashboard.appendChild(tile);

});

}


/*===========================
attachBroadcastEvents
=====================*/

function attachBroadcastEvents(){

  document.addEventListener("click", function(e){

    const icon = e.target.closest(".broadcast-icon");
    if(!icon) return;

    const tile = icon.closest(".tile");
    if(!tile) return;

    const number = tile.dataset.number;

    console.log("Broadcast clicked:", number);

    activateTile(number);

  });

}