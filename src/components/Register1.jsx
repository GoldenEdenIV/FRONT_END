"use client";
import React from 'react';
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { LoginForm } from "./LoginForm";
import { RegisterSection } from "./RegisterSection";
import { FeatureCard } from "./FeatureCard";
import { NewsletterSignup } from "./NewsletterSignup";
import { Footer } from "./Footer";

const Register1 = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/48247e8a3684f71c5a5c5b3c651bdc6e6415f1a371b1d27d7808cab1b57bc377",
      title: "Product Support",
      description:
        "Up to 3 years on-site warranty available for your peace of mind.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/1e836c10e68d5fc4f8e07ee8380941cd052096a9e5a303878a827c88b257df36",
      title: "Personal Account",
      description:
        "With big discounts, free delivery and a dedicated support specialist.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/5963c41a850cda2e33964125f420ed2fc3eb454879b99cd77fd59f2e7b227dec",
      title: "Amazing Savings",
      description:
        "Up to 70% off new Products, you can be sure of the best price.",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <TopBar />
      <MainNav />
      <hr className="border-gray-300" />

      <main className="flex flex-col items-start self-center mt-5 max-w-full w-[1279px]">
        <nav aria-label="Breadcrumb" className="text-xs font-light">
          <a href="/" className="text-black">
            Home
          </a>
          <span className="text-blue-600 mx-1">›</span>
          <span className="text-black">Login</span>
        </nav>

        <h1 className="mt-5 text-3xl font-semibold text-black">
          Customer Login
        </h1>

        <div className="self-end mt-5 max-w-full w-[1162px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:w-full">
              <LoginForm />
            </div>
            <div className="w-6/12 max-md:w-full">
              <RegisterSection />
            </div>
          </div>
        </div>
      </main>

      <section className="flex flex-col justify-center items-center px-16 py-14 mt-14 w-full bg-violet-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-w-full w-[1055px] grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Register1;
