import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2'])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default App;