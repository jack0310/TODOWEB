const title = document.querySelector(".hello h1");

function handleTitleClick() {
    console.log("clicked!");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick); //이 방식 더 선호(removeEventListener을 사용할 수 있기때문)
//title.onclick = handleTitleClick;

//

const mouse = document.querySelector(".mouse h1");

function onmouseover() {
    console.log("마우스오버");
    mouse.innerText = "마우스가 올려져 있습니다.";
}
function onmouseleave() {
    console.log("마우스리브");
    mouse.innerText = "마우스가 올려져있지 않습니다.";
}

mouse.addEventListener("mouseover", onmouseover);
mouse.addEventListener("mouseleave", onmouseleave);

//

const button = document.querySelector(".button input");

function onclickevent() {
    console.log("버튼 클릭");
    alert("정말로 변경하시겠습니까?");
    document.body.style.backgroundColor = "lightgreen";
}

button.addEventListener("click", onclickevent);

console.dir(title);
