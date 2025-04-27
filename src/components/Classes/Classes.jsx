import { ClasOne } from '../Data/Data' 
import ClassesBut from './ClassesBut'
import "../../App.css"
import { ClassCard } from '../../ui'

const Classes = () => {
  return (
    <>
    <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-center items-center py-8'> 
            {ClasOne.map((sport) => (
                <ClassCard key={sport.id} img={sport.img} name={sport.name} time={sport.time} type={sport.type}/>
            ))}
            
        </div>
        <ClassesBut />
    </div>
        
    </>
    
  )
}

export default Classes