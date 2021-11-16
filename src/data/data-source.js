import data from './data.json';

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = data.clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
