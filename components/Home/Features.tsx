"use client";

const Features = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-5 lg:mx-10 xl:mx-auto">
      <h2 className="text-3xl font-bold text-br-dark text-center">
        Fastfood is an all-in-one tool to develop your business through the
        internet
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <div className="bg-br-primary p-12 shadow-md rounded-lg">
          <h3 className="text-br-lgreen-2 text-2xl font-bold pb-5">
            Win customers
          </h3>
          <p className="text-br-ldark">
            Convert online customers with our online booking and provide a
            seamless on-site ordering experience with our solutions.
          </p>
        </div>
        <div className="bg-br-mgreen p-12 shadow-md rounded-lg">
          <h3 className="text-br-mgreen-2 text-2xl font-bold pb-5">
            Save time
          </h3>
          <p className="text-br-ldark">
            Simplify your daily life with our series of features designed to
            improve the customer experience and that of your team.
          </p>
        </div>
        <div className="bg-br-dgreen p-12 shadow-md rounded-lg">
          <h3 className="text-br-mgreen text-2xl font-bold pb-5">
            Increase your turnover
          </h3>
          <p className="text-br-ldark">
            Maximize your shopping cart turnover by creating optimized ordering
            paths with FastFood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
