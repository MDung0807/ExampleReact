import Item from '../../../components/Item'
import configs from '../../../configs'
import Slide from '../../../layouts/ClientLayouts/Slide'

const items =[
    {id: 0, name: "item0", href: "#", color: "white", price: 1230, imageAlt: "item0", imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
    {id: 1, name: "item1", href: "#", color: "black", price: 1230, imageAlt: "item1", imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
    {id: 1, name: "item1", href: "#", color: "black", price: 1230, imageAlt: "item1", imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
    {id: 2, name: "item2", href: "#", color: "violet", price: 1230, imageAlt: "item2", imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
    {id: 2, name: "item2", href: "#", color: "violet", price: 1230, imageAlt: "item2", imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
]
const titleSubject = "Subject"

export default function Home (){
    const limit = 10
    const style ={
        flexWrap: 'nowrap',
    }
return (
    <div className="">
        <Slide></Slide>
        <Item items={items} title={titleSubject} linkAction={'/subjects/'} style={style}/>
    </div>
)
}

