const Navbar = () => {
    return (
        <>
            <div className="flex justify-between p-4 bg-black text-white mix-blend-difference">
                <div class="text-lg font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code mr-2 inline-block"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>Neha</div>
                <div className="flex space-x-8 text-sm font-medium text-center justify-center items-center  transition-colors">
                    <a className="underline-offset-4 hover:underline h-9 px-4 py-2" href="Home">Home</a>
                    <a className="underline-offset-4 hover:underline h-9 px-4 py-2" href="About">About</a>
                    <a className="underline-offset-4 hover:underline h-9 px-4 py-2" href="Contact">Contact</a>
                </div>
            </div>

        
        </>
    )
}

export default Navbar;

