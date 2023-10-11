
import { useParams } from 'react-router-dom'
import GirdItem from '../../../components/GridData'
export default function SubjectDetail () {
    
const {subjectId} = useParams();
const subject = {
    subjectId: subjectId,
    name: 'Math', 
    status: 1,
    image: 'https://res.cloudinary.com/dx7nsygei/image/upload/v1686538459/image_user_teacher5.jpg' ,
    teachers: [],
    topics: [
        {id: 1, name: 'topic1', image: '', stauts: 1},
        {id: 2, name: 'topic2', image: '', stauts: 1},
        {id: 4, name: 'topic4', image: '', stauts: 1},
        {id: 5, name: 'topic5', image: '', stauts: 1},
        {id: 6, name: 'topic6', image: '', stauts: 1},
        {id: 7, name: 'topic7', image: '', stauts: 1},


    ]
}
const title = 'Topic'
const properties = ['id', 'name', 'image', 'status']
const style={
    flexWrap: 'nowrap',
}
    return (
        <div className="subject-detail">
            <div className='d-flex'>
            <div className=''>
                    <img src={subject.image} alt={subject.name}/>
            </div>
                <div className=''>
                    <div className="text-center p-5 ">
                        <h1 className='fs-2 text pt-5 pl-6'>{subject.name}</h1>
                    </div>
                </div>
         </div>
         <div>
            <GirdItem items={subject.topics} properties={properties} style={style} title={title} linkAction={'/topics/'}/>
         </div>
        </div>
        )
}