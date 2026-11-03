"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { serviceOptions, siteConfig } from "@/data/site";

const initialValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Enter a valid email address, like name@company.com.";
  if (!v.service) e.service = "Choose the service you need.";
  if (v.message.trim().length < 20)
    e.message = "Tell us a little more: at least 20 characters.";
  return e;
}

function Field({ name, label, error, optional, children }) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="mb-1.5 block text-sm font-semibold text-brand-deep"
      >
        {label}
        {optional && (
          <span className="ml-1 font-normal text-muted">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`contact-${name}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700"
        >
          <AlertCircle size={15} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

const steps = [
  "You send us the details of your project.",
  "We review them and book a call to ask questions.",
  "You receive a clear proposal with scope and next steps.",
];

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const bind = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    onChange: (e) => {
      const next = { ...values, [name]: e.target.value };
      setValues(next);
      if (errors[name])
        setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
    },
    onBlur: () =>
      setErrors((prev) => ({ ...prev, [name]: validate(values)[name] })),
    className: `w-full rounded-lg border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-deep/30 ${
      errors[name] ? "border-red-600" : "border-brand-deep/20"
    }`,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok)
        throw new Error(data.message || "We could not send your message.");
      setValues(initialValues);
      setStatus("success");
    } catch (err) {
      setServerError(
        err.message || "We could not send your message. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-y bg-brand-mint/50"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            title="Tell us what you want to build."
            text="Share a few details and we will get back to you with questions and next steps."
          />

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Mail size={20} aria-hidden="true" className="text-brand-deep" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-deep underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink/80">
              <MapPin
                size={20}
                aria-hidden="true"
                className="text-brand-deep"
              />
              {siteConfig.location}
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold">What happens next</h3>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-ink/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-deep text-xs font-bold text-white">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-10">
            {status === "success" ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="py-10 text-center outline-none"
              >
                <CheckCircle2
                  size={44}
                  aria-hidden="true"
                  className="mx-auto text-brand-deep"
                />
                <h3 className="mt-5 text-2xl font-semibold">Message sent</h3>
                <p className="mx-auto mt-3 max-w-sm text-muted">
                  Thanks for getting in touch. We will review your details and
                  reply by email.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Full name" error={errors.name}>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      {...bind("name")}
                    />
                  </Field>
                  <Field name="email" label="Email" error={errors.email}>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      {...bind("email")}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="company" label="Company" optional>
                    <input
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      {...bind("company")}
                    />
                  </Field>
                  <Field
                    name="service"
                    label="Service needed"
                    error={errors.service}
                  >
                    <div className="relative">
                      <select
                        {...bind("service")}
                        className={`${bind("service").className} appearance-none pr-10`}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
                      />
                    </div>
                  </Field>
                </div>

                <Field
                  name="message"
                  label="Project details"
                  error={errors.message}
                >
                  <textarea
                    rows={5}
                    placeholder="What are you building, who is it for and when do you need it?"
                    {...bind("message")}
                  />
                </Field>

                {/* Honeypot field: hidden from people, filled in by simple bots */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="contact-website">
                    Leave this field empty
                  </label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={(e) =>
                      setValues({ ...values, website: e.target.value })
                    }
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                  >
                    <AlertCircle
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-70 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={18}
                        aria-hidden="true"
                        className="animate-spin"
                      />
                      Sending&hellip;
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
