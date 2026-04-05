export async function getWeather(location, unit) {
  const res = await fetch(
    `http://localhost:3000/api/weather?location=${encodeURIComponent(location)}&unit=${unit}`
  );

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    const message = errBody.error || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return res.json();
}
