import sunny from 'src/shared/assets/icons/sunny.svg';
import cloudy from 'src/shared/assets/icons/cloudy.svg';
import rainy from 'src/shared/assets/icons/rainy.svg';

export const cloudiness: Record<number,string> = {
    0: 'sunny',
    1: 'cloudy',
    2: 'cloudy',
    3: 'rainy',
    101: 'cloudy',
}

export const cloudinessImg: Record<number,string> = {
    0: sunny,
    1: cloudy,
    2: cloudy,
    3: rainy,
    101: cloudy,
}