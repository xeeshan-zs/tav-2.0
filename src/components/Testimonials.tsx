"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  stars: number;
  createdAt: string;
}

const COLLECTION = "testimonials";

const iccsTestimonial = {
  name: "Mian Waqar Ameen",
  role: "Chairman, ICCS Global",
  quote:
    "Tavryz transformed our entire digital presence. The website they engineered is fast, modern, and perfectly represents who we are as an organization. Their attention to detail and commitment to quality is unmatched — they didn't just build a site, they built an experience.",
  initials: "MW",
  stars: 5,
  createdAt: new Date("2025-01-01").toISOString(),
};

function StarRating({
  value,
  onChange,
  readonly = false,
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={`transition-colors ${readonly ? "cursor-default" : "cursor-pointer"}`}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          onClick={() => !readonly && onChange?.(star)}
        >
          <Star
            className={`w-3.5 h-3.5 ${
              star <= (hover || value)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-[#525252]"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [stars, setStars] = useState(5);

  // Load testimonials from Firestore
  useEffect(() => {
    const load = async () => {
      try {
        const q = query(collection(db, COLLECTION), orderBy("createdAt", "asc"));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          // Seed ICCS testimonial on first load
          await addDoc(collection(db, COLLECTION), {
            ...iccsTestimonial,
            createdAt: serverTimestamp(),
          });
          // Re-fetch after seeding
          const seeded = await getDocs(q);
          const data = seeded.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.().toISOString() || doc.data().createdAt,
          })) as Testimonial[];
          setTestimonials(data);
        } else {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.().toISOString() || doc.data().createdAt,
          })) as Testimonial[];
          setTestimonials(data);
        }
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Submit new testimonial to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    try {
      const docRef = await addDoc(collection(db, COLLECTION), {
        name: name.trim(),
        role: role.trim() || "Client",
        quote: quote.trim(),
        initials: name
          .trim()
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        stars,
        createdAt: serverTimestamp(),
      });

      // Add to local state immediately
      setTestimonials((prev) => [
        ...prev,
        {
          id: docRef.id,
          name: name.trim(),
          role: role.trim() || "Client",
          quote: quote.trim(),
          initials: name
            .trim()
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2),
          stars,
          createdAt: new Date().toISOString(),
        },
      ]);

      setName("");
      setRole("");
      setQuote("");
      setStars(5);
      setShowForm(false);
    } catch (err) {
      console.error("Failed to submit testimonial:", err);
    }
  };

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
              What our clients<br />
              <span className="text-[#737373]">say about us.</span>
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="break-inside-avoid bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 animate-pulse"
              >
                <div className="h-3 bg-white/[0.06] rounded w-3/4 mb-3" />
                <div className="h-3 bg-white/[0.06] rounded w-1/2 mb-3" />
                <div className="h-3 bg-white/[0.06] rounded w-2/3 mb-4" />
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-3.5 h-3.5 rounded bg-white/[0.06]" />
                  ))}
                </div>
                <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
                  <div className="w-7 h-7 rounded-full bg-white/[0.06]" />
                  <div>
                    <div className="h-2.5 bg-white/[0.06] rounded w-20 mb-1" />
                    <div className="h-2 bg-white/[0.04] rounded w-28" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
            What our clients<br />
            <span className="text-[#737373]">say about us.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: idx * 0.05,
              }}
              className="break-inside-avoid bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.05] hover:border-white/[0.08] transition-all group"
            >
              <p className="text-[13px] text-[#d4d4d4] leading-relaxed mb-4 body-text">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Stars */}
              <div className="mb-3">
                <StarRating value={review.stars} readonly />
              </div>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[9px] font-bold text-white group-hover:bg-white/[0.1] transition-colors">
                  {review.initials}
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-[9px] text-[#737373]">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add Testimonial Card / Form */}
          {!showForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="break-inside-avoid border border-dashed border-white/[0.1] rounded-xl p-5 flex flex-col items-center justify-center min-h-[180px] hover:border-white/[0.2] hover:bg-white/[0.02] transition-all cursor-pointer group"
              onClick={() => setShowForm(true)}
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-3 group-hover:bg-white/[0.1] transition-colors">
                <span className="text-white text-lg leading-none">+</span>
              </div>
              <span className="text-[11px] text-[#737373] font-medium">
                Share your experience
              </span>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="break-inside-avoid bg-white/[0.03] border border-white/[0.08] rounded-xl p-5"
              onSubmit={handleSubmit}
            >
              <p className="text-[11px] font-semibold text-white mb-4">
                Share your testimonial
              </p>
              <input
                type="text"
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white placeholder:text-[#525252] outline-none focus:border-white/[0.2] transition-colors mb-2"
                required
              />
              <input
                type="text"
                placeholder="Your role & company"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white placeholder:text-[#525252] outline-none focus:border-white/[0.2] transition-colors mb-2"
              />
              <textarea
                placeholder="Your testimonial *"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                rows={3}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white placeholder:text-[#525252] outline-none focus:border-white/[0.2] transition-colors mb-3 resize-none"
                required
              />

              {/* Star Rating Input */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] text-[#737373]">Rating:</span>
                <StarRating value={stars} onChange={setStars} />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="bg-white text-black text-[11px] font-bold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setName("");
                    setRole("");
                    setQuote("");
                    setStars(5);
                  }}
                  className="text-[11px] text-[#737373] hover:text-white transition-colors px-3 py-2"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
