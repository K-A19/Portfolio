import './App.css'
import HTMLFlipBook from 'react-pageflip'
import Cover from './pages/Cover'
import BackCover from './pages/BackCover'
import Page from './pages/Page'

function App() {

  return (
    <div id="scrapbook">
      <HTMLFlipBook width={550} height={500} showCover="true">
      <Cover />
      <Page />
      <Page />
      <BackCover />
      </HTMLFlipBook>
    </div>
    
  );
}

export default App