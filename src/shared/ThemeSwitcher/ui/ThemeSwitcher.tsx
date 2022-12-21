import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightIcons from 'shared/assets/icons/theme-light.svg';
import DarkIcons from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({className}: ThemeSwitcherProps) {
  const {theme, toggleTheme} = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])} 
      onClick={toggleTheme}
      >
        {theme ===  Theme.LIGHT ? <LightIcons/> : <DarkIcons />}
      </Button>
  )
}

export default ThemeSwitcher