import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Home } from './templates/Home';
import './styles/global-style.css';
import { CounterContextProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  // </StrictMode>,
);

