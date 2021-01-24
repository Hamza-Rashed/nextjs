import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <nav>
                <Link href="/">
                    <a>Home | </a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </div>
    )
}