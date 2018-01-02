#! /usr/bin/env node
const program = require('commander');
const fs = require('fs-extra');
const path = require('path');

const ls = fs.lstat;
// THIS NEEDS SOME SERIOUS CLEANING LATER ON!
program
  .command('begin')
  .description('Initiates React Scout')
  .action(() => {
    const workingDir = process.cwd();

    ls(workingDir, (errWD, wd) => {
      if (errWD) {
        console.log(errWD);
      }
      if (!wd.isDirectory()) {
        throw new Error(`${workingDir} is not a valid directory!`);
      } else {
        const nodeFolder = path.join(workingDir, '/node_modules');

        ls(nodeFolder, (errNode, modFolder) => {
          if (errNode) {
            console.log(errNode);
          } else {
            if (!modFolder.isDirectory()) {
              throw new Error(`${nodeFolder} is not a valid directory!`);
            } else {
              const reactFolder = path.join(nodeFolder, '/react');
              ls(reactFolder, (reactErr, reactDir) => {
                if (reactErr) {
                  throw reactErr;
                } else {
                  if (!reactDir.isDirectory()) {
                    throw new Error(`${reactFolder} is not a valid directory!`);
                  } else {

                    fs.copy(path.join(__dirname, '/lib'), path.join(reactFolder, '/lib'));

                    const temp = path.join(reactFolder, '/scout-temp');

                    fs.ensureDir(temp)
                      .then(() => {
                        const origIndex = path.join(reactFolder, '/index.js');
                        const tempIndex = path.join(temp, '/index.js');
                        const replIndex = path.join(__dirname, '/rind/index.js');
                        fs.copy(origIndex, tempIndex)
                          .then(() => console.log('Backed up react/index.js'))
                          .catch(err => console.log(err));

                        fs.copy(replIndex, origIndex)
                          .then(() => console.log('rind/index.js => react/index.js'))
                          .catch(err => console.log(err));

                        // React DOM references React before we are done
                        // wrapping it so we will make a copy of React
                        // development and make react-dom require from
                        // that copy instead. Solution until we move away
                        // from react-dom

                        const ORC = path.join(nodeFolder, '/react-dom/cjs/reactCopy.js');
                        const RDD = path.join(nodeFolder, '/react-dom/cjs/react-dom.development.js');
                        const OR = path.join(reactFolder, '/cjs/react.development.js');

                        fs.copy(OR, ORC)
                          .then(() => console.log('/cjs/dev => react-dom/cjs/copy'))
                          .catch(err => console.log(err));

                        fs.readFile(RDD, 'utf8')
                          .then((data) => {
                            const aData = data.replace(/require\('react'\)/, "require('./reactCopy.js')");
                            fs.writeFile(RDD, aData, 'utf8')
                              .then(() => console.log('Changed react-dom require(react)'))
                              .catch(err => console.log(err));
                            return null;
                          })
                          .catch(err => console.log(err));
                      })
                      .catch(err => console.log(err));
                  }
                }
              });
            }
          }
        });
      }
    });
    console.log('Command Line "react-scout done" to remove react-scout from your project');
  });
program
  .command('done')
  .description('Ends React Scout session')
  .action(() => {
    const workingDir = process.cwd();
    const modulesDir = path.join(workingDir, '/node_modules');

    fs.remove(path.join(modulesDir, '/react-dom/cjs/reactCopy.js'));

    const RDD = path.join(modulesDir, '/react-dom/cjs/react-dom.development.js');

    fs.readFile(RDD, 'utf8', (err, data) => {
      if (err) return console.log(err);
      const aData = data.replace(/'\.\/reactCopy.js'/, "'react'");

      fs.writeFile(RDD, aData, 'utf8', (e) => {
        if (e) console.log(e);
      });
    });

    fs.remove(path.join(modulesDir, '/react/lib'));

    const r = path.join(modulesDir, '/react');
    const t = path.join(path.join(r, '/scout-temp'));
    const rIndex = path.join(r, '/index.js');
    const tIndex = path.join(t, '/index.js');

    fs.copy(tIndex, rIndex, (err) => {
      if (err) return console.log(err);
      fs.remove(t);
    });
  });

program.parse(process.argv);
