import React from "react";
import Select from "react-select";
import { Topic } from "../../schemas/topics";
import "./wiki.select.scss";

type WikiSelectProps = {
	wikis: { value: string; label: string }[];
	wiki: { value: string; label: string };
	setWiki: () => any;
	homeTopic: Topic | null;
};

const WikiSelectView: React.FC<WikiSelectProps> = ({ wikis, wiki, setWiki, homeTopic }) => (
	<div className="wiki-container">
		{wiki.value === "none" ? (
			<h1>You haven't selected a wiki, please select one:</h1>
		) : (
			<h1>
				You are currently in the wiki: <span>{wiki.label}</span>
			</h1>
		)}

		<Select className="select" options={wikis} onChange={setWiki} value={wiki.value === "none" ? null : wiki} />

		{homeTopic && (
			<div>
				<h1>Wiki Additional Info:</h1>
				<p>Security: {homeTopic.editable ? "Public" : "Protected"}</p>
				<p>Password: {homeTopic.password}</p>
			</div>
		)}
	</div>
);

export default WikiSelectView;
