document.addEventListener("DOMContentLoaded", () => {

const feeds = {
reuters: "https://feeds.reuters.com/reuters/topNews",
afp: "https://www.afp.com/en/rss",
ap: "https://apnews.com/rss",
bbc: "https://feeds.bbci.co.uk/news/rss.xml",
bloomberg: "https://feeds.bloomberg.com/markets/news.rss",
wsj: "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
nyt: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
wp: "https://feeds.washingtonpost.com/rss/world",
guardian: "https://www.theguardian.com/world/rss",
cnn: "https://rss.cnn.com/rss/edition.rss"
};

function truncate(text, max = 120) {
if (text.length <= max) return text;
return text.substring(0, max) + "…";
}

async function loadRSS(feedKey, container) {

try {

const url = feeds[feedKey];

const response = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);

const xmlText = await response.text();

const parser = new DOMParser();
const xml = parser.parseFromString(xmlText, "application/xml");

const titles = [...xml.querySelectorAll("item title")]
.slice(0, 8)
.map(t => truncate(t.textContent));

const headlineString = titles.join(" • ");

container.innerHTML = `
<span>${headlineString}</span>
<span style="margin-left:40px">${headlineString}</span>
`;

} catch (err) {

console.error(feedKey, err);
container.innerHTML = `<span>${feedKey.toUpperCase()} error</span>`;

}

}

document.querySelectorAll(".ticker-row").forEach(row => {

const feedKey = row.dataset.feed;
const content = row.querySelector(".ticker-content");

loadRSS(feedKey, content);

setInterval(() => loadRSS(feedKey, content), 300000);

});

});


/* WORLD CLOCK */

function updateWorldClock() {

const zones = {
"time-dc": "America/New_York",
"time-gmt": "Etc/GMT",
"time-bei": "Asia/Beirut",
"time-telaviv": "Asia/Tel_Aviv",
"time-tehran": "Asia/Tehran",
"time-tokyo": "Asia/Tokyo"
};

const now = new Date();

for (const [id, tz] of Object.entries(zones)) {

const time = now.toLocaleTimeString("en-GB", {
hour12: false,
hour: "2-digit",
minute: "2-digit",
timeZone: tz
});

const el = document.getElementById(id);

if (el) el.textContent = time;

}

}

setInterval(updateWorldClock, 60000);
updateWorldClock();


/* SETTINGS MODAL */

document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById("Modal");
const settingsIcon = document.querySelector(".settings-left .icon");
const closeBtn = document.querySelector(".modal .close");

if (settingsIcon) {
settingsIcon.addEventListener("click", () => {
modal.style.display = "block";
});
}

if (closeBtn) {
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});
}

window.addEventListener("click", (event) => {
if (event.target === modal) {
modal.style.display = "none";
}
});

});


function startDashboard() {

const el = document.documentElement;

if (el.requestFullscreen) {
  el.requestFullscreen();
} else if (el.webkitRequestFullscreen) {
  el.webkitRequestFullscreen();
} else if (el.msRequestFullscreen) {
  el.msRequestFullscreen();
}

const modal = document.getElementById("startModal");
if (modal) modal.style.display = "none";

}

document.addEventListener("DOMContentLoaded", () => {

const okButton = document.getElementById("startOk");

if (okButton) {
  okButton.addEventListener("click", startDashboard);
}

});
closeBtn.addEventListener("click", launchFullscreen, { once: true });
}

});
