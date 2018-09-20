// // Variables
// var form = document.getElementById("form");
// var input = document.getElementById("input");
// var btn = document.getElementById("btn");
// var list = document.getelementById("list");
// var id = 1;
//
// //Button event listenr
// btn.addEventListener("click", addTodoItem);
//
// //Add my todo to a list
// function addTodoItem() {
//   if(input.value === "") {
//     alert("Please add your first todo item");
//     console.log(alert);
//   }
//   else {
//     if(list.style.borderTop === "") {
//       list.style.borderTop = "1px solid white";
//     }
//     var text = input.value;
//     var item = `<li id="li-${id}">${text}
//                 <input id="box-${input}"`
//                   class="btn" type="btn"></li>`;
//     list.insertAdjacentHTML("beforeend", item);
//     id++;
//     form.reset();
//   }
// }
// console.log(addTodoItem);
// 
// list.addEventListener("click", buttonClicked)
//
// function buttonClicked(event) {
//   const element = event.target;
//   if(element.type === "")
// }
