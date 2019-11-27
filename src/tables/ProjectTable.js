import React from 'react'

const ProjectTable = () => (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title Data</td>
          <td>Date Data</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
  
  export default ProjectTable