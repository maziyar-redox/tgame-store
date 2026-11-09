// Adding interface for better performance in fetching data
interface MainProductProps {
    id: string;
    title: string;
    model: string;
    image: string;
    price: string;
    discount: string;
    isAvailable: boolean;
    isFavorite: boolean;
}

export type { MainProductProps };
