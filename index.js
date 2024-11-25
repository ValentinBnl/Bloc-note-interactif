const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

function addNote(event) {
	event.preventDefault();

	const noteText = noteInput.value;

	if (noteText === "") {
		alert("Vous n'avez rien écrit !");
		return;
	}

	const noteBox = document.createElement("div");
	noteBox.classList.add("note-box");
	noteBox.textContent = noteText;

	notesContainer.appendChild(noteBox);

	noteInput.value = "";
}

noteForm.addEventListener("submit", addNote);
