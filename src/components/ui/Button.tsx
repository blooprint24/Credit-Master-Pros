import React from 'react';
import { motion } from 'framer-motion';

// Simplified props to avoid framer-motion type conflicts in build
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    [key: string]: any; // Allow any props including framer-motion ones
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    style,
    ...props
}) => {
    const getDynamicStyle = () => {
        let baseStyle: React.CSSProperties = {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            cursor: 'pointer',
            border: '1px solid transparent', // explicit border for outline to work
        };

        if (size === 'sm') { baseStyle.height = '36px'; baseStyle.padding = '0 12px'; baseStyle.fontSize = '0.875rem'; }
        if (size === 'md') { baseStyle.height = '44px'; baseStyle.padding = '0 24px'; baseStyle.fontSize = '1rem'; }
        if (size === 'lg') { baseStyle.height = '56px'; baseStyle.padding = '0 32px'; baseStyle.fontSize = '1.125rem'; }

        if (variant === 'primary') {
            baseStyle.backgroundColor = 'var(--color-primary)';
            baseStyle.color = 'white';
            baseStyle.boxShadow = 'var(--shadow-md)';
        } else if (variant === 'secondary') {
            baseStyle.backgroundColor = 'var(--color-secondary)';
            baseStyle.color = 'white';
            baseStyle.boxShadow = 'var(--shadow-gold)';
        } else if (variant === 'outline') {
            baseStyle.backgroundColor = 'transparent';
            baseStyle.borderColor = 'var(--color-primary)';
            baseStyle.color = 'var(--color-primary)';
        } else if (variant === 'ghost') {
            baseStyle.backgroundColor = 'transparent';
            baseStyle.color = 'var(--color-primary)';
        }

        return baseStyle;
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            style={{ ...getDynamicStyle(), ...style }}
            className={className}
            {...props as any}
        >
            {children}
        </motion.button>
    );
};

export default Button;
