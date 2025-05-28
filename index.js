const fs = require('fs');

const requiredSections = ['#', 'Installation', 'Usage', 'License'];

function checkReadme(path = './README.md') {
  if (!fs.existsSync(path)) {
    console.log('❌ README.md not found.');
    return;
  }

  const content = fs.readFileSync(path, 'utf8');
  let score = 0;

  requiredSections.forEach(section => {
    if (content.includes(section)) {
      score += 25;
    } else {
      console.log(`⚠️ Missing section: ${section}`);
    }
  });

  console.log(`\n✅ README Quality Score: ${score}/100`);
}

checkReadme();
