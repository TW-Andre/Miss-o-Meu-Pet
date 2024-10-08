//SELECIONA ELEMENTOS HTML
const row = document.querySelector(".row");
const addItem = document.querySelector(".add-item");

const getPetName = document.querySelector('#petInputName')
const getPetDescription = document.querySelector('#petInputDescription')
const gettutorName = document.querySelector('#tutorName')
const getPhone = document.querySelector('#phone')
const getLastAdress = document.querySelector('#lastAdress')
const getPetImage = document.querySelector('#petFileImage')

//FUNÇÃO CALLBACK PARA ADICIONAR ITENS AO CARD
addItem.addEventListener('click', (e) => {
    if (e.target.className === 'addItemBtn') {
        addCardContent();
    }
})
//FUNC QUE ADICIONAD ITEMS AO CARD
function addCardContent() {

    let newCardNamePet = document.createElement('h4'); // Criação dos elementos no HTML
    let newContainer = document.createElement('div');
    let newCard = document.createElement('div');
    let newCardDescription = document.createElement('p')
    let newCardTutorName= document.createElement('p');
    let newCardPhone= document.createElement('p');
    let newCardAdress= document.createElement('p');
    let newImg = document.createElement('img');
    
    let reader = new FileReader();

    reader.onload = function() {  // Func para ler a imagem do input, transforma o src da imagem no URL obtido pelo input
        var dataURL = reader.result;
        newImg.src = dataURL;
    }
    reader.readAsDataURL(getPetImage.files[0]); // Le o primeiro arquivo selecionado


    newCard.className = 'card col'; // Atribuição das classes
    newContainer.className = 'container';
   

    newCardNamePet.textContent = getPetName.value;  // Preenchimento do contéudo dos cards

    let descriptionLabel = document.createElement('strong');  // Preenchimento do contéudo dos cards concatenando com uma descrição
    descriptionLabel.textContent = 'Descrição: ';
    newCardDescription.appendChild(descriptionLabel);
    newCardDescription.appendChild(document.createTextNode(getPetDescription.value));

    let tutorNameLabel = document.createElement('strong');
    tutorNameLabel.textContent = 'Tutor: ';
    newCardTutorName.appendChild(tutorNameLabel);
    newCardTutorName.appendChild(document.createTextNode(gettutorName.value));

    let phoneLabel = document.createElement('strong');
    phoneLabel.textContent = 'Contato: ';
    newCardPhone.appendChild(phoneLabel);
    newCardPhone.appendChild(document.createTextNode(getPhone.value));

    let adressLabel = document.createElement('strong');
    adressLabel.textContent = 'Ultima localização do pet: ';
    newCardAdress.appendChild(adressLabel);
    newCardAdress.appendChild(document.createTextNode(getLastAdress.value));

    newContainer.appendChild(newCardNamePet); // Contrução da estrutura do card
    newCard.appendChild(newImg);
    newCard.appendChild(newContainer);
    newContainer.appendChild(newCardDescription);
    newContainer.appendChild(newCardTutorName);
    newContainer.appendChild (newCardPhone);
    newContainer.appendChild (newCardAdress);
    

    row.appendChild(newCard); //Adiciona card a DOM

    getPetName.value = '';  //Limpa os elementos
    getPetDescription.value = '';
    gettutorName.value = '';
    getPhone.value = '';
    getLastAdress.value = '';
    getPetImage.value = '';

}


var ele = $('#form');
$('#down').on('click', function() {
  $('html, body').animate({
    scrollTop: ele.offset().top
  }, 700);
});