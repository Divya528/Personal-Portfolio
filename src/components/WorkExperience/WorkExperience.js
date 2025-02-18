import React from 'react'
import { workExperience } from '../../portfolio'
import './WorkExperience.css'

const WorkExperience = () => {
  if (!workExperience.length) return null

  return (
    <section id='work-experience' className='section work-experience'>
      <h2 className='section__title'>Work Experience</h2>
      <div className='work-experience__list'>
        {workExperience.map((experience) => (
          <div
            key={`${experience.position}-${experience.company}`} // Unique key based on position and company
            className='work-experience__item'
          >
            <h3 className='work-experience__position'>
              {experience.position} at {experience.company}
            </h3>
            <p className='work-experience__duration'>
              {experience.startDate} - {experience.endDate}
            </p>
            <ul className='work-experience__description'>
              {experience.details.map((detail) => (
                <li 
                  key={`${experience.position}-${detail}`} // Combine position and detail for a unique key
                  className='work-experience__description-item'
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
