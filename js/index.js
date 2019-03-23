// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const table=document.getElementById('pixelCanvas');
const trows=table.getElementsByTagName('tr');
let NEW=0;
let prev;
var rowCount = trows.length;
function makeGrid() {
  // Your code goes here!
  // if(NEW==1){
  //   for(let x=prev-1; x>0; x--){
  //     table.removeChild(trows[x]);
  //   }
  // }
  const x=document.getElementById('inputHeight').value;
  const y=document.getElementById('inputWeight').value;
  
  for (let rows = 0; rows < y; rows++) {
    const r=document.createElement('tr');

    for (let columns = 0; columns < x; columns++) {
        const c=document.createElement('td');

        c.addEventListener('click',function(){
        const color=document.getElementById('colorPicker').value;
           c.style.background =color; 
        })
        r.appendChild(c);
      };

    table.appendChild(r);
};
  prev=y;
  NEW=1;
  }
   const u=document.getElementById('sizePicker');

   u.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
     console.log("submit");
   };