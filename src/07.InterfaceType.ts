// 특정 사람에 대한 인터페이스를 지정합니다. 
interface Person {
    id: number,
    firstName: string,
    lastName?: string,
    phoneNumber?: string
}

function printPersonInfo(person: Person) {
    console.log(`
        ID: ${person.id},
        NAME: ${person.firstName} ${person.lastName ? person.lastName : ''},
        PhoneNumber: ${person.phoneNumber ? person.phoneNumber : 'No phone'}
    `);

    console.log(person);
}

let person_kido = {
    id: 1,
    firstName: 'KIDO',
    phoneNumber: '010-1111-2222'
}

printPersonInfo(person_kido);

let person_Aria = {
    id: 2,
    firstName: 'ARIA',
    lastName: 'SKT'
}
printPersonInfo(person_Aria);

let person_Hacker = {
    id: 3,
    firstName: 1,
    lastName: 'ker'
}
// printPersonInfo(person_Hacker); // 오류가 납니다. 타입이 잘못되었죠. 

let person_Hacker2 = {
    id: 3,
    firstName: 'Hac',
    lastName: 'ker',
    ip: '111.200.10.1'
}
printPersonInfo(person_Hacker2); // 오류없이 수행됩니다. interface 에 정의하지 않은 필드가 있더라도 정상적으로 동작합니다. 

enum Grade {
    SILVER, GOLD, DIAMOND
}

interface VipMember extends Person {
    grade: Grade,
    points: number
}

let vp = {
    id: 1000,
    firstName: '만수르',
    lastName: '알 합 알리바바 오바마 너바마',
    phoneNumber: 'unknown',
    grade: Grade.DIAMOND,
    points: 30000000000
}

printPersonInfo(vp);

function printVipMemberInfo(vipMember: VipMember) {
    console.log(`
        ID: ${vipMember.id},
        NAME: ${vipMember.firstName} ${vipMember.lastName ? vipMember.lastName : ''},
        GRADE: ${vipMember.grade},
        POINTS: ${vipMember.points}

    `);

    console.log(vipMember);
}

printVipMemberInfo(vp);

enum TextureType {
    PENCIL = "PENCIL", 
    SHARP = "SHARP",
    BALLPEN = "BALLPEN",
    INK = "INK",
    OIL = "OIL"
}

interface Pen {
    name: string,
    size: number,
    type: TextureType,
    drawLine(something: string)
}

class AirBrush implements Pen {
    name: string;
    size: number;
    type: TextureType;

    constructor(name: string, size: number, type: TextureType) {
        this.name = name;
        this.size = size;
        this.type = type;
    }

    drawLine(something: string) {
        console.log(`Draw ${something} with AirBrush`)
    }
}

class PaintBrush implements Pen {
    name: string;
    size: number;
    type: TextureType;
    opaque: number;

    constructor(name: string, size: number, type: TextureType, opaque: number) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.opaque = opaque;
    }

    drawLine(something: string) {
        console.log(`Draw ${something} with PaintBrush with opaque ${this.opaque}`);
    }
}

let airBrush = new AirBrush("에브러쉬3", 10, TextureType.BALLPEN);
let paintBrush = new PaintBrush("페블 12호", 15, TextureType.OIL, 80);

function drawSomething(pen: Pen, something: string) {
    pen.drawLine(something);
}

drawSomething(airBrush, "Bee");
drawSomething(paintBrush, "Flower");