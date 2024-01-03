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


addButton.addEventListener("click",addTask);

function addTask(){
console.log("clicked")
}