import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title:
        "The Morning After: Kim Kardashian is the face of Beats’ skin-colored earbuds",
      description:
        'Kim Kardashian has teamed up with Apple on a custom version of the Beats Fit Pro. The new Beats x Kim collab is available in a trio of skin colors, which are meant to either "blend in or stand out," according to Kardashian. They are still just your standard B…',
      url: "https://www.engadget.com/the-morning-after-kim-kardashian-is-the-face-of-beats-skin-colored-earbuds-111518653.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/42f12f10-14fc-11ed-9deb-223f6720bcd5",
      publishedAt: "2022-08-10T11:15:18Z",
      content:
        'Kim Kardashian has teamed up with Apple on a custom version of the Beats Fit Pro. The new Beats x Kim collab is available in a trio of skin colors, which are meant to either "blend in or stand out," … [+3061 chars]',
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Reece Rogers",
      title:
        "How to Play Netflix Games like Into the Breach and Krispee Street",
      description:
        "The streaming giant offers free mobile games to all subscribers. Here's how to find them—and what you should play first.",
      url: "https://www.wired.com/story/how-to-play-netflix-games/",
      urlToImage:
        "https://media.wired.com/photos/62f3f15e62a028800b41ce23/191:100/w_1280,c_limit/Into-The-Breach-How-To-Play-Netflix-Games-Gear.jpg",
      publishedAt: "2022-08-10T18:03:55Z",
      content:
        "Do you subscribe to Netflix and own a smartphone? The streaming company offers a small selection of mobile games to all subscribers at no additional cost, but you essentially have to complete a side … [+2676 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Richard Lawler",
      title:
        "Apple won’t even tell Ben Stiller how many of you are watching Severance",
      description:
        "According to Ben Stiller, Apple isn’t interested in sharing detailed numbers about how many people watch Severance, just vague charts that sound like its M1 Pro and M2 performance graphs.",
      url: "https://www.theverge.com/23298275/apple-severance-ben-stiller-ratings-viewers-emmys",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Y0JIVQ59ZW3aCUNGhWgLn7E23II=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23236106/Severance_Photo_010101.jpg",
      publishedAt: "2022-08-10T00:17:43Z",
      content:
        "Apple\r\n\n \n\n There’s no doubt that Severance is a hit — the show’s first season made our best entertainment of 2022 list even as it “paints the darkest possible portrait of how megacorporations think … [+1834 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Andrew Cunningham",
      title: "Microsoft open-sources its cute 3D emoji, albeit without Clippy",
      description:
        "Designs will be useful for incorporating emoji into apps, art projects, and more.",
      url: "https://arstechnica.com/gadgets/2022/08/microsoft-open-sources-its-cute-3d-emoji-albeit-without-clippy/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/08/img_microsoft_fluent_emoji_github_wide-760x380.jpg",
      publishedAt: "2022-08-10T16:00:43Z",
      content:
        "1 with 1 posters participating\r\nAs part of its Windows 11 design push, Microsoft also published fun redesigns for all of its emoji characters that added more character and texture than the older Wind… [+2036 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello I am a Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsGirrafe Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-3" key={element.url}>
                <NewsItem
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
