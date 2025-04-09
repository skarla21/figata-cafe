import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";
import Iframe from "react-iframe";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {
  const contactText = useTranslations("contact");

  return (
    <div className="max-2-xl xl:max-w-4xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-figata-cup text-center">
        {contactText("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* second col about google maps embed */}
        <div className="h-96 bg-gray-100 rounded-xl overflow-hidden w-full md:order-2">
          <Iframe
            className="w-full h-full border-0"
            loading="lazy"
            url={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsxVeB4q9oRQRzBN8DtslF3A&key=${process.env.MAPS_API_KEY}&zoom=15`}
          ></Iframe>
        </div>
        {/* first col about contact and hours */}
        <div className="ml-2 space-y-4 md:order-1">
          <h3 className="text-xl font-semibold">
            {contactText("contact-title")}
          </h3>
          <p className="flex items-center space-x-2">
            <CiMapPin />
            <span className="mr-2">
              <a
                href="https://maps.app.goo.gl/bt8ssrzkD9kT16Sp8"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-figata-cup hover:underline"
              >
                {contactText("address")}
              </a>
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <CiPhone />
            <span>
              <a
                href="tel:+302112175717"
                className="text-figata-cup hover:underline"
              >
                +30 21 1217 5717
              </a>
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <CiMail />
            <span>
              <a
                href="mailto:contact@figata.com"
                className="text-figata-cup hover:underline"
              >
                {process.env.NEXT_PUBLIC_FIGATA_EMAIL}
              </a>
            </span>
          </p>
          <h3 className="text-xl font-semibold mt-9">
            {contactText("hours-title")}
          </h3>
          <div className="space-y-2 text-gray-600">
            <div className="grid grid-cols-[max-content_1fr] gap-x-4">
              <span>{contactText("monday")}</span>
              <span>
                7:00 {contactText("am")} - 7:00 {contactText("pm")}
              </span>
              <span>{contactText("tuesday")}</span>
              <span>
                7:00 {contactText("am")} - 3:00 {contactText("pm")}
              </span>
              <span>{contactText("wednesday")}</span>
              <span>
                7:00 {contactText("am")} - 7:00 {contactText("pm")}
              </span>
              <span>{contactText("thursday")}</span>
              <span>
                7:00 {contactText("am")} - 7:00 {contactText("pm")}
              </span>
              <span>{contactText("friday")}</span>
              <span>
                7:00 {contactText("am")} - 7:00 {contactText("pm")}
              </span>
              <span>{contactText("saturday")}</span>
              <span>
                8:00 {contactText("am")} - 3:00 {contactText("pm")}
              </span>
              <span>{contactText("sunday")}</span>
              <span>
                9:00 {contactText("am")} - 3:00 {contactText("pm")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
