# TC-Mundelsheim
## Homepage Clone des TC-Mundelsheim

## Github - Pages
### Terminal
```yarn add -D gh-pages```
### package.json
+ add at the beginning ``` "homepage": "http://labpa.github.io/tc-mundelsheim", ```
+ add in scripts after start  ```"predeploy": "npm run build",```
+ add after predeploy ```"deploy": "gh-pages -d build",```
### Git
+ add ```git add *```
+ commit ```git commit -m " Deploy website"```
+ push ```git push```

### Terminal
* Deploy ```npm run deploy```

## TODO
+ Navigation.tsx -> Logo ordentlich zuschneiden und das aktuelle ersetzen.