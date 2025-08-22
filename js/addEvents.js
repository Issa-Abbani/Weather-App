import { checkUnit , pickLocation} from "./userInput.js";
import { getWeather } from "./weatherService.js";
import { generateUI } from "./dynamic_UI.js";

export const eventListeners = (function (){
  let location = 'beirut';
  let unit = 'c';

  const searchEvent = ()=>{
    generateUI(location,unit);
    const searchBtn = document.querySelector('.search-btn');
    let lastLocation = location;
    searchBtn.addEventListener('click', ()=>{
     location = pickLocation() || location;
     if(lastLocation === location){
      return;
     }else{
      lastLocation = location
      generateUI(location, unit);
     }

    })
  }

  const unitSwitchEvent = ()=>{
    const checkbox = document.querySelector('#unitToggle');
    checkbox.addEventListener('change', ()=>{
      unit = checkUnit();
      generateUI(location,unit)
    })
  }


  return{searchEvent, unitSwitchEvent};
})();