import React, { useEffect, useState } from 'react';
import './projectdetail.css';
import baseurl from '../../baseurl/baseurl';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faChartLine, faCircleCheck, faCode, faCodeBranch, faFilePdf, faLink, faPager, faPeopleGroup, faSignal } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail=()=>{
    const [pro_id,setpro_id]=useState("");
    const [pro_title,setpro_title]=useState("");
    const [pro_desc,setpro_desc]=useState("");
    const [pro_domains,setpro_domains]=useState([]);
    const [program,setprogram]=useState("");
    const [grad_year,setgrad_year]=useState("");
    const [guide_id,setguide_id]=useState("");
    const [mem_1,setmem_1]=useState("");
    const [mem_2,setmem_2]=useState("");
    const [mem_3,setmem_3]=useState("");
    const [mem_4,setmem_4]=useState("");
    const [pro_status,setpro_status]=useState("");
    const [abstract_link,setabstract_link]=useState("");
    const [report_link,setreport_link]=useState("");
    const [hosted_link,sethosted_link]=useState("");
    const [code_link,setcode_link]=useState("");
    const [user,setuser]=useState();

    const { id }=useParams();

    const navigate = useNavigate();

    useEffect(()=>{
            const fetchData =async()=>{
                try{
                const response = await baseurl.get(`/projects/${id}`);
                console.log(response.data[0]);
                setpro_id(response.data[0].pro_id);
                setpro_title(response.data[0].pro_title);
                setpro_desc(response.data[0].pro_desc);
                setprogram(response.data[0].program);
                setgrad_year(response.data[0].grad_year);
                setguide_id(response.data[0].guide_id);
                setmem_1(response.data[0].mem_1);
                setmem_2(response.data[0].mem_2);
                setmem_3(response.data[0].mem_3);
                setmem_4(response.data[0].mem_4);
                setpro_domains(response.data[0].pro_domains);
                setpro_status(response.data[0].pro_status);
                setabstract_link(response.data[0].abstract_link);
                setreport_link(response.data[0].report_link);
                sethosted_link(response.data[0].hosted_link);
                setcode_link(response.data[0].code_link);
            }catch(err){
                console.log(err)
                }
            };
            fetchData();
        },[]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await baseurl.get(`/faculty/facultyid/${guide_id}`);
                setuser(response.data[0].user_id)
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[guide_id]);

    
    return(
        <div className='projectdetail'>
            <h1>Project Details</h1>
            <div className='projectdetailcontainer'>
                    <div className='division'>
                        <div className='projectnameid'>
                            <h1>{pro_title}</h1>
                            <span className='projectid'>{pro_id}</span>
                        </div>

                        <p className='projectdesc'>{pro_desc}</p>
                        
                        <div className='projectsdoc'>
                                <button className='docbut'><FontAwesomeIcon icon={faPager}/> View Deployment</button>
                                <button className='docbut'><FontAwesomeIcon icon={faCode}/> View Code</button>
                                <button className='docbut'><FontAwesomeIcon icon={faFilePdf}/> View Report</button>
                                <button className='docbut' onClick={()=>{window.open(abstract_link)}}><FontAwesomeIcon icon={faFilePdf}/> View Abstaract</button>
                        </div>
                    </div>

                    <div className='division'>
                            <div className='projectsub'>
                                <p className='projectteam'>Status of Project 
                                    <button className='projectsubbut'>
                                        {pro_status ? <FontAwesomeIcon icon={faCircleCheck}/> : <FontAwesomeIcon icon={faChartLine}/>} 
                                        {pro_status ? " Completed" : " Ongoing"}
                                    </button>
                                </p>
                                <p className='projectteam'>Project Domain 
                                    {pro_domains.map((item,i)=>{
                                        return(
                                            
                                            <button className='projectsubbut' key={i}>{item}</button>
                                            
                                        )    
                                    })}
                                </p>
                                    
                                <p className='projectteam'>Program <button className='projectsubbut'>{program}</button></p>
                                <p className='projectteam'>Graduation Year <button className='projectsubbut'>{grad_year}</button></p>
                                <p className='projectteam'>Guided By <button className='projectsubbut' onClick={()=>navigate(`/guide/${user}`)}>{guide_id}</button></p>  
                            
                                <table className='memtable'>
                                    <thead>
                                        <tr className='bg-primary'>
                                            <th scope="col">Done By</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className='guidedproject'>{mem_1}</td>
                                        </tr>
                                        <tr>
                                            <td className='guidedproject'>{mem_2}</td>
                                        </tr>
                                        <tr>
                                            <td className='guidedproject'>{mem_3}</td>
                                        </tr>
                                        <tr>
                                            <td className='guidedproject'>{mem_4}</td>
                                        </tr>
                                    </tbody>
                                </table>        
                            </div>
                    </div>
            </div>   
        </div>
    )
}

export default ProjectDetail;