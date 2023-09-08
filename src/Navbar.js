function Navbar() {
    return (
      <div className="bg-gray-500 h-20 w-screen fixed flex row items-center">
        <NavBarIcon text={'home'} link={'home'}/>
        <NavBarIcon text={'goals'} link={'goals'} />
        <NavBarIcon text={'about me'} link={'about-me'} />
        <NavBarIcon text={'what I do'} link={'mission'} />
      </div>
      
    );
}

const NavBarIcon = ({text, link}) => (
    <a href={link} className='text-black mx-6 font-mainFont font-bold text-sm'>
        {text}
    </a>
);

export default Navbar;
  