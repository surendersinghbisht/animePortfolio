const Loading = () => {
    return (
      <div className="bg-customOrange h-screen flex flex-col items-center justify-center">
        <div
          className="w-48 h-48 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/images/loading.gif')" }}
        ></div>
        <p className="mt-4 text-white">Loading...</p>
      </div>
    );
  };
  
  export default Loading;
  