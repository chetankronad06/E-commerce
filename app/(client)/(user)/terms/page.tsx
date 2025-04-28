import Container from "@/components/Container";
import React from "react";

const TermsPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
          By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <p>
          You agree to use our website and services for lawful purposes only and in a way that does not infringe the rights of others or restrict or inhibit their use of the site.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
          <p>
          We strive to ensure that all product descriptions, prices, and availability are accurate and up to date. However, we reserve the right to make changes at any time without prior notice.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Intellectual Property
          </h2>
          <p>
          All content, including logos, graphics, images, and text, are the property of this website and protected under intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Payments and Transactions
          </h2>
          <p>
          All transactions made through our website are secure. By purchasing a product, you agree to provide accurate payment and billing information
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p>
          We are not liable for any indirect, incidental, special, or consequential damages that may arise from the use of or inability to use our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
          7. Return and Refund Policy
          </h2>
          <p>
          Returns and refunds are subject to our return policy, which is available on our website. Please review it carefully before making a purchase.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
          8. Privacy Policy
          </h2>
          <p>
          Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>
          These Terms and Conditions are governed by and interpreted in accordance with the laws of the jurisdiction in which our business operates.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsPage;