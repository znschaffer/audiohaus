import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../content";

type FormValues = {
  name: string;
  email: string;
  eventType: string;
  date: Date;
  venue: string;
  notes: string;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await emailjs.send(
        CONTACT.emailjs.serviceId,
        CONTACT.emailjs.templateId,
        {
          name: data.name,
          email: data.email,
          event_type: data.eventType,
          date: data.date,
          venue: data.venue,
          notes: data.notes,
        },
        CONTACT.emailjs.publicKey,
      );
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2" id="contact">
      {/* Info column */}
      <div className="p-14 md:p-20 border-b border-rule md:border-b-0 md:border-r border-rule">
        <h2 className="font-bebas text-[96px] leading-[0.88] mb-12 ">
          {CONTACT.heading[0]}
          <br />
          {CONTACT.heading[1]}
          <br />
          <em className="font-normal text-outline not-italic block">
            {CONTACT.heading[2]}
          </em>
        </h2>
        {CONTACT.details.map((d) => (
          <div key={d.label} className="mb-8 last:mb-0">
            <div className="text-[10px] tracking-[0.25em] uppercase text-grey mb-1.5">
              {d.label}
            </div>
            <div className="text-[15px] text-white">
              {d.href ? (
                <a
                  href={d.href}
                  className="text-white no-underline border-b border-[#333] transition-colors hover:border-white"
                >
                  {d.value}
                </a>
              ) : (
                d.value
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Form column */}
      <div className="p-14 md:p-20">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none"
              type="text"
              placeholder="Your name or organization"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="block mt-1.5 text-[10px] tracking-wider text-[#d44]">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none"
              type="email"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="block mt-1.5 text-[10px] tracking-wider text-[#d44]">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Event type */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="eventType"
            >
              Event Type
            </label>
            <select
              id="eventType"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none"
              {...register("eventType", {
                required: "Please select an event type",
              })}
            >
              <option value="" className="bg-black">
                Select type...
              </option>
              {CONTACT.eventTypes.map((t) => (
                <option key={t} value={t} className="bg-black">
                  {t}
                </option>
              ))}
            </select>
            {errors.eventType && (
              <span className="block mt-1.5 text-[10px] tracking-wider text-[#d44]">
                {errors.eventType.message}
              </span>
            )}
          </div>

          {/* Date */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="date"
            >
              Date
            </label>
            <input
              id="date"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none"
              type="date"
              placeholder="MM/DD/YYYY"
              {...register("date")}
            />
          </div>

          {/* Venue */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="venue"
            >
              Venue
            </label>
            <input
              id="venue"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none"
              type="text"
              placeholder="Venue name or address"
              {...register("venue")}
            />
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-grey block mb-2.5"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              id="notes"
              className="w-full bg-transparent border-none border-b border-[#2a2a2a] text-white font-mono text-[13px] font-light py-2.5 outline-none transition-colors focus:border-white appearance-none resize-none h-20"
              placeholder="Expected attendance, gear needs, anything else..."
              {...register("notes")}
            />
          </div>

          <button
            className="bg-white text-black border-none px-10 py-4 font-mono text-[11px] tracking-[0.2em] uppercase cursor-crosshair transition-all hover:enabled:bg-transparent hover:enabled:text-white hover:enabled:outline hover:enabled:outline-white disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>

          {status === "sent" && (
            <p className="mt-5 text-[11px] tracking-wider text-grey">
              ✓ Inquiry sent — we'll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="mt-5 text-[11px] tracking-wider text-[#d44]">
              Something went wrong. Email us directly at{" "}
              <a
                href={`mailto:${CONTACT.details[0].value}`}
                className="text-[#d44] underline"
              >
                {CONTACT.details[0].value}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
