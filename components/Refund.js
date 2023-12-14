import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import logo from "../public/home/logo.svg";
import close from "../public/close.svg";
import Footer from "./Footer";

export default function RefundContent() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-scroll   pb-6 lg:pb-0 scrollbar-hide"
    >
      <Link
        rel="noopener noreferrer"
        className="absolute  top-5 right-5 lg:top-10 z-50"
        href="/"
      >
        <Image alt={""} src={close} />
      </Link>

      <motion.div
        style={{
          width: 141,
          height: 28,
          x: 20,
          y: 10,
          marginLeft: 0,
          marginRight: 0,
        }}
        className="mt-5"
      >
        <Image alt={""} src={logo} />
      </motion.div>

      <Shipping />

      <Refund />

      <Footer />
    </div>
  );
}

const Shipping = () => (
  <div className="lg:px-16 relative flex flex-col w-full mt-11 px-4 ">
    <motion.div className="flex flex-col   ">
      <h1
        className="mt-4 text-3xl lg:text-3xl 2xl:text-4xl  mb-4  w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Shipping Policy for products purchased through FarmOR Partner App`}
      </h1>
    </motion.div>

    <motion.div className="flex flex-col">
      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Shipping Methods`}</p>

        <p className="mb-2">{`Standard Shipping: Takes 2-5 business days`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Order Processing Time`}</p>
        <p className="mb-2">{`Orders are processed and dispatched within 12-48 hours after payment confirmation. Please note that order processing time may vary during peak seasons.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Shipping Regions`}</p>
        <p className="mb-2">{`We currently provide shipping services to retail shops located in Telangana and Andhra Pradesh states through cargo and third party logistic service companies`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Shipping Costs`}</p>
        <p className="mb-2">{`Shipping costs are calculated based on the weight of the products and the selected shipping method. The exact shipping cost will be conveyed during the checkout process.`}</p>
      </div>
      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Order Tracking`}</p>
        <p className="mb-2">{`You will receive the LR number and tracking of the order once payment is confirmed and dispatch is done, via WhatsApp.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Delivery Issues`}</p>
        <p className="mb-2">{`In case of any issues with the delivery or if the product is damaged during transit, please contact our customer support team at +91-6301750175 within 1 day.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Undeliverable Packages`}</p>
        <p className="mb-2">{`If a package is undeliverable due to incorrect address information provided by the customer or if the package is refused, the customer will be responsible for any additional shipping charges.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Contact Information`}</p>
        <p className="mb-2">{`For any shipping-related inquiries, please contact our customer support team at +91-6301750175`}</p>
      </div>
    </motion.div>

    <motion.div className="flex flex-col   ">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Note`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">
          {`This shipping policy is subject to change. Please review this page periodically for any updates.`}
        </p>
      </div>
    </motion.div>
  </div>
);

const Refund = () => (
  <div className="lg:px-16 relative flex flex-col w-full mt-11 px-4 ">
    <motion.div className="flex flex-col   ">
      <h1
        className="mt-4 text-3xl lg:text-3xl 2xl:text-4xl  mb-4  w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Return & Refund Policy`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">
          {`Thank you for choosing FarmOR for your B2B e-commerce needs. We strive to provide you with high-quality products and exceptional customer service. This Return & Refund Policy outlines our guidelines and procedures regarding returns and refunds for the products purchased through our app and website.`}
        </p>
      </div>
    </motion.div>

    <motion.div className="flex flex-col">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Returns`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Eligibility for Returns`}</p>
        <p className="mb-2">{`We accept returns on products in the following situations:`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">
            {`The product received is damaged, defective, or not as described.`}
          </li>
          <li className="mt-2">
            {`The product received is different from what you ordered.`}
          </li>
        </ul>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Initiation of Return`}</p>
        <p className="mb-2">{`To initiate a return, please follow these steps:`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">
            {`Contact our customer support within 2 days from the date of delivery.`}
          </li>
          <li className="mt-2">
            {`Provide your order details and a clear description of the issue.`}
          </li>
          <li className="mt-2">
            {`Our customer support team will guide you through the return process.`}
          </li>
        </ul>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Return Conditions`}</p>
        <p className="mb-2">{`For a return to be accepted, the following conditions must be met:`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">
            {`The product must be unused, in its original packaging, and in the same condition as when received.`}
          </li>
          <li className="mt-2">
            {`All tags, labels, and accessories associated with the product must be intact.`}
          </li>
          <li className="mt-2">
            {`The return request must be initiated within the specified timeframe.`}
          </li>
        </ul>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Return Shipping`}</p>
        <p className="mb-2">{`For eligible returns, we will provide you with a prepaid shipping label or arrange a pickup service. The cost of return shipping will be borne by us.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Inspection and Approval`}</p>
        <p className="mb-2">{`Once we receive the returned product, our team will inspect it to ensure that it meets the return conditions mentioned above. If the return is approved, we will proceed with the refund.`}</p>
      </div>
    </motion.div>

    <motion.div className="flex flex-col">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Refunds`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Refund Methods`}</p>
        <p className="mb-2">{`Refunds will be processed using the original payment method used during the purchase. If that is not possible, we will work with you to find an alternative refund method.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">{`Refund Timeframe`}</p>
        <p className="mb-2">{`We aim to process refunds within seven days after the approved return is received. Please note that the actual refund time may vary depending on your payment provider.`}</p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Non-Refundable Items`}</p>
        <p className="mb-2">{`Certain items are not eligible for refunds, including:`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">{`Perishable or consumable products.`}</li>
          <li className="mt-2">
            {`Products with hygiene concerns (e.g., personal care items).`}
          </li>
          <li className="mt-2">{`Customized or personalized products `}</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className="flex flex-col">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Exceptions and Disputes`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Product Warranties`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">
            {`Some products may be covered by a manufacturer's warranty. In such cases, we encourage you to reach out to the manufacturer directly to resolve any issues related to defects or warranty claims.`}
          </li>
        </ul>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">
          {`FarmOR reserves the right to modify or update this Return & Refund Policy at any time. Any changes made will be effective immediately upon posting on our app and website. We encourage you to review this policy periodically.
If you have any questions or require further assistance regarding our Return & Refund Policy, please contact our customer support team.`}
        </p>
      </div>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p
          style={{
            color: "#0d1375",
          }}
          className="mb-2"
        >{`Dispute Resolution`}</p>
        <ul className="list-disc pl-4 mb-2">
          <li className="mt-2">
            {`If you encounter any issues or disputes regarding returns or refunds, please contact our customer support team. We will work diligently to resolve the matter to your satisfaction.`}
          </li>
        </ul>
      </div>
    </motion.div>

    <motion.div className="flex flex-col   ">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Modification of Policy`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">
          {`FarmOR reserves the right to modify or update this Return & Refund Policy at any time. Any changes made will be effective immediately upon posting on our app and website. We encourage you to review this policy periodically.
If you have any questions or require further assistance regarding our Return & Refund Policy, please contact our customer support team.`}
        </p>
      </div>
    </motion.div>

    <motion.div className="flex flex-col   ">
      <h1
        className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
        style={{
          color: "#575DC2",
          fontFamily: "Anton",
          letterSpacing: 1.4,
        }}
      >
        {`Note`}
      </h1>

      <div
        className="text-lg  2xl:text-lg mb-2 opacity-80"
        style={{
          fontFamily: "Montserrat",
          color: "#101010",
        }}
      >
        <p className="mb-2">
          {`This Return & Refund Policy template is provided for informational purposes only and should not be considered legal advice. It is recommended to consult with a legal professional to ensure compliance with applicable laws and regulations.`}
        </p>
      </div>
    </motion.div>
  </div>
);
