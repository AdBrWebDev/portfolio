import React, {lazy} from 'react';
import {frontend, backend, servers, devOps, os, microcontrollers} from '../data'
const SkillTab = lazy(() => import('./SkillTab'))

export default function Skills(){
    return(
        <>
        <div className='container mx-auto p-10'>
      <h1 className='pb-3'>Frontend</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {frontend.map((skill, index) => <SkillTab key={index} data={skill} />)}
        </div>
      </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3'>Backend</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {backend.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3'>Web servers</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {servers.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3'>DevOps</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {devOps.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3'>Operation systems</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {os.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container mx-auto p-10'>
      <h1 className='pb-3'>Microcontrollers</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {microcontrollers.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    </>
    )
}