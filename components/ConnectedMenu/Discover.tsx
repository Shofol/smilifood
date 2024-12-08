import Button from "../layout/Button";

const Discover = () => {
  return (
    <div className="bg-br-gray py-24 text-br-dark text-center px-5 lg:px-0">
      <h3 className="text-3xl font-bold">Discover FastFood Connected Menu</h3>
      <p className="pt-2">
        Stop wasting time when taking orders! Let your customers order from the
        connected card;
      </p>
      <div className="flex justify-center items-center mt-4">
        <Button
          title="Discover"
          type="secondary"
          actionType="link"
          className="px-16"
        />
      </div>
    </div>
  );
};

export default Discover;
