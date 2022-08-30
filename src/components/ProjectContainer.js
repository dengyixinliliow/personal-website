import React from 'react'

function ProjectContainer(props) {
  return (
    <div className="bg-highlight p-5 m-5 rounded-xl drop-shadow-lg">
      <div>
        <img src={props.img} className='h-70 rounded-xl mb-3'/>
        <h1 className="font-dynapuff text-xl text-highlight2">{props.name}</h1>
        <h1>Technologies: {props.technologies}</h1>
        <h1>{props.description}</h1>
        <h1>{props.date}</h1>
      </div>
    </div>
  )
}

export default ProjectContainer