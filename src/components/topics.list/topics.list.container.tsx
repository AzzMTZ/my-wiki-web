import { useEffect, useState } from "react";
import { EXAMPLE_WIKI } from "../../global.consts";
import { Topic } from "../../schemas/topics";
import * as myWikiService from "../../services/my.wiki";
import TopicsListView from "./topics.list.view";

const TopicsListContainer = () => {
	const [topics, setTopics] = useState<{ [key: string]: Topic }>({});
	const [retrieved, setRetrieved] = useState(false);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();
		myWikiService
			.getTopicsOfWiki(EXAMPLE_WIKI.id, cancelTokenSource.token)
			.then(topics => setTopics(topics))
			.catch(() => setTopics({}))
			.finally(() => setRetrieved(true));

		return () => {
			cancelTokenSource.cancel();
		};
	}, []);

	return <TopicsListView topics={topics} retrieved={retrieved} />;
};

export default TopicsListContainer;
