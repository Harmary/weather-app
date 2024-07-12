import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Sidebar } from 'src/widgets/Sidebar';
import { MainInfo } from 'src/widgets/MainInfo';
import { UnknownAction } from '@reduxjs/toolkit';
import { cloudiness } from 'src/shared/config/weatherConfig';
import { Container } from 'src/shared/ui/Container/Container';
import { getInfoAboutTheWeather } from 'src/entities/weather/model/services/getInfoAboutTheWeather';

import cls from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const weather = {
    temperature: 30,
    city: 'Sevastopol',
    cloudiness: 3,
  }

  useEffect(() => {
    dispatch(getInfoAboutTheWeather(11822) as unknown as UnknownAction);
    return () => {}
  }, []);

  return (
    <div className={`${cls.App} ${cls[cloudiness[weather.cloudiness]]}`}>
      <main className={cls.App__content}>
        <Container maxWidth='lg'>
          <div className={cls.App__layout}>
            <span className={cls.App__logo}>weather.app</span>
            <MainInfo weatherMainInfo={weather} />
          </div>
        </Container>
      </main>
      <Sidebar/>
    </div>
  );
}

export default App;
