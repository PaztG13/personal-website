const Header = () => {
    return (
        <div className="max-w-[1280px] m-auto my-45 flex items-center gap-10">
            <span className="absolute size-250 rounded-full bg-[#FFDDAE] opacity-30 -z-10 -top-50 -left-80 blur-3xl"></span>
            <div className="header">
                <h2 className="text-2xl mb-2.5">Nice to meet you!</h2>
                <h1 className="text-9xl">I'm <strong>Dava Agestha Putra</strong> and I do <strong>Motion Graphics</strong></h1>
                <div className="w-fit mt-20 py-3 px-6 flex items-center gap-5 rounded-full bg-white shadow-lg">
                    <span className="absolute inline-flex size-4 animate-ping rounded-full bg-[#FFDDAE] opacity-75"></span>
                    <span className="relative inline-flex size-4 rounded-full bg-[#FFDDAE]"></span>
                    Currently looking for new opportunities!
                </div>
            </div>
        </div>
    )
}

export default Header