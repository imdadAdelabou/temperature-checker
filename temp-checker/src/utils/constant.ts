import { activeHomeIcon, activeSeuilEditIcon, inactiveHomeIcon, inactiveSeuilEditIcon } from "../assets";
import NavBarItem from "./models/navBarItem";
import { BtnType } from "./types";

const APP_CONTENTS = {welcomeBack: "Bon retour", login: 'Se connecter', emailLabel: "Email", passwordLabel: "Mots de passe", connexionLabel: 'Connexion', 
registerLabel: 'Inscription',
firstNameLabel: "Prénom",
lastNameLabel: "Nom",
onRegister: "S'inscrire",
dashBoardLabel: 'Dashboard',
settingLabel: 'Paramètre',
hiLabel: 'Salut, ',
welcomeBackOnDashBoardLabel: 'Bon retour sur Temp Checker!',
temperatureLabel: 'Température',
humidityLabel: 'Humidité',
alerteLabel: 'Alerte',
newUserRegister: 'Pas de compte?',
registerYou: 'Inscris-toi?',
alreadyHaveAnAccount: 'Tu as déja un compte?',
logYou: 'Connecte-toi'
};


const navBarItemsContent = [new 
    NavBarItem(APP_CONTENTS.dashBoardLabel,  '/dashboard/index', activeHomeIcon, inactiveHomeIcon,),
   new  NavBarItem(APP_CONTENTS.settingLabel, '/dashboard/setting', activeSeuilEditIcon, inactiveSeuilEditIcon),
];

const loginBtnProps: BtnType = {
    content: APP_CONTENTS.connexionLabel,
    disable: false,
    action: () => {},
    customBgColor: 'bg-orangeVariant',
    isLoading: false,
}

const registerBtnProps: BtnType = {
    content: APP_CONTENTS.registerLabel,
    disable: false,
    isLoading: false,
    action: () => {}
}

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

export {APP_CONTENTS, loginBtnProps, registerBtnProps, containerAnimation, itemAnimation, navBarItemsContent};