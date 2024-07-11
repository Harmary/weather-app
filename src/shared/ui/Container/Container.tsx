import cls from './Container.module.scss'
import { PropsWithChildren } from 'react';
    
type ContainerProps = {	
    maxWidth?: MaxWidth;
}

type MaxWidth = 'sm' | 'md' | 'lg';
    
export function Container({maxWidth = 'lg', children}: PropsWithChildren<ContainerProps>) {
    return <div className={`${cls.Container} ${cls[maxWidth]}`}>{children}</div>;
}