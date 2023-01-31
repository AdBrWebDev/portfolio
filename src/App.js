import React, {lazy} from 'react';
import './App.css';
import {frontend, backend, servers} from './data'
const SkillTab = lazy(() => import('./components/SkillTab'))

function App() {
  return (
    <>

    <div className='container p-10'>
      <h1 className='pb-3'>Frontend</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {frontend.map((skill, index) => <SkillTab key={index} data={skill} />)}
        </div>
      </div>
    <div className='container p-10'>
      <h1 className='pb-3'>Backend</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {backend.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    <div className='container p-10'>
      <h1 className='pb-3'>Web servers</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {servers.map((skill, index) => <SkillTab key={index} data={skill} />)}
      </div>
    </div>
    </>
  );
}

export default App;
