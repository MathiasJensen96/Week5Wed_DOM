const bub1 = document.getElementById("bubbling1");
const bub2 = document.getElementById("bubbling2");

const outer = document.getElementById("outer");

const p = document.getElementById("paragragh");

outer.onclick = (evt) => {
    const target = evt.target;
    p.innerText = target.id;
}