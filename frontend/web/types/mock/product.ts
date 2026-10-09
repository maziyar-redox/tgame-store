// Adding interface for better performance in fetching data
interface ProductMockProps {
    totalCount: number;
    products: {
        id: string;
        title: string;
        model: string;
        image: string;
        price: string;
        description: string;
        discount: string;
        rating: number;
        isAvailable: boolean;
    }[];
}

export type { ProductMockProps };
