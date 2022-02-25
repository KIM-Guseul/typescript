// typescript :: 타입 미리 명확하게 지정 js

function aa( x: string | number){
  if(typeof x === 'number'){
    return x *2;
  }else{
    return 'hi';
  }
}

type Member = [number , boolean];
let john:Member = [100, false];

type Myobject = {
  name? : string,
  age : number,
}

let he : Myobject = {
  name : 'jy',
  age : 24,
}

let members :string[] = ['kim', 'park'];

let members2: { [key:string] :string } = {name:'kim'};

type Name = string;
type City = string;
type Age = number;

let about:[Name,Age,City] = ['guseul', 34, 'ulsan'];
let favorit:{[key:string]:string} = {
  group: "TBZ",
  song: "boy"
}

let project:{
  member:string[],
  days:number,
  started:boolean
} = {
  member : ['kim', 'park'],
  days : 30,
  started: true,
}

// union type:: 타입 두개 이상 합친 타입 | , any:: 모든 타입 허용 , unknown:: any랑 유사  => 타입 미리 지정하기 애매할 때

let member:(number | string)[] = [1, '2', 3];
// (number | string)[] : 어레이 안에 숫자 또는 문자 != number | string[] : 숫자 또는 문자로 구성된 어레이
let object:{a:(number | string)} = {a : '123'}

let Any: any;
Any = 123; 
Any = [];
// 타입실드 해제. ts 장점이 사라져

let Unknown : unknown;
Unknown = 123;
Unknown = {};
Unknown = [];

let addd = Unknown;
// addd - 1 :: 연산은 숫자만
// addd.namd :: .name 이런건 오브젝트만

let user:string = 'kim';
let age:(undefined|number) = undefined;
let married:boolean = false;
let 주연 = [user, age, married];

let school:{
  score: (number|boolean)[],
  teacher: string,
  friend: string|string[],
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee', school.teacher];

function test(x: number): number{
  return x * 2
}

// void :: 리턴값이 없는 경우. 뭔가 리턴되면 에러표시.
  // type narrowing 함수의 파라미터 타입 엄격하게 지정
function voidd(x: number): void{

}
// x?: number = x:number | undefined
voidd(2);

function sayHi(x?: string){
  if(x){
    console.log('안녕하세요, ' + x + '님')
  }else{
    console.log('이름을 입력하세요')
  }
}
// sayHi('김구슬');

function count(y: number | string): number{
  return y.toString().length
}
// console.log(count('apple'))

function canMarrige(income:number, house:boolean, charm:string){
  let score:number = 0;

  score += income;

  if(house === true){
    score += 500
  }

  if(charm === "상"){
    score += 100
  }

  if (score > 600){
    return "결혼 가능"
  }else{
    return "결혼 불가능"
  }
}

// console.log(canMarrige(700,false,'하'))
// console.log(canMarrige(100,false,'상'))


// type Narrowing :: 타입 하나로 정하기 _ typeof 변수 , 속성 in 오브젝트 자료 , 인스턴스 instanceof 부모 
// assertion 문법 :: 타입을 잠깐 덮어 씌우는 문법. 이거 쓰면 if문 필요X !! 여러개의 타입 중 하나를 잠깐 확정하는 문법. 기존의 타입을 다른걸로 바꾸는거 x

function myFun(x: number | string){
  if (typeof x === 'number'){
    return x + 1;
  } else if(typeof x === 'string'){
    return x + 1;
  } else{
    return 0
  }
}
// console.log(myFun('하이'));
// console.log(myFun(123));

function fun1(x: number | string){
  return x as number + 1
}

function fun2(x: number | string){
  let array : number [] = [];
  array[0] = x as number;
}

// parseFloat :: 문자열 숫자로 변환.
function onlyNum(x: (number|string) []){
  let filtNum: number[] = [];

  x.forEach((y)=>{
    if(typeof y === 'string'){
      filtNum.push(parseFloat(y))
    }else{
      filtNum.push(y)
    }
  })
  return filtNum
}
// console.log(onlyNum([1,2,3,'4',5]));

let cs = {subject: 'math'}
let yh = {subject: ['science', 'english']}
let ms = {subject: ['science', 'art', 'korean']}

// Array.isArray() :: 객체가 array면 true, 아니면 false
function funSub(x: {subject : string | string[]}){
  if(typeof x.subject === 'string'){
    return x.subject
  } else if(Array.isArray(x.subject)){
    return x.subject[x.subject.length - 1]
  }else{
    return "No subject"
  }
}
// console.log(funSub({ subject : ['science', 'art', 'korean'] }))


type Animal = string | number | undefined;
let 동물: Animal;

type People = {
  name : string,
  age : number,
}

let teacher:People = {
  name: 'john', 
  age: 20,
}

const born = 'seoul';

// readonly
type Gf = {
  readonly name : string
}

let gf: Gf = {
  name : 'yura'
}

type Square = {
  color? : string,
  width : number,
}
let 네모:Square = {
  width: 200
}

type Namee = string;
type Agee = number;
type newPeople = Namee | Agee;

type posX = {x: number};
type posY = {y: number};
type XandY = posX & posY
let 좌표:XandY = {x: 1, y: 2}

type Aaa = {
  color?: string,
  size: number,
  readonly position: number[], //readonly :: 변경 불가능한 속성.
}

type Info = {
  name: string,
  email?: string,
  phone: number,
}

let info:Info = {
  name: 'kim',
  phone: 123,
  email: 'abc@naver.com',
}

type User = {
  name: string,
  phone: number,
  email?: string,
}
type Adult = {
  adult: boolean,
}

type NewUser = User & Adult

let userr:NewUser = {
  name:'kim',
  phone: 1234,
  adult: true,
}

type Game = '가위'|'바위'|'보'

function game(x:Game):(Game)[]{
  return ['가위']
}

// const 의 업그레이드 버전 = literal type





