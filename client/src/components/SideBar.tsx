import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-72 bg-zinc-100 border-r-2">
      <nav className="flex flex-col h-full">
        <div className="h-16 flex justify-center items-center border-b-2">
          <a className="text-2xl font-bold">Finman</a>
        </div>
        <ul className="m-4 flex-1 space-y-6">
          {[
            "Lendings",
            "Lendings1",
            "Lendings2",
            "Lendings3",
            "Lendings4",
            "Lendings5",
            "Lendings6",
            "Lendings7",
          ].map((item) => (
            <li key={item}>
              <Link to={item.toLowerCase().replace(" ", "-")}>
                <button className="w-full text-left p-4 font-medium text-zinc-500 hover:bg-zinc-200 rounded">
                  {item}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
