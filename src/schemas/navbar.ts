export type NavLink = {
	path: string;
	getContent: (params: { [key: string]: any }) => JSX.Element;
	element: JSX.Element;
	class?: string;
};
