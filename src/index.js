import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Main } from './main'
import { store } from './redux/_helpers'
import 'antd/dist/antd.css';
import './styles/css/style.css'
import './styles/css/custom.css'

const rootElement = document.getElementById('root')
require('dotenv').config()
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
)