const exampleGeneralInfo = ["0123456789", "chingisenkhbaatar@test.com", "Karlsruhe, Germany"];
const exampleEducationalExperiences = [
  {
    "from": "2035-12-12",
    "to": "2035-12-22",
    "role": "Student",
    "school": "Xavier's school for Gifted Youngsters",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  
  {
    "from": "2043-09-01",
    "to": "2053-05-15",
    "role": "Student",
    "school": "University of Cyber Humans",
    "id": crypto.randomUUID(),
    "show": 1,
  },
];
const examplePracticalExperiences = [
  {
    "from": "2019-12-01",
    "to": "2020-02-01",
    "role": "Front-End Developer",
    "position": "Junior",
    "company": "Avengers",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  {
    "from": "2024-12-01",
    "to": "2024-01-28",
    "role": "Second memeber",
    "position": "Member of the Ultimate Human",
    "company": "Human Centipede",
    "id": crypto.randomUUID(),
    "show": 1,
  },
];

export {
  exampleGeneralInfo,
  exampleEducationalExperiences,
  examplePracticalExperiences,
};