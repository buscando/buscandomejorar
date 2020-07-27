import React from "react"
import { useComments } from "../util/commentFunctions"
import AddComment from "./AddComment"
import Comments from "./Comments"

function CommentSection({ id }) {
  const { loading, comments } = useComments(id)

  return (
      <div >
      <AddComment id={id} />
      <Comments comments={comments} id={id} loading={loading} />
      </div>
  )
}

export default CommentSection