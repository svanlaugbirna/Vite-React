import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentOne from './ComponentOne.tsx'
import ComponentTwo from './ComponentTwo.tsx'
import './index.css'
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ComponentOne />
      <ComponentTwo/>
    </RecoilRoot>
  
  </React.StrictMode>,
)
