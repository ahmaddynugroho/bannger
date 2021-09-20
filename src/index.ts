import { Command } from "@oclif/command";
import { readdir, rename } from "fs";
import { cwd } from "process";

import flags from "./flags";

class Bannger extends Command {
  static flags = flags;

  async run() {
    const { flags } = this.parse(Bannger);

    readdir(cwd(), (err, files) => {
      if (err) return console.log("Unable to scan direcotry");

      // rename files to "[suffix]file[prefix].extension"
      if (flags.suffix || flags.prefix) {
        files.forEach((file) => {
          const fileArr = file.split(".", 2);
          rename(
            `${cwd()}/${file}`,
            `${cwd()}/${flags.prefix || ""}${fileArr[0]}${flags.suffix || ""}.${
              fileArr[1]
            }`,
            (err) => {
              if (err) console.log(`ERROR: ${err}`);
            }
          );
        });
      }
    });
  }
}

export = Bannger;
