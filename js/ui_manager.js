function UI_ShowAndHide(nameElToShow, nameElToHide) {
    elToShow = document.getElementById(nameElToShow);
    elToHide = document.getElementById(nameElToHide);
    elToShow.style.display = "block";
    elToHide.style.display = "none";
}

function UI_OnStart(tech_data, building_data, ships_data, res){
    document.getElementById("ships_list").style.display = "none";
    GetDom();
    SetUIValues(tech_data, building_data, ships_data, res);
}

var doms = {
    "qtt_struct": null,
    "qtt_conv_weap":null,
    "qtt_"
}

function GetDom(){
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_conv_weap").innerHTML = tech_data.conv_weap;
    document.getElementById("qtt_conv_prop").innerHTML = tech_data.conv_prop;
    document.getElementById("qtt_laser").innerHTML = tech_data.laser;
    document.getElementById("qtt_em_imp").innerHTML = tech_data.em_imp;
    document.getElementById("qtt_plasma").innerHTML = tech_data.plasma;
    document.getElementById("qtt_hyper_prop").innerHTML = tech_data.hyper_prop;
    document.getElementById("qtt_energy").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;
    document.getElementById("qtt_struct").innerHTML = tech_data.structure;

}