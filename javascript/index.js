// var name="yaswi";
// var age=19;

// if(age>18){
      
//       const name="yaswitha";
//       console.log(name);
// }
// console.log(name);

// object

// let employee={

//      name:"muniram",
//      designation:"jr.software developer",
//      salary:"4 lpa",
//      ph: 0547847857678

// }

// console.log(employee)

//Array

// let employee=["mok","niki","yaswi"]
// console.log(employee[0],employee[1])

//alert

// alert("youre successfully completed this level")

// let num1=prompt("enter number")
// console.log(num1)

// confimr("are u sure u want to exit?")

//console statements


// console.error("error occured")
    // console.info("hi");
// console.log("hello!")
// console.warn("semicolon missing")

//Spread operator

// let internal_marks=[45,56,67,78,89]
// let external_marks=[34,45,56,67,78]

// let r=[33,44,external_marks]
// let fin=[33,66,...external_marks,...internal_marks,65,55]
// console.log(fin)
// console.log(r)

//Rest parameter

//   function addition(x,y,...rd){

    // console.log(x,y);
    // console.log(rd);
    // console.log(typeof(rd))
//   }
//    console.log(addition(2,3,78,78,89,90,78.5,"mk",true))

//Destructuring of array

// let e=["l","j","m"]

// let e1=e[0]
// let e2=e[1]
// let e3=e[2]

// console.log(e1,e2,e3)

//Destructuring of object

// let employee={

//        mname:"muniram",
//       designation:"jr.software developer",
//           salary:"4 lpa",
//       ph: 0547847857678
// }

// let {mname,designation,...rl}=employee;
// console.log(mname)
// console.log(designation)
// console.log(rl)

//sample prgm

// let x=45
// let y=89
// console.log(x+y)

// function

// let demo = function (x,y){
//     return (x+y);
// }
// console.log(demo(3,2))

//Arrow function
// let demo= (x,y) => {
    // return x*y
// }
// console.log(demo(9,8))

//set time

// setTimeout(function(){
    // console.log("hello!")
// },5000)

let e=["nhj","jikf","lodjg","pioew","mnvb"]
// for(let i=0;i<e.length;i++){
    
//     console.log(e[i])
// }
// for-in
// for(let i in e){
    // console.log(i)
// }
//for-of
// for(let i of e){
    // console.log(i)
// }

// let res=e.forEach(function(element,index){
    // return element+"k"+index
// })
// console.log(e)
// console.log(res)

//map

// let res=e.map(function(element,index){
//     return element +"k"+index
// })
// console.log(e)
// console.log(res)

// Arrow function
let res=e.map((m,n) =>{ // m,n are arguments m-->elements,n-->index
    return n+m
})
console.log(e)
console.log(res)