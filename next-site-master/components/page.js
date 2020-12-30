import PageContainer from './page-container';
import Header from './header';

export default function Page({
  title,
  description = undefined,
  sticky = undefined,
  children,
  hideHeader,
  hideHeaderBorder = false
}) {
  return (
    <PageContainer title={title} description={description}>
      {!hideHeader && <Header sticky={sticky} hideHeaderBorder={hideHeaderBorder} />}
      {children}
    </PageContainer>
  );
}
