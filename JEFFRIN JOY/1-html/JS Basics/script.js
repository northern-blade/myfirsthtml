
document.write("hello , good evening!")

var frame="Jeffrin"
console.log(frame)

let age = 19
console.log(age)
console.log(typeof(age))

let salary=40000.5
console.log(salary)

const pi=3.14

let canVote=false
console.log(canVote)

let e
console.log(e)
console.log(typeof(e))

let f=null
console.log(f)

const fav_colors = ['pink','purple','white']
console.log(fav_colors)
console.log(fav_colors[0])
console.log(fav_colors[1])
console.log(fav_colors[2])
console.log(fav_colors[3])
console.log(fav_colors.length)

let fav_days =[]
fav_days[0]="Saturday"
fav_days[1]="Sunday"
console.log(fav_days)

const car={
    name:"Kia Seltos",
    color:"black",
    weight:500
}
console.log(car)
console.log(car.name)
console.log(car.color)
console.log(car.weight)

console.log(10**3)

let a=10
let b=20

let result
result=a/b
console.log(result)

result=a%b
console.log(result)


let c=20
c/=50
console.log(c)

let x=5
console.log(x=="5")
console.log(x==="5")
console.log(x!="5")
console.log(x<5)
console.log(x>=5)

let x1=6
let y1=3

console.log(x1<10 && y1>5)
console.log(x1==6 || y1==5)
console.log(!(x1==y1))

let temperature = 10

if(temperature>25){
    console.log("Its hot outside")
}
else if(temperature>15){
    console.log("Its warm outside")
}
else if(temperature>10){
    comsole.log("Its cold outside")
}
else{
    console.log("its very cold outside")
}

for(let i=0; i<=5;i++){
    console.log(10)
}
function greet(){
    console.log("hello user")
}

greet()

function welcome(name){
    console.log("Hello"+name)
}

welcome("Jeffrin")

function add(num1,num2){
    return num1+num2
}

let sum=add(5,7)
console.log(sum)

let head1 = document.getElementById("head")

head1.innerText ="You have been hacked!!"

head1.style.backgroundColor='aqua'
head1.style.border='3px solid green'

function handClick (){
    document.getElementById('clickbutton').innerText="Clicked!"
    document.getElementById('clickbutton').style.
    backgroundColor='cornflowerblue'
}
    document.getElementById('clickbutton').addEventListener("click",handClick)
    document.getElementById('clickbutton').addEventListener("click",()=>console.log("Second Handler"))

