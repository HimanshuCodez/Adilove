import { useState } from "react";
import { Clock, Flame } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [history, setHistory] = useState([
    "Silk Nightwear Set",
    "Lace Push-Up Bra",
    "Comfort Cotton Bra",
  ]);

  // Fake product list
  const products = [
    "Lace Push-Up Bra",
    "Silk Nightwear Set",
    "Satin Lingerie Set",
    "Luxury Bridal Lingerie",
    "Comfort Cotton Bra",
    "Seamless Underwear",
    "Lace Bralette",
    "Mesh Bodysuit",
    "Transparent Babydoll",
    "Designer Lingerie Set",
  ];

  // Dummy trending searches
  const trending = [
    "Luxury Lingerie",
    "Seamless Underwear",
    "Nightwear for Women",
    "Bralette Tops",
  ];

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    // Add to history (avoid duplicates)
    setHistory((prev) => [
      item,
      ...prev.filter((x) => x !== item).slice(0, 4),
    ]);
    setQuery(item);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="flex items-center border pl-4 gap-2 border-black h-[40px] rounded-full overflow-hidden w-full bg-gray-50 hover:bg-white transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 30 30"
          fill="#000000"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full h-full outline-none text-black bg-transparent placeholder-black text-sm"
        />
      </div>

      {/* Dropdown */}
      {showResults && (
        <div className="absolute top-[45px] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-10">
          {/* When user has typed something */}
          {query ? (
            <>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="px-4 py-2 hover:bg-yellow-50 cursor-pointer text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  No results found
                </div>
              )}
            </>
          ) : (
            <>
              {/* Recent Searches */}
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm mb-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  Recent Searches
                </div>
                {history.length > 0 ? (
                  history.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(item)}
                      className="px-2 py-1 hover:bg-yellow-50 rounded-md cursor-pointer text-sm text-gray-700"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm px-2">No history yet</p>
                )}
              </div>

              {/* Trending Searches */}
              <div className="p-3">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm mb-2">
                  <Flame className="w-4 h-4 text-yellow-500" />
                  Trending Searches
                </div>
                {trending.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(item)}
                    className="px-2 py-1 hover:bg-yellow-50 rounded-md cursor-pointer text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
