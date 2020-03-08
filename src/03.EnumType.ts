// 일반적인 Javascript 코드 
const TeamMemberType = {DEVELOPER: "DEVELOPER", MANAGER: "MANAGER", PO: "PO", SM: "SM", DESIGNER: "DESIGNER"};

let memberType01 = TeamMemberType.DEVELOPER;
console.log("MemberType01: ", memberType01);

// Enum 을 이용한 타입. 
enum TeamMemberEnumType {
    DEVELOPER, 
    MANAGER,
    PO,
    SM, 
    DESIGNER
};

let memberType02 = TeamMemberEnumType.MANAGER;
console.log("MemberType02: ", memberType02);

// Enum 의 값지정 이용한 타입. 
enum TeamMemberEnumType2 {
    DEVELOPER = 5, 
    MANAGER,
    PO,
    SM, 
    DESIGNER
};

let memberType03 = TeamMemberEnumType2.MANAGER;
console.log("MemberType03: ", memberType03);

// Enum 의 값지정 이용한 타입. 
enum TeamMemberEnumType3 {
    DEVELOPER = "DEV", 
    MANAGER = "PM",
    PO = "PO",
    SM = "SM", 
    DESIGNER = "DESIGN"
};

let memberType04 = TeamMemberEnumType3.MANAGER;
console.log("MemberType04: ", memberType04);