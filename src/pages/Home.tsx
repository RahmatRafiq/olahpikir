// src/pages/Home.tsx
import HeroSection from '@/components/home/HeroSections';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';
import ReachMeSection from '@/components/ReachMeSection';

const Home = () => {
  return (
    <div>
      <div
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8"
      >
        <HeroSection />
      </div>

      {/* Tambahkan scroll-mt-24 untuk mengimbangi tinggi navbar */}
      <div
        id="menu"
        className="scroll-mt-24" // scroll-margin-top sebesar 24 (sesuaikan jika perlu)
      >
        <MenuSection />
      </div>

      <div
        id="gallery"
        className="scroll-mt-24" // scroll-margin-top sebesar 24 (sesuaikan jika perlu)
      >
        <GallerySection />
      </div>

      {/* Modal ReachMe */}
      <ReachMeSection />
    </div>
  );
};

export default Home;
