import '../styles.css';
import { eventListeners } from "./addEvents.js";


document.addEventListener('DOMContentLoaded', ()=>{

  const form = document.querySelector('.navBar form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Just to stop form submission
  });

  eventListeners.searchEvent();
  eventListeners.unitSwitchEvent();
  
})