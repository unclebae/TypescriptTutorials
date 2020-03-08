// 일반적인 Javascript 코드 
var TeamMemberType = { DEVELOPER: "DEVELOPER", MANAGER: "MANAGER", PO: "PO", SM: "SM", DESIGNER: "DESIGNER" };
var memberType01 = TeamMemberType.DEVELOPER;
console.log("MemberType01: ", memberType01);
// Enum 을 이용한 타입. 
var TeamMemberEnumType;
(function (TeamMemberEnumType) {
    TeamMemberEnumType[TeamMemberEnumType["DEVELOPER"] = 0] = "DEVELOPER";
    TeamMemberEnumType[TeamMemberEnumType["MANAGER"] = 1] = "MANAGER";
    TeamMemberEnumType[TeamMemberEnumType["PO"] = 2] = "PO";
    TeamMemberEnumType[TeamMemberEnumType["SM"] = 3] = "SM";
    TeamMemberEnumType[TeamMemberEnumType["DESIGNER"] = 4] = "DESIGNER";
})(TeamMemberEnumType || (TeamMemberEnumType = {}));
;
var memberType02 = TeamMemberEnumType.MANAGER;
console.log("MemberType02: ", memberType02);
// Enum 의 값지정 이용한 타입. 
var TeamMemberEnumType2;
(function (TeamMemberEnumType2) {
    TeamMemberEnumType2[TeamMemberEnumType2["DEVELOPER"] = 5] = "DEVELOPER";
    TeamMemberEnumType2[TeamMemberEnumType2["MANAGER"] = 6] = "MANAGER";
    TeamMemberEnumType2[TeamMemberEnumType2["PO"] = 7] = "PO";
    TeamMemberEnumType2[TeamMemberEnumType2["SM"] = 8] = "SM";
    TeamMemberEnumType2[TeamMemberEnumType2["DESIGNER"] = 9] = "DESIGNER";
})(TeamMemberEnumType2 || (TeamMemberEnumType2 = {}));
;
var memberType03 = TeamMemberEnumType2.MANAGER;
console.log("MemberType03: ", memberType03);
// Enum 의 값지정 이용한 타입. 
var TeamMemberEnumType3;
(function (TeamMemberEnumType3) {
    TeamMemberEnumType3["DEVELOPER"] = "DEV";
    TeamMemberEnumType3["MANAGER"] = "PM";
    TeamMemberEnumType3["PO"] = "PO";
    TeamMemberEnumType3["SM"] = "SM";
    TeamMemberEnumType3["DESIGNER"] = "DESIGN";
})(TeamMemberEnumType3 || (TeamMemberEnumType3 = {}));
;
var memberType04 = TeamMemberEnumType3.MANAGER;
console.log("MemberType04: ", memberType04);
