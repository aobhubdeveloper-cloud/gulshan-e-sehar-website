import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, MapPin, ShieldCheck, Trees, Building2, Droplets, Zap,
    Phone, Mail, Menu, X, CheckCircle2, Users, ExternalLink
} from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const APP_URL = 'https://app.gseharhyd.com';

const nav = [
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

const stats = [
    { value: '250+', label: 'Acres Planned' },
    { value: '1,200+', label: 'Residential Plots' },
    { value: '800+', label: 'Happy Families' },
    { value: '24/7', label: 'Gated Security' },
];

const amenities = [
    { icon: ShieldCheck, title: 'Gated Security', desc: 'Round-the-clock guarded entrances, CCTV surveillance and boundary patrol keeping every family safe.' },
    { icon: Trees, title: 'Parks & Greenbelts', desc: 'Lush landscaped parks, walking tracks and tree-lined boulevards throughout the community.' },
    { icon: Building2, title: 'Community Mosque', desc: 'A serene central Jamia mosque within walking distance of every residential block.' },
    { icon: Droplets, title: 'Water & Sanitation', desc: 'Reliable filtered water supply and a modern underground sewerage and drainage network.' },
    { icon: Zap, title: 'Uninterrupted Power', desc: 'Planned electricity infrastructure with underground wiring for a clean, safe streetscape.' },
    { icon: Users, title: 'Community Living', desc: 'Schools, commercial areas and family spaces designed for a connected neighbourhood.' },
];

const gallery = [
    { src: 'https://images.hostinger.com/d317c8a1-9adf-4d82-a8c1-bf096b51dba8.png', title: 'Modern Villas' },
    { src: 'https://images.hostinger.com/a8ae94fa-72f2-4d1c-976c-372dc5cf7151.png', title: 'Central Mosque' },
    { src: 'https://images.hostinger.com/f7763ad1-c972-4e5e-8d07-d306356aa007.png', title: 'Community Parks' },
    { src: 'https://images.hostinger.com/21d068e3-ea47-4985-8787-cdaa5ec7c80d.png', title: 'Grand Entrance' },
];

const ticker = ['Qasimabad, Hyderabad', 'Prime Location', 'Approved Layout', 'Gated & Secure', 'Green Community', 'Family Living'];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const App = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-display selection:bg-emerald-200 transition-colors">
            {/* Header */}
            <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800' : 'bg-transparent'}`}>
                <div className="mx-auto max-w-[80rem] px-5 sm:px-8 h-[72px] flex items-center justify-between">
                    <a href="#top" className="flex items-center gap-3">
                        <Logo className="w-11 h-11" />
                        <div className="leading-tight">
                            <p className="font-extrabold text-[15px] tracking-tight">Gulshan-e-Sehar</p>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-600 font-semibold">Housing Society</p>
                        </div>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {nav.map((n) => (
                            <a key={n.label} href={n.href} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{n.label}</a>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <a href={APP_URL} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.98]">
                            Open Community App <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button className="p-2 text-slate-700 dark:text-slate-200" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    </div>
                </div>
                {open && (
                    <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-5 py-4 space-y-3">
                        {nav.map((n) => (
                            <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200 py-1.5">{n.label}</a>
                        ))}
                        <a href={APP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-xl">
                            Open Community App <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.hostinger.com/f818d8dc-2565-4127-885c-ac3c469fa16a.png" alt="Aerial view of Gulshan-e-Sehar Housing Society" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-900/30" />
                </div>
                <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8 pt-28 pb-20 w-full">
                    <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="max-w-2xl">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-emerald-50 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <MapPin className="w-3.5 h-3.5" /> Qasimabad, Hyderabad
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-[4.25rem]">
                            A greener, safer<br />place to call
                            <span className="text-emerald-400"> home.</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-6 text-emerald-50/90 text-lg max-w-xl leading-relaxed">
                            Gulshan-e-Sehar is a thoughtfully planned gated community offering modern living, lush green spaces and world-class amenities for families in Hyderabad.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-4">
                            <a href={APP_URL} target="_blank" rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-4 rounded-xl shadow-xl shadow-emerald-900/40 transition-all active:scale-[0.98]">
                                Open Community App <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="#amenities" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-semibold px-7 py-4 rounded-xl transition-all">
                                Explore the Society
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Ticker */}
            <div className="bg-emerald-600 py-3.5 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...ticker, ...ticker].map((t, i) => (
                        <span key={i} className="flex items-center gap-3 text-white/95 text-sm font-semibold px-6">
                            {t} <span className="text-emerald-300">◆</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <section className="mx-auto max-w-[80rem] px-5 sm:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6 text-center">
                            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">{s.value}</p>
                            <p className="mt-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section id="about" className="mx-auto max-w-[80rem] px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                    <img src="https://images.hostinger.com/d317c8a1-9adf-4d82-a8c1-bf096b51dba8.png" alt="Modern villa in Gulshan-e-Sehar" className="rounded-3xl shadow-2xl shadow-emerald-900/10 w-full object-cover aspect-[4/3]" />
                    <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-5 flex items-center gap-3 animate-float-slow">
                        <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Approved Layout</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Secure investment</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-[0.2em] mb-3">About the Society</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">Modern community living, rooted in comfort and trust.</h2>
                    <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                        Located in the heart of Qasimabad, Gulshan-e-Sehar brings together secure gated living, dependable civic infrastructure and generous green spaces. Every block is designed for family life, convenience and long-term value.
                    </p>
                    <ul className="mt-7 space-y-3">
                        {['Prime, easily accessible location in Qasimabad', 'Wide carpeted roads and planned street layout', 'Underground utilities and modern sewerage', 'A connected digital community via our app'].map((f) => (
                            <li key={f} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span className="text-slate-700 dark:text-slate-300">{f}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* Amenities */}
            <section id="amenities" className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
                <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
                    <div className="max-w-2xl mb-12">
                        <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-[0.2em] mb-3">Amenities</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything a modern family needs</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {amenities.map((a, i) => (
                            <motion.div key={a.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-7 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                    <a.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="mx-auto max-w-[80rem] px-5 sm:px-8 py-16 sm:py-24">
                <div className="max-w-2xl mb-12">
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-[0.2em] mb-3">Gallery</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">A glimpse of life at Gulshan-e-Sehar</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {gallery.map((g, i) => (
                        <motion.div key={g.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="relative rounded-2xl overflow-hidden group aspect-[3/4]">
                            <img src={g.src} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent" />
                            <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">{g.title}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-[80rem] px-5 sm:px-8 pb-16 sm:pb-24">
                <div className="relative overflow-hidden rounded-3xl bg-emerald-600 px-8 py-14 sm:px-14 sm:py-16 text-center">
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-500/40 blur-2xl" />
                    <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-emerald-700/40 blur-2xl" />
                    <div className="relative">
                        <div className="mx-auto w-fit mb-6"><Logo className="w-14 h-14" /></div>
                        <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight">Manage your residence, digitally.</h2>
                        <p className="mt-4 text-emerald-50/90 max-w-xl mx-auto">
                            Pay dues, raise complaints, stay updated with announcements and connect with your neighbourhood — all from the Gulshan-e-Sehar Community App.
                        </p>
                        <a href={APP_URL} target="_blank" rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow-xl transition-all active:scale-[0.98] hover:bg-emerald-50">
                            Open Community App <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-slate-900 text-slate-300">
                <div className="mx-auto max-w-[80rem] px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <Logo className="w-11 h-11" />
                            <div>
                                <p className="font-extrabold text-white">Gulshan-e-Sehar</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Housing Society</p>
                            </div>
                        </div>
                        <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
                            A modern, secure and green gated community in Qasimabad, Hyderabad — built for families to grow and thrive.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-white mb-4">Explore</p>
                        <ul className="space-y-2.5 text-sm">
                            {nav.map((n) => <li key={n.label}><a href={n.href} className="hover:text-emerald-400 transition-colors">{n.label}</a></li>)}
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-white mb-4">Get in touch</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-400" /> Near Wadu Wah Gate, Qasimabad, Hyderabad</li>
                            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-400" /> +92 22 2672797</li>
                            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-400" /> info@gseharhyd.com</li>
                        </ul>
                        <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all">
                            Open Community App <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800">
                    <div className="mx-auto max-w-[80rem] px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Gulshan-e-Sehar Housing Society. All rights reserved.</p>
                        <p>Developed by AOB HUB (SMC-PRIVATE) LIMITED</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
