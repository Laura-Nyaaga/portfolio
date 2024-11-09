import Image from "next/image";
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 font-['Roboto'] ">
<h2 className="text-4xl font-bold text-center typewriter">Projects</h2>

      <div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {/* Totosteps */}
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/milestones.png"
                width={200}
                height={200}
                alt="dmilestones"
              />
            </div>
            <h3 className="text-3xl text-center text-yellow-500 font-bold p-4">Totosteps</h3>
            <p className="text-left text-xl">
              A mobile that is designed to help parents track their children
              developmental milestones, check for autism risk and receive
              resources tailored to aid early developmental support in children
              born in Kenya.
            </p>
          
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/Laura-Nyaaga/Ciphers-Mobile-TotoSteps.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://totostepsinformationalwebsite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Apex */}
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/apex_logo.png"
                width={150}
                height={150}
                alt="Apex"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">Apex</h3>
            <p className="text-left text-xl">
              A single page react website that is designed to inform users of
              the existence of a platform designed to assist teachers of the
              visually impaired on how to utilize various assistive technology
              to mitigate digital illiteracy in education, sector in Kenya.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Foodhouse */}
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/foodhouse.jpg"
                width={200}
                height={200}
                alt="FoodHouse Restaurant"
                className="rounded-3xl"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">
              FoodHouse Restaurant
            </h3>
            <p className="text-xl text-left">
              A static responsive website with intuitive design for a restaurant
              showcasing various types of dishes it offers, their pricing, and
              location. Users can order food from the comfort of their home with
              prior knowledge of the restaurant.
            </p>
            {/* Icon Container */}
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/Laura-Nyaaga/foodhouse-restaurant-next-js.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://foodhouse-restaurant-next-js.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* BMI Calculator */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
          <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/bmi.png"
                width={200}
                height={200}
                alt="BMI Calculator"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">BMI Calculator</h3>
            <p className="text-xl text-left">
              A responsive website that is designed for the users to allowing
              them to calculate their Body Mass Index by keying in their weight
              and height and in turn gets a response ogf their BMI and the
              category in which they belong.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/Laura-Nyaaga/BMI-WEB-PROJECT-1.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://bmi-web-project-1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>

          {/* School */}
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
          <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/students.png"
                width={200}
                height={200}
                alt="Books"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">School Project</h3>
            <p className="text-xl text-left">
              A django backend web application school project that allows
              students to register, view courses using the generated timetable
              and know the course instructor. It also has a database
              configuration for storing student,teachers and course data.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/Laura-Nyaaga/SchoolProject-Backend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Recipe */}
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
          <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/recipes.jpg"
                width={160}
                height={160}
                alt="Recipes"
                className="rounded-3xl"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">Recipe</h3>
            <p className="text-xl text-left">
              An intuitive web design that uses ADAMAN API to enable users to
              calculate the contents of ingriedients in their food components.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/Laura-Nyaaga/FoodNutritionWeb.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://food-nutrition-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


