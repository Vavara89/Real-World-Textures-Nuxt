import users from "@/collectors/users";

export default async function ({ app }) {

  const auth = app.$auth;

  const authStrategy = auth.strategy.name;
  if (authStrategy === 'facebook') {

    try {
      const token = auth.getToken(authStrategy).substr(7);
      const { data } = await users.facebook(token);
      auth.setToken('local', 'Bearer ' + data.token);
      setTimeout(async () => {
        auth.setStrategy('local');
        console.log('auth');
        await setTimeout(async () => {
          console.log('login');
          await auth.fetchUser();
        });
      });
    } catch (e) {
      console.log('something wrong');
      await auth.logout();
    }
  }
  if (authStrategy === 'google') {

    try {
      const token = auth.getToken(authStrategy).substr(7);
      const { data } = await users.google(token);
      auth.setToken('local', 'Bearer ' + data.token);
      setTimeout(async () => {
        auth.setStrategy('local');
        await setTimeout(async () => {
          await auth.fetchUser();
        });
      });
    } catch (e) {
      await auth.logout();
    }
  }
}
