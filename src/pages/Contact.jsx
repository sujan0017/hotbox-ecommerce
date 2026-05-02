import Container from "../components/Container";

export default function Contact() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-10">
        <div className="space-y-6">
          <div>
            <p className="text-red-600 font-semibold uppercase tracking-wide text-sm">
              Hotbox
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">Contact Us</h1>
            <p className="text-gray-600 mt-4 leading-7 max-w-xl">
              Hotbox is your platform to share anything related to fashion —
              trends, looks, ideas, and inspiration. We'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h2 className="font-semibold text-lg">Email</h2>
              <p className="text-gray-600 mt-1">support@hotbox.com</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5">
              <h2 className="font-semibold text-lg">Location</h2>
              <p className="text-gray-600 mt-1">Available Worldwide</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl py-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

// min-h-screen bg-white text-gray-900 px-4 py-10 sm:px-6 lg:px-8
