import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default function WholeNav() {

    const [isOpened, setIsOpened] = useState(false)

    const helper = () => {
        setIsOpened(!isOpened)
    }

  return (
    <div>
        <Sidebar isOpened={isOpened} helper={helper}/>
        <Navbar helper={helper}/>
    </div>
  )
}
