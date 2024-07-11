import { Sidebar } from 'src/widgets/Sidebar';
import cls from './App.module.scss';
import { Container } from 'src/shared/ui/Container/Container';
import { MainInfo } from 'src/widgets/MainInfo';

function App() {

  return (
    <div className={`${cls.App} ${cls.cloudy}`}>
      <main className={cls.App__content}>
        <Container maxWidth='lg'>
          <div className={cls.App__layout}>
            <span className={cls.App__logo}>weather.app</span>
            <MainInfo />
          </div>
        </Container>
      </main>
      <Sidebar/>
    </div>
  );
}

export default App;
