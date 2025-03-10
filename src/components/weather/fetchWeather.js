import weatherAPI from './weatherAPI';

const fetchWeather = async (setCurrentWeather, setError, setIsLoading) => {
  try {
    const responce = await fetch(
      'https://avsproject-back.onrender.com/get-location'
    );
    const data = await responce.json();
    const latitude = data[0];
    const longitude = data[1];
    const weather = await weatherAPI(longitude, latitude);
    setCurrentWeather(weather);
    setIsLoading(false);
  } catch (error) {
    setError('Sorry! We do not know where you are');
    setIsLoading(false);
  }
};

export default fetchWeather;
