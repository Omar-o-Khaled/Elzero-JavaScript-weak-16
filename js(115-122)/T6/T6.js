let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let[a,b,c]=myFriends;


if(chosen===1){
    ({title:t,age:a,available:v,skills:[,lastskill]}=a)
}else if(chosen===2){
    ({title:t,age:a,available:v,skills:[,lastskill]}=b)
}else{
    ({title:t,age:a,available:v,skills:[,lastskill]}=c)
}

console.log(t);
console.log(a);
v ? console.log("Available") : console.log("NOT Available");
console.log(lastskill);
