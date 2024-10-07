import { useState } from 'react'
import Contact from '~/components/Contact'
import Header from '~/components/Header'
import Profile from '~/components/Profile'
import Project from '~/components/Project'
import SideBar from '~/components/SideBar'
import Skill from '~/components/Skill'

function Home() {
  const [activePage, setActivePage] = useState('about')

  const handleSwitch = (pageName) => {
    setActivePage(pageName)
  }

  return (
    <div className='lg:container w-full h-full lg:h-[90%] flex flex-col bg-white lg:rounded-xl'>
      {/* Header */}
      <Header/>
      <div className="main-content flex flex-col-reverse lg:flex-row md:h-full">
        {/* SideBar */}
        <SideBar handleSwitch={handleSwitch}/>
        {/* MainContent */}
        {activePage === 'about' && <Profile />}
        {activePage === 'skill' && <Skill />}
        {activePage === 'project' && <Project />}
        {activePage === 'contact' && <Contact />}
      </div>
    </div>
  )
}

export default Home
