import { AuthProvider } from "./auth";
import { PesquisaProvider } from "./pesquisa";

export function AppProvider({children}) {
  return(
    <AuthProvider>
      <PesquisaProvider>
        {children}
      </PesquisaProvider>
    </AuthProvider>
  )
}