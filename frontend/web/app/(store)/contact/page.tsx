// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.

import { ContactPageWrapper } from "@/features/store/contact";

// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern

export default async function ContactPage() {
    return <ContactPageWrapper />;
}
