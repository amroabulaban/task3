import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import {useParams} from "react-router-dom";
//import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

/*const builder = imageUrlBuilder(sanityClient);
 function urlFor(source){
    return builder.image(source); 
 }*/


export default function OnePost(){
    const [postData, setPostData]= useState(null);
    const { slug } = useParams();
    
    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                
            }`,
            {slug}
        )
        .then((data) => setPostData(data[0]))
        .catch(console.error);
    },[slug]);
    if (!postData) return <div>loading...</div>

    return(
        <div>
            <div>
            <h2 style={{
          marginLeft: '4rem',
          fontSize: '30px',
          padding: '20px',
          color: 'navy'}}>{postData.title}</h2>
            </div>
            <div style={{
          marginLeft: '4rem',
          fontSize: '20px',
          padding: '20px',
          color: 'navy'}}>
                <BlockContent
                  blocks = {postData.body}
                  
                  projectId="jyfjw9h1"
                  dataset = "production"
                />

            </div>
        </div>

    );
}