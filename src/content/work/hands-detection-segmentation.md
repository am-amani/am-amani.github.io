---
title: Human Hands Detection and Segmentation
description: A combined YOLOv5 and C++ image-processing workflow for detecting and segmenting human hands.
publishDate: 2022-06-01
tags:
  - YOLOv5
  - C++
  - Image Processing
---

This project trained a custom YOLOv5 detector in PyTorch and paired it with a C++ segmentation pipeline.

The segmentation stage used contours, thresholding, and morphological operations to refine hand regions after detection.

Key focus points:

- End-to-end detection and segmentation workflow
- Combination of learned detection and classical vision methods
- Practical implementation in both Python and C++