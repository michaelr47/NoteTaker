const textArea = document.getElementById('textAreaID');
const addNoteBtn = document.getElementById('addNoteButton');

const notesDiv = document.getElementById('notesDiv')


addNoteBtn.addEventListener('click', () => {
    if (!textArea.value) return;

    const divBox = document.createElement('div');
    const para = document.createElement('p');

    divBox.classList.add('divNoteBox');
    para.innerText = textArea.value;
    
    divBox.append(para);
    notesDiv.append(divBox);

    if (textArea.value.length > 25) {
        const btnToModal = document.createElement('button');
        btnToModal.innerText = 'See more...';
        btnToModal.classList.add('btnToModal');
        divBox.append(btnToModal);

        para.classList.add('cut-text');
    }

    clearText();
})

const clearText = () => {
    textArea.value = '';
}

const seeMoreBtn = () => {
    let body = document.body;
    const modalBox = document.createElement('div');

    body.classList.add('modal');
    modalBox.classList.add('modalContent');
    modalBox.append(textArea.value);
}
// seeMoreBtn()
