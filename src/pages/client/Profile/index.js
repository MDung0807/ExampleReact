import { Image } from "react-bootstrap"
import Grid from '@mui/material/Unstable_Grid2';
import ListGroup from 'react-bootstrap/ListGroup';
import Transcript from "../Transcript";
import configs from "../../../configs";
import { Link } from "react-router-dom";
import avatar from "../../../assets/client/avatar.png"
import {Button} from '@mui/material';

import './main.css'
import React, { useEffect, useState } from "react";
import * as  ProfileService from '../../../services/ProfileService'
import routes from "../../../configs/routes";
const user = {
    userId: 1,
    avatar: "https://res.cloudinary.com/dx7nsygei/image/upload/v1686538256/image_user_student5.jpg",
    dateCreate: "12/12/2020",
    email: "dominhdung@gmail.com",
    firstName: "Do",
    lastName: "Minh",
    phoneNumber: "0987898789",
    gender: "Female",
    status: 1,
}

const getUser = async () => {
    return await ProfileService.getProfile()
}

export default function Profile(){
    const [user, setUser] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            const response = await getUser()
            setUser(response.data)
        }
        fetchData(); // Gọi hàm fetchData khi component được mount
    }, []);
    
    console.log(user)
    return (
        <div className="profile">
            <div className="body">
                <div className="image-infor ">
                    <div className="image-cover">
                        <Image src={"https://res.cloudinary.com/dx7nsygei/image/upload/v1684004920/image_user_thanhspkt1234.jpg"} fluid />     
                    </div>
                <Grid container spacing={2}>
                    <Grid xs={2.5}>
                        <div className="avatar">
                            <img className="" src={avatar} alt="avatar" />
                        </div>
                    </Grid>
                    <Grid xs={8} className="d-flex">
                    <div className="info pt-2">
                            <ListGroup className="listGroup">
                                <ListGroup.Item className="p-1 m-0 border border-0">
                                    <div className="info-item-name title">
                                         <h1>{user.fullName} ({user.username})</h1>
                                     </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="p-1 m-0 border border-0">
                                    <div className="info-item-dateOfBirth">
                                         <p>{user.dateOfBirth}</p>
                                     </div>
                                </ListGroup.Item>
                                
                            </ListGroup>
                        </div>
                        
                    </Grid>
                </Grid>
                </div>
                <div className="d-flex justify-content-end p-5">
                   <Link to={routes.updateProfile}>
                        <button type="button" class="btn btn-primary bg-primary">Update Profile</button>
                   </Link>
                    </div>
                <Grid className="border-top border-secondary">
                    <div className="title pt-5">
                            <h1>Information</h1>
                    </div>
                    <div className=" fs-3 font-monospace">
                        <p><span class="material-symbols-outlined">mail</span> {user.email}</p>
                    </div>
                    <div className=" fs-3 font-monospace">
                        <p><span class="material-symbols-outlined">call</span> {user.phoneNumber}</p>
                    </div>
                    <div className=" fs-3 font-monospace">
                        <p><span class="material-symbols-outlined">transgender</span> {user.gender}</p>
                    </div>
                    <div className=" fs-3 font-monospace">
                        <p><span class="material-symbols-outlined">Home</span> {user.address}</p>
                    </div>
                    <div className=" fs-3 font-monospace">
                        <p><span class="material-symbols-outlined">Stars</span> {user.rank}</p>
                    </div>
                    
                    
                </Grid>
                   
            </div>
        </div>
    )
}