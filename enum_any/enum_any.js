// 
var Paylog;
(function (Paylog) {
    Paylog[Paylog["mon"] = 124.5] = "mon";
    Paylog[Paylog["tue"] = 90.3] = "tue";
    Paylog[Paylog["wed"] = 0] = "wed";
})(Paylog || (Paylog = {}));
var paycheck = Paylog.mon + Paylog.tue + Paylog.wed;
console.log(paycheck);
