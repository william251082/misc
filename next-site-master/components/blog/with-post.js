import { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/tag';
import formatDate from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import cn from 'classnames';
import FeedbackContext from '../feedback-context';
import FooterFeedback from '../footer-feedback';
import Footer from '../footer';
import Page from '../page';
import Container from '../container';
import Button from '../button';
import HR from '../text/hr';
import { components } from './post-components';
import SocialMeta from '../social-meta';

const Author = meta => {
  return (
    <div className="author">
      <img src={meta.avatar} alt={meta.name} />
      <span className="name f5">
        <span className="real-name fw6">{meta.name}</span>
        <a
          href={`https://twitter.com/${meta.twitter}`}
          className="twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          @{meta.twitter}
        </a>
        <span className="twitter-mobile">
          <a href={`https://twitter.com/${meta.twitter}`} rel="noopener noreferrer" target="_blank">
            @{meta.twitter}
          </a>
        </span>
      </span>
      <style jsx>{`
        .author {
          display: inline-flex;
          align-items: center;
          padding: 0 1rem;
          margin-bottom: 0.5rem;
          white-space: nowrap;
        }
        img {
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          background: #efefef;
        }
        .name {
          line-height: 1.1rem;
          text-align: left;
        }
        .real-name {
          display: block;
        }
        .twitter {
          font-size: 12px;
        }
        .twitter-mobile {
          display: none;
          margin-left: 0.25rem;
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          img {
            width: 1.5rem;
            height: 1.5rem;
          }
          .real-name {
            display: inline;
          }
          .twitter {
            display: none;
          }
          .twitter-mobile {
            display: initial;
          }
        }
      `}</style>
    </div>
  );
};

const HeaderImage = meta => {
  if (meta.headerImage) {
    return (
      <div>
        <style jsx>{`
          div {
            background-image: url(${meta.headerImage});
            background-size: cover;
            background-position: center 30%;
            width: 100%;
            padding: 11% 0;
            min-height: 220px;
          }
        `}</style>
      </div>
    );
  }
  return null;
};

export default meta => ({ children }) => {
  const date = meta.date ? new Date(meta.date) : new Date();
  const [dateDistance, setDateDistance] = useState(null);
  useEffect(() => {
    setDateDistance(distanceInWordsToNow(date));
  }, [date]);

  return (
    <FeedbackContext.Provider value={{ label: 'next-blog' }}>
      <MDXProvider components={components}>
        <Page title={`Blog - ${meta.title} | Next.js`}>
          <SocialMeta image={`/static${meta.link}/twitter-card.png`} {...meta} />
          <HeaderImage {...meta} />
          <Container>
            <h1 className="title fw7">{meta.title}</h1>
            {meta.type && <span className="post-type mute fw7">{meta.type}</span>}
            <div
              className={cn('date mute f5', {
                'date-visible': dateDistance
              })}
            >
              <time dateTime={date}>
                {formatDate(date, 'dddd, MMMM Do YYYY')} ({dateDistance} ago)
              </time>
            </div>
          </Container>
          <div className="authors">
            {meta.authors.map(data => (
              <Author key={data.name} {...data} />
            ))}
          </div>
          <Container>
            <Container small wide overflow>
              <main>{children}</main>
              <div className="back-button">
                <Button href="/blog" invert>
                  ← Back to Blog
                </Button>
              </div>
              <HR />
              <FooterFeedback />
            </Container>
          </Container>
          <Footer />
          <style jsx>{`
            .title {
              text-align: center;
              letter-spacing: -0.05em;
              font-size: 2.5rem;
              padding-top: 2.25rem;
            }
            .date {
              margin: 1rem 0 1rem;
              text-align: center;
              opacity: 0;
              transition: opacity 0.2s ease;
            }
            .date-visible {
              opacity: 1;
            }
            .authors {
              margin: 1.5rem 0 3rem;
              text-align: center;
              border-bottom: 1px solid #eaeaea;
              padding-bottom: 3rem;
            }
            .back-button {
              margin-top: 8rem;
            }
            .icon {
              line-height: 0;
              vertical-align: middle;
            }
            .post-type {
              display: block;
              text-align: center;
              text-transform: uppercase;
              font-size: 12px;
              color: #0070f3;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              .authors {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .title {
                text-align: center;
              }
              .date {
                margin-top: 1rem;
                text-align: center;
              }
            }
          `}</style>
        </Page>
      </MDXProvider>
    </FeedbackContext.Provider>
  );
};
