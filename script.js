const input = document.getElementById("input-box");
const list_container = document.getElementById("list-container")
const button = document.getElementById("Add-task");
button.addEventListener('click', function(e) {
    if (input.value === '') {
        alert("Enter some task to add");
    } else {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = " ";
    savedata();
});
list_container.addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }

});

function savedata() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showList() {
    list_container.innerHTML = localStorage.getItem("data");
}
showList();