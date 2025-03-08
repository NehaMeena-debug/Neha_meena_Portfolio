const Skillui = () => {
  return (
    <>
      <h2 className="text-white mt-12 p-6 text-center text-3xl sm:text-4xl font-bold mb-6">
        Tech Toolkit
      </h2>
      <div className="h-full w-full bg-black">
        <div className="max-w-screen-lg mx-auto px-6 sm:px-12 lg:px-24">
          {Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between border-b-2 text-white mb-6 p-6"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Image */}
                  <span className="w-1/4 flex justify-center md:justify-start">
                    <img
                      className="h-20 w-20 object-contain"
                      src="./image/react.png"
                      alt="React"
                    />
                  </span>
                  
                  {/* Text */}
                  <p className="flex-1 text-xl sm:text-4xl md:text-2xl font-semibold tracking-wide text-center md:text-left">
                    REACT
                  </p>
                </>
              ) : (
                <>
                  {/* Text */}
                  <p className="flex-1 text-xl sm:text-4xl md:text-2xl font-semibold tracking-wide text-center md:text-left">
                    
                  <span>R</span>
                  <span>E</span>
                  <span>A</span>
                  <span>C</span>
                  <span>T</span>
                  </p>
                  
                  {/* Image */}
                  <span className="w-1/4 flex justify-center md:justify-end">
                    <img
                      className="h-20 w-20 object-contain"
                      src="./image/react.png"
                      alt="React"
                    />
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skillui;
