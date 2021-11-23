let isYearlyMode = false;

let toogleBtn = document.getElementById("toggle-container");

let yearlyPrices = document.getElementsByClassName("yearly-price");
let monthlyPrices = document.getElementsByClassName("monthly-price");

toogleBtn.addEventListener("click", function()
{
    console.log(yearlyPrices);
    if(isYearlyMode)
    { 
        isYearlyMode = false;
        toogleBtn.firstElementChild.style.left ="auto";
        toogleBtn.firstElementChild.style.right ="0.3em";

        Array.from(yearlyPrices).forEach(element => {element.style.display = "none";});
        Array.from(monthlyPrices).forEach(element => {element.style.display = "inline";});
    }
    else
    {   
        isYearlyMode = true;
        toogleBtn.firstElementChild.style.right ="auto";
        toogleBtn.firstElementChild.style.left ="0.3em";

        Array.from(yearlyPrices).forEach(element => {element.style.display = "inline";});
        Array.from(monthlyPrices).forEach(element => {element.style.display = "none";});
    }
});