const NavBar = () => {
    return (
        <div className="nav sticky top-0 z-10 bg-white">
            <div className="w-[80%] h-[80px] m-auto flex flex-row justify-between items-center">
                <div className="nav-left">
                    <span>dava<strong>agestha!</strong></span>
                </div>
                <div className="nav-right">
                    <ul className="flex flex-row gap-24">
                        <li><a href="#" className="p-2 transition duration-150 ease-in-out hover:border-b-2 hover:border-[#FFDDAE]">Home</a></li>
                        <li><a href="#" className="p-2 transition duration-150 ease-in-out hover:border-b-2 hover:border-[#FFDDAE]">About</a></li>
                        <li><a href="#" className="p-2 transition duration-150 ease-in-out hover:border-b-2 hover:border-[#FFDDAE]">Works</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar