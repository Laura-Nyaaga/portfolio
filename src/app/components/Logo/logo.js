import Image from "next/image";

const Logo = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center bg-gray-800">
      <div className="flex justify-evenly">
        <div>
          <Image
            className="border rounded-full"
            src="/image/lauranyaaga.png"
            width={400}
            height={300}
          />
        </div>
        <div>
          <h5 className="text-4xl font-bold">Hello, I'm </h5>
          <h1>Laura Nyaaga</h1>
          <h5>Software Developer</h5>
        </div>
      </div>
      {/* <p className="mt-4 text-lg">Laura Nyaaga is a passionate software developer who is dedicated to developing tech solutions 
        that address real world challenges by integrating technology with intuive designs which are user-centric aimimg at enhancing better user experience.</p> */}
    </section>
  );
};

export default Logo;
