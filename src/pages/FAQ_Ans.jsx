import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/faq_Q.module.css";
import styles1 from "../styles/faq_Ans.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

const FAQ_Ans = () => {
  const navigate = useNavigate();
  const params = useParams();

  //   console.log(params.id);
  //   console.log(params.text_id);

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

  return (
    <>
      <Header />
      <Navbar />
      <div className={`${styles.faq_Q_container} container`}>
        <div className={styles.faq_Q_breadcrumb}>
          <li onClick={() => navigate("/FAQ")}>Printful Help Center</li>
          <li>/</li>
          <li
            onClick={() => navigate(`/FAQ/${params.id}/questions`)}
            className={styles1.faq_Ans_breadcrumb}
          >
            {content[indexOfContent[params.id]].value}
          </li>
          <li>/</li>
          <li>
            <strong style={{ color: "#000" }}>
              {content[indexOfContent[params.id]].listOfQs[params.text_id]}
            </strong>
          </li>
        </div>
        <div className={styles1.faq_Ans_content}>
          <div className={styles1.faq_Ans_content_left}>
            <h1>Articles in this section</h1>
            <div>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "How can I remove a product listing from a store?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/0/answer`)}>
                How can I remove a product listing from a store?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "What’s the new large embroidery pricing?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/15/answer`)}>
                What’s the new large embroidery pricing?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "What should I know when selling branded products on ecommerce platforms?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/1/answer`)}>
                What should I know when selling branded products on ecommerce
                platforms?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "Why was my product review not accepted?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/16/answer`)}>
                Why was my product review not accepted?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "What is product stock sync and how does it affect my store?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/2/answer`)}>
                What is product stock sync and how does it affect my store?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "Why are my products discontinued?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/17/answer`)}>
                Why are my products discontinued?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "Safety recall of Liquid Glitter Phone Cases" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/3/answer`)}>
                Safety recall of Liquid Glitter Phone Cases
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "What are Product Alternatives?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/18/answer`)}>
                What are Product Alternatives?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "What designs can I use to customize adidas® products?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/4/answer`)}>
                What designs can I use to customize adidas® products?
              </li>
              <li className={content[indexOfContent[params.id]].listOfQs[params.text_id] === "Does Printful offer any gift cards?" ? styles1.active_Ans : null} onClick={() => navigate(`/FAQ/${params.id}/19/answer`)}>
                Does Printful offer any gift cards?
              </li>
            </div>
            <h2
              className={styles1.faq_Ans_breadcrumb}
              onClick={() => navigate(`/FAQ/${params.id}/questions`)}
            >
              See more
            </h2>
          </div>
          <div className={styles1.faq_Ans_content_right}>
            <h1>
              {content[indexOfContent[params.id]].listOfQs[params.text_id]}
            </h1>
            <div>
              <h3>Follow these steps to delete products from your store:</h3>
              <ol>
                <li>
                  1.In your Printful{" "}
                  <span className={styles1.faq_Ans_breadcrumb}>Dashboard</span>{" "}
                  , go to Stores and select the store where you have the product
                  you wish to remove.
                </li>
                <li>
                  2.Click on the three dots on the right side of the product.
                </li>
                <li>
                  3.In the dropdown, select <em>Delete</em> .
                </li>
              </ol>
              <h4>
                All done! If you want to add a new product to your store, follow{" "}
                <span className={styles1.faq_Ans_breadcrumb}>this guide</span>{" "}
                or go directly to the{" "}
                <span className={styles1.faq_Ans_breadcrumb}>
                  Product Catalog
                </span>{" "}
                and start designing your new products.
              </h4>
              <div className={styles1.faq_Ans_content_right_box}>
                <h1>Was this article helpful?</h1>
                <div>
                  <button>Yes</button>
                  <button>No</button>
                </div>
                <h3>7 out of 14 found this helpful</h3>
              </div>
              <div className={styles1.faq_Ans_content_right_related}>
                <h1>Related articles</h1>
                <p
                  className={styles1.faq_Ans_breadcrumb}
                  onClick={() => navigate(`/FAQ/${params.id}/12/answer`)}
                >
                  How do I add products to my store?
                </p>
                <p
                  className={styles1.faq_Ans_breadcrumb}
                  onClick={() => navigate(`/FAQ/${params.id}/0/answer`)}
                >
                  Why am I charged VAT for orders shipped to Switzerland and
                  Liechtenstein?
                </p>
                <p
                  className={styles1.faq_Ans_breadcrumb}
                  onClick={() => navigate(`/FAQ/${params.id}/15/answer`)}
                >
                  What’s the new large embroidery pricing?
                </p>
                <p
                  className={styles1.faq_Ans_breadcrumb}
                  onClick={() => navigate(`/FAQ/${params.id}/3/answer`)}
                >
                  How do sample orders work?
                </p>
                <p
                  className={styles1.faq_Ans_breadcrumb}
                  onClick={() => navigate(`/FAQ/${params.id}/17/answer`)}
                >
                  Why are my products discontinued?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ_Ans;
