import '../component/cake-list.js';
import DataSource from '../data/DataSource.js';

const main = () => {
  const cakeList = document.querySelector('cake-list');

  const GettingData = async () => {
    try {
      const result = await DataSource.getData();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    cakeList.cake = results;
  };

  const fallbackResult = (message) => {
    cakeList.renderError(message);
  };

  GettingData();
};

export default main;
