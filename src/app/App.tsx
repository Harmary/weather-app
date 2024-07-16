import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Sidebar } from "src/widgets/Sidebar";
import { MainInfo } from "src/widgets/MainInfo";
import { UnknownAction } from "@reduxjs/toolkit";
import { Container } from "src/shared/ui/Container/Container";
import { getInfoAboutTheWeather } from "src/entities/weather/model/services/getInfoAboutTheWeather";

import cls from "./App.module.scss";
import { weatherImgs } from "src/shared/config/weatherConfig";
import { selectCurrentWeather } from "src/entities/weather/model/selector/selectCurrentWeather";
import { RequestStateRender } from "src/shared/lib/components/RequestStateRender";

function App() {
  const dispatch = useDispatch();
  const currentWeather = useSelector(selectCurrentWeather);
  const backgroundImg = useMemo(() => {
    return weatherImgs.find(({ code }) => code === currentWeather.cloudiness)?.name || "sunny";
  }, [currentWeather.cloudiness]);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            getInfoAboutTheWeather({
              lat: position.coords.latitude.toString(),
              lon: position.coords.longitude.toString(),
            }) as unknown as UnknownAction
          );
        },
        (error) => {
          console.log(error)
        }
      );
    } else {
     console.log('error')
    }
  }, [dispatch]);

  return (
    <div className={`${cls.App} ${cls[backgroundImg]}`}>
      <main className={cls.App__content}>
        <Container maxWidth='lg'>
          <div className={cls.App__layout}>
            <span className={cls.App__logo}>weather.app</span>
            <RequestStateRender isLoading={currentWeather.isLoading} error={currentWeather.error}>
              <MainInfo weatherMainInfo={currentWeather} />
            </RequestStateRender>
          </div>
        </Container>
      </main>
      <RequestStateRender isLoading={currentWeather.isLoading} error={currentWeather.error} showMessages={false}>
        <Sidebar />
      </RequestStateRender>
    </div>
  );
}

export default App;
