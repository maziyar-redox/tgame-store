// Importing next utils

// Importing faker js for faking mock data
import { fakerFA as faker } from "@faker-js/faker";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
    const products = Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        company: faker.company.name(),
        avatar: faker.image.avatar(),
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
