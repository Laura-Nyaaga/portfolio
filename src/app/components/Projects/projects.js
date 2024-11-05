


const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your project cards here */}
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="mt-2">Brief description of the project.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  