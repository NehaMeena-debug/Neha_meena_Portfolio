const Projects = () =>{
return(
    <>
   <div className="container mx-auto  mix-blend-difference px-4 ">
    <h2 className="text-4xl font-bold  text-white text-center p-12 mt-24 mb-12">Innovation Gallery</h2>
     <div className="flex flex-wrap justify-center align-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  ">
   <div className=" flex flex-wrap  justify-center align-center items-center ">
    <div className="relative group border border-1  border-gray-700 rounded-2xl overflow-hidden  transition-all h-96 w-96 duration-300">
    <img src="./image/rp.png" alt="recipe_finder_img" className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"></img> 
    
    <div className="p-8 border border-1  border-b-0 border-gray-700 rounded-2xl">
    <h3 className="text-xl  text-white font-semibold mb-2">   
     Recipro
    </h3>
    <p className="text-muted-foreground text-white mb-4 line-clamp-2">Find recipes according to search</p>
    <div className="flex flex-wrap gap-2 mb-4">
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     React
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     Tailwind
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     Axios
     </span>
    </div>
    {/* <div className="flex gap-4">
     <a  href="https://github.com/NehaMeena-debug/Recipes_finder"
     className=" items-center gap-2 text-sm " >
     <span className="flex flex-wrap  align-center gap-4 p-2  text-white">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
    code
    </span>
     </a>
    </div> */}
    </div>
    </div>
   </div> 
   {/* <div className=" flex flex-wrap justify-center align-center items-center m-4">
    <div className="relative border border-1  border-gray-700 rounded-2xl rounded overflow-hidden  transition-all h-96 w-96 duration-300">
    <img src="./image/blog.png" alt="Blog_app" className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"></img> 
    
    <div className="p-8 border border-1 border-t-0  border-gray-700 rounded-2xl">
    <h3 className="text-xl  text-white font-semibold mb-2">   
     code.Jam
    </h3>
    <p className="text-muted-foreground text-white mb-4 line-clamp-2">A blog for basic DSA problem solutions</p>
    <div className="flex flex-wrap gap-2 mb-4">
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     HTML
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     CSS
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     Javascript
     </span>
    </div>
    <div className="flex gap-4">
     <a  href="https://github.com/NehaMeena-debug/Recipes_finder"
     className=" items-center gap-2 text-sm " >
     <span className="flex flex-wrap  align-center gap-4 p-2  text-white">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
    code
    </span>
     </a>
    </div>
    </div>
    </div>
   </div>  */}
   {/* <div className=" flex flex-wrap mt-8 justify-center align-center items-center m-4">
    <div className="relative border border-1  border-gray-700 rounded-2xl rounded overflow-hidden  transition-all h-96 w-96 duration-300">
    <img src="./image/wordmeter.png" alt="recipe_finder_img" className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"></img> 
    
    <div className="p-8 border border-1  border-gray-700 rounded-2xl">
    <h3 className="text-xl  text-white font-semibold mb-2">   
     WordMeter
    </h3>
    <p className="text-muted-foreground text-white mb-4 line-clamp-2">A simple tool to count words and letters</p>
    <div className="flex flex-wrap gap-2 mb-4">
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     HTML
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     CSS
     </span>
     <span className="px-3 text-white py-1 text-sm rounded-full bg-accent/10 text-accent-foreground">
     Javascript
     </span>
    </div>
    <div className="flex gap-4">
     <a  href="https://github.com/NehaMeena-debug/Word-Letter-Counter"
     className=" items-center gap-2 text-sm " >
     <span className="flex flex-wrap  align-center gap-4 p-2  text-white">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
    code
    </span>
     </a>
    </div>
    </div>
    </div>
   </div>  */}
    <div className="flex flex-col items-center justify-center p-2 m-2 text-center max-w-lg mx-auto overflow-hidden  transition-all h-96 w-96 duration-300 border border-1  border-gray-700 rounded-2xl">
    <div className="text-4xl mb-4">👀</div>
    <h3 className="text-xl text-white font-semibold mb-2">See More</h3>
    <p className="text-muted-foreground text-white mb-4">
      Check out more of my projects on GitHub
    </p>

    <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="https://github.com/NehaMeena-debug"
          className="flex items-center gap-2 px-4 py-2 text-sm text-white border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="18" 
            height="18" 
            fill="currentColor"
          >
            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
          </svg>
          View More Projects
        </a>
    </div>
</div>
    </div>
   </div>
    </>
)
}


export default Projects