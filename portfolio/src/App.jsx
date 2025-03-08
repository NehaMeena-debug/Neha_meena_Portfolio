import Navbar from "./Menus/Navbar"
import Main from "./Menus/Main"
import  "./index.css"
import Cursor from "./Menus/Cursor"
import Skill from "./Menus/Skill"
import Skillui from "./Menus/Skillui"
import Projects from "./Menus/Projects"


const App = () =>{
  return(
    <>
    <div className="relative overflow-hidden h-full w-full cursor: pointer content  bg-black mix-blend-difference">
    <Cursor/>
     <Navbar/>
     <Main/>
     {/* <Skill/> */}
     <Skillui/>
     <Projects/>
    </div>
    </>
  )
}

export default App;