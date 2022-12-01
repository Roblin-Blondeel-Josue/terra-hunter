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
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=b58f81d072744b5d8e4cb63709868c08`
  );
  const { city } = response.data.features[0].properties;
  return city;
}
export default async function GetLocalCity() {
  const position = await getCoords();
  const localCity = await getCity(position.latitude, position.longitude);
  return localCity;
}
