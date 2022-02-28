import axios, { CancelToken } from "axios";
import { Topic } from "../../schemas/topics";
import { ALL_WIKIS, MY_WIKI_BASE_URL } from "./my.wiki.consts";

export const getCancelTokenSource = () => {
	return axios.CancelToken.source();
};

export const getWikis = async (cancelToken: CancelToken): Promise<{ [key: string]: string }> => {
	try {
		const response = await axios.get(MY_WIKI_BASE_URL + ALL_WIKIS + ".json", { cancelToken });
		return response.data;
	} catch (error) {
		if (axios.isCancel(error)) {
			return {};
		}
		throw error;
	}
};

export const getTopicsOfWiki = async (wikiId: string, cancelToken: CancelToken): Promise<{ [key: string]: Topic }> => {
	try {
		const response = await axios.get(MY_WIKI_BASE_URL + wikiId + ".json", { cancelToken });
		return response.data;
	} catch (error) {
		if (axios.isCancel(error)) {
			return {};
		}
		throw error;
	}
};
