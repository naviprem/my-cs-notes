---
layout: post
title:  "Create a blog site on GitHub"
date:   2018-05-27
categories: jekyll update
---

One of the easiest ways to host static content on the internet is to host it on GitHub with jekyll.

Here are the step-by-step instructions

1. Install Jekyll following the instructions [here](https://jekyllrb.com/)  
```angular2html
  gem install bundler jekyll
```
2. Create a GitHub repo on your GitHub Account. 
3. Go to `Settings` on the repo 
4. Scroll-down to `GitHub Pages` section
5. Select source as `master branch /docs folder` and `save`

6. Clone the repo on your machine
7. `cd` into the repo
8. Use the below command to create a jekyll project inside your repo
```angular2html
  jekyll new docs
```
9. Update the base url of your jekyll project to the name of your github repo. 
You can do this by updating the baseurl on _config.yml

10. Serve your jekyll project 
```angular2html
  cd docs
  bundle exec jekyll serve
```
11. You can now view your site at `http://localhost:4000/<your-repo-name>` on you local machine
12. Commit your code and push your files to your repo's master branch
13. You can now view your site at `https://<your-github-id>.github.io/<your-repo-name>/`


