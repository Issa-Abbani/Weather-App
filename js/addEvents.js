import { checkUnit , pickLocation} from "./userInput.js";
import { getWeather } from "./weatherService.js";

export const eventListeners = (function (){
  let location = 'newyork';
  let unit = 'c';

  const searchEvent = ()=>{
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', ()=>{
     location = pickLocation();
     getWeather(location, unit);
    })
  }

  const unitSwitchEvent = ()=>{
    const checkbox = document.querySelector('#unitToggle');
    checkbox.addEventListener('change', ()=>{
      unit = checkUnit();
      getWeather(location,unit)
    })
  }


  return{searchEvent, unitSwitchEvent};
})();