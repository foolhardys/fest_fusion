import React from "react";
import FilterDrawer from "@/components/explore/FilterDrawer";
import SearchBar from "@/components/shared/SearchBar";
import SingleEventCard from "@/components/explore/SingleEventCard";
import image from "@/components/shared/assets/event-sample.png";

const ExplorePage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-secondary">
      <div className="flex items-center justify-center gap-5 mt-4">
        <div>
          <FilterDrawer />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap max-w-7xl gap-4 mx-auto mt-5 justify-center py-8">
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
        <SingleEventCard image={image} />
      </div>
    </section>
  );
};

export default ExplorePage;
