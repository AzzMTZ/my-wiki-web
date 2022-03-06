import { Wiki } from "./schemas/wikis";

export const SAVED_WIKI: Wiki = {
	value: localStorage.getItem("wiki.id") ?? "none",
	label: localStorage.getItem("wiki.name") ?? "None Selected",
};
