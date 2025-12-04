// 

function getFullname(firstname:string, ...restOfName: string[]){
    return firstname+ ' ' +restOfName.join('  ');
}
let name1 = getFullname("john","Doe","William","Johnson","Jackson");
console.log(name1);