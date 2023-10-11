import GridData from "../../../components/GridData"
import ItemTranscript from "../../../components/TableData"

export default function Subjects(){
    const subjects = [
        {subjectId: 1, name: 'Math', status: 1, image: 'https://res.cloudinary.com/dx7nsygei/image/upload/v1686538459/image_user_teacher5.jpg' ,topic: []},
        {subjectId: 2, name: 'Math', status: 1, image: 'https://res.cloudinary.com/dx7nsygei/image/upload/v1686538256/image_user_student5.jpg' ,topic: []},
        {subjectId: 3, name: 'Math', status: 1, image: 'https://res.cloudinary.com/dx7nsygei/image/upload/v1684121961/image_user_11.jpg' ,topic: []},
        {subjectId: 4, name: 'Math', status: 1, image: '' ,topic: []},
        {subjectId: 4, name: 'Math', status: 1, image: '' ,topic: []},
        {subjectId: 4, name: 'Math', status: 1, image: '' ,topic: []},
        {subjectId: 4, name: 'Math', status: 1, image: '' ,topic: []},
    ]
    const titles = ['Mã Môn Học', 'Tên Môn Học', 'Trạng Thái', 'Hình Ảnh', 'Chủ Đề']
    const properties = ['subjectId', 'name', 'status', 'image', 'topic']
    const style={
        flexWrap: 'wrap',
    }
    const title = 'Subject'
    return (
        <div className="subject">
           <GridData items={subjects} properties={properties} style={style} title={title} linkAction={'/subjects/'}/>
        </div>
    )
}