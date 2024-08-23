import React from 'react'
import MenuList from './menu-list'
export default function TreeView({memus=[]}) {
  return (
    <div className="tree-view-container"> 
      <MenuList list={memus}/>
    </div>
    
  )
}
