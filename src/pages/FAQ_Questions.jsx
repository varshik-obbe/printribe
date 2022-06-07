import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/faq_Q.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { BsChevronRight, BsChevronBarRight } from "react-icons/bs";

const FAQ_Questions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEnd, setPaginationEnd] = useState(30);

  const indexOfContent = {
    products: 0,
    getting_started:1,
    video_tips:2,
    terms_policies_returns:3,
    warehousing_fulfillment:4,
    shipping_packaging_fulfillment:5,
    design_mockups:6,
    printing:7,
    taxes_billing:8,
    integrations:9,
    subscribe_plans:10,
    sustainability_responsibility:11

  };

  const content = [
    {
      id: "products",
      value: "Products",
      listOfQs: [
        "How can I remove a product listing from a store?",
        "What should I know when selling branded products on ecommerce platforms?",
        "What is product stock sync and how does it affect my store?",
        "Safety recall of Liquid Glitter Phone Cases",
        "What designs can I use to customize adidas® products?",
        "What are Monthly Discounts?",
        "How do I manually sync products from Printful to my store?",
        "What's a product template and how does it work?",
        "Which states are Printful products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printful products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printful offer any gift cards?",
        "How can I get featured on Printful’s website?",
        "Can I push new products with free shipping through Printful?",
        "How should I clean my hats?",
        "Are there any discounts for bulk orders?",
        "What is Proposition 65, and how does it affect me?",
        "Can I order an embroidery sample?",
        "Can I use my own digitized file for embroidery?",
        "Are your products eco-friendly?",
        "How are the canvases made?",
        "How does the alternative products tool work?",
        `Why does my shirt have a vinegar smell? `,
        "What if I don't see the product I want listed on your site?",
        "What happens when a product is ordered, but the supplier's out of stock?",
      ],
    },
    {
        id: "getting_started",
        value: "Getting started",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "video_tips",
        value: "Video tips",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "terms_policies_returns",
        value: "Terms / Policies / Returns",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "warehousing_fulfillment",
        value: "Warehousing & Fulfillment",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "shipping_packaging_fulfillment",
        value: "Shipping / Packaging / Fulfillment",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "design_mockups",
        value: "Design Tips / Mockups",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "printing",
        value: "Printing",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "taxes_billing",
        value: "Taxes & Billing",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "integrations",
        value: "Integrations",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "subscribe_plans",
        value: "Printful subscription plans",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
      {
        id: "sustainability_responsibility",
        value: "Sustainability & responsibility",
        listOfQs: [
          "How can I remove a product listing from a store?",
          "What should I know when selling branded products on ecommerce platforms?",
          "What is product stock sync and how does it affect my store?",
          "Safety recall of Liquid Glitter Phone Cases",
          "What designs can I use to customize adidas® products?",
          "What are Monthly Discounts?",
          "How do I manually sync products from Printful to my store?",
          "What's a product template and how does it work?",
          "Which states are Printful products tax exempt in?",
          `What are digitization and adjustment fees?`,
          "Can I download a list of all Printful products?",
          "Care instructions",
          "How do I add products to my store?",
          "How are mugs made?",
          "What is the GSM weight of your paper and specs?",
          "What’s the new large embroidery pricing?",
          "Why was my product review not accepted?",
          "Why are my products discontinued?",
          "What are Product Alternatives?",
          "Does Printful offer any gift cards?",
          "How can I get featured on Printful’s website?",
          "Can I push new products with free shipping through Printful?",
          "How should I clean my hats?",
          "Are there any discounts for bulk orders?",
          "What is Proposition 65, and how does it affect me?",
          "Can I order an embroidery sample?",
          "Can I use my own digitized file for embroidery?",
          "Are your products eco-friendly?",
          "How are the canvases made?",
          "How does the alternative products tool work?",
          `Why does my shirt have a vinegar smell? `,
          "What if I don't see the product I want listed on your site?",
          "What happens when a product is ordered, but the supplier's out of stock?",
        ],
      },
  ];

  var toDisplayQs = [];

  //   console.log(content[indexOfContent[params.id]].listOfQs[0])

  for (let i = 0; i < 30; i++) {
    toDisplayQs.push(content[indexOfContent[params.id]].listOfQs[i]);
  }

  //30 Qs per page

  const handleNext = () => {
    let newNext = paginationStart + 30;
    setPaginationStart(paginationStart + 30);
    toDisplayQs = [];
    // console.log(newNext);
    // console.log(toDisplayQs);

    for (
      let i = newNext;
      i < newNext + 30 &&
      i < content[indexOfContent[params.id]].listOfQs.length;
      i++
    ) {
      toDisplayQs.push(content[indexOfContent[params.id]].listOfQs[i]);
    }

    console.log(toDisplayQs);
  };

  const handleLast = () => {};

  return (
    <>
      <Header />
      <Navbar />
      <div className={`${styles.faq_Q_container} container`}>
        <div className={styles.faq_Q_breadcrumb}>
          <li onClick={() => navigate("/FAQ")}>Printful Help Center</li>
          <li>/</li>
          <li>
            <strong style={{ color: "#000" }}>{content[indexOfContent[params.id]].value}</strong>
          </li>
        </div>
        <div className={styles.faq_Q_list}>
          <h1>{content[indexOfContent[params.id]].value}</h1>
          <div>
            {toDisplayQs.length > 0 &&
              toDisplayQs.map((curr, index) => <p className={styles.faq_Q_lists} onClick={() =>navigate(`/FAQ/${params.id}/${index}/answer`)}>{curr}</p>)}
          </div>
          <div className={styles.faq_Q_list_btn}>
            <button>
              Next{" "}
              <BsChevronRight
                style={{ fontSize: "16px" }}
                onClick={handleNext}
              />
            </button>
            <button>
              Last{" "}
              <BsChevronBarRight
                style={{ fontSize: "18px" }}
                onClick={handleLast}
              />
            </button>
            {/* <button> <BsChevronRight style={{fontSize:'16px',transform: 'rotate(180deg)'}}/> Previous</button>
              <button> <BsChevronBarRight style={{fontSize:'18px',transform: 'rotate(180deg)'}}/> First</button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ_Questions;
