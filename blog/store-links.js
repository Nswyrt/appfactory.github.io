/*  store-links.js — shared download buttons for all blog posts
    Usage: add this in your blog HTML where you want store buttons:

    <div class="store-buttons" data-app="a1a3"></div>   ← for A1/A3 app
    <div class="store-buttons" data-app="a2"></div>      ← for A2 app
    <div class="store-buttons" data-app="both"></div>    ← for both apps

    Then include this script at the bottom:
    <script src="store-links.js"></script>
*/

(function () {
    var apps = {
        a1a3: {
            apple: "https://apps.apple.com/app/id6758833683",
            google: "https://play.google.com/store/apps/details?id=com.nicolajswyrtz.dronepiloten",
            appleAlt: "Download DronePilot A1/A3 on App Store",
            googleAlt: "Get DronePilot A1/A3 on Google Play"
        },
        a2: {
            apple: "https://apps.apple.com/app/id6759554282",
            google: "https://play.google.com/store/apps/details?id=com.nicolajswyrtz.dronepilotA2",
            appleAlt: "Download DronePilot A2 on App Store",
            googleAlt: "Get DronePilot A2 on Google Play"
        }
    };

    var appleBadge = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
    var googleBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

    function createButtons(appKey) {
        var app = apps[appKey];
        if (!app) return "";
        return '<a href="' + app.apple + '" target="_blank" rel="noopener">' +
               '<img src="' + appleBadge + '" alt="' + app.appleAlt + '" style="height:42px;border-radius:8px;opacity:0.85;transition:opacity 0.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.85">' +
               '</a> ' +
               '<a href="' + app.google + '" target="_blank" rel="noopener">' +
               '<img src="' + googleBadge + '" alt="' + app.googleAlt + '" style="height:42px;border-radius:8px;opacity:0.85;transition:opacity 0.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.85">' +
               '</a>';
    }

    var targets = document.querySelectorAll(".store-buttons");
    for (var i = 0; i < targets.length; i++) {
        var el = targets[i];
        var appType = el.getAttribute("data-app");
        var html = "";

        if (appType === "both") {
            html += '<div style="margin-bottom:0.75rem"><strong style="font-size:0.82rem;color:#c8c4be;letter-spacing:0.05em;text-transform:uppercase">A1/A3</strong><br>' + createButtons("a1a3") + '</div>';
            html += '<div><strong style="font-size:0.82rem;color:#c8c4be;letter-spacing:0.05em;text-transform:uppercase">A2</strong><br>' + createButtons("a2") + '</div>';
        } else {
            html = createButtons(appType);
        }

        el.innerHTML = html;
        el.style.cssText = "display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-top:0.5rem";
        if (appType === "both") el.style.flexDirection = "column";
    }
})();
