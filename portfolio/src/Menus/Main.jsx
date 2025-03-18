import  Text from "./Text"
import confetti from 'canvas-confetti';

const Main = ()=>{
    function launchHDConfetti() {
        confetti({
            particleCount: 200, // More particles for HD effect
            spread: 100,        // Wide spread for better coverage
            startVelocity: 60,  // Higher velocity for an explosive effect
            origin: { y: 0.6 }, // Confetti starts from the middle of the screen
            colors: ['#ff0000', '#ffbb00', '#00ff00', '#0099ff', '#ff00ff', '#ffff00'] // Vibrant colors
        });
    }
return(
    <>
<div className="p-4  mix-blend-difference max-w-7xl mx-auto z-10 w-full h-full">
<div className="flex mix-blend-difference justify-center ">
{/* <div className="h-40 w-40 bg-black m-24 rounded-full"> */}
 <img  className="h-40 w-40  mix-blend-difference  mt-24 rounded-full" 
src="./image/image.png"
 alt="My Image"></img> 
{/* // </div> */}
</div>
{/* <div className="overflow-hidden py-2 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mix-blend-difference">
<span className="font-mono">W</span>
<span className="font-mono">E</span>
<span className="font-mono">L</span>
<span className="font-mono">C</span>
<span className="font-mono">O</span>
<span className="font-mono">M</span>
<span className="font-mono">E</span>
<span className="font-mono w-3"> </span>
<span className="font-mono">T</span>
<span className="font-mono">O</span>
<span className="font-mono w-3"> </span>
<span className="font-mono">M</span>
<span className="font-mono">Y</span>
<span className="font-mono w-3"> </span>
<span className="font-mono">P</span>
<span className="font-mono">O</span>
<span className="font-mono">R</span>
<span className="font-mono">T</span>
<span className="font-mono">F</span>
<span className="font-mono">O</span>
<span className="font-mono">L</span>
<span className="font-mono">I</span>
<span className="font-mono">O</span>
</div> */}

<Text/>
<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mix-blend-difference">
Aspiring Frontend Developer, passionate about building dynamic and engaging web experiences. Let’s collaborate and build something amazing together! 
</p>
 <div className="flex justify-center items-center gap-2 mt-4">
   
     <button   onClick={() => launchHDConfetti()}  className=" mix-blend-difference inline-flex  text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 w-24 p-4 bg-transparent hover:bg-transparent mt-4 border "><div>
     <a  className="mix-blend-difference hover:bg-sky-700 "  href="https://www.linkedin.com/in/contact-neha-meena/">
     <div  className="flex mix-blend-difference justify-center items-center flex-row gap-2">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(28,79,137,1)"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>Connect </div></a> </div>
</button>
     
</div> 
</div>
    </>
)
}


export default Main;


