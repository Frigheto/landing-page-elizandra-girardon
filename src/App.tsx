import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {
  DireitoBancarioPage,
  ExecucoesPage,
  DireitoAgronegocioPage,
  EmprestimosPage,
  CartoesPage,
  SuperendividamentoPage,
  FraudesPage,
  ContasPage,
  ExecucoesBancariasPage,
  DividasRuraisPage
} from "./pages/AreasPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/direito-bancario" element={<DireitoBancarioPage />} />
          <Route path="/execucoes" element={<ExecucoesPage />} />
          <Route path="/direito-agronegocio" element={<DireitoAgronegocioPage />} />
          <Route path="/emprestimos-financiamentos" element={<EmprestimosPage />} />
          <Route path="/cartoes-credito" element={<CartoesPage />} />
          <Route path="/superendividamento" element={<SuperendividamentoPage />} />
          <Route path="/fraudes-golpes" element={<FraudesPage />} />
          <Route path="/contas-servicos-bancarios" element={<ContasPage />} />
          <Route path="/execucoes-bancarias" element={<ExecucoesBancariasPage />} />
          <Route path="/dividas-rurais" element={<DividasRuraisPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
