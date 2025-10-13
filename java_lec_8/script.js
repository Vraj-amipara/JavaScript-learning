// TYPES OF EVENTS IN JAVASCRIPT
// 1. Mouse Events
// 2. Keyboard Events
// 3. Frame/Object Events
// 4. Form Events
// 5. Window Events
// 6. Drag and Drop Events
// 7. Clipboard Events
// 8. Media Events
// 9. Misc Events
// 10. Touch Events

//EXAMPLE OF MOUSE EVENTS

let btn = document.getElementById("click");
   
click.onclick = () =>{
    console.log("i am click by function");
    let a = 15;
    let b = 6;
    console.log("the sum of a and b is " + (a+b));
}

// event Object in javascript

Events_btn.onclick = (e) =>{
    console.log(e);
    console.log(e.target);  
    console.log(e.target.className);
    // console.log(e.offsetX);
    // console.log(e.offsetY); 
    console.log(e.clientX);
    console.log(e.clientY); 
}

// event listener in javascript 

Events_listener_btn.addEventListener ("click", () =>{
    console.log("i am click by event listener");
    let a = 10;
    let b = 6;
    console.log("the sum of a and b is " + (a+b));
})