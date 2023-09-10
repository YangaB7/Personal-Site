function Sidebar() {
    return(
        <div className='flex-col flex items-center p-14'>
        <SideLetter letter='L'/>
        <SideLetter letter='O'/>
        <SideLetter letter='R'/>
        <SideLetter letter='E'/>
        <SideLetter letter='M'/>
      </div>
    );
}   

const SideLetter = ({letter}) => (
    <i className='text-black my-10 font-mainFont font-bold text-lg mr-3'>{letter}</i>
);
export default Sidebar;