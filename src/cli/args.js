const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArguments = {};
  
    args.forEach((arg, index) => {
      if (index % 2 === 0) {
        const propName = arg.slice(2);
        parsedArguments[propName] = args[index + 1];
      }
    });
  
    Object.entries(parsedArguments).forEach(([propName, value]) => {
      console.log(`${propName} is ${value}`);
    });
  };
  
  parseArgs();
  