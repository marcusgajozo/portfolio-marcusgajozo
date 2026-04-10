import { Icon } from "../icon";

export function Sidebar() {
  return (
    <nav>
      <ul className="flex flex-col gap-1">
        <li>
          <div>
            <Icon name="home" />
            Home
          </div>
        </li>
        <li>
          <div>
            <Icon name="folder" />
            Projects
          </div>
        </li>
        <li>
          <div>
            <Icon name="suitcase" />
            Experience
          </div>
        </li>
        <li>
          <div>
            <Icon name="mail-right" />
            Contact
          </div>
        </li>
      </ul>
    </nav>
  );
}
