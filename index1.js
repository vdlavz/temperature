const CelciusE1=document.getElementById("Celcius");
const FarenheitE1=document.getElementById("Farenheit");
const KelvinE1=document.getElementById("celsius");
function computeTemp(){
    const currentValue= +event.target.value;
    switch (event.target.name) {
        case "Celcius":
            KelvinE1.value=currentValue+273.15;
            FarenheitE1.value=currentValue*1.8+32;
            break;

    
        default:
            break;
    }
}