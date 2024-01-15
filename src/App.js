import { Provider } from 'react-redux';
import Body from './Components/Body';
import Appstore from './Utils/Appstor';

function App() {
  return (
    <>
   <Provider store={Appstore}> <Body /> </Provider> 
    </>
  );
}

export default App;
