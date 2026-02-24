import { CONTACT, SITE } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-rule px-10 py-8 flex justify-between items-center">
      <p className="text-[10px] tracking-[0.15em] text-grey">
        &copy; {new Date().getFullYear()} {SITE.name}.{" "}
        {CONTACT.details[1].value}
      </p>
      <p className="text-[10px] tracking-[0.15em] text-grey">{SITE.footer}</p>
    </footer>
  );
}
