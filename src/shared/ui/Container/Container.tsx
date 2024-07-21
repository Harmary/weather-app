import cls from './Container.module.scss'
import { PropsWithChildren } from 'react';

    
export function Container({children}: PropsWithChildren) {
    return <div className={cls.Container}>{children}</div>;
}