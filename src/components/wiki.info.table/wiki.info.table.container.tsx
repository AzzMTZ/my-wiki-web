import React, { useEffect, useState } from "react";
import { Topic } from "../../schemas/topics";
import { Wiki } from "../../schemas/wikis";
import WikiInfoTableView from "./wiki.info.table.view";
import * as myWikiService from "../../services/my.wiki";
import { EMPTY_FUNC } from "../../global.consts";

const WikiInfoTableContainer: React.FC<{ wiki: Wiki }> = ({ wiki }) => {
	const [homeTopic, setHomeTopic] = useState<Topic | null>(null);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService.getTopicOfWiki(wiki.value, "0", cancelTokenSource.token).then(setHomeTopic).catch(EMPTY_FUNC);

		return () => {
			cancelTokenSource.cancel();
		};
	}, [wiki]);

	return <WikiInfoTableView homeTopic={homeTopic} />;
};

export default WikiInfoTableContainer;
