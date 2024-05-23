const MobileMenu = () => {
  return (
    <>
      <div className="h-screen w-full relative bg-blue-100">
        <div className="container mx-auto p-4 lg:pt-24">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open Menu
          </button>
        </div>
        <div
        /*           x-show="mobileMenuOpen"
          x-transition:enter="transition ease-out duration-500"
          x-transition:enter-start="transform -translate-x-full"
          x-transition:enter-end="transform translate-x-0"
          x-transition:leave="transition ease-in duration-500"
          x-transition:leave-start="transform translate-x-0"
          x-transition:leave-end="transform -translate-x-full"
          className="absolute top-0 left-0 h-screen bg-white p-0 border-r shadow-lg w-5/6"
          x-cloak */
        >
          <div className="flex flex-col h-screen">
            <div className="w-full bg-gray-100 py-1">
              <div className="flex">
                <div className="ml-auto flex gap-1 items-center cursor-pointer">
                  <span className="text-sm text-gray-400">Close menu</span>
                  <svg
                    className="fill-gray-600 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414l-2.93 2.93a1 1 0 1 1-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 1 1 1.414-1.414l2.93 2.93 2.93-2.93a1 1 0 1 1 1.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 0 1 0 1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-grow overflow-y-scroll" x-data="{nav: 'main'}">
              <div className="">
                <form className="p-2">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>

                <div className="flex flex-col">
                  <div className="flex-grow">
                    <ul x-show="nav == 'main'">
                      <li className="py-2 border-b">
                        <button className="text-gray-600 w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-lg font-medium block">
                            Click to show
                          </span>
                          <span className="text-sm block">Another menu</span>
                        </button>
                      </li>
                      <li className="py-2 border-b">
                        <button className="text-gray-600 w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-lg font-medium block">
                            Click to show
                          </span>
                          <span className="text-sm block">Some other menu</span>
                        </button>
                      </li>
                      <li className="py-2 border-b">
                        <button className="text-gray-600 w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-lg font-medium">
                            This one is special
                          </span>
                          <span className="text-sm block">
                            Not really, but it just contains a lot of text so
                            you can see a scrollbar.
                          </span>
                        </button>
                      </li>
                    </ul>
                    <div x-show="nav !== 'main'">
                      <button className="text-gray-600 w-full px-4 my-2 py-2 text-left hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium block">
                          &larr; Back to main menu
                        </span>
                      </button>
                    </div>

                    <div x-show="nav == 'menu1'">
                      <div className="px-4">
                        <h1 className="text-gray-700 font-bold text-lg mb-2">
                          Menu 1
                        </h1>
                        <p className="text-gray-400">
                          You may do whatever you please here.
                        </p>

                        <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-4">
                          Go to menu 2
                        </button>
                      </div>
                    </div>
                    <div x-show="nav == 'menu2'">
                      <div className="px-4">
                        <h1 className="text-gray-700 font-bold text-lg mb-2">
                          Menu 2
                        </h1>
                        <p className="text-gray-400">
                          You may do whatever you please here.
                        </p>

                        <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-4">
                          Go to menu 3
                        </button>
                      </div>
                    </div>
                    <div x-show="nav == 'menu3'">
                      <div className="px-4">
                        <h1 className="text-gray-700 font-bold text-lg mb-2">
                          Menu 3
                        </h1>

                        <p className="text-gray-600 mb-4">
                          <span className="font-bold">Hi there!</span> I hope
                          you like this menu. Feel free to use, modify and share
                          it! Did I tell you I really hate wordpress?
                        </p>

                        <p className="text-gray-400 mb-4">
                          Ever tried updating WordPress only to find your site
                          now resembles a modern art piece? Abstract, but not
                          functional.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress plugins are like mystery boxes. You never
                          know which one will bring your site down next.
                        </p>
                        <p className="text-gray-400 mb-4">
                          Trying to secure a WordPress site is like playing
                          Whack-a-Mole, except the moles are hackers and re
                          winning.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress speed optimization? More like trying to make
                          a snail sprint.
                        </p>
                        <p className="text-gray-400 mb-4">
                          Customizing a WordPress theme feels like trying to
                          solve a s Cube blindfolded.
                        </p>
                        <p className="text-gray-400 mb-4">
                          The only thing more abundant than WordPress themes are
                          the bugs that come with them.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress updates: The digital equivalent of playing
                          Russian Roulette with your website.
                        </p>
                        <p className="text-gray-400 mb-4">
                          SEO in WordPress? like trying to explain social media
                          to your grandparents.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress is as user-friendly as a hedge maze. In the
                          dark. Without a map.
                        </p>
                        <p className="text-gray-400 mb-4">
                          Using WordPress is like time travel: It takes you back
                          to the days of slow, clunky websites.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress support forums: Where questions go to take a
                          very long nap.
                        </p>
                        <p className="text-gray-400 mb-4">
                          A WordPress site without problems is like a unicorn:
                          much talked about but never seen.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress: Where responsive design often just means
                          responding with errors on different devices.
                        </p>
                        <p className="text-gray-400 mb-4">
                          The WordPress experience: Like assembling IKEA
                          furniture with instructions in hieroglyphics.
                        </p>
                        <p className="text-gray-400 mb-4">
                          WordPress: The platform where plug and play actually
                          means plug and pray.
                        </p>
                      </div>
                    </div>

                    <div x-show="nav !== 'main'">
                      <button className="text-gray-600 w-full px-4 my-2 py-2 text-left hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium block">
                          &larr; Back to main menu
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
