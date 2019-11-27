import React from 'react'
import ProjectTable from './tables/ProjectTable'

const App = () => {
  return (
    <div className="container">
      <h1>ProjectSpec</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add project</h2>
        </div>
        <div className="flex-large">
          <h2>View projects</h2>
          <ProjectTable/>
        </div>
      </div>
    </div>
  )
}

export default App;