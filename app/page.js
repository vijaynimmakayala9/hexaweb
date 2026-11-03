import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { faqs } from "@/data/faqs";
import { ServiceCard, ProjectCard, PostCard } from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import Accordion from "@/components/Accordion";
import CTA from "@/components/CTA";
export const metadata = {
    title: "Home",
    description: "Building digital solutions that move your business forward.",
};
export default function Home() {
    return (
        <>
            <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:pb-24 sm:pt-24">
                <div className="pointer-events-none absolute -right-40 -top-28 h-[34rem] w-[34rem] rounded-full bg-[#dcefe2]/70 blur-3xl" />
                <div className="pointer-events-none absolute left-[-12rem] top-64 h-72 w-72 rounded-full bg-[#eaf4ec] blur-3xl" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
                    <div className="animate-fade-up">
                        <p className="eyebrow mb-6">Software with purpose</p>
                        <h1 className="font-display text-[clamp(2.65rem,6vw,5.15rem)] font-semibold leading-[1.02] tracking-[-.055em] text-forest">
                            Building Digital Solutions That Move Your Business Forward.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                            We combine thoughtful design, robust engineering and practical
                            innovation to help your business scale with confidence.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="btn-primary">
                                Start Your Project <ArrowUpRight size={18} />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                Explore Our Services <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-lift backdrop-blur sm:p-7">
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-leaf/50 blur-2xl" />
                        <div className="relative rounded-2xl bg-gradient-to-br from-[#174c3c] to-[#0b2c24] p-6 text-white shadow-lift sm:p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-white/70">Project workspace</span>
                                <span className="h-2 w-2 rounded-full bg-leaf" />
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-xl bg-white/10 p-4">
                                    <p className="text-xs text-white/60">Delivery pulse</p>
                                    <p className="mt-2 text-2xl font-semibold">On track</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-4">
                                    <p className="text-xs text-white/60">Milestones</p>
                                    <p className="mt-2 text-2xl font-semibold">04 / 06</p>
                                </div>
                            </div>
                            <div className="mt-5 space-y-3">
                                {[
                                    "Discovery & strategy",
                                    "Product experience",
                                    "Engineering delivery",
                                ].map((x, i) => (
                                    <div
                                        key={x}
                                        className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                                    >
                                        <CheckCircle2 className="text-leaf" />
                                        <span className="text-sm">{x}</span>
                                        <span className="ml-auto text-xs text-white/50">
                                            {["Complete", "In progress", "Upcoming"][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                        <div>
                            <p className="eyebrow">What we do</p>
                            <h2 className="section-title mt-3">
                                Services built around your next move
                            </h2>
                        </div>
                        <Link href="/services" className="font-semibold text-forest">
                            All services ↗
                        </Link>
                    </div>
                    <Carousel items={services} label="Services" type="services" />
                </div>
            </section>
            <Marquee
                items={[
                    "Next.js",
                    "React",
                    "Node.js",
                    "Python",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "AI & Automation",
                ]}
            />
            <section className="px-5 py-20">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="eyebrow">A thoughtful partner</p>
                        <h2 className="section-title mt-3">
                            Good technology starts with understanding people.
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-muted">
                            We bring product thinking and engineering discipline together.
                            From first sketch to dependable launch, we focus on useful
                            outcomes, clear communication and software that can grow with you.
                        </p>
                        <Link
                            href="/about"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-forest"
                        >
                            Meet our approach <ArrowRight size={18} />
                        </Link>
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
                            {["[X]+", "[X]%", "[X]"].map((v, i) => (
                                <div key={i}>
                                    <p className="font-display text-2xl font-semibold text-forest">
                                        {v}
                                    </p>
                                    <p className="mt-1 text-xs text-muted">
                                        {
                                            [
                                                "Projects delivered",
                                                "Client satisfaction",
                                                "Years of experience",
                                            ][i]
                                        }{" "}
                                        <span className="block">Placeholder</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-mint/40 px-5 py-16">
                <div className="mx-auto max-w-7xl">
                    <h2 className="font-display text-3xl font-semibold text-forest">
                        Solutions for the industries shaping tomorrow
                    </h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Healthcare",
                            "Fintech",
                            "Education",
                            "E-commerce",
                            "Enterprise",
                            "Startups",
                        ].map((x, i) => (
                            <Link
                                key={x}
                                href="/solutions"
                                className="group flex items-center justify-between rounded-xl bg-white p-5 transition hover:-translate-y-1"
                            >
                                <span className="font-semibold text-forest">{x}</span>
                                <ArrowUpRight className="transition group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-5 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="eyebrow">Selected work</p>
                            <h2 className="mt-3 font-display text-3xl font-semibold text-forest">
                                Ideas made tangible
                            </h2>
                        </div>
                        <Link href="/portfolio" className="font-semibold text-forest">
                            View portfolio ↗
                        </Link>
                    </div>
                    <Carousel items={services} label="Services" type="services" />
                </div>
            </section>
            <section className="bg-white px-5 py-16">
                <div className="mx-auto max-w-7xl">
                    <h2 className="font-display text-3xl font-semibold text-forest">
                        Why teams choose us
                    </h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {[
                            [
                                "Clarity first",
                                "We make complex decisions understandable and keep priorities visible.",
                            ],
                            [
                                "Built to last",
                                "Maintainability, accessibility and security are part of the work.",
                            ],
                            [
                                "People in the loop",
                                "Frequent collaboration keeps the product aligned with real needs.",
                            ],
                        ].map(([h, p]) => (
                            <div key={h} className="border-t-2 border-leaf pt-5">
                                <h3 className="font-display text-xl font-semibold text-forest">
                                    {h}
                                </h3>
                                <p className="mt-3 leading-7 text-muted">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-5 py-16">
                <div className="mx-auto max-w-7xl">
                    <h2 className="font-display text-3xl font-semibold text-forest">
                        From the journal
                    </h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {posts.slice(0, 3).map((p) => (
                            <PostCard key={p.slug} item={p} />
                        ))}
                    </div>
                    <Link
                        href="/blog"
                        className="mt-6 inline-block font-semibold text-forest"
                    >
                        Read all articles ↗
                    </Link>
                </div>
            </section>
            <section className="px-5 py-12">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-6 font-display text-3xl font-semibold text-forest">
                        A few common questions
                    </h2>
                    <Accordion
                        items={faqs.slice(0, 4).map((f) => ({ q: f.q, a: f.a }))}
                    />
                    <Link
                        href="/faqs"
                        className="mt-6 inline-block font-semibold text-forest"
                    >
                        Visit FAQs ↗
                    </Link>
                </div>
            </section>
            <CTA />
        </>
    );
}
