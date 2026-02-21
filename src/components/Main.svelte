<script>
  import { fade } from "svelte/transition"; // For smooth modal animation
  let isModalOpen = false; // Tracks if modal is open
  let largeImageSrc = ""; // Stores the larger image URL

  // Function to open modal with larger image
  function openModal(src) {
    largeImageSrc = src;
    isModalOpen = true;
  }

  // Function to close modal
  function closeModal() {
    isModalOpen = false;
  }

  // Original imports pre-image
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "Asynchronous online course development",
      icon: "fa-solid fa-laptop",
      href: "/online-class",
    },
    {
      name: "Hybrid course design",
      icon: "fa-solid fa-person-chalkboard",
      href: "/hybrid-class",
    },
    {
      name: "Employee training consultation",
      icon: "fa-solid fa-list-check",
      href: "/training",
    },
  ];

  let benefits = [
    {
      name: "an educator",
      description:
        "I love learning new things and sharing what I've learned in innovative ways. With the rapid spread of online learning in the educational landscape, it's more important than ever to be able to match tools with skills and experience. Having a strong foundation in pedagogical principles has really proven to be a benefit in honing my craft and being able to discern which methods and modalities might be best suited for a particular student or group. A couple of principles that I really endorse are keeping a student-centered approach and enabling student autonomy for individual growth.",
    },
    {
      name: "a human experience designer",
      description:
        "As a human experience designer, my professional journey revolves around crafting meaningful and impactful learner experiences in particular. I attempt to use a holistic approach to design by integrating diverse data collection methodologies, including user interviews, surveys, and journaling, into the educational landscape. I love discovering learners' unique perspectives and needs so that I can create custom tailored experiences. I do this by drawing on principles from user experience (UX) design where I transform data into cohesive design flows. This process involves the strategic implementation of UX tools such as user journeys, personas, and the development of information architectures within the confines of larger design systems such as an LMS platform.",
    },
    {
      name: "a careful listener",
      description:
        "Being a good listener is crucial for any designer because it allows for a deeper understanding of user needs and preferences. As a UX designer, I excel in active listening during user interviews, enabling me to capture nuanced details and empathize with users. I believe this skill is both underrated and fundamental in creating user-centered solutions that genuinely address and enhance the user experience.",
    },
  ];
</script>

<main class="flex flex-col flex-1 lg:px-20 px-8">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2
        class="font-semibold text-4xl sm:text-5xl md:text-6xl"
        style="line-height:1.1;"
      >
        At the confluence of
        <span class="ppoppins text-amber-400">design</span>
        and
        <span class="poppins text-amber-400">education</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I enjoy developing impactful <span
          class="poppins text-cyan-600 bg-amber-300/60 px-1"
          >learning experiences</span
        >
        achieved by integrating proven methodologies from both the fields of
        <span class="poppins text-cyan-600 bg-amber-300/60 px-1"
          >user experience</span
        >
        and
        <span class="poppins text-cyan-600 bg-amber-300/60 px-1">pedagogy</span
        >.
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-pink-400 hover:to-amber-200 text-white cursor-pointer"
        href="mailto:keithcorona@protonmail.com"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-500"
        />

        <h3>Let's talk <i class="fa-regular fa-envelope" /></h3>
      </a>
    </div>

    <div class="relative grid place-items-center">
      <img
        class="w-full max-w-[80vw] sm:max-w-[500px] lg:max-w-[600px] h-auto rounded-full aspect-square"
        src="/images/profile-img.jpg?width=500&format=webp"
        alt="Keith Corona profile image"
        title="Keith Corona - Designer & Educator"
        on:click={() =>
          openModal("/images/profile-img.jpg?width=1200&format=webp")}
      />
      <!-- pause for now
      <img
        class="w-[500px] h-auto rounded-full"
        src="/images/profile-img.jpg?width=500&format=webp"
        alt="Keith Corona profile image"
        title="Keith Corona - Designer & Educator"
        on:click={() =>
          openModal("/images/profile-img.jpg?width=1200&format=webp")}
        loading="lazy"
      />
      -->
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">Some past projects</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Take a <span class="poppins text-cyan-600">look</span> at my work.
      </h3>
    </div>
    <!-- Disabled for the moment
     <a
      href="https://youtube.com/"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-lg border-4 border-solid border-red-600 bg-red-600 text-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-red-600 hover:bg-white hover:text-red-600 hover:shadow-md duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Developing a fully online, asynchronous writing course presents a
          myriad of choices when it comes to how the course should be designed.
          This course utilizes the <strong class="text-white">Canvas LMS</strong
          >
          with a strategically designed UI that streamlines accessibility and productivity
          in a logical manner through a purposeful
          <strong class="text-white" />information architecture and
          <strong class="text-white">user experience.</strong>
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Some people consider hybrid learning the best of both worlds, but
          without proper planning, it can be a learner experience nightmare.
          Using a combination of <strong class="text-white"
            >backwards design</strong
          >
          coupled with a meaningfully designed
          <strong class="text-white"> Canvas LMS course site</strong>
          establishes a recipe for success for a
          <strong class="text-white">learner's journey.</strong>
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Education plays a crucial role in the business world. A well-trained
          sales team means higher conversion rates. By <strong
            class="text-white">auditing</strong
          >
          current company training programs and materials, I am able to
          <strong class="text-white">design a training program</strong> that suits
          your team's particular needs by tapping into my experience in both education
          and business all while aligning with your company's values and mission.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-amber-300 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-amber-300 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-cyan-600">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-cyan-600 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl text-amber-400">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
      The right mix of <span class="text-amber-400 italic poppins"
        >talent
      </span>
      and
      <span class="text-cyan-600 italic poppins">experience</span>.
    </h5>
  </section>

  {#if isModalOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
    >
      <!-- Larger image -->
      <img
        class="max-w-[90vw] max-h-[90vh] rounded shadow-lg border-4 border-white"
        src={largeImageSrc}
        alt="Large image"
        on:click|stopPropagation
        loading="lazy"
      />
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 text-cyan-700 text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center"
        on:click={closeModal}
      >
        ✕
      </button>
    </div>
  {/if}
</main>
