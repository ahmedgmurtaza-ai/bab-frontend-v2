import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AccountsPage from "../features/auth/pages/AccountsPage";
import { Navigate } from "react-router-dom";
import TransfersPage from "../features/transfers/pages/TransfersPage";
import CardsPage from "../features/cards/pages/CardsPage";
import PaymentsPage from "../features/payments/pages/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage";
import authRoutes from "../features/auth/routes";
import { AntdProvider } from "@repo/ui";

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
    path: "*",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "accounts",
    element: <AccountsPage />,
  },
  {
    path: "transfers",
    element: <TransfersPage />,
  },
  {
    path: "cards",
    element: <CardsPage />,
  },
  {
    path: "payments",
    element: <PaymentsPage />,
  },
  {
    path: "/auth",
    children: authRoutes,
  },
  {
    path: "*", // 404 route
    element: <NotFoundPage />,
  },
]);

function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <AntdProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AntdProvider>
    </QueryClientProvider>
  );
}

export default Providers;
