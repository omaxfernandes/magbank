import React from "react";

import Hero from "../components/Hero";
import CreditCardComponet from "../components/CreditCard";
import CardListComponent from "../components/CardList";
import "../App.scss";
import publicPosts from "../data/posts";
import CenteredButton from "../components/CenteredButton";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

const Home = ({ handleClick }) => {
  return (
    <div>
      <Hero />

      <CreditCardComponet />
      <CardListComponent publicPosts={publicPosts} />
      <CenteredButton onClick={handleClick}>Abra sua conta</CenteredButton>

      <Institutional />
      <Faq />
    </div>
  );
};

export default Home;
