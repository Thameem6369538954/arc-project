export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-200 to-rose-400 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-white inline-block">About Us</h3>
          <p className="text-sm leading-relaxed">
            Discover our journey towards making dreams come true with top-notch IVF services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-white inline-block">Our IVF Centres</h3>
          <ul className="text-sm space-y-2">
            <li>Ariyar</li>
            <li>Bengaluru</li>
            <li>Coimbatore</li>
            <li>Dindigul</li>
            <li>Hyderabad</li>
            <li>Kochi</li>
            <li>Kolkata</li>
            <li>Kovilpatti</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-white inline-block">Our Services</h3>
          <ul className="text-sm space-y-2">
            <li>Fertility Tools</li>
            <li>Gynecologic Surgery</li>
            <li>Counselling</li>
            <li>Lifestyle Advice</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-white inline-block">Subscribe</h3>
          <p className="text-sm mb-4">
            Stay updated with our latest services and offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full rounded-l-md text-black"
            />
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-r-md">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        &copy; 2025 All Rights Reserved | Company Name
      </div>
    </footer>
  );
}
