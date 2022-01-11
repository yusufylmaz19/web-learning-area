// Factort Pattern

function Factroy() {
  this.createEmployee = function (type) {
    var employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    }
    employee.type = type;
    employee.say= function() {
      console.log(this.type+": sabit ücreti :"+this.hourly);
    }
    return employee;
  };
}

var FullTime= function (){
  this.hourly="30 TL";
}
var partTime= function (){
  this.hourly="15 TL";
}
var Temporary= function (){
  this.hourly="10 TL";
}

var factory = new Factroy();

var fulltimeEmp =factory.createEmployee("fulltime");

fulltimeEmp.say();    