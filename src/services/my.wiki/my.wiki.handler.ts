import axios from "axios";
import { Topic } from "../../schemas/topics";
import { ALL_WIKIS, MY_WIKI_BASE_URL } from "./my.wiki.consts";

export const getWikis = async (): Promise<{ [key: string]: string }> => {
	const response = await axios.get(MY_WIKI_BASE_URL + ALL_WIKIS + ".json");
	return response.data;
};

export const getTopicsOfWiki = async (wikiId: string): Promise<{ [key: string]: Topic }> => {
	const response = await axios.get(MY_WIKI_BASE_URL + wikiId + ".json");
	return response.data;
};