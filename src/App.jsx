import './App.css'
import HTMLFlipBook from 'react-pageflip'
import { useState, useEffect } from 'react'
import Cover from './pages/Cover'
import BackCover from './pages/BackCover'
import Page from './pages/Page'

function App() {

  // For keeping track of the current page
  const [currentPage, setCurrentPage] = useState(0)

  // For keeping track of the current state of the page
  const [isFlipping, setIsFlipping] = useState(false)

  // For calculating the height and width of the scrapbook
  const [height, setHeight] = useState(550)
  const [width, setWidth] = useState(500)

  function calculateDimensions() {
    setHeight(window.innerHeight * 0.7)
    setWidth(window.innerWidth * 0.4)
  }

  useEffect(() => {
    calculateDimensions()
    window.addEventListener('resize', calculateDimensions)
  }, [])

  return (
    <div id="scrapbook" className={(currentPage === 0) && !isFlipping ? 'closed' : 'open'}>
      <HTMLFlipBook width={width} height={height} showCover="true" 
        onFlip={(e) => setCurrentPage(e.data)} 
        onChangeState={(e) => setIsFlipping(e.data === "flipping")}>
      <Cover />
      <Page />
      <Page />
      <BackCover />
      </HTMLFlipBook>
    </div>
    
  );
}

export default App