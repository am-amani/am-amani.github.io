---
title: Master Thesis — Multi-Sensor Robotic Navigation
description: A teacher-student policy framework for mobile robot navigation using LiDAR and vision inputs in ROS/Gazebo.
publishDate: 2024-09-01
tags:
  - ROS
  - Navigation
  - Reinforcement Learning
  - Thesis
---

My master thesis focused on multi-sensor robotic navigation for mobile platforms operating in uncertain environments. The work combined a teacher-student policy framework with both LiDAR and visual observations to improve robustness under changing sensing conditions.

The system was implemented in ROS and Gazebo and evaluated on Pioneer 3-DX and TurtleBot3 Waffle platforms. The study examined how a policy trained with richer supervision could transfer to a student network that uses a narrower modality while preserving decision quality.

Key contributions:

- Investigated teacher-student learning for navigation under sensor variability
- Compared LiDAR-based and vision-based policy behavior in simulation
- Demonstrated a practical pipeline for testing navigation robustness in ROS/Gazebo

### Demo Video

<video controls preload="metadata" style="width: 100%; border-radius: 1rem; border: 1px solid rgba(255, 255, 255, 0.15);">
  <source src="/assets/videos/thesis-linkedin.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
