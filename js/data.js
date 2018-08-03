var tech_data = {
    "structure": null,
    "conv_weap": null,
    "conv_prop": null,
    "laser": null,
    "em_imp": null,
    "plasma": null,
    "hyper_prop": null,
    "energy": null,
    "secu": null,
    "spy": null,
    "data_proc": null,
    "quant_com": null,
    "cons": null,
    "strat": null,
    "superstruct": null,
    "exploit": null,
    "terra": null,
    "mos": null,
    "mom": null,
    "mot": null
};

var building_data = {
    "metal": null,
    "tritium": null,
    "power": null,
    "conc": null,
};

var ships_data = {
    "mm": null,
    "mconc": null,
};

var res = {
    "met": null,
    "tri": null,
    "pps": null,
    "energy": null
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
            tech_data.structure = localStorage.structure;
            tech_data.conv_weap = localStorage.conv_weap;
            tech_data.conv_prop = localStorage.conv_prop;
            tech_data.laser = localStorage.laser;
            tech_data.em_imp = localStorage.em_imp;
            tech_data.plasma = localStorage.plasma;
            tech_data.hyper_prop = localStorage.hyper_prop;
            tech_data.energy = localStorage.energy;
            tech_data.secu = localStorage.secu;
            tech_data.spy = localStorage.spy;
            tech_data.data_proc = localStorage.data_proc;
            tech_data.quant_com = localStorage.quant_com;
            tech_data.cons = localStorage.cons;
            tech_data.strat = localStorage.strat;
            tech_data.superstruct = localStorage.superstruct;
            tech_data.exploit = localStorage.exploit;
            tech_data.terra = localStorage.terra;
            tech_data.mos = localStorage.mos;
            tech_data.mom = localStorage.mom;
            tech_data.mot = localStorage.mot;
            building_data.metal = localStorage.metal;
            building_data.tritium = localStorage.tritium;
            building_data.power = localStorage.power;
            building_data.conc = localStorage.conc;
            ships_data.mm = localStorage.mm;
            ships_data.mconc = localStorage.mconc;
            res.met = localStorage.met;
            res.tri = localStorage.tri;
            res.pps = localStorage.pps;
            res.energy = localStorage.energy;
        } else {
            tech_data.structure = 0;
            tech_data.conv_weap = 0;
            tech_data.conv_prop = 0;
            tech_data.laser = 0;
            tech_data.em_imp = 0;
            tech_data.plasma = 0;
            tech_data.hyper_prop = 0;
            tech_data.energy = 0;
            tech_data.secu = 0;
            tech_data.spy = 0;
            tech_data.data_proc = 0;
            tech_data.quant_com = 0;
            tech_data.cons = 0;
            tech_data.strat = 0;
            tech_data.superstruct = 0;
            tech_data.exploit = 0;
            tech_data.terra = 0;
            tech_data.mos = 0;
            tech_data.mom = 0;
            tech_data.mot = 0;
            building_data.metal = 0;
            building_data.tritium = 0;
            building_data.power = 0;
            building_data.conc = 0;
            ships_data.mm = 0
            ships_data.mconc = 0;
            res.met = 0;
            res.tri = 0;
            res.pps = 0;
            res.energy = 0;
            console.log("nothing in storage found, set data to basic")
        }
        initialStart = true;
    } else {
        console.log("ERROR: NO LOCAL STORAGE SUPPORTED")
    }
}


function DATA_IncreaseLevelTech(qtt_level, el_to_up) {
    tech_data[el_to_up] += parseInt(qtt_level);
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

function DATA_IncreaseLevelBuildings(qtt_level, el_to_up) {
    building_data[el_to_up] += parseInt(qtt_level);
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}
function DATA_IncreaseLevelShips(qtt_level, el_to_up) {
    ships_data[el_to_up] += parseInt(qtt_level);
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

function DATA_EstimatePriceTech(el_to_est, level_to_add) {
    var current_level = tech_data[el_to_est];

    var t_price_m = basePriceMet[el_to_est];
    var t_price_t = basePricetri[el_to_est];
    var t_price_p = basePricePp[el_to_est];
    for (let i = 0; i <= current_level; i++) {
        t_price_m = t_price_m * 1.7;
        t_price_t = t_price_t * 1.7;
        t_price_p = t_price_p * 1.7;
    }

    var origin_met_price = t_price_m;
    var origin_tri_price = t_price_t;
    var origin_pp_price = t_price_p;

    for (let i = 0; i <= level_to_add - current_level; i++) {
        t_price_m = t_price_m * 1.7;
        t_price_t = t_price_t * 1.7;
        t_price_p = t_price_p * 1.7;
    }

    var final_met_price = t_price_m;
    var final_tri_price = t_price_t;
    var final_pp_price = t_price_p;

    if (res.met <= (final_met_price - origin_met_price) && res.tri <= (final_tri_price - origin_tri_price) && res.pp <= (final_pp_price - origin_pp_price)){
        console.log("ok")
    } else {
        console.log("pas ok");
    }
}