import AppRoutes from './AppRoutes';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="app-container bg-background min-h-screen text-on-background selection:bg-secondary/30">
          <AppRoutes />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
