export const petList = [
   {
      'name' : 'Fred',
      'description' : 'Cachorro macho preto sem raça definida',
      'img' : '../Images/dog3.jpg',
      'tutor': 'Tomás Ferreira Costa',
      'phone':'(55) 2510-1082',
      'adress': 'Rua Fábio Carneiro Lima, 395, bairro Sarandi,Porto Alegre-RS'
   },
   {
      'name' : 'Thomas',
      'description' : 'Cachorro macho da raça Akita, se perdeu no bairro Belém Velho no dia 25 de Abril',
      'img' : `../Images/dog4.jpg`,
      'tutor': 'Ryan Barbosa Carvalho',
      'phone':'(54) 2796-1143',
      'adress': 'Rua Giácomo Muttoni, 255, Bairro Belém Velho, Porto Alegre-RS '
   },
   {
      'name' : 'Lucy',
      'description' : 'Gatinha pulou do barco durante resgate, nadou pra uma casa mas nao foi localizada ',
      'img' : '../Images/cat2.jpg',
      'tutor': 'Rafaela Melo Barros',
      'phone': '(51) 2746-3126',
      'adress':'Rua Santa Catarina, 105, Bairro Mathias Velho, Canoas-RS'
   }
]

export const showPreviewInitialPage = (elementId, petArray) => {
   window.addEventListener('load', () => {
      let numId = 1
      
      petArray.forEach(pet => {
             
         elementId.innerHTML += `
               <div class="card card-item mx-3 my-3" id="divCard" style="width: 18rem;">
                  <img src="${pet.img}" class="card-img-top object-fit-cover petCardImage" id="petCardImage${numId}" alt="...">
                  <div class="card-body">
                  <h5 class="card-title petsNameCard" id="cardPetName${numId}">${pet.name}</h5>
                  <p class="card-text petsCardDescription" id="cardPetDescription${numId}"><strong>Descrição:</strong> ${pet.description}</p>
                  <p class="card-text petsCardtutorName" id="cardTutorName${numId}"><strong>Tutor:</strong> ${pet.tutor}</p>
                  <p class="card-text  petsCardPhone" id="cardPhone${numId}"><strong>Contato:</strong> ${pet.phone}</p>
                  <p class="card-text  petsCardLastAdress" id="cardLastAdress${numId}"><strong>Ultima localização do pet:</strong> ${pet.adress}</p>
                  </div>
               </div> `;
               numId++
            })
   }
   )
}