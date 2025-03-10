import queryString from 'query-string';

const weatherAPI = async (long, lat) => {
  const getTimelineURL = 'https://api.tomorrow.io/v4/timelines';

  // get your key from app.tomorrow.io/development/keys
  const apikey = 'YQfj9nktJCc9GVizetx9P6tE04ZgBDR9';

  // pick the location, as a latlong pair
  let location = [long, lat];

  // list the fields
  const fields = ['windSpeed', 'temperature'];

  // choose the unit system, either metric or imperial
  const units = 'metric';

  // set the timesteps, like "current", "1h" and "1d"
  const timesteps = ['current'];

  // navigator.geolocation.getCurrentPosition(locationSuccess, locationError);

  // request the timelines with all the query string parameters as options
  const getTimelineParameters = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
    },
    { arrayFormat: 'comma' }
  );

  try {
    const response = await fetch(getTimelineURL + '?' + getTimelineParameters, {
      method: 'GET',
      compress: true,
    });
    const weather = await response.json();
    return weather.data.timelines[0].intervals[0].values;
  } catch (error) {
    throw new Error(error);
  }
};

export default weatherAPI;
