// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission




let inp = document.getElementById("iits-inp");
let aCount = document.getElementById("iits-a_count");
let bpCount = document.getElementById("iits-bp_count");
let bCount = document.getElementById("iits-b_count");
let bmCount = document.getElementById("iits-bm_count");
let cCount = document.getElementById("iits-c_count");
let fCount = document.getElementById("iits-f_count");

let addbtn = document.getElementById("iits-mybtn");
addbtn.addEventListener("click", myEventHandler);  //js event listener

// Logical Part
function myEventHandler(event) {
    event.preventDefault();  // To prevent default event behavior
    let number = inp.value;
    let count;
    number = parseInt(number);
    if (number > 100) {
        alert("Maximum number can be 100");
    }
    else if (number >= 81) {
        count = aCount.innerHTML;
        count = parseInt(count);
        aCount.innerHTML = count + 1;
    }
    else if (number >= 71) {
        count = bpCount.innerHTML;
        count = parseInt(count);
        bpCount.innerHTML = count + 1;
    }
    else if (number >= 61) {
        count = bCount.innerHTML;
        count = parseInt(count);
        bCount.innerHTML = count + 1;
    }
    else if (number >= 51) {
        count = bmCount.innerHTML;
        count = parseInt(count);
        bmCount.innerHTML = count + 1;
    }
    else if (number >= 40) {
        count = cCount.innerHTML;
        count = parseInt(count);
        cCount.innerHTML = count + 1;
    }
    else {
        count = fCount.innerHTML;
        count = parseInt(count);
        fCount.innerHTML = count + 1;
    }

    inp.value = ''; // used clear the input box after inputed
}




