import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./TEST/index";
import styles from "./Test.module.css";
import { fetchTotal, fetchDailyData, fetchChAusCan } from "./API/index";
import Footer from "./footer";

class Test extends Component {
  state = {
    data: {},
    data2: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchTotal();
    this.setState({ data: fetchedData });
    const fetchedDailydata = await fetchDailyData();
    this.setState({ data2: fetchedDailydata });
  }

  handleCountryChange = async (country) => {
    if (country === "Global") {
      const fetchedData = await fetchTotal();
      this.setState({ data: fetchedData });
      const fetchedDailydata = await fetchDailyData();
      this.setState({ data2: fetchedDailydata });
    }
    if (
      country !== "Global" &&
      "Holy See (Vatican City State)" &&
      "Côte d'Ivoire" &&
      "Curaçao" &&
      "Lao People's Democratic Republic" &&
      "China" &&
      "Australia" &&
      "Canada"
    ) {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);

      let cases = {};
      let recovered = {};
      let deaths = {};
      let dataProvince = {};

      fetchedDailydata.data.map((item) => {
        if (country.toLowerCase() === item.province) {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;

          dataProvince = { cases, recovered, deaths };
          console.log({ cases, recovered, deaths });
          this.setState({ data2: dataProvince });
        } else if (country === item.country && item.province === null) {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
          console.log({ cases, recovered, deaths });
          this.setState({ cases, recovered, deaths });
        }
      });
    }

    if (country === "Holy See (Vatican City State)") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.country === "Holy See") {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "Côte d'Ivoire") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.country === "Cote d'Ivoire") {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "Curaçao") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.province === "curacao") {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "Lao People's Democratic Republic") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.country === `Lao People"s Democratic Republic`) {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "Réunion") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.province === "reunion") {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "St. Barth") {
      const fetchedData = await fetchTotal(country);
      this.setState({ data: fetchedData, country: country });

      const fetchedDailydata = await fetchDailyData(country);
      let cases = {};
      let recovered = {};
      let deaths = {};
      fetchedDailydata.data.map((item) => {
        if (item.province === `saint barthelemy`) {
          cases = item.timeline.cases;
          recovered = item.timeline.recovered;
          deaths = item.timeline.deaths;
        }
      });
      this.setState({ data2: { cases, recovered, deaths } });
    }

    if (country === "China" || "Australia" || "Canada") {
      const fetchedDailydata = await fetchChAusCan(country);

      this.setState({ data2: fetchedDailydata });
    }
  };

  render() {
    const { data, data2, country } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data2} country={country} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Test;
