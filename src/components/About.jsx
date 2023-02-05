export default function About(){
    return(
        <>
            <section class="hero is-medium is-info">
                <div class="hero-body">
                <h1 className="text-center text-6xl mb-10">About me</h1>
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="text-center">
                    <h2 className="text-4xl mb-5">Who am I?</h2>
                    <p className="text-center mx-auto" style={{width: "50%"}}>I'm Fullstack developer in Slovakia. I love new things, I have serious passion for design and dynamic user experiences.</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl mb-5">What I do?</h2>
                        <ul>
                            <li>web sites/apps</li>
                            <li>mobile apps</li>
                            <li>desktop apps</li>
                            <li>iot(internet of things)</li>
                            <li>web servers</li>
                            <li>modeling</li>
                            <li>3d printing</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}