
import { PropsWithChildren } from 'react';
import cls from './Sidebar.module.scss'
import { Divider } from 'src/shared/ui/Divider/Divider';
    
type SidebarProps = {
}
    
    
export function Sidebar() {
    
return <aside className={cls.Sidebar}>
    <div className={cls.Sidebar__content}>
        <div>
            Autocomplete
        </div>
        <Divider/>
        <div>
            weather params
        </div>
    </div>
    
</aside>;
}