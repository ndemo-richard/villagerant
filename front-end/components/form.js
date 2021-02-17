import {useState} from 'react'
import { useForm } from 'react-hook-form'

export default function Form ({_id}) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async data => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
    <>
      <h3>Thanks for your comment!</h3>
      <p>Awaiting approval from the admin</p>
      <ul>
        <li>
          Name: {formData.name} <br />
          Email: {formData.email} <br />
          Comment: {formData.comment}
        </li>
      </ul>
    </>)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="container" disabled>
      <input ref={register} type="hidden" name="_id" value={_id} />
      <label className="commentLabel">
        <span className="text-gray-700">Comment</span>
        <textarea ref={register({required: true})} name="comment" className="commentText" rows="8" placeholder="Enter some long form content."></textarea>
      </label>
      <div className="row">
      <label className="nameLabel">
        <span className="text-gray-700">Name</span>
        <input name="name" ref={register({required: true})} className="nameText" placeholder="your name"/>
      </label>
      <label className="emailLabel">
        <span className="text-gray-700">Email</span>
        <input name="email" type="email" ref={register({required: true})} className="emailText" placeholder="your@email.com"/>
      </label>
      </div>
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" className="button" value="POST COMMENT"/>
    </form>
    <style jsx>{`
      .container{
        display:flex;
        flex-direction:column;
        
        background-color:black;
        box-shadow: 2px 2px 10px #246756;
        padding : 5px;
        border-radius:5px;
      }
      .commentText{
        width:100%;
        border-radius:5px;
        height:300px;
        box-shadow: inset -3px -3px 10px #ffffff;

      }
      .row{
        width:300px;
        height:9rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background:inherit;
        margin:auto;
        margin-top:1.5rem;
        margin-bottom:3rem;
      }
      .nameText{
        width:100%;
        height:2.5rem;
        border-radius:10px;

      }
     
      .emailText{
        width:100%;
        height:2.5rem;
        border-radius:10px;
      }
     

      .text-gray-700{
        background-color: transparent; 
        color: #fff; 
        height: 45px;
      }
      .button{
        margin:auto;
        margin-bottom:3rem;
        width:8rem;
        background-color:#e67331;
        color: white; 
        border-radius: 15px; 
        font-style: italic; 
        padding: 10px 3px; 
}
   @media(max-width:768px){
     .row{
       width:100%;
       max-width:calc(100vw-10%);
     }
   }
      }
    `}</style>
    </>
)
}