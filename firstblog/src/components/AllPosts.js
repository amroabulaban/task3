import React, {useEffect,useState} from "react";
import sanityClient from "../client.js";
import {Link} from "react-router-dom";
import '../App.css';



export default function AllPosts(){
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
               
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

    return(
        <div style={styles} >
        <div >
            <h2   style={{
          fontSize: '40px',
          color: 'navy'}}> English Blog</h2>
            <div >
                {allPostsData &&
                 allPostsData.map((post, index) => (
                    <Link to = {"/onepost/" + post.slug.current} key= {post.slug.current}> 
                    <div >
                       <span key = {index}>
                            <span>
                                    <h2 style={{
          fontSize: '40px',
          color: 'navy'}}>{post.title}</h2>
                                     </span>
                            
                            <img src = {post.mainImage.asset.url} alt = " " width="800" 
                               height="400" />  
                               
                               
                        </span>
                        </div>
                        </Link> 
                       
                 ))}
            </div>
        </div>
    </div>
    )
};