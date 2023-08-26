import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCardComponet from "./components/CreditCard";
import CardListComponent from "./components/CardList";
import "./App.scss";
import publicPosts from "./data/posts";
import CenteredButton from "./components/CenteredButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCardComponet />
      <CardListComponent publicPosts={publicPosts} />
      <CenteredButton>Abra sua conta</CenteredButton>
    </div>
  );
}

export default App;
