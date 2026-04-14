import { Button } from "../button";

export function Footer() {
  return (
    <footer className="p-5 text-sm text-gray-500 border-t justify-center items-center flex">
      <div className="flex justify-between items-center w-[70%]">
        <span>
          Copyright © 2026 Marcus Gajozo. <br />
          Todos os direitos reservados.
        </span>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Button iconName="github" variant="ghost" />
          <Button iconName="linkedin" variant="ghost" />
        </div>
      </div>
    </footer>
  );
}
