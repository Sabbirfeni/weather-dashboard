import SearchImage from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { useLocationContext } from "../../context";
function Search() {
  const { setSearchLocation, searchTerm, setSearchTerm } = useLocationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchedLocation = getLocationByName(searchTerm);
    setSearchLocation({ ...fetchedLocation });
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchImage} />
        </button>
      </div>
    </form>
  );
}

export default Search;
