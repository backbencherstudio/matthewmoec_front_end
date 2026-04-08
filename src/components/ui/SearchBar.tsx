import { Search } from 'lucide-react'; // Import the Lucide Search icon

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-full  w-full max-w-sm">
      <div className='size-4 flex-1 shrink-0 mx-3'><Search size={16} className="text-gray-500 " /></div>
      <input
        type="text"
        className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 h-10 w-full"
        placeholder="Search Stores..."
      />
    </div>
  );
};

export default SearchBar;