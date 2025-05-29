export default function Home() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 bg-rose-50">
        <h1 className="text-5xl md:text-7xl font-light mb-6 text-rose-800">
          John & Jane
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-rose-700">Are getting married</p>
        <p className="text-lg md:text-xl mb-12 text-rose-600">June 15, 2024</p>
        <div className="w-24 h-1 bg-rose-300 mb-12"></div>
        <p className="text-lg text-rose-700">Please join us in celebrating our special day</p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-rose-800">Our Story</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-gray-700">
            We met in the spring of 2020, and from that moment on, we knew our lives would never be the same.
            After three wonderful years together, we&apos;re excited to begin this new chapter of our lives.
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-rose-800">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl mb-4 text-rose-700">Ceremony</h3>
              <p className="mb-2 text-gray-700">2:00 PM - 3:00 PM</p>
              <p className="mb-2 text-gray-700">St. Mary&apos;s Church</p>
              <p className="text-gray-700">123 Wedding Lane, City</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-4 text-rose-700">Reception</h3>
              <p className="mb-2 text-gray-700">6:00 PM - 11:00 PM</p>
              <p className="mb-2 text-gray-700">Grand Ballroom</p>
              <p className="text-gray-700">456 Celebration Ave, City</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-rose-800">RSVP</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>
            <div>
              <label htmlFor="attending" className="block text-sm font-medium mb-2 text-gray-700">
                Will you attend?
              </label>
              <select
                id="attending"
                className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">No, I cannot attend</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors"
            >
              Send RSVP
            </button>
          </form>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-rose-800">Gift Registry</h2>
          <p className="text-lg mb-8 text-gray-700">
            Your presence at our wedding is the greatest gift of all. However, if you wish to give a gift,
            we are registered at the following stores:
          </p>
          <div className="space-y-4">
            <a
              href="#"
              className="block text-lg text-rose-700 hover:text-rose-800 transition-colors"
            >
              Store Name 1
            </a>
            <a
              href="#"
              className="block text-lg text-rose-700 hover:text-rose-800 transition-colors"
            >
              Store Name 2
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
