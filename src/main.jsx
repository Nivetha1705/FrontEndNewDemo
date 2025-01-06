import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './app1.jsx';
//import List from './list.jsx';
//import UseEffect from './useeffect.jsx'; 
//import UseRef from './useref.jsx';
//import Example from '../31-dec/useex1.jsx';
//import Img from './userefimg.jsx';
//import New from './newhook.jsx';
//import Appparam from './appparam.jsx';
import Apps from './apps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Apps />
  </StrictMode>,
)

  