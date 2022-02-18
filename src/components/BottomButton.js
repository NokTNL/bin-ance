import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./BottomButton.css";

export default function BottomButton() {
  return (
    <a className="bottom-button" href="https://github.com/NokTNL/bin-ance">
      <button>Proceed</button>
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
}
