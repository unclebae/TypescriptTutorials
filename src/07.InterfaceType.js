function printPersonInfo(person) {
    console.log("\n        ID: " + person.id + ",\n        NAME: " + person.firstName + " " + (person.lastName ? person.lastName : '') + ",\n        PhoneNumber: " + (person.phoneNumber ? person.phoneNumber : 'No phone') + "\n    ");
    console.log(person);
}
var person_kido = {
    id: 1,
    firstName: 'KIDO',
    phoneNumber: '010-1111-2222'
};
printPersonInfo(person_kido);
var person_Aria = {
    id: 2,
    firstName: 'ARIA',
    lastName: 'SKT'
};
printPersonInfo(person_Aria);
var person_Hacker = {
    id: 3,
    firstName: 1,
    lastName: 'ker'
};
// printPersonInfo(person_Hacker); // 오류가 납니다. 타입이 잘못되었죠. 
var person_Hacker2 = {
    id: 3,
    firstName: 'Hac',
    lastName: 'ker',
    ip: '111.200.10.1'
};
printPersonInfo(person_Hacker2); // 오류없이 수행됩니다. interface 에 정의하지 않은 필드가 있더라도 정상적으로 동작합니다. 
var Grade;
(function (Grade) {
    Grade[Grade["SILVER"] = 0] = "SILVER";
    Grade[Grade["GOLD"] = 1] = "GOLD";
    Grade[Grade["DIAMOND"] = 2] = "DIAMOND";
})(Grade || (Grade = {}));
var vp = {
    id: 1000,
    firstName: '만수르',
    lastName: '알 합 알리바바 오바마 너바마',
    phoneNumber: 'unknown',
    grade: Grade.DIAMOND,
    points: 30000000000
};
printPersonInfo(vp);
function printVipMemberInfo(vipMember) {
    console.log("\n        ID: " + vipMember.id + ",\n        NAME: " + vipMember.firstName + " " + (vipMember.lastName ? vipMember.lastName : '') + ",\n        GRADE: " + vipMember.grade + ",\n        POINTS: " + vipMember.points + "\n\n    ");
    console.log(vipMember);
}
printVipMemberInfo(vp);
var TextureType;
(function (TextureType) {
    TextureType["PENCIL"] = "PENCIL";
    TextureType["SHARP"] = "SHARP";
    TextureType["BALLPEN"] = "BALLPEN";
    TextureType["INK"] = "INK";
    TextureType["OIL"] = "OIL";
})(TextureType || (TextureType = {}));
var AirBrush = /** @class */ (function () {
    function AirBrush(name, size, type) {
        this.name = name;
        this.size = size;
        this.type = type;
    }
    AirBrush.prototype.drawLine = function (something) {
        console.log("Draw " + something + " with AirBrush");
    };
    return AirBrush;
}());
var PaintBrush = /** @class */ (function () {
    function PaintBrush(name, size, type, opaque) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.opaque = opaque;
    }
    PaintBrush.prototype.drawLine = function (something) {
        console.log("Draw " + something + " with PaintBrush with opaque " + this.opaque);
    };
    return PaintBrush;
}());
var airBrush = new AirBrush("에브러쉬3", 10, TextureType.BALLPEN);
var paintBrush = new PaintBrush("페블 12호", 15, TextureType.OIL, 80);
function drawSomething(pen, something) {
    pen.drawLine(something);
}
drawSomething(airBrush, "Bee");
drawSomething(paintBrush, "Flower");
