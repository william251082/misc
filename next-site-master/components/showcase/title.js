import Container from '../container';
import SectionHeader from '../section-header';
import { ORG_NAME } from '../../lib/constants';

export default function Title() {
  return (
    <Container center region="showcase">
      <div className="showcase-title">
        <SectionHeader
          id="showcase"
          title="Showcase"
          margin="0 0 2rem 0"
          description={
            <span>
              Meet hundreds of beautiful websites <br className="display-mobile" />
              built with Next.js by {ORG_NAME}
            </span>
          }
        />
      </div>

      <style jsx>{`
        .showcase-title {
          display: flex;
          padding-top: 2rem;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }
      `}</style>
    </Container>
  );
}
