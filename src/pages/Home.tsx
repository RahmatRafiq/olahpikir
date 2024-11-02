import HeroSection from '@/components/home/HeroSections';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <MenuSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Home;
