import { useState } from "react";
const Card = ({icon,skill,description,logo}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible,setVisible] = useState(false)
  
 
 
  const mouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get skill div position
    setPosition({
      x: e.clientX - rect.left, // X relative to div
      y: e.clientY - rect.top,  // Y relative to div
    });
  };
  

    const mouseEnter = () =>{
      setVisible(true)
    }

    const mouseLeave = () => {
      setVisible(false)
    }
 
    return (
      <>
      <div  className="flex relative mix-blend-difference relative text-left hover:bg-gray-900 justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0"
        onMouseMove={mouseMove} 
        onMouseEnter={mouseEnter} 
        onMouseLeave={mouseLeave}
      >
       <span className="font-roboto text-2xl flex justify-center gap-4">
        <img  className=" bg-white border border-gray-800 rounded h-8 object-fit-cover  object-center position-absolute  z-[-1]  " src={icon} ></img>
        {skill}
        </span>
        <p className="text-left z-index-9 relative "
        // onMouseMove={mouseMove} 
        // onMouseEnter={mouseEnter} 
        // onMouseLeave={mouseLeave}
        >{description} 
      

      { visible &&(
        <img
          className="h-12 absolute transition-opacity duration-300 pointer-events-none transition-transform object-fit-cover object-center"
          style={{
            opacity: visible ? 1 : 0,
            top: position.y - 20 + "px",
            left: position.x - 20 + "px",
            transform: `translate(-50%, -50%)`,
          }}
          src={logo}
          alt="floating logo"
        />
      )}
        </p>
        </div>
      </>
    );
  };
  
  export default Card;
  
  
  