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

addButton.addEventListener("click",addTask);

function addTask(){
    let task = {
        id: randomIDGenerate,
        taskContent: inputBox.value,
        isComplete: false
    }
    taskList.push(task);
    render();
}


function render(){
    let resultHTML='';
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].isComplete==true){
            resultHTML +=
            `<div class= "task-done">
            ${taskList[i].taskContent}
            </div>
            <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button>Delete</button>
            </div>`
        }else{
            resultHTML += 
            `<div>
            ${taskList[i].taskContent}
            </div>
            <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button>Delete</button>
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

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}