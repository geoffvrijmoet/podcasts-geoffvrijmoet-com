export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <section className="prose prose-lg">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Services</h2>
        <p>I provide professional podcast editing services, including:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Audio cleanup and enhancement</li>
          <li>Content editing</li>
          <li>Sound mixing and mastering</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Delivery & Revisions</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Standard delivery time is 48 hours</li>
          <li>Unlimited revisions within reason</li>
          <li>Final files delivered in agreed-upon format</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Rights & Ownership</h2>
        <p>You retain all rights to your original content. I claim no ownership over your podcast content.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Payment details discussed individually</li>
          <li>Invoices must be paid within agreed terms</li>
        </ul>
      </section>
    </div>
  )
} 