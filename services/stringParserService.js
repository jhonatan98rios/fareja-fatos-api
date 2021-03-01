const keyword_extractor = require("keyword-extractor");

function stringParserService(string) {

  const keywords = keyword_extractor.extract(string, {
    language: "portuguese",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: true,
    return_chained_words: true
  });

  return keywords.filter( key => (key.length > 15)).slice(0, 3)  
}

module.exports = stringParserService