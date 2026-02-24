import { CONTACT, SITE } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          border-top: var(--rule);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer p {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--grey);
        }
      `}</style>
      <p>
        &copy; {new Date().getFullYear()} {SITE.name}.{" "}
        {CONTACT.details[1].value}
      </p>
      <p>{SITE.footer}</p>
    </footer>
  );
}
