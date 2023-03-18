const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldestAge, person) => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
        if (age > oldestAge.age) { // checks if the age is higher
            return {
                name: person.name,
                age
            }
        } else {
            return oldestAge;
        }
    }, { age: 0 });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
