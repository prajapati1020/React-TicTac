import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
const NoProjectSelector=({onStartAddProject})=>{
    return(
        <>
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImage} alt="An empty task list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started woth a new One</p>
            <p className='mb-8'>

                <Button onClick={onStartAddProject}>Create a Project</Button>
            </p>
        </div>
        </>
    )
}
export default NoProjectSelector