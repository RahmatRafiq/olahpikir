import { Button, Image } from '@nextui-org/react';
import { useState } from 'react';
import coffeeImage from "@/images/coffee.jpg";

const HeroSection = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8">
            {/* Konten Teks */}
            <div className="flex flex-col items-start md:w-1/2 max-w-lg text-left md:ml-10">
                <h1 className="font-bold font-bossa text-6xl sm:text-5xl lg:text-6xl text-primary mb-4 leading-tight">
                    olahpikir Cafe
                </h1>
                <p className="text-xl sm:text-2xl text-dark-secondary dark:text-light-secondary mb-6">
                    Nikmati berbagai varian kopi yang kami sajikan dengan penuh cinta dan dedikasi.
                </p>
                <Button
                    color="warning"
                    size="lg"
                    className="bg-primary text-dark-background dark:text-light-background rounded-md shadow-md hover:bg-opacity-90 transition"
                >
                    Lihat Menu
                </Button>
            </div>

            {/* Gambar Produk */}
            <div className="relative z-10 md:w-1/2 flex justify-center mt-8 md:mt-0 md:mr-10">
                <Image
                    src={coffeeImage} // Pastikan path ini benar
                    alt="Gelas kopi"
                    className="object-contain"
                    width={500}
                    height={500}
                    onError={() => setImageError(true)}
                    style={{ opacity: 1, visibility: 'visible' }} // Memastikan gambar terlihat
                />
            </div>
        </section>
    );
};

export default HeroSection;
