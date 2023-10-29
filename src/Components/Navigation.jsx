const Navigation = () => {
  return (
    <div className="py-3 px-7 flex flex-col md:flex-row justify-between items-center">
      <img className="h-12 md:h-16" src="/images/logo.png" alt="logo" />
      <ul className="mt-3 md:mt-0 flex gap-4">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className="bg-red-600 text-white px-3 py-1">Login</button>
    </div>
  );
};

export default Navigation;
