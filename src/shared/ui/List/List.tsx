import cls from './List.module.scss'
import { ListItem } from './ListItem/ListItem';
    
type ListProps = {
    title?:string;
    items?: Record<string, any>
    nameConfig?: Record<string, string>
}
    
    
export function List({title, items, nameConfig}: ListProps) {
    
return <div className={cls.List}>
    {title && <p className={cls.List__title}>{title}</p>}
    { items &&
        Object.entries(items).map(([name, value]) => (
            <ListItem key={name} name={nameConfig ? nameConfig[name] : name} value={value}/>
        ))
    }
</div>;
}