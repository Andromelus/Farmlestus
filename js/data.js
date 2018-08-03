var tech_data = {
    "structure":null,
    "conv_weap":null,
    "conv_prop":null,
    "laser":null,
    "em_imp":null,
    "plasma":null,
    "hyper_prop":null,
    "energy":null,
    "secu":null,
    "spy":null,
    "data_proc":null,
    "quant_com":null,
    "cons":null,
    "strat":null,
    "superstruct":null,
    "exploit":null,
    "terra":null,
    "mos":null,
    "mom":null,
    "mot":null
};
var building_data = {
    "metal":null,
    "tritium":null,
    "power":null,
    "conc":null,
};

var ships_data = {
    "mm":null,
    "mconc":null,
};

var res = {
    "met":null,
    "tri":null,
    "pps":null,
    "energy":null
}

var initialStart = false;

function DATA_OnStart(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.farmlestus === true){
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