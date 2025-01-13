import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <div className="p-10">
      <h1>Hello World</h1>
      {session ? (
        <LogoutLink>
          <Button>Log out</Button>
        </LogoutLink>
      ) : (
        <div>
          <LoginLink>
            <Button>Login</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Register</Button>
          </RegisterLink>
        </div>
      )}
    </div>
  );
}
