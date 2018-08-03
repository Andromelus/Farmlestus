function UI_ShowAndHide(nameElToShow, nameElToHide) {
    elToShow = document.getElementById(nameElToShow);
    elToHide = document.getElementById(nameElToHide);
    elToShow.style.display = "block";
    elToHide.style.display = "none";
}

function UI_OnStart(tech_data, building_data, ships_data, res){
    document.getElementById("ships_list").style.display = "none";
    GetDom();
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

var doms = {
    "qtt_struct": null,
    "qtt_conv_weap":null,
    "qtt_conv_prop":null,
    "qtt_laser":null,
    "qtt_em_imp":null,
    "qtt_plasma":null,
    "qtt_hyper_prop":null,
    "qtt_energy":null,
    "qtt_secu":null,
    "qtt_spy":null,
    "qtt_data_proc":null,
    "qtt_quant_proc":null,
    "qtt_consc":null,
    "qtt_strat":null,
    "qtt_superstruct":null,
    "qtt_exploit":null,
    "qtt_terra":null,
    "qtt_mos":null,
    "qtt_mom":null,
    "qtt_mot":null,
    "qtt_met":null,
    "qtt_tri":null,
    "qtt_pps":null,
    "qtt_res_energy":null,
    "qtt_build_met":null,
    "qtt_build_tri":null,
    "qtt_build_power":null,
    "qtt_build_conc":null,
    "qtt_mm":null,
    "qtt_mconc":null
};

function GetDom(){
    doms.qtt_struct = document.getElementById("qtt_struct");
    doms.qtt_conv_weap = document.getElementById("qtt_conv_weap");
    doms.qtt_conv_prop = document.getElementById("qtt_conv_prop");
    doms.qtt_laser = document.getElementById("qtt_laser");
    doms.qtt_em_imp = document.getElementById("qtt_em_imp");
    doms.qtt_plasma = document.getElementById("qtt_plasma");
    doms.qtt_hyper_prop = document.getElementById("qtt_hyper_prop");
    doms.qtt_energy = document.getElementById("qtt_energy");
    doms.qtt_secu = document.getElementById("qtt_secu");
    doms.qtt_spy = document.getElementById("qtt_spy");
    doms.qtt_data_proc = document.getElementById("qtt_data_proc");
    doms.qtt_quant_proc = document.getElementById("qtt_quant_proc");
    doms.qtt_consc = document.getElementById("qtt_consc");
    doms.qtt_strat = document.getElementById("qtt_strat");
    doms.qtt_superstruct = document.getElementById("qtt_superstruct");
    doms.qtt_exploit = document.getElementById("qtt_exploit");
    doms.qtt_terra = document.getElementById("qtt_terra");
    doms.qtt_mos = document.getElementById("qtt_mos");
    doms.qtt_mom = document.getElementById("qtt_mom");
    doms.qtt_mot = document.getElementById("qtt_mot");
    doms.qtt_met = document.getElementById("qtt_res_met");
    doms.qtt_tri = document.getElementById("qtt_res_tri");
    doms.qtt_pps = document.getElementById("qtt_res_pps");
    doms.qtt_res_energy = document.getElementById("qtt_res_energy");
    doms.qtt_build_met = document.getElementById("qtt_build_met");
    doms.qtt_build_tri = document.getElementById("qtt_build_tri");
    doms.qtt_build_power = document.getElementById("qtt_build_power");
    doms.qtt_build_conc = document.getElementById("qtt_build_conc");
    doms.qtt_mm = document.getElementById("qtt_mm");
    doms.qtt_mconc = document.getElementById("qtt_mconc");
}

function UI_SetUIValues(tech_data, building_data, ships_data, res) {
    doms.qtt_struct.innerHTML = tech_data.structure;
    doms.qtt_conv_weap.innerHTML = tech_data.conv_weap;
    doms.qtt_conv_prop.innerHTML = tech_data.conv_prop;
    doms.qtt_laser.innerHTML = tech_data.laser;
    doms.qtt_em_imp.innerHTML = tech_data.em_imp;

    doms.qtt_plasma.innerHTML = tech_data.plasma;
    doms.qtt_hyper_prop.innerHTML = tech_data.hyper_prop;
    doms.qtt_spy.innerHTML = tech_data.spy;
    doms.qtt_data_proc.innerHTML = tech_data.data_proc;
    doms.qtt_quant_proc.innerHTML = tech_data.quant_com;
    doms.qtt_secu.innerHTML = tech_data.secu;
    doms.qtt_energy.innerHTML = tech_data.energy;

    doms.qtt_consc.innerHTML = tech_data.cons;
    doms.qtt_strat.innerHTML = tech_data.strat;
    doms.qtt_superstruct.innerHTML = tech_data.superstruct;
    doms.qtt_exploit.innerHTML = tech_data.exploit;
    doms.qtt_terra.innerHTML = tech_data.terra;

    doms.qtt_mos.innerHTML = tech_data.mos;
    doms.qtt_mom.innerHTML = tech_data.mom;
    doms.qtt_mot.innerHTML = tech_data.mot;
    doms.qtt_build_met.innerHTML = building_data.metal;
    doms.qtt_build_tri.innerHTML = building_data.tritium;

    doms.qtt_build_power.innerHTML = building_data.power;
    doms.qtt_build_conc.innerHTML = building_data.conc;
    doms.qtt_mm.innerHTML = ships_data.mm;
    doms.qtt_mconc.innerHTML = ships_data.mconc;
    doms.qtt_met.innerHTML = res.met;

    doms.qtt_tri.innerHTML = res.tri;
    doms.qtt_pps.innerHTML = res.pps;
    doms.qtt_res_energy.innerHTML = res.energy;
}