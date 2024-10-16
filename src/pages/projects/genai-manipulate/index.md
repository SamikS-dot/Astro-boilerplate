---
layout: '@/templates/BasePost.astro'
title: "GenAI Manipulate"
description: "GenAI Manipulate combines AI and robotics to create an interactive interface for robotic manipulation tasks."
pubDate: 2024-10-11T00:00:00Z
imgSrc: '/assets/images/Gen_Aimg1.png'
---

# GenAI Manipulate

**GenAI Manipulate** is an innovative project that merges AI technologies with robotics to enhance human-robot interaction. The project focuses on creating a user-friendly interface, enabling users to seamlessly interact with a robotic arm using advanced technologies such as computer vision, generative AI (OpenAI GPT-4), and teleoperation techniques.

## Key Learnings & Skills Gained

Throughout this project, I learned how to integrate complex AI algorithms with robotic control systems to create an intuitive, efficient, and real-time interactive robotic system.

### **Computer Vision Integration**
I gained significant experience with computer vision techniques, leveraging YOLOv8 for object detection and Google Cloud Vision to extract information from the camera feed. This allowed the robot to understand and interact with its environment autonomously. 

- Skills: Object detection, image processing, YOLOv8, Google Vision API
- Challenges: Optimizing image clarity for improved detection in various lighting conditions

### **Generative AI (OpenAI GPT-4)**
Using OpenAI GPT-4, I integrated natural language processing to interpret user inputs, identify objects, and select suitable actions based on the user's needs.

- Skills: AI prompt engineering, API integration, real-time decision-making
- Challenges: Developing prompts that accurately interpret user intent for precise actions

### **Robotics Control with ROS 2**
The project required controlling a Franka Emika Panda robotic arm using ROS 2 Humble. I developed a pipeline that allowed the robot to receive XYZ coordinates and object/action instructions, using a teleoperation interface and inverse kinematic solvers to handle precise pick-and-place tasks.

- Skills: ROS 2 Humble, robot kinematics, MoveIt 2, teleoperation, Gazebo simulation
- Challenges: Implementing real-time robot path planning and dealing with joint constraints

### **Teleoperation Interface**
A custom teleoperation interface was designed to allow users to control the robot’s end-effector. Users can make fine adjustments or take over full manual control, providing flexibility during operation.

- Skills: User interface design, robotics user control, real-time command handling
- Challenges: Ensuring a smooth user experience for precise manipulation

### **Integration of AI and Robotics**
The combination of vision-based AI and motion planning allowed for robust, real-time interactions. The robot could take user commands, analyze its environment, and execute tasks autonomously.

- Skills: AI-driven robotics, inverse kinematics, AI decision-making
- Challenges: Balancing the robot’s autonomy with user teleoperation controls

## Project Features

- **Real-Time Object Recognition:** YOLOv8 enables precise and fast identification of objects in the workspace.
- **GPT-4 Integration:** GPT-4 is used for interpreting user inputs and guiding the robot's actions.
- **Teleoperation Capabilities:** Users can manually control the robot or let it perform tasks autonomously based on AI feedback.
- **Motion Planning:** The robot’s movement is planned using MoveIt 2 to ensure collision-free paths.
  
## Challenges Faced

- **Calibration:** Achieving consistent object detection accuracy across different lighting environments.
- **API Response Times:** Balancing AI response times with real-time robotic movement required optimization.
- **Path Planning:** Handling complex paths where the robot’s workspace was limited by obstacles or joint restrictions.

## Conclusion

GenAI Manipulate represents a cutting-edge integration of AI and robotics. It showcases how advanced AI technologies like GPT-4 can be combined with precise robotic control systems to create a seamless user experience. From real-time object detection to hands-on teleoperation, this project highlights the potential for future innovations in the field of human-robot interaction.

## Links

[GitHub Repository](https://github.com/SamikS-dot/GenAI-Manipulate)

[More about Generative AI](https://www.openai.com)
