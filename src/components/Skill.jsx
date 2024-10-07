function Skill() {
  return (
    <div className="skill basis-3/4 flex flex-col items-center bg-[#f8f8f8]">
      <span className="my-5 text-3xl font-bold font-ubuntu text-[#8A51FF]">Service</span>
      <div className="service flex flex-col w-full gap-10 px-10 mb-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="fe border-2 rounded border-[#8A51FF] shadow-2xl basis-1/2 flex-col px-3
            bg-gradient-to-r from-[#8A51FF] to-purple-600 text-white max-w-[400px] md:max-w-none">
            <div className="service-name text-xl font-semibold font-ubuntu text-center uppercase">Front-End</div>
            <p className="opacity-70 text-sm font-medium">
              Using technologies like HTML, CSS, and JavaScript to create interactive and responsive designs.Common Frameworks & Library such as React, Tailwind, NextJs
            </p>
          </div>
          <div className="be border-2 rounded border-[#8A51FF] shadow-2xl basis-1/2 flex-col px-3
            bg-gradient-to-r from-[#8A51FF] to-purple-600 text-white max-w-[400px] md:max-w-none">
            <div className="service-name text-xl font-semibold font-ubuntu text-center uppercase">Back-End</div>
            <p className="opacity-70 text-sm font-medium">
              Handles the server-side logic, databases, and APIs to power web application, manage data, authenticate users, and ensure smooth functionality behind the scenes.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="design border-2 rounded border-[#8A51FF] shadow-2xl basis-1/2 flex-col px-3
            bg-gradient-to-r from-[#8A51FF] to-purple-600 text-white max-w-[400px] md:max-w-none">
            <div className="service-name text-xl font-semibold font-ubuntu text-center uppercase">Ui/Ux Design</div>
            <p className="opacity-70 text-sm font-medium">
              Ui/Ux design focused on creating visually appealing, intuitive user friendly interfaces. Tools like Figma and Sketch are commonly used. To convey the image and power of the brand
            </p>
          </div>
          <div className="devops border-2 rounded border-[#8A51FF] shadow-2xl basis-1/2 flex-col px-3
            bg-gradient-to-r from-[#8A51FF] to-purple-600 text-white max-w-[400px] md:max-w-none">
            <div className="service-name text-xl font-semibold font-ubuntu text-center uppercase">DevOps</div>
            <p className="opacity-70 text-sm font-medium">
              Using tools like Docker, Kubernetes, Azure and CI/CD pipelines to ensure efficient, enhances collaboration between development and operations teams abcxyz
            </p>
          </div>
        </div>
      </div>
      <span className="my-3 text-3xl font-bold font-ubuntu text-[#8A51FF]">Skills & Tools</span>
      <div className="skill flex px-10 justify-center gap-5 lg:gap-20 w-full mb-10">
        <div className="skill-menu shadow-xl flex flex-col w-1/3">
          <div className="skill-header flex flex-col gap-1 items-center w-full bg-[#8A51FF] text-white rounded-t-lg text-xl font-medium font-ubuntu py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <div className="skill-title">Front End</div>
          </div>
          <div className="skill-detail flex flex-col w-full text-center border leading-10 font-medium opacity-80">
            HTML <br /> CSS <br /> Javascript <br /> React <br /> TailwindCSS <br /> Responsive Design
          </div>
        </div>
        <div className="skill-menu shadow-xl flex flex-col w-1/3">
          <div className="skill-header flex flex-col gap-1 items-center w-full bg-[#8A51FF] text-white rounded-t-lg text-xl font-medium font-ubuntu py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            <div className="skill-title">Back End</div>
          </div>
          <div className="skill-detail flex flex-col w-full text-center border leading-10 font-medium opacity-80">
            ExpressJs <br /> Laravel <br /> Sql <br /> NoSql <br /> Web Security <br /> API Development
          </div>
        </div>
        <div className="skill-menu shadow-xl flex flex-col w-1/3">
          <div className="skill-header flex flex-col gap-1 items-center w-full bg-[#8A51FF] text-white rounded-t-lg text-xl font-medium font-ubuntu py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            <div className="skill-title">Other</div>
          </div>
          <div className="skill-detail flex flex-col w-full text-center border leading-10 font-medium opacity-80">
            Git <br /> Cloud Services <br /> Typescript <br/> Usability Testing <br /> Linux Basics <br /> DSA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill