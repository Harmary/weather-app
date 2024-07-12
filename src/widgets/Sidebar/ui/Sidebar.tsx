import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss'
import { Divider } from 'src/shared/ui/Divider/Divider';
import { List } from 'src/shared/ui/List/List';
import { getWeatherDetails } from 'src/entities/weather/model/selector/getWeatherDetails';
import { mainTitles } from '../config/titles';

type SidebarProps = {
}


export function Sidebar() {
    const weatherDetails = useSelector(getWeatherDetails);

    return <aside className={cls.Sidebar}>
        <div className={cls.Sidebar__content}>
            <div>
                Autocomplete
            </div>
            <Divider />
            <List
                title='Weather Details'
                items={weatherDetails?.main} 
                nameConfig={mainTitles}
            />
            <Divider />
            <List
                title='Winds'
                items={weatherDetails?.wind} 
            />
            <Divider />
            <List
                title='Clouds'
                items={weatherDetails?.clouds} 
            />
        </div>

    </aside>;
}