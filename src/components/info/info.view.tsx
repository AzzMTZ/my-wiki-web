import "./info.scss";

const InfoView = () => (
	<div className="info">
		<h1>Info & About</h1>

		<h2>General Info:</h2>
		<p>
			My Wiki is an application which lets users create their own wikis about every subjects they desire,
			<br />
			and browse the wikis of other users.
			<br />
			Users can add new topics to their wikis, edit topics, or delete them.
			<br />
			The wikis are saved online, which means that if a user uninstalls the app,
			<br />
			none of the wikis they created will be affected.
			<br />
			NOTICE: Although we enable every user write whatever they want in their wikis without censoring,
			<br />
			we still delete spam wikis or wikis with very little content.
		</p>

		<h2>About Us:</h2>
		<p>
			We are Adi Mintz and Anatoly Landau, two teenagers from Israel.
			<br />
			We aren't very experienced in app developing, and this is simply one of our hobbies.
			<br />
			By now we have developed only two apps, but we intend to develop more in the future.
			<br />
			We try to update our apps and maintain them, but this is not always possible since we're still in
			highschool.
		</p>

		<h2>So you've entered a wiki, whats next?</h2>

		<h3>Bottom navigation options:</h3>
		<p>
			At the bottom of the app there is a bar with three options: <br />
			<span>'Topic Page'</span> - here you can view the topics in the wiki you're in,
			<br />
			<span>'Browse Topics'</span> - here you can view a list of all the topics in the wiki and search topics,
			<br />
			<span>'Info'</span> - here you can view the information and instructions about this app.
		</p>

		<h3>Creating a topic:</h3>
		<p>
			In order to create a topic in your wiki, navigate to the 'Browse Topics' screen and press the '+' button.{" "}
			<br />
			Then, you will enter the editing screen were you can choose your new topic's name, attributes, description
			and picture. <br />
			In order to choose a topic's picture, press on the picture in the editing screen. <br />
			Then, you will see a dialog with various options.
		</p>

		<h3>Editing a topic:</h3>
		<p>
			In order to create a topic in your wiki, navigate to the 'Topic Page' screen and press the button with the
			pencil icon.
			<br />
			Then, you will enter the editing screen were you can change your topic's name, attributes, description and
			picture.
			<br />
			In order to change a topic's picture, press on the picture in the editing screen. <br />
			Then, you will see a dialog with various options.
		</p>

		<h3>Adding/Changing a topic's picture:</h3>
		<p>
			The 'No Image Available' picture is the default picture of all topics. <br />
			To change the picture, press on it and then a dialog will appear, which views all the actions available to
			change the picture.
		</p>

		<h3>Deleting a topic:</h3>
		<p>When editing a topic, you can delete it by pressing the garbage can icon on the app tool bar.</p>

		<h3>Searching topics:</h3>
		<p>
			{" "}
			In order to search topics in your wiki, navigate to the 'Browse Topics' screen.
			<br />
			There you will be able to scroll through all the topics in the current wiki. <br />
			To search specific topics press the search icon on the app tool bar.
		</p>

		<h3>Wiki options:</h3>
		<p>
			In the app menu there are five options: <br />
			<span>'Leave Wiki'</span> - the app returns to the start screen,
			<br />
			<span>'Change Wiki Name'</span> and <span>'Change Wiki Password'</span> - changes the wiki's name and
			password,
			<br />
			<span>'Change Wiki Type'</span> - changes the wiki's type from public to protected or from protected to
			public(explained below),
			<br />
			<span>'Delete Wiki'</span> - deletes the current wiki.
		</p>

		<h3>Wiki password and type:</h3>
		<p>
			Every wiki has a password.
			<br />
			A public wiki allows any user to add, edit or delete a topic in it without a password,
			<br />
			but the wiki options still require it.
			<br />
			A protected wiki requires a password for any modification that is done to it.
			<br />
			In addition, in this type of wiki, after you enter the password once,
			<br />
			you won't need to enter it again(except for the wiki options), until you restart the app.
		</p>

		<h3>The home topic:</h3>
		<p>
			The home topic is the default topic of every wiki. Its name is always the name of the wiki it is in, and it
			cannot be deleted.
			<br />
			The purpose of the home topic is to describe the wiki itself, it is the main topic of the wiki. <br />
			You can go to the home topic by pressing the home icon on the app tool bar, when in the 'Topic Page' screen.
		</p>

		<p>If there is a problem, you can contact us at azzndzol@gmail.com.</p>

		<h3>
			We hope you enjoy our app,
			<br />
			Azz&Zol
		</h3>
	</div>
);

export default InfoView;
