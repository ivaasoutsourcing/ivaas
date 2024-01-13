import { Route, Routes } from "react-router-dom";
import NavLinks from "./shared/components/navigation/NavLinks";
import Home from "./pages/Home";
import Footer from "./shared/components/footer/Footer";
import NotFound from "./shared/components/notFound/NotFound";
import "./shared/css/style.css";
import CanadaImmigration from "./pages/immigration/Canada";
import SideNavigation from "./shared/components/sideNavigation/SideNavigation";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <NavLinks />
      <SideNavigation whatsapp={"9769601410"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/immigration/canada-pr-visa"
          element={<CanadaImmigration />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
