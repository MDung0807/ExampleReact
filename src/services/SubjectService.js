import * as BaseAPI from './BaseAPI'

export const getAllSubject = async ()=>{
    try{
        const response = await BaseAPI.getItems(address)
        console.log(response.data)
        return response.data
    }
    catch( e){
        console.log(e.message)
    }
}

export const getSubjectById = async (param)=>{
    try{
        const response = await BaseAPI.getItems(subjectById, param)
        console.log(response.data)
        return response.data
    }
    catch( e){
        console.log(e.message)
    }
}
const address = "subject"
const subjectById = address + "/id?subjectId="