"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export function ContactPageContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedSubject = subject.trim() || `Inquiry from ${name || "Portfolio Visitor"}`;
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(bodyContent)}`;

    setIsSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Interactive Contact Box */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1020]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              {/* Subtle ambient light */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Direct Email Box
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Send a Direct Message
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Fill in the box below to compose and send your message directly to{" "}
                  <span className="font-medium text-slate-200">{siteConfig.email}</span>.
                </p>

                {isSubmitted && (
                  <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    <p className="font-semibold">🚀 Opening your mail client...</p>
                    <p className="mt-1 text-xs text-emerald-300/80">
                      If your mail app didn&apos;t launch automatically, click the direct mail button on the right or copy the email address.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#13192f] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-indigo-500 focus:bg-[#161d36] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#13192f] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-indigo-500 focus:bg-[#161d36] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="DevOps / Cloud Infrastructure Opportunity"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#13192f] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-indigo-500 focus:bg-[#161d36] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Prakriti, I'd like to discuss an opportunity / project regarding..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#13192f] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-indigo-500 focus:bg-[#161d36] focus:outline-none resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full rounded-xl py-4 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.01] hover:shadow-indigo-600/40"
                  >
                    Send to prakritishrestha515@gmail.com
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </form>

              </div>
            </div>
          </div>

          {/* Right Column: Quick Cards & Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-indigo-500/20 bg-[#0c1020]/90 p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MailIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </h3>
                  <p className="text-base font-bold text-white break-all">
                    {siteConfig.email}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141b32] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-indigo-500/40 hover:bg-[#1a2340]"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="h-4 w-4 text-slate-300" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:opacity-90"
                >
                  <MailIcon className="h-4 w-4" />
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c1020]/90 p-5 shadow-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172e]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-200">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-slate-400">Connect with Prakriti Shrestha</p>
                </div>
              </div>
              <ExternalLinkIcon className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
            </a>

            {/* GitHub Card */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c1020]/90 p-5 shadow-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172e]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 border border-white/10 transition-colors group-hover:bg-white group-hover:text-black">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-200">
                    GitHub
                  </h3>
                  <p className="text-xs text-slate-400">Explore open source repositories</p>
                </div>
              </div>
              <ExternalLinkIcon className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
            </a>

            {/* Location & Availability Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0c1020]/90 p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <LocationIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {siteConfig.location}
                  </h3>
                  <p className="text-xs text-slate-400">Available for Remote &amp; Relocation</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#141a30] px-3.5 py-2 text-xs font-medium text-emerald-300 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
