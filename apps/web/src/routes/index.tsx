import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "../App";
import AccountsPage from "../features/accounts/pages/AccountsPage";
import TransfersPage from "../features/transfers/pages/TransfersPage";
import CardsPage from "../features/cards/pages/CardsPage";
import PaymentsPage from "../features/payments/pages/PaymentsPage";
import { ErrorBoundary } from "../components/common/ErrorBoundary";

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <AccountsPage />,
      },
      {
        path: "/accounts",
        element: <AccountsPage />,
      },
      {
        path: "/transfers",
        element: <TransfersPage />,
      },
      {
        path: "/cards",
        element: <CardsPage />,
      },
      {
        path: "/payments",
        element: <PaymentsPage />,
      },
    ],
  },
  // Add more routes as needed
  {
    path: "*", // 404 route
    element: (
      <ErrorBoundary>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-2 text-gray-600">Page not found</p>
          </div>
        </div>
      </ErrorBoundary>
    ),
    errorElement: <ErrorBoundary />,
  },
]);

function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
