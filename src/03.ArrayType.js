// 일반적으로 자바 스크립트는 여러 타입의 배열을 가질 수 있습니다. 
// 생각으로는 편리해 보이지만 많은 문제를 일으킵니다. 
var userIds = ["ID01", "ID02", "ID03", 4, 5, 6, 7];
console.log("UserIds: ", userIds);
var employeeNames = [
    "KIDO",
    "Pengsu",
    "Pororo"
];
console.log("employeeNames: ", employeeNames);
// employeeNames = ['KIDO', 'Pengsu', 'Proro', 10100]; // 오류가 발생합니다. 10100은 다른 타입의 값입니다.
