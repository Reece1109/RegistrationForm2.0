//push to array
const items = [];
function addNames() {  //items array is within the scope of addNames function |  will get declared every time addNames is called
boxvalue = document.getElementById('box').value;
items.push(boxvalue);
console.log(items);
  return false;        //form submission will refresh the page by default, therefore used return false:
}





//Joels Form Example
//Buttons
let btnPush = document.querySelector("#btnPush");
let btnDisplay =  document.querySelector("#btnDisplay");
//Empty Array
let users = [];
//Implementation
btnPush.addEventListener('click', (e)=>{
e.preventDefault();
//Fetch vaule from the input element
let firstName = document.querySelector('#firstName').vaule
//Load name into an array
users.push(firstName.value);
firstName.value = ""
})
//Display
btnDisplay.addEventListener('click', (e)=>{
    e.preventDefault();
    console.clear();
    console.table(users)
    document.querySelector('#firstName').focus();
})

