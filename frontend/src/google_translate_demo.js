const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText('Oggi è lunedì', 'en')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

const listLanguages = async () => {
    try {
        // Lists available translation language with their names in English (the default).
        const [languages] = await translate.getLanguages();
        return languages;
    } catch (error) {
        console.log(`Error at listLanguages --> ${error}`);
        return 0;
    }

}

listLanguages()
    .then((res) => {
        console.log('Languages:');
        res.forEach(language => {
            console.log("{ \"code\": \"" + language.code + "\", \"name\": \"" + language.name + "\" },");
        });

        res.forEach(language => console.log(language));
    })
    .catch((err) => {
        console.log(err);
    });
