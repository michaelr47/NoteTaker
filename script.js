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
    console.log(notesDiv);
    const divModal = document.createElement('div');
    
    divModal.classList.add('modal');

    const modalBox = document.createElement('div');
    const buttonX = document.createElement('button');
    buttonX.innerText = 'X';
    buttonX.style.position = 'absolute';
    buttonX.style.top = '5px';
    buttonX.style.right = '5px';
    buttonX.addEventListener('click', () => {
        divModal.style.display = 'none';
    })
    modalBox.classList.add('modalContent');
    
    const p = document.createElement('p');
    p.innerText = para.innerText; // NEEDS TO BE P TAG VALUE IN DIVBOX
    
    modalBox.append(buttonX, p);

    divModal.append(modalBox);
    document.body.appendChild(divModal);
}

