function Project() {
  return (
    <div className="project flex flex-col basis-3/4 w-full items-center bg-[#f8f8f8]">
      <p className="pt-5 basis-1/12 uppercase font-ubuntu font-medium tracking-wider text-center">Here are a few of my standout projects</p>
      <div className="project-list basis-11/12 w-10/12 flex flex-col gap-5 justify-center items-center pb-3">
        <div className="project-item basis-1/3 w-5/6 bg-[#6d6b6b] self-start flex rounded-xl hover:scale-105 transition-all duration-500 hover:opacity-90">
          <div className="demo-img bg-[url('https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/idea1.png?alt=media&token=1506971c-a0b6-44c1-bf0a-c314bb13dc18')] basis-1/3 h-[90%] transition-all bg-cover self-end ml-5 rounded-t-xl">
          </div>
          <div className="detail-info text-[#fff] basis-2/3 flex flex-col justify-center items-start px-5 gap-1">
            <p className="uppercase text-lg font-semibold font-ubuntu">Instagram</p>
            <p>Project Tech: ReactJS, ExpressJs, Socket.io, MongoDb</p>
            <p className="text-justify">This website is a clone of Instagram, built for educational purposes only. Features include user,
            profile, posts, reactions and realtime messaging.</p>
            <a href="https://github.com/khoa300504/Instagram" target="_blank" className="flex">Github
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
        <div className="project-item basis-1/3 w-5/6 bg-[#6d6b6b] self-end flex rounded-xl flex-row-reverse hover:scale-105 transition-all duration-500 hover:opacity-90">
          <div className="demo-img bg-[url('https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/idea2.png?alt=media&token=0e00a9e0-b319-41bf-892b-c7e76d9e25af')] basis-1/3 h-[90%] transition-all bg-cover self-end mr-5 rounded-t-xl">
          </div>
          <div className="detail-info text-[#fff] basis-2/3 flex flex-col justify-center items-start px-5 gap-1">
            <p className="uppercase text-lg font-semibold font-ubuntu">Project Title</p>
            <p>Project Tech: ReactJS, ExpressJs, dndkit, MongoDb</p>
            <p className="text-justify">A Website to manage your daily activitys, Features include add, update, delete drag and drop
            card or column with save your notes.</p>
            <a href="https://github.com/khoa300504/Trello" target="_blank" className="flex">Github
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
        <div className="project-item basis-1/3 w-5/6 bg-[#6d6b6b] self-start flex rounded-xl hover:scale-105 transition-all duration-500 hover:opacity-90">
          <div className="demo-img bg-[url('https://firebasestorage.googleapis.com/v0/b/bookingticketapp-4194d.appspot.com/o/idea3.png?alt=media&token=a0f49561-f3c2-49eb-9c57-44564dab746c')] basis-1/3 h-[90%] transition-all bg-cover self-end ml-5 rounded-t-xl">
          </div>
          <div className="detail-info text-[#fff] basis-2/3 flex flex-col justify-center items-start px-5 gap-1">
            <p className="uppercase text-lg font-semibold font-ubuntu">Project Title</p>
            <p>Project Tech: ReactJS (TailwindCss)</p>
            <p className="text-justify">Explore a wide range of stylish and high-quality timepieces, perfect for any occasion, find the
            watch that suits your style.</p>
            <a href="https://github.com/khoa300504/watchStore-web" target="_blank" className="flex">Github
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project