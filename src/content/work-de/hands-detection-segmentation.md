---
title: Erkennung und Segmentierung menschlicher Haende
description: Ein kombinierter YOLOv5- und C++-Workflow zur Erkennung und Segmentierung menschlicher Haende.
publishDate: 2022-06-01
tags:
  - YOLOv5
  - C++
  - Bildverarbeitung
---

Dieses Projekt trainierte einen benutzerdefinierten YOLOv5-Detektor in PyTorch und kombinierte ihn mit einer C++-Segmentierungspipeline.

Die Segmentierungsstufe nutzte Konturen, Schwellwertverfahren und morphologische Operationen, um Handregionen nach der Detektion zu verfeinern.

Wichtige Schwerpunkte:

- End-to-End-Workflow fuer Detektion und Segmentierung
- Kombination aus gelerntem Detektor und klassischen Vision-Methoden
- Praxisnahe Implementierung in Python und C++
