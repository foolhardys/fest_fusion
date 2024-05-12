import SearchBar from "@/components/Home/SearchBar";
import Banner from "@/components/shared/Banner";
import ContactForm from "@/components/shared/ContactForm";
import image from '@/components/shared/assets/banner-home.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1280px] mx-auto items-center">
      <div className="w-full p-2 items-center justify-center">
        <SearchBar />
        <Banner image ={image}/>
        <div className="w-full flex justify-center items-center">
        <ContactForm/>
        </div>
      </div>
    </main>
  );
}
