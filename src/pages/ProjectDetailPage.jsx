import { useParams } from 'react-router-dom'
import {ProjectDetails} from '../custom/projectDetails'
import ProjectDetailsComp from '../components/ProjectDetail'

const ProjectDetailPage = () => {

  const {id} = useParams();
 
  const projectData = ProjectDetails


  const data = projectData.find(project => project.id === +id)

  return (
    <div>
    <ProjectDetailsComp {...data} />
    </div>
  )
}

export default ProjectDetailPage
