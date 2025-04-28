import Container from "@/components/Container";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">About us</h1>
      <p className="mb-4">
      Welcome to our store! We’re a passionate team dedicated to bringing you carefully curated products that blend quality, style, and affordability. From the beginning, our mission has been simple — to make online shopping smooth, enjoyable, and trustworthy for everyone.
      </p>
      <p className="mb-4">
      We offer a wide range of products that are handpicked to meet your everyday needs. Whether you&apos;re shopping for the latest trends, daily essentials, or something unique, our collection is constantly updated to bring you the best. Every item we sell goes through a quality check, so you can shop with confidence.
      </p>
      <p>
      Customer satisfaction is at the heart of everything we do. We believe in transparent pricing, fast delivery, and exceptional service. When you shop with us, you&apos;re not just buying a product — you&apos;re joining a growing community that values trust, quality, and convenience.
      </p>
    </Container>
  );
};

export default AboutPage;