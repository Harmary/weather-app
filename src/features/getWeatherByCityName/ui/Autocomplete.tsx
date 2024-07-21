import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";

import debounce from "lodash.debounce";

import { UnknownAction } from "@reduxjs/toolkit";
import { getInfoAboutTheWeather } from "src/entities/weather";
import { selectListOfGeopositions } from "src/entities/geoposition";
import { AppDispatch } from "src/app/providers/StoreProvider/config/store";
import { Geoposition, geopositionActions, getGeoposition } from "src/entities/geoposition";

import cls from "./Autocomplete.module.scss";

const MIN_QUERY_STR = 2;

export function Autocomplete() {
  const [selectedOption, setSelectedOption] = useState<Geoposition | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const geopositions = useSelector(selectListOfGeopositions);

  const fetchLocations = (q: string) => {
    dispatch(getGeoposition(q));
  };

  const debouncedFetch = useCallback(debounce(fetchLocations, 300), []);

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;
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
