import { checkUnit , pickLocation} from "./userInput.js";
import { getWeather } from "./weatherService.js";

export const eventListeners = (function (){
  let location = 'beirut';
  let unit = 'c';

  const searchEvent = ()=>{
    getWeather(location,unit);
    const searchBtn = document.querySelector('.search-btn');
    let lastLocation = location
    searchBtn.addEventListener('click', ()=>{
     location = pickLocation() || location;
     if(lastLocation === location){
      return;
     }else{
      lastLocation = location
      getWeather(location, unit);
     }

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