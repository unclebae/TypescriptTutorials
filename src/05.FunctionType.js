// 자바스크립트로 sum 함수 작성방식. 
function sumNormal(num1, num2) {
    return num1 + num2;
}
console.log("sumNormal number: ", sumNormal(10, 20));
console.log("sumNormal string: ", sumNormal("10", "20"));
// 숫자에 대해서 실제 숫자값의 연산이 되도록 하고 싶다면 + 표현을 사용하여 숫자로 바꿔줄 수 있다. 
function sumNormalV2(num1, num2) {
    return +num1 + +num2;
}
console.log("sumNormalV2 number: ", sumNormalV2(10, 20));
console.log("sumNormalV2 string: ", sumNormalV2("10", "20"));
// 타입 스크립트의 sum 함수 구현. 
function sum(num1, num2) {
    return num1 + num2;
}
console.log("sum: ", sum(10, 20));
// console.log("sum with string: ", sum("10", "20")); // 컴파일 오류 
var sumValue = sum(10, 20);
// 파라미터를 직접 지정한 방법의 sum 함수 
function sumWithReturn(num1, num2) {
    return "" + (num1 + num2);
}
console.log("sumWithReturn: ", sumWithReturn(10, 20));
var sumWithReturnString = sumWithReturn(10, 20);
console.log("sumWithReturn: ", sumWithReturnString);
// 반환값이 없을때는 void 와 동일 
function printResult1(num) {
    console.log("Result: " + num);
}
// 반환값이 없다면 undefined 와 동일 
function printResult2(num) {
    console.log("Result: " + num);
    return;
}
printResult2(10);
// 함수 타입을 지정하고 함수를 대입한다. 
var combineValues2;
combineValues2 = sumWithReturn;
console.log(combineValues2(5, 10));
// 함수의 형식으 ㄹ지정하고 함수 형식대로 설정된 함수만 받아들이도록 한다. 
var combineValues3;
combineValues3 = sum;
// 콜백 메소드를 던진다. 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// 콜백 메소를 이옹하여 메소드 호출하기. 
addAndHandle(10, 20, function (result) {
    console.log(result);
});
