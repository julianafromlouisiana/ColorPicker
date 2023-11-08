import { useState } from 'react'


const Color =({ color, setSelectedColor }) => {
  return (
    <div className={color} onClick={() => setSelectedColor(color)}></div>
  );
}
//or using object deconstruction
//const Color = ({color}) => {
  //return <div className={color}></div>
//}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor}/>
        </div>
        
    </div>
  );
 };
export default App;
