function displayFeedbackBox(feedbackMessage){
    if(feedbackMessage === null){
        return false;
    } else{
        document.getElementById("overLay").style.display = "block";
        document.getElementById("feedbackBox").childNodes[1].innerHTML = feedbackMessage;
        document.getElementById("feedbackBox").style.display = "block";
        return true;
    }
}

function setFeedbackExit(functionToPerform){
    document.getElementById("overLay").addEventListener("click", functionToPerform ,false);
}