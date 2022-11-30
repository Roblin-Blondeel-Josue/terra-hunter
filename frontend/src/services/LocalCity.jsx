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
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=2&appid=11725dca25ab2ed2271b1c1aa5399493`
  );
  const city = response.data[0].name;
  return city;
}
export default async function GetLocalCity() {
  const position = await getCoords();
  const localCity = await getCity(position.latitude, position.longitude);
  return localCity;
}
