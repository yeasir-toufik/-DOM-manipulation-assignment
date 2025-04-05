console.log(" js connection working!");

const ul=document.querySelector("ul");



const input=document.querySelector("#item");


const button=document.querySelector("button");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let userdata = document.getElementById('item').value;
    console.log(userdata);

    input.value='';

const li = document.createElement("li");
ul.appendChild(li);


const span = document.createElement("span");

span.textContent= userdata;
console.log(span);
li.appendChild(span);

const button1 = document.createElement("button");
li.appendChild(button1);
button1.textContent="Delete";


button1.addEventListener("click", () => {
    li.remove();
});


});





