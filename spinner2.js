const animator = "|/-\\|/-\\|";
let i = 0;
const spinner = () => {
  setTimeout(() => {
    process.stdout.write(`\r${animator[i]}    `);
    i += 1;
    if (i < animator.length) {
      spinner();
    }
  
    if (i === animator.length) process.stdout.write('\n');
  }, 200);
};

spinner();