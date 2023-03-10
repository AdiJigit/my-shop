import About from "@/components/About";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Layout from "@/components/Layout";
import Telegram from "@/components/Telegram";

export default function Home() {
  return (
    <Layout title="Главная СТраница - JIGIT+">
      <Hero />
      <Featured />
      <About />
      <Telegram />
      <Join />
    </Layout>
  );
}
