import { useState, useEffect, useCallback } from 'react';
import './Snowman.css';
import QUOTES from './quotes';

/**
 * Snowman — A cute animated snowman that displays random speech bubbles.
 * Built entirely with CSS for the visuals and animations.
 */
const Snowman = () => {
    const [quote, setQuote] = useState('');
    const [showBubble, setShowBubble] = useState(false);

    // Pick a random quote, show the speech bubble, then hide it after 4s
    const showRandomQuote = useCallback(() => {
        const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        setQuote(randomQuote);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4000);
    }, []);

    useEffect(() => {
        // Show a quote immediately on page load
        showRandomQuote();

        // Continue cycling through quotes every 6 seconds
        const interval = setInterval(showRandomQuote, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="snowman-container">
            {/* Speech bubble sits outside the snowman div so it doesn't wobble */}
            {showBubble && <div className="speech-bubble">{quote}</div>}

            {/* Add 'talking' class when a quote is active for the wobble animation */}
            <div className={`snowman ${showBubble ? 'talking' : ''}`}>
                {/* Bottom snowball (largest) */}
                <div className="snow-body-bottom"></div>

                {/* Middle snowball with coat buttons */}
                <div className="snow-body-middle">
                    <div className="button-one"></div>
                    <div className="button-two"></div>
                </div>

                {/* Head with facial features and top hat */}
                <div className="snow-head">
                    <div className="eye-left"></div>
                    <div className="eye-right"></div>
                    <div className="carrot-nose"></div>
                    <div className="hat">
                        <div className="hat-brim"></div>
                        <div className="hat-top"></div>
                    </div>
                </div>

                {/* Accessories */}
                <div className="scarf"></div>
                <div className="arm-left"></div>
                <div className="arm-right"></div>
            </div>
        </div>
    );
};

export default Snowman;
