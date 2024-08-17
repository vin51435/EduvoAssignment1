const { faker } = require('@faker-js/faker');

const roles = [
  'Product Designer',
  'Product Manager',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'UX Designer',
  'UX Copywriter',
  'QA Engineer'
];

// Function to generate a fake user
function generateFakeUser(id) {
  const fullName = faker.person.fullName();
  const firstName = fullName.split(' ')[0].toLowerCase();
  const tag = `@${firstName}`;

  return {
    id: id, 
    userImageUrl: faker.image.avatar(),
    name: fullName,
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(roles),
    status: faker.datatype.boolean(),
    teams: ['design', 'product', 'marketing', 'finance'],
    dob: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().split('T')[0],
    gender: faker.person.sex(),
    nationality: faker.location.country(),
    contactNo: faker.phone.number(),
    workEmailAddress: faker.internet.email(),
    researchAndPublications: {},
    tag: tag // Add the tag field
  };
}

module.exports = generateFakeUser;