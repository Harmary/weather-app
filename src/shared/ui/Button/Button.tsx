import React, { PropsWithChildren, useMemo } from "react";
import cls from "./Button.module.scss";
import { weatherImgs } from "src/shared/config/weatherConfig";
import { useSelector } from "react-redux";
import { selectCurrentWeather } from "src/entities/weather/model/selector/selectCurrentWeather";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  text: string;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ text, className, onClick }) => {
  const currentWeather = useSelector(selectCurrentWeather);
  const background = useMemo(() => {
    return weatherImgs.find(({ code }) => code === currentWeather.cloudiness)?.name || "sunny";
  }, [currentWeather.cloudiness]);

  return <button className={`${cls.Button} ${cls[background]} ${className}`} onClick={onClick}>{text}</button>;
};
