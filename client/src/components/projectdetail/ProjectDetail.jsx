import React, { useEffect, useState } from 'react';
import './projectdetail.css';
import baseurl from '../../baseurl/baseurl';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faCircleCheck, faCodeBranch, faFilePdf, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail=()=>{
    // const [p_id,setp_id]=useState("");
    // const [p_name,setp_name]=useState("");
    // const [p_desc,setp_desc]=useState("");
    // const [team_id,setteam_id]=useState("");
    // const [domain,setdomain]=useState("");
    // const [completed,setcompleted]=useState("");
    // const [abstract,setabstract]=useState("");

    // const { id }=useParams();

    // const navigate = useNavigate();

    // useEffect(()=>{
    //         const fetchData =async()=>{
    //             try{
    //             const response = await baseurl.get(`/projects/${id}`);
    //             console.log(response.data[0]);
    //             setp_id(response.data[0].p_id);
    //             setp_name(response.data[0].p_name);
    //             setp_desc(response.data[0].p_desc);
    //             setteam_id(response.data[0].team_id);
    //             setdomain(response.data[0].domain);
    //             setcompleted(response.data[0].completed);
    //             setabstract(response.data[0].abstract);
    //         }catch(err){
    //             console.log(err)
    //             }
    //         };
    //         fetchData();
    //     },[id]);


    // return(
    //     <div className='projectdetail'>
    //         <h1>Project Details</h1>
    //         <div className='projectdetailcontainer'>
    //                 <div className='division'>
    //                     <div className='projectnameid'>
    //                         <h1>{p_name}</h1>
    //                         <span className='projectid'>{p_id}</span>
    //                     </div>
    //                     <p className='projectdesc'>{p_desc}</p>
    //                 </div>

    //                 <div className='division'>
    //                     <div>
    //                         <div className='projectsub'>
    //                             <p className='projectteam'>Project Done By <button className='projectsubbut' onClick={()=>{navigate(`/team/${team_id}`)}}><FontAwesomeIcon icon={faPeopleGroup}/> {team_id}</button></p>
    //                             <p className='projectteam'>Status of Project 
    //                                 <button className='projectsubbut'>
    //                                     {completed ? <FontAwesomeIcon icon={faCircleCheck}/> : <FontAwesomeIcon icon={faCodeBranch}/>} 
    //                                     {completed ? " Completed" : " Ongoing"}
    //                                 </button>
    //                             </p>
    //                             <p className='projectteam'>Project Domain <button className='projectsubbut'>{domain}</button></p>
    //                         </div>
    //                         <div className='projectsdoc'>
    //                             <button className='docbut'><FontAwesomeIcon icon={faFilePdf}/> View SRS</button>
    //                             <button className='docbut'><FontAwesomeIcon icon={faFilePdf}/> View SDD</button>
    //                             <button className='docbut'><FontAwesomeIcon icon={faFilePdf}/> View Report</button>
    //                             <button className='docbut' onClick={()=>{window.open(abstract)}}><FontAwesomeIcon icon={faFilePdf}/> View Abstaract</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //         </div>   
    //     </div>
    // )
}

export default ProjectDetail;