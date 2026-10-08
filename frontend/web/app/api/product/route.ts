// Importing next utils

// Importing faker js for faking mock data
import { fakerEN, fakerFA } from "@faker-js/faker";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const result = Number(searchParams.get("limit")) || 10;
    const products = Array.from({ length: result }, () => ({
        id: fakerFA.string.uuid(),
        title: fakerFA.commerce.productName(),
        model: fakerEN.vehicle.vin(),
        image: "/2.jpg",
        price: fakerFA.commerce.price({
            min: 100_000,
            max: 1_000_000_000,
            dec: 0,
        }),
        description: fakerFA.commerce.productDescription(),
        discount: fakerFA.commerce.price({
            min: 0,
            max: 50,
            dec: 0,
        }),
        rating: fakerFA.number.float({
            min: 0,
            max: 5,
            fractionDigits: 1,
        }),
        isAvailable: fakerFA.datatype.boolean({
            probability: 0.5,
        }),
    }));
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return new NextResponse(
        JSON.stringify({
            totoalCount: 200,
            products,
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
}
