function UI_ShowAndHide(nameElToShow, nameElToHide) {
    elToShow = document.getElementById(nameElToShow);
    elToHide = document.getElementById(nameElToHide);
    elToShow.style.display = "block";
    elToHide.style.display = "none";
}

function UI_OnStart(tech_data, building_data, ships_data, res){
    document.getElementById("ships_list").style.display = "none";
    document.getElementById("info").style.display = "none";
    GetDom();
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

var doms = {
    "t_struct": null,
    "t_conv_weap":null,
    "t_conv_prop":null,
    "t_laser":null,
    "t_em_imp":null,
    "t_plasma":null,
    "t_hyper_prop":null,
    "t_energy":null,
    "t_secu":null,
    "t_spy":null,
    "t_data_proc":null,
    "t_quant_proc":null,
    "t_consc":null,
    "t_strat":null,
    "t_superstruct":null,
    "t_exploit":null,
    "t_terra":null,
    "t_mos":null,
    "t_mom":null,
    "t_mot":null,
    "r_met":null,
    "r_tri":null,
    "r_pps":null,
    "r_energy":null,
    "b_met":null,
    "b_tri":null,
    "b_power":null,
    "b_conc":null,
    "s_mm":null,
    "s_mconc":null,
    "info_title":null,
    "info":null,
    "i_met":null,
    "i_tri":null,
    "i_pp":null
};

function GetDom(){
    doms.t_struct = document.getElementById("t_struct");
    doms.t_conv_weap = document.getElementById("t_conv_weap");
    doms.t_conv_prop = document.getElementById("t_conv_prop");
    doms.t_laser = document.getElementById("t_laser");
    doms.t_em_imp = document.getElementById("t_em_imp");
    doms.t_plasma = document.getElementById("t_plasma");
    doms.t_hyper_prop = document.getElementById("t_hyper_prop");
    doms.t_energy = document.getElementById("t_energy");
    doms.t_secu = document.getElementById("t_secu");
    doms.t_spy = document.getElementById("t_spy");
    doms.t_data_proc = document.getElementById("t_data_proc");
    doms.t_quant_proc = document.getElementById("t_quant_proc");
    doms.t_consc = document.getElementById("t_consc");
    doms.t_strat = document.getElementById("t_strat");
    doms.t_superstruct = document.getElementById("t_superstruct");
    doms.t_exploit = document.getElementById("t_exploit");
    doms.t_terra = document.getElementById("t_terra");
    doms.t_mos = document.getElementById("t_mos");
    doms.t_mom = document.getElementById("t_mom");
    doms.t_mot = document.getElementById("t_mot");
    doms.r_met = document.getElementById("r_met");
    doms.r_tri = document.getElementById("r_tri");
    doms.r_pps = document.getElementById("r_pps");
    doms.r_energy = document.getElementById("r_energy");
    doms.b_met = document.getElementById("b_met");
    doms.b_tri = document.getElementById("b_tri");
    doms.b_power = document.getElementById("b_power");
    doms.b_conc = document.getElementById("b_conc");
    doms.s_mm = document.getElementById("s_mm");
    doms.s_mconc = document.getElementById("s_mconc");
    doms.info_title= document.getElementById("info_title");
    doms.info = document.getElementById("info");
    doms.i_met = document.getElementById("i_met");
    doms.i_tri = document.getElementById("i_tri");
    doms.i_pp = document.getElementById("i_pp");

}

function UI_SetUIValues(tech_data, building_data, ships_data, res) {
    doms.t_struct.innerHTML = tech_data.t_struct;
    doms.t_conv_weap.innerHTML = tech_data.t_conv_weap;
    doms.t_conv_prop.innerHTML = tech_data.t_conv_prop;
    doms.t_laser.innerHTML = tech_data.t_laser;
    doms.t_em_imp.innerHTML = tech_data.t_em_imp;

    doms.t_plasma.innerHTML = tech_data.t_plasma;
    doms.t_hyper_prop.innerHTML = tech_data.t_hyper_prop;
    doms.t_spy.innerHTML = tech_data.t_spy;
    doms.t_data_proc.innerHTML = tech_data.t_data_proc;
    doms.t_quant_proc.innerHTML = tech_data.t_quant_com;
    doms.t_secu.innerHTML = tech_data.t_secu;
    doms.t_energy.innerHTML = tech_data.t_energy;

    doms.t_consc.innerHTML = tech_data.t_cons;
    doms.t_strat.innerHTML = tech_data.t_strat;
    doms.t_superstruct.innerHTML = tech_data.t_superstruct;
    doms.t_exploit.innerHTML = tech_data.t_exploit;
    doms.t_terra.innerHTML = tech_data.t_terra;

    doms.t_mos.innerHTML = tech_data.t_mos;
    doms.t_mom.innerHTML = tech_data.t_mom;
    doms.t_mot.innerHTML = tech_data.t_mot;
    doms.b_met.innerHTML = building_data.b_metal;
    doms.b_tri.innerHTML = building_data.b_tritium;

    doms.b_power.innerHTML = building_data.b_power;
    doms.b_conc.innerHTML = building_data.b_conc;
    doms.s_mm.innerHTML = ships_data.s_mm;
    doms.s_mconc.innerHTML = ships_data.s_mconc;
    doms.r_met.innerHTML = res.r_met;

    doms.r_tri.innerHTML = res.r_tri;
    doms.r_pps.innerHTML = res.r_pps;
    doms.r_energy.innerHTML = res.r_energy;
}

function UI_DisplayInfoTech(el_info, multiplicator){
    var info = CALCUL_EstimatePriceTech(el_info, multiplicator);
    doms.i_met.innerHTML = info.met;
    doms.i_tri.innerHTML = info.tri;
    doms.i_pp.innerHTML = info.pp;
    doms.info_title.innerHTML = "Required resources";
    document.getElementById("info").style.display = "block";
}

function UI_CloseInfo(){
    document.getElementById("info").style.display = "none";
}

function UI_DisplayResourcesMissing(met, tri, pp){
    doms.i_met.innerHTML = met;
    doms.i_tri.innerHTML = tri;
    doms.i_pp.innerHTML = pp;
    doms.info_title.innerHTML = "Missing resources";
    document.getElementById("info").style.display = "block";
}