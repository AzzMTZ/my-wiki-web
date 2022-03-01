import WikiSelectView from "./wiki.select.view";
import * as myWikiService from "../../services/my.wiki";
import { useState, useEffect, useContext } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { Topic } from "../../schemas/topics";

const WikiSelectContainer = () => {
	const [wikis, setWikis] = useState<{ value: string; label: string }[]>([]);
	const [homeTopic, setHomeTopic] = useState<Topic | null>(null);
	const [wiki, setWiki] = useContext(CurrentWikiContext);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService.getWikis(cancelTokenSource.token).then(wikisDict => {
			const formattedWikis = Object.keys(wikisDict).map(wikiId => ({
				value: wikiId,
				label: wikisDict[wikiId],
			}));

			setWikis(formattedWikis);
		});

		return () => {
			cancelTokenSource.cancel();
		};
	}, []);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService.getTopicOfWiki(wiki.value, "0", cancelTokenSource.token).then(setHomeTopic);

		return () => {
			cancelTokenSource.cancel();
		};
	}, [wiki]);

	return <WikiSelectView wikis={wikis} wiki={wiki} setWiki={setWiki} homeTopic={homeTopic}/>;
};

export default WikiSelectContainer;
