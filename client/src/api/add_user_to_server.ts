import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function addUserToServer(name: string) {
	try {
		const result = await fetch(baseUrl + "/api/users/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: name }),
		});

        const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
