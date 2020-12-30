import cn from 'classnames';
import styles from './proposal-header.module.css';
import styleUtils from './utils.module.css';

type Props = {
  // To re-trigger animations https://stackoverflow.com/a/52232304/114157
  keyName?: React.Key;
  hero: React.ReactNode;
  description?: React.ReactNode;
};

export default function ProposalHeader({ keyName, hero, description }: Props) {
  return (
    <>
      <h2
        key={keyName ? `${keyName}-header` : undefined}
        className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}
      >
        {hero}
      </h2>
      {description && (
        <p
          key={keyName ? `${keyName}-description` : undefined}
          className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}
        >
          {description}
        </p>
      )}
    </>
  );
}
