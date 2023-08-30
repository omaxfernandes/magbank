import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCardComponet from "./components/CreditCard";
import CardListComponent from "./components/CardList";
import "./App.scss";
import publicPosts from "./data/posts";
import CenteredButton from "./components/CenteredButton";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <CreditCardComponet />
      <CardListComponent publicPosts={publicPosts} />
      <CenteredButton>Abra sua conta</CenteredButton>

      <Institutional />
      <Faq />

      <Footer />
    </div>
  );
}

export default App;
