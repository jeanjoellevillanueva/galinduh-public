import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import Social from '../components/Social';


export default function Home() {
  return (
    <main>
      <Navigation/>
      <div className="flex flex-col items-center justify-between px-24">
        <Hero/>
      </div>
      <Highlight/>
      <div className="flex flex-col items-center justify-between p-24 bg-pink-100">
        <Social/>
      </div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-pink-500">
          <div className="py-8 px-10 flex justify-center space-x-12">
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-24">
        <Product/>
      </div>
      <Footer/>
    </main>
  )
}
