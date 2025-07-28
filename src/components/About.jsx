const About = () => {
    return (
        <>
            <div className="about-container bg-[#e0e0e0] py-15">
                <div className="max-w-[1280px] m-auto flex justify-between items-center gap-15">
                    <div className="about-left w-1/2 flex flex-col gap-5">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <div className="paragraph flex flex-col gap-3 text-lg">
                            <p>
                                Also known as <strong>PaztG</strong> on the internet. I am a <strong>Motion Graphic Designer</strong> from Indonesia with 5+ years of experience motion graphics.
                            </p>
                            <p>
                                Started as a CS:GO Moviemaker for an Esports team in 2014, I've going through the journey in Esports working as a Video Editor and also a Motion Designer.
                            </p>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="img-container size-100 bg-[url(/Foto-Profil.png)] transition duration-150 ease-in-out hover:opacity-70 bg-cover bg-center rounded-2xl shadow-lg">
                        </div>
                    </div>
                </div>
                <div className="exp-skills max-w-[1280px] m-auto my-15 flex flex-col">
                    <div className="exp-container my-10 grid grid-cols-5">
                        <h1 className="w-[750px] text-2xl font-semibold">Experience</h1>
                        <div className="exp-list col-span-4 flex gap-15">
                            <div className="exp-list1 w-55 flex flex-col">
                                <h1 className="text-xl font-semibold">Freelance</h1>
                                <span className="text-sm">2020 - Present</span>
                                <p className="italic font-light mt-1.5">Motion Graphic Designer, Graphic Designer, Video Editor</p>
                            </div>
                            <div className="exp-list2 w-55 flex flex-col">
                                <h1 className="text-xl font-semibold">Supreme League</h1>
                                <span className="text-sm">2020 - Present</span>
                                <p className="italic font-light mt-1.5">Motion Graphic Designer</p>
                            </div>
                            <div className="exp-list3 w-55 flex flex-col">
                                <h1 className="text-xl font-semibold">Masterminds / ARK Initiative</h1>
                                <span className="text-sm">2018 - 2020</span>
                                <p className="italic font-light mt-1.5">In Game Observer, Video Editor, Head of Digital Production</p>
                            </div>
                            <div className="exp-list3 w-55 flex flex-col">
                                <h1 className="text-xl font-semibold">Supreme League</h1>
                                <span className="text-sm">2017 - 2018</span>
                                <p className="italic font-light mt-1.5">Video Editor</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-container my-10 grid grid-cols-5">
                        <h1 className="text-2xl font-semibold">Skills</h1>
                        <div className="skills-list col-span-4 flex gap-3 text-sm">
                            <span className="px-5 py-1 rounded-full outline">Adobe After Effects</span>
                            <span className="px-5 py-1 rounded-full outline">Adobe Premiere Pro</span>
                            <span className="px-5 py-1 rounded-full outline">Adobe Photoshop</span>
                            <span className="px-5 py-1 rounded-full outline">Adobe Illustrator</span>
                            <span className="px-5 py-1 rounded-full outline">Blender</span>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default About