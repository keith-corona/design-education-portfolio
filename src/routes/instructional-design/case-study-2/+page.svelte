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
      Case Study 2: Augmenting Writing Process with Technology
    </h1>
  </div>
  <!--attempting two columns-->

  <section
    class="flex flex-col md:flex-row justify-center lg:pt-8 px-4 py-2 text-cyan-700"
  >
    <div class="p-4 min-w-[400px]">
      <h1 class="text-2xl font-bold mb-4">Course Context</h1>
      <p class="lg:max-w-[950px] mb-6">
        The academic writing course centered on the traditional writing
        process—brainstorming, drafting, revising, and peer feedback—was a
        foundational element for students developing critical composition
        skills. Originally designed for in-person delivery, it relied on
        classroom discussions, collaborative reading, and immediate instructor
        guidance. The challenge was to enhance specific stages of this process
        with technology, preserving its integrity while amplifying student
        engagement and flexibility in a digital context.
      </p>
    </div>

    <div class="p-4 min-w-[400px]">
      <h2 class="self-start text-2xl font-bold mb-4">Key Challenges</h2>
      <ul class="lg:max-w-[950px] mb-6 list-disc pl-6">
        <li class="pb-1">
          Enhancing brainstorming and collaboration without the spontaneity of
          face-to-face interaction.
        </li>
        <li class="pb-1">
          Supporting deep analysis of readings in a way that transcends physical
          classroom constraints.
        </li>
        <li class="pb-1">
          Facilitating peer feedback that’s both structured and dynamic in an
          online environment.
        </li>
        <li class="pb-1">
          Ensuring technology complements, rather than overshadows, the writing
          process.
        </li>
        <li class="pb-1">
          Accommodating diverse learning styles while maintaining academic
          rigor.
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
        I evaluated each stage of the writing process to pinpoint where
        technology could add value—brainstorming needed collaboration, reading
        analysis required visualization, and feedback demanded structure. I
        focused on tools that would augment, not replace, these steps, keeping
        the student experience intuitive and purposeful.
      </p>
    </div>

    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h2 class="self-start text-lg font-bold mb-4">Design Methodology</h2>
      <p class="max-w-[950px] mb-6">Using an adapted ADDIE framework:</p>
      <ul class="max-w-[950px] mb-6 list-decimal pl-6">
        <li class="pb-1">
          <span class="font-bold">Analysis:</span> Identified key writing process
          stages and their technological enhancement potential.
        </li>
        <li class="pb-1">
          <span class="font-bold">Design:</span> Selected tools to target specific
          skills (e.g., collaboration, annotation).
        </li>
        <li class="pb-1">
          <span class="font-bold">Development:</span> Integrated tools into the course
          with clear instructions.
        </li>
        <li class="pb-1">
          <span class="font-bold">Implementation:</span> Rolled out enhancements
          with student guidance.
        </li>
        <li class="pb-1">
          <span class="font-bold">Evaluation:</span> Assessed tool effectiveness
          through participation and feedback.
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
          <span class="font-bold">Miro:</span> An online whiteboard for
          brainstorming and reading breakdowns, leveraging its infinite board
          size.
          <ul class="list-disc pl-6">
            <li class="">
              <span class="font-bold">Goolge Docs:</span> Enabled collaborative annotation
              and peer feedback via shared documents and comments.
            </li>
          </ul>
        </li>
        <li class="pb-1">
          <span class="font-bold">Canvas Discussions:</span> Facilitated submission
          and peer review of writing tasks like thesis development.
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
        Drawing on Universal Design for Learning, I ensured:
      </p>
      <ul class="pl-10 max-w-[600px] mb-6 list-disc">
        <li class="pb-1">
          Multiple engagement options (visual mapping, written feedback).
        </li>
        <li class="pb-1">
          Flexible interaction timing to suit varied schedules.
        </li>
        <li class="pb-1">Clear, revisitable resources for equitable access.</li>
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
          The writing process remained intact but was enriched with
          tech-enhanced stages:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Sequential tasks aligned with brainstorming, analysis, drafting, and
            revision.
          </li>
          <li class="pb-1">
            Integrated digital tools into existing workflows, maintaining a
            familiar rhythm.
          </li>
          <li class="pb-1">Weekly checkpoints via Canvas to guide progress.</li>
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
            Collaborative Brainstorming via Miro: Students used infinite boards
            for group idea generation, free from spatial limits.
          </li>
          <li class="pb-1">
            Reading Breakdowns via Miro: Visual mappings of texts helped
            students connect ideas across readings.
          </li>
          <li class="pb-1">
            Annotation via Google Docs: Peers annotated texts collaboratively,
            leaving comments for discussion.
          </li>
          <li class="pb-1">
            Peer Feedback via Google Docs: Structured feedback sessions used
            comment features and checklists.
          </li>
          <li class="pb-1">
            Thesis Development via Canvas Discussions: Students posted drafts
            for peer review, refining work based on examples.
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
            Embedded Miro boards in Canvas for seamless access to brainstorming
            and analysis tasks.
          </li>
          <li class="pb-1">
            Linked Google Docs within modules, centralizing annotation and
            feedback.
          </li>
          <li class="pb-1">
            Used Canvas Discussions with prompts and deadlines to scaffold peer
            interaction.
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
            Encouraged peer-to-peer dialogue through comments and reviews.
          </li>
          <li class="pb-1">
            Offered choice in how students approached tasks (e.g., visual vs.
            textual brainstorming).
          </li>
          <li class="pb-1">
            Provided persistent access to collaborative outputs, fostering
            ongoing refinement.
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
          <span class="font-bold">Enhanced Collaboration:</span> Miro’s infinite
          boards enabled richer group brainstorming.
        </li>
        <li class="">
          <span class="font-bold">Deeper Analysis:</span> Visual breakdowns in Miro
          revealed connections missed in traditional settings.
        </li>

        <li class="pb-1">
          <span class="font-bold">Structured Feedback:</span> Google Docs and Canvas
          streamlined peer reviews, improving revision quality.
        </li>
        <li class="pb-1">
          <span class="font-bold">Flexibility:</span> Students engaged at their own
          pace, revisiting resources as needed.
        </li>
      </ul>

      <h2 class="self-start text-lg font-bold mb-4">Student Experience</h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">Greater agency in managing their learning schedule</li>
        <li class="pb-1">
          More opportunities for revision and refinement of ideas
        </li>

        <li class="pb-1">
          Reduced anxiety for students who find spontaneous in-class
          contributions challenging
        </li>
        <li class="pb-1">
          Increased accessibility for students with varied life circumstances
          and learning needs
        </li>
      </ul>

      <h2 class="self-start text-lg font-bold mb-4">
        Instructional Advantages
      </h2>

      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          Clearer insight into student thinking via Miro boards and annotations.
        </li>
        <li class="pb-1">
          Simplified feedback management through digital tools.
        </li>

        <li class="pb-1">
          Scalable enhancements applicable to other writing courses.
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
      This project revealed how technology can amplify traditional processes
      without disrupting their essence—Miro’s visual freedom, Google Docs’
      interactivity, and Canvas’s structure turned individual stages into
      dynamic experiences. I learned that intentional tool selection, tied to
      specific learning goals, is critical; each tool served a unique purpose
      rather than being a catch-all solution. The success of this approach has
      shifted my perspective toward blending digital and analog strengths more
      deliberately. In future iterations, I’d explore adding instructor-led Miro
      sessions to model advanced mapping techniques, further bridging student
      independence with guided practice.
    </p>
  </section>
</main>
