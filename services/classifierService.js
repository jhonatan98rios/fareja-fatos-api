const { BayesClassifier } = require('natural')
/* const classifier = new BayesClassifier()
const train = require('../database/train-list') */
const { promisify } = require('util');

async function classifierService(text) {

  
  ///////// No previously trained iteration /////////

  /* 
  train.forEach(item => classifier.addDocument(item.text, item.label))

  classifier.train()

  classifier.save('./database/classifier.json', function(err, classifier) {
    if (err) { console.log(err) }
  });

  return classifier.classify(text); 
  */


  ///////// Previously trained iteration /////////

  // Using promisify 
  const promiseClassifier = promisify(BayesClassifier.load)

  return promiseClassifier('./database/classifier.json', null)
  .then(classifier => {
    return classifier.classify(text) 
  })
}

module.exports = classifierService
