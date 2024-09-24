import { createConfig, http } from "wagmi";
import { polygon, linea } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [polygon, linea],
  transports: {
    [polygon.id]: http(),
    [linea.id]: http(),
  },
});
