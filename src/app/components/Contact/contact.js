


const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <form className="mt-10 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4 text-black"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4 text-black" />
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded mb-4 text-black" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4 text-black" rows="4"></textarea>
          <button className="w-full p-3 bg-yellow-500 text-white rounded">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  