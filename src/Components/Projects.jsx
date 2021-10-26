import React, { useState,  useContext } from 'react'
import Project from './Project' 
import AddNewProject from './AddNewProject' 
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons'
import { TodoContext } from '../Context/index'

function Projects() {

  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? '#0080ff' : '#000000'

  // CONTEXT
  const { projects } = useContext(TodoContext)

  return (
    <div className='Projects'>
      <div className='header'>
        <div className='title'>
          <Palette size='18' />
          <p>Projects</p>
        </div>
        <div className='btns'>
            {
              showMenu && projects.length > 0 &&
              <span className='edit' onClick={ () => setEdit(edit => !edit)}>
                  <PencilFill size='15' color={pencilColor}/>
              </span>
            }
          <AddNewProject />
          <span className='arrow'>
            <CaretUp size='20' />
          </span>
        </div>
      </div>
      <div className='items'>
        {
          projects.map( project =>
            <Project 
                project={project}
                key={project.id}
                edit={edit}/>
          )
        }
      </div>

    </div>

  )
}

export default Projects