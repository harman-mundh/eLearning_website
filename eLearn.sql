CREATE TABLE IF NOT EXISTS `accounts` (
  `id` mediumint  UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `user` varchar(25) unique,
  `pass` varchar(70),
  `user_type` varchar(10) DEFAULT 'student'
);

CREATE TABLE IF NOT EXISTS `contents` (
  `id` mediumint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `authorid` mediumint UNSIGNED,
  `title` varchar(70),
  `content` text,
  `image` varchar(30),
  `added` datetime
);

CREATE TABLE IF NOT EXISTS `history` (
 `id` mediumint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `contentid` mediumint UNSIGNED,
 `userid` mediumint UNSIGNED,
 `viewed` boolean DEFAULT 0,
 `completed` boolean DEFAULT 0
);

ALTER TABLE `contents` ADD FOREIGN KEY (`authorid`) REFERENCES `accounts` (`id`);
ALTER TABLE `history` ADD FOREIGN KEY (`userid`) REFERENCES `accounts` (`id`);


INSERT INTO accounts(user, pass, user_type)
	VALUES("doej", "$2b$10$gL33obKAFUT5DK3pEbh72OIHztsWBniBBh.PdeKOrF1yr5KFAsdZO", NULL);
INSERT INTO accounts(user, pass, user_type)
	VALUES("teacher1", "$2a$10$g2l9N5cvzUTBmTQHr5GjouTX2RA2dz5NL3Bha/CzX4kn24LMvrpAO", 'teacher');
INSERT INTO accounts(user, pass, user_type)
	VALUES("teacher2", "$2a$10$g2l9N5cvzUTBmTQHr5GjouTX2RA2dz5NL3Bha/CzX4kn24LMvrpAO", 'teacher');
INSERT INTO accounts(user, pass, user_type)
	VALUES("student1", "$2a$10$g2l9N5cvzUTBmTQHr5GjouTX2RA2dz5NL3Bha/CzX4kn24LMvrpAO", 'student');
INSERT INTO accounts(user, pass, user_type)
	VALUES("student2", "$2a$10$g2l9N5cvzUTBmTQHr5GjouTX2RA2dz5NL3Bha/CzX4kn24LMvrpAO", 'student');

INSERT INTO contents(authorid, title, content, image, added)
  VALUES ("2", "Intro", "< /br>
This website will teach you what is  Git and how ever developer must know to use it to manage their code.
The process of applying a range of tools to help you manage changes in a controlled manner is called Version control,
as the project gets larger and larger and more complex, it can be difficult to keep track of how the software is being developed, 
finding and resolving bugs becomes a nightmare, and since most developers work as part of a team, tracking which user made changes can be challenging.
This is where Version Control comes in action and makes managing the code a breeze, whilst there are many options, we'll only focus on Git as it is the
most used and popular tool for this job.
</ br>
While there exist GUI tools that do the same job as Git but with a interface, it is important to not rely on them for the following reasons:
</ br>
1. You still need a solid understanding of Git and how it works in the background.
2. GUI tools might use different naming from each other, it might problematic switching from one GUI to another.
3. You cannot automate most action/tasks, which you will be wanting to do.
4. There is no guarantee that if you work for a company they will be using a GUI tool.
5. Most if not all servers have any desktop environment, so you won't be able to install them in the first place.
6. While GUI tools use scenario is only intended for the most common use-cases, you are still going to need the terminal for more advanced actions.
</ br>
## What to expect next:
</ br>
In next lectures you are going to learn how to use Git and be able to:
- Create a git repository in your project directory.
- Tell Git about any files you add or edit.
- Take a snapshot of your code.
- Roll back to the last snapshot if you make a mistake.", 
NULL, "2022-04-01 13:25:00");

