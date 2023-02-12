import { gridInterests } from "../data"

export default function About(){
    return(
        <>
                <h1 className="text-center text-6xl mb-10 mt-20">About me</h1>
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
                            <li>3d modeling</li>
                            <li>3d printing</li>
                        </ul>
                    </div>
                </div>
            <div className="container px-40 mt-20">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {gridInterests.map((item, index) => <div key={index} className={`bg-white rounded-2xl text-align shadow-xl p-5 col-span-${item.spanRow} row-span-${item.spanCol}`}>
                    <img className="my-auto" src={`images/${item.img}`} alt={index} />
                </div>)}
            </div>
            </div>
        </>
    )
}