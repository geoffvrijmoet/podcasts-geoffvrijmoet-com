export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="prose prose-lg">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
        <p>I collect only the information necessary to provide podcast editing services, including:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Contact information (name, email, etc.)</li>
          <li>Audio files you provide for editing</li>
          <li>Project requirements and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
        <p>The information collected is used solely for:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Providing podcast editing services</li>
          <li>Communication about your projects</li>
          <li>Improving service quality</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <p>Your audio files and personal information are:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Stored securely</li>
          <li>Never shared with third parties</li>
          <li>Deleted upon request</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
        <p>For privacy-related questions, please contact me at [your email].</p>
      </section>
    </div>
  )
} 