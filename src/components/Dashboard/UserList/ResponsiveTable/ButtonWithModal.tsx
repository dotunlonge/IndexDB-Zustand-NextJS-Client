import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/ButtonWithModal.module.scss';
import { ButtonWithModalComponentProps }  from "@/utils/types/components";
/**
 * A component that renders a button which, when clicked, toggles the visibility of a floating content element.
 * The floating content's position is dynamically adjusted based on the button's position to ensure it remains
 * properly aligned when scrolling or resizing the window.
 *
 * @component
 * @param {ButtonWithModalComponentProps} {
 *   btnClassName, - CSS class for the button element
 *   buttonContent, - Content to be displayed inside the button
 *   modalContent, - Content to be displayed inside the floating element
 *   type - A string that indicates the type of button, which may affect styling
 * }
 * @returns {React.ReactElement}
 */
const ButtonWithModal: React.FC<ButtonWithModalComponentProps> = ({
  btnClassName,
  buttonContent,
  modalContent,
  type,
}) => {

  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  /**
    * Updates the position state for the floating content based on the button's current position.
    */
  const updatePosition = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: buttonRect.bottom,
        left: buttonRect.left,
      });
    }
  };

  /**
   * Toggles the visibility of the floating content and updates its position if becoming visible.
   * @param {React.MouseEvent<HTMLButtonElement>} e - The event object from the click event.
   */
  const toggleComponent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setComponentVisible((prev) => {
      if (!prev) {
        updatePosition();
      }
      return !prev;
    });
  };

  /** Closes the floating content and hides it from view. */
  const onClose = () => setComponentVisible(false);

  /**
  * Adds or removes event listeners for scroll and resize events to adjust the position of the floating content.
  */
  useEffect(() => {
    // Add event listeners when the component is visible
    if (isComponentVisible) {
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isComponentVisible]);

  // listen for table scroll
  useEffect(() => {

  const responsiveTable = document.getElementById('responsive-table');

  // Define the function that updates the position of the floating component
  const updatePositionWithScroll = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      // Get the scroll position of the table
      const tableScrollY = responsiveTable ? responsiveTable.scrollTop : 0;
      const tableScrollX = responsiveTable ? responsiveTable.scrollLeft : 0;

      setPosition({
        top: buttonRect.top + tableScrollY,
        left: buttonRect.left,
      });
    }
  };

  // Add event listeners when the component is visible
  if (isComponentVisible && responsiveTable) {
    responsiveTable.addEventListener('scroll', updatePositionWithScroll);
    window.addEventListener('resize', updatePositionWithScroll);
  }

  // Clean up event listeners
  return () => {
    if (responsiveTable) {
      responsiveTable.removeEventListener('scroll', updatePositionWithScroll);
    }
    window.removeEventListener('resize', updatePositionWithScroll);
  };
}, [isComponentVisible]);


/**
  * Adjusts inline styles for the floating content based on its 'type'.
  * This ensures it's positioned correctly relative to the button.
  */
  return (
    <>
      <button ref={buttonRef} className={btnClassName} onClick={toggleComponent}>
        {buttonContent}
      </button>
      {isComponentVisible && (
        <div style={{
          position: 'fixed',
          top: type === 'filter' ? `calc(${position.top }px + 2em` : `calc(${position.top }px - 2em`,
          left: type === 'filter' ? `calc(${position.left }px - 10em` : `calc(${position.left }px - 7em`,
          zIndex: 1, // Ensure it's above other content; adjust as necessary
        }} onClick={onClose}>
          <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={onClose}
          >
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonWithModal;
