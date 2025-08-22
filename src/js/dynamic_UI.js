import {getWeather} from "./weatherService.js";
import weatherIcons from "./getIcons.js";

export async function generateUI(location, unit) {
  const loader = document.querySelector('.loader');
  const body = document.querySelector('body');

  loader.style.display = 'block';
  body.style.pointerEvents = 'none';

  try {
    const data = await getWeather(location, unit);
    console.log('done');
    renderUI(data, unit);
  } 
  catch (err) {
    console.error('Failed to fetch weather:', err);
  } 
  finally {
    loader.style.display = 'none';
    body.style.pointerEvents = 'auto';
  }
}

function renderUI(data, unit){
  let speedUnit;
  let snowDepth;
  let tempType;
  if(unit === 'c'){
    tempType = "°C"; //Celsius, km/h, mm
    speedUnit = "km/h";
    snowDepth = "mm";
  } else if (unit === 'f'){
    tempType = "°F";  //Fahrenheit, mph, inches
    speedUnit = "mph"
    snowDepth = "inches";
  }

  renderNavBar(data, tempType);
  renderForecast(data, tempType);
  renderExtraInfo(data, snowDepth, speedUnit);
}


function renderNavBar(data, tempType){
  //sidebar UI
  const containerCurrent = document.querySelector('aside.current-conditions');
  containerCurrent.innerHTML = '';

  const headerToday = document.createElement('h1');
  headerToday.textContent = 'Today';

  const currentWeatherImg = document.createElement('img');
  currentWeatherImg.src = determineImg(data, -1);
  currentWeatherImg.loading = 'lazy';
  currentWeatherImg.alt = 'No Image';

  const locationInfo = document.createElement('h3');
  locationInfo.textContent = (data.resolvedAddress).split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ');

  const tempToday = document.createElement('h2');
  tempToday.textContent = `${data.currentConditions.temp} ${tempType}`;

  const currentDate = document.createElement('p');
  currentDate.textContent = formatDate(data.days[0].datetime).fullDate;

  const detailsDiv = document.createElement('div');

  const minTemp = document.createElement('p');
  const maxTemp = document.createElement('p');
  minTemp.textContent = `Minimum Temperature Today : ${data.days[0].tempmin} ${tempType} `;
  maxTemp.textContent = `Maximum Temperature Today : ${data.days[0].tempmax} ${tempType} `;

  detailsDiv.append(minTemp,maxTemp)

  //appending sidebar
  containerCurrent.append(headerToday,currentWeatherImg, locationInfo, tempToday, currentDate, detailsDiv);
}

function renderForecast(data, tempType){
  const forecastCont = document.querySelector('.forecasts');
  forecastCont.innerHTML = '';

  for(let i = 0; i < 7; i++){
    // Create the container div
    const div = document.createElement("div");
    div.className = "day-mini-forecast";

    // Create the day label
    const h3 = document.createElement("h3");
    h3.textContent = formatDate(data.days[i].datetime).dayName;

    // Create the icon
    const img = document.createElement("img");
    img.src = determineImg(data, i);
    img.loading = "lazy";

    // Create the temperature span
    const span = document.createElement("span");
    span.textContent = `${data.days[i].temp} ${tempType}`;

    div.append(h3, img, span);
    forecastCont.append(div);
  }

}

function renderExtraInfo(data, Depth, speedUnit){
  const infoObj = [
    {
      title: 'Wind Speed',
      value: data.currentConditions.windspeed,
      icon: weatherIcons.air,
      unit: speedUnit
    },
    {
      title: 'Snow Depth',
      value: data.currentConditions.snowdepth,
      icon: weatherIcons.flake,
      unit: Depth
    },
    {
      title: 'Humidity',
      value: data.currentConditions.humidity,
      icon: weatherIcons.humid,
      unit: '%'
    }
  ]


  const extraCont = document.querySelector('.info-box-container');
  extraCont.innerHTML = '';

  infoObj.forEach(obj =>{
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';

    const h3 = document.createElement('h3');

    const title = document.createElement('span');
    const icon = document.createElement('img');
    title.textContent = obj.title;
    icon.src = obj.icon;
    icon.loading = 'lazy';
    icon.alt = 'image not found';
    
    h3.append(title, icon);

    const value = document.createElement('span');
    if(!obj.unit){
      value.textContent = obj.value;
    }else{
      value.textContent = `${obj.value} ${obj.unit}`;
    }
    

    infoBox.append(h3, value);
    extraCont.append(infoBox);
  })

}

function determineImg(data, idx){
  //determine time of day
  let imgSrc;
  let timeStat;
  let weatherState;
  const now = new Date();
  const hours = now.getHours();

  if(idx === -1){ //when we are getting current time
    if(hours > 6 && hours < 19){
      timeStat = 'day';
    }else{
      timeStat = 'night';
    }
    weatherState = data.currentConditions.icon;
  }else{
    timeStat = 'day' //default for the rest of the days
    weatherState = data.days[idx].icon;
  }

  if(weatherState.includes('clear')){
    if(timeStat === 'day'){
      imgSrc = weatherIcons.clearDay;
    }else{
      imgSrc = weatherIcons.clearNight;
    }
  } else if(weatherState.includes('cloudy')){
    if(timeStat === 'day'){
      imgSrc = weatherIcons.cloudyDay;
    }else{
      imgSrc = weatherIcons.cloudyNight;
    }
  } else if(weatherState.includes('fog')){
    imgSrc = weatherIcons.fog
  } else if (weatherState.includes('rain') || weatherState.includes('showers')) {
    imgSrc = weatherIcons.rain;
  } else if (weatherState.includes('snow')) {
    imgSrc = weatherIcons.snow;
  } else if (weatherState.includes('thunder')) {
    imgSrc = weatherIcons.thunder;
  } else if (weatherState.includes('wind')) {
    imgSrc = weatherIcons.wind;
  } else {
    // fallback icon if something unexpected appears
    imgSrc = weatherIcons.clearDay;
  }

  return imgSrc;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const fullDate = `${dayName} ${monthName} ${day} ${year}`

  return {dayName, fullDate};
}