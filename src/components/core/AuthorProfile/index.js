import React from "react"
import Gravatar from "react-gravatar"

import { Author } from "./styled"

const AuthorProfile = ({ item }) => {
  return (
    <Author>
      <Gravatar email={item.author_email} />
      <span>{item.author_name}</span>
    </Author>
  )
}

export default AuthorProfile
