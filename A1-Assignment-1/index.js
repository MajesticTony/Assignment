function person (user, program) {
    return {
        height: "180cm",
        weight: "190lbs",
        complextion: "dark",
        age: "34",
        inteligenceQuota: "100",
        language: "calabar",
        talk: function () {
            console.log("talk")
        },
        walk: function () {
            console.log("walk")
        },
        run: function () {
            console.log("run")
        },
        eat: function () {
            console.log("eat")
        },
        fight: function () {
            console.log("fight")
        }
    }
}

function person2 () {
    return person.call(this, user. program)
};

let user = new person("student")