import { addPostToServer } from "../../../api/add_post_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addPosts() {
	clear(true);

	const title = await prompt("Please enter title");
	const text = await prompt("Please enter text");
	const id = await prompt("Please enter author/user id");

	// printNewLine();
	// print(`📨 Sending message "${name}"...`);

	const success = await addPostToServer(title, text, id);

	if (success === true) print("🥳 Post added successfully!");
	else print("😵 Post NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
