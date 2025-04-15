<script>
  export let y;

  let tabs = [
    { name: "Home", link: "/" },
    {
      name: "Projects",
      link: "/#projects",
      children: [
        { name: "Online Class", link: "/online-class" },
        { name: "Hybrid Class", link: "/hybrid-class" },
        { name: "Employee Training", link: "/training" },
        { name: "Instructional Design", link: "/instructional-design" },
      ],
    },
    { name: "About Me", link: "/#about" },
    // {name: 'Blog', link: '#blog'}
  ];

  // Track which dropdown is currently open
  let activeDropdown = null;

  const showDropdown = (tabName) => {
    activeDropdown = tabName;
  };

  const hideDropdown = () => {
    activeDropdown = null;
  };

  // Mobile menu state
  let mobileMenuOpen = false;

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    mobileMenuOpen = false;
  };
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b-2 border-solid" +
    (y > 0
      ? " py-4 bg-amber-400 shadow-md p-4"
      : " py-6 bg-transparent border-transparent")}
>
  <a href="/"
    ><h1 class="font-medium duration-200 hover:text-cyan-100">
      <b class="font-bold poppins">Keith</b> Corona
    </h1></a
  >

  <!-- Desktop Navigation -->
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab, index}
      <div
        class="relative"
        on:mouseenter={() => showDropdown(tab.name)}
        on:mouseleave={hideDropdown}
      >
        <a href={tab.link} class="duration-200 hover:text-cyan-100">
          <p>{tab.name}</p>
        </a>

        {#if tab.children && activeDropdown === tab.name}
          <ul
            class="dropdown absolute top-full left-0 bg-white rounded-md shadow-md py-2 mt-1 whitespace-nowrap"
          >
            {#each tab.children as child}
              <li>
                <a
                  href={child.link}
                  class="block px-6 py-2 text-gray-800 hover:bg-amber-100 duration-150 text-left"
                >
                  {child.name}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Mobile Hamburger Button -->
  <button
    class="sm:hidden flex flex-col justify-center items-center ml-auto"
    on:click={toggleMobileMenu}
    aria-label="Toggle menu"
  >
    <span
      class={"block w-6 h-0.5 bg-current duration-300 " +
        (mobileMenuOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5")}
    ></span>
    <span
      class={"block w-6 h-0.5 bg-current duration-300 " +
        (mobileMenuOpen ? "opacity-0" : "mb-1.5")}
    ></span>
    <span
      class={"block w-6 h-0.5 bg-current duration-300 " +
        (mobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : "")}
    ></span>
  </button>

  <!--Get in touch button - visible only on desktop -->
  <a
    href="#contact"
    class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-gradient-to-r from-cyan-300 to-cyan-600 hover:from-pink-400 hover:to-amber-500 text-white hidden sm:block"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-slate-900 opacity-20 group-hover:translate-x-full z-0 duration-300"
    />

    <h4 class="relative z-9">Get in touch</h4>
  </a>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
  <div class="fixed inset-0 bg-amber-400 z-[9] pt-20 px-6 sm:hidden">
    <nav class="flex flex-col gap-6">
      {#each tabs as tab}
        <div>
          <a
            href={tab.link}
            on:click={handleMobileNavClick}
            class="text-xl font-medium"
          >
            {tab.name}
          </a>

          {#if tab.children}
            <ul class="mt-2 ml-4 border-l-2 border-cyan-600 pl-4">
              {#each tab.children as child}
                <li class="mb-2">
                  <a
                    href={child.link}
                    on:click={handleMobileNavClick}
                    class="block py-1 text-gray-800 hover:text-cyan-100 duration-150"
                  >
                    {child.name}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}

      <!-- Get in touch button inside mobile menu -->
      <div class="mt-4">
        <a
          href="#contact"
          on:click={handleMobileNavClick}
          class="blueShadow inline-block relative overflow-hidden px-5 py-2 group rounded-full bg-gradient-to-r from-cyan-300 to-cyan-600 hover:from-pink-400 hover:to-amber-500 text-white"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-slate-900 opacity-20 group-hover:translate-x-full z-0 duration-300"
          />

          <h4 class="relative z-9">Get in touch</h4>
        </a>
      </div>
    </nav>
  </div>
{/if}

<style>
  .dropdown {
    z-index: 20;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #e5e7eb;
    width: auto;
  }
</style>
