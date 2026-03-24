export default function ProjectCard({ project }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="lg:hidden flex flex-col space-y-4 mb-6 md:col-span-3 text-white">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-300">{project.mainDescription}</p>
      </div>

      <div className="flex flex-col gap-4 col-span-1">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 h-full min-h-[250px] flex items-center justify-center overflow-hidden">
          <img
            src={project.mobileImage1}
            alt={`${project.title} mobile view 1`}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 h-full min-h-[250px] flex items-center justify-center overflow-hidden">
          <img
            src={project.mobileImage2}
            alt={`${project.title} mobile view 2`}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="md:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-4 lg:p-6 flex items-center justify-center overflow-hidden min-h-[500px]">
        <img
          src={project.desktopImage}
          alt={`${project.title} desktop view`}
          className="w-full h-auto rounded-xl shadow-2xl border border-gray-800"
        />
      </div>
    </div>
  );
}
