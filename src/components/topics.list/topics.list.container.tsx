import { useContext, useEffect, useState } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { Topic } from "../../schemas/topics";
import * as myWikiService from "../../services/my.wiki";
import TopicsListView from "./topics.list.view";

const TopicsListContainer = () => {
	const [topics, setTopics] = useState<{ [key: string]: Topic }>({});
	const [retrieved, setRetrieved] = useState(false);
	const [selectedTopic, selectTopic] = useState<Topic | null>(null);
	const { wiki } = useContext(CurrentWikiContext);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();
		myWikiService
			.getAllTopicsOfWiki(wiki.value, cancelTokenSource.token)
			.then(topics => setTopics(topics))
			.catch(() => setTopics({}))
			.finally(() => setRetrieved(true));

		return () => {
			cancelTokenSource.cancel();
		};
	}, [wiki]);

	return (
		<TopicsListView topics={topics} retrieved={retrieved} selectTopic={selectTopic} selectedTopic={selectedTopic} />
	);
};

export default TopicsListContainer;
