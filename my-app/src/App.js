import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view'
import menus from './components/tree-view/data';
function App() {

  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}
      {/* star rating component */}
      {/* <StarRating noOfStarts={10}/> */}
      {/* image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page ={"1"}limit={"10"}/> */}
      {/* load more data */}
      {/* <LoadMoreData/> */}
      {/* tree view */}
      <TreeView memus={menus}/>
    </div>
    
  );
}

export default App;
