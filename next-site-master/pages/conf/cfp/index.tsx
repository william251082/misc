import { SkipNavContent } from '@reach/skip-nav';
import { SITE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import Layout from '@components/conf/layout';
import ProposalType from '@components/conf/proposal-type';
import ProposalHeader from '@components/conf/proposal-header';
import { cfpTitle, cfpClosed } from '@lib/conf';

export default function Index() {
  const title = `${cfpTitle} – Next.js Conf`;
  return (
    <Page title={title} hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/cfp-twitter-card.png"
        title={title}
        url={`${SITE_URL}/conf/cfp`}
        description={cfpClosed}
      />
      <SkipNavContent />
      <Layout skipHeaderFooterAnimation confLogoLink="/conf">
        <ProposalHeader hero={cfpTitle} />
        <ProposalType />
      </Layout>
    </Page>
  );
}
