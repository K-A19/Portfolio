import './App.css'
import HTMLFlipBook from 'react-pageflip'
import { useState } from 'react'
import Cover from './pages/Cover'
import BackCover from './pages/BackCover'
import Page from './pages/Page'


function App() {

  // For keeping track of the current page
  const [currentPage, setCurrentPage] = useState(0)

  // For keeping track of the current state of the page
  const [isFlipping, setIsFlipping] = useState(false)

  return (
    <div id="scrapbook" className={(currentPage === 0) && !isFlipping ? 'closed' : 'open'}>
      <HTMLFlipBook width={550} height={500} showCover="true" 
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