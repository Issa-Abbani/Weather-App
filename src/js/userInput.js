export function checkUnit(){
  const checkbox = document.querySelector('#unitToggle');
  let unit;
  if(checkbox.checked){
    unit = 'f';
  }else{
    unit = 'c';
  }
  return unit;
}

export function pickLocation(){
  const searchBar = document.querySelector('.navBar form input');
  if(searchBar.value === ''){
    return;
  }
  
  const location = searchBar.value.trim().toLowerCase().replace(/\s+/g, '');

  searchBar.value = '';

  return location;
}