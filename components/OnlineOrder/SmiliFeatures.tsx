"use client";

const SmiliFeatures = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-5 lg:mx-10 xl:mx-auto">
      <h2 className="text-3xl font-bold text-br-dark text-center">
        Increase your online orders with FastFood
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <div className="bg-br-primary p-12 shadow-md rounded-lg">
          <h3 className="text-br-lgreen-2 text-2xl font-bold pb-5">
            Digital visibility
          </h3>
          <p className="text-br-ldark">
            Customers can order from anywhere by viewing your menu online
          </p>
        </div>
        <div className="bg-br-mgreen p-12 shadow-md rounded-lg">
          <h3 className="text-br-mgreen-2 text-2xl font-bold pb-5">
            Facilitation of order taking
          </h3>
          <p className="text-br-ldark">
            Do not waste any more time taking your orders by phone! FastFood
            allows your customers to order independently.
          </p>
        </div>
        <div className="bg-br-dgreen p-12 shadow-md rounded-lg">
          <h3 className="text-br-mgreen text-2xl font-bold pb-5">
            Increase in average basket
          </h3>
          <p className="text-br-ldark">
            The FastFood app allows restaurateurs with its connected menu to see
            their average basket increase by up to 30%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmiliFeatures;
