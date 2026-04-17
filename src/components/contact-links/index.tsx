import Link from "next/link";
import { Icon } from "../icon";

// TODO: criar uma constante para os links de contato

export function ContactLinks() {
  return (
    <div className="flex gap-4 mt-4 font-medium">
      <Link
        href="https://www.linkedin.com/in/marcusgajozo/"
        target="_blank"
        className="flex gap-1 items-center"
      >
        <Icon name="linkedin" />
        Linkedin
      </Link>
      <Link
        href="https://github.com/marcusgajozo/"
        target="_blank"
        className="flex gap-1 items-center"
      >
        <Icon name="github" strokeWidth={2} />
        Github
      </Link>
      <Link
        href="mailto:marcusgajozo@example.com"
        target="_blank"
        className="flex gap-1 items-center"
      >
        <Icon name="mail-right" />
        E-mail
      </Link>
    </div>
  );
}
