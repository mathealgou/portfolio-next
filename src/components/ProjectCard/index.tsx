import styles from "./styles.module.css";

interface Props {
	name: string;
	description: string;
	languages: object;
	createdAt: string;
}

export default function ProjectCard(project: Props) {
	return (
		<div className={styles.card}>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			<div className={styles.languages}>
				{Object.keys(project.languages).map((language) => (
					<span key={language} className={styles.laguagePill}>
						{language}
					</span>
				))}
			</div>
			<p>{project.createdAt}</p>
		</div>
	);
}
