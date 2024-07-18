export const mainList = {
  nameConfig: {
    temp: "Temperature",
    feels_like: "Feels Like",
    temp_min: "Minimum Temperature",
    temp_max: "Maximum Temperature",
    pressure: "Pressure",
    sea_level: "Sea Level Pressure",
    grnd_level: "Ground Level Pressure",
    humidity: "Humidity",
    temp_kf: "Temperature Factor",
  },
  valueConfig: {
    temp: (value: string | number) => `${value}°C`,
    feels_like: (value: string | number) => `${value}°C`,
    temp_min: (value: string | number) => `${value}°C`,
    temp_max: (value: string | number) => `${value}°C`,
    pressure: (value: string | number) => `${value}hPa`,
    sea_level: (value: string | number) => `${value}hPa`,
    grnd_level: (value: string | number) => `${value} m`,
    humidity: (value: string | number) => `${value}%`,
    temp_kf: (value: string | number) => `${value}`,
  },
};
