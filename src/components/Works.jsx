const Works = () => {
    return (
        <>
            <Showreel />
            <Clients />
        </>
    )
}

export default Works

const Showreel = () => {
    return (
        <div className="max-w-[90%] m-auto my-10 px-20 py-20 bg-gray-950 text-white rounded-4xl shadow-lg">
                <div className="sr-container max-w-[1280px] m-auto flex justify-between items-center gap-10">
                    <div className="showreel-title flex flex-col gap-5">
                        <h1 className="text-5xl font-bold">2025 Showreel</h1>
                        <a href="https://www.youtube.com/watch?v=QhSKr3pVsno" className="px-5 py-2 outline-1 w-[250px] rounded-full flex gap-3 items-center transition duration-150 ease-in-out hover:bg-white hover:outline-0 hover:text-gray-950 hover:justify-between">
                            <span>Watch on YouTube!</span>
                            <span>&#8594;</span>
                        </a>
                    </div>
                    <div className="showreel-content">
                        <iframe width="720" height="405" src="https://www.youtube.com/embed/QhSKr3pVsno?si=w1K9REtng4eoUmSQ" title="YouTube video player"  className="rounded-2xl outline-2 outline-offset-10"></iframe>
                    </div>
                </div>
            </div>
    )
}

const Clients = () => {
    return (
        <div className="bg-white rounded-t-4xl">
            <div className="clients-content max-w-[1280px] m-auto my-20 flex flex-col items-center gap-10">
                <h1 className="text-5xl font-bold">Clients</h1>
                <img src="/clients-list.png" alt="Clients List" className="scale-90 transition duration-150 ease-in-out hover:scale-95" />
                <span className="italic font-light tracking-widest">and more . .</span>
            </div>
        </div>
    )
}