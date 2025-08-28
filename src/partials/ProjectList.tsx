import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const projectData = [
  {
    name: 'Interactive Audio',
    description:
      'Interactive Audio is a project that explores the integration of audio and interactive elements to create immersive experiences.',
    link: '/projects/interactive-audio/',
    img: {
      src: '/assets/images/robot_audio.png',
      alt: 'Interactive Audio Project',
    },
    tags: [
      { color: ColorTags.FUCHSIA, label: 'Object Rendering' },
      { color: ColorTags.INDIGO, label: 'CAD' },
      { color: ColorTags.ROSE, label: 'Object Detection' },
      { color: ColorTags.ORANGE, label: 'Mechanism Design' },
    ],
  },
  {
    name: 'Sawyer Custom Gripper',
    description:
      'My design and integration of a custom gripper for the robot Sawyer Arm to manipulate delicate household objects.',
    link: '/projects/sawyer/',
    img: {
      src: '/assets/images/stackrobot.webp',
      alt: 'Sawyer Custom Gripper',
    },
    tags: [
      { color: ColorTags.FUCHSIA, label: 'CAD' },
      { color: ColorTags.SKY, label: 'Motion Planning' },
      { color: ColorTags.ROSE, label: 'Controls' },
      { color: ColorTags.LIME, label: 'RVIZ' },
    ],
  },
  {
    name: 'Junior Year Project: RC Car',
    description:
      'Designed and manufactured a custom RC car from scratch, featuring an Ackermann steering system with interchangeable rear-wheel-drive configurations using both gear-driven and pulley-belt mechanisms.',
    link: '/projects/RC_Car/',
    img: {
      src: '/assets/images/rc_cara.png',
      alt: 'RC Car',
    },
    tags: [
      { color: ColorTags.FUCHSIA, label: 'CAD' },
      { color: ColorTags.VIOLET, label: 'GD&T' },
      { color: ColorTags.ORANGE, label: 'FEA' },
      { color: ColorTags.INDIGO, label: 'Design Theory and Validation' },
    ],
  },
  {
    name: 'GenAI Manipulate',
    description:
      'GenAI Manipulate combines AI and robotics to create an interactive interface for robotic manipulation tasks.',
    link: '/projects/genai-manipulate/',
    img: {
      src: '/assets/images/robot_arm.png',
      alt: 'GenAI Manipulate Project',
    },
    tags: [
      { color: ColorTags.VIOLET, label: 'Gen-AI' },
      { color: ColorTags.EMERALD, label: 'ROS2' },
      { color: ColorTags.YELLOW, label: 'Computer Vision' },
      { color: ColorTags.PINK, label: 'Sensor Fusion' },
    ],
  },
  {
    name: 'TeleMoMa',
    description:
      'TeleMoMa is a teleoperation system designed for robotic arms, allowing users to remotely control movements and perform tasks with precision.',
    link: '/projects/telemoma/',
    img: {
      src: '/assets/images/Fetch-TCS-SuperApp.png',
      alt: 'TeleMoMa Project',
    },
    tags: [
      { color: ColorTags.FUCHSIA, label: 'ROS' },
      { color: ColorTags.LIME, label: 'Robotics' },
      { color: ColorTags.SKY, label: 'Teleoperation' },
      { color: ColorTags.ROSE, label: 'Python' },
      { color: ColorTags.YELLOW, label: 'VR' },
    ],
  },
];

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {projectData.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          img={project.img}
          category={
            <>
              {project.tags.map((tag) => (
                <Tags key={tag.label} color={tag.color}>
                  {tag.label}
                </Tags>
              ))}
            </>
          }
        />
      ))}
    </div>
  </Section>
);

export { ProjectList };
