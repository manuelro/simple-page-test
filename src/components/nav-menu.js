import * as React from "react"

const NavMenu = ({ title, items, className }) => (
  <ul className={`p-0 m-0 ${className}`}>
    { title ? <li className="font-bold text-base">{ title }</li> : null }
    { items.map((item, index) => <li key={index} className="text-sm">{ item.text }</li>) }
  </ul>
)

export default NavMenu
