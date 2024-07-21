import { useState } from "react";

import { useSelector } from "react-redux";

import { List } from "src/shared/ui/List/List";
import { Button } from "src/shared/ui/Button/Button";
import { selectWeather } from "src/entities/weather";
import { Divider } from "src/shared/ui/Divider/Divider";
import { selectRequestState } from "src/entities/weather";
import { selectWeatherDetails } from "src/entities/weather";
import { Autocomplete } from "src/features/getWeatherByCityName";
import { RequestStateRender } from "src/shared/lib/components/RequestStateRender";

import cls from "./Sidebar.module.scss";
import { cloudiness, mainList, windList } from "../config/titles";

export function Sidebar() {
  const { isLoading, error } = useSelector(selectRequestState);
  const weather = useSelector(selectWeatherDetails);
  const { value } = useSelector(selectWeather);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className={`${cls.Sidebar__toggle} ${isSidebarOpen ? cls.toggle_open : ""}`} onClick={toggleSidebar}>
        {isSidebarOpen ? "➔" : "☰"}
      </button>
      <aside className={`${cls.Sidebar} ${isSidebarOpen ? cls.open : ""}`}>
        <div className={cls.Sidebar__content}>
          <Autocomplete />
          <RequestStateRender isLoading={isLoading} showMessages={false} error={error}>
            <List title='Weather Details' items={weather?.main} displayOptions={mainList} />
            <Divider />
            <List title='Winds' items={weather?.wind} displayOptions={windList} />
            <Divider />
            <List items={weather?.clouds} displayOptions={cloudiness} />
            <Divider />
            <Button
              text='Open in Google Maps'
              onClick={() => {
                window.open(
                  `https://www.google.com/maps?q=${value?.city.coord?.lat},${value?.city.coord?.lon}`,
                  "_blank"
                );
              }}
            />
          </RequestStateRender>
        </div>
      </aside>
    </>
  );
}
