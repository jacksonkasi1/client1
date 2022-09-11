/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

function Breadcrumb(props) {
  const handelSmoothScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="main-bread" 
    style={{cursor: "pointer"}}
    onClick={handelSmoothScroll}>
      <div className="dot"></div>
      <div className=" text-main text-dot">{props.text}</div>
    </div>
  )
}
export default Breadcrumb
