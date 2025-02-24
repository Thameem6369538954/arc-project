const Footer = () => {
  return (
    <footer className="min-h-[60vh] font-[choco] bg-[#d25c78] text-white flex items-center justify-center px-10 py-16">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-3 border-b border-white inline-block">About Us</h3>
          <p className="mb-5 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#d25c78] transition-all">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#d25c78] transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#d25c78] transition-all">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
  <h3 className="text-xl font-bold mb-3 border-b border-white inline-block">Our IVF Centres</h3>
  <div className="grid grid-cols-2 gap-x-8">
    <ul className="space-y-2 text-sm">
      {[
        "Ariyar", "Bengaluru", "Coimbatore", "Dindigul", "Hyderabad",
        "Kochi", "Kolkata", "Kovilpatti", "Sri Lanka", "Madurai"
      ].map((item, index) => (
        <li key={index} className="hover:translate-x-2 transition-all flex items-center">
          ▸ {item}
        </li>
      ))}
    </ul>
    <ul className="space-y-2 text-sm">
      {[
        "Nagercoil", "Nellore", "Ongole", "Reddiyarpalayam", "Trichy",
        "Ambattur", "Tiruvannamalai", "Tirunelveli", "Tirupathi", "Tiruppur",
        "Vellore", "Tambaram", "Kumbakonam"
      ].map((item, index) => (
        <li key={index} className="hover:translate-x-2 transition-all flex items-center">
          ▸ {item}
        </li>
      ))}
    </ul>
  </div>
</div>


        {/* Services List */}
        <div>
          <h3 className="text-xl font-bold mb-3 border-b border-white inline-block">Our IVF Centres</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Extending The Biological Clock",
              "Life Style And Conception Advice",
              "Therapeutic Activity For Patients",
              "Counselling",
              "Fertility Tools",
              "Corporate Social Responsibility",
              "Sexually Dysfunction Clinic",
              "Gynecologic Surgery",
            ].map((item, index) => (
              <li key={index} className="hover:translate-x-2 transition-all flex items-center">
                ▸ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Online Subscription */}
<div className="p-4 rounded-lg text-white">
  <h3 className="text-xl font-bold mb-3 border-b border-white inline-block">
    Online
  </h3>
  <p className="mb-3 text-sm leading-relaxed">
    Subscribe to our online consultation in your inbox.
  </p>
  <div className="relative w-full">
    <input
      type="email"
      placeholder="Email Address"
      className="w-full px-4 py-3 rounded-lg text-black border border-white"
    />
    <button className="absolute right-2 top-2 p-2 bg-[#d25c78] text-white rounded-full hover:scale-110 transition-all border border-white">
      Submit
    </button>
  </div>
</div>

      </div>

      
    </footer>
  );
};

export default Footer;
