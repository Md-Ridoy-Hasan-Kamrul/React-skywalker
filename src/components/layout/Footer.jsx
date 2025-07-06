import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiArrowUpRight,
  FiArrowUpLeft, // Import the left-pointing arrow
} from "react-icons/fi";

const Footer = () => {
  // Get both 't' and 'i18n' from the hook
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useMemo ensures these lists are re-translated when the language changes
  const quickLinks = useMemo(
    () => t("footer.quick_links", { returnObjects: true }),
    [t],
  );
  const services = useMemo(
    () => t("footer.services", { returnObjects: true }),
    [t],
  );

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {t("footer.logo_part1")}
              <span className="text-indigo-400">{t("footer.logo_part2")}</span>
            </h2>
            <p className="leading-relaxed text-gray-400">
              {t("footer.description")}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook />, label: "Facebook" },
                { icon: <FiTwitter />, label: "Twitter" },
                { icon: <FiInstagram />, label: "Instagram" },
                { icon: <FiLinkedin />, label: "LinkedIn" },
                { icon: <FiYoutube />, label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="transform rounded-full bg-gray-800 p-2 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              {t("footer.quick_links_title")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {/* FIX: Conditional arrow based on language */}
                    <span className="me-2 group-hover:text-indigo-400">
                      {i18n.language === "ar" ? "←" : "→"}
                    </span>
                    {item}
                    {/* FIX: Conditional icon based on language */}
                    {i18n.language === "ar" ? (
                      <FiArrowUpLeft className="ms-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    ) : (
                      <FiArrowUpRight className="ms-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              {t("footer.services_title")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {/* FIX: Conditional arrow based on language */}
                    <span className="me-2 group-hover:text-indigo-400">
                      {i18n.language === "ar" ? "←" : "→"}
                    </span>
                    {service}
                    {/* FIX: Conditional icon based on language */}
                    {i18n.language === "ar" ? (
                      <FiArrowUpLeft className="ms-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    ) : (
                      <FiArrowUpRight className="ms-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.contact_title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-indigo-400" />
                <p>{t("footer.address")}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-indigo-400" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="transition-colors hover:text-white"
                >
                  {t("footer.email")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" />
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="transition-colors hover:text-white"
                >
                  {t("footer.phone")}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="mt-1 flex-shrink-0 text-indigo-400" />
                <p>{t("footer.hours")}</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="mb-3 text-sm font-semibold text-white">
                {t("footer.newsletter_title")}
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.newsletter_placeholder")}
                  className="w-full rounded-s-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button className="flex items-center rounded-e-lg bg-indigo-600 px-4 text-white transition-colors duration-300 hover:bg-indigo-700">
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-500">
              {t("footer.copyright", { year: currentYear })}
            </p>

            <div className="mt-4 flex space-x-6 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {t("footer.privacy_policy")}
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {t("footer.cookies")}
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group mt-4 flex items-center text-indigo-400 transition-colors hover:text-white md:mt-0"
            >
              {t("footer.back_to_top")}
              <span className="ms-2 inline-block transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
