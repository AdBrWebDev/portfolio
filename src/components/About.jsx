import { Paper } from '@mantine/core';


export default function About(){
    return(
        <>
                <Paper data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" id="cart" withBorder className="shadow-xl mx-40 p-20 mt-10" radius="lg">
                <h1 className="text-center text-6xl mb-10 mt-5">About me</h1>
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
                </Paper>
            
        </>
    )
}