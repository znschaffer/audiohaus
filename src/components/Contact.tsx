import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../content";

type FormValues = {
  name: string;
  email: string;
  eventType: string;
  dateVenue: string;
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
          from_name: data.name,
          from_email: data.email,
          event_type: data.eventType,
          date_venue: data.dateVenue,
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
    <section className="contact" id="contact">
      <style>{`
        .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .contact_info {
          padding: 80px 56px;
          border-right: var(--rule);
        }

        .contact_heading {
          font-family: "Bebas Neue", sans-serif;
          font-size: 96px;
          line-height: 0.88;
          margin-bottom: 48px;
          letter-spacing: 0.01em;
        }

        .contact_heading em {
          font-style: normal;
          display: block;
          color: transparent;
          -webkit-text-stroke: 1px var(--white);
        }

        .contact_detail {
          margin-bottom: 32px;
        }

        .contact_detailLabel {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 6px;
        }

        .contact_detailValue {
          font-size: 15px;
          color: var(--white);
        }

        .contact_detailValue a {
          color: var(--white);
          text-decoration: none;
          border-bottom: 1px solid #333;
          transition: border-color 0.2s;
        }

        .contact_detailValue a:hover {
          border-color: var(--white);
        }

        .contact_formCol {
          padding: 80px 56px;
        }

        .contact_group {
          margin-bottom: 32px;
        }

        .contact_label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--grey);
          display: block;
          margin-bottom: 10px;
        }

        .contact_input,
        .contact_select,
        .contact_textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #2a2a2a;
          color: var(--white);
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          font-weight: 300;
          padding: 10px 0;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }

        .contact_select option {
          background: var(--black);
        }

        .contact_input:focus,
        .contact_select:focus,
        .contact_textarea:focus {
          border-bottom-color: var(--white);
        }

        .contact_textarea {
          resize: none;
          height: 80px;
        }

        .contact_error {
          display: block;
          margin-top: 6px;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: #d44;
        }

        .contact_submit {
          background: var(--white);
          color: var(--black);
          border: none;
          padding: 16px 40px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: crosshair;
          transition: background 0.2s, color 0.2s, outline 0.2s;
          margin-top: 8px;
        }

        .contact_submit:hover:not(:disabled) {
          background: transparent;
          color: var(--white);
          outline: 1px solid var(--white);
        }

        .contact_submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .contact_successMsg {
          margin-top: 20px;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--grey);
        }

        .contact_errorMsg {
          margin-top: 20px;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #d44;
        }

        .contact_errorMsg a {
          color: #d44;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .contact { grid-template-columns: 1fr; }
          .contact_info { border-right: none; border-bottom: var(--rule); }
        }
      `}</style>
      {/* Info column */}
      <div className="contact_info">
        <h2 className="contact_heading">
          {CONTACT.heading[0]}
          <br />
          {CONTACT.heading[1]}
          <br />
          <em>{CONTACT.heading[2]}</em>
        </h2>
        {CONTACT.details.map((d) => (
          <div key={d.label} className="contact_detail">
            <div className="contact_detailLabel">{d.label}</div>
            <div className="contact_detailValue">
              {d.href ? <a href={d.href}>{d.value}</a> : d.value}
            </div>
          </div>
        ))}
      </div>

      {/* Form column */}
      <div className="contact_formCol">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <div className="contact_group">
            <label className="contact_label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="contact_input"
              type="text"
              placeholder="Your name or organization"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="contact_error">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="contact_group">
            <label className="contact_label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="contact_input"
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
              <span className="contact_error">{errors.email.message}</span>
            )}
          </div>

          {/* Event type */}
          <div className="contact_group">
            <label className="contact_label" htmlFor="eventType">
              Event Type
            </label>
            <select
              id="eventType"
              className="contact_select"
              {...register("eventType", {
                required: "Please select an event type",
              })}
            >
              <option value="">Select type...</option>
              {CONTACT.eventTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.eventType && (
              <span className="contact_error">{errors.eventType.message}</span>
            )}
          </div>

          {/* Date & venue */}
          <div className="contact_group">
            <label className="contact_label" htmlFor="dateVenue">
              Date &amp; Venue
            </label>
            <input
              id="dateVenue"
              className="contact_input"
              type="text"
              placeholder="MM/DD/YYYY · Venue name or address"
              {...register("dateVenue")}
            />
          </div>

          {/* Notes */}
          <div className="contact_group">
            <label className="contact_label" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              className="contact_textarea"
              placeholder="Expected attendance, gear needs, anything else..."
              {...register("notes")}
            />
          </div>

          <button
            className="contact_submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>

          {status === "sent" && (
            <p className="contact_successMsg">
              ✓ Inquiry sent — we'll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="contact_errorMsg">
              Something went wrong. Email us directly at{" "}
              <a href={`mailto:${CONTACT.details[0].value}`}>
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
