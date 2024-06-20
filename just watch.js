/*document.addEventListener("DOMContentLoaded", function() {
    let ele_input = document.getElementById("fname");
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function() {
        let fname = ele_input.value;
        if (fname) {
            const newItem = document.createElement("li");
            newItem.textContent = fname;
            let ul = document.getElementById("list-items");
            ul.appendChild(newItem);
            ele_input.value = "";  // Clear the input field after adding the item
        }
    });
});*/
//let fullName=prompt("enter your full name");
//let userName="@"+fullName+fullName.length;
//console.log(userName);
let marks=[85,97,44,37,76,60];
console.log(marks);
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
console.log(sum);
let totalLength =marks.length;
let averagevalue=sum/totalLength;
console.log(averagevalue);



