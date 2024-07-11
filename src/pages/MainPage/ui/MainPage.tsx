import cls from './MainPage.module.scss'
import { useTranslation } from 'react-i18next';
    
type MainPageProps = {	
    className?: string;
}
    
export function MainPage({className}: MainPageProps) {
const {t} = useTranslation();
    
return <div className={cls.MainPage}>{t('Привет')}</div>;
}