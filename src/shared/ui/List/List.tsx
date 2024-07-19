import cls from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";

interface DisplayConfig {
  nameConfig?: Record<string, string>;
  valueConfig?: Record<string, (value: number | string) => string | number>;
}

type ListProps = {
  title?: string;
  items: Record<string, any>;
  displayOptions?: DisplayConfig;
};

export function List({ title, items = {}, displayOptions = {} }: ListProps) {
  const { nameConfig, valueConfig } = displayOptions;
  
  return (
    <div className={cls.List}>
      {title && <p className={cls.List__title}>{title}</p>}
      {Object.entries(items).map(([name, value]) => (
        <ListItem
          key={name}
          name={nameConfig ? nameConfig[name] : name}
          value={valueConfig ? valueConfig[name](value) : value}
        />
      ))}
    </div>
  );
}
