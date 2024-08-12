# MarvelAPP_Classproject
Assignment for class. Uses the MARVEL API. 

run : 
$ npm create vite@latest 
select React - Javascript
npm 
npm run dev
npm install sass
npm install md5


API CODES should be pasted as given via email. You should see const publicKey= null and const privateKey= null. Replace the Null with appropriate keys. 

The site loads slowly, I assume it's because of the calls made to the MARVEL API, but I could be wrong. I'm open to suggestions to make this run faster. 

This app hits the API twice, one for character details and images, and then another for specific comics by that character. For example, typing "Storm" will give you variations of the character Storm, and then "View Comics" will render comic details. Both of these calls take time, so please wait. 
