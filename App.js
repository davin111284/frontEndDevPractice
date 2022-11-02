import { Parallax } from 'react-parallax';
import './App.css';
import  './PermanentMarker-Regular.ttf';
import beforeOne from './beforeOne.jpg';
import beforeTwo from './beforeTwo.jpg';
import afterOne from './afterOne.jpg';
import afterTwo from './afterTwo.jpg';



function App() { 
  return (
    <div className="App">
      <Parallax className='parallaxOne' strength={300} >  
        <div className='content1'>
            <div className='text-content'>Do Over Restoration</div>
        </div>  
      </Parallax>

      <div className='spacer'></div>

      <Parallax strength={150} bgImage={beforeOne} >  
        <div className='content-two'>
            <div className='cleaning'>Cleaning</div>
        </div>  
      </Parallax>

      <div className='spacer'></div>

      <Parallax strength={150} bgImage={afterOne} >  
        <div className='content-two'>
            <div className='customization'>Customization</div>
        </div>  
      </Parallax>

      <div className='spacer'></div>

      <Parallax strength={150} bgImage={beforeTwo}>  
        <div className='content-two'>
            <div className='restoring'>Restoring</div>
        </div>  
      </Parallax>

      <div className='spacer'></div>

      <Parallax className='afterTwo' strength={50} bgImage={afterTwo} >  
        <div className='content-two'>
            <div className='do-over'>Time For Your Do Over</div>
        </div>  
      </Parallax>
      <Parallax strength={-200} >  
        <div className='content-three'>
            <div className='contact'>
              <h4>Pricing available upon request</h4>
            <a href="mailto:JohnDoe@gmail.com">JohnDoe@gmail.com</a>
            <h5>Instagram: @Do-Overkicks</h5>
            </div>
        </div>  
      </Parallax>
          
    </div>
  );
}

export default App;
