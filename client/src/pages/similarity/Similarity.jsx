import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import './similarity.css';
import { useState } from 'react';
import axios from 'axios';

const Similarity = () => {

    const [filename,setfilename]=useState('No File');
    const [file,setfile]=useState('');
    const [similarpro,setsimilarpro]=useState('');
    const [textsearch,settextsearch]=useState('');
    const [similar1,setsimilar1]=useState();
    const [similar2,setsimilar2]=useState();
    const [similar3,setsimilar3]=useState();
    const [similar4,setsimilar4]=useState();

    let items=[];

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const search = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file',file);
        
        try{
            const resp = await axios.post('https://abstract-check-api.onrender.com/predict/pdf',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }

              });
              setsimilar1(resp.data[0]);
              setsimilar2(resp.data[1]);
              setsimilar3(resp.data[2]);
              setsimilar4(resp.data[4]);
              // console.log(resp.data[0]);
              // for (const [key,project] of Object.entries(resp.data)) {
              //     console.log(project);
              //     items.push(project);
              // }
            console.log(resp);
            console.log(typeof(resp.data));
            // for (const [key, project] of Object.entries(resp.data)) {
            //     console.log(`Project ${key}:`);
            //     console.log(project.Abstract); // Access the "Abstract" property
            //     console.log(project.Domain); // Access the "Domain" property
            //     // Access other properties as needed
            //     console.log("------------------");
            //   }
            setsimilarpro(resp.data);
        }catch(err){
            console.log(err);
        }
    }

    const searchText = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', textsearch);
        try {
            const resp = await axios.post(
            'https://abstract-check-api.onrender.com/predict/text',
            formData, // Set the request body to null since we're using form parameters
            {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
            );
              
            
            for (const [key, project] of Object.entries(resp.data)) {
                console.log(`Project ${key}:`);
                console.log(project.Abstract); // Access the "Abstract" property
                console.log(project.Domain); // Access the "Domain" property
                // Access other properties as needed
                console.log("------------------");
              }
            setsimilarpro(resp.data);
        }catch(err){
            console.log(err);
        }
    }

    const handletextsearch = (e) => {
        settextsearch(e.target.value);
    }

    return(
        <Layout>
            <div className='similarity'>
                <div className='drop_box'>
                    <h1>Search Similar Projects</h1>
                    <label>Upload Abstract here</label>
                    <input type="file" name="myFile" className="drop-zone__input" onChange={change}/>
                    <button onClick={search} className='logbut'>Search</button>
                </div>
                <h3>OR</h3>
                <div className="drop_box">
                    <label>Paste your Abstract here</label>
                    <textarea value={textsearch} onChange={handletextsearch} rows={4} cols={50}></textarea>
                    <button onClick={searchText} className='logbut'>Search</button>
                </div>
    
                <div className='pro_box'>
                    <h2>Similar Projects Found</h2>

                    {similar1 &&  <div className='simpro'>
                        <span className='simpr_title'>{similar1.P}</span>
                        <span className='simpr_domain'>{similar1.Domain}</span>
                        <span className='simpr_program'>{similar1.Program}</span>
                    </div>}

                    {similar2 &&  <div className='simpro'>
                        <span className='simpr_title'>{similar1}</span>
                        <span className='simpr_domain'>{similar2.Domain}</span>
                        <span className='simpr_program'>{similar2.Program}</span>
                    </div>}

                    {similar3 &&  <div className='simpro'>
                        <span className='simpr_title'>{similar1}</span>
                        <span className='simpr_domain'>{similar3.Domain }</span>
                        <span className='simpr_program'>{similar3.Program }</span>
                    </div>}

                    {similar4 &&  <div className='simpro'>
                        <span className='simpr_title'>{similar1}</span>
                        <span className='simpr_domain'>{similar4.Domain }</span>
                        <span className='simpr_program'>{similar4.Program }</span>
                    </div>}
                </div>
            </div>
        </Layout>     
    )
}

export default Similarity;