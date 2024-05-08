// Fetch data from given API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter method to get all the countries from Asia continent/region 
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Get all the countries with a population of less than 2 lakhs using filter method
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);

    // Print name, capital, flag of each country using forEach method
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Print the total population of countries using reduce method
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD);
    console.log("Country using US dollars as currency:", countryWithUSD.name.common);
  })
  .catch(error => console.error('Error fetching data:', error));

// Fetch data from given API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter method to get all the countries from Asia continent/region 
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Get all the countries with a population of less than 2 lakhs using filter method
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);

    // Print name, capital, flag of each country using forEach method
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Print the total population of countries using reduce method
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD);
    console.log("Country using US dollars as currency:", countryWithUSD.name.common);
  })
  .catch(error => console.error('Error fetching data:', error));

