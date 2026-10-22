//     NOM ET PRENOM:  CHAFEI DJALLE Dalal
//         CLASSE:    L2 DataScience & BigData




// 1. Tableau de 5 utilisateurs

let utilisateur = [
    { prenom: "Ted", nom: "Tom", age: 21, statut: 1, role: "admin" },
    { prenom: "Alice", nom: "Diop", age: 30, statut: 1, role: "admin" },
    { prenom: "Diane", nom: "Jack", age: 25, statut: 0, role: "user" },
    { prenom: "Marie", nom: "Wer", age: 19, statut: 1, role: "user" },
    { prenom: "Lune", nom: "Terre", age: 45, statut: 0, role: "user" }
];


// 2. Fonction fléchée : admins actifs

const getadmin1 = () => {
    let T = utilisateur.filter(
        (u) => u.role === "admin" && u.statut === 1
    );

    console.log(T);
    return T;
};

getadmin1();


// 3. Afficher les informations d'un utilisateur

const getInfos = (utilisateur) => {
    let { prenom, role, age } = utilisateur;
    console.log(`${prenom} ${role} ${age}`);
};

getInfos(utilisateur[4]);


// 4. Tableau simplifié avec map et destructuration

const utilisateursSimplifies = utilisateur.map((u) => {
    let { prenom, nom, role } = u;
    return { prenom, nom, role };
});

console.log(utilisateursSimplifies);


// 5. Regrouper les utilisateurs par rôle avec reduce

const utilisateurParRole = utilisateur.reduce((acc, u) => {
    if (!acc[u.role]) {
        acc[u.role] = [];
    }

    acc[u.role].push(u);

    return acc;
}, {});

console.log(utilisateurParRole);


// 6. Trouver le premier utilisateur âgé de 25 ans

const trouverUtilisateur = () => {
    let resultat = utilisateur.find((u) => u.age === 25);
    console.log(resultat);
};

trouverUtilisateur();


// 7. Ajouter un utilisateur avec le spread operator

let equipe = [
    ...utilisateur,
    { prenom: "Kevine", nom: "Diallo", age: 22, statut: 0, role: "user" }
];

console.log(equipe);