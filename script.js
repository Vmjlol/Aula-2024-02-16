let list = () => {

    // document.querySelector('#searchBar').value;
    let query = document.querySelector('#searchBar').value;
    console.log(query);
    document.querySelector('#searchBar').addEventListener('submit', (event) => {
        event.preventDefault();
    })
    if (query != '') {

        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then((response) => response.json())
            .then((data) => {
                let row = document.querySelector('.row')
                let modalInfo = document.querySelector('.modal');
                let newHTML = ``
                let newModalHTML = ``;
                for (let i = 0; i < data.length; i++) {
                    const country = data[i];

                    newHTML += `
            <div class="col-4" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#countryExInfo">
                <div class="card">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${country.translations.por.common}</h5>
                         <p class="card-text m-0">
                         Bandeira: ${country.flag}
                         <p class="card-text">
                         Região: ${country.region}
                         </p>
                    </div>
                </div>
            </div>            
            `;


            newModalHTML += `
            <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="countryExInfoLabel">Dados extras</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <p class="">Nome oficial: ${country.translations.por.official}</p>
                  <p>Começo de semana (inglês): ${country.startOfWeek}</p>
                  <p>Capital: ${country.capital}</p>
                  <p>Área: ${country.area}</p>
                  <p>População: ${country.population}</p>
                  <p>SubRegião: ${country.subregion}</p>
              </div>
            </div>
          </div>
            `;
                    console.log(country);
                }
                row.innerHTML = newHTML;
                modalInfo.innerHTML = newModalHTML;
            });

    } else {

        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                let row = document.querySelector('.row')
                let modalInfo = document.querySelector('.modal');
                let newHTML = ``
                let newModalHTML = ``;
                for (let i = 0; i < data.length; i++) {
                    let country = data[i];

                    newHTML += `
                <div class="col-4" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#countryExInfo">
                    <div class="card">
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                             <h5 class="card-title">${country.translations.por.common}</h5>
                             <p class="card-text m-0">
                             Bandeira: ${country.flag}
                             <p class="card-text">
                             Região: ${country.region}
                             </p>
                        </div>
                    </div>
                </div>
                `;

                newModalHTML += `
                <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="countryExInfoLabel">Dados extras</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <p class="">Nome oficial: ${country.translations.por.official}</p>
                      <p>Começo de semana (inglês): ${country.startOfWeek}</p>
                      <p>Capital: ${country.capital}</p>
                      <p>Área: ${country.area}</p>
                      <p>População: ${country.population}</p>
                      <p>SubRegião: ${country.subregion}</p>
                  </div>
                </div>
              </div>
                `;
                    console.log(country);
                }
                row.innerHTML = newHTML;
                modalInfo.innerHTML = newModalHTML;
            });
    }

}


// let pesquisar = () => {
// const form = document.querySelector('form');
// let searchInput = document.querySelector('#searchBar');
// let searchResults = document.querySelector('.row');

// form.addEventListener("submit", (event) => { //submit pra 'enter', 'change' para nada
//     event.preventDefault();

//     // Obter o valor do campo de entrada
//     const query = searchInput.value;

//     // Enviar a solicitação para o servidor
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://restcountries.com/v3.1/name/${query}`, true);

//     xhr.onload = function() {
//       if (this.status === 200) {
//         const results = JSON.parse(this.responseText);

//         // Limpar os resultados anteriores
//         searchResults.innerHTML = '';

//         // Exibir os novos resultados
//         results.forEach(function(result) {
//           const div = document.createElement('div');
//           div.innerHTML = `
//           <div class="col-4">
//                 <div class="card">
//                 <img src="${result.flags.png}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                          <h5 class="card-title">${result.translations.por.common}</h5>
//                          <p class="card-text m-0">
//                          Bandeira: ${result.flag}
//                          <p class="card-text">
//                          Região: ${result.region}
//                          </p>
//                     </div>
//                 </div>
//             </div>
//           `;
//           searchResults.appendChild(div);
//         });
//       }
//     }

//     xhr.send();
//   });
// // }
list();



