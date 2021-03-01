const { request, response } = require('express')
const { BayesClassifier } = require('natural')
const classifier = new BayesClassifier()
const train =  require('../database/train')
//const test = require('../database/test')

async function classifierController(text){

  train.forEach(item => {
    classifier.addDocument(item.text, item.label)
  })

  classifier.train()

  return classifier.classify(text);

}

module.exports = classifierController
