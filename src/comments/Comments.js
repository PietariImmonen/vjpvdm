import React, { useState } from 'react'
import "./comments.css"

//Component used for the comments site

export default function Comments() {

    const [comments, setComments] = useState([]) //used for all the comments
    const [comment, setComment] = useState({name:"", desc:""}) //used for storing comment from form

    function handleChange(event) {
        setComment(prevComment => {
            return {
                ...prevComment,
                [event.target.name]: event.target.value
            }
        })
    } //used for checking and writing up the form

    function addNew() {
        setComments(prevComments => {
            return [...prevComments, comment]
        })
    } //used for adding the comment to comments

  return (
    <div className='com'>
        <div className='form-container'>
            <h1 className='comments-header'>Kommentoi</h1>
            <form>
                <input
                    type="text"
                    placeholder="Nimesi"
                    onChange={handleChange}
                    name="name"
                    value={comment.name}
                />
                <textarea 
                    value={comment.task}
                    placeholder="Kommentti"
                    onChange={handleChange}
                    name="desc"
                />
            </form>
            <button onClick={addNew}>Klikkaa lisätäksesi uusi kommentti</button>
        </div>
        <div className='comment'>
            <h2>Kommentit: </h2>
            {comments.map((com, index) => {
                return(
                    <div className='comment-box' key={index}>
                        <p key={index}>{com.name}: {com.desc}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
