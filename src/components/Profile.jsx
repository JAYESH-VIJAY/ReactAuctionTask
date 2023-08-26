import { useEffect } from "react";
import { Dropdown, initTE } from "tw-elements";

const Profile = () => {
  useEffect(() => {
    initTE({ Dropdown });
  }, []); // Initialize on component mount

  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="relative ml-3" data-te-dropdown-ref>
          <a
            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              className="rounded-full"
              style={{ height: "22px", width: "22px" }}
              alt="Avatar"
              loading="lazy"
            />
            <span className="w-2 pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
          <ul
            className="absolute left-0 right-auto z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                My profile
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Settings
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Profile;
