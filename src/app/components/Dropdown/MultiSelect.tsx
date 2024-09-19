"use client"
import './dropdown.css';
import { useEffect, useRef, useState } from "react";

interface IMultiSelect {
    icon?: JSX.Element;
    title: string;
    options: {
        name: string;
        label: string;
    }[];
    selected?: string[];
    onClick?: (item: string) => void;
    className?: string;
}

const MultiSelect: React.FC<IMultiSelect> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {title, options, selected = [], icon, className, onClick} = props;

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }

        window.addEventListener('click', outsideClick);
        return () => window.removeEventListener('click', outsideClick)

    }, [])

    return (
        <div className={`block ${className}`}>
            <div ref={ref} className="relative">
                <button onClick={() => setIsOpen(open => !open)} className={`dropdown-btn ${!icon && 'arrow'} text-left flex gap-2 items-center w-full`}>
                {!!icon ? (
                    <div>{icon}</div>
                ) : (
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium mr-3">{title}</span>
                )}
                </button>
                <div className={`dropdown-menu overflow-auto outline-none ${isOpen ? 'open' : ''}`}>
                    <span className="dropdown-item text-lg bg-coolGray-50 text-center !cursor-text !font-semibold">{title}</span>
                    {options.map((option) => (
                        <button onClick={() => onClick?.(option.name)} className={`dropdown-item !flex justify-between items-center text-left`} key={option.name}>
                            <span>{option.label}</span>
                            <label className="custom-checkbox">
                                <input type='checkbox' checked={selected.includes(option.name)} onClick={e => e.stopPropagation()} />
                                <span className="checkmark"></span>
                            </label>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MultiSelect;