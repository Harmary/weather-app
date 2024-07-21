import dayjs from 'dayjs';
import cls from './MainInfo.module.scss';
import { weatherConditions } from 'src/shared/config/weatherConfig';

type WeatherMainInfo = {
    temperature?: number;
    city?: string;
    cloudiness?: number;
}

type MainInfoProps = {
    weatherMainInfo?: WeatherMainInfo;
}

export function MainInfo({ weatherMainInfo }: MainInfoProps) {
    const condition = weatherConditions.find((value) => value.code === weatherMainInfo?.cloudiness);

    if (!weatherMainInfo) {
        return <div className={cls.MainInfo}>Sorry, can't find info</div>
    }


    return (
      <div className={cls.MainInfo}>
        <div className={cls.MainInfo__temperature}>{Math.round(weatherMainInfo?.temperature as number)}&#xb0;</div>
        <div className={cls.MainInfo_right}>
          <div className={cls.MainInfo__place}>
            <div className={cls.MainInfo__city}>{weatherMainInfo?.city}</div>
            <div className={cls.MainInfo__day}>{dayjs().format("HH:mm - dddd, D MMM YY")}</div>
          </div>
          <div className={cls.MainInfo__weather}>
            <img className={cls.MainInfo__weatherimg} src={condition?.icon} alt='' />
            <span className={cls.MainInfo__weathername}>{condition?.name}</span>
          </div>
        </div>
      </div>
    );
}