import middleware from "./middleware";
import properly from "./properly";
import solnet from "./solnet";
import stay22 from "./stay22";
import blackbelts from "./blackbelts";
import fb from "./fb";
import trove from "./trove";
import archive from "./archive";

export const jobs = []
  .concat(stay22)
  .concat(blackbelts)
  .concat(fb)
  .concat(trove)
  .concat(middleware)
  .concat(properly)
  .concat(solnet)
  .concat(archive);
