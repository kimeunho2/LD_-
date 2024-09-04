const sellingPriceEl = document.querySelector(".selling-price");
const conversionsEl = document.querySelector(".conversions");
const salesEl = document.querySelector(".sales");

const adspendEl = document.querySelector(".ad-spend");
const roasEl = document.querySelector(".roas");

const constPriceEl = document.querySelector(".cost-price");
const roiEl = document.querySelector(".roi");

const netProfit = document.querySelector(".net-profit");


//계산하기 버튼 가져오기
const calculateButton = document.getElementById("calculate-btn")

const getSales = (a, b) => {
    return a*b;
} 

const getRoas = (a, b) => {
    return a/b*100;
}

const getRoi = (a, b, c) => {
    return a*b/c*100;
}

const getNetprofit = (a, b) => {
    return a-b;
}

calculateButton.addEventListener("click", () => {
    const salesResult = getSales(sellingPriceEl.value, conversionsEl.value);
    
    const roasResult = getRoas(salesResult, adspendEl.value);

    const roiResult = getRoi(constPriceEl.value, conversionsEl.value, adspendEl.value );

    const netProfitresult = getNetprofit(salesResult, adspendEl.value);
    
    
    
    
    
    salesEl.innerText = salesResult + " 원";   
    roasEl.innerText = (roasResult ?roasResult:0) + "%";
    roiEl.innerText = (roiResult ?roiResult:0)+ "%";
    netProfit.innerText = netProfitresult + " 원";
});

