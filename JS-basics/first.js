let a = 10;
let b = 20;

console.log("Sum =", a + b);

const text = document.getElementById("color-text");
const colors = ["crimson", "royalblue", "seagreen", "darkorange"];
let colorIndex = 0;

text.addEventListener("click", () => {
  text.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

if(item == ""){
    alert("Please enter a value.");
}

let userName = "Prashant";
let currentHour = new Date().getHours(); 
