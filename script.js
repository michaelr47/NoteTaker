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
    const closeX = document.querySelector('.close-modal');
    modal.style.display = 'block';
    
    closeX.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    // window.onclick(function () {
    //     modal.style.display = 'none';
    // })
    
}

