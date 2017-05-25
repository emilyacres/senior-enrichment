const Sequelize = require('sequelize');
const db = require('./db');
const Campus = require('./db/models').Campus;
const Student = require('./db/models').Student;

// db.sync({force:true})
// .then(function(){
//   Campus.bulkCreate([
//     {
//       id: 1,
//       name: 'Europa',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg'
//     },{
//       id: 2,
//       name: 'Omicron Persei 8',
//       image: 'http://web.mit.edu/puzzle/www/2009/puzzles/our_crew_is_replaceable_your_package_isnt/PUZZLE/Lazry3_Omicron_Persei_8.jpg'
//     }
//   ])
// })
// .then(function(){
//   Student.bulkCreate([
//     {
//       name: 'Peter Parker',
//       email: 'webmaster@hotmail.com',
//       campus_id: 1
//     },{
//       name: 'Leeloominaï Lekatariba Lamina-Tchaï Ekbat De Sebat',
//       email: 'leeloo@gmail.com',
//       campus_id: 2
//     }
//   ])
// })
// .catch(console.error);

const campuses = [{
      name: 'Europa',
      image: 'planets/Europa.jpg',
      galaxy: 'Milky Way',
      system: 'Earth'
    },{
      name: 'Omicron Persei 8',
      image: 'planets/Omicron.jpg',
      galaxy: 'Perseus',
      system: 'Omicron Persei'
    },{
      name: 'Krypton',
      image: 'planets/Planet_Krypton.png',
      galaxy: 'Andromeda',
      system: 'Rao'
    },{
      name: 'Vulcan',
      image: 'planets/vulcan.jpeg',
      galaxy: 'Milky Way',
      system: 'Vulcan'
    },{
      name: 'Nirn',
      image: 'planets/Nirn.jpg',
      galaxy: 'Erviadus',
      system: 'Mundus'
    },{
      name: 'New Caprica',
      image: 'planets/new_caprica.jpg',
      galaxy: 'Centaurus A',
      system: 'Galactica'
    }];

const students = [{
      name: 'Peter Parker',
      email: 'webmaster@hotmail.com',
      profile: 'student/peter.jpg',
      bio: 'Orphaned as a baby when his parents were killed overseas in a plane crash as U.S. government spies, only child Peter Parker was raised by his elderly Uncle Ben and Aunt May. Academically gifted, Peter displayed an uncanny affinity for science that was nothing short of genius. Socially, however, he was painfully shy and the target of much cruelty by his peers at Midtown High School. Attending a public science exhibit when Peter was 15-years old, he was bitten on the hand by a radioactive spider accidentally irradiated by a particle beam, empowering Peter with the arachnids proportional strength and agility, and the ability to cling to almost any surface. To help his Aunt May with finances, Peter took a freelance job at the Daily Bugle selling pictures of himself as Spider-Man to publisher J. Jonah Jameson.',
      campus_id: 2
    },{
      name: 'Leeloominaï Lekatariba Lamina-Tchaï Ekbat De Sebat',
      email: 'leeloo@gmail.com',
      profile: 'student/LeeLoo.jpg',
      bio: 'Leeloominaï Lekatariba Lamina-Tchaï Ekbat De Sebat (A.K.A "Leeloo") is one of the Supreme Beings of the Universe. She was sent to Earth in corporeal form to become the Fifth Element, the final piece of a powerful weapon to destroy the Great Evil.',
      campus_id: 4
    },{
      name: 'Commander William T. Riker',
      email: 'rikerw@enterprise.org',
      profile: 'student/riker.jpg',
      bio: 'William Thomas "Will" Riker was a noted Starfleet officer, perhaps best known for his long assignment as first officer under Captain Jean-Luc Picard aboard the USS Enterprise-D and later the USS Enterprise-E. In 2379 he finally accepted a promotion as captain of the USS Titan. In 2361, a transporter accident resulted in two Rikers, with each one being identical to the other as well as genetically indistinguishable. Their personalities and memories were the same up to the point of the duplication. The other Riker eventually decided to use his middle name and became known as Thomas Riker.',
      campus_id: 1
    },{
      name: 'Hiro Protagonist',
      email: 'hp@CosaNostraPizza.com',
      profile: 'student/hiro.jpg',
      bio: 'Hiro Protagonist is a hacker and pizza delivery driver for the Mafia. He meets Y.T. (short for Yours Truly), a young skateboard Kourier, during a failed attempt to make a delivery on time. Y.T. completes the delivery on his behalf and they strike up a partnership, gathering intel and selling it to the CIC, the for-profit organization that evolved from the CIAs merger with the Library of Congress. Within the Metaverse, Hiro is offered a datafile named Snow Crash by a man named Raven who hints that it is a form of narcotic. Hiros friend and fellow hacker Da5id views a bitmap image contained in the file which causes his computer to crash and Da5id to suffer brain damage in the real world. Hiro meets his ex-girlfriend Juanita Marquez, who gives him a database containing a large amount of research, positing connections between the virus, ancient Sumerian culture and the legend of Tower of Babel. Juanita advises him to be careful and disappears.',
      campus_id: 6
    },{
      name: 'Serj Tankian',
      email: 'serj@systemofadown.com',
      profile: 'student/Serj.jpg',
      bio: 'Serj Tankian (Western Armenian: Սերժ Թանկեան, pronounced [ˈsɛɾʒ tʰɑnˈkjɑn]; born August 21, 1967) is a Lebanese-born Armenian-American singer-songwriter, composer, multi-instrumentalist, record producer, poet, and political activist with Armenian descent. He is best known as the lead vocalist, songwriter, keyboardist, and occasional live rhythm guitarist of the metal band System of a Down, formed in 1994 by four Armenian-American friends. He is widely considered and ranked as one of the greatest vocalists in metal history,[4][5] with praise given to his unusual delivery and his wide vocal range. Serj Tankian is currently listed as one of the Top 100 Heavy Metal Vocalists by Hit Parader, ranked at #26.',
      campus_id: 5
    },{
      name: 'Philip J. Fry',
      email: 'fry@fry.fry',
      profile: 'student/Fry.jpg',
      bio: 'Philip J. Fry I was born on August 9, 1975[1] in Brooklyn, New York to Yancy Fry, Sr. and his mother, née Gleisner. These surnames imply English and German ancestry. He was named Philip after the Philips head screwdriver. When he was young, he dreamed of being an astronaut, but due to motion sickness and the fact nobody liked spending a week with him, his dream was never fulfilled. He would often play Basketball with his older brother Yancy Fry, Jr. as well as participate in break-dancing competitions.[2] When he was in high school, he drank nearly a hundred cans of cola per week, resulting in three heart attacks.[3] He also loved playing video games as he played them every day except the day that his eyes bled.[4] He attended and subsequently dropped out of Coney Island Community College, which in the standards of 31st Century education, made him the equivalent of a high school drop out.',
      campus_id: 3
    }]



db.sync({force:true})
.then(() => campuses.map(campus => Campus.create(campus)
))
.then(() => {
  console.log('Synced');
})
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
