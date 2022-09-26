import { h } from 'preact'

export default function Banner({ messages }) {
    const greeting = messages[(Math.floor(Math.random() * 4))];
    return (
        <h3>{greeting}! Thank you for visiting!</h3>
    );
}