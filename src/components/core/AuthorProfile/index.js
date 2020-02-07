import React from "react"
import Gravatar from "react-gravatar"

import { Author } from "./styled"

const AuthorProfile = ({ item, ...props }) => {
  return (
    <Author {...props}>
      <Gravatar email={item.author_email} />
      <div>
        <p>{item.author_name}</p>
        <span>{item.date}</span>
      </div>
    </Author>
  )
}

export default AuthorProfile
