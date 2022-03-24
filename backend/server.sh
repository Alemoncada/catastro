npx postgraphile \
-c postgres://ale12:password@localhost/catastrogeosat \
--schema catastrogeosat \
--append-plugins @graphile-contrib/pg-simplify-inflector \
--enhance-graphiql \
--allow-explain \
--watch