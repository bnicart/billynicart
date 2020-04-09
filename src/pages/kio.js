import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import moment from 'moment';
import 'moment-precise-range-plugin';

const sinceThen = (now) => {
  const starts = moment('2012-10-07');
  // const now = moment();

  return moment.preciseDiff(starts, now, true);
}

class Clock extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {time: moment()};
	}

  componentDidMount() {
	  this.timerID = setInterval(() => this.tick(), 1000);
	}

  componentWillUnmount() {
	  clearInterval(this.timerID);
	}

  tick() {
	  this.setState({time: moment()});
	}

  render() {
    let since = sinceThen(this.state.time);

    return (
      <div
        style={{
          border: `1px solid pink`,
          textAlign: `center`,
          boxShadow: `3px 3px pink`,
          fontWeight: `bold`,
          fontSize: `25px`
        }}
      >
        { `${since.years} years, ` }
        { `${since.months} months, ` }
        { `${since.days} days, ` }
        { `${since.hours} hours, ` }
        { `${since.minutes} minutes, ` }
        { `${since.seconds} seconds` }
      </div>
    )
  }
}

const Kio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="Kio" />

        <div style={{textAlign: `center`, fontWeight: `bold`, fontSize: `50px`}}>Billy & Yen</div>
        <div style={{textAlign: `center`, marginBottom: `10px`}}>
          <span>since &nbsp;</span>
          <span style={{textDecoration: `underline`}}>October 07, 2012</span>
          <span>&nbsp; for</span>
        </div>
        <Clock />
        <div style={{textAlign: `center`, marginTop: `10px`}}>and counting!!!</div>
      </Layout>
    </div>
  )
}

export default Kio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
