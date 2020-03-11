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
