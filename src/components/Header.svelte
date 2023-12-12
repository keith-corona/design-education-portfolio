<script>
  export let y;

  let tabs = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/#projects" },
    { name: "About Me", link: "/#about" },
    // {name: 'Blog', link: '#blog'}
  ];
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
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-cyan-100">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <!--link to social media-->
  <a
    href="#contact"
    class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-gradient-to-r from-cyan-300 to-cyan-600 hover:from-pink-400 hover:to-amber-500 text-white"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-slate-900 opacity-20 group-hover:translate-x-full z-0 duration-300"
    />

    <h4 class="relative z-9">Get in touch</h4>
  </a>
</header>
