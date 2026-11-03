---
titre: "Optimisation de contrôleurs de vol FPV : asservissement PID et télémétrie"
description: "Analyse technique du traitement des signaux gyroscopiques, filtrage dynamique notch et boucle d'asservissement PID sur microcontrôleurs STM32 pour drones FPV haute performance."
date: 2026-09-28
tags: ["Drones", "FPV", "Embarqué", "Robotique", "C++"]
tempsLecture: "7 min"
brouillon: false
---

Dans le pilotage de drones FPV (First Person View) de compétition ou freestyle, la précision de réponse aux commandes manuelles dépend directement de la fréquence de rafraîchissement de la boucle d'asservissement et de la qualité du filtrage des signaux capteurs.

## 1. La chaîne d'acquisition et de traitement

Un contrôleur de vol moderne repose sur des microcontrôleurs cadencés à haute fréquence (STM32 F4, F7 ou H7) interfacés en SPI à des centrales inertielles (IMU) intégrant accéléromètres et gyroscopes triaxiaux :

1. **Échantillonnage de l'IMU :** lecture brute à 8 kHz ou 3.2 kHz.
2. **Filtrage logiciel :** élimination des fréquences de résonance mécanique induites par les moteurs brushless et les hélices (généralement entre 150 Hz et 500 Hz).
3. **Calcul de l'erreur :** comparaison de la consigne du pilote (RC Frame) avec la vitesse angulaire réelle (Gyro Rate).
4. **Calcul PID & D-Term :** génération des corrections appliquées aux protocoles de communication avec les variateurs électroniques (ESC) via **DShot300/600**.

## 2. Le défi du bruit mécanique et le filtrage dynamique

Le défi majeur réside dans la séparation du bruit moteur et du signal utile de mouvement :

- **Filtres passe-bas (Lowpass) :** introduisent une latence de phase préjudiciable à la réactivité.
- **Filtres à encoche dynamiques (Dynamic Notch / RPM Filtering) :** en récupérant la télémétrie bidirectionnelle de la vitesse réelle de chaque moteur (eRPM), le firmware applique des filtres résonants centrés en temps réel sur les harmoniques exactes du rotor.

```
Signal Gyro Brut  --->  [ Filtre Notch Dynamique (RPM) ]  --->  [ Algorithme PID ]  --->  Signal DShot
                                  ^
                                  |
               Télémétrie ESC (vitesse moteur tr/min)
```

## 3. Retours d'expérience et réglages

Grâce à ce traitement adaptatif, la composante dérivée (**D-Term**) peut être augmentée sans provoquer de surchauffe des moteurs, offrant un verrouillage trajectoire net sans oscillation parasite (*propwash*).
