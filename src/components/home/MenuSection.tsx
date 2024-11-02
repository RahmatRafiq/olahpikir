import { Spacer } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

interface MenuItemType {
    title: string;
    img: string;
    price: string;
}

const MenuSection = () => {
    const coffeeList: MenuItemType[] = [
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
    ];

    const nonCoffeeList: MenuItemType[] = [
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
    ];

    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(coffeeList.length + nonCoffeeList.length).fill(false));
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = (entry.target as HTMLElement).dataset.index;
                    if (index !== undefined) {
                        setVisibleItems((prev) => {
                            const newVisibleItems = [...prev];
                            newVisibleItems[parseInt(index)] = true;
                            return newVisibleItems;
                        });
                        observer.current?.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.menu-item');
        elements.forEach((item) => observer.current?.observe(item));

        return () => {
            elements.forEach((item) => observer.current?.unobserve(item));
        };
    }, []);

    const renderMenuItems = (list: MenuItemType[], offset: number) => {
        return list.map((item, index) => (
            <MenuItem
                item={item}
                index={index + offset}
                visible={visibleItems[index + offset]}
                key={index + offset}
            />
        ));
    };

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Menu</h2>

            <h3 className="text-2xl font-semibold text-primary mb-4">Coffee</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 justify-center">
                {renderMenuItems(coffeeList, 0)}
            </div>
            <Spacer y={10} />
            <h3 className="text-2xl font-semibold text-primary mb-4">Non-Coffee</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 justify-center">
                {renderMenuItems(nonCoffeeList, coffeeList.length)}
            </div>
        </section>
    );
};

export default MenuSection;
