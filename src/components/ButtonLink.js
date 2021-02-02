import React from "react";
import { Link } from "gatsby";

export default function ButtonLink({ url, label, className }) {
  return (
    <Link to={url} className={className}>
      {label}
    </Link>
  );
}
