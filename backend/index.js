const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://ale12:password@host:5432/catastrogeosat",
    "catastrog",
    {
      watchPg: true,
      ignoreRBAC: true, // Role Based Access Control (RBAC)    
      extendedErrors: ["errcode", "detail", "hint"],
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);

app.listen(process.env.PORT || 3000);