import React from 'react'
import project from "../files/project1.pdf"
export default function ProjectPage() {
  return (
    <div>
      <p id='paragraph'>This is my paragraph</p>
      <a href={project} target="_blank">Original Project</a>
    </div>
  )
}

