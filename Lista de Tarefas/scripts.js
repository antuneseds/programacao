const button = document.querySelector('.botao-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list')


let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((tarefa) => {
        novaLi = novaLi + `

        <li class="task" >
            <img src="./img/check.png" alt="check">
            <p>${tarefa}</p>
            <img src="./img/lixeira.png" alt="lixeira">
        </li>

         `
    }) 

    listaCompleta.innerHTML = novaLi

}


button.addEventListener('click', adicionarNovaTarefa)