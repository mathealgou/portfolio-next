export const getRepos = async () => {
	const response = await fetch(
		"https://api.github.com/users/mathealgou/repos",
		{
			headers: {
				Accept: "application/vnd.github.v3+json",
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			},
		}
	);

	const repos = await response.json();

	const processedRepos = await Promise.all(
		repos.map(async (repo: any) => {
			if (!repo.description) return;
			const languagesResponse = await fetch(
				`https://api.github.com/repos/mathealgou/${repo.name}/languages`,
				{
					headers: {
						Accept: "application/vnd.github.v3+json",
						Authorization: `token ${process.env.GITHUB_TOKEN}`,
					},
				}
			);

			const languages = await languagesResponse.json();

			return {
				name: repo.name,
				description: repo.description,
				languages,
				createdAt: repo.created_at,
			};
		})
	).then((repos) => repos.filter((repo) => repo));

	return processedRepos;
};
