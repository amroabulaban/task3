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
                body,
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
                    <div>
                    <Link to = {"/onepost/" + post.slug.current} key= {post.slug.current}>
                    <div style={styles}>
                    <span key = {index}>
                    <span>
                    <h2 style={{fontSize: '40px', color: 'navy'}}>{post.title}</h2>
                    </span>
                    <img src = {post.mainImage.asset.url} alt = " " width="500" height="400" /> 
                    </span>
                        </div>
                        </Link>
                        <div style={{color: 'navy'}} 
                        dangerouslySetInnerHTML={{ __html: post.body[0].children[0].text.substring(0,500) +"[..]" }} />
                        </div>
                        
                 ))}
            </div>
        </div>
    </div>
    )
};