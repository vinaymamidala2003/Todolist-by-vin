const inputBox=document.getElementById("input-box");
const listcon=document.getElementById("list-container");


function addTask()
{
    if(inputBox.value==='')
    {
        alert("Enter some value");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcon.appendChild(li);
        //inorder to ad the into mark at the end we wwill use the span tag
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value='';
}

listcon.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);