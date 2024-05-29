import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./pages/Products";
import ContextWrapper from "./Context/useAppContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextWrapper>
        <Products />
      </ContextWrapper>
    </QueryClientProvider>
  );
}

export default App;
