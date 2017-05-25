const Sequelize = require('sequelize');
const db = require('./db');
const Campus = require('./db/models').Campus;
const Student = require('./db/models').Student;

db.sync({force:true})
.then(function(){
  Campus.bulkCreate([
    {
      id: 1,
      name: 'Europa',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg'
    },{
      id: 2,
      name: 'Omicron Persei 8',
      image: 'http://web.mit.edu/puzzle/www/2009/puzzles/our_crew_is_replaceable_your_package_isnt/PUZZLE/Lazry3_Omicron_Persei_8.jpg'
    }
  ])
})
.then(function(){
  Student.bulkCreate([
    {
      name: 'Peter Parker',
      email: 'webmaster@hotmail.com',
      campus_id: 1
    },{
      name: 'Leeloominaï Lekatariba Lamina-Tchaï Ekbat De Sebat',
      email: 'leeloo@gmail.com',
      campus_id: 2
    }
  ])
})
.catch(console.error);

// const campuses = [{
//       name: 'Europa',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg'
//     },{
//       name: 'Omicron Persei 8',
//       image: 'http://web.mit.edu/puzzle/www/2009/puzzles/our_crew_is_replaceable_your_package_isnt/PUZZLE/Lazry3_Omicron_Persei_8.jpg'
//     },{
//       name: 'Krypton',
//       image: 'https://vignette3.wikia.nocookie.net/dccu/images/b/b5/Planet_Krypton.png/revision/latest?cb=20130825095357'
//     },{
//       name: 'Vulcan',
//       image: 'https://futurism.com/wp-content/uploads/2013/02/200635_414242988662116_1691606020_n.jpg'
//     },{
//       name: 'Nirn',
//       image: 'http://staticdelivery.nexusmods.com/mods/110/images/55332-1-1403878280.jpg'
//     },{
//       name: 'New Caprica',
//       image: 'http://orig04.deviantart.net/3ab1/f/2008/203/7/2/new_caprica_by_groovychk.jpg'
//     }];

// const students = [{
//       name: 'Peter Parker',
//       email: 'webmaster@hotmail.com'
//     },{
//       name: 'Leeloominaï Lekatariba Lamina-Tchaï Ekbat De Sebat',
//       email: 'leeloo@gmail.com',
//       campus_id: 4
//     },{
//       name: 'Commander William T. Riker',
//       email: 'rikerw@enterprise.org',
//       campus_id: 1
//     },{
//       name: 'Hiro Protagonist',
//       email: 'hp@CosaNostraPizza.com',
//       campus_id: 6
//     },{
//       name: 'Serj Tankian',
//       email: 'serj@systemofadown.com',
//       campus_id: 5
//     },{
//       name: 'Philip J. Fry',
//       email: 'fry@fry.fry',
//       campus_id: 3
//     }]



// db.sync({force:true})
// // .then(() => campuses.map(campus => Campus.create(campus)
// // ))
// .then(() => {
//   console.log('Synced');

//   Student.create({
//       name: 'Peter Parker',
//       email: 'webmaster@hotmail.com',
//       campus_id: Campus.create({
//         name: 'Omicron Persei 8',
//         image: 'http://web.mit.edu/puzzle/www/2009/puzzles/our_crew_is_replaceable_your_package_isnt/PUZZLE/Lazry3_Omicron_Persei_8.jpg'
//       })
//     })

// }).then(() => console.log("created"))
// .catch(console.error)

// const promisedCampuses = campuses.map(campus => {
//   return Campus.create(campus);
// });

// const promisedStudents = students.map(student => {
//   return Student.create(student);
// })
