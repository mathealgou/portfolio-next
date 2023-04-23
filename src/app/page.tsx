import styles from "./page.module.css";
// * Components
import PageTitle from "@/components/PageTitle";
import NavigationButton from "@/components/NavigationButton";

export default function Home() {
	return (
		<main className={styles.main}>
			<PageTitle title="Matheus Goulart" tagline="Developer" />
			<div>
				<NavigationButton
					href="/projects"
					icon="/icons/projects.svg"
					text="Projects"
					animationDelay={0.1}
				/>
				<NavigationButton
					href="https://www.linkedin.com/in/matheus-goulart-815661210/"
					icon="/icons/linkedin.svg"
					text="LinkedIn"
					animationDelay={0.2}
				/>
				<NavigationButton
					href="/experience"
					icon="/icons/experience.svg"
					text="Experience"
					animationDelay={0.3}
				/>
			</div>
		</main>
	);
}
