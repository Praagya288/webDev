const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-500 bg-opacity-50 mx-2 p-2 text-white font-bold">
      <h2>Password Generator</h2>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar ;