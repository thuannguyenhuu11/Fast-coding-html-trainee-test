import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import ShowCase from '@/components/showcase/ShowCase';
import Task from '@/components/task/Task';

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <Hero />

        <Task />

        <ShowCase />

        <Footer />
      </main>
    </div>
  );
}
