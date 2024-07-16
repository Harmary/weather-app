import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { useState } from 'react';
import cls from './Autocomplete.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getGeoposition } from '../model/services/getGeoposition';
import { UnknownAction } from '@reduxjs/toolkit';
import { selectListOfGeopositions } from '../model/selectors/selectListOfGeopositions';
import { Geoposition } from '../model/slice/geopositionSlice';
import { Button } from 'src/shared/ui/Button/Button';
import { getInfoAboutTheWeather } from 'src/entities/weather/model/services/getInfoAboutTheWeather';

export function Autocomplete() {
const [selectedOption, setSelectedOption] = useState<Geoposition | null>(null);
const [query, setQuery] = useState("");
const dispatch = useDispatch();
const geopositions = useSelector(selectListOfGeopositions);

  return (
    <div className={cls.Autocomplete}>
      <Combobox
        immediate
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          if(value) {
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
          onChange={(event) => {
            const q = event.target.value;
            dispatch(getGeoposition(q) as unknown as UnknownAction);
            setQuery(q);
          }}
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