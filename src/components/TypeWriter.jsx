import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words, wait = 3000 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const type = () => {
            const current = wordIndex % words.length;
            const fullText = words[current];
            const updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updateText);
            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && updateText === fullText) {
                setTimeout(() => setIsDeleting(true), wait);
            } else if (isDeleting && updateText === '') {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(type, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, words, wait, typingSpeed, wordIndex]);

    return (
        <div className="TypeWriter">
            <span className="text">{text}</span>
        </div>
    );
};

export default TypeWriter;
