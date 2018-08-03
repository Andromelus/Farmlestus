function CALCUL_IntervalIncome(tech_data, building_data, ships_data, res){

}

function CALCUL_ClickIncome(tech_data, building_data, ships_data, res){
    var met = 1 + (tech_data.exploit * 10/100) * 1;
    res.met = res.met + met;  
    UI_SetUIValues(tech_data, building_data, ships_data, res);
}