const express = require('express');
const router = express.Router();
const Commande = require('../models/commande');

// Récupérer toutes les commandes
router.get('/', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.status(200).json(commandes);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des commandes", error: err });
  }
});

// Créer une nouvelle commande
router.post('/', async (req, res) => {
  const { client, date, lignes } = req.body;
  const commande = new Commande({ client, date, lignes });

  try {
    await commande.save();
    res.status(201).json(commande);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la création de la commande", error: err });
  }
});

module.exports = router;
