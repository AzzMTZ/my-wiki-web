import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { Wiki } from "../../schemas/wikis";
import { WikiInfoTable } from "../wiki.info.table";
import loadingImage from "../../assets/images/loader.gif";
import _ from "lodash";
import "./wiki.select.scss";

type WikiSelectProps = {
	wikis: Wiki[];
	wiki: Wiki;
	setWiki: Dispatch<SetStateAction<Wiki>>;
	retrieved: boolean;
};

const WikiSelectView: React.FC<WikiSelectProps> = ({ wikis, wiki, setWiki, retrieved }) => {
	const selection = _.isEmpty(wikis) ? (
		retrieved ? (
			<h2>Oops, either there are no wikis or there was a problem retrieving them...</h2>
		) : (
			<img src={loadingImage} alt="loading" />
		)
	) : (
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
	);

	return (
		<div className="wiki-container">
			<div>
				{wiki.value === "none" ? (
					<h1>You haven't selected a wiki, please select one.</h1>
				) : (
					<h1>
						You are currently in the wiki: <span>{wiki.label}</span>
					</h1>
				)}
				{selection}
			</div>

			{wiki.value !== "none" && <WikiInfoTable wiki={wiki} />}
		</div>
	);
};

export default WikiSelectView;
