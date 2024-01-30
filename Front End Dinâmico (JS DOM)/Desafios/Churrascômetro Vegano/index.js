// index.js
import { home } from './pages/home.js';
import { form } from './pages/form.js';
import { result } from './pages/result.js';
export 

// index.js
const pages = {
    home: home,
    form: form,
    result: result
}

async function Navegar(pageName) {
    const root = document.getElementById('root')
    root.innerHTML = ''
    await new Promise(resolve => setTimeout(resolve, 500)) 
    pages[pageName](Navegar)
}

//verificação se o usuário preencheu o form
if (localStorage.getItem('name') == null) {
    Navegar('form')
} else {
    Navegar('home')
}

