let colorMeEle = document.body.querySelector(".colorMe");
let buttonEle = document.body.getElementsByTagName("button");

let newEle = document.createElement("p");
newEle.innerHTML="This is a paragrapth";
//appending is when you add an element to the DOM

let check = true;

let list =['a','b','c'];


buttonEle[0].addEventListener("click", function(){
    colorMeEle.innerHTML="Some Text";
    if(check){
        colorMeEle.style.color="red";
    }else{
        colorMeEle.style.color="blue";
    }

    check=!check;

    document.body.appendChild(newEle);
})

function createPost (vl){
    let newEle = document.createElement("div");
    newEle.innerHTML=vl;
    document.body.appendChild(newEle);
}

for(let i=0; i<list.length; i++){
    createPost(list[i])
}