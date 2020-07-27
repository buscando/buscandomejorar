import React from "react"
//import Form from "./Form"
//import Button from "./Button"
import TextField from "./TextField"
import { useAddComment } from "../util/commentFunctions"
import '../styles/index.scss'

function Comments({ id }) {
  const [content, setContent] = React.useState("")
  const [name, setName] = React.useState("")
  const { loading, addComment } = useAddComment()

  function comment(e) {
    e.preventDefault()
    addComment({ name, content, postId: id }).then(() => {
      setContent("")
      setName("")
    })
  }

  return (
    <div >      
            <form onSubmit={comment}>
              <div > 
              <b>Name</b>
              <TextField 
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />              
              <br/>
              <b>Comment</b>
              <TextField 
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={3}
                required
              />
              </div>
              
              <button type="submit" class="btn btn-info pull-right" loading={loading}>Comment</button>
            </form>
    </div>
  )
}

export default Comments