import React, {lazy} from 'react'
import { Paper } from '@mantine/core';
import {interests} from '../data'

const InterestCard = lazy(() => import('./cards/InterestsCard'))

export default function About(){
    return(
        <>
                <Paper data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" id="cart" withBorder className="shadow-xl mx-40 p-20 mt-10" radius="lg">
                <h1 className="text-center text-6xl mb-10 mt-5">About me</h1>
                    <div className="text-center">
                    <p className="text-center mx-auto" style={{width: "95%"}}>I'm fullstack developer in Slovakia. I love to try new things (new technologies), I have serious passion for design and dynamic user experiences.</p>
                    </div>
                    <div className="text-center">
                        <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                            {interests.map((inter, index) => <InterestCard index={index} data={inter} />)}
                        </div>
                    </div>
                </Paper>
            
        </>
    )
}