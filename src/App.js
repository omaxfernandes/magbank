import React, { useState } from "react";
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
import AccountModal from "./components/AccountModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Hero handleCreateAcc={() => setShowModal(true)} />

      <CreditCardComponet />
      <CardListComponent publicPosts={publicPosts} />
      <CenteredButton handleCreateAcc={() => setShowModal(true)}>
        Abra sua conta
      </CenteredButton>

      <Institutional handleCreateAcc={() => setShowModal(true)} />
      <Faq />

      <Footer />

      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
