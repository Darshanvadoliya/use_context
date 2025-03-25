import React, { useContext, useEffect } from 'react'
// import { useTheme } from '../../Context/ThemeContext'
// import { CustomContext } from '../../CustomContext/CustomContext';
import { ThemeContext } from '../../Context/AllContext';
import "../../App.css"
function Home() {
    const { theme, toggle } = useContext(ThemeContext);
    // console.log("Curent theme => ", theme);

    // let {defaultTheme,setTheme,theme} = CustomContext()
    // useEffect(() => {
    // }, [theme])

    return (
        <div className={`${theme}-theme`} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 60px"}}>
            <div>
                <h4>{theme === "light" ? "Light Mode" : "Dark Mode"}</h4>
            </div>
            <button onClick={toggle} className="theme_toggle_btn" style={{ padding: "6px 15px", borderRadius:"10px", border:"1px solid #333"}}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>

            {/* <button onClick={()=> setTheme(theme === 'white' ? 'black' : 'white')} className="theme_toggle_btn" style={{ padding: "6px 15px", borderRadius:"10px", border:"1px solid #333"}}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button> */}
        </div>
    )
}
export default Home

