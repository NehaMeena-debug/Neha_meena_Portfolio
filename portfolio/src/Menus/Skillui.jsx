import Card from "./Card"
const Skillui = () => {
  return (
    <>
      <h2 className="text-white  mix-blend-difference  mt-12 p-12 text-center text-3xl sm:text-4xl font-bold mb-6">
        Tech Toolkit
      </h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mx-12 border-b border-gray-700"> */}
     <div className="flex bg-gray-900 justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_image/html.png"
      skill="HTML"
      description="HTML is the standard markup language for creating and structuring web pages. 🌐"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_image/css.png"
      skill="CSS"
      description="CSS styles and designs web pages, making them visually appealing and responsive. 🎨"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_image/js.png"
      skill="JAVASCRIPT"
      description="JavaScript adds interactivity and dynamic functionality to web pages. ⚡"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_image/react.png"
      skill="React"
      description="React is a JavaScript library for building interactive, and  component architecture. 🚀"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_logo/tailwind.png"
      skill="Tailwind"
      description="Tailwind CSS is a utility-first framework for building modern and responsive designs quickly. 🎨"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_logo/bs.png"
      skill="Bootstrap"
      description="Bootstrap is a CSS framework that helps create responsive and mobile-friendly websites easily. 📱"
    />
     </div>
     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_logo/git.png"
      skill="Git"
      description="Git is a version control system that tracks code changes and enables collaboration. 🔄"
    />
     </div>

     <div className="flex justify-between text-white p-4 ml-40 mr-40 flex  whitespace-nowrap border border-b-1  border-gray-700 border-t-0  border-l-0  border-r-0">
    <Card
      icon="./skill_logo/github.png"
      skill="Github"
      description="GitHub is a platform for hosting, sharing, and collaborating on code repositories. 🚀"
    />
     </div>
    </>
  );
};

export default Skillui;


 