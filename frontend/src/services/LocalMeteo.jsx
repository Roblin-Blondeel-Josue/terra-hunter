import axios from "axios";

const weather = "11725dca25ab2ed2271b1c1aa5399493";
async function getCoords() {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const position = pos.coords;
  return position;
}
async function getMeteo(lat, long) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weather}`
  );
  const meteo = response.data.weather[0].main;
  return meteo;
}
export default async function GetLocalMeteo() {
  const position = await getCoords();
  const localMeteo = await getMeteo(position.latitude, position.longitude);
  return localMeteo;
}
