import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss'
import { Divider } from 'src/shared/ui/Divider/Divider';
import { List } from 'src/shared/ui/List/List';

type SidebarProps = {
}


export function Sidebar() {

    return <aside className={cls.Sidebar}>
        <div className={cls.Sidebar__content}>
            <div>
                Autocomplete
            </div>
            <Divider />
            <List
                title='Weather Details'
                items={{
                    cloudy: '12%',
                    humidity: '12%',

                }} />
            <Divider />
            <List
                title='Weather Details'
                items={{
                    cloudy: '12%',
                    humidity: '12%',

                }} />
        </div>

    </aside>;
}