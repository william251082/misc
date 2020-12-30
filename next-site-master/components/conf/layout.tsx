import cn from 'classnames';
import VercelLogo from '@components/icons/platform-logotype';
import { useEffect } from 'react';
import { guidelinesUrl, codeOfConductUrl, confEmail } from '@lib/conf';
import styles from './layout.module.css';
import styleUtils from './utils.module.css';
import ConfLogo from './conf-logo';

type Props = {
  skipHeaderFooterAnimation: boolean;
  children: React.ReactNode;
  confLogoLink?: string;
};

function HostedByVercel({ linkEnabled }: { linkEnabled: boolean }) {
  const child = (
    <>
      Hosted by <VercelLogo color="currentColor" />
    </>
  );
  return (
    <div className={styles['secondary-text']}>
      {linkEnabled ? (
        <a
          href="https://vercel.com/home?utm_source=next-site&utm_medium=logo&utm_campaign=next-conf"
          className={cn(styles['footer-link'], styles['footer-logo'])}
          target="_blank"
          rel="noopener noreferrer"
        >
          {child}
        </a>
      ) : (
        <span className={cn(styles['footer-logo'])}>{child}</span>
      )}
    </div>
  );
}

export default function Layout({ children, skipHeaderFooterAnimation, confLogoLink }: Props) {
  useEffect(() => {
    document.documentElement.style.background = '#000';
    document.body.style.background = '#000';
    return () => {
      document.documentElement.style.background = '#fff';
      document.body.style.background = '#fff';
    };
  }, []);
  const linkEnabled = !!confLogoLink;
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <header
          className={cn(styles.header, {
            [styleUtils.appear]: !skipHeaderFooterAnimation,
            [styleUtils['appear-first']]: !skipHeaderFooterAnimation
          })}
        >
          <div className={styles['header-logos']}>
            <ConfLogo link={confLogoLink} />
            <div className={styles['header-logos-secondary']}>
              <div className={styles['header-separator']} />
              <div className={styles.description}>
                An interactive online experience by the community, free for everyone.
              </div>
            </div>
          </div>
          <div
            className={cn(styles['header-right'], {
              [styleUtils.appear]: !skipHeaderFooterAnimation,
              [styleUtils['appear-second']]: !skipHeaderFooterAnimation
            })}
          >
            <HostedByVercel linkEnabled={linkEnabled} />
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.full}>{children}</div>
        </main>

        <footer
          className={cn(styles.footer, {
            [styleUtils.appear]: !skipHeaderFooterAnimation,
            [styleUtils['appear-sixth']]: !skipHeaderFooterAnimation
          })}
        >
          <div className={styles['footer-legal']}>
            <div className={styles['footer-hostedby']}>
              <HostedByVercel linkEnabled={linkEnabled} />
              <div className={styles['footer-separator']} />
            </div>
            <div className={styles['footer-copyright']}>
              Copyright © 2020{' '}
              {linkEnabled ? (
                <a
                  href="https://vercel.com/home?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf"
                  className={cn(styles['footer-link'], styles['footer-logo'])}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
              ) : (
                <>Vercel</>
              )}
              , Inc. All rights reserved.
            </div>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href={codeOfConductUrl}
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
            </p>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href="https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf"
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </p>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href={guidelinesUrl}
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Proposal Guidelines
              </a>
            </p>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href={`mailto:${confEmail}`}
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                {confEmail}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
