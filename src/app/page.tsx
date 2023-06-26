import { Main } from "@/components/Main";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Main />

      <Services />

      <Location />

      <Contact />

      <About />

      <Footer />
    </main>
  )
}
