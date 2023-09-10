import Navbar from "./Navbar";
import person from "./person.jpg";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="bg-[#d9e3da] dark:bg-[#475569] transition-bg duration-300 h-screen w-screen">
          <Navbar />

          <div className='circle dark:bg-[#d9e3da] transition-bg duration-300 top-64 right-60 h-56 w-56 m-32'>
          </div>

          <div className='image-hover group'>
            <div className='absolute h-64 w-64 top-72 right-56 shadow-lg border-2 bg-[#D9E3DA] border-gray-500 p-2 rounded-md'>
              <p className="tracking-widest">Hi! I'm Yanga, a junior in high school with boundless aspirations. I'm fueled by a deep passion for engineering and embrace my mixed-race heritage, which inspires me to bridge diverse perspectives in the pursuit of innovation.</p>
            </div>
          
            <div className="absolute top-52 right-96 mr-40"> 
            <img className="h-60 w-60 scale-0 group-hover:scale-100 transition-all duration-100 origin-right shadow-lg rounded-md" src={person} alt='yanga booker'/>
            </div>
          </div>

          <div className='circle transition-bg duration-300 dark:bg-[#d9e3da] top-32 left-28 h-24 w-24'>
          </div>
          <div className='circle transition-bg duration-300 dark:bg-[#d9e3da] top-24 right-40 h-32 w-32'>
          </div>
          <div className='circle transition-bg duration-300 dark:bg-[#d9e3da] top-72 left-60 h-32 w-32'>
          </div>
          <div className=" bg-[#d9e3da] h-74 w-40 absolute top-40 left-40 border-2 border-gray-500 shaodw-lg rounded-xl p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </div>

          <div className='circle transition-bg duration-300 dark:bg-[#d9e3da] bottom-20 left-64 h-14 w-14 shadow-lg'>
          </div>

          <div className='circle transition-bg duration-300 dark:bg-[#d9e3da] top-64 right-96 h-12 w-12 shadow-lg'>
          </div>

          <Sidebar/>
  
    </div>
  );
}

export default App;
