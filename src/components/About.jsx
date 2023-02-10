import { gridInterests } from "../data"

export default function About(){
    return(
        <>
            <section class="hero is-medium is-info mt-40 p-10" style={{boxShadow: "0 -50px 80px 80px #3e8ed0"}}>
                <div class="hero-body">
                <h1 className="text-center text-6xl mb-10">About me</h1>
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="text-center">
                    <h2 className="text-4xl mb-5">Who am I?</h2>
                    <p className="text-center mx-auto" style={{width: "55%"}}>I'm fullstack developer in Slovakia. I love to try new things (new technologies), I have serious passion for design and dynamic user experiences.</p>
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
            <div className="container px-40" style={{marginTop: "-50px"}}>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {gridInterests.map((item, index) => <div key={index} className={`bg-white rounded-2xl text-align shadow-xl p-5 col-span-${item.spanRow} row-span-${item.spanCol}`}>
                    <img className="content-center" src={`images/${item.img}`} alt={index} />
                </div>)}
            </div>
            </div>
        </>
    )
}