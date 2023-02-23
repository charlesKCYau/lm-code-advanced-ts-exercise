import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { addUsers } from "./menu/options/add_users/add_users";
import { addPosts } from "./menu/options/add_posts/add_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state = new State();

	while (true) {
		if(state.get() === "MENU"){
			const newMenuOption = await showMenu();
			state.set(newMenuOption);
		} else if(state.get() === "SEND_MESSAGE"){
			const nextState = await sendMessage();
			state.set(nextState);
		} else if(state.get() === "SHOW_POSTS"){
			clear(true);
			const posts = await showAllPosts();
			state.set(states.MENU);
		} else if(state.get() === "SHOW_USERS"){
			clear(true);
			const users = await showAllUsers();
			state.set(states.MENU);
		} else if(state.get() === "BROWSE_POSTS"){
			clear(true);
			const post = await browsePosts();
			state.set(states.MENU);
		} else if(state.get() === "ADD_USER"){
			clear(true);
			// print("🏗️  This functionality has not been implemented!");
			// await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			// state.set(states.MENU);
			const nextState = await addUsers();
			state.set(nextState);
		} else if(state.get() === "ADD_POST"){
			clear(true);
			const nextState = await addPosts();
			state.set(nextState);
		} else if(state.get() === "UNKNOWN"){
			clear(true);
			print("😵 We have entered an unknown state.");
			await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			state.set(states.MENU);
		// } else if(state.get() === "CABBAGE"){
		// 	clear(true);
			// print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
			// print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
			// print("🥬     Why did you want this?     🥬", false);
			// print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
			// await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			// state.set(states.MENU);
		} else {
			clear(true);
			print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			print("💥 Crashing the program now...  💥", false);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			printNewLine();
			exit(99);
		}
	}
}

begin();
