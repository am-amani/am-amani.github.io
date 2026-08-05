---
title: Real-Time Camera Pose and Tumor Detection for Endoscopy
description: A computer-vision pipeline for real-time camera pose estimation and potential tumor detection in endoscopic imagery.
publishDate: 2023-12-01
tags:
  - Computer Vision
  - OpenCV
  - Real-Time
---

This project combined camera-motion tracking and endoscopic image analysis in a single real-time pipeline.

The system used HSV filtering, Canny edge detection, Hough Circle Transform, background subtraction, and morphological operations to estimate pose while also highlighting possible tumor regions.

Key focus points:

- Real-time image processing under practical constraints
- Robust detection from noisy medical-style imagery
- Combining geometric and appearance-based cues in one workflow