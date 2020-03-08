// any와 같이 모든 값을 받을 수 있습니다. 
let value: unknown;
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
let superValue01: unknown = value;
let superValue02: any = value;

// unknown 은 다음과 같이 타입 비교를 통해서 해당 값을 확인할 수 있습니다. 
let sampleValue: unknown = "Hello KIDO";

if (typeof sampleValue === "string") {
    console.log("Unknown Value is string: ", sampleValue);
}

let stringValue: string = sampleValue as string;

console.log("Convert unknown value to string: ", stringValue);