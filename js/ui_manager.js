function UI_ShowAndHide(nameElToShow, nameElToHide) {
    elToShow = document.getElementById(nameElToShow);
    elToHide = document.getElementById(nameElToHide);
    elToShow.style.display = "block";
    elToHide.style.display = "none";
}

function UI_OnStart(){
    document.getElementById("ships_list").style.display = "none";
}