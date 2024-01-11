// import { Tooltip as ReactTooltip} from 'react-tooltip'
import './App.css'
import Tooltip from './Tooltip'

function App() {
  

  return (
    <>
      <>
      <button className="App">
        <h1 data-tooltip-id="my-tooltip-1" >
          hover me 
        </h1>       
      </button>
      <Tooltip tooltipId="my-tooltip-1" tooltipContent="This is the tooltip content!"
      placement="bottom" />
      <div >
        <h1 data-tooltip-id="my-tooltip-2"> Tooltip2</h1>
        <Tooltip tooltipId="my-tooltip-2" tooltipContent="This is 2nd tooltip!"
      placement="right" />
        </div>

      
      
    </>
        
    </>
  )
}

export default App
