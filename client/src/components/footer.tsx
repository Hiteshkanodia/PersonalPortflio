import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hiteshkanodia/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Hitesh Kanodia</h3>
          <p className="text-gray-300 mb-6">
            Senior Data Engineer passionate about building scalable data
            solutions and enterprise analytics platforms.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Hitesh Kanodia. All rights reserved. Built with passion
              for data excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
