const Error = () => {
  return (
    <div className="container xl:max-w-screen-xl mx-auto flex items-center justify-center">
      <div className="min-h-[400px] w-full flex items-center justify-center">
        <h3 className="text-4xl text-red-500 font-inter font-bold capitalize ">
          This page is not available. Please check the URL or return to the home
          page.
        </h3>
      </div>
    </div>
  );
};

export default Error;
