import Navbar from "./Menus/Navbar"
import Main from "./Menus/Main"
import  "./index.css"
import Cursor from "./Menus/Cursor"
import Skill from "./Menus/Skill"


const App = () =>{
  return(
    <>
    <div className="relative overflow-hidden h-full w-full cursor: pointer content  bg-black mix-blend-difference">
    <Cursor/>
     <Navbar/>
     <Main/>
     <Skill/>
    </div>
    </>
  )
}

export default App;