import axios from 'axios';

class DataSource {
  static getData() {
    return axios
      .get(
        'https://my-json-server.typicode.com/febrisatriawan/dicoding-api/cake'
      )
      .then(response => response.data);
    }
}

export default DataSource;
