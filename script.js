const textArea = document.getElementById('textAreaID');
const addNoteBtn = document.getElementById('addNoteButton');

const notesDiv = document.getElementById('notesDiv')

const para = document.createElement('p');
addNoteBtn.addEventListener('click', () => {
    if (!textArea.value) return;

    const divBox = document.createElement('div');
   

    divBox.classList.add('divNoteBox');
    para.innerText = textArea.value;
    
    divBox.append(para);
    notesDiv.append(divBox);

    const btnToModal = document.createElement('button');
    if (textArea.value.length > 25) {
        para.classList.add('cut-text');

        btnToModal.innerText = 'See more...';
        btnToModal.classList.add('btnToModal');
        divBox.append(btnToModal);
    
    }
    btnToModal.addEventListener('click', seeMoreBtn);
    clearText();
})



const clearText = () => {
    textArea.value = '';
}

const seeMoreBtn = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const closeX = document.querySelector('.close-modal');

    const modalContent = document.getElementById('modalContent');
    
    const noteText = document.getElementById('notesModal');
    noteText.innerText = para.innerText;

    modalContent.append(noteText);
    closeX.addEventListener('click', () => {
        modal.style.display = 'none';
    })

  
}

