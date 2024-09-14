//  گرفتمl ocalStorage از   
document.addEventListener('DOMContentLoaded', loadNotes);  


document.getElementById('add-button').addEventListener('click', addNote);  

function addNote() {  
    const noteInput = document.getElementById('note-input');  
    const noteText = noteInput.value.trim();  

    if (noteText) {  
        createNoteElement(noteText);  
        saveNoteToLocalStorage(noteText);  
        noteInput.value = ''; // پاک کردن متن  
    } else {  
        alert("Please enter a note!");  
    }  
}  




function createNoteElement(noteText) {  
       const notesList = document.getElementById('notes-list');  
    const noteDiv = document.createElement('div');  
    noteDiv.className = 'note';  
    noteDiv.innerHTML = `  
        <span>${noteText}</span>  
        <button class="delete-btn" onclick="deleteNote(this)">  
            <i class="fas fa-trash"></i> <!-- Trash icon -->  
        </button>  
    `;  
    notesList.appendChild(noteDiv);  
}  

function saveNoteToLocalStorage(note) {  
    const notes = JSON.parse(localStorage.getItem('notes')) || [];  
    notes.push(note);  
    localStorage.setItem('notes', JSON.stringify(notes));  
}  

function loadNotes() {  
    const notes = JSON.parse(localStorage.getItem('notes')) || [];  
    notes.forEach(noteText => {  
        createNoteElement(noteText);  
    });  
}  

function deleteNote(button) {  
    const noteDiv = button.parentElement;  
    const noteText = noteDiv.querySelector('span').textContent;  
    removeNoteFromLocalStorage(noteText);  
    noteDiv.remove();  
}  

function removeNoteFromLocalStorage(noteText) {  
    let notes = JSON.parse(localStorage.getItem('notes')) || [];  
    notes = notes.filter(note => note !== noteText); 
    localStorage.setItem('notes', JSON.stringify(notes)); // سیو شدن در localstorage
}