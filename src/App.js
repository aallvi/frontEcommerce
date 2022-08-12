import { Navigation } from "./navigation/Navigation";
// import { Homescreen } from "./screens/Homescreen";
import './styles/styles.scss'
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
      <Provider store={store} >
        
      <Navigation/>

      </Provider>
  );
}

export default App;
