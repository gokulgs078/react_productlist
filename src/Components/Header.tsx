import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">TERRIFIC MINDS DEMO</div>
        <nav className="md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
        </nav>
      </div>


    </header>

  )
}

export default Header

