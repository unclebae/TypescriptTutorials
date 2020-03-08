class StudentType {
    name: string
    schoolName: string
    grade: number
};

let students: Array<StudentType>;

students = [
    {name: 'KIDO', schoolName: 'mysunny', grade: 1},
    {name: 'Pengsu', schoolName: 'mysunny', grade: 2},
    {name: 'Pororo', schoolName: 'mysunny', grade: 4}
]

console.log("Object Type Student Array: ", students);