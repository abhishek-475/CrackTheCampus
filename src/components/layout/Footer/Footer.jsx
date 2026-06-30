import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Courses", href: "#courses" },
    { name: "Companies", href: "#companies" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const resources = [
    { name: "Practice Tests", href: "#courses" },
    { name: "Mock Interviews", href: "#courses" },
    { name: "Technical Resources", href: "#courses" },
    { name: "Placement Preparation", href: "#courses" },
  ];

  const support = [
    { name: "Contact Us", href: "#footer" },
    { name: "Help Center", href: "#footer" },
    { name: "FAQs", href: "#footer" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaXTwitter, href: "https://twitter.com" },
    { icon: FaYoutube, href: "https://youtube.com" },
    { icon: FaFacebook, href: "https://facebook.com" },
    { icon: FaGithub, href: "https://github.com" },
  ];

  return (
    <footer
      id="footer"
      aria-label="Footer section"
      className="bg-slate-950 text-slate-300 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              CrackTheCampus
            </h2>

            <p className="mt-5 text-slate-400 leading-7 max-w-md">
              India's placement preparation platform helping students
              crack aptitude tests, coding rounds, technical interviews,
              and dream company placements.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>support@crackthecampus.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>Kerala, India</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-3 mt-8">

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a className="text-sm text-slate-400 hover:text-white transition" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-5">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a className="text-sm text-slate-400 hover:text-white transition" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-5">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a className="text-sm text-slate-400 hover:text-white transition" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} CrackTheCampus. All rights reserved.
          </p>

          <div className="flex gap-6 md:gap-8">
            {legal.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-500 hover:text-white transition">
                {item.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}