import Date from './date'

export default function Comments({ comments = [] }) {
  return (
    <>
     <h2 className="header">Comments:</h2>
      <ul className="commentContainer">
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="commentList">
            <hr className="mb-5" />
            
            <div className="commentDate">
              <h4>{name}</h4>
              <h5><Date dateString={_createdAt}/></h5>
              </div>
            <div className="comment-body"><p>{comment}</p></div>
           
         </li>
        ))
        }
      </ul>
       <style jsx>{`
       .header{
         color:red;
       }
       ul.commentContainer {
         list-style-type:none; 
        
         padding:0;
        }
       .commentList{
        
         padding-bottom:0.3rem;
        
       }
       h4{
         margin:0;
         display:inline-block;
         margin-right:1rem;
       
        
       }
       h5{display:inline-block;}
       
       .comment-body{
         width:100%;
         min-height:4rem;
         padding:0.3rem 1rem 0 ;
         background-color:#ffffff;
         box-shadow: 2px 2px 10px #246756;
         border-radius:5px;
       }
       

       `}</style>
    </>
  )
}