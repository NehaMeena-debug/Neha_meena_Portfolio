
import Card from "./Card"
const Skillui = () => {
  return (
    <>
       <h2 className="text-white mix-blend-difference mix-blend-difference  mt-12 p-12 text-center text-3xl sm:text-4xl font-bold mb-6"  >
        Tech Toolkit
      </h2>
      
    <Card
      icon="./skill_image/html.png"
      skill="HTML"
      description="HTML is the standard markup language for creating and structuring web pages. "
      logo="./skill_logo/html.png"
    />
      
    <Card
      icon="./skill_image/css.png"
      skill="CSS"
      description="CSS styles and designs web pages, making them visually appealing and responsive. "
       logo="./skill_logo/css.png"
    />
     
    <Card
      icon="./skill_image/js.png"
      skill="JAVASCRIPT"
      description="JavaScript adds interactivity and dynamic functionality to web pages. "
     logo="./skill_logo/js.png"
    />
     
    <Card
      icon="./skill_image/react.png"
      skill="React"
      description="React is a JavaScript library for building interactive, and  component architecture. "
      logo="./skill_logo/react.png"
    />

    <Card
      icon="./skill_image/tailwind.png"
      skill="Tailwind"
      description="Tailwind CSS is a utility-first framework for building modern and responsive designs quickly. "
       logo="./skill_logo/tailwind.png"
    />
    
    <Card
      icon="./skill_image/bootstrap.png"
      skill="Bootstrap"
      description="Bootstrap is a CSS framework that helps create responsive and mobile-friendly websites easily. "
       logo="./skill_logo/bootstrap.png"
    />
     
    <Card
      icon="./skill_image/git.png"
      skill="Git"
      description="Git is a version control system that tracks code changes and enables collaboration. "
       logo="./skill_logo/git.png"
    />

    <Card
      icon="./skill_image/github.png"
      skill="Github"
      description="GitHub is a platform for hosting, sharing, and collaborating on code repositories. "
       logo="./skill_logo/github.png"
    />
   
    </>
  );
};

export default Skillui;


 