let typu:any = '1';
typu = 1;
let numArray:number[] = [1, 2, 3]; // масиив из чисел
let numArray2:Array<number> = [1, 2, 3]; // масиив из чисел

let srtArray:string[] = ['1', '2', '3'];
let srtArray2: Array<string> = ['1', '2', '3'];

let array:[number, string,boolean] = [1, '2', true];
let array2:any[] = [1, '2', true];

const myName:string = 'Yul';
const myAge:number = 50;

function getMyName(): string {
return myName;
}

console.log(getMyName());

function getMyAge(age:number, prefix:string):string {
    return age + prefix;

}
console.log(getMyAge(40, 'pop'))

const Func = () => 1 + 1; //короткая запись функции
const Func2 = function () {
return 1+1;
}
let mySum: (num1: number, num2:number) => number;
function sum(num1:number, num2:number) :number {
    return num1 + num2;
}
mySum = sum;
console.log(sum(12, 5),mySum(34,34));


type User = {name:string, age:number, logName?: () => void};//создание типа
let user:User = {
    name: 'Pop',
    age:50,
    logName():void {
        console.log(name)
    }
};

enum Job {
    kek,
    lol,
    pops
}

const job: Job = Job.kek;

class Users {
   public name: string;
   private candy: number | undefined;

    constructor(name:string, public job: string) {
    this.name = name;
    }

   public gerCandy(): number {
        return <number>this.candy;
    }
}

class Cars extends Users {

    constructor(job: string) {
        super('kek', job);//вызываем родительский конструктор
    }
}

const users = new Users('Heh', 'kek');
const cars = new Cars('Lol');

abstract class Body {
    year: number = 2010;

    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year;
    }

}

class Bently extends  Body {
    logInfo(info: string): void {
        console.log(info);
    }

}
const body = new Bently();
console.log(body);

interface Interface {
    length: number;
}
function getLenght(variable: Interface): void {
    console.log('getLenght', variable.length);

}
const box = {
    name: 'lol',
        length: 20
}
getLenght(box);
getLenght([1,2,3,4,5]);

interface INomu {
    name: string;
    logInfo(info: any) : void;
}
interface IDiru {
    getRey(): number;
}
class Year implements INomu, IDiru {
    name: string = 'Lel';
    logInfo(info: any) {
        console.log(info)
    }
    getRey(): number {
        return  30;
    }
}