import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { Wiki } from "../../schemas/wikis";
import { WikiInfoTable } from "../wiki.info.table";
import "./wiki.select.scss";

type WikiSelectProps = {
	wikis: Wiki[];
	wiki: Wiki;
	setWiki: Dispatch<SetStateAction<Wiki>>;
};

const WikiSelectView: React.FC<WikiSelectProps> = ({ wikis, wiki, setWiki }) => (
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
					onChange={wiki => setWiki(wiki as Wiki)}
					value={wiki.value === "none" ? null : wiki}
				/>
			</div>
		</div>

		{wiki.value !== "none" && <WikiInfoTable wiki={wiki} />}
	</div>
);

export default WikiSelectView;
