export default function CardFilters({ levels, categories, skillsList, onFilterChange, onClear }) {
    return (
      <div className="flex flex-col gap-4 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
        <label className="text-lg text-white">Level:</label>
        <select
          id="filter-level"
          className="p-2 rounded bg-slate-800 text-white w-full border border-slate-700"
          onChange={(e) => onFilterChange('level', e.target.value)}
        >
          <option value="">All Levels</option>
          {Object.entries(levels).map(([key, label], index) => (
            <option key={index} value={key.toLowerCase()}>{label}</option>
          ))}
        </select>
  
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="text-sm text-white mb-1 block">Category:</label>
            <select
              id="filter-category"
              className="p-2 rounded bg-slate-800 text-white w-full border border-slate-700"
              onChange={(e) => onFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {Object.entries(categories).map(([key, label], index) => (
                <option key={index} value={key.toLowerCase()}>{label}</option>
              ))}
            </select>
          </div>
  
          <div className="flex-1">
            <label className="text-sm text-white mb-1 block">Skills:</label>
            <select
              id="filter-skills"
              className="p-2 rounded bg-slate-800 text-white w-full border border-slate-700"
              onChange={(e) => onFilterChange('skills', e.target.value)}
            >
              <option value="">All Skills</option>
              {Object.entries(skillsList).map(([key, label], index) => (
                <option key={index} value={key.toLowerCase()}>{label}</option>
              ))}
            </select>
          </div>
        </div>
  
        <button
          className="w-full mt-4 py-2 px-4 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition"
          onClick={onClear}
        >
          Clear Filters
        </button>
      </div>
    );
  }
  