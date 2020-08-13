import users from "@/collectors/users";

export default async function ({ app }) {
  if (!app.$auth.loggedIn) {
    return;
  }

  const auth = app.$auth;

  const authStrategy = auth.strategy.name;
  if (authStrategy === 'facebook') {
    const token = auth.getToken(authStrategy).substr(7);

    try {
      const { data } = await users.facebook(token);
      auth.setToken('local', 'Bearer ' + data.token);
      setTimeout(async () => {
        auth.setStrategy('local');
        await setTimeout(async () => {
          await auth.fetchUser();
        });
      });
    } catch (e) {
      auth.logout();
    }
  }
  if (authStrategy === 'google') {
    const token = auth.getToken(authStrategy).substr(7);

    try {
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
