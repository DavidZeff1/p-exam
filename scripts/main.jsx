import { render } from 'preact'
import 'katex/dist/katex.min.css'
import '../styles/main.css'
import '../styles/theme.css'
import '../styles/learning.css'
import { App } from './App.jsx'

render(<App />, document.getElementById('app'))
