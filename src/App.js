import { Route, Routes } from "react-router-dom";
import NavLinks from "./shared/components/navigation/NavLinks";
import Home from "./pages/Home";
import Footer from "./shared/components/footer/Footer";
import "./shared/css/style.css";
import CanadaImmigration from "./pages/immigration/Canada";
import SideNavigation from "./shared/components/sideNavigation/SideNavigation";
import ContactUs from "./pages/ContactUs";
import CanadaTourist from "./pages/tourist/Canada";
import CanadaStudy from "./pages/study/Canada";
import UKTourist from "./pages/tourist/UK";
import USATourist from "./pages/tourist/USA";
import SchengenTourist from "./pages/tourist/Europe";
import HongKong from "./pages/immigration/HongKong";
function App() {
  return (
    <>
      <NavLinks />
      <SideNavigation whatsapp={"9769601410"} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* canada routes */}
        <Route
          path="/immigration-visa/canada"
          element={<CanadaImmigration />}
        />
        <Route path="/tourist-visa/canada" element={<CanadaTourist />} />
        <Route path="/study-visa/canada" element={<CanadaStudy />} />

        {/* hong kong routes */}
        <Route path="/immigration-visa/hong_kong" element={<HongKong />} />
        {/* UK routes */}
        <Route path="/tourist-visa/uk" element={<UKTourist />} />

        {/* USA routes */}
        <Route path="/tourist-visa/usa" element={<USATourist />} />

        {/*  Schengen routes */}
        <Route path="/tourist-visa/schengen" element={<SchengenTourist />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<ContactUs />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
