import {coachesEx} from "./Data/Data"
import "../App.css"
import tmnImg from "./Images/text-img.png"

const Coaches = () => {
  return (
    <div>
        <div className='mx-auto py-12 w-full md:w-1/2 text-center'>
            <h2>Team Of Expert Coaches</h2>
            <p>Gymat an unknown printer took a gallery of type and scrambled make a type specimen book</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coachesEx.map((coach) => (
                <div className='w-full h-[450px] relative' key={coach.id}>
                    <img src={coach.img} alt="" className="w-full h-full" />
                    <div className='absolute bg-white w-2/3 bottom-10 right-0 p-4'>
                        <h5 className="font-[600] text-2xl">{coach.name}</h5>
                        <p>{coach.title}</p>
                    </div>
                </div>
                )
            )}
            
        </div>
            {/* Testimonials */}
            <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-center py-12 gap-4">
        <div >
            <img src={tmnImg} alt="" />
        </div>
        <div className="col-span-2">
            <h2>What's Client say</h2>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi minima ab non dolore, quidem necessitatibus iusto eos? Pariatur dolor sit architecto! Architecto quia hic nostrum numquam soluta obcaecati quis beatae.
                </p>
            </div>
        </div>
    </div>    
    </div>
    </div>
  )
}

export default Coaches