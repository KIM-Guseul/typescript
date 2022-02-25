// typescript :: 타입 미리 명확하게 지정 js
function aa(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
    else {
        return 'hi';
    }
}
var john = [100, false];
var he = {
    name: 'jy',
    age: 24,
};
var members = ['kim', 'park'];
var members2 = { name: 'kim' };
var about = ['guseul', 34, 'ulsan'];
var favorit = {
    group: "TBZ",
    song: "boy"
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// union type:: 타입 두개 이상 합친 타입 | , any:: 모든 타입 허용 , unknown:: any랑 유사  => 타입 미리 지정하기 애매할 때
var member = [1, '2', 3];
// (number | string)[] : 어레이 안에 숫자 또는 문자 != number | string[] : 숫자 또는 문자로 구성된 어레이
var object = { a: '123' };
var Any;
Any = 123;
Any = [];
// 타입실드 해제. ts 장점이 사라져
var Unknown;
Unknown = 123;
Unknown = {};
Unknown = [];
var addd = Unknown;
// addd - 1 :: 연산은 숫자만
// addd.namd :: .name 이런건 오브젝트만
var user = 'kim';
var age = undefined;
var married = false;
var 주연 = [user, age, married];
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
function test(x) {
    return x * 2;
}
// void :: 리턴값이 없는 경우. 뭔가 리턴되면 에러표시.
// type narrowing 함수의 파라미터 타입 엄격하게 지정
function voidd(x) {
}
// x?: number = x:number | undefined
voidd(2);
function sayHi(x) {
    if (x) {
        console.log('안녕하세요, ' + x + '님');
    }
    else {
        console.log('이름을 입력하세요');
    }
}
// sayHi('김구슬');
function count(y) {
    return y.toString().length;
}
// console.log(count('apple'))
function canMarrige(income, house, charm) {
    var score = 0;
    score += income;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score > 600) {
        return "결혼 가능";
    }
    else {
        return "결혼 불가능";
    }
}
// console.log(canMarrige(700,false,'하'))
// console.log(canMarrige(100,false,'상'))
// type Narrowing :: 타입 하나로 정하기 _ typeof 변수 , 속성 in 오브젝트 자료 , 인스턴스 instanceof 부모 
// assertion 문법 :: 타입을 잠깐 덮어 씌우는 문법. 이거 쓰면 if문 필요X !! 여러개의 타입 중 하나를 잠깐 확정하는 문법. 기존의 타입을 다른걸로 바꾸는거 x
function myFun(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return 0;
    }
}
// console.log(myFun('하이'));
// console.log(myFun(123));
function fun1(x) {
    return x + 1;
}
function fun2(x) {
    var array = [];
    array[0] = x;
}
// parseFloat :: 문자열 숫자로 변환.
function onlyNum(x) {
    var filtNum = [];
    x.forEach(function (y) {
        if (typeof y === 'string') {
            filtNum.push(parseFloat(y));
        }
        else {
            filtNum.push(y);
        }
    });
    return filtNum;
}
// console.log(onlyNum([1,2,3,'4',5]));
var cs = { subject: 'math' };
var yh = { subject: ['science', 'english'] };
var ms = { subject: ['science', 'art', 'korean'] };
// Array.isArray() :: 객체가 array면 true, 아니면 false
function funSub(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "No subject";
    }
}
var 동물;
var teacher = {
    name: 'john',
    age: 20,
};
var born = 'seoul';
var gf = {
    name: 'yura'
};
var 네모 = {
    width: 200
};
var 좌표 = { x: 1, y: 2 };
var info = {
    name: 'kim',
    phone: 123,
    email: 'abc@naver.com',
};
var userr = {
    name: 'kim',
    phone: 1234,
    adult: true,
};
function game(x) {
    return ['가위'];
}
// const 의 업그레이드 버전 = literal type
