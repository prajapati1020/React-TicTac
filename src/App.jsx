import { useState } from "react";
import NoProjectSelector from "./components/NoProjectSelectot";
import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProjects";

function App() {

  const[projectState ,setProjectState]=useState({
    selectedProjectId :undefined,
    project:[],
    tasks:[],
  });

  function handleAddTask(text){
    setProjectState((prevState)=>{
      const taskId=Math.random();
      const newtask={
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,
      }
      return{
        ...prevState,
       
        tasks:[newtask,...prevState.tasks]
      }
    })


  }

  function handleDeleteTask(id){
    setProjectState((prevState)=>{

      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id!==id),
      }
    })


  }

  function handleSelectProject(id){
   setProjectState((prevState)=>{
    return{
      ...prevState,
      selectedProjectId:id,
    }
   })
  }


  function handleStartProject(){
    setProjectState(prevState=>{

      return{
        ...prevState,
        selectedProjectId:null,
      }
    })

      
    };

  function handleCncelAddProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      }
    })

  }  
  

  function handleAddProject(projectData){
   
   setProjectState(prevState=>{
const projectId= Math.random()
    const newProject={
      ...projectData,
      id:projectId
    }
    
    return{
      ...prevState,
      selectedProjectId:undefined,
      project:[...prevState.project,newProject]
    }
    
   })

  }
  function handleDeleteProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.project.filter((projects)=>{
          projects.id!==prevState.selectedProjectId

        })
      }
    })
  }




  const selectedProject =projectState.project.find(project=>project.id===projectState.selectedProjectId);
  

  let content=(
  <SelectedProject project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>
  );

  if(projectState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCncelAddProject} />

  }else if(projectState.selectedProjectId===undefined){
  content=<NoProjectSelector onStartAddProject={handleStartProject}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar 
        onStartAddProject={handleStartProject} 
        projects={projectState.project} 
        onSelectProject={handleSelectProject}
         selectedProjectId={projectState.selectedProjectId} />
        {content} 
      </main>
    </>
  );
}

export default App;
