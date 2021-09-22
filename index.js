const colors = document.getElementsByTagName("div");
const colorArr = ["red", "blue", "green"];

const btn = document.getElementById("btn");
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    colors[i].style.backgroundColor = colorArr[i];

}
btn.onclick = () => {
    document.getElementById("div1").style.backgroundColor = "green";
    document.getElementById("div2").style.backgroundColor = "red";
    document.getElementById("div3").style.backgroundColor = "blue";
};
