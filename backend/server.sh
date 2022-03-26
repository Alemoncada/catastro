npx postgraphile \
-c postgres://ale12:password@localhost/catastrogeosat \
--schema catastrogeosat \
--append-plugins @graphile-contrib/pg-simplify-inflector,postgraphile-plugin-connection-filter \
--enhance-graphiql \
--allow-explain \
--watch
--owner-connection postgres:///catastropgeosat \
--Access-Control-Allow-Origin:*