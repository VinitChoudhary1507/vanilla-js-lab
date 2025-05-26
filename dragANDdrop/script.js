const dragItems = document.querySelectorAll(".drag");
const upBox = document.querySelector(".Up");
const boxDown = document.querySelector(".Down");

let selected = null;

dragItems.forEach(item => {
  item.addEventListener("dragstart", (e) => {
    // Target the closest .drag container (even if dragging a child element)
    selected = e.target.closest(".drag");
  });
});

[upBox, boxDown].forEach(container => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();
    if (selected) {
      container.appendChild(selected); // Move the ENTIRE .drag container
      selected = null;
    }
  });
});

// const dragItem = document.querySelectorAll(".drag")
// const upBox = document.querySelector(".Up")
// const boxDown = document.querySelector(".Down")
// console.log(dragItem)
// // console.log(draggableBox)

// for(items of dragItem){
//      items.addEventListener("dragstart",function(e){
//           let selected = e.target;
//           upBox.addEventListener("dragover",function(e){
//                e.preventDefault();
//           })
//           upBox.addEventListener("drop",function(e){

//               upBox.appendChild(selected);
//               selected=null
//           })
//           boxDown.addEventListener("dragover",function(e){
//                e.preventDefault();
//           })
//           boxDown.addEventListener("drop",function(e){
//                boxDown.appendChild(selected);
//               selected=null
//           })
          
//      })
// }