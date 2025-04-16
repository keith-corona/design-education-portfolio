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
      Case Study 1: Transforming Linguistics 12 for Digital Learning
    </h1>
  </div>
  <!--attempting two columns-->

  <section
    class="flex flex-col md:flex-row justify-center lg:pt-8 px-4 py-2 text-cyan-700"
  >
    <div class="p-4 min-w-[400px]">
      <h1 class="text-2xl font-bold mb-4">Course Context</h1>
      <p class="lg:max-w-[950px] mb-6">
        Linguistics 12 was originally designed as a traditional in-person course
        heavily dependent on classroom-based activities including discussions,
        reflective writing, collaborative reading, and interactive Q&A sessions.
        The challenge was to transform this highly interactive course into an
        effective online and hybrid learning experience without sacrificing the
        depth of engagement or quality of learning outcomes.
      </p>
    </div>

    <div class="p-4 min-w-[400px]">
      <h2 class="self-start text-2xl font-bold mb-4">Key Challenges</h2>
      <ul class="lg:max-w-[950px] mb-6 list-disc pl-6">
        <li class="pb-1">
          Maintaining the collaborative nature of process writing in an
          asynchronous environment
        </li>
        <li class="pb-1">
          Preserving the spontaneity and depth of in-class discussions when
          students work independently
        </li>
        <li class="pb-1">
          Creating effective alternatives for collaborative activities
          originally designed for face-to-face settings
        </li>
        <li class="pb-1">
          Ensuring students could engage deeply with complex linguistic concepts
          without immediate instructor feedback
        </li>
        <li class="pb-1">
          Developing a format that would support different learning styles and
          schedules while maintaining academic rigor
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
        I began by identifying which elements of the in-person course were most
        valuable to student learning and which aspects presented the greatest
        challenges in a digital environment. Through careful mapping of learning
        objectives to activities, I determined which components required
        reimagining versus which could be adapted with minimal changes.
      </p>
    </div>

    <div
      class="max-w-[500px] p-4 border-cyan-700 border-2 rounded-lg m-4 flex-1"
    >
      <h2 class="self-start text-lg font-bold mb-4">Design Methodology</h2>
      <p class="max-w-[950px] mb-6">
        Using the ADDIE model (Analysis, Design, Development, Implementation,
        Evaluation), I approached the transformation systematically:
      </p>
      <ul class="max-w-[950px] mb-6 list-decimal pl-6">
        <li class="pb-1">
          <span class="font-bold">Analysis:</span> Identified core learning objectives
          and essential activities
        </li>
        <li class="pb-1">
          <span class="font-bold">Design:</span> Created new activity structures
          leveraging Canvas LMS capabilities
        </li>
        <li class="pb-1">
          <span class="font-bold">Development:</span> Built the course environment
          with integrated digital tools
        </li>
        <li class="pb-1">
          <span class="font-bold">Implementation:</span> Deployed the course with
          clear student guidance
        </li>
        <li class="pb-1">
          <span class="font-bold">Evaluation:</span> Gathered feedback and performance
          data for iterative improvement
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
      <p class="max-w-[950px] mb-6">
        Given that Canvas was the university’s standard LMS, I focused on
        integrating tools that would elevate the learning experience rather than
        act as digital replacements for in-person tasks:
      </p>
      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          <span class="font-bold">Canvas LMS:</span> Core platform for content
          organization, assessment, and communication
          <ul class="list-disc pl-6">
            <li class="">
              <span class="font-bold">Discussion Boards:</span> Structured for deeper,
              more reflective conversations than typically possible in time-limited
              classroom settings
            </li>
          </ul>
        </li>
        <li class="pb-1">
          <span class="font-bold">Google Docs:</span> Enabled dialectical journals
          and collaborative annotation
        </li>
        <li class="pb-1">
          <span class="font-bold">Miro:</span> Facilitated visual thinking, concept
          mapping, and structural planning
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
        I incorporated Universal Design for Learning principles throughout by:
      </p>
      <ul class="pl-10 max-w-[600px] mb-6 list-disc">
        <li class="pb-1">
          Providing multiple means of engagement through varied activity types
        </li>
        <li class="pb-1">
          Offering content in different formats to accommodate diverse learning
          preferences
        </li>
        <li class="pb-1">
          Creating flexible scheduling within weekly parameters to support
          different working styles
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
    <div class="mx-4">
      <h2 class="self-start text-lg font-bold mb-4">
        Course Structure Redesign
      </h2>
      <p class="max-w-[950px] mb-4">
        I transformed the course structure from a bi-weekly, in-person meeting
        format to an asynchronous online approach with:
      </p>
      <ul class="pl-10 max-w-[600px] mb-6 list-disc">
        <li class="pb-1">
          Weekly learning modules with clear objectives and expectations
        </li>
        <li class="pb-1">Scaffolded activities that build upon each other</li>
        <li class="pb-1">
          Integrated reflection points throughout each module
        </li>
        <li class="pb-1">
          Developed several innovative approaches to maintain the interactive
          nature of linguistics study:
        </li>
      </ul>
    </div>

    <div class="mx-4">
      <h2 class="self-start text-lg font-bold mb-4 underline">
        Interactive Elements
      </h2>
    </div>
    <!-- 1st -->

    <div class="flex flex-col md:flex-row justify-center md:mt-4">
      <div
        class="flex flex-col p-4 m-2 justify-center rounded-xl bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">
          Dialectical Journals via Google Docs
        </h2>
        <p class="max-w-[950px] mb-4">
          Transformed traditional reading responses into dynamic, layered
          conversations where:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Students annotate readings directly in the document
          </li>
          <li class="pb-1">
            Peers engage with each other's annotations, creating threaded
            conversations
          </li>
          <li class="pb-1">
            Interactive brainstorming sessions that remain persistent for
            continued development
          </li>
          <li class="pb-1">
            Outline development with visual organization of arguments and
            supporting evidence
          </li>
        </ul>
      </div>

      <div
        class="flex flex-col p-4 justify-center rounded-xl m-2 md:ml-4 bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">
          Visual Thinking via Miro Boards
        </h2>
        <p class="max-w-[950px] mb-4">
          Leveraged digital whiteboards to enhance conceptual understanding
          through:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Collaborative concept mapping for linguistic theories
          </li>
          <li class="pb-1">
            Visual relationship building between different readings and concepts
          </li>
          <li class="pb-1">
            Instructor can provide targeted feedback within the actual context
            of discussion
          </li>
          <li class="pb-1">
            Thought development becomes visible over time as students revisit
            and expand on ideas
          </li>
        </ul>
      </div>
    </div>

    <!-- 2nd -->

    <div class="flex flex-col md:flex-row justify-center md:mt-4">
      <div class="flex flex-col p-4 rounded-xl m-2 bg-slate-100 flex-1">
        <h2 class="self-start text-lg font-bold mb-4">
          Asynchronous-to-Synchronous Workflow
        </h2>
        <p class="max-w-[950px] mb-4">
          For the hybrid version, I designed a workflow where:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Students complete preparatory work independently online (such as
            readings)
          </li>
          <li class="pb-1">
            In-person sessions focus on deeper application of concepts through
            small group work
          </li>
          <li class="pb-1">
            Online follow-up activities build on in-person breakthroughs
          </li>
          <li class="pb-1">
            The learning cycle creates continuity between digital and physical
            spaces
          </li>
        </ul>
      </div>

      <div
        class="flex flex-col p-4 justify-center rounded-xl m-2 bg-slate-100 flex-1 md:ml-4"
      >
        <h2 class="self-start text-lg font-bold mb-4">
          Technology Integration
        </h2>
        <p class="max-w-[950px] mb-4">
          I utilized Canvas LMS features strategically to enhance learning:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Developed sequenced modules with prerequisite requirements to ensure
            proper scaffolding
          </li>
          <li class="pb-1">
            Implemented automatically-scored formative assessments for immediate
            feedback
          </li>
          <li class="pb-1">
            Utilized the calendar and announcement features to maintain
            consistent communication
          </li>
          <li class="pb-1">
            Embedded and linked to external tools (Google Docs, Miro) within
            Canvas for seamless student experience
          </li>
        </ul>
      </div>
    </div>

    <!-- 3rd -->
    <div class="flex flex-col md:flex-row md:mt-4">
      <div
        class="flex flex-col p-4 m-2 justify-center rounded-xl bg-slate-100 flex-1"
      >
        <h2 class="self-start text-lg font-bold mb-4">Engagement Strategies</h2>
        <p class="max-w-[950px] mb-4">
          To maintain high engagement in the asynchronous segments:
        </p>
        <ul class="pl-10 max-w-[600px] mb-6 list-disc">
          <li class="pb-1">
            Designed activities requiring peer interaction and feedback
          </li>
          <li class="pb-1">
            Created opportunities for student choice in topics and approaches
          </li>
          <li class="pb-1">
            Implemented varied assessment methods to accommodate different
            strengths
          </li>
          <li class="pb-1">
            Developed a consistent rhythm of deadlines within flexible weekly
            timeframes
          </li>
        </ul>
      </div>
    </div>
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
      <p class="max-w-[950px] mb-4">
        The transformed course demonstrated several advantages over the original
        format:
      </p>
      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          <span class="font-bold">Deeper Reflection:</span> Extended time for processing
          complex linguistic concepts led to more thoughtful analysis
        </li>
        <li class="">
          <span class="font-bold">Visible Thinking:</span> Digital tools made student
          thinking processes more transparent
        </li>

        <li class="pb-1">
          <span class="font-bold">Persistent Discussions:</span> Conversations developed
          over longer periods with greater depth than in-time-limited classroom settings
        </li>
        <li class="pb-1">
          <span class="font-bold">Flexible Engagement:</span> Students could interact
          with materials at optimal times for their cognitive engagement
        </li>
        <li class="pb-1">
          <span class="font-bold">Enhanced Collaboration:</span> Digital collaboration
          tools allowed for more equitable participation than traditional in-class
          discussions
        </li>
      </ul>

      <h2 class="self-start text-lg font-bold mb-4">Student Experience</h2>
      <p class="max-w-[950px] mb-4">
        The redesigned course format provided students with:
      </p>
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
      <p class="max-w-[950px] mb-4">
        From an instructional perspective, the transformation resulted in:
      </p>
      <ul class="pl-10 max-w-[600px] mb-4 list-disc">
        <li class="pb-1">
          More detailed visibility into student thinking processes
        </li>
        <li class="pb-1">
          Better tracking of individual contributions to group activities
        </li>

        <li class="pb-1">
          Enhanced ability to identify misconceptions early through digital
          activities
        </li>
        <li class="pb-1">
          Streamlined feedback processes through integrated digital tools
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
      This project deepened my understanding of how technology can enhance
      rather than merely replace traditional learning experiences. By focusing
      on the unique advantages of digital tools rather than simply replicating
      in-person activities, I was able to create learning experiences that in
      many ways surpassed the original course design.
    </p>
    <p class="max-w-[950px] mb-4">
      The most valuable insight was discovering how asynchronous activities can
      lead to deeper processing and more thoughtful contributions when properly
      structured. This transformed my approach to instructional design, leading
      me to consider how every learning activity might benefit from a
      combination of synchronous immediacy and asynchronous reflection.
    </p>
    <p class="max-w-[950px] mb-4">
      Additionally, this project reinforced the importance of intentional
      technology selection. Each digital tool was chosen specifically for how it
      enhanced a particular learning objective rather than for convenience or
      novelty.
    </p>
  </section>
</main>
