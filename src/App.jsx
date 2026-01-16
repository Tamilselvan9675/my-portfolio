import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./app/Router";
import Loader from "./components/ui/Loader";

export default function App() {
  const [loaded, setLoaded] = useState(false);

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

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // REACT LOADER
  if (!loaded) {
    return <Loader fullscreen overlay size="lg" text="Loading website..." />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-app text-app">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
