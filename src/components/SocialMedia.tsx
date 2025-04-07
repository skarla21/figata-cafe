import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <a
        href="https://www.instagram.com/figata_cafe/"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 rounded-full hover:bg-olive-100 transition-colors"
      >
        <FaInstagram className="w-6 h-6 text-gray-700 group-hover:text-figata-cup" />
      </a>

      <a
        href="https://www.facebook.com/FigataDriedFigs"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 rounded-full hover:bg-olive-100 transition-colors"
      >
        <FaFacebookF className="w-6 h-6 text-gray-700 group-hover:text-figata-cup" />
      </a>

      <a
        href="https://www.tiktok.com/@figata_cafe"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 rounded-full hover:bg-olive-100 transition-colors"
      >
        <FaTiktok className="w-6 h-6 text-gray-700 group-hover:text-figata-cup" />
      </a>
    </>
  );
}
