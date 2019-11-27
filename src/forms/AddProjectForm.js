import React, { useState } from 'react'

const AddProjectForm = props => {
  const initialFormState = { id: null, title: '', date: '' }
  const [project, setProject] = useState(initialFormState)

  const handleInputChange = event => {
    const { title, value } = event.target

    setProject({ ...project, [title]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!project.title || !project.date) return

        props.addProject(project)
        setProject(initialFormState)
      }}
    >
      <label>Title</label>
      <input type="text" title="title" value={project.title} onChange={handleInputChange} />
      <label>Date</label>
      <input type="text" title="date" value={project.date} onChange={handleInputChange} />
      <button>Add new project</button>
    </form>
  )
}

export default AddProjectForm