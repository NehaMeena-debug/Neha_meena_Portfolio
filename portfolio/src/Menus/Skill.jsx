import React from "react";

const Skill = () => {
  return (
    <>
      {/* Title */}
      <h2 className="text-white mt-8 p-6 text-center text-3xl sm:text-4xl font-bold mb-4">
        Tech Toolkit
      </h2>

     
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2  p-8  mx-auto">
        
        {/* Java */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/java.png" alt="Java" />
        </span>

        {/* HTML */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/html.png" alt="HTML" />
        </span>

        {/* CSS */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/css.png" alt="CSS" />
        </span>

        {/* JS */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/js.png" alt="JavaScript" />
        </span>

        {/* React */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/react.png" alt="React" />
        </span>

        {/* Tailwind */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/tailwind.png" alt="Tailwind" />
        </span>

        {/* Bootstrap */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/bootstrap.png" alt="Bootstrap" />
        </span>

        {/* Node.js */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/node.png" alt="Node.js" />
        </span>

        {/* Express */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/express.png" alt="Express" />
        </span>

        {/* MongoDB */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/mongodb.png" alt="MongoDB" />
        </span>

        {/* SQL */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/sql.png" alt="SQL" />
        </span>

        {/* DBMS */}
        <span className="bg-gray-400 h-24 w-24 rounded flex justify-center items-center">
          <img className="h-12" src="./image/dbms.png" alt="DBMS" />
        </span>

       
      </div>
    </>
  );
};

export default Skill;


