var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, employeeName, phoneNumber, age) {
        this.id = id;
        this.employeeName = employeeName;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }
    Employee.prototype.toString = function () {
        return ("\n            ID: " + this.id + ",\n            EmployeeName: " + this.employeeName + ",\n            PhoneNumber: " + this.phoneNumber + ",\n            Age: " + this.age + "\n        ");
    };
    Employee.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    return Employee;
}());
var emp_kido = new Employee(1, "Kido", "010-1111-2222", 44);
console.log("ToString: ", emp_kido.toString());
emp_kido.setPhoneNumber("010-2222-3333");
console.log("PhoneNum: ", emp_kido.getPhoneNumber());
console.log("Age Directly: ", emp_kido.age);
var Member = /** @class */ (function () {
    function Member(name, age, phoneNumber, socialNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    Member.prototype.getSocialNumber = function () {
        return this.socialNnumber;
    };
    Member.prototype.setSocialNumber = function (socialNnumber) {
        this.socialNnumber = this.socialNnumber;
    };
    return Member;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, phoneNumber, socialNumber, className) {
        var _this = _super.call(this, name, age, phoneNumber, socialNumber) || this;
        _this.className = className;
        return _this;
    }
    Student.prototype.toString = function () {
        // console.log("SocialNumber: ", socialNnumber); // 오류가 납니다. 직접 접근할 수 없습니다. 
        // console.log("socialNumber : ", this.socialNnumber); // 오류가 납니다. 
        // 소셜 이름은 바로 접근할 수 없습니다. private 로 지정되었습니다.
        return ("\n            Name: " + this.name + ",\n            Age: " + this.age + ",\n            PhoneNumber: " + this.phoneNumber + ",\n            SocialNumber: " + this.getSocialNumber() + ", \n            ClassName: " + this.className + "\n        ");
    };
    return Student;
}(Member));
var student_kido = new Student("kido", 19, "010-2222-3333", "abc111222", "Computer Science");
console.log(student_kido.toString());
// console.log(student_kido.phoneNumber); // error 바로 접근이 안됩니다. 
console.log(student_kido.name); // 바로 접근이 가능합니다. public 입니다. 
// console.log(student_kido.className); // error 바로 접근이 불가능합니다. protected 는 자신 혹은 자식 클래스에만 접근이 가능합니다. 
