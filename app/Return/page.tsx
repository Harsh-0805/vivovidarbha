import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ReturnsAndRefundPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Banner Section */}
        <div className="bg-blue-600 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-vivoBold tracking-wide">
            VIVO NAGPUR
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold mt-4">
            Returns and Refund Policy
          </h2>
        </div>

        {/* Policy Content */}
        <div className="max-w-5xl mx-auto bg-white p-8 my-8 rounded-lg shadow-lg space-y-8 text-left">
          {/* Return Eligibility */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Return Eligibility</h2>
            <p>
              We accept returns only if wrong or damaged products/items are
              delivered to you, provided the return request is placed within 02
              days from the date of delivery of products. To be eligible for a
              return, the item must be unused, in its original packaging, and in
              the same condition as when it was delivered.
            </p>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Return Process</h2>
            <p>
              To initiate a return, please contact our customer support with
              your order details and reason for the return. We will provide you
              with a return authorization and instructions on how to proceed via
              email.
            </p>
          </section>

          {/* Return Shipping */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Return Shipping</h2>
            <p>
              The customer is responsible for return shipping costs unless the
              return is due to a defect or error on our part. In such cases, we
              will arrange for a prepaid return shipment.
            </p>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Refund Process</h2>
            <p>
              Once we receive and inspect the returned item, we will process
              your refund within 08 working days (Excluding Sundays and National
              Holidays). Refunds will be issued to the original payment method
              used during the purchase.
            </p>
          </section>

          {/* Refund Amount */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Refund Amount</h2>
            <p>
              The refund amount will include the purchase price of the returned
              item, excluding any shipping fees.
            </p>
          </section>

          {/* Non-refundable Items */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              Non-Refundable Items
            </h2>
            <p>
              Certain items, such as products sold during sale/offer periods,
              stock clearance sales, or at a discounted price, insurance plans,
              extended warranty or damage protection plans, downloadable
              products, or other services, may not be eligible for returns or
              refunds. Please check the product description for details.
            </p>
          </section>

          {/* Damaged or Defective Items */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              Damaged or Defective Items
            </h2>
            <p>
              If you receive a damaged or defective item, please contact us
              within 02 days from the date of delivery. We will arrange for a
              replacement or refund, depending on your preference.
            </p>
          </section>

          {/* Where Return or Refund will not be Applicable */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              Where Return or Refund will not be Applicable
            </h2>
            <p>
              When a correct product (which was ordered) is delivered and is not
              found to be in a damaged state at the time of delivery, it shall
              not be eligible for returns or refunds.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, Unimay Electronic Pvt.
              Ltd. shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising out of or in
              connection with the use of the Website or the purchase of
              Products.
            </p>
            <p>
              In no event shall our total liability exceed the amount paid by
              you for the purchased product.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in
              accordance with the laws of India. Any disputes arising under or
              in connection with these terms shall be subject to the exclusive
              jurisdiction of the courts located at Nagpur, Maharashtra.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              The Company reserves the right to modify, update, or revise these
              Terms at any time without prior notice. Changes will be effective
              upon posting the same on the Website. It is your responsibility to
              review these Terms periodically.
            </p>
            <p>
              If you have any questions or concerns, please contact our customer
              service at +91 96990 81361 before using the website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnsAndRefundPolicy;
