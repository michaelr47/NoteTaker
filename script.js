const textArea = document.getElementById('textAreaID');
const addNoteBtn = document.getElementById('addNoteButton');

const notesDiv = document.getElementById('notesDiv')
notesDiv.style.display = 'flex';
notesDiv.style.flexWrap = 'wrap';
notesDiv.style.margin = 10 + 'px';
notesDiv.style.padding = 5 + 'px';


addNoteBtn.addEventListener('click', () => {
    if (!textArea.value) return;
    // console.log(textArea.value.length);
   
    const div = document.createElement('div');
    div.classList.add('divNoteBox');
    div.innerText = textArea.value;
    notesDiv.append(div);

    if (textArea.value.length > 50) {

        const btnToModal = document.createElement('button');
        btnToModal.innerText = 'See more';
        btnToModal.classList.add('btnToModal');
        div.append(btnToModal);
    }

    clearText();
})

const clearText = () => {
    textArea.value = '';
}