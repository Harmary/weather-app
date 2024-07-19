import { useSelector } from "react-redux";
import cls from "./Sidebar.module.scss";
import { Divider } from "src/shared/ui/Divider/Divider";
import { List } from "src/shared/ui/List/List";
import { mainList } from "../config/titles";
import { selectWeatherDetails } from "src/entities/weather/model/selector/selectWeatherDetails";
import { Autocomplete } from "src/features/getWeatherByCityName/ui/Autocomplete";
import { RequestStateRender } from "src/shared/lib/components/RequestStateRender";
import { selectRequestState } from "src/entities/weather";
import { Button } from "src/shared/ui/Button/Button";
import { selectWeather } from "src/entities/weather/model/selector/selectWeather";

export function Sidebar() {
  const { isLoading, error } = useSelector(selectRequestState);
  const weather = useSelector(selectWeatherDetails);
  const { value } = useSelector(selectWeather);


  return (
    <aside className={cls.Sidebar}>
      <div className={cls.Sidebar__content}>
        <Autocomplete />
        <RequestStateRender isLoading={isLoading} showMessages={false} error={error}>
          <List title='Weather Details' items={weather?.main} displayOptions={mainList} />
          <Divider />
          <List title='Winds' items={weather?.wind} />
          <Divider />
          <List title='Clouds' items={weather?.clouds} />
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
  );
}
