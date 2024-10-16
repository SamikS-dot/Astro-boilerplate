---
layout: '@/templates/BasePost.astro'
title: "TeleMoMa: A Modular Teleoperation System"
description: "TeleMoMa enables versatile teleoperation of mobile manipulators using human keypoint detection and behavior cloning algorithms."
pubDate: 2024-10-11T00:00:00Z
imgSrc: '/assets/images/Telemoma.jpg'


---

TeleMoMa is a modular teleoperation system designed to control mobile manipulators using advanced AI technologies. The project focuses on mapping human movements to robot joint states, enabling intuitive and seamless control of robotic systems.


## TeleMoMa: A Modular and Versatile Teleoperation System

**TeleMoMa** is a flexible and modular teleoperation interface developed to control mobile manipulators. It simplifies the teleoperation process by allowing users to combine multiple input devices, such as RGB-D cameras, virtual reality controllers, keyboards, and joysticks, to provide demonstrations for mobile manipulation tasks. This integration lowers the barrier for collecting robot demonstrations, particularly in tasks that require whole-body coordination, making it easier for researchers and developers to teach robots complex behaviors.

<img src="/assets/images/telemoma_architecture.png" alt="TeleMoMa System" width="600" />

### Applications and Robots

TeleMoMa has been tested on robots such as **PAL Tiago++**, **Toyota HSR**, and **Fetch** in both simulation and real-world scenarios. The system supports remote teleoperation by transmitting commands through a computer network, making it versatile for a variety of tasks, including manipulation, navigation, and data collection. I also worked on improving the system's precision by integrating input from multiple devices, balancing intuitive control with precise manipulation.

## Tasks

During the development of TeleMoMa, I worked on various aspects of robotics and AI:

1. **Human Keypoint Detection Algorithms**: Utilizing OpenPose and MMPose, I tracked human movements, translating them into robot joint commands.
2. **Mapping Human States to Robot States**: I normalized human keypoint data to map it accurately to robot joints, enabling precise control over the robot's actions.
3. **Behavior Cloning**: By recording human demonstrations, I trained the robot to mimic human behavior during tasks like object grasping and placement.






## Links

For more info please visit our official website:

[Official TeleMoMa Page](https://robin-lab.cs.utexas.edu/telemoma-web/)

[Learn more about MMPose](https://mmpose.readthedocs.io/en/latest/)


