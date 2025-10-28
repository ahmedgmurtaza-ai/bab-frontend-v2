import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authRoutes from "../features/auth/routes";
import { AntdProvider } from "@repo/ui";
import Layout from "../components/common/Layout";

const AccountsPage = lazy(() => import("../features/auth/pages/AccountsPage"));
const TransfersPage = lazy(
  () => import("../features/transfers/pages/TransfersPage")
);
const CardsPage = lazy(() => import("../features/cards/pages/CardsPage"));
const PaymentsPage = lazy(
  () => import("../features/payments/pages/PaymentsPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function suspenseWrapper(
  Component: React.LazyExoticComponent<React.ComponentType<object>>
) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/auth",
    children: authRoutes,
  },
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: "/", element: <Navigate to="/accounts" replace /> },
      { path: "accounts", element: suspenseWrapper(AccountsPage) },
      { path: "transfers", element: suspenseWrapper(TransfersPage) },
      { path: "cards", element: suspenseWrapper(CardsPage) },
      { path: "payments", element: suspenseWrapper(PaymentsPage) },
    ],
  },
  // 404 fallback
  {
    path: "*",
    element: suspenseWrapper(NotFoundPage),
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
