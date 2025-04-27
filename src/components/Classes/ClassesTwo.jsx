import ClassesBut from "./ClassesBut"
import { ClasTwo } from '../Data/Data'
import "./Classes.css"
import { ClassCard } from '../../ui'

const ClassTwo = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-center items-center'>
        {ClasTwo.map((sport) => (
          <ClassCard key={sport.id} time={sport.time} type={sport.type} name={sport.name} img={sport.img}/>
        ))}
      </div>
      <ClassesBut />
    </>
  )
}

export default ClassTwo