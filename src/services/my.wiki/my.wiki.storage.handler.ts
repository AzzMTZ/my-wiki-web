import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({});
const storage = getStorage(firebaseApp);

export const getImage = async (wikiId: string, topicName: string) => {
	const pathReference = ref(storage, `gs://mywiki-4d74a.appspot.com/${wikiId}/${topicName}`);
	const imageUrl = await getDownloadURL(pathReference);
	return imageUrl;
};