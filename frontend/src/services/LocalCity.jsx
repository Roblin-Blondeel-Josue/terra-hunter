import axios from "axios";

async function getCoords() {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const position = pos.coords;
  return position;
}
async function getCity(lat, lon) {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=2&appid=1cc5285599050dc0e2f684b26fef2d7f`
  );
  const city = response.data[0].name;
  return city;
}
export default async function GetLocalCity() {
  const position = await getCoords();
  const localCity = await getCity(position.latitude, position.longitude);
  return localCity;
}
