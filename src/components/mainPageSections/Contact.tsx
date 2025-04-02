export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-olive-700 text-center">Find Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <p className="text-gray-600">123 Coffee Street</p>
          <p className="text-gray-600">contact@figata.com</p>
        </div>
        <div className="h-64 bg-gray-100 rounded-xl overflow-hidden">
          {/* Google Map Embed */}
        </div>
      </div>
    </div>
  );
}
