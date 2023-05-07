//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51Mp0dVKhTxSndeLbz3oaNIt8KhCBE27dceZGAHbIcGEQaINLsIfAQPcUGlv0ZTNQKcKHwRDJZcXMq7q1mC0XUd5l00QylOHgTL"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1N3AgwKhTxSndeLbHj9dHTme", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  return (
    <Layout handleClick={() => {
      router.push("/post");
    }}
    authText="Sign Up"
    username="none"
    >
      <View marginBottom="135px">
       <Hero handleClick={handleClick} />
      </View>
      <View>
        <Testimonies />
      </View>
      <Flex justifyContent={""}>
        <Persuade banner="https://cdn.discordapp.com/attachments/989268410171006976/1103513114646949888/DevJules_A_meditation_area_yoga_self-discovery_Style_Room_Type__a8bedf42-f6e1-435a-9bb6-89f5fa7dcb90.png" 
                  handleClick={handleClick}
        />
      </Flex>
      <View marginTop="" marginBottom="">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;