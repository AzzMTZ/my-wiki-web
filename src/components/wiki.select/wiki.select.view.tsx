import React from "react";
import Select from "react-select";
import { Topic } from "../../schemas/topics";
import { WikiInfoTable } from "../wiki.info.table";
import "./wiki.select.scss";

type WikiSelectProps = {
	wikis: { value: string; label: string }[];
	wiki: { value: string; label: string };
	setWiki: () => any;
	homeTopic: Topic | null;
};

const WikiSelectView: React.FC<WikiSelectProps> = ({ wikis, wiki, setWiki, homeTopic }) => (
	<div className="wiki-container">
		<div>
			{wiki.value === "none" ? (
				<h1>You haven't selected a wiki, please select one:</h1>
			) : (
				<h1>
					You are currently in the wiki: <span>{wiki.label}</span>
				</h1>
			)}
			<div className="select-container">
				<p>Choose a wiki:</p>
				<Select
					id="wiki-select"
					className="select"
					options={wikis}
					onChange={setWiki}
					value={wiki.value === "none" ? null : wiki}
				/>
			</div>
		</div>
        
		{homeTopic && <WikiInfoTable homeTopic={homeTopic} />}
	</div>
);

export default WikiSelectView;
