// 일반적인 자바 스크립트로 배열 
let gasData = ['G01', 120, true];
console.log("GasData Normal: ", gasData[0], gasData[1], gasData[2]);

// 이렇게 되어도 잘못된 정보인지 확인이 어렵습니다. 
gasData = ["G02", 30, true, 110]; 

// Tuple
let gasTuple: [string, number, boolean];
gasTuple = ["G03", 100, false];

console.log("GasTuple: ", gasTuple[0], gasTuple[1], gasTuple[2]);

// gasTuple = ["G04", 140, true, 110]; // 오류가 납니다. 지정된 형태의 튜플이 아니기 때문입니다. 

// Tuple Array
let oilPriceTuples: [string, number][];
oilPriceTuples = [["Gasolin", 1550], ["Disel", 1320]];

console.log("OilPrices: ", oilPriceTuples[0], oilPriceTuples[1]);