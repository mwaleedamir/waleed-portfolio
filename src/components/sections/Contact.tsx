"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { profile, socials } from "@/data/profile";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetForm,
  setStatus,
  updateField,
  type ContactForm,
} from "@/store/slices/contactSlice";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

const projectTypes = [
  { value: "mobile", label: "Mobile app" },
  { value: "web", label: "Website / Web app" },
  { value: "fullstack", label: "Full-stack product" },
  { value: "other", label: "Something else" },
];

export function Contact() {
  const dispatch = useAppDispatch();
  const { form, status } = useAppSelector((s) => s.contact);

  const onChange =
    (field: keyof ContactForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      dispatch(updateField({ field, value: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setStatus("submitting"));

    // Demo: simulate an async send. Wire this to your email API / service.
    await new Promise((r) => setTimeout(r, 1200));

    dispatch(setStatus("success"));
    setTimeout(() => dispatch(resetForm()), 4000);
  };

  const submitting = status === "submitting";
  const success = status === "success";

  return (
    <Section id="contact" soft>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: pitch + contact info */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="text-gradient">great together</span>
              </>
            }
            description="Have a project in mind or just want to say hi? Drop me a message and I'll get back to you within 24 hours."
          />

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <Mail className="h-4 w-4" />
              </span>
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-muted">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <MapPin className="h-4 w-4" />
              </span>
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          {success ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" />
              <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
              <p className="mt-2 text-sm text-muted">
                Thanks for reaching out, {form.name || "there"}. I&apos;ll be in
                touch soon.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={onChange("name")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={onChange("email")}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={onChange("projectType")}
                  className={inputClasses}
                >
                  {projectTypes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={onChange("message")}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
