const DummySections = () => {
    const sections = [
      { id: "about", title: "About Us", bg: "bg-yellow-500" },
      { id: "services", title: "Our Services", bg: "bg-indigo-500" },
      { id: "contact", title: "Contact Us", bg: "bg-pink-500" },
      { id: "testimonials", title: "What Our Clients Say", bg: "bg-gray-800" },
      { id: "blog", title: "Latest Blog Posts", bg: "bg-teal-500" },
    ];
  
    return (
      <div>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={`h-screen flex items-center justify-center ${section.bg} text-white text-3xl`}
          >
            <h1>{section.title}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default DummySections;
  