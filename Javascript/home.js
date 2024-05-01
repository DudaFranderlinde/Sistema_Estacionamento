let lista = [
    {
        "numero": 1,
        "bloco": 2,
        "status": "disponivel",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 2,
        "bloco": 3,
        "status": "ocupado",
        "tipo": "moto",
        "placa": "ABC-1234"
      },
      {
        "numero": 3,
        "bloco": 2,
        "status": "disponivel",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 4,
        "bloco": 2,
        "status": "disponivel",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 5,
        "bloco": 1,
        "status": "ocupado",
        "tipo": "carro",
        "placa": "XYZ-5678"
      },
      {
        "numero": 6,
        "bloco": 1,
        "status": "disponivel",
        "tipo": "moto",
        "placa": ""
      },
      {
        "numero": 7,
        "bloco": 1,
        "status": "ocupado",
        "tipo": "carro",
        "placa": "DEF-9876"
      }
]

function criaCard(array){
    let agrupaCard = document.getElementById('agrupa-cards');
    agrupaCard.innerHTML = " "

    array.forEach(element => {
        let divItem = document.createElement('div')
        let vaga = document.createElement('h2') 
        let bloco = document.createElement('p')   
        let status = document.createElement('p')   
        let placa = document.createElement('p')   
        let tipo = document.createElement('p')   

        divItem.className ='div-card';
    
        vaga.textContent = `Vaga ${element.numero}`
        divItem.appendChild(vaga)

        bloco.textContent = `Bloco: ${element.bloco}`
        divItem.appendChild(bloco)

        status.textContent = `Status: ${element.status}`
        divItem.appendChild(status)

        if (element.placa == "") {
            placa.textContent = `Placa: N/A`
            divItem.appendChild(placa)
        }else {
            placa.textContent = `Placa: ${element.placa}`
            divItem.appendChild(placa)
        }

        tipo.textContent = `Tipo: ${element.tipo}`
        divItem.appendChild(tipo)

        agrupaCard.appendChild(divItem)
    });

}

criaCard(lista)