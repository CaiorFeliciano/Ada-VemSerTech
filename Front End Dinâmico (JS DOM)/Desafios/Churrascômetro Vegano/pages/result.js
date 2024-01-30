export function result(Navegar) {
  const root = document.getElementById('root')

  const container = document.createElement('div')
  container.classList.add('container')
  root.appendChild(container)

  const h1 = document.createElement('h1')
  h1.textContent = 'Churrascômetro Vegano'
  container.appendChild(h1)

  const calculator = document.createElement('div')
  calculator.classList.add('calculator')
  container.appendChild(calculator)

  const h3 = document.createElement('h3')
  h3.textContent = 'Confira a lista para o seu churrasco vegano!'
  calculator.appendChild(h3)

  const resultTotalGuest = document.createElement('div')
  resultTotalGuest.classList.add('result-total-guest')
  calculator.appendChild(resultTotalGuest)

  const totalGuest = document.createElement('p')
  totalGuest.id = 'total-guest'
  totalGuest.textContent = '0 convidado'
  resultTotalGuest.appendChild(totalGuest)

  const guestListHomen = document.createElement('span')
  guestListHomen.classList.add('guest-list')
  guestListHomen.textContent = '0 Homens'
  resultTotalGuest.appendChild(guestListHomen)

  const guestListMulheres = document.createElement('span')
  guestListMulheres.classList.add('guest-list')
  guestListMulheres.textContent = '0 Mulheres'
  resultTotalGuest.appendChild(guestListMulheres)

  const guestListCriancas = document.createElement('span')
  guestListCriancas.classList.add('guest-list')
  guestListCriancas.textContent = '0 Crianças'
  resultTotalGuest.appendChild(guestListCriancas)

  const inputGroupResult = document.createElement('div')
  inputGroupResult.classList.add('input-group-result')
  calculator.appendChild(inputGroupResult)

  const headerResult = document.createElement('div')
  headerResult.id = 'header-result'
  inputGroupResult.appendChild(headerResult)

  const item = document.createElement('p')
  item.textContent = 'ITEM'
  headerResult.appendChild(item)

  const quantidade = document.createElement('p')
  quantidade.textContent = 'QUANTIDADE'
  headerResult.appendChild(quantidade)

  const ul = document.createElement('ul')
  ul.classList.add('results')
  inputGroupResult.appendChild(ul)

  const espetinho = document.createElement('li')
  const strong1 = document.createElement('strong')
  strong1.textContent = 'Espetinho Vegano'
  const span1 = document.createElement('span')
  span1.textContent = '0.000 kg'
  espetinho.appendChild(strong1)
  espetinho.appendChild(span1)
  ul.appendChild(espetinho)

  const paoDeAlho = document.createElement('li')
  const strong2 = document.createElement('strong')
  strong2.textContent = 'Pão de alho'
  const span2 = document.createElement('span')
  span2.textContent = '0 unidade'
  paoDeAlho.appendChild(strong2)
  paoDeAlho.appendChild(span2)
  ul.appendChild(paoDeAlho)

  const carvao = document.createElement('li')
  const strong3 = document.createElement('strong')
  strong3.textContent = 'Carvão'
  const span3 = document.createElement('span')
  span3.textContent = '0.000 kg'
  carvao.appendChild(strong3)
  carvao.appendChild(span3)
  ul.appendChild(carvao)

  const sal = document.createElement('li')
  const strong4 = document.createElement('strong')
  strong4.textContent = 'Sal'
  const span4 = document.createElement('span')
  span4.textContent = '0.000 kg'
  sal.appendChild(strong4)
  sal.appendChild(span4)
  ul.appendChild(sal)

  const gelo = document.createElement('li')
  const strong5 = document.createElement('strong')
  strong5.textContent = 'Gelo'
  const span5 = document.createElement('span')
  span5.textContent = '0.000 kg'
  gelo.appendChild(strong5)
  gelo.appendChild(span5)
  ul.appendChild(gelo)

  const refrigerante = document.createElement('li')
  const strong6 = document.createElement('strong')
  strong6.textContent = 'Refrigerante'
  const span6 = document.createElement('span')
  span6.textContent = '0.000 ml'
  refrigerante.appendChild(strong6)
  refrigerante.appendChild(span6)
  ul.appendChild(refrigerante)

  const agua = document.createElement('li')
  const strong7 = document.createElement('strong')
  strong7.textContent = 'Água'
  const span7 = document.createElement('span')
  span7.textContent = '0.000 ml'
  agua.appendChild(strong7)
  agua.appendChild(span7)
  ul.appendChild(agua)

  const row = document.createElement('div')
  row.classList.add('row')
  calculator.appendChild(row)

  const link = document.createElement('a')
  link.classList.add('default-button')
  link.textContent = 'Novo cálculo'
  link.addEventListener('click', function (event) {
      event.preventDefault();
      Navegar('home');
  })
  row.appendChild(link)

  // Pegando os valores do localStorage
  const homens = parseInt(localStorage.getItem('Homens'))
  const mulheres = parseInt(localStorage.getItem('Mulheres'))
  const criancas = parseInt(localStorage.getItem('Crianças'))
  const adultos = homens + mulheres


  totalGuest.textContent = `${homens + mulheres + criancas} convidados`

  guestListHomen.textContent = `${homens} Homens`
  guestListMulheres.textContent = `${mulheres} Mulheres`
  guestListCriancas.textContent = `${criancas} Crianças`

  espetinho.querySelector('span').textContent = `${((0.4 * homens) + (0.32 * mulheres) + (0.2 * criancas)).toFixed(2)} kg`
  paoDeAlho.querySelector('span').textContent = `${((2 * adultos) + (1 * criancas))} unidades`
  carvao.querySelector('span').textContent = `${(1 * (homens + mulheres + criancas))} kg`
  sal.querySelector('span').textContent = `${(0.04 * (homens + mulheres + criancas)).toFixed(2)} kg`
  gelo.querySelector('span').textContent = `${((5 * (homens + mulheres + criancas)) / 10).toFixed(1)} kg`
  refrigerante.querySelector('span').textContent = `${((2 * (homens + mulheres + criancas)) / 5).toFixed(3)} ml`
  agua.querySelector('span').textContent = `${((1 * (homens + mulheres + criancas)) / 5).toFixed(3)} ml`
}