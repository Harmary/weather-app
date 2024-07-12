import cls from './ListItem.module.scss';
    
type ListItemProps = {	
    name: string;
    value: string | number;
}
    
export const ListItem: React.FC<ListItemProps> = ({name, value}) => {
    
return <div className={cls.ListItem}>
    <p className={cls.ListItem__name}>{name}</p>
    <p className={cls.ListItem__value}>{value}</p>
</div>;
}