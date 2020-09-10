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

1. Create branch
  git checkout -b branchName

2. set origin/master as upstream
  git push --set-upstream origin branchName

2.5 if master is ahead in commits
  git pull

3. add all changes
  git add .

3.5 add some changes
  git add <fileName>

4. commit your changes
  git commit -m "commit message"

5. go on github and open a Pull request

6. ask someone to verify your code and merge the changes on master