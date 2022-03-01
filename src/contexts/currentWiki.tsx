import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import { DEFAULT_WIKI, EMPTY_FUNC } from "../global.consts";
import { Wiki } from "../schemas/wikis";

type CurrentWikiContextProps = {
	wiki: Wiki;
	setWiki: Dispatch<SetStateAction<Wiki>>;
};

export const CurrentWikiContext = createContext<CurrentWikiContextProps>({ wiki: DEFAULT_WIKI, setWiki: EMPTY_FUNC });

export const CurrentWikiProvider: React.FC = ({ children }) => {
	const [wiki, setWiki] = useState<Wiki>(DEFAULT_WIKI);

	return <CurrentWikiContext.Provider value={{ wiki, setWiki }}>{children}</CurrentWikiContext.Provider>;
};
