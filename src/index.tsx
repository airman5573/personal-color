import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './scss/style.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(<App></App>);
}
