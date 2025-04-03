import "./styles/index.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import BlackNavbar from "./layouts/BlackNavbar";
import { useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
// import ApplicationsPage from "./pages/ApplicationsPage";
// import BooksPage from "./pages/BooksPage";
// import PhotosPage from "./pages/PhotosPage";
// import NotFound from "./pages/NotFound";

// The sub pages for the photo
// import SportPhotoPage from "./pages/photo-pages-sections/SportPhotoPage";
// import MosaicPhotoPage from "./pages/photo-pages-sections/MosaicPhotoPage";
// import CityscapePhotoPage from "./pages/photo-pages-sections/CityscapePhotoPage";
// import LandscapePhotoPage from "./pages/photo-pages-sections/LandscapePhotoPage";

// The sub pages for the books
// import CivilisationBook from "./pages/book-pages-sections/CivilisationBook";
// import WizzyEnAsieBook from "./pages/book-pages-sections/WizzyEnAsieBook";

import ScrollToTop from "./components/ScrollToTop";

import {lazy, Suspense} from "react";


const PhotosPage = lazy(() => import("./pages/PhotosPage"));
const ApplicationsPage = lazy(() => import("./pages/ApplicationsPage"));
const BooksPage = lazy(() => import("./pages/BooksPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SportPhotoPage = lazy(() => import("./pages/photo-pages-sections/SportPhotoPage"));
const MosaicPhotoPage = lazy(() => import("./pages/photo-pages-sections/MosaicPhotoPage"));
const CityscapePhotoPage = lazy(() => import("./pages/photo-pages-sections/CityscapePhotoPage"));
const LandscapePhotoPage = lazy(() => import("./pages/photo-pages-sections/LandscapePhotoPage"));
const CivilisationBook = lazy(() => import("./pages/book-pages-sections/CivilisationBook"));
const WizzyEnAsieBook = lazy(() => import("./pages/book-pages-sections/WizzyEnAsieBook"));



function App() {
  const location = useLocation(); // Get the current location (path)
  const photoPaths = [
    "/photos",
    "/photos/sport",
    "/photos/mosaic",
    "/photos/cityscape",
    "/photos/landscape",
  ];
  const isPhotosPage = photoPaths.includes(location.pathname);

  return (
    <>
      {isPhotosPage ? <BlackNavbar /> : <Navbar />}
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        {/* Sub photo pages  */}
        <Route path="/photos/sport" element={<SportPhotoPage />} />
        <Route path="/photos/mosaic" element={<MosaicPhotoPage />} />
        <Route path="/photos/cityscape" element={<CityscapePhotoPage />} />
        <Route path="/photos/landscape" element={<LandscapePhotoPage />} />
        <Route path="/books" element={<BooksPage />} />
        {/* Sub book pages */}
        <Route path="/books/civilisation" element={<CivilisationBook />} />
        <Route path="/books/wizzyenasie" element={<WizzyEnAsieBook />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer noPadding={isPhotosPage} />
    </>
  );
}

export default App;
