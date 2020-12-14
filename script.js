
var selected = 0;

var aboutme = `
<h1 class="title">About Me</h1>
This is where i describe all the things about me.
<h1 class="subtitle">My Name</h1>
First off, why I spell dynamic with an I (Dinamic). A while ago when I was around 7 years old give or take, i played minecraft. At the time if you wanted to be cool, your username had to be something like this: x[username]x#. so what did i do? i put my name as xdinamicx44 because the word 'dinamic' sounded cool (not that i knew what it ment). My username of course evolved, xdinamicx48, DynamcDigitalDev, DinamicDigital, and ch1kn_nugg3t. Those are all used for random accounts. almost none of my accounts have consistant names. I adopt DinamicDigital because it sounds the coolest, and i use an I instead of a Y because its funny that i wasn't able to spell, even if it makes me look stupid. 
<h1 class="subtitle">Nerd Stuff</h1>
Now that we got that out of the way, about me. Well, i like programming, as you could probably tell since this is a github.io website and the theme i came up with for this website is extremely nerd-like. I specifically like low level programming, game engine programming, system programming, and recently, i have been working every day on a video game. My favorite language is C, and i adopt an Orthodox C++ style. I was enlightened by the handmade community, which showed me why OOP is terrible and alot about computers and how they work, I am still not that smart sadly. That might change sometime in the future, hopefully. 
<h1 class="subtitle">Personal</h1>
I am a sophmore in highschool, and im terrible at school. I love to learn about everything, but i hate learning in school, i dont know why. I feel like i learn best on my own, after all, i do have access to an infinite database of knowlage at home. I love the outdoors and exploring. i constantly want to be outside in the woods, or exploring cities, natural landscape, camping, fishing, et cetra. I generally love making things. but mostly functional things like tools and structures. I am an epic gamer. I spent most of my childhood on minecraft, from right after school till dinner. that cant be too healthy, but hey, the past is the past. Some of my other favorite games of all time are: The Witness, Portal 1 & 2, Army Men RTS, Unturned, War Thunder, HOI4, Sid Mier's Civilization (any number). I also did spend alot of my time as a child on roblox, before it was cool. Sadly roblox has evolved into something that i dont really like. I run cross country. I used to play soccer, but i stopped playing it.`;

var projects = `
<h1 class="title">Projects</h1>
Here we go over my personal projects, they can be software or non-software related.
<h1 class="subtitle">Nugget</h1>
Nugget is a game engine in really early development, it is a side project to my main project, TheLastChicken. It is writen from scratch in C++ using Win32 API only. It will feature a software renderer, hardware renderer, and probably support 3D, but 2D is the only priority. I only work on it when i have free time at school, so it does not get rapidly devloped. I named it nugget because thats what i happened to have the visual studio project named (Computer labs have visual studio, thank god.)
`;

var games = `
<h1 class="title">Games</h1>
Here we go over games i am working on.
<h1 class="subtitle">The Last Chicken</h1>
The Last Chicken is an indie game developed by me. It uses gunslinger as an engine, which is a multimedia framework developed by John Jackson. The Last Chicken is currently in early development. I work on this every day for 4 hours, and i use a productivity tactic that works for me, where i set "stages" of development that i want to achive. I lay out what i want to do in this stage, do it, and then move on to the next stage. It works very well for me. Anything about the game can very much change and most likely will. but, right now the plan is to have a puzzle platformer, where you are the last chicken, and you have to go save your other fellow chickens. You are weak, so you need to solve puzzles in the form of mechanisms to defeat your enemies. I dont know how its going to work yet, but that is the basic idea.

<div class="frame">
<img src="res/tlc_early.png" alt="Early development of TheLastChicken." width="1082" height="752">
</img>
<h1 class="caption">// This is an early development build of The Last Chicken.</h1>
</div>

<div>
	<h1 class="subtitle">Changelog</h1>
	
12/13/2020
<br>
Changed camera Y Axis movement.
<br>
Created and loaded fox_left and fox_right textures
<br>
added world_mouse_pos() function
<br>
Added debug sprite inspector window 
<br>
12/12/2020
<br>
added an actual camera controller for gameplay.
<br>
Completed design of test level.
<br>
Added 2 new textures, metal_platform and metal_support
<br>
12/11/2020
<br>
Changed brick obstacle to stone.
<br>
Abstracted away asset data and initilization into a new file.
<br>
Created a load_texture function for easier texture loading.
<br>
Created an assets struct for all of the assets in the game.
<br>
12/10/2020
<br>
Added individual UV coords to sprites for fine-tuning
<br>
added a stone wall 
<br>
Create 2 stone textures.
<br>
Changed clear color to a sky blue.
<br>
12/9/2020
<br>
Did nothing for the game.
<br>
worked on a website for myself and my projects/games that will eventually hold information about TheLastChicken.
<br>
12/8/2020
<br>
Enhanced the debug window.
<br>
Gave the player chicken a left and right texture, to give movement a feeling of direction.
<br>
Adjusted grass transform to make the transparent grass part stick up above the AABB slightly, causing in a nice translucent "grass blade" effect
<br>
Fixed immediate graphics based renderer. (thanks john)
<br>
Made debug AABB rect viewer toggle-able
<br>
----------<br>
The events before this date have been lost forever! no one will know anything about the past.

</div>
`;

function set_selected(x)
{
	selected = x;
	document.getElementById("contentstr").innerHTML = display_selected();
}

function display_selected()
{
	if (selected == 0)
	{
		return aboutme;
	}
	else if (selected == 1)
	{
		return projects; 
	}
	else if (selected == 2)
	{
		return games; 
	}
}

document.getElementById("contentstr").innerHTML = display_selected();