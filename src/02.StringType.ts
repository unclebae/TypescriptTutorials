// 역시나 타입을 지정하지 않은경우 다양한 타입이 할당될 수 있습니다. 
let userName;

userName = 'KIDO';
userName = true;

// string 타입으로 지정하고 single quote 를 이용하여 작업했습니다. 
let schoolName: string;
schoolName = 'MYSUNNY';
// schoolName = true; // 컴파일시 오류가 납니다. 

console.log("userName: ", userName);
console.log("schoolName: ", schoolName);

// string 타입을 지정하면서 바로 값을 할당하였고, double quote 를 사용했습니다. 
let greet: string = "Nice day";

// backtick 을 이용하여 구문 자체를 입력할수도 있습니다. 
let greeting: string;
greeting = `
    Hello I am ${userName}.
    I'm going to ${schoolName}.
    Have a ${greet}.
`;

console.log("Greeting: ", greeting);