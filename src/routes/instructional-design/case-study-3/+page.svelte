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
  class="flex flex-col flex-1 lg:max-w-[950px] place-self-center bg-white rounded-lg"
>
  <div class="bg-amber-400 p-4 mb-6 lg:p-20 rounded-t-lg">
    <h1
      class="text-white font-bold text-3xl text-center sm:text-6xl md:text-6xl"
      style="line-height:1.1;"
    >
      Case Study 3: Leading Online Course Grant Proposal Team
    </h1>
  </div>
  <!--attempting two columns-->

  <section
    class="flex flex-col md:flex-row justify-center lg:pt-8 px-4 py-2 text-cyan-700"
  >
    <div class="p-4 min-w-[400px]">
      <h1 class="text-2xl font-bold mb-4">Project Context</h1>
      <p class="lg:max-w-[950px] mb-6">
        The EMS Program sought to expand its online offerings by creating a new
        course featuring shareable video content for faculty use across multiple
        classes. This initiative required securing an Online Course Grant from
        the Office of Teaching and Learning, a competitive process demanding a
        clear vision, efficient collaboration, and a robust course design. The
        project aimed to deliver a scalable resource that would enhance teaching
        consistency and flexibility within the program.
      </p>
    </div>

    <div class="p-4 min-w-[400px]">
      <h2 class="self-start text-2xl font-bold mb-4">Key Challenges</h2>
      <ul class="lg:max-w-[950px] mb-6 list-disc pl-6">
        <li class="pb-1">
          Coordinating a team to develop a compelling grant proposal under tight
          deadlines.
        </li>
        <li class="pb-1">
          Managing the creation of high-quality, reusable video content for
          diverse course applications.
        </li>
        <li class="pb-1">
          Designing a course structure that balanced innovation with practical
          faculty utility.
        </li>
        <li class="pb-1">
          Ensuring seamless team communication and task tracking in a
          collaborative setting.
        </li>
        <li class="pb-1">
          Translating the proposed vision into a functional online course
          post-grant approval.
        </li>
      </ul>
    </div>
  </section>

  <div class="bg-cyan-100 py-8 shadow-md mb-4lg:mt-20">
    <h2 class="text-center text-2xl font-bold text-cyan-800">
      Process and Approach
    </h2>
  </div>

  <!-- Section 1 -->
  <section
    class="flex flex-col md:flex-row justify-around px-8 mt-4 lg:py-2 text-cyan-700"
  >
    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h3 class="self-start text-lg font-bold mb-4">Analysis Phase</h3>

      <p class="max-w-[950px] mb-6">
        I assessed the grant requirements and program needs, identifying the
        demand for shareable video resources as a key selling point. I also
        evaluated team strengths and potential bottlenecks, prioritizing tools
        and strategies to streamline collaboration and content development.
      </p>
    </div>

    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h2 class="self-start text-lg font-bold mb-4">Design Methodology</h2>
      <p class="max-w-[950px] mb-6">Using an adapted ADDIE framework:</p>
      <ul class="max-w-[950px] mb-6 list-decimal pl-6">
        <li class="pb-1">
          <span class="font-bold">Analysis:</span> Defined grant goals and aligned
          them with program priorities.
        </li>
        <li class="pb-1">
          <span class="font-bold">Design:</span> Planned a course structure with
          reusable videos and a project management system.
        </li>
        <li class="pb-1">
          <span class="font-bold">Development:</span> Built the proposal, Notion
          hub, and course prototype collaboratively.
        </li>
        <li class="pb-1">
          <span class="font-bold">Implementation:</span> Executed the grant plan
          and launched the course on Canvas.
        </li>
        <li class="pb-1">
          <span class="font-bold">Evaluation:</span> Reviewed outcomes with an instructional
          designer for refinement.
        </li>
      </ul>
    </div>
  </section>

  <!-- Section 2 -->
  <section
    class="flex flex-col md:flex-row justify-around px-8 mb-4 lg:py-2 text-cyan-700"
  >
    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h2 class="self-start text-lg font-bold mb-4">Technology Selection</h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          <span class="font-bold">Notion:</span> Centralized project management
          with a Kanban board and activity database.
          <ul class="list-disc pl-6">
            <li class="">
              <span class="font-bold">Canvas:</span> Hosted the final course structure
              and content delivery.
            </li>
          </ul>
        </li>
        <li class="pb-1">
          <span class="font-bold">Video Editing Tools:</span> Supported filming and
          editing of professional-grade video resources.
        </li>
      </ul>
    </div>

    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h2 class="self-start text-lg font-bold mb-4">
        Accessibility Considerations
      </h2>
      <p class="max-w-[950px] mb-4">
        I incorporated flexibility into the course design by:
      </p>
      <ul class="pl-10 max-w-[600px] mb-6 list-disc">
        <li class="pb-1">
          Ensuring videos included captions for accessibility.
        </li>
        <li class="pb-1">
          Structuring content in Canvas for easy navigation by faculty and
          students.
        </li>
        <li class="pb-1">
          Using Notion’s shared access to accommodate team members’ schedules.
        </li>
      </ul>
    </div>
  </section>

  <div class="bg-cyan-100 py-8 shadow-md mb-4 lg:mt-20">
    <h2 class="text-center text-2xl font-bold text-cyan-800">
      Solutions Implemented
    </h2>
  </div>

  <!-- Solutions -->

  <!-- Implementing Flexbox Grid-->

  <section class="flex flex-col justify-center p-4 text-cyan-700">
    <!--pre-1-->
    <div class="flex flex-col md:flex-row md:mt-4">
      <div
        class="flex flex-col p-4 m-2 justify-center rounded-xl bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">
          Course Structure Redesign
        </h2>
        <p class="max-w-[950px] mb-4">
          The proposed course was designed as a modular resource hub:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Shareable video lessons organized by topic for faculty integration.
          </li>
          <li class="pb-1">
            Clear module objectives tied to common program themes.
          </li>
          <li class="pb-1">
            Flexible delivery options within Canvas for varied teaching
            contexts.
          </li>
        </ul>
      </div>
    </div>
    <!-- 1st -->

    <div class="flex flex-col md:flex-row justify-center md:mt-4">
      <div
        class="flex flex-col p-4 m-2 justify-center rounded-xl bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">Interactive Elements</h2>

        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Video Content Creation: Filmed and edited videos with engaging
            visuals, ensuring reusability across courses.
          </li>
          <li class="pb-1">
            Project Management via Notion: Built a Kanban board for task
            tracking and a database for activity development, keeping the team
            aligned.
          </li>
          <li class="pb-1">
            Collaborative Planning: Used Notion to document instructional
            methodologies and content outlines.
          </li>
        </ul>
      </div>

      <div
        class="flex flex-col p-4 justify-center rounded-xl m-2 md:ml-4 bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">
          Technology Integration
        </h2>

        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Leveraged Notion as the backbone for grant preparation, syncing team
            efforts in real time.
          </li>
          <li class="pb-1">
            Implemented the course on Canvas with embedded videos and clear
            faculty instructions.
          </li>
          <li class="pb-1">
            Streamlined video production with editing tools, ensuring
            consistency and polish.
          </li>
        </ul>
      </div>
    </div>

    <!-- 2nd -->

    <div class="flex flex-col md:flex-row justify-center md:mt-4">
      <div
        class="flex flex-col p-4 justify-center rounded-xl m-2 bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">Engagement Strategies</h2>

        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Designed videos to be concise and versatile, encouraging faculty
            adoption.
          </li>
          <li class="pb-1">
            Maintained team momentum with Notion’s visual progress tracking.
          </li>
          <li class="pb-1">
            Post-grant, collaborated with an instructional designer to refine
            engagement tactics.
          </li>
        </ul>
      </div>

      <!--check render-->
    </div>

    <!-- 3rd -->
  </section>

  <!-- End solutions grid-->

  <div class="bg-cyan-100 py-8 shadow-md mb-4 lg:mt-20">
    <h2 class="text-center text-2xl font-bold text-cyan-800">
      Outcomes and Impact
    </h2>
  </div>

  <section class="flex flex-col px-8 py-2 text-cyan-700">
    <div>
      <h2 class="self-start text-lg font-bold mb-4">Learning Benefits</h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          <span class="font-bold">Scalability:</span> Videos provided a reusable
          resource, enhancing program-wide teaching efficiency.
        </li>
        <li class="">
          <span class="font-bold">Consistency:</span> Standardized content delivery
          across courses.
        </li>

        <li class="pb-1">
          <span class="font-bold">Flexibility:</span> Faculty could adapt materials
          to their specific needs.
        </li>
      </ul>

      <h2 class="self-start text-lg font-bold mb-4">Student Experience</h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          Access to polished, on-demand video content improved comprehension of
          key topics.
        </li>
        <li class="pb-1">
          Consistent quality across courses elevated the learning experience.
        </li>
      </ul>

      <h2 class="self-start text-lg font-bold mb-4">
        Instructional Advantages
      </h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          Faculty gained a time-saving tool for lesson planning.
        </li>
        <li class="pb-1">
          Notion’s structure simplified team oversight and accountability.
        </li>

        <li class="pb-1">
          The course’s success led to its current renewal stage with the
          Academic Senate.
        </li>
      </ul>
    </div>
  </section>

  <!-- USING IMAGES FOR CLICK -->
  <section class="flex flex-col px-8 py-2 text-cyan-700">
    <h2 class="self-start text-2xl font-bold mb-4">Visual Examples</h2>

    <!-- Image gallery -->
    <div
      class="flex flex-col md:flex-row md:content-start md:items-start items-center"
    >
      <div
        class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded m-2"
      >
        <img
          class="w-[500px] h-auto rounded cursor-pointer"
          src="/images/id/canvas-home.png?width=500&format=webp"
          alt="Canvas LMS homepage"
          on:click={() =>
            openModal("/images/id/canvas-home.png?width=1200&format=webp")}
          loading="lazy"
        />
      </div>
      <div
        class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded m-2"
      >
        <img
          class="w-[500px] h-auto rounded cursor-pointer"
          src="/images/id/modules-schedule.png?width=500&format=webp"
          alt="Weekly modules"
          on:click={() =>
            openModal("/images/id/modules-schedule.png?width=1200&format=webp")}
          loading="lazy"
        />
      </div>
      <div
        class="w-full sm:w-[500px] bg-blue-500 shadow-md text-white rounded m-2"
      >
        <img
          class="w-[500px] h-auto rounded cursor-pointer"
          src="/images/id/page-lesson.png?width=500&format=webp"
          alt="Page lesson with video"
          on:click={() =>
            openModal("/images/id/page-lesson.png?width=1200&format=webp")}
          loading="lazy"
        />
      </div>
    </div>
  </section>
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

  <!-- END IMAGES FOR CLICK -->

  <section
    class="flex flex-col justify-center lg:pt-8 px-8 py-2 lg:mb-20 text-cyan-700"
  >
    <h2 class="self-start text-2xl font-bold mb-4">Reflection on Learning</h2>
    <p class="max-w-[950px] mb-4">
      Leading this project underscored the critical role of project management
      in instructional design—Notion’s tools turned a complex team effort into a
      cohesive, grant-winning proposal. The experience deepened my appreciation
      for aligning technology with practical outcomes; the videos’ reusability
      met a real faculty need, amplifying impact beyond a single course.
      Collaborating with an instructional designer post-grant refined my
      approach to iterative design, highlighting the value of expert input. In
      future projects, I’d integrate more formative team check-ins within Notion
      to preempt delays and enhance video prototyping earlier in the process.
    </p>
  </section>
</main>
