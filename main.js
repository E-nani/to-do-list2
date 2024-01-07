// 유저가 값입력
// + 버튼 클리하면, 할일 추가된다.
//delete버튼 누르면 할일 삭제된다.
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다(render함수안에잇음 index는 지움)
// 1. check버튼을 클릭하는 순간 is complete를 false에서 true로(반대도)
// 2. true이면 끝난걸로 간주가고 밑줄 보여주기
// 3. false이면 안끝난걸로 간주하고 그대로 보여주기
//Done, Not Done 탭을 누르면, 언더바가 이동한다
//Done은, Done 아이템만, Not Done탭은 Not Done 아이템만


let inputBox = document.getElementById("input-box");
let addButton= document.getElementById("add-button");
let taskList=[];
let tabs = document.querySelectorAll(".task-tabs div");
let mode=''
let filterList=[]

addButton.addEventListener("click",addTask);

for(i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){filter(event)})
}

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: inputBox.value,
        isComplete: false
    }
    taskList.push(task);
    render();
}


function render(){
    let list = []
    if(mode=="A"){  
        list=taskList

    }else if(mode=="ONGOING"||mode=="DONE"){
        list=filterList
    }
    let resultHTML='';
    for(let i = 0; i<list.length; i++){
        if(list[i].isComplete==true){
            resultHTML +=
            `<div class= "task-done">
            ${list[i].taskContent}
            </div>
            <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>`
        }else{
            resultHTML += 
            `<div>
            ${list[i].taskContent}
            </div>
            <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>`
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i = 0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete=! taskList[i].isComplete;
            break;
        }
    }
    render();
}

function deleteTask(id){
    for(i=0; i<taskList.length; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
            break;
        }
    }
    render();
}

function filter(event){
   // console.log("A",event.target.id);
    mode = event.target.id;
    filterList=[]


    if(mode=="A"){
        render();
    }else if(mode == "ONGOING"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i])
            }
        }
        render()
    }else if(mode == "DONE"){
        for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            filterList.push(taskList[i])
        }
    }
    render();
}
console.log(filterList)
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
};