import React from "react";
import styles from "../styles/faq.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { AiOutlineSearch } from "react-icons/ai";

const FAQ = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className={styles.faq_container}>
        <div className={styles.faq_container_hero}>
          <h1 className={styles.faq_hero_head}>Printful Help Center</h1>
          <h5 className={styles.faq_hero_subhead}>
            Find answers to all of your questions
          </h5>
          <div>
            <input type="text" placeholder="How can we help?" />
            <button>
              <AiOutlineSearch className={styles.search_icon_faq} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.faq_first_cards_row} row`}>
        <div
          className={`
            ${styles.first_row_card} 
            col-xl-4 col-lg-4 col-md-4 col-md-12 col-12`}
        >
          <img
            class={styles.first_card_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/d7d6e4b4fa7f4d776ef452f5a3b8d3db1a07ff54.svg"
            alt="Products"
          />
          <h4 className={styles.first_row_card_title}>Products</h4>
          <button className={styles.first_row_card_btn}>
            See all 33 articles
          </button>
        </div>
        <div
          className={`
            ${styles.first_row_card} 
            col-xl-4 col-lg-4 col-md-4 col-md-12 col-12`}
        >
          <img
            class={styles.first_card_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/cff6f040011eb60f9afd278bb9ad490061963f71.svg"
            alt="Getting started"
          />
          <h4 className={styles.first_row_card_title}>Getting Started</h4>
          <button className={styles.first_row_card_btn}>
            See all articles
          </button>
        </div>
        <div
          className={`
            ${styles.first_row_card} 
            col-xl-4 col-lg-4 col-md-4 col-md-12 col-12`}
        >
          <img
            class={styles.first_card_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/a4fb7849c06b0fc35799e58ae51d9418344fd53d.svg"
            alt="Video tips"
          />
          <h4 className={styles.first_row_card_title}>Video tips</h4>
          <button className={styles.first_row_card_btn}>
            See all 15 articles
          </button>
        </div>
      </div>

      <div className={styles.faq_second_cards_row}>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/b1c40314ebc74e6fd692b4f70b10d4c5bb921d52.svg"
            alt="Terms / Policies / Returns"
          />
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Terms / Policies / Returns
            </h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about terms and policies
              related to Printful products and services{" "}
            </p>
            <div className={styles.faq_second_row_card_section}>4 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/5971f75e35e9f08edc3b2a2b0dde24a3eb5c3b75.svg"
            alt="Warehousing &amp; Fulfillment"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Warehousing & Fulfillment
            </h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about our Warehousing &
              Fulfillment services{" "}
            </p>
            <div className={styles.faq_second_row_card_section}>6 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/e340e3f8bd5f49bb4f6b70127fc16c17f72f71d0.svg"
            alt="Shipping / Packaging / Fulfillment"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Shipping / Packaging / Fulfillment
            </h1>
            <p className={styles.faq_second_row_card_para}>
              {" "}
              Find answers to all your questions about Printful shipping,
              packaging, and fulfillment
            </p>
            <div className={styles.faq_second_row_card_section}>3 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/cd8321014bea6071163d80e07c91ce17e2170f5c.svg"
            alt="Design Tips / Mockups"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Design Tips / Mockups
            </h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about creating designs and
              mockups with the Design Maker
            </p>
            <div className={styles.faq_second_row_card_section}>2 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/1f578082007a4f86a3d6365f018eb0830317b4b0.svg"
            alt="Printing"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>Printing</h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about the printing techniques
              and materials used at Printful{" "}
            </p>
            <div className={styles.faq_second_row_card_section}>2 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/95243f44ac6abd7fe07b2be50938d8695cae0cf7.svg"
            alt="Taxes &amp; Billing"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>Taxes & Billing</h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about taxes and fees related to
              Printful products and services{" "}
            </p>
            <div className={styles.faq_second_row_card_section}>5 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/062949ac53bb6fa8072b4793092d510f0705f369.svg"
            alt="Integrations"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>Integrations</h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about Printful plugins and
              integrations with popular ecommerce platforms
            </p>
            <div className={styles.faq_second_row_card_section}>
              21 sections
            </div>
            <div className={styles.faq_second_row_card_integration_links}>
              <span>General questions</span>

              <span>Shopify</span>

              <span>Etsy</span>

              <span>WooCommerce</span>

              <span>Square</span>

              <span>Wix</span>

              <span>Squarespace</span>

              <span>Webflow</span>

              <span>Ecwid</span>

              <span>BigCommerce</span>

              <span>PrestaShop</span>

              <span>Weebly</span>

              <span>Amazon</span>

              <span>eBay</span>

              <span>Big Cartel</span>

              <span>Magento</span>

              <span>Storenvy</span>

              <span>Shift4Shop</span>

              <span>Launch Cart</span>

              <span>Nuvemshop</span>

              <span>Bandzoogle</span>
            </div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/c22b702052d1b330d4e7f679c3ff26697789b44f.svg"
            alt="Printful subscription plans"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Printful subscription plans
            </h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all of your questions about Printful subscription
              plans and its exclusive tools{" "}
            </p>
            <div className={styles.faq_second_row_card_section}>3 sections</div>
          </div>
        </div>
        <div className={styles.faq_second_row_card}>
          <img
            className={styles.faq_second_row_img}
            src="//theme.zdassets.com/theme_assets/2383316/7d1a53050dc0fbf9bc53f13b25a176789e5314ba.svg"
            alt="Sustainability &amp; responsibility"
          />{" "}
          <div>
            <h1 className={styles.faq_second_row_card_head}>
              Sustainability &amp; responsibility
            </h1>
            <p className={styles.faq_second_row_card_para}>
              Find answers to all your questions about sustainability and
              responsibility related practices at Printful
            </p>
            <div className={styles.faq_second_row_card_section}>3 sections</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
