import { useState } from 'react';
import { Provider} from 'react-redux';
import store from './redux/store';

import Container from './components/Container';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import ItemsList from './components/ItemsList';
import Alert from './components/Alert';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [alert, setAlert] = useState({show:false,type:'',message:''});

  const showAlert = (show=false,type='',message='') =>{
    setAlert({show,type,message});
  }
  
  return (
    <Provider store={store}>
      <Container>
        {alert.show && <Alert {...alert} showAlert={showAlert}/>}
        <Title />
        <Input inputValue={inputValue} setInputValue={setInputValue} showAlert={showAlert}/>
        <ItemsList setInputValue={setInputValue} showAlert={showAlert}/>
        <Button />
      </Container>
    </Provider>
  );
}

export default App;
