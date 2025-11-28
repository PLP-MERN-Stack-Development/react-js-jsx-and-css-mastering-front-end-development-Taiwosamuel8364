import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.title - Card title (optional)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hoverable - Whether the card has hover effect
 * @returns {JSX.Element} - Card component
 */
const Card = ({
  children,
  title,
  className = "",
  hoverable = false,
  ...rest
}) => {
  const baseClasses =
    "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden";
  const hoverClasses = hoverable
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    : "";
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses} {...rest}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
};

export default Card;
