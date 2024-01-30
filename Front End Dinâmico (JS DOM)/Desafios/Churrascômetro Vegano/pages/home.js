export function home(Navegar) {
    let root = document.getElementById('root')

    let container = document.createElement('div')
    container.className = 'container'
    root.appendChild(container)

    let h1 = document.createElement('h1')
    h1.innerHTML = 'Churrascômetro Vegano'
    container.appendChild(h1)

    let calculator = document.createElement('div')
    calculator.className = 'calculator'
    container.appendChild(calculator)

    let h3 = document.createElement('h3')
    h3.innerHTML = 'Precisa de uma ajudinha com o churrasco vegano? <br><br> Quantas pessoas vão participar?'
    calculator.appendChild(h3)

    let counters = document.createElement('div')
    counters.className = 'counters'
    calculator.appendChild(counters)

    function criarCounter
        (labelTexto, id) {
        let counter = document.createElement('div')
        counter.className = 'counter'

        let label = document.createElement('label')
        label.htmlFor = id
        label.innerHTML = labelTexto
        counter.appendChild(label)

        let input = document.createElement('input')
        input.type = 'number'
        input.id = id
        input.value = '0'
        counter.appendChild(input)

        let buttongroup = document.createElement('div')
        buttongroup.className = 'button-group'
        counter.appendChild(buttongroup)

        let diminuirBotao = document.createElement('button')
        diminuirBotao.className = 'input-group__button--small'
        diminuirBotao.textContent = '-'
        diminuirBotao.addEventListener('click', function () {
            input.value = Math.max(parseInt(input.value) - 1, 0)
        })
        buttongroup.appendChild(diminuirBotao)


        let aumentarBotao = document.createElement('button')
        aumentarBotao.className = 'input-group__button--small'
        aumentarBotao.textContent = '+'
        aumentarBotao.addEventListener('click', function () {
            input.value = parseInt(input.value) + 1
        })
        buttongroup.appendChild(aumentarBotao)


        return counter
    }

    counters.appendChild(criarCounter('Homens', 'Homens'))
    counters.appendChild(criarCounter('Mulheres', 'Mulheres'))
    counters.appendChild(criarCounter('Crianças', 'Crianças'))

    let row = document.createElement('div')
    row.className = 'row'
    calculator.appendChild(row)


    let calcular = document.createElement('a')
    calcular.className = 'default-button'
    calcular.textContent = 'Calcular'
    calcular.addEventListener('click', function () {
        localStorage.setItem('Homens', document.getElementById('Homens').value)
        localStorage.setItem('Mulheres', document.getElementById('Mulheres').value)
        localStorage.setItem('Crianças', document.getElementById('Crianças').value)

        Navegar('result')
    })
    row.appendChild(calcular)

}