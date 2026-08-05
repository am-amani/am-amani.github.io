---
title: Bildkolorierung mit Conditional WGAN
description: Ein Conditional-WGAN in PyTorch mit U-Net-Generator fuer gesteuerte Kolorierung von Graustufenbildern.
publishDate: 2023-06-01
tags:
  - PyTorch
  - GANs
  - Deep Learning
---

Dieses Projekt nutzte ein Conditional Wasserstein GAN, um Graustufenbilder mit einem U-Net-Generator und Skip-Connections zu kolorieren.

Das Training umfasste mehr als 50.000 Bilder und fokussierte auf stabile, plausible Farbergebnisse bei gleichzeitiger Erhaltung der Szenenstruktur.

Wichtige Schwerpunkte:

- Konditionierte Bildgenerierung in PyTorch
- U-Net-Design fuer strukturierte Ausgabequalitaet
- Training im grossen Massstab und visuelle Evaluation der Ergebnisse
