import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>This a news Component
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
      </div>
    )
  }
}
