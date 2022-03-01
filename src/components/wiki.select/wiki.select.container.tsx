import WikiSelectView from "./wiki.select.view";
import * as myWikiService from "../../services/my.wiki";
import { useState, useEffect, useContext } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { Wiki } from "../../schemas/wikis";

const WikiSelectContainer = () => {
	const [wikis, setWikis] = useState<Wiki[]>([]);
	const [retrieved, setRetrieved] = useState(false);
	const { wiki, setWiki } = useContext(CurrentWikiContext);

	useEffect(() => {
		const cancelTokenSource = myWikiService.getCancelTokenSource();

		myWikiService
			.getWikis(cancelTokenSource.token)
			.then(wikisDict => {
				const formattedWikis = Object.keys(wikisDict).map(wikiId => ({
					value: wikiId,
					label: wikisDict[wikiId],
				}));

				setWikis(formattedWikis);
			})
			.catch(() => setWikis([]))
			.finally(() => setRetrieved(true));

		return () => {
			cancelTokenSource.cancel();
		};
	}, []);

	return <WikiSelectView wikis={wikis} wiki={wiki} setWiki={setWiki} retrieved={retrieved} />;
};

export default WikiSelectContainer;
