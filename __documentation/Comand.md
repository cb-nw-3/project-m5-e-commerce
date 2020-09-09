// go on master branch
git checkout master

// go on specific branches
git checkout nathaliechanges
git checkout hibachanges
git checkout alexLchanges
git checkout alexGLchanges

//grab changes from master
git pull 

//create branch
git checkout -b nathaliechanges
git checkout -b hibachanges
git checkout -b alexLchanges
git checkout -b alexGLchanges

//check status of branches and master
git status

//add all changes 
git add.

//commit changes with a comment
git commit -m "comment"

//push on branch
git push

//set remote as upstream and push to current branch
git push --set-upstream origin nathaliechanges
git push --set-upstream origin hibachanges
git push --set-upstream origin alexLchanges
git push --set-upstream origin alexGLchanges

//merge changes from master after git pull
git merge master

//push changes from branch to master after pulling master
git push

