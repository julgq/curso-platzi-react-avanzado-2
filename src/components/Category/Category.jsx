import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJaHpl.jpg";

// Componente nombrado
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);

