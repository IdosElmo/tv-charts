function atrParams() {
    let cb = document.getElementById("atr_source");
    let ac = document.getElementById("extras")

    //Create array of options to be added
    var src = ["RMA","SMA","EMA","WMA"];
    
    if (cb.checked == true){
        var title = document.createElement('h6');
        title.id = 'atr-params';
        title.innerHTML = "ATR Params:"

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.id = "atr-source-select";
        selectList.name = 'atr-source-select';

        //Create input for ATR period
        var atr_period = document.createElement("input")
        atr_period.required = true;
        atr_period.id = 'atr-period';
        atr_period.name = 'atr-period';
        atr_period.placeholder = "ATR Period"

        
        ac.appendChild(title)
        ac.appendChild(selectList)
        ac.appendChild(atr_period)

        //Create and append the options
        for (var i = 0; i < src.length; i++) {
            var option = document.createElement("option");
            option.value = src[i];
            option.text = src[i];
            selectList.appendChild(option);
        }
    } 
    else {
        let atr_source = document.getElementById("atr-source-select");
        let atr_period = document.getElementById("atr-period");
        let atr_params = document.getElementById("atr-params");
        ac.removeChild(atr_source);
        ac.removeChild(atr_period);
        ac.removeChild(atr_params);
    }
}