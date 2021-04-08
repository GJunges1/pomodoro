const inputs = document.getElementsByTagName("input");
if(localStorage.getItem("timer")){
    let cache = localStorage.getItem("timer").split(',').map(Number);
    inputs[0].value= cache[0];
    inputs[1].value= cache[1];
    inputs[2].value= cache[2]
}
document.addEventListener("click",(event)=>{
    if(event.target.id == "up_trabalho"){
        inputs[0].value = Number(inputs[0].value) + 1;
    }
    else if(event.target.id == "down_trabalho" && inputs[0].value>0){
        inputs[0].value = Number(inputs[0].value) - 1;
    }

    else if(event.target.id == "up_pausa"){
        inputs[1].value = Number(inputs[1].value) + 1;
    }
    else if(event.target.id == "down_pausa" && inputs[1].value>0){
        inputs[1].value = Number(inputs[1].value) - 1;
    }

    else if(event.target.id == "up_secoes"){
        inputs[2].value = Number(inputs[2].value) + 1;
    }
    else if(event.target.id == "down_secoes" && inputs[2].value>0){
        inputs[2].value = Number(inputs[2].value) - 1;
    }
    localStorage.setItem("timer",[inputs[0].value, inputs[1].value, inputs[2].value]);
});