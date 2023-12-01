const button = document.querySelector('.botao-add')
const input = document.querySelector('.input-task')


let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    console.log(minhaListaDeItens)
}


button.addEventListener('click', adicionarNovaTarefa)