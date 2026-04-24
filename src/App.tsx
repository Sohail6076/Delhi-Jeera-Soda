/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  MapPin, 
  Flame, 
  Droplets, 
  Star, 
  ArrowRight, 
  Plus, 
  Check, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Truck,
  Users,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center font-street text-black text-xl">D</div>
          <span className="font-street text-2xl tracking-widest hidden sm:block">DELHI JEERA SODA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display text-sm font-medium tracking-wider uppercase">
          <a href="#products" className="hover:text-brand-lime transition-colors">The Drink</a>
          <a href="#experience" className="hover:text-brand-lime transition-colors">Our Story</a>
          <a href="#distributor" className="hover:text-brand-lime transition-colors">Partner</a>
          <button className="bg-brand-lime text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
            ORDER NOW
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-8 flex flex-col gap-6 font-display text-xl uppercase font-bold"
          >
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>The Drink</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#distributor" onClick={() => setMobileMenuOpen(false)}>Partner</a>
            <button className="bg-brand-lime text-black py-4 rounded-xl">ORDER NOW</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FizzBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full blur-[1px]"
          initial={{
            left: Math.random() * 100 + "%",
            top: "110%",
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
          }}
          animate={{
            top: "-10%",
            transition: {
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      <FizzBackground />
      
      {/* Background Splashes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-brand-black to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 bg-brand-lime text-black font-display font-bold text-xs rounded-full mb-6 tracking-[0.2em] uppercase">
            EST. 2024 • THE ORIGINAL JEERA REVOLUTION
          </span>
          <h1 className="text-6xl md:text-9xl font-street mb-4 tracking-tight leading-[0.85] text-white">
            THAND KA <span className="text-brand-lime">JHATKA.</span> <br />
            MASALE KA <span className="text-brand-orange">ATTACK.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-medium leading-relaxed">
            Forget those sugary colas. Experience the bold, chatpata fizz of Delhi streets in a premium bottle. 
            Real cumin, real black salt, real kick.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative bg-brand-lime text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 w-full sm:w-auto overflow-hidden cursor-pointer">
              <span className="relative z-10">ORDER NOW</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-10 py-5 border border-white/20 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all w-full sm:w-auto cursor-pointer">
              BECOME A DISTRIBUTOR
            </button>
          </div>
        </motion.div>

        {/* Hero Visual Mock */}
        <motion.div 
          className="mt-20 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-brand-gray relative">
            <img 
              src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=1600" 
              alt="Cold Beverage Splash"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
               {/* This represents our bottle visual center stage */}
               <div className="relative h-full flex flex-col items-center">
                   <div className="w-32 md:w-48 h-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-t-[40px] rounded-b-[20px] border-x border-t border-white/20 shadow-2xl relative">
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-brand-lime flex items-center justify-center text-black font-street text-3xl leading-tight p-2 text-center rounded-lg">
                        DELHI <br/> JEERA <br/> SODA
                      </div>
                      {/* Condensation logic (Visual only) */}
                      <div className="absolute top-0 right-4 w-1 h-20 bg-white/20 blur-[1px] rounded-full" />
                      <div className="absolute top-20 left-6 w-12 h-12 bg-white/5 blur-xl rounded-full" />
                   </div>
               </div>
            </div>
          </div>
          {/* Tagline sticker */}
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-brand-orange text-white p-6 rounded-3xl rotate-12 shadow-2xl z-30 font-display font-black text-xl md:text-2xl italic tracking-tighter">
            AB HOGA <br />ASLI DHAMAKA!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <div className="py-12 bg-brand-gray border-y border-white/5 relative overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-white/40 font-display font-bold uppercase tracking-widest text-sm">
            <Star className="text-brand-lime" size={16} fill="currentColor" />
            Loved by 50,000+ Customers
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            Top Rated in Delhi-NCR
            <div className="w-2 h-2 bg-brand-lime rounded-full" />
            Premium Desi Fizz
          </div>
        ))}
      </div>
    </div>
  );
};

