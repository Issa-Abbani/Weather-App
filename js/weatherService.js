export async function getWeather(location, unit) {
  let unitType;
  if(unit === 'c'){
    unitType = "metric"; //Celsius, km/h, mm
  } else if (unit === 'f'){
    unitType = "us";  //Fahrenheit, mph, inches
  }

  try{
    const rawData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitType}&include=days%2Ccurrent&key=6ZPQS349JE8ZLYL5NYQSSM4A7&contentType=json`);
    
    const jsonData = await rawData.json();

    const reqData = {
      address: jsonData.address,
      currentConditions: jsonData.currentConditions,
      days: jsonData.days
    }
    console.log(reqData);

    return reqData;
  }
  catch (e){
    console.log(`Error ${e}`);
    return null;
  }
}