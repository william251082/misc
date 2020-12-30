import cn from 'classnames';
import { ProposalType } from '@lib/conf';
import Link from 'next/link';
import styles from './proposal-form.module.css';
import styleUtils from './utils.module.css';
import ProposalFormHeader from './proposal-form-header';

type Props = {
  proposalType: ProposalType;
};

export default function ProposalForm({ proposalType }: Props) {
  return (
    <section className={styles.section}>
      <ProposalFormHeader proposalType={proposalType} />
      <div className={cn(styles['text-center'], styleUtils.appear, styleUtils['appear-third'])}>
        <Link href="/conf/cfp">
          <a className={styles.btn}>Go back</a>
        </Link>
      </div>
    </section>
  );
}
