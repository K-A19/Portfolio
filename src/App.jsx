import './App.css'
import HTMLFlipBook from 'react-pageflip'
import Cover from './pages/Cover'
import BackCover from './pages/BackCover'
import Page from './pages/Page'

function App() {

  return (
    <HTMLFlipBook width={300} height={500}>
      <Cover />
      <Page />
      <BackCover />
    </HTMLFlipBook>
  );
}

export default App