INSERT INTO contents(authorid, title, content, image, added)
  VALUES ("2", "Code Management", "</ br>
Code management start from initiating Git into the directory you want version control, which can be done by using Shell commands to navigate the different folders and
typing 'git init' in the desired folder.
</ br>
1. Find your current directory `pwd`
2. List all of the file in the directory (even the hidden one) `ls -al`
3. Initialize local Git repo `git init`
## Configuring the repository
</ br>
Each git repository stores the details of the user working on the code, therefore it is vital that such information is correct.
It is possible to configure such info by first printing on the terminal everything that is already stored and making changes accordingly.
1. Run `git config -l` to see the current settings.
2. And if they need changes type in `git config user.` followed by the setting name and new values in double quotes such as: `git config user.name 'Joe Doe'`
</ br>
## Taking Snapshots
</ br>
Git keeps track of different versions of data on each file, this is called taking a snapshot:
- Each checked in version of the code, has a copy of the code the moment is was saved.
- Some snapshots might have different files in the relative version.
To the first snapshot of your work you must:
1. Choose the files you want to version control, or add of the files in directory with `git add --all`
2. Add a short comment or message along to give a description of what was changed `git commit -m '<message>'` or for multi-line message use `git commit`
3. And finally to check that the snapshot 'commit' was successfully created type `git status` 
## Tracking commits
</ br>
Once you have more than one commit its possible to look at the history of each commit using `git log`, each commit has its own unique hash, and it includes the author, date and the message itself. 
Passing in option at the end of git log we can view the log message in couple of different ways:
- `--abbrev-commit` shows the commit in a standard format 
- `--oneline` shows the commit in one line with no message or dates
- `--graph` shows the commit will full details in a graph for more visual aids
</ br>
Once we have the git log message on the terminal we can use the commit hash code to navigate into that specific version of commit using `git checkout <commit hash>`
and from there we can retrieve the code and data that before the commit, to return back at the current commit `git commit master` can be used
</ br>
And Finally one of the main features of git is the ability or revert any changes that have broken the code or make it unsuable, where instead of fixing the issues it is better to go back to a working state `git reset --hard`",
NULL, "2022-04-02 14:10:11");

INSERT INTO contents(authorid, title, content, image, added)
  VALUES ("3", "Branches", "</ br>
Branching in git allows you to isolate the code to implement new feature or make test to check functionality, once everything works as intended we can simply **merge** the code back to the main workflow.
Usually the main branch is given the name of *master*, this is our main workflow branch, from where we branch off and merge back in, you should never branch off from any other branch that is not master
Here's how to use the branching feature in git:
</ br>
## Branching and Merging
1. Check you are in *master* branch with `git branch` which must return with `* master`
2. Create a new branch with `git branch <new branch name>`
3. Switch to new branch with `git checkout <new branch name>` should return with `Switched to branch '<new branch name>'`
4. Use command in step 1 to ensure you are in new branch.
</ br>
And finally comes the time to **merge** the new branch back into the master after developing the new feature and ensuring everything works correctly.
1. We would need to go back into the master branch `git checkout master`
2. Ensure the branch checked-out is master `git branch`
3. Run `git merge <new branch name> -m '<with commit message>'`
4. Finally to check that everything worked correctly run `git log --oneline --graph` which will show all the commits in the new branch before merging
</ br>", 
NULL, "2022-04-03 15:01:15");

INSERT INTO contents(authorid, title, content, image, added)
  VALUES ("3", "Managing Remote Repository", "</ br>
You have come so far and not it's time to upload your code on a online repository such as GitHub, the first step your should take is 
to make login into Git Hub and make new repository by clicking on the green new button, make sure to only create an empty repository.
On the right there should be an HTTP link to repository, which you should copy, as this will used to link the local repository to one on the server 
and push all of the code into it.
</ br>
## Adding the Remote
</ br>
To add the GitHub repository run this code pasting in the GitHub repo link you copied  earlier `git remote add origin <https://github.coventry.ac.uk/5001CEM-2122/>`
and fianlly use `git remote -v` to verify that link has been set up to both push and fetch data from the link.
</ br>
## Pushing to GitHub
</ br>
To push the code onto the repository you should:
1. add all the files you want to be push with:
2. inset a commit message:
3. finally use `git push origin master` to push the code
Once you this command, the terminal will prompt your to insert the username of the GitHub account and password,
the last one won't appear on the terminal when typed in, for security reasons.
</ br>
If you wish to push all branches run `git push --all origin` it is important that you push all branches otherwise any feature branch will not show up on the remote repository
</ br>
## Cloning a Repository
</ br>
There could be occasions where you will be working with already existing remote repository, to retrieve data from them you can run:
`git clone <remote repo http link> <name of the directory where you want to save>`, running this code will download all of data available on your local computer in the specified directory.
</ br>
Finally along with cloning a repository, you might want to update the files from the remote repository, as there could be multiple developer working on the same repo, and might not be up-to-date with
other colleague's commits, running: `git pull --all` will fetch data from all of the branches present, but running: `git pull origin <branchname>` will only fetch data from the specified branch.",
NULL, "2022-04-03 15:01:15");