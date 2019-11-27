import React from 'react'
import ProjectTable from './tables/ProjectTable'

const App = () => {
  const projectsData = [
    { id: 1, title: 'Athenify', date: '8/24/19'},
    { id: 2, title: 'Stratagem', date: '9/24/19'},
    { id: 3, title: 'Coursebuild', date: '8/28/19'}
  ]

  const [projects] = React.useState(projectsData)

  return (
    <div className="container">
      <h1>ProjectSpec</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add project</h2>
        </div>
        <div className="flex-large">
          <h2>View projects</h2>
          <ProjectTable projects={projects} />
        </div>
      </div>
    </div>
  )
}

export default App;