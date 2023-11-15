import { exec } from 'child_process';

const componentNames = ['login', 'register', 'footer', 'details', 'rating', 'profile', 'settings','notifications'];

componentNames.forEach(name => {
  const command = `ng g c ${name} --skip-tests`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generating component ${name}: ${error.message}`);
      return;
    }
    console.log(`Component ${name} generated successfully:\n${stdout}`);
  });
});
