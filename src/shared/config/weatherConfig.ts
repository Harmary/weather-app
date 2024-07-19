import sunny from 'src/shared/assets/icons/01d.svg';
import cloudy from 'src/shared/assets/icons/02d.svg';
import cloudy2 from 'src/shared/assets/icons/03d.svg';
import cloudy3 from 'src/shared/assets/icons/04d.svg';
import rainy from 'src/shared/assets/icons/09d.svg';
import thunderstorm from 'src/shared/assets/icons/11d.svg';
import snow from 'src/shared/assets/icons/13d.svg';
import mist from 'src/shared/assets/icons/50d.svg';

export const weatherConditions = [
    { code: 200, name: 'Thunderstorm', description: 'thunderstorm with light rain', icon: thunderstorm },
    { code: 201, name: 'Thunderstorm', description: 'thunderstorm with rain', icon: thunderstorm },
    { code: 202, name: 'Thunderstorm', description: 'thunderstorm with heavy rain', icon: thunderstorm },
    { code: 210, name: 'Thunderstorm', description: 'light thunderstorm', icon: thunderstorm },
    { code: 211, name: 'Thunderstorm', description: 'thunderstorm', icon: thunderstorm },
    { code: 212, name: 'Thunderstorm', description: 'heavy thunderstorm', icon: thunderstorm },
    { code: 221, name: 'Thunderstorm', description: 'ragged thunderstorm', icon: thunderstorm },
    { code: 230, name: 'Thunderstorm', description: 'thunderstorm with light drizzle', icon: thunderstorm },
    { code: 231, name: 'Thunderstorm', description: 'thunderstorm with drizzle', icon: thunderstorm },
    { code: 232, name: 'Thunderstorm', description: 'thunderstorm with heavy drizzle', icon: thunderstorm },
    { code: 300, name: 'Drizzle', description: 'light intensity drizzle', icon: rainy },
    { code: 301, name: 'Drizzle', description: 'drizzle', icon: rainy },
    { code: 302, name: 'Drizzle', description: 'heavy intensity drizzle', icon: rainy },
    { code: 310, name: 'Drizzle', description: 'light intensity drizzle rain', icon: rainy },
    { code: 311, name: 'Drizzle', description: 'drizzle rain', icon: rainy },
    { code: 312, name: 'Drizzle', description: 'heavy intensity drizzle rain', icon: rainy },
    { code: 313, name: 'Drizzle', description: 'shower rain and drizzle', icon: rainy },
    { code: 314, name: 'Drizzle', description: 'heavy shower rain and drizzle', icon: rainy },
    { code: 321, name: 'Drizzle', description: 'shower drizzle', icon: rainy },
    { code: 500, name: 'Rain', description: 'light rain', icon: rainy },
    { code: 501, name: 'Rain', description: 'moderate rain', icon: rainy },
    { code: 502, name: 'Rain', description: 'heavy intensity rain', icon: rainy },
    { code: 503, name: 'Rain', description: 'very heavy rain', icon: rainy },
    { code: 504, name: 'Rain', description: 'extreme rain', icon: rainy },
    { code: 511, name: 'Rain', description: 'freezing rain', icon: snow },
    { code: 520, name: 'Rain', description: 'light intensity shower rain', icon: rainy },
    { code: 521, name: 'Rain', description: 'shower rain', icon: rainy },
    { code: 522, name: 'Rain', description: 'heavy intensity shower rain', icon: rainy },
    { code: 531, name: 'Rain', description: 'ragged shower rain', icon: rainy },
    { code: 600, name: 'Snow', description: 'light snow', icon: snow },
    { code: 601, name: 'Snow', description: 'snow', icon: snow },
    { code: 602, name: 'Snow', description: 'heavy snow', icon: snow },
    { code: 611, name: 'Snow', description: 'sleet', icon: snow },
    { code: 612, name: 'Snow', description: 'light shower sleet', icon: snow },
    { code: 613, name: 'Snow', description: 'shower sleet', icon: snow },
    { code: 615, name: 'Snow', description: 'light rain and snow', icon: snow },
    { code: 616, name: 'Snow', description: 'rain and snow', icon: snow },
    { code: 620, name: 'Snow', description: 'light shower snow', icon: snow },
    { code: 621, name: 'Snow', description: 'shower snow', icon: snow },
    { code: 622, name: 'Snow', description: 'heavy shower snow', icon: snow },
    { code: 701, name: 'Mist', description: 'mist', icon: mist },
    { code: 711, name: 'Smoke', description: 'smoke', icon: mist },
    { code: 721, name: 'Haze', description: 'haze', icon: mist },
    { code: 731, name: 'Dust', description: 'sand/dust whirls', icon: mist },
    { code: 741, name: 'Fog', description: 'fog', icon: mist },
    { code: 751, name: 'Sand', description: 'sand', icon: mist },
    { code: 761, name: 'Dust', description: 'dust', icon: mist },
    { code: 762, name: 'Ash', description: 'volcanic ash', icon: mist },
    { code: 771, name: 'Squall', description: 'squalls', icon: mist },
    { code: 781, name: 'Tornado', description: 'tornado', icon: mist },
    { code: 800, name: 'Clear', description: 'clear sky', icon: sunny },
    { code: 801, name: 'Clouds', description: 'few clouds: 11-25%', icon: cloudy },
    { code: 802, name: 'Clouds', description: 'scattered clouds: 25-50%', icon: cloudy2 },
    { code: 803, name: 'Clouds', description: 'broken clouds: 51-84%', icon: cloudy3 },
    { code: 804, name: 'Clouds', description: 'overcast clouds: 85-100%', icon: cloudy3 }
];

