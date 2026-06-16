import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

export default createServerEntry({
  fetch(request: Request, env: unknown, ctx: unknown) {
    return handler.fetch(request, env, ctx);
  },
});
