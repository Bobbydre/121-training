export default function Form () {
    return (
        <form>
            <input type="email" className="email-input" placeholder="Enter your email" required />
            <button type="submit" className="waitlist-button ">Join Waitlist</button>
        </form>
    );
}