export const weatherImgs = [
    { code: 200, name: 'thunderstorm' },
    { code: 201, name: 'thunderstorm' },
    { code: 202, name: 'thunderstorm' },
    { code: 210, name: 'thunderstorm' },
    { code: 211, name: 'thunderstorm' },
    { code: 212, name: 'thunderstorm' },
    { code: 221, name: 'thunderstorm' },
    { code: 230, name: 'thunderstorm' },
    { code: 231, name: 'thunderstorm' },
    { code: 232, name: 'thunderstorm' },
    { code: 300, name: 'rainy' },
    { code: 301, name: 'rainy' },
    { code: 302, name: 'rainy' },
    { code: 310, name: 'rainy' },
    { code: 311, name: 'rainy' },
    { code: 312, name: 'rainy' },
    { code: 313, name: 'rainy' },
    { code: 314, name: 'rainy' },
    { code: 321, name: 'rainy' },
    { code: 501, name: 'rainy' },
    { code: 500, name: 'rainy' },
    { code: 502, name: 'rainy' },
    { code: 503, name: 'rainy' },
    { code: 504, name: 'rainy' },
    { code: 511, name: 'rainy' },
    { code: 520, name: 'rainy' },
    { code: 521, name: 'rainy' },
    { code: 522, name: 'rainy' },
    { code: 531, name: 'rainy' },
    { code: 600, name: 'snow', },
    { code: 601, name: 'snow', },
    { code: 602, name: 'snow', },
    { code: 611, name: 'snow', },
    { code: 612, name: 'snow', },
    { code: 613, name: 'snow', },
    { code: 615, name: 'snow', },
    { code: 616, name: 'snow', },
    { code: 620, name: 'snow', },
    { code: 621, name: 'snow', },
    { code: 622, name: 'snow', },
    { code: 701, name: 'fog' },
    { code: 711, name: 'fog' },
    { code: 721, name: 'fog' },
    { code: 731, name: 'fog' },
    { code: 741, name: 'fog' },
    { code: 751, name: 'fog' },
    { code: 761, name: 'fog' },
    { code: 762, name: 'fog' },
    { code: 771, name: 'fog' },
    { code: 781, name: 'fog' },
    { code: 800, name: 'sunny' },
    { code: 801, name: 'cloudy' },
    { code: 802, name: 'cloudy' },
    { code: 803, name: 'cloudy' },
    { code: 804, name: 'cloudy' }
]