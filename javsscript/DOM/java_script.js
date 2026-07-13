// // --- Accessin html elements
// const mybody=document.body;
// mybody.style.background="red";
// const box1=document.getElementById("box-1");
// console.log(box1)

// const  load=document.getElementsByTagName("div")
// console.log(load)
// const boxes=document.getElementsByClassName("container")
// console.log(boxes)

// // const select=document.querySelector(".container .random")
// // console.log(select)    first box will be visible

// const select=document.querySelectorAll(".container .random")
// console.log(select)


// MODIFY HTML ELEMENT
// 1 STEP - U MUST ACCESS ELEMENT FIRST 
// const box1 = document.getElementById("box-1");
// box1.innerHTML="Welcome to PSIT";

// const box2=document.getElementById("box-2").innerHTML="FSD Learning";
// box1.classList.add("round-border");


// ----------- CREATING A NEW ELEMENT

const newele=document.createElement("p");//p=paragraph tag
newele.innerText="It is a new paragraph";
const container=document.getElementById("container");//outer div(parent tag)

container.appendChild(newele);
