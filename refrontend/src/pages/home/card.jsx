
// import { blog } from '../../assets/blog.png'
import StarRating from './srating'

const card = ({template}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <img src={template.linkImg} 
                className="h-40 w-full object-cover"
        
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>{template.title}</h1>
            <StarRating rating={template.rating}/>
        </div>
        <h3 className='p-5 text-xl'>{template.price}</h3>

        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {template.category}
        </div>
    </div>
  )
}

export default card