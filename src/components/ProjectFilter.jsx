import React, { useState } from "react";
import { levels } from "../data/levelsList";
import { categories } from "../data/categoriesList";

export default function ProjectFilter({ allProjects, setProjects }) {
    const [filters, setFilters] = useState({
        level: "All Levels",
        category: "All Categories",
    });

    const handleFilter = (key, value) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);

        const filtered = allProjects.filter(item => {
            const levelMatch =
                updatedFilters.level === "All Levels" ||
                item.level === updatedFilters.level;

            const categoryMatch =
                updatedFilters.category === "All Categories" ||
                (item.categories?.includes?.(updatedFilters.category) ||
                 item.tags?.includes?.(updatedFilters.category));

            return levelMatch && categoryMatch;
        });

        setProjects(filtered);
    };

    const clearFilters = () => {
        const resetFilters = {
            level: "All Levels",
            category: "All Categories",
        };
        setFilters(resetFilters);
        setProjects(allProjects);
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row gap-4 max-w-screen-md md:min-w-[700px] self-center">
                <div className="flex-1 min-w-0">
                    <label className="block text-lg text-white">Level:</label>
                    <select
                        value={filters.level}
                        onChange={(e) => handleFilter("level", e.target.value)}
                        id="filter-level"
                        className="w-full p-2 rounded bg-secondary"
                    >
                        <option value="All Levels">All Levels</option>
                        {Object.entries(levels).map(([key, value], index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </div>

                <div className="flex-1 min-w-0">
                    <label className="block text-lg text-white">Category:</label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilter("category", e.target.value)}
                        id="filter-category"
                        className="w-full p-2 rounded bg-secondary"
                    >
                        <option value="All Categories">All Categories</option>
                        {Object.entries(categories).map(([key, value], index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={clearFilters}
                className="text-fourth px-6 bg-secondary min-w-[10rem] py-2 rounded-md hover:bg-accent-dark transition duration-300 self-center"
            >
                Clear Filters
            </button>
        </div>
    );
}
