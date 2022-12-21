import {useState} from 'react';
import React from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "helpers/classNames/classNames";
import {ThemeSwitcher} from "shared/ThemeSwitcher";
import {LangSwitcher} from "shared/LangSwitcher/ui/LamgSwitcher";

interface SidebarProps {
    className?: string;
}
const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={handleToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;