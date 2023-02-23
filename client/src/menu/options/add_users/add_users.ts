import { addUserToServer } from "../../../api/add_user_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUsers() {
	clear(true);

	const id = await prompt("Please enter id");
	const name = await prompt("Please enter user name");

	// printNewLine();
	// print(`📨 Sending message "${name}"...`);

	const success = await addUserToServer(id, name);

	if (success === true) print("🥳 User added successfully!");
	else print("😵 User NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
