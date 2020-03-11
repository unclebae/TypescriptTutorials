class Employee {
    public id: number;
    public employeeName: string;
    public phoneNumber: string;
    public age: number;

    constructor(id: number, employeeName: string, phoneNumber: string, age: number) {
        this.id = id;
        this.employeeName = employeeName;
        this.phoneNumber = phoneNumber;
        this.age = age
    }

    toString() {
        return (`
            ID: ${this.id},
            EmployeeName: ${this.employeeName},
            PhoneNumber: ${this.phoneNumber},
            Age: ${this.age}
        `);
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
}

let emp_kido = new Employee(1, "Kido", "010-1111-2222", 44);
console.log("ToString: ", emp_kido.toString());

emp_kido.setPhoneNumber("010-2222-3333");
console.log("PhoneNum: ", emp_kido.getPhoneNumber());

console.log("Age Directly: ", emp_kido.age);

class Member {
    public name: string;
    protected age: number;
    protected phoneNumber: string;
    private socialNnumber: string;

    constructor(name: string, age: number, phoneNumber: string, socialNumber: string) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    protected getSocialNumber() {
        return this.socialNnumber;
    }

    protected setSocialNumber(socialNnumber : string) {
        this.socialNnumber = this.socialNnumber;
    }
}

class Student extends Member {

    protected className: string;

    constructor(name: string, age: number, phoneNumber: string, socialNumber: string, className: string) {
        super(name, age, phoneNumber, socialNumber);
        this.className = className;
    }

    toString() {
        // console.log("SocialNumber: ", socialNnumber); // 오류가 납니다. 직접 접근할 수 없습니다. 
        // console.log("socialNumber : ", this.socialNnumber); // 오류가 납니다. 

        // 소셜 이름은 바로 접근할 수 없습니다. private 로 지정되었습니다.
        return (`
            Name: ${this.name},
            Age: ${this.age},
            PhoneNumber: ${this.phoneNumber},
            SocialNumber: ${this.getSocialNumber()}, 
            ClassName: ${this.className}
        `);
    }
}

let student_kido = new Student("kido", 19, "010-2222-3333", "abc111222", "Computer Science");
console.log(student_kido.toString());
// console.log(student_kido.phoneNumber); // error 바로 접근이 안됩니다. 
console.log(student_kido.name); // 바로 접근이 가능합니다. public 입니다. 
// console.log(student_kido.className); // error 바로 접근이 불가능합니다. protected 는 자신 혹은 자식 클래스에만 접근이 가능합니다. 

