const notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");

// Load notes from localStorage
function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}
showNotes();

// Update localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./Assets/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update localStorage when adding new note
});

// Delete or Edit note
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Listen for changes in notes content
notesContainer.addEventListener("input", function (e) {
    if (e.target.tagName === "P") {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
