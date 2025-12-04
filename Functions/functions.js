// 
function getFullname(firstname) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstname + ' ' + restOfName.join('  ');
}
var name1 = getFullname("john", "Doe", "William", "Johnson", "Jackson");
console.log(name1);
