import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Sidebar } from 'src/widgets/Sidebar';
import { MainInfo } from 'src/widgets/MainInfo';
import { UnknownAction } from '@reduxjs/toolkit';
import { Container } from 'src/shared/ui/Container/Container';
import { getInfoAboutTheWeather } from 'src/entities/weather/model/services/getInfoAboutTheWeather';

import cls from './App.module.scss';
import { getCurrentWeather } from 'src/entities/weather/model/selector/getCurrentWeather';

function App() {
  const dispatch = useDispatch();
  const currentWeather = useSelector(getCurrentWeather);

  useEffect(() => {
    dispatch(getInfoAboutTheWeather({ lat: '44.6054434', lon: '33.5220842'}) as unknown as UnknownAction);
    return () => {}
  }, [dispatch]);

  return (
    <div className={`${cls.App} ${cls['sunny']}`}>
      <main className={cls.App__content}>
        <Container maxWidth='lg'>
          <div className={cls.App__layout}>
            <span className={cls.App__logo}>weather.app</span>
            {
              currentWeather.isLoading ? <p>Loading...</p> : <MainInfo weatherMainInfo={currentWeather} />
            }
          </div>
        </Container>
      </main>
      {
        !currentWeather.isLoading && <Sidebar />
      }
    </div>
  );
}

export default App;
