import SearchBar from "@/components/Home/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1280px] mx-auto items-center">
      <div className="md:w-[600px] w-full p-2">
        <SearchBar />
      </div>
    </main>
  );
}
