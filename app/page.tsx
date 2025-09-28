
//components
import Header from "./components/Header";
import MainSidebar from "./components/sidebars/mainSidebar/MainSidebar";

export default function Home() {
  return (
    <div className="text-[#000] border-0 outline-0 box-border">
      <Header/>
      <MainSidebar/>
    </div>
   
  );
}
