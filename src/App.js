import { ViewportProvider } from './components/contexts/viewportContext';
import useViewport from './hooks/useViewport';
import ProductPage from './components/ProductPage';

function App() {
  return (
      <ViewportProvider>
        <ProductPage />
      </ViewportProvider>
  );
}

export default App;
