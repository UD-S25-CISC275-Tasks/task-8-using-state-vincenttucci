import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(d6());
    const [right, setRight] = useState<number>(d6());

    const rollDiceLeft = () => setLeft(d6());
    const rollDiceRight = () => setRight(d6());

    let output = "";
    if (left === 1 && right === 1) { //snake eyes is both dice = 1
            output = "Lose";
        } else {
            output = "Win";
        }
    }

    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <span data-testid="right-die">{right}</span>
            <div>{output}</div>
            <Button onClick={rollDiceLeft}>Roll Left</Button>
            <Button onClick={rollDiceRight}>Roll Right</Button>
        </div>
    );
}
