import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PrivacyTerms: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-vivoRegular min-h-screen">
        {/* Banner */}
        <div className="bg-blue-600 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-vivoBold tracking-wide">
            VIVO NAGPUR
          </h1>
          <h2 className="text-lg md:text-2xl font-vivoMedium mt-4">
            Privacy Terms
          </h2>
        </div>

        {/* Privacy Terms Content */}
        <div className="max-w-5xl mx-auto bg-white p-8 my-8 rounded-lg shadow-lg space-y-8 text-left">
          {/* Order Processing */}
          <section id="order-processing">
            <h2 className="text-2xl font-vivoBold mb-4">Order Processing</h2>
            <p>
              UNIMAY ELECTRONIC PRIVATE LIMITED (vivo Nagpur) (&quot;we&quot; or
              &quot;us&quot;), as an authorized distributor of vivo, is the
              provider of E-Store (the &quot;Service&quot;) and the organization
              responsible for the personal data processed with respect to the
              Service.
            </p>
            <p>
              We care about your privacy and think it is important that you know
              why and how we process your personal data. In these Privacy Terms
              for E-Store (the &quot;Terms&quot;), we therefore cover the
              following content:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>1. Collection and Processing:</strong> The type of data,
                for what purpose it is processed, and the legal basis for data
                processing;
              </li>
              <li>
                <strong>2. Storage:</strong> How we will store your data;
              </li>
              <li>
                <strong>3. Sharing and Transfer:</strong> How we share or
                transfer your data;
              </li>
              <li>
                <strong>4. Your Rights:</strong> Your rights with respect to
                your data;
              </li>
              <li>
                <strong>5. Contact Us:</strong> How you can contact us with any
                further questions.
              </li>
            </ul>
            <p>
              Please read these Terms carefully and make sure that you have
              understood our practices regarding your personal data before you
              consent and start using the Service.
            </p>
            <p className="text-red-600 font-vivoBold">
              IF YOU DO NOT AGREE TO THESE TERMS OR IF YOU WITHDRAW YOUR
              CONSENT, YOU WILL NOT BE ABLE TO USE THE SERVICE.
            </p>
          </section>

          {/* Collection and Processing */}
          <section id="collection-and-processing">
            <h2 className="text-2xl font-vivoBold mb-4">
              1. Collection and Processing
            </h2>
            <p>What data we collect:</p>
            <ul className="list-disc pl-6">
              <li>
                Contact information: name, phone number, email address and
                delivery address
              </li>
              <li>Account data: openid</li>
              <li>
                Order data: order number, order status, ordered product, order
                amount
              </li>
              <li>
                Payment data: payment status, payment time, and other
                information necessary for your payment
              </li>
              <li>Delivery data: delivery number, delivery status</li>
            </ul>
            <p>The purposes of processing these data roughly include:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Order:</strong> To ensure that you have made an order,
                ensure that the product you ordered is appropriate and to record
                your order.
              </li>
              <li>
                <strong>Delivery:</strong> To deliver your order items to the
                right place, contact you during this period, and record your
                order information to display the courier progress and manage
                such information.
              </li>
              <li>
                <strong>Payment:</strong> To ensure your payment is successful
                and create an order number.
              </li>
              <li>
                <strong>Identification:</strong> To verify your identity when
                you order discounted products through the Company Purchase
                Service.
              </li>
              <li>
                <strong>Others:</strong> Response to inquiries, or other
                requests, exercise of rights or performance of obligations under
                agreements, laws, and the like; other purposes based on your
                prior consent.
              </li>
            </ul>
          </section>

          {/* Cookie Section */}
          <section id="cookie">
            <h2 className="text-2xl font-vivoBold mb-4">Cookie</h2>
            <p>
              A cookie is a small text file that a website stores on your
              computer or mobile device when you visit the site. Cookies store
              information related to the specific terminal device used. This
              does not mean, however, that we obtain immediate knowledge of your
              identity. The content of a cookie can be retrieved and read only
              by the server that created the cookie.
            </p>
            <p>
              We use, without limitation, Google Analytics (&quot;GA&quot;),
              Contentsquare (&quot;CS&quot;), and similar Analytic/Performance
              Cookies to recognize and count visitors and visitor sources. This
              helps us see how visitors navigate through our website and improve
              the way our website works. We may share this information with
              third parties for such purposes. For more information, please
              refer to their Privacy Policies:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://support.google.com/analytics/ #topic=1008008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  GA Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section id="legal-basis">
            <h2 className="text-2xl font-vivoBold mb-4">Legal Basis</h2>
            <p>
              We process the data for the above purposes upon your consent to
              these Terms. However, we may process your data on other legal
              bases as permitted by applicable laws. This may include processing
              based on our legitimate interests or to fulfill contractual or
              legal obligations.
            </p>
          </section>

          {/* Security */}
          <section id="security">
            <h2 className="text-2xl font-vivoBold mb-4">Security</h2>
            <p>
              We care about protecting your personal data. We have put in place
              appropriate security measures, including but not limited to
              encryption and anonymization techniques, designed to protect your
              personal data from unauthorized use, damage, or loss.
            </p>
          </section>

          {/* Storage */}
          <section id="storage">
            <h2 className="text-2xl font-vivoBold mb-4">2. Storage</h2>
            <p>
              We will retain your personal data for the period necessary for the
              above purposes or as required by applicable laws. Your personal
              data will be stored in India.
            </p>
          </section>

          {/* Sharing and Transfer */}
          <section id="sharing-and-transfer">
            <h2 className="text-2xl font-vivoBold mb-4">
              3. Sharing and Transfer
            </h2>
            <p>
              We will process your data ourselves or through our affiliated
              companies or service providers who act on our behalf. Your data
              will be encrypted and transferred to our delivery and payment
              partners for processing.
            </p>
          </section>

          {/* Your Rights */}
          <section id="your-rights">
            <h2 className="text-2xl font-vivoBold mb-4">4. Your Rights</h2>
            <p>
              You have various rights regarding the data we hold about you, such
              as withdrawing consent, rectification, erasure, restriction of
              processing, objection, or data portability. You may exercise these
              rights by contacting us.
            </p>
          </section>

          {/* Contact Us */}
          <section id="contact-us">
            <h2 className="text-2xl font-vivoBold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about these Terms or our processing of
              your personal data, please contact us at:
            </p>
            <ul className="list-disc pl-6">
              <li>Email: info@vivonagpur.com</li>
              <li>Registered Name: Unimay Electronic Private Limited</li>
              <li>
                Registered Address: 6th floor, Riaan House, LIC Square, Kingsway
                Rd, Opp. KP Ground, Mohan Nagar, Nagpur, Maharashtra 440001
              </li>
            </ul>
          </section>

          <p className="text-sm italic text-gray-600">
            These Terms may be updated from time to time. We will notify you of
            significant changes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyTerms;
