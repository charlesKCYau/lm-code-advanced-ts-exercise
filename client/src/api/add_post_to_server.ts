import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function addPostToServer(title: string, text: string, id: string) {
	try {
		const result = await fetch(baseUrl + "/api/posts/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ title: title, text: text, id: id }),
		});

        const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
