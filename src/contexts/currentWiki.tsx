import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { SAVED_WIKI } from "../global.consts";
import { Wiki } from "../schemas/wikis";

type CurrentWikiContextProps = {
	wiki: Wiki;
	setWiki: Dispatch<SetStateAction<Wiki>>;
};

export const CurrentWikiContext = createContext<CurrentWikiContextProps>({
	wiki: SAVED_WIKI,
	setWiki: () => alert("Oops, could not change wiki!"),
});

export const CurrentWikiProvider: React.FC = ({ children }) => {
	const [wiki, setWiki] = useState<Wiki>(SAVED_WIKI);

	useEffect(() => {
		localStorage.setItem("wiki.id", wiki.value);
		localStorage.setItem("wiki.name", wiki.label);
	}, [wiki]);

	return <CurrentWikiContext.Provider value={{ wiki, setWiki }}>{children}</CurrentWikiContext.Provider>;
};
