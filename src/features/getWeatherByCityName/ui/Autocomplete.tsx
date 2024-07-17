import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { ChangeEvent, useCallback, useState } from "react";
import cls from "./Autocomplete.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGeoposition } from "../../../entities/geoposition/model/services/getGeoposition";
import { UnknownAction } from "@reduxjs/toolkit";
import { selectListOfGeopositions } from "../../../entities/geoposition/model/selectors/selectListOfGeopositions";
import { Geoposition, geopositionActions } from "../../../entities/geoposition/model/slice/geopositionSlice";
import { getInfoAboutTheWeather } from "src/entities/weather/model/services/getInfoAboutTheWeather";
import debounce from "lodash.debounce";

const MIN_QUERY_STR = 3;

export function Autocomplete() {
  const [selectedOption, setSelectedOption] = useState<Geoposition | null>(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const geopositions = useSelector(selectListOfGeopositions);

  const fetchLocations = (q: string) => {
    dispatch(getGeoposition(q) as unknown as UnknownAction);
  };

  const debouncedFetch = useCallback(debounce(fetchLocations, 1000), []);

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;
    setQuery(q);
    if (q.length !== 0 && q.length > MIN_QUERY_STR) {
      debouncedFetch(q);
    }
  };

  return (
    <div className={cls.Autocomplete}>
      <Combobox
        immediate
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          if (value) {
            dispatch(geopositionActions.selectGeoposiion(value));
            dispatch(
              getInfoAboutTheWeather({
                lat: value.lat.toString(),
                lon: value.lon.toString(),
              }) as unknown as UnknownAction
            );
          }
        }}
      >
        <ComboboxInput
          aria-label='City'
          placeholder='Select another place'
          className={cls.Autocomplete__input}
          displayValue={(pos: Geoposition) => pos?.name || ""}
          onChange={handleChangeQuery}
        />
        <ComboboxOptions anchor='bottom start' transition className={cls.Autocomplete__options}>
          {geopositions.map((location) => (
            <ComboboxOption
              key={`${location.lat}${location.lon}`}
              value={location}
              className={cls.Autocomplete__option}
            >
              {`${location.name}, ${location.state}`}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
