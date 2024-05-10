import Feed from "../components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompt</span>
      </h1>
      <p className="desc text-center">Promptopia is a modern tool</p>

      <Feed />
    </section>
  );
};

export default Home;
