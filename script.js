const textArea = document.getElementById('textAreaID');
const addNoteBtn = document.getElementById('addNoteButton');

const notesDiv = document.getElementById('notesDiv')
notesDiv.style.display = 'flex';
notesDiv.style.flexWrap = 'wrap';
notesDiv.style.margin = 10 + 'px';
notesDiv.style.padding = 5 + 'px';


addNoteBtn.addEventListener('click', () => {
    if (!textArea.value) return;
    const div = document.createElement('div');
    div.style.width = 200 + 'px';
    div.style.height = 100 + 'px';
    div.style.border = 1 + 'px solid gray';
    div.style.margin = 10 + 'px';
    div.style.wordBreak = 'break-word';
    div.innerText = textArea.value;
    notesDiv.append(div);
    clearText();
})

const clearText = () => {
    textArea.value = '';
}