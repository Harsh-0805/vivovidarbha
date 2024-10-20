import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Banner Section */}
        <div className="bg-blue-600 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-vivoBold tracking-wide">
            VIVO NAGPUR
          </h1>
          <h2 className="text-lg md:text-2xl font-vivoMedium mt-4">
            Cookie Policy
          </h2>
        </div>

        {/* Terms Content */}
        <div className="max-w-5xl mx-auto bg-white p-8 my-8 rounded-lg shadow-lg space-y-8 text-left">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">Cookie Policy</h2>
            <p>
              This Cookie Policy describes the different types of cookies and
              similar technologies that may be used by Unimay Electronic Private
              Limited (hereinafter referred to as &quot;we&quot;, &quot;us&quot;
              or &quot;our&quot;, whose registered address is at 6th floor,
              Riaan House, LIC Square, Kingsway Rd, opp. KP ground, Mohan Nagar,
              Nagpur, Maharashtra 440001) on our website and other services
              (hereinafter referred to as the &quot;Service&quot;). This Policy
              also describes how you can manage cookies and similar
              technologies.
            </p>
          </section>

          {/* Section 1: What are Cookies */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              1. What are Cookies and Similar Technologies?
            </h2>
            <p>
              A cookie is a small text file that a website stores on your
              computer or mobile device when you visit the site. Cookies allow
              us to personalise your experience of our Service, remember your
              preferences for a certain period of time and help us improve the
              effectiveness of advertisements and web searches. Cookies store
              information related to the specific terminal device used. This
              does not mean, however, that we obtain immediate knowledge of your
              identity. The content of a cookie can only be retrieved and read
              by the server that created the cookie.
            </p>
            <p>
              We may use other cookie-like technologies, such as pixels or web
              beacons, for the purposes that cookies enable. Pixels on our
              Service also deliver information read from your device to our
              servers and/or third-party servers to analyse use of our Service,
              or to provide content and advertisements that are more relevant to
              you. These pixels are categorised and managed in the same way as
              cookies. For the purposes of this Policy, we refer to all of the
              above technologies collectively as &quot;cookies&quot;.
            </p>
          </section>

          {/* Section 2: Cookies - Types and Categories */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              2. Cookies: Types, Categories and Purposes of Use
            </h2>
            <p>
              <strong>2.1 Type</strong>
            </p>
            <p>
              a) <strong>First-party Cookies:</strong> These are placed by the
              website you are visiting itself. They ensure the smooth provision
              of the website and its features. The information stored can only
              be read by the website you are visiting.
            </p>
            <p>
              b) <strong>Third-party Cookies:</strong> These cookies are set by
              domains other than the one you are visiting. Our Service may
              display content from third-party services, which may result in
              Third-Party Cookies being stored. We do not control these cookies.
            </p>

            <p>
              <strong>2.2 Categories and Purposes of Use</strong>
            </p>
            <p>
              a) <strong>Strictly Necessary Cookies:</strong> These are required
              for the operation of our website. Without these cookies, services
              such as shopping baskets and secure log-ins cannot be provided.
            </p>
            <p>
              b) <strong>Functionality Cookies:</strong> These recognise you
              when you return to our website, storing preferences such as your
              geographic location.
            </p>
            <p>
              c) <strong>Analytic/Performance Cookies:</strong> These cookies
              allow us to recognise and count visitors, helping us understand
              how the website is used. We use Google Analytics (&quot;GA&quot;)
              to achieve this. For more information, please visit the GA Help
              Centre.
            </p>
            <p>
              d) <strong>Targeting Cookies:</strong> These record your use of
              our services, helping us make our advertisements more relevant to
              your interests. For more information on how platforms like Meta or
              Google store this information, visit their privacy policies.
            </p>
          </section>

          {/* Section 3: Managing Cookies */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">
              3. Managing Cookies - Browser Settings
            </h2>
            <p>
              Most modern browsers offer the possibility to manage cookies
              according to your preferences. Disabling cookies may prevent you
              from using certain parts of the Service. You can manage cookies in
              browsers like:
            </p>
            <ul className="list-disc ml-5">
              <li>Google Chrome</li>
              <li>Internet Explorer</li>
              <li>Firefox</li>
              <li>Microsoft Edge</li>
              <li>Apple Safari</li>
            </ul>
          </section>

          {/* Section 4: Contact Us */}
          <section>
            <h2 className="text-2xl font-vivoBold mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our
              processing of your personal data, if you need to report a problem
              or contact our Data Protection Officer, or if you would like to
              exercise any of your rights under data protection and privacy
              laws, please{" "}
              <a
                href="/contact"
                className="text-blue-600 underline hover:text-blue-800"
              >
                click here
              </a>
              .
            </p>
            <p>
              All the practices mentioned in this Cookie Policy will be
              performed in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
