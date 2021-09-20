import { flags } from "@oclif/command";

const { string } = flags;

export default {
  prefix: string({
    char: "p",
    description: "this string will be placed at the end of your files name",
  }),
  suffix: string({
    char: "s",
    description: "this string will be placed at the end of your files name",
  }),
};
