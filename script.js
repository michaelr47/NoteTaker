const textArea = document.getElementById('textAreaID');
const addNoteBtn = document.getElementById('addNoteButton');

const notesDiv = document.getElementById('notesDiv')
const emptyNote = document.getElementById('emptyNoteReminder');
emptyNote.style.display = 'none';

addNoteBtn.addEventListener('click', () => {
   
    if (!textArea.value)  {
        emptyNote.style.color = 'red';
        emptyNote.style.display = 'block';
        textArea.style.border = '1px solid red';
        textArea.style.animation = 'shake .4s 0s ease';
        return; 
      
    } 
    
    emptyNote.style.display = 'none';
    textArea.style.border = '1px solid black';

    const divBox = document.createElement('div');
    const para = document.createElement('p');
    para.style.wordBreak = 'breakAll';
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
    btnToModal.addEventListener('click', seeMoreBtn.bind(null, para));
    clearText();
})


const clearText = () => {
    textArea.value = '';
}

const seeMoreBtn = (para) => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const closeX = document.querySelector('.close-modal');

    const modalContent = document.getElementById('modalContent');
    
    const noteText = document.getElementById('notesModal');
    noteText.style.display = 'block';
    noteText.style.margin = '5px';
    noteText.innerText = para.innerText;

    modalContent.append(noteText);
    closeX.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
  
}

