const title = document.querySelector(".hello h1");

function handleTitleClick() {
    const acctivededClass = "active";
    if (title.classList.contains(acctivededClass)) {
        title.classList.remove(acctivededClass);
    } else {
        title.classList.add(acctivededClass);
    }
    //title.classList.toggle(acctivededClass); 위에 내용 간편화
}

title.addEventListener("click", handleTitleClick);
