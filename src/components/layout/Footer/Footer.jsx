import { Mail, MapPin } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import {
  quickLinks,
  platform,
  company,
  support,
  legal,
} from "../../../data/footer";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/crackthecampus",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/crackthecampus",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/crackthecampus",
    label: "Twitter",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@crackthecampus",
    label: "YouTube",
  },
  {
    icon: FaGithub,
    href: "https://github.com/abhishek-475/CrackTheCampus",
    label: "GitHub",
  },
];

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold tracking-wide uppercase text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950 text-slate-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-6">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              CrackTheCampus
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              An AI-powered Campus-to-Career platform helping students prepare
              for placements through structured learning, company-specific
              practice, mock assessments, and recruiter-focused preparation.
            </p>

            <div className="mt-8 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={18} />
                <span>support@crackthecampus.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" size={18} />
                <span>Bengaluru, Karnataka, India</span>
              </div>

            </div>

            {/* Social */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

          </div>

          <FooterColumn
            title="Quick Links"
            items={quickLinks}
          />

          <FooterColumn
            title="Platform"
            items={platform}
          />

          <FooterColumn
            title="Company"
            items={company}
          />

          <FooterColumn
            title="Support"
            items={support}
          />

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CrackTheCampus. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}