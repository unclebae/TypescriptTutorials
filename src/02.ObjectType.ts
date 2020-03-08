// 학생 정보를 일반적인 자바 스크립트로 지정해 보았습니다. 
let student = {
    name: "KIDO",
    schoolName: "MYSUNNY",
    age: "50"
};

console.log("Student Info: ", student);

// 직원 정보를 타입으로 지정해 보았습니다. 
let employee: {
    name: string,
    job: string,
    salery: number
} = {
    name: "KIDO",
    job: "Developer",
    salery: 9999999999
};

// employee = {name: 'Han Solo', job: "Jedi" }; // 오류가 납니다 지정한 객체에 값이 할당되지 않는다면 오류가 납니다. 
console.log("Employee: ", employee);

// 옵셔널 값을 지정하기 위해서 ? 를 이용할 수 있습니다. 
// ?: 는 엘비스 노테이션이라고 부르며, 타입을 지정하며, 이 변수에는 값을 넣을수도 있고, 아닐 수도 있다는 의미로 사용합니다. 
let superstar: {
    name: string,
    ability: string,
    power?: number
} = {
    name: "Superman",
    ability: "Speed, Laser"
};

console.log("Superstar: ", superstar);


