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
</script>

<main
  class="flex flex-col flex-1 p-4 lg:py-20 sm:py-4 lg:mx-10 bg-white rounded-lg"
>
  <h1
    class="text-amber-500 font-bold text-3xl place-self-center sm:text-6xl md:text-6xl mb-6"
    style="line-height:1.1;"
  >
    Instructional Design Portfolio
  </h1>
  <!-- Modal for larger image -->
  {#if isModalOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
    >
      <!-- Larger image -->
      <img
        class="max-w-[90vw] max-h-[90vh] rounded shadow-lg border border-cyan-700"
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
  <section
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-6 rounded-xl p-4 text-cyan-800"
  >
    <div
      class="flex flex-col lg:justify-top text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl md:text-3xl"
        style="line-height:1.1;"
      >
        Overview
      </h2>
      <p class="text-lg">
        I’ve always been driven by a passion for design, seeing it as both an
        art and a problem-solving tool, which has shaped my academic and
        professional journey. With a Ph.D. in Education and Information and
        Communications Technology from the University of Lisbon (2024), an M.A.
        in General Linguistics (TESOL) from California State University, Fresno,
        and a B.A. in Business Administration (Marketing) from Fresno Pacific
        University, I’ve focused my expertise on enhancing learner experiences
        in Virtual Learning Environments. My dissertation explored UX and
        Information Architecture, integrating design strategies into iterative
        course development to improve online education.
      </p>
      <p class="text-lg">
        Since 2012, I’ve been a Lecturer in higher education, joining UC Santa
        Barbara’s <a
          href="https://www.ems.ucsb.edu/people/keith-corona"
          target="_blank"
          style="text-decoration: underline;"
          class="hover:font-bold">English for Multilingual Students Program</a
        > in 2016, where I’ve designed all of our program’s online courses, using
        both Moodle and Canvas across online, hybrid, and in-person modalities. I’ve
        also consulted with faculty through tutorial videos and presentations on
        topics spanning from LX research to note taking. In my instructional design
        work, I am constantly blending my front-end web skills and inclusive design
        principles to elevate teaching and learning—skills I’m eager to bring to
        a design-centric role.
      </p>
    </div>

    <div
      class="flex flex-col lg:justify-around bg-cyan-800 rounded-xl p-4 text-cyan-100 shadow-lg border border-solid border-cyan-200 border-4 border-opacity-80"
    >
      <p
        class="font-semibold text-white text-xl sm:text-xl md:text-xl place-self-center pb-8"
      >
        <i class="fa-regular fa-bookmark"></i> At a glance:
      </p>
      <div class="px-4">
        <h3 class="text-white text-xl sm:text-xl md:text-xl">Education</h3>
        <ul class="p-2 list-disc">
          <li class="text-lg sm:text-lg md:text-lg">
            PhD in Education and Information and Communications Technology
          </li>
          <li class="text-lg sm:text-lg md:text-lg">
            M.A. in General Linguistics with an option in TESOL
          </li>
          <li class="text-lg sm:text-lg md:text-lg">
            B.A. in Business Administration with an emphasis in Marketing
          </li>
        </ul>
      </div>
      <div class="px-4">
        <h3 class="text-white text-xl pt-6">Expertise</h3>
        <ul class="p-2 list-disc">
          <li class="text-lg sm:text-lg md:text-lg">
            LMS platforms (Canvas, Moodle)
          </li>
          <li class="text-lg sm:text-lg md:text-lg">UX/LX design</li>
          <li class="text-lg sm:text-lg md:text-lg">UX/LX research</li>
          <li class="text-lg sm:text-lg md:text-lg">
            Information Architecture
          </li>

          <li class="text-lg sm:text-lg md:text-lg">
            Online, hybrid, and in-person course design
          </li>
          <li class="text-lg sm:text-lg md:text-lg">
            EdTech and related technologies
          </li>
        </ul>
      </div>
      <div class="px-4">
        <h3 class="text-white text-xl pt-6">Case Studies</h3>
        <div class="flex flex-col md:flex-row">
          <a
            href="/instructional-design/case-study-1"
            class="text-center border-2 border-cyan-200 bg-amber-200 md:bg-cyan-400 p-4 rounded-2xl text-slate-600 m-2 hover:bg-amber-200"
            >Case Study 1</a
          >

          <a
            href="/instructional-design/case-study-2"
            class="text-center border-2 border-cyan-200 bg-amber-200 md:bg-cyan-400 p-4 rounded-2xl text-slate-600 m-2 hover:bg-amber-200"
            >Case Study 2</a
          >
          <a
            href="/instructional-design/case-study-3"
            class="text-center border-2 border-cyan-200 bg-amber-200 md:bg-cyan-400 p-4 rounded-2xl text-slate-600 m-2 hover:bg-amber-200"
            >Case Study 3</a
          >
        </div>
      </div>
    </div>
  </section>

  <section class="flex flex-col m-2 my-8 p-4 text-cyan-800 items-center">
    <div class="max-w-[850px]">
      <h2
        class="text-cyan-700 font-semibold text-left md:text-center text-xl md:text-3xl pb-4"
        style="line-height:1.1;"
      >
        Philosophy
      </h2>
      <p class="text-lg mb-6">
        I believe learning thrives in a collaborative, learner-centered
        environment where a leader and learner engage as partners, drawing
        inspiration from the apprenticeship model while adapting to the unique
        demands of higher education. I believe deep learning arises from
        creative and iterative processes that ignite engagement for both teacher
        and student, fueled by intrinsic motivations tied to the subject’s
        relevance in learners’ present and future lives.
      </p>
      <p class="text-lg">
        I also believe that technology should enhance proven pedagogical models
        with intention, not merely because it’s ubiquitous or expected. I
        believe a blend of cognitivist, pragmatist, and constructivist
        perspectives fosters environments where mental growth, practical
        relevance, and active knowledge construction converge.
      </p>
    </div>
  </section>

  <section
    class="flex flex-col flex-col-reverse md:flex-row py-8 sm:py-14 items-center p-4 m-2"
  >
    <div
      class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded mt-8 md:m-2"
    >
      <img
        class="w-[500px] h-auto rounded cursor-pointer"
        src="/images/id/video-edit.png?width=500&format=webp"
        alt="Course discussion on Canvas LMS"
        on:click={() =>
          openModal("/images/id/video-edit.png?width=1200&format=webp")}
        loading="lazy"
      />
    </div>

    <div
      class="flex flex-col lg:justify-center text-left text-cyan-800 max-w-[500px] md:mx-8"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl md:text-3xl md:my-2"
        style="line-height:1.1;"
      >
        Skills and Expertise
      </h2>
      <p class="text-lg">
        My expertise in front-end web programming languages, combined with
        extensive PhD research in user and learner experience—particularly in
        information architecture—provides me with a robust foundation for
        mastering new technologies and envisioning their applications in
        instructional design.
      </p>
      <p class="text-lg">
        This blend of technical proficiency and deep understanding of how users
        interact with digital systems enables me to quickly grasp the mechanics
        and potential of emerging tools. For instance, while I’ve become an
        expert user of the Canvas LMS, adapting its features to enhance learning
        experiences, my background equips me to efficiently learn and leverage
        any new platform.
      </p>
      <p class="text-lg">
        I can swiftly identify how technologies align with pedagogical goals,
        making connections across diverse contexts to implement them effectively
        and creatively, whether for course design, user navigation, or
        engagement strategies.
      </p>
    </div>
  </section>

  <section class="flex flex-col md:flex-row py-8 sm:py-14 items-center p-4 m-2">
    <div
      class="flex flex-col lg:justify-center text-left text-cyan-800 max-w-[500px] md:mx-8"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl md:my-2"
        style="line-height:1.1;"
      >
        Teaching Materials
      </h2>
      <p class="text-lg">
        My passion for creativity, technology, and pedagogy, honed over more
        than a decade of teaching, drives me to develop innovative and engaging
        instructional materials that resonate with learners. This unique blend
        allows me to seamlessly integrate cutting-edge tools with sound
        educational practices, transforming traditional content into dynamic,
        student-centered experiences.
      </p>
      <p class="text-lg">
        My extensive classroom experience has deepened my understanding of
        diverse learner needs, while my enthusiasm for technology empowers me to
        experiment with novel approaches—such as interactive digital whiteboards
        or polished video content. Together, these strengths enable me to craft
        teaching materials that are not only pedagogically robust but also
        creatively compelling, consistently enhancing engagement and learning
        outcomes.
      </p>
    </div>

    <div
      class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded mt-8 md:m-2"
    >
      <img
        class="w-[500px] h-auto rounded cursor-pointer"
        src="/images/id/canvas-page.jpeg?width=500&format=webp"
        alt="A Canvas lesson page"
        on:click={() =>
          openModal("/images/id/canvas-page.jpeg?width=1200&format=webp")}
        loading="lazy"
      />
    </div>
  </section>
  <section
    class="flex flex-col flex-col-reverse md:flex-row py-8 sm:py-14 items-center p-4 md:mt-8"
  >
    <div
      class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded mt-8 md:m-2"
    >
      <img
        class="w-[500px] h-auto rounded cursor-pointer"
        src="/images/id/faculty-workshop.png?width=500&format=webp"
        alt="Hosting faculty workshop"
        on:click={() =>
          openModal("/images/id/faculty-workshop.png?width=1200&format=webp")}
        loading="lazy"
      />
    </div>

    <div
      class="flex flex-col lg:justify-center text-left text-cyan-800 max-w-[500px] md:mx-8"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl md:my-2"
        style="line-height:1.1;"
      >
        Workshops
      </h2>
      <p class="text-lg">
        I’m passionate about sharing my knowledge and practical advice on
        integrating technology seamlessly into the classroom, helping educators
        elevate their teaching with innovative tools. Within the EMS Program,
        I’ve led multiple workshops and talks, exploring topics such as using
        Slack and Nectir for communication, enhancing UX in course site design,
        and optimizing note-taking with Notion and other personal knowledge
        management (PKM) systems like Obsidian.
      </p>
      <p class="text-lg">
        These opportunities highlight my dedication to connecting pedagogy with
        technology, providing colleagues with clear, adaptable strategies. My
        ability to break down complex tools into useful insights draws from my
        extensive experience and my enthusiasm for cultivating tech-enhanced,
        collaborative learning spaces.
      </p>
    </div>
  </section>

  <section
    class="flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse py-8 sm:py-14 items-center p-4 md:mt-8"
  >
    <div class="w-full sm:w-[500px] rounded mt-8 md:m-2 flex justify-center">
      <img
        class="w-[350px] h-auto rounded cursor-pointer"
        src="/images/id/canvas_stacked.png?width=350&format=webp"
        alt="Canvas logo"
        on:click={() =>
          openModal("/images/id/canvas_stacked.png?width=1200&format=webp")}
        loading="lazy"
      />
    </div>

    <div
      class="flex flex-col lg:justify-center text-left text-cyan-800 max-w-[500px] md:mx-8"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl md:my-2"
        style="line-height:1.1;"
      >
        A Note on Canvas
      </h2>
      <p class="text-lg my-4">
        Since the implementation of Canvas at UCSB, I have actively explored its
        core features and LTIs in both sandbox and live teaching environments.
        Tools like Syllabus, Announcements, Modules, Grades, People, Pages,
        GauchoCast, Assignments, Discussions, Quizzes, Files, and Zoom have
        proven essential in supporting the pedagogical frameworks I build for my
        courses. I emphasize purposeful integration by choosing a few tools and
        applying them in versatile ways. For example, I use the Quiz tool to
        assess student understanding, collect feedback, and facilitate timed
        writing exercises.
      </p>
      <p class="text-lg">
        Canvas is always evolving, much like the web development world, so
        staying up to date is less about knowing everything and more about
        knowing how to learn quickly. That is where my tech background and
        pedagogical lens intersect, enabling me to make fast, meaningful
        adaptations.
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center p-4 mt-10">
    <div class="text-cyan-800 lg:max-w-[950px]">
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl md:my-2"
        style="line-height:1.1;"
      >
        Case Studies
      </h2>
      <p class="text-lg">
        My professional journey in education is captured through a collection of
        case studies that showcase my innovative contributions. One highlight
        includes guiding a team of educators to successfully secure a grant,
        enabling the creation of tailored, high-impact courses for diverse
        learners. Another pivotal experience involved reimagining traditional
        course materials as dynamic online learning experiences that maintained
        academic rigor while embracing digital tools. Furthermore, I have
        strategically integrated cutting-edge technologies into educational
        frameworks aimed at creating improvements in learning outcomes.
        Collectively, these cases illustrate my passion for collaborative,
        creative, and purposeful advancements in education.
      </p>

      <div class="flex flex-col md:flex-row justify-between items-center">
        <a href="/instructional-design/case-study-1"
          ><div
            class="my-4 w-[300px] p-4 bg-red-400 rounded-xl text-white font-bold bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-amber-600 hover:to-amber-500"
          >
            <h3 class="py-4">
              Case Study 1: Building an Effective Online Course from Traditional
              Content
            </h3>
          </div></a
        >

        <a href="/instructional-design/case-study-2"
          ><div
            class="my-4 w-[300px] p-4 bg-red-400 rounded-xl text-white font-bold bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-amber-600 hover:to-amber-500"
          >
            <h3 class="py-4">
              Case Study 2: Augmenting the Writing Process with Technology
            </h3>
          </div></a
        >

        <a href="/instructional-design/case-study-3"
          ><div
            class="my-4 w-[300px] p-4 bg-red-400 rounded-xl text-white font-bold bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-amber-600 hover:to-amber-500"
          >
            <h3 class="py-4">
              Case Study 3: Building Successful Grant Proposals for Online
              Education
            </h3>
          </div></a
        >
      </div>
    </div>
  </section>

  {#if isModalOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
    >
      <!-- Larger image -->
      <img
        class="max-w-[90vw] max-h-[90vh] rounded shadow-lg border border-cyan-700"
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
