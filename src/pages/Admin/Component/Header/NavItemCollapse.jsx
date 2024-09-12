import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavItemcollapse = ({
    title,
    content,
    icon,
    name,
    ActiveNavName,
    setActiveNavName
}) => {
    const [ischeck, setIschecked] = useState(false)
    useEffect(()=>{
     if(ActiveNavName !== name){
        setIschecked(false)
     }
    },[ActiveNavName,name])
  return (
<div className="collapse collapse-arrow bg-base-200 min-h-0 rounded-none py-2">
  <input type="checkbox" className='min-h-0 py-2' checked={name === ActiveNavName}
    onChange={()=>{
        setActiveNavName(name); setIschecked(!ischeck)
    }}
  />
  <div className={`collapse-title text-lg font-medium min-h-0 py-0 pl-0 flex items-center gap-x-2 ${
    name === ActiveNavName ? "font-bold text-primary" : "font-semibold text-[#A5A5A5]"
  }` }>
    {icon}
    {title}
    </div>
  <div className="collapse-content">
    <div className='mt-2 flex flex-col gap-y-2'>
       {content.map((item)=>(
        <Link to={item.link} >
         {item.title}
        </Link>
       ))}
    </div>
  </div>
</div>
  )
}

export default NavItemcollapse