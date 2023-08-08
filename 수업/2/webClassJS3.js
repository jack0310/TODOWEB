const title = document.querySelector(".hello h1");

// ===은 자료형과 문자 전부 일치해야 true

function handleTitleClick() {
    const currentColor = title.style.color;
    let newColor;
    if (currentColor === "red") {
        newColor = "blue";
    } else {
        newColor = "red";
    }

    title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
