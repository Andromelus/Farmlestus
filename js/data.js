var tech_data = {
    "t_struct": null,
    "t_conv_weap": null,
    "t_conv_prop": null,
    "t_laser": null,
    "t_em_imp": null,
    "t_plasma": null,
    "t_hyper_prop": null,
    "t_energy": null,
    "t_secu": null,
    "t_spy": null,
    "t_data_proc": null,
    "t_quant_com": null,
    "t_cons": null,
    "t_strat": null,
    "t_superstruct": null,
    "t_exploit": null,
    "t_terra": null,
    "t_mos": null,
    "t_mom": null,
    "t_mot": null
};

var building_data = {
    "b_metal": null,
    "b_tritium": null,
    "b_power": null,
    "b_conc": null,
};

var ships_data = {
    "s_mm": null,
    "s_mconc": null,
};

var res = {
    "r_met": null,
    "r_tri": null,
    "r_pps": null,
    "r_energy": null
}

var basePriceMet = {
    "t_struct": 792,
    "t_conv_weap": 792,
    "t_conv_prop": 396,
    "t_laser": 198,
    "t_em_imp": 396,

    "t_plasma": 2970,
    "t_hyper_prop": 2970,
    "t_energy": 396,
    "t_secu": 396,
    "t_spy": 396,

    "t_data_proc": 1584,
    "t_quant_com": 2376,
    "t_cons": 594,
    "t_strat": 990,
    "t_superstruct": 990000,

    "t_exploit": 1980,
    "t_terra": 3960000,
    "t_mos": 15840000,
    "t_mom": 11880000,
    "t_mot": 19800000,

    "b_metal": 313,
    "b_tritium": 501,
    "b_power": 313,
    "b_conc": 313385,

    "s_mm": 400000,
    "s_mconc": 400000
}

var basePriceTri = {
    "t_struct": 0,
    "t_conv_weap": 0,
    "t_conv_prop": 396,
    "t_laser": 198,
    "t_em_imp": 396,

    "t_plasma": 3960,
    "t_hyper_prop": 1386,
    "t_energy": 198,
    "t_secu": 396,
    "t_spy": 396,

    "t_data_proc": 3960,
    "t_quant_com": 1584,
    "t_cons": 0,
    "t_strat": 990,
    "t_superstruct": 198000,

    "t_exploit": 792,
    "t_terra": 990000,
    "t_mos": 3960000,
    "t_mom": 7920000,
    "t_mot": 9900000,

    "b_metal": 250,
    "b_tritium": 250,
    "b_power": 313,
    "b_conc": 62677,

    "s_mm": 100000,
    "s_mconc": 100000
}

var basePricePp = {
    "t_struct": 0,
    "t_conv_weap": 0,
    "t_conv_prop": 0,
    "t_laser": 0,
    "t_em_imp": 0,

    "t_plasma": 0,
    "t_hyper_prop": 0,
    "t_energy": 0,
    "t_secu": 0,
    "t_spy": 0,

    "t_data_proc": 0,
    "t_quant_com": 0,
    "t_cons": 0,
    "t_strat": 0,
    "t_superstruct": 0,

    "t_exploit": 0,
    "t_terra": 0,
    "t_mos": 20,
    "t_mom": 20,
    "t_mot": 20,

    "b_metal": 0,
    "b_tritium": 0,
    "b_power": 0,
    "b_conc": 0,

    "s_mm": 0,
    "s_mconc": 0
}


var initialStart = false;
var hasLocalStorage = false;

function DATA_OnStart() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.farmlestus === true) {
            hasLocalStorage = true;
            tech_data.t_struct = localStorage.t_struct;
            tech_data.t_conv_weap = localStorage.t_conv_weap;
            tech_data.t_conv_prop = localStorage.t_conv_prop;
            tech_data.t_laser = localStorage.t_laser;
            tech_data.t_em_imp = localStorage.t_em_imp;
            tech_data.t_plasma = localStorage.t_plasma;
            tech_data.t_hyper_prop = localStorage.t_hyper_prop;
            tech_data.t_energy = localStorage.t_energy;
            tech_data.t_secu = localStorage.t_secu;
            tech_data.t_spy = localStorage.t_spy;
            tech_data.t_data_proc = localStorage.t_data_proc;
            tech_data.t_quant_com = localStorage.t_quant_com;
            tech_data.t_cons = localStorage.t_cons;
            tech_data.t_strat = localStorage.t_strat;
            tech_data.t_superstruct = localStorage.t_superstruct;
            tech_data.t_exploit = localStorage.t_exploit;
            tech_data.t_terra = localStorage.t_terra;
            tech_data.t_mos = localStorage.t_mos;
            tech_data.t_mom = localStorage.t_mom;
            tech_data.t_mot = localStorage.t_mot;
            building_data.b_metal = localStorage.b_metal;
            building_data.b_tritium = localStorage.b_tritium;
            building_data.b_power = localStorage.b_power;
            building_data.b_conc = localStorage.b_conc;
            ships_data.s_mm = localStorage.s_mm;
            ships_data.s_mconc = localStorage.s_mconc;
            res.r_met = localStorage.r_met;
            res.r_tri = localStorage.r_tri;
            res.r_pps = localStorage.r_pps;
            res.r_energy = localStorage.r_energy;
        } else {
            tech_data.t_struct = 0;
            tech_data.t_conv_weap = 0;
            tech_data.t_conv_prop = 0;
            tech_data.t_laser = 0;
            tech_data.t_em_imp = 0;
            tech_data.t_plasma = 0;
            tech_data.t_hyper_prop = 0;
            tech_data.t_energy = 0;
            tech_data.t_secu = 0;
            tech_data.t_spy = 0;
            tech_data.t_data_proc = 0;
            tech_data.t_quant_com = 0;
            tech_data.t_cons = 0;
            tech_data.t_strat = 0;
            tech_data.t_superstruct = 0;
            tech_data.t_exploit = 0;
            tech_data.t_terra = 0;
            tech_data.t_mos = 0;
            tech_data.t_mom = 0;
            tech_data.t_mot = 0;
            building_data.b_metal = 0;
            building_data.b_tritium = 0;
            building_data.b_power = 0;
            building_data.b_conc = 0;
            ships_data.s_mm = 0
            ships_data.s_mconc = 0;
            res.r_met = 0;
            res.r_tri = 0;
            res.r_pps = 0;
            res.r_energy = 0;
            console.log("nothing in storage found, set data to basic")
        }
        initialStart = true;
    } else {
        console.log("ERROR: NO LOCAL STORAGE SUPPORTED")
    }
}




