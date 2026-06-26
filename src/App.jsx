import './App.css'
import HTMLFlipBook from 'react-pageflip'
import { useState } from 'react'
import Cover from './pages/Cover'
import BackCover from './pages/BackCover'
import Page from './pages/Page'

function App() {

  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div id="scrapbook" className={currentPage === 0 ? 'closed' : 'open'}>
      <HTMLFlipBook width={550} height={500} showCover="true" onFlip={(e) => setCurrentPage(e.data)}>
      <Cover />
      <Page />
      <Page />
      <BackCover />
      </HTMLFlipBook>
    </div>
    
  );
}

export default App