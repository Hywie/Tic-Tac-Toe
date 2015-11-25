window.onload = function() {
    configToolbar();
    document.getElementById("roundDropDown").onclick = function() {
        listenToSelect();
    };
};

function listenToSelect() {
    for (i = 1; i < document.getElementById("roundDropDown").length; i++) {
        console.log(document.getElementById("roundDropDown").length);
        if (document.getElementById("roundDropDown").value == i.toString()) {
            createGameWindow(i);
        }
    }
}