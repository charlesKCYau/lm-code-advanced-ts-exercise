export type States_Type = {
	MENU: string;

	SEND_MESSAGE: string;

	SHOW_POSTS: string;
	SHOW_USERS: string;
	BROWSE_POSTS: string;

	ADD_USER: string;
	ADD_POST: string;

	UNKNOWN: string;
};

export const states: States_Type = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",
	ADD_POST: "ADD_POST",

	UNKNOWN: "UNKNOWN",
} as const;


// export const states = {
// 	MENU: "MENU",

// 	SEND_MESSAGE: "SEND_MESSAGE",

// 	SHOW_POSTS: "SHOW_POSTS",
// 	SHOW_USERS: "SHOW_USERS",
// 	BROWSE_POSTS: "BROWSE_POSTS",

// 	ADD_USER: "ADD_USER",

// 	UNKNOWN: "UNKNOWN",
// };
