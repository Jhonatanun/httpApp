import './style.css'
import { UserApp } from './users/users_app';
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <h1>Hello Vite!</h1>
    <div class="card"></div>
  </div>
`
const element = document.querySelector('.card');

UserApp(element);

