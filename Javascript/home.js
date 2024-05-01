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

let lista = [
    {
        "numero": 1,
        "bloco": 2,
        "status": "Disponível",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 2,
        "bloco": 3,
        "status": "Ocupada",
        "tipo": "moto",
        "placa": "ABC-1234"
      },
      {
        "numero": 3,
        "bloco": 2,
        "status": "Disponível",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 4,
        "bloco": 2,
        "status": "Disponível",
        "tipo": "carro",
        "placa": ""
      },
      {
        "numero": 5,
        "bloco": 1,
        "status": "Ocupada",
        "tipo": "carro",
        "placa": "XYZ-5678"
      },
      {
        "numero": 6,
        "bloco": 1,
        "status": "Disponível",
        "tipo": "moto",
        "placa": ""
      },
      {
        "numero": 7,
        "bloco": 1,
        "status": "Ocupada",
        "tipo": "carro",
        "placa": "DEF-9876"
      }
]

function filtroDisponiveis(){
  let filtroDisponiveis = lista.filter((e)=> e.status == "Disponível")
  criaCard(filtroDisponiveis)

}

function filtroOcupadas(){
  let filtroOcupadas = lista.filter((e)=> e.status == "Ocupada")
  criaCard(filtroOcupadas)

}

function todas(){
  criaCard(lista)
}

let buttonOcupadas = document.getElementById('ocupadas')
let buttonDisponiveis = document.getElementById('disponiveis')
let buttonTodas = document.getElementById('todas')

buttonDisponiveis.onclick = filtroDisponiveis
buttonTodas.onclick = todas
buttonOcupadas.onclick = filtroOcupadas
