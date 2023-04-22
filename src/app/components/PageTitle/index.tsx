import styles from "./styles.module.css";

interface Props {
	title: string | undefined;
	tagline?: string | undefined;
}
export default function PageTitle({ title, tagline }: Props) {
	return (
		<div className={styles.titleContainer}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<div className={styles.titleContainer}>
				{tagline ? <h2 className={styles.tagline}>{tagline}</h2> : null}
			</div>
		</div>
	);
}
