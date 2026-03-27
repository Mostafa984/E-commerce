import React from 'react';
import {
    Truck, RotateCcw, ShieldCheck, Headphones,
    Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';

const Footer = () => {
    const features = [
        { icon: <Truck size={24} />, title: "Free Shipping", desc: "On orders over 500 EGP" },
        { icon: <RotateCcw size={24} />, title: "Easy Returns", desc: "14-day return policy" },
        { icon: <ShieldCheck size={24} />, title: "Secure Payment", desc: "100% secure checkout" },
        { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Contact us anytime" },
    ];

    const sections = [
        { title: "Shop", links: ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"] },
        { title: "Account", links: ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"] },
        { title: "Support", links: ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
    ];

    return (
        <footer className="w-full font-sans">
            {/* Top Features Bar */}
            <div className="bg-[#f0f9f4] py-8 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="bg-[#d1fae5] text-[#059669] p-3 rounded-xl">
                                {f.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">{f.title}</h4>
                                <p className="text-xs text-gray-500">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-[#0b1320] text-gray-400 pt-16 pb-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                        {/* Logo and Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white inline-flex items-center px-4 py-2 rounded-md shadow-sm">
                                <span className="text-[#0aad0a] text-2xl font-bold flex items-center gap-2">
                                    <span className="text-3xl leading-none">🛒</span> FreshCart
                                </span>
                            </div>

                            <p className="text-[13px] leading-relaxed max-w-sm">
                                FreshCart is your one-stop destination for quality products.
                                From fashion to electronics, we bring you the best brands
                                at competitive prices with a seamless shopping experience.
                            </p>

                            <div className="space-y-4 text-[13px]">
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-[#0aad0a]" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-[#0aad0a]" />
                                    <span>support@freshcart.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-[#0aad0a]" />
                                    <span>123 Commerce Street, New York, NY 10001</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3 pt-2">
                                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#0aad0a] transition-all group">
                                        <Icon size={16} className="text-gray-400 group-hover:text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-white font-bold mb-6 text-sm">{section.title}</h3>
                                <ul className="space-y-4 text-[13px]">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="hover:text-white transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Copyright & Payments */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-[12px]">
                        <p>© 2026 FreshCart. All rights reserved.</p>

                        <div className="flex items-center gap-4 opacity-70">
                            <span className="flex items-center gap-1.5">💳 Visa</span>
                            <span className="flex items-center gap-1.5">💳 Mastercard</span>
                            <span className="flex items-center gap-1.5">🅿️ PayPal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;