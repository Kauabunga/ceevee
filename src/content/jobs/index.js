import middleware from "./middleware";
import properly from "./properly";
import solnet from "./solnet";
import fb from "./fb";
import trove from "./trove";
import archive from "./archive";

export const jobs = []
  .concat(fb)
  .concat(trove)
  .concat(middleware)
  .concat(properly)
  .concat(solnet)
  .concat(archive);
