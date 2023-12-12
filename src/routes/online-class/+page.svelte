<main class="flex flex-col flex-1 p-4 lg:mx-10">
  <h1
    class="text-cyan-700 font-bold text-3xl sm:text-6xl md:text-6xl mb-6"
    style="line-height:1.1;"
  >
    Developing an Asynchrous Online Course
  </h1>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-6 bg-white rounded-xl p-4 text-cyan-800 shadow-lg"
  >
    <div
      class="flex flex-col lg:justify-top text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <p class="text-lg">
        For this sample, I will walk you through a few points from a project I
        had developing an asynchronous online course using the Canvas Learning
        Management System (LMS). The Canvas LMS has become increasingly popular
        especially amongst higher learning institutions. While it is not open
        source, it has a nice mix of customizable functions and features.
      </p>
    </div>
    <div
      class="relative grid place-items-center bg-cyan-800 rounded-xl p-4 text-cyan-100 shadow-lg border border-solid border-cyan-200 border-4 border-opacity-80"
    >
      <p class="font-semibold text-white text-xl sm:text-xl md:text-xl">
        <i class="fa-regular fa-bookmark"></i> Key points:
      </p>
      <ul class="p-2 list-disc">
        <li class="text-lg sm:text-lg md:text-lg">
          Implement a user-centered approach
        </li>
        <li class="text-lg sm:text-lg md:text-lg">
          Rely on data for design choices
        </li>
        <li class="text-lg sm:text-lg md:text-lg">
          Understand your specific context
        </li>
      </ul>
    </div>
  </section>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-6">
    <div
      class="flex flex-col lg:justify-top text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl"
        style="line-height:1.1;"
      >
        Know Your Students
      </h2>
      <p class="text-lg">
        Everything begins by knowing your students. Ideally, this comes from
        some kind of research like a questionnaire, interviews, or a mix of the
        two. Sometimes, though, a teacher doesn’t have access to that
        information, but they do have a collection of insights about their
        students from informal feedback via complaints or praises, brief
        conversations after class or in office hours, or from student emails
        about problems they’ve encountered in the course site. In this project,
        I collected feedback from students from the previous term at three
        intervals and conducted semi-structured interviews. This data informed
        my design.
      </p>
    </div>
    <div class="relative grid place-items-center">
      <div class="relative grid place-items-center">
        <img
          src={"images/async/online-async.png"}
          alt="asynchronous online course in LMS"
          title="An online course in LMS"
          class="object-cover z-[2] max-h-[70vh] rounded-2xl"
        />
        <p class="bg-cyan-700 text-white text-center p-1 mt-2 rounded-md">
          <span class="italic">Image 1.</span> A thoughtful course design in the
          Canvas LMS.
        </p>
      </div>
    </div>
  </section>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="relative grid place-items-center">
      <div class="relative grid place-items-center">
        <img
          src={"images/async/quicklinks-async.png"}
          alt="asynchronous online course in LMS"
          title="An online course in LMS"
          class="object-cover z-[2] max-h-[70vh] rounded-2xl"
        />
        <p class="bg-cyan-700 text-white text-center p-1 mt-2 rounded-md">
          <span class="italic">Image 2.</span> Customized homepage for convenient
          navigation to high traffic content.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col lg:justify-center text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl"
        style="line-height:1.1;"
      >
        Customizing a Homepage
      </h2>
      <p class="text-lg">
        In Canvas, you have the option to use a homepage, and this homepage can
        be customized. Here, it is easy to prioritize your creativity by adding
        all sorts of colors, buttons, multimedia, and information, but what does
        your student prefer?
      </p>
      <p class="text-lg">
        Using the data I gathered from students, the overwhelming response was
        that students preferred as simple of an interface as possible. This
        disappointed me since I like to make custom designs, but if a
        user-centered philosophy is implemented, then their preferences must
        take precedence.
      </p>
      <p class="text-lg">
        A simple homepage does not have to be "function-less", however. In the
        data, I found that students wanted quicker access to common course
        features that would often take a few clicks to arrive at. So, my
        creativity came out in how to make a simple yet functional homepage that
        would be beneficial throughout the term, not just for the first couple
        of visits.
      </p>

      <p class="text-lg">
        A set of quick access buttons were designed to instantly transport
        students to specific, highly frequented or important areas of the course
        site. I should note here that there were also alternative routes leading
        to the same destinations, but these quick links led the student there
        much like a shortcut.
      </p>
    </div>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div
      class="flex flex-col lg:justify-center text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl"
        style="line-height:1.1;"
      >
        Navigation as a Primary Focus
      </h2>
      <p class="text-lg">
        For this course, I knew that students would need to navigate to several
        different spaces throughout the term as well as navigate the term
        itself. Canvas has some customizability in this area by allowing a
        course designer to limit, or hide, the items that appear on the local
        navigation. Based on data, I decided to reduce the local navigation to
        the bare essentials. By limiting the number of options available to
        click in the menu, students are able to accurately and efficiently reach
        their targeted destinations.
      </p>
    </div>
    <div class="relative grid place-items-center">
      <div class="relative grid place-items-center">
        <img
          src={"images/async/menu-async.png"}
          alt="asynchronous online course in LMS"
          title="An online course in LMS"
          class="object-cover z-[2] max-h-[40vh] rounded-2xl"
        />
        <p class="bg-cyan-700 text-white text-center p-1 mt-2 rounded-md">
          <span class="italic">Image 3.</span> A bare-essentials menu.
        </p>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="relative grid place-items-center">
      <div class="relative grid place-items-center">
        <img
          src={"images/async/modules-async.png"}
          alt="asynchronous online course in LMS"
          title="An online course in LMS"
          class="object-cover z-[2] max-h-[70vh] rounded-2xl"
        />
        <p class="bg-cyan-700 text-white text-center p-1 mt-2 rounded-md">
          <span class="italic">Image 4.</span> Chunking course content through weekly
          modules.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col lg:justify-center text-left lg:text-left gap-4 md:gap-4 lg:gap-4"
    >
      <h2
        class="text-cyan-700 font-semibold text-xl sm:text-3xl md:text-3xl"
        style="line-height:1.1;"
      >
        Structuring Learning with Modules
      </h2>
      <p class="text-lg">
        In an asynchronous setting, teachers have little control over when or
        for how long students will access and interact with course content.
        Additionally, there is limited opportunity for follow-up directions when
        a student encounters an issue with the course design. In an educational
        setting when there is a specific term, course designers are able to
        incorporate those time limits to a more structured setting, but the more
        rigid structure you provide, the less learner autonomy there is. In this
        course, I created a predictable weekly schedule with the opportunity for
        students to be able to have a well-paced course structure, while leaving
        the option to navigate through both present and past lessons and
        formative assessments.
      </p>
    </div>
  </section>
</main>
