import { Trophy, Twitter, Instagram, Linkedin, Mail, Phone, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const quickLinks = [
  { text: "Official Hult Prize Website", href: "#" },
  { text: "Hult Prize FAQ", href: "#" },
  { text: "UN SDGs", href: "#" },
  { text: "Contact Us", href: "#" },
];

const aboutLinks = [
  { text: "The Competition", href: "#what-is" },
  { text: "Organizing Committee", href: "#organizers" },
  { text: "Join WhatsApp", href: "#join-community" },
];

const resourceLinks = [
  { text: "Pitch Template", href: "#resources" },
  { text: "Business Canvas", href: "#resources" },
  { text: "Success Stories", href: "#resources" },
  { text: "Video Guide", href: "#resources" },
];


export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">FUD Hult Hub</span>
                </div>
                <p className="max-w-xs text-sm text-slate-400">
                    Building the next generation of changemakers from Federal University Dutse.
                </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {quickLinks.map(link => (
                             <li key={link.text}>
                                <Link href={link.href} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                    <span>{link.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-4">About</h3>
                    <ul className="space-y-3">
                        {aboutLinks.map(link => (
                             <li key={link.text}>
                                <Link href={link.href} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                    <span>{link.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-4">Resources</h3>
                    <ul className="space-y-3">
                        {resourceLinks.map(link => (
                             <li key={link.text}>
                                <Link href={link.href} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                    <span>{link.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-4">Contact</h3>
                     <ul className="space-y-3">
                        <li>
                            <Link href="mailto:ahmedsaleym7@gmail.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                                <Mail className="h-4 w-4" />
                                <span>Email</span>
                            </Link>
                        </li>
                        <li>
                           <Link href="https://chat.whatsapp.com/J9zymi7BQNZ2HqRAm2cEHb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                                <WhatsappIcon className="h-4 w-4" />
                                <span>WhatsApp</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
         <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">&copy; 2026 Hult Prize FUD. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
