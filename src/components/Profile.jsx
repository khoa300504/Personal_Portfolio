function Profile() {
  return (
    <div className="profile flex flex-col basis-3/4 bg-[#f8f8f8]">
      <div className="intro flex flex-col-reverse md:flex-row basis-[65%] justify-between items-center mx-5">
        <div className="self-intro flex flex-col lg:basis-3/5 w-full items-center md:items-start">
          <div className="text-xl font-medium font-ubuntu my-1">
            Hello, I am
          </div>
          <div className="text-5xl font-lora font-bold mb-10 typing">
            Nguyen Tuan Khoa
          </div>
          <div className="text-base font opacity-60 w-4/5 text-justify mb-10">
          A Web Developer and UI/UX Designer with a passion for creating intuitive. With a strong background in web development and a keen eye for design, I bridge the gap between beautiful interfaces and seamless user experiences. <br />
          And with my experience with RESTful APIs gives me the ability to create seamless interactions between the user interface and the server.
          </div>
          <div className="social-icons flex gap-5 mb-5">
            <div className="fb-icon border border-black rounded p-1 cursor-pointer transition-all hover:bg-[#8A51FF]" onClick={() => {
              const link = document.createElement('a')
              link.href = 'https://www.facebook.com/khoa.nguyen.354',
              link.target = '_blank',
              link.click()
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
            </div>
            <div className="git-icon border border-black rounded p-1 cursor-pointer transition-all hover:bg-[#8A51FF]" onClick={() => {
              const link = document.createElement('a')
              link.href = 'https://github.com/khoa300504'
              link.target = '_blank',
              link.click()
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </div>
            <div className="link-icon border border-black rounded p-1 cursor-pointer transition-all hover:bg-[#8A51FF]" onClick={() => {
              const link = document.createElement('a')
              link.href = 'https://www.linkedin.com/in/khoa-nguy%E1%BB%85n-tu%E1%BA%A5n-0000932ab/'
              link.target = '_blank',
              link.click()
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </div>
          </div>
          <div className="flex gap-1 font-semibold cursor-pointer" onClick={() => {
            const link = document.createElement('a')
            link.href = './src/assets/CV_NguyenTuanKhoa_Intern.pdf'
            link.download = 'Khoa_Cv.pdf'
            link.click()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </div>
        </div>
        <div className="profile-picture md:basis-2/5 items-center justify-center flex">
          <img src="https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/astro.svg?alt=media&token=8299267c-8d5e-47d2-b83a-11d202114f9b" alt="" className="w-2/3 h-2/3"/>
        </div>
      </div>
      <div className="edu-ex flex basis-[35%] mx-5 gap-5 h-full mt-5">
        <div className="ex basis-3/5">
          <div className="title text-2xl font-ubuntu mb-7 font-semibold">My Experience</div>
          <div className="text-justify font-roboto mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="text-justify font-roboto mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="edu basis-2/5 border-l pl-5">
          <div className="title text-2xl font-ubuntu mb-7 font-semibold">Education</div>
          <div className="name mb-3 font-roboto">Vietnam - Korea University of Information and Communication Technology</div>
          <div className="major mb-3 font-roboto">Computer Science</div>
          <div className="year mb-3 font-roboto">2022-2026</div>
          <div className="status font-roboto">Undergraduate</div>
        </div>
      </div>
    </div>
  )
}

export default Profile