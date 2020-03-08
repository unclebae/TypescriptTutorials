// any와 같이 모든 값을 받을 수 있습니다. 
var value;
value = true;
value = 100;
value = "Hello World";
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
value = new TypeError();
// 아래와 같이 unknown 타입을 받으려면, unknown 이나 any 타입으로 지정된 변수만이 unknown 타입의 값을 받을 수 있습니다. 
var superValue01 = value;
var superValue02 = value;
// unknown 은 다음과 같이 타입 비교를 통해서 해당 값을 확인할 수 있습니다. 
var sampleValue = "Hello KIDO";
if (typeof sampleValue === "string") {
    console.log("Unknown Value is string: ", sampleValue);
}
var stringValue = sampleValue;
console.log("Convert unknown value to string: ", stringValue);
