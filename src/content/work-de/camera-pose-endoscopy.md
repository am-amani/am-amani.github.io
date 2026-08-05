---
title: Echtzeit-Kamerapose und Tumorerkennung fuer Endoskopie
description: Eine Computer-Vision-Pipeline fuer Echtzeit-Kamerapose-Schaetzung und potenzielle Tumorerkennung in endoskopischen Bildern.
publishDate: 2023-12-01
tags:
  - Computer Vision
  - OpenCV
  - Echtzeit
---

Dieses Projekt kombinierte Kamerabewegungs-Tracking und endoskopische Bildanalyse in einer gemeinsamen Echtzeit-Pipeline.

Das System nutzte HSV-Filterung, Canny-Kantendetektion, Hough-Kreis-Transformation, Hintergrundsubtraktion und morphologische Operationen, um die Pose zu schaetzen und gleichzeitig moegliche Tumorregionen hervorzuheben.

Wichtige Schwerpunkte:

- Echtzeit-Bildverarbeitung unter praktischen Randbedingungen
- Robuste Detektion in verrauschten medizinisch aehnlichen Bildern
- Kombination aus geometrischen und erscheinungsbasierten Merkmalen in einem Workflow
