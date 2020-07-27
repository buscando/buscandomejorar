import React from "react"

function Comments({ comments, loading }) {

  if (loading) {
    return <p>Loading...</p>
  }

  if (comments.length === 0) {
    return <p>There is no comments.</p>
  }

  return (
    <>
    <br></br>
    <ul>
      {comments.map(comment => (        
        <li key={comment.id}>
            <div> 
              <div>
                <span style={{color: '#0066cc', fontWeight: 'bold',  fontSize:'large'}} >{comment.name}</span>
                <small style={{float: 'right', fontWeight: 'bold'}}> {comment.updatedAt.toDate().toDateString()} </small> 
              </div>
              <p>{comment.content}</p>  
            </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Comments