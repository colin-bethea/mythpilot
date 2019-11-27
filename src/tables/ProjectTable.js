import React from 'react'

const ProjectTable = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.projects.length > 0 ? (
        props.projects.map(project => (
          <tr key={project.id}>
            <td>{project.title}</td>
            <td>{project.date}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No projects</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProjectTable