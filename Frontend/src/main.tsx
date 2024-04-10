import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RelationshipContextProvider } from './app-context/relationship-context-provider.tsx'

const router = createRouter({ routeTree })
const queryClient = new QueryClient();

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
      <RelationshipContextProvider>
        <App />
      </RelationshipContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
