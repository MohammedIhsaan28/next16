import Hello from "../../components/Hello";

const Home = () => {
  // throw new Error("Error from Home Page may be server");
  console.log("Hello from Home Page may be server");
  return (
    <div>
      <Hello className="text-red-500" />
    </div>
  );
};

export default Home;
