import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function VercelNavigationVariant1({
  dataButtons,
}: {
  dataButtons: Array<{ label: string; href: string; icon?: any }>;
}) {
  const [elementFocused, setElementFocused] = useState<number | null>(null);

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };
  return (
    <nav
      className="flex flex-col sm:flex-row"
      onMouseLeave={() => {
        handleHoverButton(null);
      }}>
      {dataButtons.map((button, index) => (
        <NavLink
          to={button.href}
          className="relative inline-flex items-center gap-2 w-fit whitespace-nowrap rounded px-2 py-1 font-medium text-zinc-200 text-base"
          key={button.label}
          onMouseEnter={() => handleHoverButton(index)}
          type="button">
          {button?.icon}
          {button.label}
          <AnimatePresence>
            {elementFocused === index && (
              <motion.div
                animate={{ opacity: 0.2, scale: 1 }}
                className="z-0 absolute top-0 right-0 bottom-0 left-0 rounded-md bg-neutral-200"
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.95 }}
                layout={true}
                layoutId="focused-element"
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </NavLink>
      ))}
    </nav>
  );
}

export default VercelNavigationVariant1;
