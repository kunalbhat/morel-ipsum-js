var dictionary = ['morel ipsum', 'crimini', 'portabella', 'maitake', 'shiitake', 'enoki', 'oyster', 'beech', 'chanterelle', 'boletus edulis', 'cantharellus cibarius', 'cantharellus tubaeformis', 'clitocybe nuda', 'cortinarius caperatus', 'craterellus cornucopioides', 'grifola frondosa', 'gyromitra esculenta', 'hericium erinaceus', 'hydnum repandum', 'lactarius deliciosus', 'morchella', 'tricholoma matsutake', 'amanita caesarea', 'armillaria mellea', 'boletus badius', 'chroogomphus rutilus', 'calvatia gigantea', 'calocybe gambosa', 'clavariaceae', 'clavulinaceae', 'coprinus comatus', 'fistulina hepatica', 'cortinarius variicolor', 'hygrophorus chrysodon', 'lactarius salmonicolor', 'lactarius volemus', 'lactarius subdulcis', 'laetiporus sulphureus', 'leccinum aurantiacum', 'leccinum scabrum', 'lepiota procera', 'amanita muscaria', 'coprinopsis atramentaria', 'gyromitra esculenta', 'verpa bohemica', 'auricularia auricula-judae', 'suillus bovinus', 'suillus granulatus', 'suillus luteus', 'suillus tomentosus', 'tricholoma terreum', 'rhizopogon luteolus', 'russula', 'sparassis crispa']

morelipsum = [];

var generateSentence = function() {
    var words = Math.floor((Math.random() * 10) + 1);
    var sentence = "";

    for (i=0; i<words; i++) {
        var word = dictionary[Math.floor(Math.random() * dictionary.length)];

        sentence += word + " ";
    }

    sentence = sentence.trim();
    sentence = sentence + ".";

    return sentence;
}

var generateParagraph = function(count) {
    for (i=0; i<count; i++) {
        var sentences = Math.floor((Math.random() * 10) + 1);

        var paragraph = "";

        for (i=0; i<sentences; i++) {
            var sentence = generateSentence();

            paragraph += sentence + " ";
        }

        paragraph = paragraph.trim();

        morelipsum.push(paragraph);
    }

    return morelipsum;
}

$(document).ready(function() {
    morel = generateParagraph(10);

    morel.forEach(function(word) {
        $('#content').append('<p>' + word + '</p>');
    });
});
