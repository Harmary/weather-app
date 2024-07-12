import cls from './List.module.scss'
import { ListItem } from './ListItem/ListItem';
    
type ListProps = {
    title?:string;
    items: Record<string, string>
}
    
    
export function List({title, items}: ListProps) {
    
return <div className={cls.List}>
    {title && <p className={cls.List__title}>{title}</p>}
    {
        Object.entries(items).map(([name, value], index) => (
            <ListItem key={name} name={name} value={value}/>
        ))
    }
</div>;
}