let washBtn=document.getElementById("wash-btn");
let mowBtn=document.getElementById("mow-btn");
let pullBtn=document.getElementById("pull-btn");
let sendBtn=document.getElementById("sendBtn");
let removeBtn=document.getElementById("remove-btn");
let hasWash=0;
let hasMow=0;
let hasPull=0;
let hasTask=[];
let hasTotal=[];

washBtn.addEventListener("click", function(){
    if(!hasWash){
        hasTask.push("Wash Car");
        hasTotal.push(10);
        hasService(hasTask,hasTotal);
        hasWash=1;
        
    }
  
});
mowBtn.addEventListener("click", function(){
    if(!hasMow){
        hasTask.push("Mow Lawn");
        hasTotal.push(20);
        hasService(hasTask,hasTotal);
        hasMow=1;
    }
});
pullBtn.addEventListener("click", function(){
    if(!hasPull){
        hasTask.push("Pull Weeds");
        hasTotal.push(30); 
        hasService(hasTask,hasTotal);
        hasPull=1;
    }
    
});

function hasService(service,hasCost){
     let list="";
     let cost=0;
        for(let i = 0; i < service.length; i++){
            list += 
            `
                <tr id="table">
                    <td>${service[i]} 
                        <button class="remove-btn" onclick="removeItem(this.value)">
                            <h6>Remove</h6>
                        </button>
                    </td>
                    <td>$${hasCost[i]}</td>
                </tr>
            `
            cost +=hasCost[i];
        }
        tablebox.innerHTML=list;
        resultAns.textContent=`${cost}`;     
}

sendBtn.addEventListener("click", function(){
    resultAns.innerHTML="";
    tablebox.textContent="";
    hasMow=hasWash=hasPull=0;
    hasTask=[];
    hasTotal=[];
});
function removeItem(item){
    hasTask.splice(item,1);
    hasTotal.splice(item,1);
    hasService(hasTask,hasTotal);

}
sendBtn.addEventListener("click", function(){
    const textarea=document.createElement("textarea");
    const bill1=table.innerText;
    if(!bill1){
        return;
    }
    textarea.value=bill1;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Bill has been generater to clipboard")
});
