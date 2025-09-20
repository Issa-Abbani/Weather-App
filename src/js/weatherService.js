export async function getWeather(location, unit) {
  let unitType;
  if(unit === 'c'){
    unitType = "metric"; //Celsius, km/h, mm
  } else if (unit === 'f'){
    unitType = "us";  //Fahrenheit, mph, inches
  }

  try{
    const rawData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitType}&include=days%2Ccurrent&key=8CG2C6Y83FJ8YHD3RHZ79XVL8&contentType=json&lang=id`);

    if(!rawData.ok){
      alert("API rate limit reached. Please wait a bit before retrying.");
      return;
    }
    
    const jsonData = await rawData.json();

    if (!jsonData.address || !jsonData.currentConditions || !jsonData.days) {
      alert('Location not available!');
      return null;
    }

    const reqData = {
      address: jsonData.address,
      currentConditions: jsonData.currentConditions,
      days: jsonData.days,
      resolvedAddress: jsonData.resolvedAddress
    }   

    return reqData;
  }
  catch (e){
    alert('Location not available!');
    return null;
  }
}