---
title: Image Colorization with Conditional WGAN
description: A PyTorch conditional WGAN with a U-Net generator for controlled grayscale-to-color image generation.
publishDate: 2023-06-01
tags:
  - PyTorch
  - GANs
  - Deep Learning
---

This project used a conditional Wasserstein GAN to colorize grayscale images with a U-Net generator and skip connections.

Training covered more than 50,000 images and focused on generating stable, plausible color outputs while preserving scene structure.

Key focus points:

- Conditional image generation in PyTorch
- U-Net design for structured output quality
- Large-scale training and visual evaluation of results