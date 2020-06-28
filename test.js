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
var typu = '1';
typu = 1;
var numArray = [1, 2, 3]; // масиив из чисел
var numArray2 = [1, 2, 3]; // масиив из чисел
var srtArray = ['1', '2', '3'];
var srtArray2 = ['1', '2', '3'];
var array = [1, '2', true];
var array2 = [1, '2', true];
var myName = 'Yul';
var myAge = 50;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge(age, prefix) {
    return age + prefix;
}
console.log(getMyAge(40, 'pop'));
var Func = function () { return 1 + 1; }; //короткая запись функции
var Func2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(sum(12, 5), mySum(34, 34));
var user = {
    name: 'Pop',
    age: 50,
    logName: function () {
        console.log(name);
    }
};
var Job;
(function (Job) {
    Job[Job["kek"] = 0] = "kek";
    Job[Job["lol"] = 1] = "lol";
    Job[Job["pops"] = 2] = "pops";
})(Job || (Job = {}));
var job = Job.kek;
var Users = /** @class */ (function () {
    function Users(name, job) {
        this.job = job;
        this.name = name;
    }
    Users.prototype.gerCandy = function () {
        return this.candy;
    };
    return Users;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(job) {
        return _super.call(this, 'kek', job) || this;
    }
    return Cars;
}(Users));
var users = new Users('Heh', 'kek');
var cars = new Cars('Lol');
var Body = /** @class */ (function () {
    function Body() {
        this.year = 2010;
    }
    Body.prototype.getCarYear = function () {
        return this.year;
    };
    return Body;
}());
var Bently = /** @class */ (function (_super) {
    __extends(Bently, _super);
    function Bently() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bently.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Bently;
}(Body));
var body = new Bently();
console.log(body);
function getLenght(variable) {
    console.log('getLenght', variable.length);
}
var box = {
    name: 'lol',
    length: 20
};
getLenght(box);
getLenght([1, 2, 3, 4, 5]);
var Year = /** @class */ (function () {
    function Year() {
        this.name = 'Lel';
    }
    Year.prototype.logInfo = function (info) {
        console.log(info);
    };
    Year.prototype.getRey = function () {
        return 30;
    };
    return Year;
}());
