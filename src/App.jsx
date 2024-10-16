import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Onboarding from "./components/pages/onboarding";
import JobListing from "./components/pages/job-listing";
import JobPage from "./components/pages/job";
import PostJob from "./components/pages/post-jobs";
import SavedJob from "./components/pages/saved-jobs";
import { ThemeProvider } from "@/components/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/pages/landingpage";
import AppLayout from "@/components/layouts/Applayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },

      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
