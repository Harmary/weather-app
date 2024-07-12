import cls from './Divider.module.scss'
    
type DividerProps = {	
    text?: string,
}
    
    
export function Divider({text = ''}: DividerProps) {
    
return <div className={cls.Divider}></div>;
}