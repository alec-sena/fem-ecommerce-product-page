import { ViewportProvider } from './components/contexts/viewportContext';
import useViewport from './hooks/useViewport';
import ProductPage from './components/ProductPage';
import './App.css';

function App() {
  return (
      <ViewportProvider>
        <ProductPage />
      </ViewportProvider>
  );
}

export default App;
