const mockUsers = [
  {
    "personalInfo": {
      "fullName": "Barnett Woodard",
      "phoneNumber": "+23461718490477",
      "email": "Wiggins@gmail.com",
      "bvn": "84767490842",
      "gender": "female",
      "maritalStatus": "Married",
      "children": "None",
      "typeOfResidence": "Parent's Apartment",
      "organization": "Jasper",
      "username": "brigitte86"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "2 years",
      "officeEmail": "juliana@.ge",
      "monthlyIncome": "₦356489",
      "loanRepayment": "₦42044"
    },
    "socialsInfo": {
      "twitter": "@Jeannie",
      "facebook": "Lucille Gay",
      "instagram": "@Caldwell"
    },
    "guarantorInfo": {
      "fullName": "Peck Gibbs",
      "phoneNumber": "+23453764984320",
      "email": "Joanna@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2022-04-07 08:13:40 AM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Stout Glass",
      "phoneNumber": "+23488249007092",
      "email": "Terra@gmail.com",
      "bvn": "72473514665",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "3+",
      "typeOfResidence": "Parent's Apartment",
      "organization": "Sarasonic",
      "username": "opal13"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "3+ years",
      "officeEmail": "moody@.frl",
      "monthlyIncome": "₦443695",
      "loanRepayment": "₦38562"
    },
    "socialsInfo": {
      "twitter": "@Hope",
      "facebook": "Benita Copeland",
      "instagram": "@Lynette"
    },
    "guarantorInfo": {
      "fullName": "Dionne Harris",
      "phoneNumber": "+23491217554734",
      "email": "Alberta@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2018-07-05 02:26:31 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Jarvis Carpenter",
      "phoneNumber": "+23477220540317",
      "email": "Lessie@gmail.com",
      "bvn": "12514920493",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "1",
      "typeOfResidence": "Shared Apartment",
      "organization": "Hawkster",
      "username": "boyer29"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "2 years",
      "officeEmail": "blankenship@.th",
      "monthlyIncome": "₦217075",
      "loanRepayment": "₦29795"
    },
    "socialsInfo": {
      "twitter": "@Warner",
      "facebook": "Dora Mclean",
      "instagram": "@Hutchinson"
    },
    "guarantorInfo": {
      "fullName": "Muriel Hanson",
      "phoneNumber": "+23426953048878",
      "email": "Luz@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2015-04-10 11:55:02 PM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Jeanie Hunt",
      "phoneNumber": "+23433545346436",
      "email": "Glover@gmail.com",
      "bvn": "71308250271",
      "gender": "female",
      "maritalStatus": "Single",
      "children": "2",
      "typeOfResidence": "Own Apartment",
      "organization": "Portica",
      "username": "dalton79"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "3+ years",
      "officeEmail": "becker@.luxe",
      "monthlyIncome": "₦237638",
      "loanRepayment": "₦42232"
    },
    "socialsInfo": {
      "twitter": "@Savannah",
      "facebook": "Little Chang",
      "instagram": "@Mathis"
    },
    "guarantorInfo": {
      "fullName": "Huber Davis",
      "phoneNumber": "+23450862131500",
      "email": "Pugh@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2016-08-13 04:32:36 PM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Sadie Adkins",
      "phoneNumber": "+23414723229253",
      "email": "Barr@gmail.com",
      "bvn": "59829468607",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "3+",
      "typeOfResidence": "Shared Apartment",
      "organization": "Retrotex",
      "username": "karina28"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "2 years",
      "officeEmail": "nikki@.hn",
      "monthlyIncome": "₦491068",
      "loanRepayment": "₦46478"
    },
    "socialsInfo": {
      "twitter": "@Figueroa",
      "facebook": "Lana Levine",
      "instagram": "@Justice"
    },
    "guarantorInfo": {
      "fullName": "Hester Conner",
      "phoneNumber": "+23429595426885",
      "email": "Gena@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2020-07-15 10:34:57 PM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Brennan Knapp",
      "phoneNumber": "+23438543477803",
      "email": "Isabel@gmail.com",
      "bvn": "40075155475",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "None",
      "typeOfResidence": "Own Apartment",
      "organization": "Uplinx",
      "username": "hardy19"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "1 year",
      "officeEmail": "deena@.kr",
      "monthlyIncome": "₦237670",
      "loanRepayment": "₦43898"
    },
    "socialsInfo": {
      "twitter": "@Cameron",
      "facebook": "Juliet Yang",
      "instagram": "@Susanne"
    },
    "guarantorInfo": {
      "fullName": "Hale Cameron",
      "phoneNumber": "+23443873166894",
      "email": "Liliana@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2022-01-11 07:56:57 PM",
    "status": "Inactive"
  },
  {
    "personalInfo": {
      "fullName": "Fanny Casey",
      "phoneNumber": "+23435182613959",
      "email": "Hannah@gmail.com",
      "bvn": "21872248811",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "None",
      "typeOfResidence": "Rented Apartment",
      "organization": "Neurocell",
      "username": "imogene40"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "3+ years",
      "officeEmail": "mendez@.spreadbetting",
      "monthlyIncome": "₦466990",
      "loanRepayment": "₦18772"
    },
    "socialsInfo": {
      "twitter": "@Ronda",
      "facebook": "Sheryl Thompson",
      "instagram": "@Nicholson"
    },
    "guarantorInfo": {
      "fullName": "Landry Donovan",
      "phoneNumber": "+23420394452894",
      "email": "Kimberly@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2023-05-19 04:51:41 AM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Flores Fry",
      "phoneNumber": "+23440684655859",
      "email": "Vaughn@gmail.com",
      "bvn": "15308471575",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "1",
      "typeOfResidence": "Own Apartment",
      "organization": "Isologia",
      "username": "murray10"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "2 years",
      "officeEmail": "buchanan@.sb",
      "monthlyIncome": "₦462667",
      "loanRepayment": "₦11992"
    },
    "socialsInfo": {
      "twitter": "@Reese",
      "facebook": "Marva Downs",
      "instagram": "@Cathy"
    },
    "guarantorInfo": {
      "fullName": "Francis Dominguez",
      "phoneNumber": "+23498029933015",
      "email": "Jannie@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2015-02-03 08:15:10 PM",
    "status": "Inactive"
  },
  {
    "personalInfo": {
      "fullName": "Gay Young",
      "phoneNumber": "+23421621886546",
      "email": "Davidson@gmail.com",
      "bvn": "65980083318",
      "gender": "male",
      "maritalStatus": "Divorced",
      "children": "1",
      "typeOfResidence": "Rented Apartment",
      "organization": "Blurrybus",
      "username": "liza92"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "2 years",
      "officeEmail": "santos@.forsale",
      "monthlyIncome": "₦477842",
      "loanRepayment": "₦21525"
    },
    "socialsInfo": {
      "twitter": "@William",
      "facebook": "Haney Bowers",
      "instagram": "@Puckett"
    },
    "guarantorInfo": {
      "fullName": "Shaw Vazquez",
      "phoneNumber": "+23434083316773",
      "email": "Klein@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2016-08-22 10:38:49 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Calderon Nieves",
      "phoneNumber": "+23480789063523",
      "email": "Concetta@gmail.com",
      "bvn": "18669501528",
      "gender": "male",
      "maritalStatus": "Divorced",
      "children": "3+",
      "typeOfResidence": "Parent's Apartment",
      "organization": "Goko",
      "username": "underwood29"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "2 years",
      "officeEmail": "esmeralda@.coffee",
      "monthlyIncome": "₦460340",
      "loanRepayment": "₦30493"
    },
    "socialsInfo": {
      "twitter": "@Chandler",
      "facebook": "Megan Rice",
      "instagram": "@Maxwell"
    },
    "guarantorInfo": {
      "fullName": "Gail Sargent",
      "phoneNumber": "+23470378534240",
      "email": "Roberson@gmail.com",
      "relationship": "Sibling"
    },
    "dateJoined": "2016-09-03 11:32:56 AM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Wyatt Lowery",
      "phoneNumber": "+23423824161618",
      "email": "Georgette@gmail.com",
      "bvn": "54838155260",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "None",
      "typeOfResidence": "Shared Apartment",
      "organization": "Playce",
      "username": "molly27"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "1 year",
      "officeEmail": "clayton@.vet",
      "monthlyIncome": "₦327444",
      "loanRepayment": "₦37967"
    },
    "socialsInfo": {
      "twitter": "@Galloway",
      "facebook": "Jeanette Wiggins",
      "instagram": "@Sonja"
    },
    "guarantorInfo": {
      "fullName": "Emilia Rocha",
      "phoneNumber": "+23471728146611",
      "email": "Brittney@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2015-11-30 10:04:36 PM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Margery Watson",
      "phoneNumber": "+23492105027483",
      "email": "Angel@gmail.com",
      "bvn": "70954929800",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "3+",
      "typeOfResidence": "Own Apartment",
      "organization": "Inventure",
      "username": "jimenez35"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "1 year",
      "officeEmail": "barbra@.bmw",
      "monthlyIncome": "₦220632",
      "loanRepayment": "₦20841"
    },
    "socialsInfo": {
      "twitter": "@Alyssa",
      "facebook": "Queen Nash",
      "instagram": "@Tabitha"
    },
    "guarantorInfo": {
      "fullName": "Allison Hall",
      "phoneNumber": "+23410021997707",
      "email": "Suzette@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2015-02-19 04:46:06 PM",
    "status": "Inactive"
  },
  {
    "personalInfo": {
      "fullName": "Pauline Joyner",
      "phoneNumber": "+23485169720549",
      "email": "Jenifer@gmail.com",
      "bvn": "18848495007",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "2",
      "typeOfResidence": "Rented Apartment",
      "organization": "Ziore",
      "username": "magdalena10"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 year",
      "officeEmail": "rogers@.doha",
      "monthlyIncome": "₦435926",
      "loanRepayment": "₦39755"
    },
    "socialsInfo": {
      "twitter": "@Annabelle",
      "facebook": "Clark Rush",
      "instagram": "@Everett"
    },
    "guarantorInfo": {
      "fullName": "Crystal Blankenship",
      "phoneNumber": "+23492324092936",
      "email": "Cleo@gmail.com",
      "relationship": "Sibling"
    },
    "dateJoined": "2017-04-11 08:51:59 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Veronica Waters",
      "phoneNumber": "+23412337281172",
      "email": "Whitfield@gmail.com",
      "bvn": "89152072342",
      "gender": "female",
      "maritalStatus": "Single",
      "children": "None",
      "typeOfResidence": "Own Apartment",
      "organization": "Corporana",
      "username": "davis39"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "3+ years",
      "officeEmail": "bray@.ski",
      "monthlyIncome": "₦457403",
      "loanRepayment": "₦22733"
    },
    "socialsInfo": {
      "twitter": "@Fleming",
      "facebook": "Dorothy Lopez",
      "instagram": "@Mills"
    },
    "guarantorInfo": {
      "fullName": "Leola Barton",
      "phoneNumber": "+23475128391774",
      "email": "Norton@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2016-05-10 03:58:16 PM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Carmella Jacobson",
      "phoneNumber": "+23473788628488",
      "email": "Claire@gmail.com",
      "bvn": "78629728652",
      "gender": "male",
      "maritalStatus": "Single",
      "children": "3+",
      "typeOfResidence": "Rented Apartment",
      "organization": "Zinca",
      "username": "carr68"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "3+ years",
      "officeEmail": "janette@.coop",
      "monthlyIncome": "₦185203",
      "loanRepayment": "₦5782"
    },
    "socialsInfo": {
      "twitter": "@Goldie",
      "facebook": "Rosalinda Griffin",
      "instagram": "@Keisha"
    },
    "guarantorInfo": {
      "fullName": "Whitaker Kinney",
      "phoneNumber": "+23465263620317",
      "email": "Atkinson@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2023-07-25 09:06:03 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Roy Quinn",
      "phoneNumber": "+23412517727748",
      "email": "Sears@gmail.com",
      "bvn": "37652322185",
      "gender": "male",
      "maritalStatus": "Divorced",
      "children": "3+",
      "typeOfResidence": "Rented Apartment",
      "organization": "Assurity",
      "username": "boyd11"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "3+ years",
      "officeEmail": "kathleen@.ck",
      "monthlyIncome": "₦295647",
      "loanRepayment": "₦37938"
    },
    "socialsInfo": {
      "twitter": "@Mara",
      "facebook": "Willie Dudley",
      "instagram": "@Sandra"
    },
    "guarantorInfo": {
      "fullName": "Linda Marquez",
      "phoneNumber": "+23464584384084",
      "email": "Frankie@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2019-09-04 07:01:06 AM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Vera Harper",
      "phoneNumber": "+23424441354774",
      "email": "Lakeisha@gmail.com",
      "bvn": "19946907348",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "3+",
      "typeOfResidence": "Shared Apartment",
      "organization": "Chorizon",
      "username": "bradford88"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "3+ years",
      "officeEmail": "kaye@.otsuka",
      "monthlyIncome": "₦110768",
      "loanRepayment": "₦27673"
    },
    "socialsInfo": {
      "twitter": "@Susie",
      "facebook": "Cohen Guy",
      "instagram": "@Nelda"
    },
    "guarantorInfo": {
      "fullName": "Michael Roberson",
      "phoneNumber": "+23453882983957",
      "email": "Arlene@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2020-01-04 09:35:44 AM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Melendez Bird",
      "phoneNumber": "+23440116027782",
      "email": "Merrill@gmail.com",
      "bvn": "86320483217",
      "gender": "female",
      "maritalStatus": "Married",
      "children": "1",
      "typeOfResidence": "Own Apartment",
      "organization": "Bedder",
      "username": "margo77"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "2 years",
      "officeEmail": "mariana@.party",
      "monthlyIncome": "₦150989",
      "loanRepayment": "₦37532"
    },
    "socialsInfo": {
      "twitter": "@Conley",
      "facebook": "Tillman Paul",
      "instagram": "@Regina"
    },
    "guarantorInfo": {
      "fullName": "Beasley Bowman",
      "phoneNumber": "+23463342427633",
      "email": "Meyer@gmail.com",
      "relationship": "Sibling"
    },
    "dateJoined": "2020-10-05 08:57:01 PM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Montgomery Obrien",
      "phoneNumber": "+23449821971978",
      "email": "Dillon@gmail.com",
      "bvn": "26056432487",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "2",
      "typeOfResidence": "Own Apartment",
      "organization": "Comcur",
      "username": "best31"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "3+ years",
      "officeEmail": "lucia@.ga",
      "monthlyIncome": "₦437046",
      "loanRepayment": "₦42898"
    },
    "socialsInfo": {
      "twitter": "@Griffith",
      "facebook": "Rachel Walker",
      "instagram": "@Hilda"
    },
    "guarantorInfo": {
      "fullName": "Schultz Love",
      "phoneNumber": "+23417300229868",
      "email": "Moon@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2018-08-21 03:34:06 PM",
    "status": "Inactive"
  },
  {
    "personalInfo": {
      "fullName": "Alana Sims",
      "phoneNumber": "+23437802923466",
      "email": "Stephanie@gmail.com",
      "bvn": "20402342900",
      "gender": "male",
      "maritalStatus": "Single",
      "children": "None",
      "typeOfResidence": "Own Apartment",
      "organization": "Overplex",
      "username": "clements23"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "3+ years",
      "officeEmail": "mia@.info",
      "monthlyIncome": "₦283537",
      "loanRepayment": "₦32650"
    },
    "socialsInfo": {
      "twitter": "@Matthews",
      "facebook": "Burch Tillman",
      "instagram": "@Adela"
    },
    "guarantorInfo": {
      "fullName": "Harrington Ellison",
      "phoneNumber": "+23440005063907",
      "email": "York@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2023-12-11 11:40:06 AM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Deleon Macias",
      "phoneNumber": "+23489111940536",
      "email": "Wade@gmail.com",
      "bvn": "95746646605",
      "gender": "male",
      "maritalStatus": "Divorced",
      "children": "None",
      "typeOfResidence": "Parent's Apartment",
      "organization": "Memora",
      "username": "page99"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "B.Sc",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "1 year",
      "officeEmail": "bennett@.temasek",
      "monthlyIncome": "₦144850",
      "loanRepayment": "₦6307"
    },
    "socialsInfo": {
      "twitter": "@Sharpe",
      "facebook": "Sue Nichols",
      "instagram": "@Good"
    },
    "guarantorInfo": {
      "fullName": "Lee Cruz",
      "phoneNumber": "+23421504794476",
      "email": "Wanda@gmail.com",
      "relationship": "Parent"
    },
    "dateJoined": "2022-11-26 09:28:40 PM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Leon Ford",
      "phoneNumber": "+23458561465103",
      "email": "Kristine@gmail.com",
      "bvn": "73802426302",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "None",
      "typeOfResidence": "Own Apartment",
      "organization": "Marqet",
      "username": "gayle25"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 year",
      "officeEmail": "carlene@.barclays",
      "monthlyIncome": "₦228433",
      "loanRepayment": "₦30845"
    },
    "socialsInfo": {
      "twitter": "@Hood",
      "facebook": "Nell Townsend",
      "instagram": "@Helena"
    },
    "guarantorInfo": {
      "fullName": "Lora Bush",
      "phoneNumber": "+23472364928991",
      "email": "Amanda@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2021-02-03 02:06:57 PM",
    "status": "Active"
  },
  {
    "personalInfo": {
      "fullName": "Obrien Robles",
      "phoneNumber": "+23495559740848",
      "email": "Harmon@gmail.com",
      "bvn": "84434677102",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "None",
      "typeOfResidence": "Own Apartment",
      "organization": "Opticom",
      "username": "hayes42"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "2 years",
      "officeEmail": "shawn@.qa",
      "monthlyIncome": "₦245606",
      "loanRepayment": "₦20905"
    },
    "socialsInfo": {
      "twitter": "@Phillips",
      "facebook": "David English",
      "instagram": "@Estes"
    },
    "guarantorInfo": {
      "fullName": "Meyers Farley",
      "phoneNumber": "+23416387753771",
      "email": "Lopez@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2020-05-26 12:32:41 PM",
    "status": "Blacklisted"
  },
  {
    "personalInfo": {
      "fullName": "Branch Dodson",
      "phoneNumber": "+23423649665431",
      "email": "Snow@gmail.com",
      "bvn": "45902512965",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "1",
      "typeOfResidence": "Own Apartment",
      "organization": "Zaggles",
      "username": "james30"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Government",
      "durationOfEmployment": "1 year",
      "officeEmail": "slater@.bingo",
      "monthlyIncome": "₦206104",
      "loanRepayment": "₦49941"
    },
    "socialsInfo": {
      "twitter": "@Deann",
      "facebook": "Compton Hawkins",
      "instagram": "@Tucker"
    },
    "guarantorInfo": {
      "fullName": "Marilyn Fulton",
      "phoneNumber": "+23439531980717",
      "email": "Kris@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2022-04-20 07:41:44 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Drake Serrano",
      "phoneNumber": "+23478196897484",
      "email": "Winifred@gmail.com",
      "bvn": "77329965467",
      "gender": "male",
      "maritalStatus": "Married",
      "children": "None",
      "typeOfResidence": "Parent's Apartment",
      "organization": "Exospace",
      "username": "peterson80"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "3+ years",
      "officeEmail": "marsha@.pr",
      "monthlyIncome": "₦280048",
      "loanRepayment": "₦45952"
    },
    "socialsInfo": {
      "twitter": "@Juarez",
      "facebook": "Howe Weber",
      "instagram": "@Cotton"
    },
    "guarantorInfo": {
      "fullName": "Terri Irwin",
      "phoneNumber": "+23439759193637",
      "email": "Rhea@gmail.com",
      "relationship": "Friend"
    },
    "dateJoined": "2018-01-28 03:01:10 AM",
    "status": "Pending"
  },
  {
    "personalInfo": {
      "fullName": "Jasmine Willis",
      "phoneNumber": "+23474394745553",
      "email": "Pena@gmail.com",
      "bvn": "83388655004",
      "gender": "female",
      "maritalStatus": "Divorced",
      "children": "3+",
      "typeOfResidence": "Own Apartment",
      "organization": "Isosphere",
      "username": "weber38"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "M.Sc",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "2 years",
      "officeEmail": "rose@.samsung",
      "monthlyIncome": "₦283020",
      "loanRepayment": "₦37043"
    },
    "socialsInfo": {
      "twitter": "@Kitty",
      "facebook": "Melva Zamora",
      "instagram": "@Lucinda"
    },
    "guarantorInfo": {
      "fullName": "Evelyn Frazier",
      "phoneNumber": "+23474782286152",
      "email": "Nunez@gmail.com",
      "relationship": "Relative"
    },
    "dateJoined": "2017-11-08 07:32:32 PM",
    "status": "Inactive"
  },
  {
    "personalInfo": {
      "fullName": "Ines Robinson",
      "phoneNumber": "+23437590713323",
      "email": "Stanley@gmail.com",
      "bvn": "89642603711",
      "gender": "female",
      "maritalStatus": "Single",
      "children": "3+",
      "typeOfResidence": "Rented Apartment",
      "organization": "Lunchpad",
      "username": "battle58"
    },
    "educationEmploymentInfo": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "FinTech",
      "durationOfEmployment": "1 year",
      "officeEmail": "johnston@.osaka",
      "monthlyIncome": "₦155984",
      "loanRepayment": "₦41218"
    },
    "socialsInfo": {
      "twitter": "@Cornelia",
      "facebook": "Ewing Horton",
      "instagram": "@Willa"
    },
    "guarantorInfo": {
      "fullName": "Lawanda Taylor",
      "phoneNumber": "+23432120705315",
      "email": "Hughes@gmail.com",
      "relationship": "Sibling"
    },
    "dateJoined": "2016-05-15 03:02:56 PM",
    "status": "Pending"
  }];

export default mockUsers;
