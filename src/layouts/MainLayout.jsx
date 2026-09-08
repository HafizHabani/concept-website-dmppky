import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/**
 * Shared shell for every page: navbar + footer around routed content.
 */
function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg font-body text-text">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
