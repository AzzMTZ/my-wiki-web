import React, { createContext, useState } from "react";

export const CurrentWikiContext = createContext<any>(undefined);

const { Provider } = CurrentWikiContext;

export const CurrentWikiProvider: React.FC = ({ children }) => {
	const [wiki, setWiki] = useState<{ value: string; label: string }>({ value: "none", label: "None Selected" });

	return <Provider value={[wiki, setWiki]}>{children}</Provider>;
};
