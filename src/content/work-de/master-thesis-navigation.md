---
title: Masterarbeit - Multi-Sensor-Roboternavigation
description: Ein Teacher-Student-Policy-Framework fuer mobile Roboternavigation mit LiDAR- und Vision-Eingaengen in ROS und Gazebo.
publishDate: 2024-09-01
tags:
  - ROS
  - Navigation
  - Reinforcement Learning
  - Masterarbeit
---

Meine Masterarbeit konzentrierte sich auf Multi-Sensor-Roboternavigation fuer mobile Plattformen in unsicheren Umgebungen. Die Arbeit kombinierte ein Teacher-Student-Policy-Framework mit LiDAR- und visuellen Beobachtungen, um die Robustheit bei wechselnden Sensordaten zu verbessern.

Das System wurde in ROS und Gazebo umgesetzt und auf Pioneer 3-DX sowie TurtleBot3 Waffle evaluiert. Untersucht wurde, wie sich eine mit reichhaltigerer Supervision trainierte Policy auf ein Student-Netzwerk mit eingeschraenkter Modalitaet uebertragen laesst, ohne die Entscheidungsqualitaet zu verlieren.

Wichtige Beitraege:

- Untersuchung von Teacher-Student-Lernen fuer Navigation bei variablen Sensoren
- Vergleich des Verhaltens LiDAR-basierter und vision-basierter Policies in Simulation
- Nachweis einer praxisnahen Pipeline zum Testen von Navigationsrobustheit in ROS und Gazebo

### Demo-Video

<video controls preload="metadata" style="width: 100%; border-radius: 1rem; border: 1px solid rgba(255, 255, 255, 0.15);">
  <source src="/assets/videos/thesis-linkedin.mp4" type="video/mp4" />
  Ihr Browser unterstuetzt das Video-Tag nicht.
</video>
