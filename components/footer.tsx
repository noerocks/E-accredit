import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold italic text-blue-500">
            E-ACCREDIT
          </h2>
          <p className="text-sm text-muted-foreground">
            Accreditation Management System for Cebu Technological University –
            Naga Extension Campus.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-500" />
              CTU Naga Extension Campus, Cebu, Philippines
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-500" />
              +63 912 345 6789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              info@ctunaga.edu.ph
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Cebu Technological University – Naga
        Extension Campus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
