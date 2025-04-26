const Footer = () =>{
    return(
        <>
        <footer className="relative mix-blend-difference ml-18 text-white mb-24 pt-16 pb-6">
     <div className="container px-24 mt-12 mix-blend-difference mx-auto">
     <div className="flex flex-wrap items-center p-6 justify-between">
     <div className="w-full lg:w-6/12 px-8">
       <h4 className=" text-3xl text-white font-bold tracking-tight text-foreground">Let's Connect!</h4>
       <p className=" mt-2 text-gray-400  whitespace-nowrap">Connect with me on social media, and let's create something incredible together!</p>
       <div className="mt-6">
       <a href="https://github.com/NehaMeena-debug" target="_blank"   className=" mr-4 inline-flex items-center justify-center size-12 bg-stone-950  rounded-full bg-background/95  shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-none">
       <img src="/conlogo/gt.png" alt="Github" className="w-8 h-8 rounded-full object-contain" />
     
       </a>
       <a href="https://www.linkedin.com/in/contact-neha-meena/" target="_blank"   className=" mr-4 ml-4 inline-flex items-center justify-center size-12 rounded-full bg-background/95 shadow-sm hover:bg-accent bg-stone-950  hover:text-accent-foreground transition-colors  cursor-none">
       <img src="/conlogo/l.png" alt="Linkden" className="w-8 h-8 rounded-full object-contain" />
           </a>
           

           <a href="https://leetcode.com/profile/" target="_blank"   className=" mr-4 ml-4 inline-flex items-center justify-center size-12 bg-stone-950  rounded-full bg-background/95  shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors  cursor-none">
           <img src="/conlogo/lc.png" alt="Leetcode" className="w-8 h-8  rounded-full object-contain" />
           </a>
           
           <a href="https://www.hackerrank.com/profile/nehashivameena" target="_blank"   className=" mr-4 ml-4 inline-flex items-center justify-center bg-stone-950    size-12 rounded-full bg-background/95 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors  cursor-none">
           <img src="/conlogo/h.png" alt="Hackerrank" className="w-8 h-8  rounded-full object-contain" />
           </a>

           <a href="https://www.geeksforgeeks.org/user/nehambbtmty/" target="_blank"   className=" mr-4 ml-4 inline-flex items-center justify-center size-12 rounded-full bg-background/95  shadow-sm hover:bg-accent  bg-stone-950   hover:text-accent-foreground transition-colors  cursor-none">
           <img src="/conlogo/gfg.png" alt="Geeksforgeek" className="w-8 h-8  rounded-full object-contain" />
           </a>
           


           </div>
           </div>
       </div>
       </div>
       <div className="border border-b-1  border-gray-900 mb-0  mt-4 w-full">
</div>
       <p className="text-gray-400  flex justify-center  align-center">© 2025 Neha. All rights reserved</p>
       </footer>
        </>
    )
}


export default Footer 