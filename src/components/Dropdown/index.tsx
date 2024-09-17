import './dropdown.css';
import { useEffect, useRef, useState } from "react";

interface IDropdown {
    title: string;
    options: {
        name: string;
        value: string;
    }[]
}

const Dropdown: React.FC<IDropdown> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const {title, options} = props;

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
        <div className="block">
            <div className="relative">
                <button ref={buttonRef} onClick={() => setIsOpen(open => !open)} className="dropdown-btn text-left flex gap-2 items-center">
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold mr-3">{title}</span>
                </button>
                <div className={`dropdown-menu max-h-[300px] overflow-auto outline-none ${isOpen ? 'open' : ''}`}>
                    <span className="dropdown-item text-lg bg-coolGray-50 text-center !cursor-text !font-semibold">{title}</span>
                    {options.map((option) => (
                        <button className="dropdown-item text-left" key={option.value}>
                            <span>{option.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;