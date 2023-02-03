import {skillsImgs} from '../data'

export default function About(){
    return(
        <>
            <section class="hero is-medium is-info">
                <div class="hero-body">
                <h1 className="text-center text-5xl">About me</h1>
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div>
                    <img src="" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>web sites</li>
                            <li>mobile apps</li>
                            <li>desktop/web apps</li>
                            <li>iot</li>
                            <li>web servers</li>
                            <li>modeling</li>
                            <li>3d printing</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {skillsImgs.map((imgs, index) => <>
                
                </>)}
            </div>
        </>
    )
}