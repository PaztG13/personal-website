const Header = () => {
    return (
        <div className="w-[75%] p-10 m-auto mt-20 flex items-center gap-10">
            <div className="header-left">
                <h2 className="text-2xl mb-2.5">Nice to meet you!</h2>
                <h1 className="text-9xl">I'm <strong>Dava Agestha Putra</strong> and I do <strong>Motion Graphics</strong></h1>
                <div className="w-fit mt-20 py-3 px-6 flex items-center gap-5 rounded-full shadow-lg">
                    <span class="absolute inline-flex size-4 animate-ping rounded-full bg-[#FFDDAE] opacity-75"></span>
                    <span class="relative inline-flex size-4 rounded-full bg-[#FFDDAE]"></span>
                    Currently looking for new opportunities!
                    </div>
            </div>
        </div>
    )
}

export default Header