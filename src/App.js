// Import React
import React from 'react'

// Import Project Table Component
import ProjectTable from './tables/ProjectTable'

// Import Form for Adding Projects
import AddProjectForm from './forms/AddProjectForm'

// Initialize App
const App = () => {
  // Create a projectsData object with sample data
  const projectsData = [
    { id: 1, title: 'Athenify', date: '8/24/19'},
    { id: 2, title: 'Stratagem', date: '9/24/19'},
    { id: 3, title: 'Coursebuild', date: '8/28/19'}
  ]

  const [projects, setProjects] = React.useState(projectsData)

  const addProject = project => {
    project.id = projects.length + 1
    setProjects([...projects, project])
  }

  return (
    <div className="container">
      <h1><img src="https://previews.dropbox.com/p/orig/AAqxBQRsMXYWa1BsWiw35rL0tNRuNO3jG97APuy6IAfM8_cDCCJctlqkVtbQqW3hE84SvsxaIgTuxUynXA-XtwQxVAd8LurRukpeJJ8jzwgU-fdup0yMa2OvfqjbGDPaHLRQzDhhY4B03nTGLOHySDUhYnFwN9pCatYvo7Peic2ALLupAlBVnKMC2HsNDzBeblzKpxfLhXebZ8UGppi68E0hS9qATBqqrZpd7sYTIQy3aJAV84jPC8uguyF3vtqhDUmPW61v6atvPJD0vYIlDDwcQvpsZvpFfIAmS5cVamM8wx939lQflEVAK7wdyvp9Jy4/p.svg?fv_content=true&size_mode=5" alt="Mythpilot Logo" className="logo-main"></img>Mythpilot</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add project</h2>
          <AddProjectForm addProject={addProject} />
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