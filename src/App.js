import { Provider } from 'react-redux';
import Body from './Components/Body';
import Appstore from './Utils/Appstor';

function App() {
  return (
    <div className=''>
   <Provider store={Appstore}> <Body /> </Provider> 
    </div>
  );
}

export default App;
