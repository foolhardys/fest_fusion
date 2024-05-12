import SearchBar from "@/components/shared/SearchBar";
import Banner from "@/components/shared/Banner";
import ContactForm from "@/components/shared/ContactForm";
import SmallCarousel from "@/components/shared/SmallCarousel";
import image from '@/components/shared/assets/banner-home.png'
import MediumCarousel from "@/components/shared/MediumCarousel";
import BlogCarousel from "@/components/shared/BlogCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1280px] mx-auto items-center">
      <div className="w-full p-2 items-center justify-center">
        <SearchBar />
        <Banner image={image} />
        <SmallCarousel />
        <MediumCarousel />
        <div className="home_banner">
          <BlogCarousel />
        </div>
        <div className="w-full flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
