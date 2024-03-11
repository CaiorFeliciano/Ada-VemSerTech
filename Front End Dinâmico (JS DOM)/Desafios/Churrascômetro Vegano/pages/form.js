export function form() {
    let root = document.getElementById('root')

    let container = document.createElement('div')
    container.classList.add('container')
    root.appendChild(container)

    let header = document.createElement('h1')
    header.textContent = 'Churrascômetro Vegano'
    container.appendChild(header)

    let calculator = document.createElement('div')
    calculator.classList.add('calculator')
    container.appendChild(calculator)

    let inputFormGroup = document.createElement('div')
    inputFormGroup.classList.add('row', 'input-form-group')
    calculator.appendChild(inputFormGroup)

    let headerForm = document.createElement('h1')
    headerForm.id = 'header-form'
    headerForm.textContent = 'Cadastre seu e-mail para receber promoções!'
    inputFormGroup.appendChild(headerForm)

    let form = document.createElement('form')
    inputFormGroup.appendChild(form)

    let nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'Digite seu nome'
    nameInput.classList.add('input-form')
    form.appendChild(nameInput)

    let emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.placeholder = 'Digite seu email'
    emailInput.classList.add('input-form')
    form.appendChild(emailInput)

    let cepInput = document.createElement('input')
    cepInput.type = 'number'
    cepInput.id = 'postal-code'
    cepInput.name = 'postalCode'
    cepInput.placeholder = 'Digite seu CEP'
    cepInput.classList.add('input-form')
    form.appendChild(cepInput)

    let consentInput = document.createElement('div')
    consentInput.id = 'consent-input'
    form.appendChild(consentInput)

    let consentCheckbox = document.createElement('input')
    consentCheckbox.type = 'checkbox'
    consentCheckbox.id = 'consent-checkbox'
    consentCheckbox.name = 'optIn'
    consentCheckbox.checked = true
    consentInput.appendChild(consentCheckbox)

    let consentLabel = document.createElement('label')
    consentLabel.htmlFor = 'consent-checkbox'
    consentLabel.id = 'consent-label'
    consentLabel.textContent = 'aceito receber e-mails com promoções'
    consentInput.appendChild(consentLabel)

    let row = document.createElement('div')
    row.classList.add('row')
    inputFormGroup.appendChild(row)

    let defaultButton = document.createElement('a')
    defaultButton.classList.add('default-button')
    defaultButton.textContent = 'Cadastrar'
    defaultButton.addEventListener('click', function (event) {
        event.preventDefault()

        if (nameInput.value == '') {
            alert('Por favor, preencha seu nome')
            nameInput.focus()
            return
        }

        if (emailInput.value == '') {
            alert('Por favor, preencha seu e-mail')
            emailInput.focus()
            return
        }

        if (!validarEmail(emailInput.value)) {
            alert('Formato de e-mail inválido')
            emailInput.focus()
            return
        }

        if (cepInput.value == '') {
            alert('Por favor, preencha seu CEP')
            cepInput.focus()
            return
        }

        //salvando os valores preenchidos nos campos
        localStorage.setItem('name', nameInput.value)
        localStorage.setItem('email', emailInput.value)
        localStorage.setItem('postalCode', PostalCodeInput.value)

        ValidarForm()
    })



    row.appendChild(defaultButton)

    let navContainer = document.createElement('div')
    navContainer.id = 'nav-container'
    inputFormGroup.appendChild(navContainer)

    let backNav = document.createElement('button')
    backNav.id = 'back-nav'
    backNav.textContent = 'Voltar'
    navContainer.appendChild(backNav)

    let skipRegister = document.createElement('button')
    skipRegister.id = 'skip-register'
    skipRegister.textContent = 'Pular'
    navContainer.appendChild(skipRegister)

    //pegar os valores preenchidos
    nameInput.value = localStorage.getItem('name')
    emailInput.value = localStorage.getItem('email')
    cepInput.value = localStorage.getItem('postalCode')

    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/ // pesquisei no google uma pequena validação
        return re.test(email)
    }

    async function ValidarForm() {

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const postalCodeInput = document.getElementById('postal-code');
        const consentCheckbox = document.getElementById('consent-checkbox');

        const formData = {
            email: emailInput.value,
            name: nameInput.value,
            postalCode: postalCodeInput.value,
            optIn: consentCheckbox.checked,
        };

        try {
            const response = await fetch('https://churrascometro-api.vercel.app/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                localStorage.setItem('formSubmitted', 'true');
                window.location.href = './index.html';
            } else {
                alert('Erro ao enviar os dados para a API. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
            alert('Erro ao enviar os dados para a API. Por favor, tente novamente.');
        }
    }


}