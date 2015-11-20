function configToolbar() {
    document.getElementById("exitAppElement").onclick = function() {
        window.close();
    };
    document.getElementById("minAppElement").onclick = function() {
        chrome.app.window.current().minimize();
    };
}