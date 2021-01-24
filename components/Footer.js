import Link from 'next/link'

export default function Footer(props) {
    return (
        <footer>
            <ul>
                {props.comic.map((n) =>
                    <Link key={n.e} href="/comic/[comic].js" as={`/comic/${n.e}`}>
                        <a>#{n.e} | </a>
                    </Link>
                )}
            </ul>
        </footer>
    )
}