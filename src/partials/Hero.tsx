import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Samik</GradientText> 👋
        </>
      }
      description={
        <>
          Aspiring robotics engineer with over 6 years of hands-on experience in
          the field. My background includes extensive work on autonomous
          navigation systems in industrial environments and cutting-edge
          research on reinforcement learning for humanoid robots at{' '}
          <span style={{ color: '#BF5700' }}>
            The University of Texas at Austin
          </span>
          . I am passionate about the development of a seamless interface for
          human-robot interaction.
        </>
      }
      avatar={
        <img
          className="h-64 w-64 rounded-full object-cover"
          src="/assets/images/SamikProfile.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/imsamik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
