const inputs = document.getElementsByTagName("input");
if(localStorage.getItem("linear")){
    inputs[0].value = Number(localStorage.getItem("timer"))
}
document.addEventListener("click",(event)=>{
    if(event.target.id == "up_trabalho"){
        inputs[0].value = Number(inputs[0].value) + 1;
    }
    else if(event.target.id == "down_trabalho"){
        inputs[0].value = Number(inputs[0].value) - 1;
    }
    localStorage.setItem("timer",inputs[0].value);
});