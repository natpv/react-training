import React, { useState, useEffect } from "react";
function ThemeSwitch(props) {
  // state
  // const [state_variable,setState]=useState(initial_value);
  const [theme, setTheme] = useState("light");
  useEffect(() => document.body.className = 'bg-'+theme, [theme]);
  const themeSelected = theme === "light" ? "dark" : "light";
  return (
  //   <button onClick={() => {
  //       setTheme(themeSelected)
  //       props.changeTheme(themeSelected);
  //   }
        
  //   }>{themeSelected}</button>

  <div className="theme-selector">
    <input type="checkbox" onClick={() => {
      setTheme(themeSelected)
      props.changeTheme(themeSelected);
    }} name="checkbox" id="checkbox" className="checkbox" />
  <label className="label" for="checkbox">
    <i className="fas fa-moon"></i>
    <i className="fas fa-sun"></i>
    <div className="ball"></div>
  </label>
  </div>
  


);
 
}
export default ThemeSwitch;