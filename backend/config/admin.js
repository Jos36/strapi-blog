module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92e5b3bd4030bb301f98a0bba787dfba'),
  },
});
