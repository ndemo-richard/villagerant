import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from '../../styles/Post.module.scss';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Avatar from '../../components/avatar';
import client from '../../client';
import Comments from '../../components/comments';
import Form from '../../components/form';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export const Post = ({ _id, title, body, image,publishedAt, authorImage, authorName, comments }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imgUrlBuilder = imageUrlBuilder({
            projectId: 'om0uizd8',
            dataset:'production',
        });
        setImageUrl(imgUrlBuilder.image(image)); 
         
    },  []);


    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
        <div className={styles.container}>
        
            <div className={styles.main}>
                <h1 className={styles.post_title}>{title}</h1>
                {imageUrl && <img className={ styles.mainImage} src={imageUrl} />}
                <div className={styles.body}>
                   <BlockContent blocks={body} />
                </div>
                <div className={styles.avatar_date}>
             <div className={styles.avatarContainer}>
             {authorImage && (
                            <div className={styles.avatarRoundImage}>
                            <img className={styles.avatarRoundImage} src={urlFor(authorImage).width(50).url()}/>
                            </div>
                             )}
                  <div className={styles.avatarFont}>{authorName}</div>
             </div>
              <Date dateString={publishedAt}/>
              </div>  

              <div className={styles.commentContainer}>
                 <div>
                 <Comments comments={comments} />
                 </div>
                 <div>
                 <Form _id={_id} />
                 </div>
                  
                  </div> 
            </div>
        </div>
        </Layout>

    )
};
export const getServerSideProps = async pageContext =>{
    const pageSlug = pageContext.query.slug;
    console.log(pageSlug);
    if (!pageSlug){
        return {
            notFound:true
        }
    }
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]{_id,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name,'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
    }}`)
    const url= `https://om0uizd8.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];

    if(!post){
        return{
            notFound:true
        }
    } else{
        return{
            props:{
                body:post.body,
                title:post.title,
                image:post.mainImage,
                publishedAt:post.publishedAt,
                authorName:post.authorName,
                authorImage:post.authorImage,
                comments:post.comments,
                _id:post._id

            }
        }
    }

}

export default Post;