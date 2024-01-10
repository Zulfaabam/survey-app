import clsx from "clsx";

// eslint-disable-next-line react/prop-types
function MainLayout({ children, className }) {
  return (
    <div
      className={clsx("max-w-4xl mx-auto min-h-screen px-4 lg:px-0", className)}
    >
      {children}
    </div>
  );
}

export default MainLayout;
