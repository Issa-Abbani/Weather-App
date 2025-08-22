import { weatherIcons } from "./getIcons.js";
import { getWeather } from "./weatherService.js";

export async function generateUI(location, unit) {
    const data = await getWeather(location, unit);
    console.log('done');
}