const USP = () => {
  const usps = [
    {
      title: "Real Jeera Kick",
      desc: "Hand-roasted cumin sourced directly from Rajasthan for that authentic earthy punch.",
      icon: <Zap className="text-brand-lime" />,
      color: "border-brand-lime/20"
    },
    {
      title: "Chatpata Taste",
      desc: "Master blend of spicy, salty, and fizzy that makes every gulp addictive.",
      icon: <Flame className="text-brand-orange" />,
      color: "border-brand-orange/20"
    },
    {
      title: "Better than Colas",
      desc: "Refreshing, digestive, and distinctive. No more boring sugary brown water.",
      icon: <Award className="text-white" />,
      color: "border-white/10"
    },
    {
      title: "The Foodie Friend",
      desc: "Designed to pair perfectly with Chole Bhature, Momos, and every spicy street snack.",
      icon: <MapPin className="text-brand-lime" />,
      color: "border-brand-lime/20"
    }
  ];

  return (
    <section className="py-24" id="products">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-street mb-6 uppercase">YEH SIRF SODA <br/> <span className="text-brand-lime">NAHI HAI.</span></h2>
            <p className="text-white/60 text-lg">We didn't just carbonize water; we bottled the energy of the Delhi streets.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 group font-display font-bold text-brand-lime cursor-pointer">
            EXPLORE THE RANGE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 bg-brand-gray border ${item.color} rounded-[2rem] flex flex-col gap-6`}
            >
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg border border-white/5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-24 bg-brand-gray overflow-hidden" id="experience">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1541810273735-53baccf2188d?auto=format&fit=crop&q=80&w=1600" 
                  alt="Delhi Street Culture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             </div>
             {/* Floating UI */}
             <div className="absolute -bottom-10 -left-10 bg-brand-lime text-black p-8 rounded-[2rem] shadow-2xl z-20 max-w-[280px]">
                <p className="font-display font-bold text-lg mb-2 italic">"Pehli sip mein hi nasha hai!"</p>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-black/10" />
                   <span className="text-sm font-bold opacity-70">— Aryan, 22</span>
                </div>
             </div>
          </div>
          
          <div>
            <span className="font-display font-bold text-brand-orange uppercase tracking-widest text-sm mb-6 block">OUR ORIGIN STORY</span>
            <h2 className="text-5xl md:text-7xl font-street mb-8 leading-none uppercase">THE SOUL OF THE <br/><span className="text-white">CAPITAL IN A BOTTLE.</span></h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-medium">
              <p>Under the scorching heat of Chandni Chowk, amidst the chaos and the magic, the first recipe of Delhi Jeera Soda was born. Not in a factory, but on a street corner.</p>
              <p>We wanted to capture that "first sip relief" you feel when you escape the Delhi sun. It's bold, it's unapologetic, and it's 100% desi.</p>
              <p className="text-white font-bold italic">Classic nostalgia. Modern luxury. Pure addiction.</p>
            </div>
            <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform cursor-pointer">
              EXPLORE OUR MISSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const rows = [
    { feature: "Real Jeera & Masala", us: true, them: false },
    { feature: "Chatpata Aftertaste", us: true, them: false },
    { feature: "Premium Glass Bottle", us: true, them: false },
    { feature: "Digestive Benefits", us: true, them: "Rarely" },
    { feature: "Attitude / Swagger", us: "Infinite", them: "Zero" },
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl font-street uppercase">THE <span className="text-brand-orange">SHOWDOWN</span></h2>
          <p className="text-white/40 font-display mt-4 font-bold tracking-widest uppercase">DELHI JEERA vs THE BORING ONES</p>
        </div>

        <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl overflow-hidden bg-brand-gray/50 backdrop-blur-sm">
          <div className="grid grid-cols-3 p-8 border-b border-white/10 bg-brand-gray items-center">
            <div className="font-display font-bold uppercase text-xs tracking-widest opacity-40">Feature</div>
            <div className="text-center font-street text-2xl text-brand-lime">DELHI JEERA</div>
            <div className="text-center font-street text-2xl text-white/30">ORDINARY SODA</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-8 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
              <div className="font-bold text-sm md:text-base">{row.feature}</div>
              <div className="flex justify-center">
                {row.us === true ? <Check className="text-brand-lime" /> : <span className="font-display font-black text-brand-lime text-xl italic">{row.us as string}</span>}
              </div>
              <div className="flex justify-center">
                {row.them === false ? <X className="text-red-500/50" /> : <span className="text-white/20 text-sm font-bold uppercase italic">{row.them as string}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section className="py-24 bg-brand-lime text-black" id="distributor">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-street mb-8 leading-none uppercase">BRING THE DHAMAKA TO <span className="underline decoration-brand-orange">YOUR CITY.</span></h2>
            <p className="text-xl font-medium mb-12 opacity-80 max-w-lg leading-relaxed">
              Low investment. High rotation. Premium margins. Join India's fastest-growing desi beverage brand.
            </p>
            
            <div className="space-y-6">
               {[
                { title: "Fast-Moving FMCG", icon: <Truck size={24} /> },
                { title: "Young Urban Brand Recall", icon: <Users size={24} /> },
                { title: "Marketing Support Included", icon: <MessageCircle size={24} /> }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-black/5 p-6 rounded-2xl border border-black/10">
                    <div className="w-12 h-12 bg-black text-brand-lime rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-display font-bold text-xl">{item.title}</span>
                  </div>
               ))}
            </div>
          </div>

          <div className="bg-black p-10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10 text-white">
            <h3 className="text-3xl font-bold mb-2">Partner with Us</h3>
            <p className="text-white/40 mb-8 font-medium">Fill the form, and our sales team will reach out in 24 hours.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-brand-gray border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-lime outline-none" />
                <input type="text" placeholder="City" className="w-full bg-brand-gray border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-lime outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-brand-gray border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-lime outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-brand-gray border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-lime outline-none" />
              <textarea placeholder="Store / Business Name" rows={3} className="w-full bg-brand-gray border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-lime outline-none text-white"></textarea>
              <button className="w-full bg-brand-lime text-black font-bold py-5 rounded-2xl text-xl hover:bg-brand-orange hover:text-white transition-colors duration-300 cursor-pointer">
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToEnjoy = () => {
  const steps = [
    { title: "CHILL IT HARD", desc: "Keep it in the freezer for 20 mins. The colder, the bolder.", icon: <Droplets /> },
    { title: "PAIR WITH CHAAT", desc: "Best enjoyed with spicy Aloo Tikki or Momos.", icon: <Flame /> },
    { title: "POST-MEAL RELIEF", desc: "The perfect digestive after a heavy Butter Chicken feast.", icon: <Zap /> },
    { title: "PARTY MIXER", desc: "Elevate your house parties with a desi fizzy twist.", icon: <Star /> },
  ];

  return (
    <section className="py-24 bg-brand-gray/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-street mb-16 uppercase">HOW TO <span className="text-brand-lime">ENJOY</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              className="p-8 bg-brand-black border border-white/10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="mb-6 text-brand-lime group-hover:scale-125 transition-transform duration-500">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Food Blogger", text: "Finally a Jeera soda that doesn't taste like chemicals. Asli masale ka swaad hai!", rating: 5 },
    { name: "Rahul Verma", role: "Street Food Lover", text: "Lahori bhul jaoge. This has the real Delhi attitude and punch. Super addictive!", rating: 5 },
    { name: "Kunal Kapoor", role: "Chef", text: "The balance of roasted cumin and effervescence is perfection. Pairs beautifully with heavy meals.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-street text-center mb-16 uppercase">THE <span className="text-brand-orange">VERDICT</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((r, i) => (
                    <div key={i} className="p-10 bg-brand-gray border border-white/5 rounded-[3rem] flex flex-col justify-between">
                        <div className="flex gap-1 mb-6 text-brand-lime">
                            {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-xl font-medium mb-8 text-white italic leading-relaxed">"{r.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl" />
                            <div>
                                <h4 className="font-bold text-white">{r.name}</h4>
                                <p className="text-xs font-display font-bold text-white/30 uppercase tracking-widest">{r.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What does it taste like?", a: "Bold cumin (Jeera) forward, followed by a savory black salt kick and finished with sharp effervescence. It's essentially India's favorite street drink, supercharged." },
    { q: "Where can I buy it?", a: "Currently available online, in major retail outlets across North India, and on quick-commerce apps like Blinkit and Zepto." },
    { q: "Is it suitable for daily consumption?", a: "Unlike cola brands, our soda uses real jeera which is traditionally known for its digestive properties. However, it is an aerated beverage and should be enjoyed responsibly!" },
    { q: "Do you offer bulk pricing for events?", a: "Absolutely. For weddings, parties, or corporate events, we provide special carton rates. Drop us an inquiry!" },
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-5xl font-street text-center mb-16 uppercase">MOST <span className="text-brand-lime">ASKED</span></h2>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left bg-brand-gray hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="font-bold text-lg">{f.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${active === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-white/50 border-t border-white/5 leading-relaxed font-medium">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center font-street text-black text-2xl">D</div>
              <span className="font-street text-3xl tracking-widest uppercase">DELHI JEERA SODA</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed font-medium">
              We're rethinking the Indian beverage landscape. One spicy sip at a time. Join the revolution.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-brand-gray border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-lime hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-brand-lime">NAVIGATE</h4>
            <ul className="space-y-4 font-medium text-white/60">
              <li><a href="#experience" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Shop Now</a></li>
              <li><a href="#distributor" className="hover:text-white transition-colors">Distributor Panel</a></li>
              <li><a href="#distributor" className="hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-brand-orange">CONTACT</h4>
            <ul className="space-y-4 font-medium text-white/60">
              <li>Chandni Chowk, Delhi - 110006</li>
              <li>hello@delhijeerasoda.com</li>
              <li>+91 9999 000 111</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs font-display font-bold uppercase tracking-widest">
          <p>© 2024 DELHI JEERA SODA BEVERAGES PVT LTD.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const UrgencyBanner = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[400px] z-[100]">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3 }}
        className="bg-brand-orange p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">LIMITED OFFER</span>
          </div>
          <h4 className="text-xl font-display font-black leading-tight mb-2 italic uppercase">GRAB 20% OFF ON YOUR FIRST 12-PACK BUNDLE</h4>
          <p className="text-xs font-bold opacity-80 mb-4 tracking-wider uppercase">Code: DELHIJHATKA</p>
          <button className="w-full bg-white text-black font-black py-3 rounded-xl text-sm hover:bg-brand-lime transition-colors cursor-pointer">
            CLAIM DISCOUNT
          </button>
        </div>
        <div className="absolute top-0 right-0 p-2 text-white/10">
          <Droplets size={100} />
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <USP />
      <Experience />
      <Comparison />
      <HowToEnjoy />
      <PartnerSection />
      <Testimonials />
      <FAQ />
      <Footer />
      <UrgencyBanner />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-[90]">
        <button className="w-16 h-16 bg-brand-lime text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform border-4 border-black cursor-pointer">
          <Plus size={32} />
        </button>
      </div>
    </div>
  );
}
