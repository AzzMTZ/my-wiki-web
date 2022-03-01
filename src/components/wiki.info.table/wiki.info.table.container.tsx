import React, { useEffect, useState } from "react";
import { Topic } from "../../schemas/topics";
import { Wiki } from "../../schemas/wikis";
import WikiInfoTableView from "./wiki.info.table.view";
import * as myWikiService from "../../services/my.wiki";

const WikiInfoTableContainer: React.FC<{ wiki: Wiki }> = ({ wiki }) => {
	const [homeTopic, setHomeTopic] = useState<Topic | null>(null);
	const [topicsCount, setTopicsCount] = useState<number>(0);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService
			.getTopicOfWiki(wiki.value, "0", cancelTokenSource.token)
			.then(setHomeTopic)
			.catch(() => setHomeTopic(null));

		return () => {
			cancelTokenSource.cancel();
		};
	}, [wiki]);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService
			.getWikiSize(wiki.value, cancelTokenSource.token)
			.then(setTopicsCount)
			.catch(() => setTopicsCount(0));

		return () => {
			cancelTokenSource.cancel();
		};
	}, [wiki]);

	return <WikiInfoTableView homeTopic={homeTopic} topicsCount={topicsCount}/>;
};

export default WikiInfoTableContainer;
