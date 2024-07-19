import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Sidebar } from "src/widgets/Sidebar";
import { MainInfo } from "src/widgets/MainInfo";
import { selectCurrentWeather } from "src/entities/weather";
import { Container } from "src/shared/ui/Container/Container";
import { weatherImgs } from "src/shared/config/weatherConfig";
import { initializeGeoposition } from "src/entities/geoposition";
import { RequestStateRender } from "src/shared/lib/components/RequestStateRender";

import cls from "./App.module.scss";
import { AppDispatch } from "./providers/StoreProvider/config/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const currentWeather = useSelector(selectCurrentWeather);
  const backgroundImg = useMemo(() => {
    return weatherImgs.find(({ code }) => code === currentWeather.cloudiness)?.name || "sunny";
  }, [currentWeather.cloudiness]);

  useEffect(() => {
    dispatch(initializeGeoposition());
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
      <Sidebar />
    </div>
  );
}

export default App;
