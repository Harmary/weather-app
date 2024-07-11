
import { PropsWithChildren } from 'react';
import cls from './Sidebar.module.scss'
    
type SidebarProps = {
}
    
    
export function Sidebar() {
    
return <aside className={cls.Sidebar}>
    <div className={cls.Sidebar__content}>
        {/* <div>
            Autocomplete
        </div>
        <div>
            weather params
        </div> */}
    </div>
    
</aside>;
}