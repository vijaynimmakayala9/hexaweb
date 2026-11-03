"use client";
import { useState } from "react";
const initial = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
  website: "",
};
export default function ContactForm() {
  const [v, setV] = useState(initial),
    [errors, setErrors] = useState({}),
    [status, setStatus] = useState("idle");
  function change(e) {
    setV({ ...v, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }
  async function submit(e) {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email))
      er.email = "Enter a valid email address.";
    if (v.details.trim().length < 10)
      er.details = "Please share at least 10 characters about your project.";
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!r.ok) throw new Error("Request failed");
      setStatus("success");
      setV(initial);
    } catch {
      setStatus("error");
    }
  }
  const fields = [
    ["name", "Name", "text", true],
    ["email", "Email", "email", true],
    ["company", "Company", "text", false],
  ];
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {fields.map(([name, label, type, required]) => (
        <div key={name}>
          <label htmlFor={name} className="mb-2 block text-sm font-semibold">
            {label}
            {required ? " *" : ""}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={v[name]}
            onChange={change}
            required={required}
            aria-invalid={!!errors[name]}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
            className="min-h-12 w-full rounded-xl border border-gray-200 px-4 focus:border-forest"
          />
          {errors[name] && (
            <p
              id={`${name}-error`}
              role="alert"
              className="mt-1 text-sm text-red-600"
            >
              {errors[name]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={v.service}
          onChange={change}
          className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4"
        >
          <option value="">Select a service</option>
          {[
            "Custom software",
            "Web application",
            "Mobile app",
            "UI/UX design",
            "Cloud & DevOps",
            "AI & Automation",
            "Other",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-semibold">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          value={v.budget}
          onChange={change}
          className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4"
        >
          <option value="">Select a range</option>
          {["Under $10k", "$10k–$25k", "$25k–$50k", "$50k+", "Not sure"].map(
            (x) => (
              <option key={x}>{x}</option>
            ),
          )}
        </select>
      </div>
      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-semibold">
          Project details *
        </label>
        <textarea
          id="details"
          name="details"
          rows="5"
          value={v.details}
          onChange={change}
          aria-invalid={!!errors.details}
          className="w-full rounded-xl border border-gray-200 p-4"
        />
        {errors.details && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.details}
          </p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          value={v.website}
          onChange={change}
        />
      </div>
      <button
        disabled={status === "loading"}
        className="min-h-12 rounded-full bg-forest px-7 font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send project inquiry"}
      </button>
      {status === "success" && (
        <p role="status" className="text-sm text-forest">
          Thanks! Your inquiry has been received.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
