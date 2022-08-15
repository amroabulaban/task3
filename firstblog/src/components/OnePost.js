import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import {useParams} from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
 function urlFor(source){
    return builder.image(source); 
 }


export default function OnePost(){
    const [postData, setPostData]= useState(null);
    const { slug } = useParams();
    console.log(slug);
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
            <h2>{postData.title}</h2>
            </div>
            <img 
            src={urlFor(postData.mainImage).width(100).url()} 
            alt=" " 
            />
            <div>
                <BlockContent
                  blocks = {postData.body}
                  //projectId={sanityClient.client.Config().projectId}
                  //dataset = {sanityClient.client.Config().projectId}
                />

            </div>
        </div>

    );
}