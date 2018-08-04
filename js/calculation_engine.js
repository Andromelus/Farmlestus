function CALCUL_IntervalIncome() {

}

function CALCUL_ClickIncome() {
    console.log("calcul click income");
    var met = 1 + (tech_data.t_exploit * 10 / 100) * 1;
    res.r_met = res.r_met + met;
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

function CALCUL_IncreaseLevelTech(qtt_level, el_to_up) {
    var estimated_price = CALCUL_EstimatePriceTech(el_to_up, qtt_level);
    if (res.r_met >= estimated_price.met && res.r_tri >= estimated_price.tri && res.r_pps >= estimated_price.pp){
        res.r_met -= estimated_price.met;
        res.r_tri -= estimated_price.tri;
        res.r_pps -= estimated_price.pp;
        tech_data[el_to_up] += parseInt(qtt_level);
        UI_SetUIValues(tech_data, building_data, ships_data, res);
    } else {
        var mim = res.r_met - estimated_price.met;
        var mt = res.r_tri - estimated_price.tri;
        var mp = res.r_pps - estimated_price.pp;
        UI_DisplayResourcesMissing(mim, mt, mp);
    }
}

function CALCUL_IncreaseLevelBuildings(qtt_level, el_to_up) {
    building_data[el_to_up] += parseInt(qtt_level);
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}
function CALCUL_IncreaseLevelShips(qtt_level, el_to_up) {
    ships_data[el_to_up] += parseInt(qtt_level);
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}

/*function CALCUL_EstimatePriceTech(el_to_est, level_to_add) {
    var current_level = tech_data[el_to_est];
    console.log((current_level == 0) ? 1 : Math.pow(1.7, current_level));
    var current_price = {
        "met": basePriceMet[el_to_est] * ((current_level == 0) ? 1 : Math.pow(1.7, current_level)),
        "tri": basePriceTri[el_to_est] * ((current_level == 0) ? 1 : Math.pow(1.7, current_level)),
        "pp": basePricePp[el_to_est] * ((current_level == 0) ? 1 : Math.pow(1.7, current_level))
    };
    var estimated_price ={
        "met": current_price.met * ((level_to_add == 1) ? 1 : Math.pow(1.7, level_to_add)),
        "tri": current_price.tri * ((level_to_add == 1) ? 1 : Math.pow(1.7, level_to_add)),
        "pp": current_price.pp * ((level_to_add == 1) ? 1 : Math.pow(1.7, level_to_add))
    };
    console.log(estimated_price.met);
}
*/
function CALCUL_EstimatePriceTech(el_to_est, level_to_add) {
    var current_level = tech_data[el_to_est];

    var next_level_price = {
        "met": basePriceMet[el_to_est],
        "tri": basePriceTri[el_to_est],
        "pp": basePricePp[el_to_est]
    };

    for (let i = 0; i <= current_level - 1; i++) {
        next_level_price.met *= 1.7;
        next_level_price.tri *= 1.7;
        next_level_price.pp *= 1.7
    }


    var global_estimated_price = {
        "met": next_level_price.met,
        "tri": next_level_price.tri,
        "pp": next_level_price.pp
    };

    for (let i = current_level; i < current_level + level_to_add - 1; i++) {
        global_estimated_price.met *= 1.7;
        global_estimated_price.tri *= 1.7;
        global_estimated_price.pp *= 1.7;
    }
    return global_estimated_price;

}