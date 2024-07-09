import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faBuilding,
  faHandsHelping,
  faSmile,
  faShieldAlt,
  faTree,
  faWallet,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  dollar: faDollarSign,
  building: faBuilding,
  handsHelping: faHandsHelping,
  smile: faSmile,
  shieldAlt: faShieldAlt,
  tree: faTree,
  wallet: faWallet,
  creditCard: faCreditCard,
};

const AttributeSection = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 w-64 h-36 m-2 shadow-md">
      <FontAwesomeIcon icon={iconMap[icon]} className="text-orange-500 text-4xl mb-2" />
      <div className="text-center text-sm font-semibold">{text}</div>
    </div>
  );
};

export default AttributeSection;
