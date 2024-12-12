const Navbar = () => {
  return (
    <header className="w-full h-16 border-b-2">
      <nav className="flex h-full gap-10">
        <div className="flex-grow flex items-center justify-evenly">
          <div>
            <a className="text-xl font-bold">Lendings</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
