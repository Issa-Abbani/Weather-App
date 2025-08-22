export async function getWeather(location, unit) {
  let unitType;
  if(unit === 'c'){
    unitType = "metric"; //Celsius, km/h, mm
  } else if (unit === 'f'){
    unitType = "us";  //Fahrenheit, mph, inches
  }

  try{
    const rawData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitType}&include=days%2Ccurrent&key=6ZPQS349JE8ZLYL5NYQSSM4A7&contentType=json&lang=id`);
    
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
    console.log(reqData); 
    // console.log(reqData);

    return reqData;
  }
  catch (e){
    alert('Location not available!');
    return null;
  }
}