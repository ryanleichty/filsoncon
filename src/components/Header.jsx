import { Button } from "./Button";
import { FilsonconLogo } from "./FilsonconLogo";

export function Header() {
  return (
    <header className="flex h-nav items-center justify-between px-8">
      <div>
        <FilsonconLogo />
      </div>
      <nav className="flex items-center gap-8">
        <a className="font-bold uppercase tracking-wider">Speakers</a>
        <a className="font-bold uppercase tracking-wider">Schedule</a>
        <a className="font-bold uppercase tracking-wider">Location</a>
        <Button>Register</Button>
      </nav>
    </header>
  );
}
