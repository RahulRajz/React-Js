import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    function darkTheme(){
        if(theme==='light')
            setTheme('dark');
        else
            setTheme('light');
    }
  return (
    <div>
        <button onClick={darkTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeSwitcher;