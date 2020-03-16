type NumberOrString = number | string;
type CustomType = 'to-json' | 'to-text';

interface Result {
    op01: NumberOrString,
    op02: NumberOrString,
    result: NumberOrString,
    resultFormat: CustomType
}

function concat(
    op01: NumberOrString,
    op02: number | string,
    resultFormat: CustomType = 'to-json'
) {

    let resultValue: NumberOrString;

    if (typeof op01 === 'number' && typeof op02 === 'number') {
        resultValue = +op01 + +op02;    
    }
    else {
        resultValue = op01.toString() + op02.toString();
    }

    let result: Result = {
        'op01': op01,
        'op02': op02,
        'result': resultValue,
        'resultFormat': resultFormat
    };    

    if (resultFormat === 'to-json') {
        return result;
    }
    else {
        return JSON.stringify(result);
    }
}

const concatResult01_json = concat(30, 100, 'to-json');
console.log("concatResult01_json: ", concatResult01_json);

const concatResult02_json = concat("Your Score is ", 70, 'to-json');
console.log("concatResult02_json: ", concatResult02_json);

const concatResult03_text = concat(30, 100, 'to-text');
console.log("concatResult03_text: ", concatResult03_text);

const concatResult04_text = concat("My Score is", 99, 'to-text');
console.log("concatResult04_text: ", concatResult04_text);

// const concatResult05_text = concat("My Score", true, 'to-text'); // error 가 납니다. boolean 허용되는 타입이 아닙니다. 
// const concatResult06_text = concat("My Score", 50, 'to-string'); // error 가 납니다. to-string 허용되는 타입이 아닙니다. 
