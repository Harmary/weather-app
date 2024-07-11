import dayjs from 'dayjs';
import cls from './MainInfo.module.scss';
import sunny from 'src/shared/assets/icons/sunny.svg';
import cloudy from 'src/shared/assets/icons/cloudy.svg';
import rainy from 'src/shared/assets/icons/rainy.svg';

type WeatherMainInfo = {
    temperature: number;
    city: string;
    cloudiness: number;
}

type MainInfoProps = {
    weatherMainInfo?: WeatherMainInfo;
}

export function MainInfo({ weatherMainInfo }: MainInfoProps) {

    return <div className={cls.MainInfo}>
        <div className={cls.MainInfo__temperature}>
            18&#xb0;
        </div>
        <div className={cls.MainInfo__place}>
            <div className={cls.MainInfo__city}>
                London
            </div>
            <div className={cls.MainInfo__day}>
                {dayjs().format('HH:mm - dddd, D MMM YY')}
            </div>
        </div>
        <div className={cls.MainInfo__weather}>
            <img
                className={cls.MainInfo__weatherimg}
                src={cloudy}
                alt=""
            />
            <span className={cls.MainInfo__weathername}>Cloudy</span>
        </div>
    </div>;
}