const fs = require('fs');
const PDFParser = require('pdf2json');

const files = [
  'What We Do section.pdf', 
  'Sustainability section.pdf', 
  'Brands section.pdf', 
  'All Product Categories section.pdf', 
  'Contact section.pdf'
];

async function parsePdf(file) { 
  return new Promise((resolve) => { 
    const parser = new PDFParser(this, 1); 
    parser.on('pdfParser_dataReady', () => { 
      resolve(`\n---- ${file} ----\n` + parser.getRawTextContent()); 
    }); 
    parser.on('pdfParser_dataError', err => { 
      resolve(`\n---- ${file} ----\nERROR: ` + err.parserError); 
    }); 
    parser.loadPDF('../guides/' + file); 
  }); 
}

async function run() { 
  for(let f of files) { 
    console.log(await parsePdf(f)); 
  } 
}

run();
