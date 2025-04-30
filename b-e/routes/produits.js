const express = require('express');
const router = express.Router();
const Produit = require('../models/produit');

// Récupérer tous les produits
router.get('/', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits", error: err });
  }
});

// Ajouter un produit
router.post('/', async (req, res) => {
  const { nom, prixUnitaire } = req.body;
  const produit = new Produit({ nom, prixUnitaire });

  try {
    await produit.save();
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l'ajout du produit", error: err });
  }
});

module.exports = router;
