import React, {lazy} from 'react';
import {frontend, backend, servers, devOps, os, microcontrollers} from '../data'
const SkillTab = lazy(() => import('./SkillTab'))

export default function Skills(){
    return(
        <>
        <h1 className='pt-10 mt-5 text-center text-5xl'>Technologies I work with</h1>
        <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>Frontend</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {frontend.map((skill, index) => <SkillTab key={index} data={skill} />)}
        </div>
      </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>Backend</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {backend.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>Web servers</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {servers.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>DevOps</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {devOps.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>Operation systems</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {os.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3 pt-3 text-center'>Microcontrollers</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {microcontrollers.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    </>
    )
}