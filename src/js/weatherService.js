export async function getWeather(location, unit) {
  const res = await fetch(
    `https://weather-app-proxy-two.vercel.app/api/weather?location=${location}&unit=${unit}`
  );

  //Note that encoding and input sanitization is handled on the server side

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    const message = errBody.error || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return res.json();
}
