import { AiOutlineAliwangwang } from "react-icons/ai";
import { useState, useEffect } from "react";
function Navbar() {
  const [theme, setTheme] = useState(null);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="top-0 left-0 h-20 w-screen fixed flex row items-center z-50">
      <NavBarOption text={'home'} link={'home'}/>
      <NavBarOption text={'goals'} link={'goals'} />
      <NavBarOption text={'about me'} link={'about-me'} />
      <NavBarOption text={'what I do'} link={'mission'} />
      
      <div className='group'>
        <button className='bg-green-200 dark:bg-gray-500 p-2 rounded-3xl absolute right-10 top-4' onClick={handleThemeSwitch}>
          <AiOutlineAliwangwang size='32' />
        </button>

        <div className='transition-opacity arrow-up opacity-0 right-[59px] top-[70px] absolute group-hover:opacity-100 duration-500 dark:w-0 dark:h-0 dark:border-l-5 dark:border-r-5 dark:border-transparent dark:border-b-[#D9E3DA]'>
        </div>

        <div className='transition-opacity p-2 opacity-0 text-sm absolute w-20 h-14 rounded-md bg-[#475569] dark:bg-[#D9E3DA] right-[40px] top-[75px] group-hover:opacity-100 duration-500'>
          Click me! 🌙
        </div>
      </div>
    </div>
    
  );
}

const NavBarOption = ({text, link}) => (
    <a href={link} className='text-black mx-10 font-mainFont font-bold text-sm'>
        {text}
    </a>
);

export default Navbar;
  