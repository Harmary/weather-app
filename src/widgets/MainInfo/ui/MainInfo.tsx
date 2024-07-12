import dayjs from 'dayjs';
import cls from './MainInfo.module.scss';
import sunny from 'src/shared/assets/icons/sunny.svg';
import cloudy from 'src/shared/assets/icons/cloudy.svg';
import rainy from 'src/shared/assets/icons/rainy.svg';
import { cloudiness, cloudinessImg } from 'src/shared/config/weatherConfig';

type WeatherMainInfo = {
    temperature: number;
    city: string;
    cloudiness: number;
}

type MainInfoProps = {
    weatherMainInfo?: WeatherMainInfo;
}

export function MainInfo({ weatherMainInfo }: MainInfoProps) {

    if (!weatherMainInfo) {
        return <div className={cls.MainInfo}>Sorry, can't find info</div>
    }


    return <div className={cls.MainInfo}>
        <div className={cls.MainInfo__temperature}>
            {weatherMainInfo?.temperature}&#xb0;
        </div>
        <div className={cls.MainInfo__place}>
            <div className={cls.MainInfo__city}>
                {weatherMainInfo?.city}
            </div>
            <div className={cls.MainInfo__day}>
                {dayjs().format('HH:mm - dddd, D MMM YY')}
            </div>
        </div>
        <div className={cls.MainInfo__weather}>
            <img
                className={cls.MainInfo__weatherimg}
                src={cloudinessImg[weatherMainInfo?.cloudiness]}
                alt=""
            />
            <span className={cls.MainInfo__weathername}>{cloudiness[weatherMainInfo?.cloudiness]}</span>
        </div>
    </div>;
}