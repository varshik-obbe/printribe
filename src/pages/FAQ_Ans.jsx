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
    getting_started: 1,
    video_tips: 2,
    terms_policies_returns: 3,
    warehousing_fulfillment: 4,
    order_shipping_packaging: 5,
    design_mockups: 6,
    printing: 7,
    taxes_billing: 8,
    integrations: 9,
    account: 10,
    sustainability_responsibility: 11,
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
      id: "order_shipping_packaging",
      value: "Order / Shipping / Packaging",
      listOfQs: [
        "How long does it take to prepare the order for shipping?",
        "Can I change the order I placed?",
        "Is there any deposit or advance to be paid?",
        "What if my customer requests a refund for an order or a product?",
        "Does Printribe’s name appear on the product or packaging?",
        "How can I place my store orders with Printribe?",
        "Who can use Printribe services?",
        "How many days does it take to fulfil the order?",
        "Can we change the shipping partner after the order is placed?",
        `Do all products in a single order always ship together?`,
        "Change of customer address",
        "Order Reference Number",
        "What does the order status - Manifested' mean?",
        "What to do when my order is not delivered?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
      listOfQs: ["How to get GST Input Credits?"],
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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
      id: "account",
      value: "Account",
      listOfQs: [
        "How to close my account with Printribe?",
        "Update or Change Printribe Dashboard Password.",
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
        "How do I manually sync products from Printribe to my store?",
        "What's a product template and how does it work?",
        "Which states are Printribe products tax exempt in?",
        `What are digitization and adjustment fees?`,
        "Can I download a list of all Printribe products?",
        "Care instructions",
        "How do I add products to my store?",
        "How are mugs made?",
        "What is the GSM weight of your paper and specs?",
        "What’s the new large embroidery pricing?",
        "Why was my product review not accepted?",
        "Why are my products discontinued?",
        "What are Product Alternatives?",
        "Does Printribe offer any gift cards?",
        "How can I get featured on Printribe’s website?",
        "Can I push new products with free shipping through Printribe?",
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

  const answersToQs = [
    [],
    [],
    [],
    [],
    [],
    [
      <h3>
        95% of orders are shipped within 2-3 days timeline. Few orders due to
        unavoidable reasons pertaining to printer, design, QC, issues may take
        upto 4-5 days.
      </h3>,
      <h3>
        When you send the order to printing, it is immediately sent to the
        manufacturing division. You can no longer cancel or amend your order at
        this point. If you truly need to change something about your order,
        please contact our customer service and ask for help. If your order has
        not yet been processed, you have the option to amend or cancel it as
        advised by our customer service agent.
      </h3>,
      <h3>
        There is no requirement for an advance payment, a security deposit, or a
        minimum payment. Only pay for your orders as you place them. You can
        signup and place an order, then make a payment and place the order while
        submitting it.
      </h3>,
      <h3>
        If your customer receives an order that is damaged, misprinted, or
        damaged, you can file a claim within 7 days after delivery, but you will
        be responsible for the loss. Please email us at &nbsp;
        <span className={styles1.faq_Ans_links}>
           support@theprintribe.com  
        </span> {" "}
          with photographs of the product that clearly indicate the fault and the
        original packaging. <br /> Your consumer will receive a new product that
        we will reprint and ship to them. If a customer wants to exchange or
        return a product because they got the wrong size or there are no
        problems, it will be handled at your expense by placing a new order. If
        a customer wishes to return an order or goods for whatever reason, it
        must be delivered to your address.
      </h3>,
      <h3>
        Printribe offers complete white labeled drop shipping services. The
        products does not have any branding{" "}
        <em>(unless you opt for Custom Branding Services)</em> neither does the
        packaging have Printribe’s name on.The shipping label will consist of
        your brand name and Printribe's address by default.
        <em>
          (Printribe’s address cannot be removed as the courier company does not
          have an option to add custom address)
        </em>
      </h3>,
      <h3>
        Shopify and Woocommerce users can integrate your store with our
        software. We will fetch the orders daily. Other platforms can make a
        daily order sheet in MS Excel and export it to your Printribe Dashboard.
        It is simple to use. <br /> You can refer to this{" "}
        <span className={styles1.faq_Ans_links}>link </span> for detailed
        information. Once the order is pushed to our system, Printribe will
        fulfil the order. <br /> <br /> Click{" "}
        <span className={styles1.faq_Ans_links}>Here</span> for Shopify
        Integration <br />
        Click <span className={styles1.faq_Ans_links}>Here</span> for Wix
        Integration
      </h3>,
      <h3>
        Printribe offers drop shipping services to anyone who wants to sell. You
        can use the services as an individual or as a registered company.
        <br /> GST is not mandatory but we recommend you to register your
        company so you can claim the taxes paid.
      </h3>,
      <h3>
        Orders are taken for processing in the first-in first-out method. <br />{" "}
        All DTG, Sublimation and accessories processing time is 2-3 working days
        and shipping would take another 3-4 working days. So the average
        fulfilment time is 5-7 working days. All AOP orders are processed within
        4-5 working days and shipping would take 3-4 working days. <br /> So the
        average fulfilment time is 7-9 working days
        <ol>
          <li>1.India post orders will take 5-7 days for delivery.</li>
          <li>2.International orders will take 4-6 working days.</li>
        </ol>
      </h3>,
      <h3>
        The courier partner cannot be changed for an order after it is live.
        However, if the order is not taken for printed, you can cancel and place
        the order again.
        <br /> We process orders based on First - In, First - Out. So when you
        cancel your order and place it again, it would be processed as per the
        new order time.
      </h3>,
      <h3>
        Yes, all products in an order is shipped together. It can be printed
        separately, but will be shipped together as a single package.
      </h3>,
      <h3>
        Shipping is confirmed by the courier company as per the zip code/
        pin-code entered while placing the order. Hence, it is possible for an
        order to be shipped from our facility with an incorrect address. <br />{" "}
        If the order is shipped from our facility, we can raise a request to the
        courier company for change of address but it is unto the courier company
        to honour the request. If, the courier company fails to change the
        address, the order will be returned to origin <em>(RTO)</em> after the
        delivery attempts. <br />
        If the order is not shipped from our warehouse and the status is
        printed, you can write to us at{" "}
        <span className={styles1.faq_Ans_links}>
          support@theprintribe.com
        </span>{" "}
        with the order ID and the correct address. If the status is LIVE or To
        be printed, you can update the address from your Dashboard, by clicking
        on the pencil icon under actions and against the order.
      </h3>,
      <h3>
        Order Reference Number is the unique number identifier that you generate
        when you place an order.
      </h3>,
      <h3>
        The term order manifested means that the order is packed and ready to be
        picked up from the warehouse.
        <br /> This does not mean that the order is shipped.
      </h3>,
      <h3>
        When an order that has been dispatched from our factory is not
        delivered, it may be due to following reasons. We have also given
        possible steps to be taken for the same. <br />
        <br />
        1. Shipment marked as Delivered:
        <ol>
          <li>
            {" "}
            <span>{`->`}</span> If the shipment is not delivered but marked as
            delivered, you need to send a mail to our support team with 48 hours
            of the status update (as Delivered). This is because our shipping
            partners needs this within 72 hours, else there will not be any
            action possible from their side.
          </li>
        </ol>
        2. Shipment marked as RTO Delivered:
        <ol>
          <li>
            {" "}
            <span>{`->`}</span> Some shipping companies mark RTO packets as
            delivered even before actual delivery. So we consider RTO packets as
            delivered only when we inspect and add the same to our inventory.
          </li>
        </ol>
        3. Shipment is Lost:
        <ol>
          <li>
            <span>{`->`}</span> If a shipment is pending delivery for more than
            10 days, we can escalate to our courier partners to check and mark
            the shipment as Lost. After it is marked as lost, we will refund you
            or reprint and dispatch a new shipment.
            <br />
            <br />
          </li>
        </ol>
      </h3>,
    ],
    [],
    [],
    [
      <h3>
        You can avail GST input credits from Printribe if you have GST
        registrations for your business. Your GST number needs to be updated in
        your Business Details Page Login to Dashboard <span>{`->`}</span>{" "}
        Settings <span>{`->`}</span> Business Details <br />
        Monthly Invoices will be sent to your registered Mail Id with Printribe.
        After receiving, Check whether your GST Number is updated in the
        invoice, if not contact{" "}
        <span className={styles1.faq_Ans_links}>
          support@theprintribe.com
        </span>{" "}
        immediately to update your GST number. You can claim input credit only
        when your GST number is mentioned in the invoice. If the GST number is
        not present in the invoice, you are requested to inform us within 3
        working days of receiving the invoice.
      </h3>,
    ],
    [],
    [
      <h3>
        We understand that you've not been able to make profits using our
        services and a lot more reasons, but we’re extremely sorry as we will
        not be able to refund the entire amount back to your bank account as it
        is already given to you as credits.
        <br /> However, if you still feel to shut down your account with us, you
        can write to us at{" "}
        <span className={styles1.faq_Ans_links}>
          support@theprintribe.com
        </span>{" "}
        with your registered email ID. We will refund your credit amount to your
        bank account after deducting the payment gateway charges. <br />
        We would also be delighted to read your experience using Printribe and
        what made you close your account with us to improve our services.
      </h3>,
      <h3>
        In any case, at any time, if you wish to change or update your password
        for your Printribe Dashboard, follow the below steps.{" "}
        <ol>
          <li>Step 1: Login to your Printribe dashboard.</li>
          <li>Step 2: Go to settings.</li>{" "}
          <li>
            Step 3 : Enter the Current Password and then Enter your New Password
            for your account.
          </li>{" "}
          <li>Step 4 : Click on Reset Password to save the changes.</li>
        </ol>
      </h3>,
    ],
    [],
  ];

  var toShowQsLeft = [];
  var relatedQs = [];

  for (
    let i = 0;
    i < 10 && i < content[indexOfContent[params.id]].listOfQs.length;
    i++
  ) {
    toShowQsLeft.push(content[indexOfContent[params.id]].listOfQs[i]);
  }

  for (
    let i = 10;
    i < 15 && i < content[indexOfContent[params.id]].listOfQs.length;
    i++
  ) {
    relatedQs.push(content[indexOfContent[params.id]].listOfQs[i]);
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className={`${styles.faq_Q_container} container`}>
        <div className={styles.faq_Q_breadcrumb}>
          <li onClick={() => navigate("/FAQ")}>Printribe Help Center</li>
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
              {toShowQsLeft.length > 0 &&
                toShowQsLeft.map((curr, ind) => (
                  <li
                    className={
                      content[indexOfContent[params.id]].listOfQs[
                        params.text_id
                      ] === curr
                        ? styles1.active_Ans
                        : null
                    }
                    onClick={() => navigate(`/FAQ/${params.id}/${ind}/answer`)}
                  >
                    {curr}
                  </li>
                ))}
            </div>
            <h2
              className={styles1.faq_Ans_links}
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
              {answersToQs[indexOfContent[params.id]][params.text_id]}
              <div
                className={styles1.faq_Ans_content_right_box}
                style={
                  relatedQs.length > 0
                    ? { marginBottom: "0px" }
                    : { marginBottom: "50px" }
                }
              >
                <h1>Was this article helpful?</h1>
                <div>
                  <button>Yes</button>
                  <button>No</button>
                </div>
                <h3>7 out of 14 found this helpful</h3>
              </div>
              <div
                className={styles1.faq_Ans_content_right_related}
                style={
                  relatedQs.length > 0
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <h1>Related articles</h1>
                {relatedQs.length > 0 &&
                  relatedQs.map((curr, ind) => (
                    <p
                      className={styles1.faq_Ans_links}
                      onClick={() =>
                        navigate(`/FAQ/${params.id}/${10 + ind}/answer`)
                      }
                    >
                      {curr}
                    </p>
                  ))}
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
