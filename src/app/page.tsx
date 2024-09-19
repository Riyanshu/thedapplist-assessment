import Header from "@/app/components/Header";
import ExplorePage from "./Pages/Explore";
import 'swiper/css';
import 'swiper/css/navigation';
import './globals.css';
import { ReduxProvider } from "./store/ReduxProvider";

export default function Home() {
  return (
    <ReduxProvider>
      <Header />
      <ExplorePage />
    </ReduxProvider>
  );
}
