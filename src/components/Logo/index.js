import './logo.css'
import { Link } from 'react-router-dom'
export function Logo() {
    return (
        <Link to="/">
            <h1 className='logo'>Link<span className='logo-text'>Insta</span></h1>
        </Link>
    )
}