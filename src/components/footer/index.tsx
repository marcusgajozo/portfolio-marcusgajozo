import { Button } from "../button";

export function Footer() {
  return (
    <footer className="p-5 text-sm border-t justify-center items-center flex">
      <div className="flex flex-wrap-reverse justify-center sm:justify-between items-center w-full max-w-4xl gap-4">
        <span className="text-xs text-center sm:text-left">
          Copyright © 2026 Marcus Gajozo. <br />
          Todos os direitos reservados.
        </span>

        <div className="flex items-center justify-center gap-1">
          <Button iconName="github" variant="ghost" />
          <Button iconName="linkedin" variant="ghost" />
        </div>
      </div>
    </footer>
  );
}
