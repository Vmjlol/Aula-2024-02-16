let list = (query) => {
  query = document.querySelector('#searchBar').innerText;
  console.log(query);
  if (query != ''){ 
    fetch(`https://restcountries.com/v3.1/name/${query}`)
    .then((response) => response.json())
    .then((data) => {
        let row = document.querySelector('.row')
        let newHTML = ``
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
          }
          row.innerHTML = newHTML;
      });
    
  } else {

    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
            let row = document.querySelector('.row')
            let newHTML = ``
            for (let i = 0; i < data.length; i++) {
                const country = data[i];
                // nome do país: country.translations.por.common
                // imagem do país: country.flags.png
                // desc imagem: country.flags.alt
                // flag: country.flag
                // região: country.region

                //  -- Novas Infos --
                //country.name.official
                //country.currencies
                //country.capital
                //country.languages
                //country.population
                //country.subregion

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
                  // console.log(country);
                  document.getElementById("officialName").innerText = `Nome oficial: ${country.name.official}`;
                  document.getElementById("currency").innerText = `Moeda: ${country.currencies}`;
                  document.getElementById("capital").innerText = `Capital: ${country.capital}`;
                  document.getElementById("languages").innerText = `Língua: ${country.languages}`;
                  document.getElementById("population").innerText = `População: ${country.population}`;
                  document.getElementById("subRegion").innerText = `SubRegião: ${country.subregion}`;

            }
            row.innerHTML = newHTML;
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



