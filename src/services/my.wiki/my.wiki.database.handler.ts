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

export const getAllTopicsOfWiki = async (
	wikiId: string,
	cancelToken: CancelToken,
): Promise<{ [key: string]: Topic }> => {
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

export const getTopicOfWiki = async (
	wikiId: string,
	topicId: string,
	cancelToken: CancelToken,
): Promise<Topic | null> => {
	try {
		const response = await axios.get(`${MY_WIKI_BASE_URL + wikiId}/${topicId}.json`, { cancelToken });
		return response.data;
	} catch (error) {
		if (axios.isCancel(error)) {
			return null;
		}
		throw error;
	}
};

export const getWikiSize = async (wikiId: string, cancelToken: CancelToken): Promise<number> => {
	try {
		const response = await axios.get(MY_WIKI_BASE_URL + wikiId + ".json?shallow=true", { cancelToken });
		return Object.values(response.data).length;
	} catch (error) {
		if (axios.isCancel(error)) {
			return 0;
		}
		throw error;
	}
};
