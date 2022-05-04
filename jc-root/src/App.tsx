import Text from './components/Text'
import Button from './components/Button'
import Centrepiece from './components/Centrepiece'

function App() {
  const centerPic = require('./images/homepic.png');
  return (
    <div >
      <Text text='contact' color='grey' />
      <Centrepiece photo={centerPic}></Centrepiece>

    </div>
  );
}

export default App;
