import React from "react";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const MoreSection = ({ items }) => {
  return (
    <li className="more">
      MORE<FontAwesomeIcon icon={faChevronDown} />

      <ul className="more-items">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </li>
  );
};

export default MoreSection;
