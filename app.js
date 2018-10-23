var app = new Vue({
  el: '#app',
  data: {
    firstName: "Viola",
    lastName: "Stefanello",
    description: "Master's student in Journalism and International Affairs at Sciences Po Paris",
    photo: "./viola.jpg",
    twitter: "violaparanoica",
    github: "violastefanello",
    mail: "violaserena.stefanello@sciencespo.fr",
    experiences: [{
      dateBegin: "2018",
      dateEnd: "Today",
      name: "The Post Internazionale",
      title: "Journalist",
      description: "writing news, features, interviews and photo stories for the news, politics and culture desks / covering news under pressure / SEO optimisation and Google indexation"

    }, {
      dateBegin: "May 2018",
      dateEnd: "June 2018",
      name: "Cafébabel",
      title: "Editorial intern",
      description: "writing long form articles on lifestyle and culture in English and Italian / translating articles from English and French to Italian / editing original content / managing social media and disseminating articles"
    }, {
      dateBegin: "2014",
      dateEnd: "Today",
      name: "Different outlets",
      title: "Freelance journalist",
      description: "writing articles and op-eds on politics, international relations, culture and society for several online and print newspapers in Italian, English and French (Are We Europe, Èmile, SALT Editions, MSOI The Post)"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "Today",
      name: "Joint Master in Journalism and International Affairs",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2014",
      dateEnd: "2017",
      name: "Bachelor in International and Diplomatic Studies",
      university: "Università degli Studi di Trieste"
    }],
    languages: ["Italian", "English", "Spanish", "French"],
    skills: ["Social Media", "SEO optimisation", "Microsoft Office", "WordPress", "Adobe Premier", "Adobe Audition"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})