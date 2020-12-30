import cn from 'classnames';
import { cfpApprovalPanel, decisionDeadlineShort, guidelinesUrl } from '@lib/conf';
import ExternalLink from '@components/icons/external-link';
import styles from './proposal-type.module.css';
import styleUtils from './utils.module.css';

export default function ProposalType() {
  return (
    <section className={cn(styleUtils.appear, styleUtils['appear-second'])}>
      <p className={styles['small-description']}>
        Submissions are now closed. Our reviewers will take a look at your submissions, and you’ll
        be notified of the decision by {decisionDeadlineShort}. Please do not message them about
        your submission. For more details, please read the{' '}
        <a
          href={guidelinesUrl}
          className={styles['description-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          Proposal Guidelines <ExternalLink color="currentColor" />
        </a>
        .
      </p>
      <h2 className={styles['small-header']}>Approval Panel</h2>
      <div className={styles.panels}>
        {cfpApprovalPanel.map(({ name, company, image }) => (
          <a
            key={name}
            className={styles['panel-item']}
            href={guidelinesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/static/images/conf/${image}`}
              alt={name}
              className={styles['panel-image']}
              width={110}
              height={110}
            />
            <div className={styles['panel-name']}>{name}</div>
            <div className={styles['panel-company']}>{company}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
