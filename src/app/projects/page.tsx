// * Components
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";

import styles from "./styles.module.css";

// * Services
import { getRepos } from "@/services/github/getRepos";

export default async function Projects() {
	const projects = await getRepos();
	return (
		<main className={styles.main}>
			<PageTitle title="Projects" />
			<div className={styles.projects}>
				{projects?.map((project) => (
					<ProjectCard
						key={project.name}
						name={project.name}
						description={project.description}
						languages={project.languages}
						createdAt={project.createdAt}
					/>
				))}
			</div>
		</main>
	);
}
