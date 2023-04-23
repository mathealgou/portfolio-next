import styles from "./styles.module.css";
interface Props {
	icon: string;
	text: string;
	href: string;
	animationDelay?: number;
}

export default function NavigationButton({
	icon,
	text,
	href,
	animationDelay,
}: Props) {
	return (
		<a
			href={href}
			className={styles.container}
			style={{ animationDelay: `${animationDelay}s` }}
		>
			<img src={icon} alt={text} className={styles.icon} />
			<span className={styles.text}>{text}</span>
		</a>
	);
}
