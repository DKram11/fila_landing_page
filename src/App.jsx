import React from 'react';
import { Navbar } from './components'
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from './sections';


const App = () => (
  <main className="relative">
    <Navbar />
    <section className='xl:padding-l  wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-slight-fila-blue">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;