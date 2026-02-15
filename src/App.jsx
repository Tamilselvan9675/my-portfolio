import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./app/Router";
import Loader from "./components/ui/Loader";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  const isNotFoundPage =
    location.pathname !== "/" &&
    !["/about", "/projects", "/skill", "/blogs", "/contact"].includes(
      location.pathname
    );

  useEffect(() => {
    const removeStaticLoader = () => {
      const el = document.getElementById("app-loader");
      if (el) el.remove();
    };

    if (document.readyState === "complete") {
      removeStaticLoader();
      setLoaded(true);
      return;
    }

    const handleLoad = () => {
      removeStaticLoader();
      setLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loaded) {
    return <Loader fullscreen overlay size="lg" text="Loading website..." />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-app text-app">
      {!isNotFoundPage && <Navbar />}

      <main className="flex-1">
        <AppRouter />
      </main>

      {!isNotFoundPage && <Footer />}

      <Toaster position="top-right" />
    </div>
  );
}
