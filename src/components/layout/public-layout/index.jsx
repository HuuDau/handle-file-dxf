// import {Outlet} from 'react-router-dom'
import React from "react"

function PublicLayout({ children }) {
  return (
    <div>
      {/* <Outlet /> */}
      <p>   con me layout</p>
      {children}
      <p>   con me mayu</p>
    </div>
  )
}

export default PublicLayout
