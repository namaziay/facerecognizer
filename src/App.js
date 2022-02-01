import './App.css';
import Navigation from './Components/Navigation/navigation'
import Logo from './Components/Logo/logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
