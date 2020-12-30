import {
  cfpSpeakerTitle,
  cfpWorkshopTitle,
  cfpOtherTitle,
  ProposalType,
  cfpClosed
} from '@lib/conf';
import ProposalHeader from './proposal-header';

type Props = {
  proposalType: ProposalType;
};

const hero: Record<ProposalType, string> = {
  speaker: cfpSpeakerTitle,
  workshop: cfpWorkshopTitle,
  'propose-something': cfpOtherTitle
};

export default function ProposalFormHeader({ proposalType }: Props) {
  return (
    <ProposalHeader keyName={proposalType} hero={hero[proposalType]} description={cfpClosed} />
  );
}
