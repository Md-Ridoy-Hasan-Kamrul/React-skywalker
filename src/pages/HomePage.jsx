import React from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaShieldAlt, FaRocket, FaBullhorn } from "react-icons/fa";

// --- Sub-components for better organization ---

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-24 text-center md:py-32">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold text-white md:text-6xl">
          {t("home_page.hero.title")}
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
          {t("home_page.hero.subtitle")}
        </p>
        <a
          href="/get-started"
          className="transform rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
        >
          {t("home_page.hero.cta_button")}
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, children }) => (
  <div className="transform rounded-lg bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const FeaturesSection = () => {
  const { t } = useTranslation();
  const features = t("home_page.features.cards", { returnObjects: true });
  const icons = [
    <FaRocket size={40} className="mx-auto" />,
    <FaShieldAlt size={40} className="mx-auto" />,
    <FaBullhorn size={40} className="mx-auto" />,
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            {t("home_page.features.title")}
          </h2>
          <p className="mt-2 text-gray-600">
            {t("home_page.features.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={icons[index]} title={feature.title}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, author, title, avatar }) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <p className="text-gray-600 italic">"{quote}"</p>
    <div className="mt-4 flex items-center">
      <img className="mr-4 h-12 w-12 rounded-full" src={avatar} alt={author} />
      <div>
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = t("home_page.testimonials.cards", {
    returnObjects: true,
  });

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            {t("home_page.testimonials.title")}
          </h2>
          <div className="mt-2 flex items-center justify-center">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <span className="ml-2 text-gray-600">
              {t("home_page.testimonials.rating")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              avatar={`https://placehold.co/100x100/E2E8F0/4A5568?text=${testimonial.author.charAt(0)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CtaSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-6 py-16 text-center text-white">
        <h2 className="mb-2 text-3xl font-bold">{t("home_page.cta.title")}</h2>
        <p className="mb-6 text-blue-100">{t("home_page.cta.subtitle")}</p>
        <a
          href="/signup"
          className="rounded-full bg-white px-8 py-3 font-bold text-blue-600 transition duration-300 hover:bg-gray-200"
        >
          {t("home_page.cta.button")}
        </a>
      </div>
    </div>
  );
};

// --- Main HomePage Component ---
const HomePage = () => {
  return (
    <div className="font-sans text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
