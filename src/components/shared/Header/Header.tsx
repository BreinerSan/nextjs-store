import Link from "next/link";

export function Header() {
	console.log("Header");
return (
	<header>
			<nav>
				<Link href="/">
					<li>Home</li>
				</Link>

				<Link href="/store">
					<li>Store</li>
				</Link>
			</nav>
		</header>
  );
}