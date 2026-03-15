# Wikiyum

Wikiyum est une plateforme d'apprentissage gamifiée qui transforme les articles de Wikipedia en un parcours interactif. Ce projet a été réalisé en 48 heures dans le cadre d'un Coding Sprint.

L'application utilise une métaphore culinaire pour structurer la progression pédagogique de l'utilisateur. Le parcours est divisé en trois étapes obligatoires et chronologiques :
Chaque jour, l'utilisateur ouvre une boîte contenant un "menu mystère" composé de trois thèmes à explorer sous forme d'une Entrée, d'un Plat et d'un Dessert.

---

## 🍽️ Déroulement du menu :
L'utilisateur doit valider chaque étape pour passer à la suivante (l'Entrée débloque le Plat, qui débloque le Dessert). Pour chaque étape, le flux est le suivant :

* **Question d'introduction :** Une question simple pour introduire le sujet.
* **Réponse et Anecdote :** Une page affichant la réponse détaillée à la question, suivie d'une anecdote complète sur le sujet.
* **Quiz à la fin des 3 étapes** ( permettant de gagner des expériences)

Une fois le menu terminé, l'utilisateur peut explorer les différents thèmes.

---

## 🎮 Profil et Gamification
La page de profil centralise la progression et les récompenses de l'apprenant:

*  **Sélection de thèmes :** Une bibliothèque pour choisir les sujets à aborder.
*  **Progression et Stats :** Suivi de l'avancement via un système de "flammes" (série de jours consécutifs) et de statistiques détaillées.
*  **Le "Garde-manger" :** Un espace de stockage pour retrouver les contenus validés.
*  **Système d’expérience** avec les niveaux qui débloquent les fonctionnalités ci-dessous :
*  **Badges et Récompenses :** Système de badges offrant des réductions réelles pour des événements, des visites ou des lieux culturels en fonction des centres d'intérêt et de l'expérience (XP) de l'utilisateur.
*  **Fonctionnalités déblocables :** le service incite à la progression régulière en débloquant des options selon le niveau de l'utilisateur (niveau 3 : accès à la fonctionnalité "Partager aux amis", niveau 5 : Accès aux réglages avancés comme le "Mode Nuit")

---

## 🎧 Sound Design
L'expérience utilisateur est enrichie par une dimension sonore spécifique :

*  **Signal d'engagement :** Un son encourageant est diffusé dès l'ouverture de l'application.
*  **Objectif :** Ce design sonore sert à motiver l'utilisateur et à marquer le début de sa session d'apprentissage quotidienne.
*  Lors des bonnes réponses dans le quiz

---

## 📱 Pourquoi une application Mobile ?

Le choix du format mobile s'est imposé car Wikiyum est conçu comme un rituel quotidien. Le smartphone permet d'apprendre rapidement lors de courtes sessions (transports, pauses), ce qui correspond parfaitement au format interactif de nos quiz et anecdotes. C'est l'outil le plus adapté pour encourager une progression régulière et consulter ses statistiques n'importe où.
On pourra retrouver un QR code sur toutes les pages afin faciliter l'accès à la version mobile. 

---

## 💻 Stack Technique

*  **Framework :** React.js pour la structure de l'application.
*  **Déploiement :** Netlify pour la mise en ligne du service.
*  **Gestion de version :** Git (Repository GitHub).
*  **Design :** Approche UX/UI sur Figma optimisée pour un usage mobile.

---
## 🎨 Design 
<img width="216" height="480" alt="image" src="https://github.com/user-attachments/assets/e46bf3fc-56ba-41b9-bfeb-8f9be2112dc0" />
<img width="216" height="483" alt="image" src="https://github.com/user-attachments/assets/b8395a15-bf69-49f8-8945-249f04789f4a" />
<img width="220" height="479" alt="image" src="https://github.com/user-attachments/assets/69d9ff77-0c0d-4346-a8e6-e92ba07dc175" />
<img width="205" height="2188" alt="image" src="https://github.com/user-attachments/assets/67bf1ef2-a08b-4b9e-8101-cec1a0b9fae0" />
<img width="146" height="1171" alt="image" src="https://github.com/user-attachments/assets/fb6662d7-e0fd-48a4-a840-23ae652d8cb4" />

*  Lien vers les maquettes: **https://www.figma.com/design/YfGPbnnGfcYiMmP47dxOGw/Maquettes-Wiki-Yum?node-id=151-1916&p=f&t=EWmOiMOlY6A5YvML-0







## 📂 Arborescence du Projet

```text
├── MenuPage.css
├── MenuPage.jsx
├── QuizPage/
│   ├── QuizPage.css
│   └── QuizPage.jsx
├── ZoomPage/
│   ├── ZoomPage.css
│   └── ZoomPage.jsx
├── styles/
├── App.jsx
├── main.jsx
├── router.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
