"use client"
import './dropdown.css';
import { useEffect, useRef, useState } from "react";

interface IDropdown {
    icon?: JSX.Element;
    title: string;
    options: {
        name: string;
        label: string;
    }[];
    selected?: {
        name: string;
        label: string;
    } | null;
    onClick?: (item: string) => void;
    className?: string;
}

const Dropdown: React.FC<IDropdown> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const {title, options, selected, icon, className, onClick} = props;

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (!buttonRef.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }

        window.addEventListener('click', outsideClick);
        return () => window.removeEventListener('click', outsideClick)

    }, [])

    return (
        <div className={`block ${className}`}>
            <div className="relative">
                <button ref={buttonRef} onClick={() => setIsOpen(open => !open)} className={`dropdown-btn ${!icon && 'arrow'} text-left flex gap-2 items-center w-full`}>
                {!!icon ? (
                    <div>{icon}</div>
                ) : (
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium mr-3">{selected ? selected.label : title}</span>
                )}
                </button>
                <div className={`dropdown-menu overflow-auto outline-none ${isOpen ? 'open' : ''}`}>
                    <span className="dropdown-item text-lg bg-coolGray-50 text-center !cursor-text !font-semibold">{title}</span>
                    {options.map((option) => (
                        <button onClick={() => onClick?.(option.name)} className={`dropdown-item text-left ${selected?.name === option.name && '!bg-gray-50'}`} key={option.name}>
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;