import React, { useRef } from 'react';
import styles from "@/styles/components/PageSizeSelector.module.scss";
import Image from "next/image";
import type { PageSizeSelectorProps } from "@/utils/types/components";

/**
 * PageSizeSelector component - Renders a custom select dropdown.
 *
 * @component
 * @param {SelectComponentProps} props - The props for the SelectListCount component.
 * @param {string} [props.defaultValue] - The default value of the select component.
 * @param {(value: string) => void} props.onChange - Function to handle the change event.
 * @param {string} [props.id] - The ID of the select component.
 * @param {string} [props.name] - The name of the select component.
 * @returns {React.ReactElement} A custom styled select dropdown element.
 */
const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  options,
  defaultValue,
  onChange,
  id,
  name
}) => {

  const ref = useRef<HTMLSelectElement>(null);

  return (
    <div className={styles.selectWrapper}>
      <select
      id={id}
      name={name}
        defaultValue={defaultValue}
        className={styles.select}
        onChange={onChange}
        ref={ref}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Image src={"/down-arrow.svg"} alt='down-arrow' height={30} width={30} className={styles.downArrow} />
    </div>
  );
};

export default PageSizeSelector;
