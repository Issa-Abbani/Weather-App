import { checkUnit , pickLocation } from "./userInput.js";
import { generateUI } from "./dynamic_UI.js";
import { storage } from "./localStorage.js";

export const eventListeners = (function () {
  let userData = {
    loc: 'beirut',
    unit: 'c'
  };

  const saved = storage.loadUserData();
  if (saved) {
    userData.loc = saved.loc;
    userData.unit = saved.unit;
  }else{
    userData.loc = 'beirut';
    userData.unit = 'c';
  }
  

  const searchEvent = () => {
    generateUI(userData.loc, userData.unit);
    const searchBtn = document.querySelector('.search-btn');
    let lastLocation = userData.loc;

    searchBtn.addEventListener('click', () => {
      const newLoc = pickLocation() || userData.loc;
      if (newLoc === lastLocation) return;

      userData.loc = newLoc;
      lastLocation = newLoc;
      storage.saveUserData(userData);
      generateUI(userData.loc, userData.unit);
    });
  };

  const unitSwitchEvent = () => {
    const checkbox = document.querySelector('#unitToggle');
    checkbox.addEventListener('change', () => {
      userData.unit = checkUnit();
      storage.saveUserData(userData);
      generateUI(userData.loc, userData.unit);
    });
  };

  return { searchEvent, unitSwitchEvent };
})();
