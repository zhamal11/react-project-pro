import { classNames } from 'helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from 'shared/ThemeSwitcher';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({className}: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink}>Home</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  )
}

export default Navbar