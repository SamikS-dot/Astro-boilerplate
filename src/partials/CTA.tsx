import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
        Please contact me at <GradientText>imsamik@gmail.com</GradientText> if you have any questions regarding the aforementioned projects!
      </h2>
    </div>
  </Section>
);

export { CTA };
