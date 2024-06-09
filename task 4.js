// Q2
let fruits = ["orange" , "banana" ,"apple" , "kiwi","mango"];

    // let clas = document.createElement("ul");
    // document.body.appendChild(uorder);
    // clas.classList.add("fruits-order");
    // let uorder = document.getElementsByClassName("fruits-order")[0];

       let uorder = document.getElementsByClassName("fruits-order")[0];
    
    for(let i=0; i<fruits.length; i++){
        let list = document.createElement("li");
        let img = document.createElement("img");
        list.innerHTML=fruits[i] + "<br>";
        img.src="images/"+i+".jpg" ;
        img.width = 100;
        img.height = 100;
        img.alt=fruits[i];

        uorder.appendChild(list);
        list.appendChild(img);
    }
 
    
// Q3
// let x=[1,2,3,4,5];
// function check(x,num){
//     for(let i=0; i<=x.length; i++){
//         if(x[i]===num){
//             console.log("found " + i);
//             break;
//         }
//         else if(x.length===i)
//             console.log("not found " + -1);
//         else 
//         continue;
//     }
// }
// check(x,4);
// another solution
// let x=[1,2,3,4,5];
// function check(x,num){

//     for(let i=0; i<=x.length; i++){
//         if(x[i]===num)
//          return   console.log("found " + i);
//         }

//         return console.log("not found " + -1);
// }
// check(x,10);
