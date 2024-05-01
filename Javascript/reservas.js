let  placaInput = document.getElementById('placa');
let proprietarioInput = document.querySelector('#proprietario');
let apartamentoInput = document.querySelector('#apartamento');
let blocoInput = document.querySelector('#bloco');
let corInput = document.querySelector('#cor');
let veiculoInput = document.querySelector('#veiculo');
let vagaInput = document.querySelector('#vaga');

const formReserva =  document.getElementById('formReserva');
const buttonCloseModal =  document.getElementById('buttonCloseModal');
const dialog =  document.querySelector('dialog');



const submit = (event) => {
    event.preventDefault(); 
    const placaValue = placaInput.value;
    const proprietarioValue = proprietarioInput.value;
    const apartamentoValue = apartamentoInput.value;
    const blocoValue = blocoInput.value;
    const corValue = corInput.value;
    const veiculoValue = veiculoInput.value;
    const vagaValue = vagaInput.value;

    console.log("Placa:", placaValue);
    console.log("Proprietário:", proprietarioValue);
    console.log("Apartamento:", apartamentoValue);
    console.log("Bloco:", blocoValue);
    console.log("Cor:", corValue);
    console.log("Veículo:", veiculoValue);
    console.log("Vaga:", vagaValue);

    dialog.showModal()

}

const closeModal = () => {
    dialog.close();
}

formReserva.onsubmit = submit;
buttonCloseModal.onclick = closeModal;
