// import {useState} from 'react'
// import useLocalStroage from "./useLocalStroage";
// import './theme.css'
// export default function LightDarkMode() {
//     const [theme,setTheme] = useLocalStorage('theme',"dark");
//     function handleToggleTheme () {
//         setTheme(theme === "light" ? 'dark':"light")
//     }
//     console.log(theme)
//   return (
//     <div className= "light-dark-mode">
//         <div className="conntainer">
//             <p>Hello World</p>
//             <button onClick={handleToggleTheme}>Change Theme</button>
//         </div>
//     </div>
//   )
// }
import {useState} from 'react';
import useLocalStroage from "./useLocalStroage";
import './theme.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");
  const [toggled,setToggle] = useState(false);
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setToggle(!toggled);
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button className="btn1" onClick={handleToggleTheme}>Change Theme</button>
      </div>
      <div>
        <button className={`toggle-btn ${toggled ? "toggled" :""}`} onClick={handleToggleTheme}>
          <div className='thumb'></div>
        </button>
      </div>
    </div>
  );
}