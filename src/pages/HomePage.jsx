import MainLayout from "../layout/MainLayout";

function HomePage() {
  return (
    <MainLayout className="flex flex-col gap-8 justify-center items-center">
      <p className="capitalize text-4xl text-center text-white font-semibold">
        Welcome to the <br /> Survey App
      </p>
      <button
        className="bg-white px-4 py-2 rounded-lg font-medium"
        onClick={() => {
          localStorage.clear();
        }}
      >
        <a href="/survey">Start Survey</a>
      </button>
    </MainLayout>
  );
}

export default HomePage;
