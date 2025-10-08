// let div = document.querySelector('div');
// console.log(div);

// let id = div.getAttribute('id');
// console.log(id);

// let para = document.querySelector(".para");
// console.log(para.getAttribute("class"));

// let p =document.querySelector("p");
// p.style.backgroundColor = "green";

// insert Element  ----------------------------------------------------------------------
        // append ,prepend , before , after
        let newbtn = document.createElement("button");
        newbtn.innerText = "click me";
        console.log(newbtn);
        
        let div = document.querySelector("div");
        div.after(newbtn);

// new heading create for only use java script  
        let newHeading = document.createElement("h1");
        newHeading.innerText = "this is heading";

        div.prepend(newHeading);

// remove Element  ----------------------------------------------------------------------
        // newbtn.remove(); // use for remove element